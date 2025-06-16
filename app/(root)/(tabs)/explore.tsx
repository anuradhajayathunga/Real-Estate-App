import { Card } from "@/components/Cards";
import Filters from "@/components/Filters";
import NoResults from "@/components/NoResults";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import { getLatestProperties, getProperties } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { useAppwrite } from "@/lib/useAppwrite";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
// import seed from "@/lib/seed";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { user } = useGlobalContext();
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  const { data: latestProperties, loading: latestPropertiesLoading } =
    useAppwrite({
      fn: getLatestProperties,
    });

  const {
    data: properties,
    refetch,
    loading,
  } = useAppwrite({
    fn: getProperties,
    params: {
      filter: params.filter!,
      query: params.query!,
      limit: 100,
    },
    skip: true,
  });
  useEffect(() => {
    refetch({
      filter: params.filter!,
      query: params.query!,
      limit: 100,
    });
  }, [params.filter, params.query]);

  const handleCardPress = (id: string) => router.push(`/properties/${id}`);
  return (
    <SafeAreaView className="h-full bg-white">
      <FlatList
        data={properties} //properties
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handleCardPress(item.$id)} />
        )} // Replace with your card component <Card/>
        keyExtractor={(item) => item.$id} // Unique key for each item
        numColumns={2} // Display items in two columns
        contentContainerClassName="pb-3100"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          loading ? (
            <View className="flex items-center my-5">
              <Text className="mt-5 text-2xl font-rubik-bold text-primary-300">
                Loading...
              </Text>
            </View>
          ) : (
            <NoResults />
          )
        }
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <TouchableOpacity
                onPress={() => router.back()}
                className="flex flex-row items-center justify-center rounded-full bg-primary-200 size-11"
              >
                <Image source={icons.backArrow} className="size-5" />
              </TouchableOpacity>
              <Text className="text-xl font-rubik-bold text-black-200">
                Discover Your Property
              </Text>
              {user && (
                <Text
                  className="text-xl font-rubik-semibold text-primary-300"
                  onPress={() => router.push("/properties/new")}
                >
                  <Image source={icons.send} className="mr-1 size-5" />
                </Text>
              )}
            </View>
            <Search />
            <View className="mt-5 ">
              <Filters />
              <Text className="mt-3 text-sm font-rubik-semibold text-black-200">
                Found {properties?.length} results
              </Text>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}
