import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import { useGlobalContext } from "@/lib/global-provider";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { user, refetch } = useGlobalContext();
  return (
    <SafeAreaView className="h-full bg-white">
      {/* // FlatList is used to render a list of items, such as cards or featured items. like a scrollable list virtical or horizontal */}
      {/* The ListHeaderComponent prop allows you to render a header at the top of the list. */}
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Text className="pr-20">Hii</Text>} // Replace with your card component <Card/>
        keyExtractor={(item) => item.toString()} // Unique key for each item
        numColumns={2} // Display items in two columns
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row items-center">
                <Image
                  source={{ uri: user?.avatar }}
                  className="rounded-full size-12"
                />
                <View className="flex flex-col items-start justify-center ml-2">
                  <Text className="text-xs font-rubik-light">
                    Good Morning ☺️
                  </Text>
                  <Text className="text-base capitalize font-rubik-medium text-black-300">
                    {user?.name || "John Doe"}
                  </Text>
                </View>
              </View>
              <Image source={icons.bell} className="size-6" />
            </View>
            <Search />
            <View className="my-5 ">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-primary-300">
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-semibold text-black-300">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="flex flex-row gap-5 mt-3">
                {/* Here you would map through your featured cards */}
                <Text className="text-base font-rubik-semibold text-black-300">
                  Featured Cards
                </Text>
              </View>
              <FlatList
                data={[1, 2, 3]}
                renderItem={({ item }) => <Text>Guys..!</Text>}
                keyExtractor={(item) => item.toString()}
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="flex gap-5 mt-3"
              />
            </View>
            <View className="my-5 ">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-primary-300">
                  Our Recommendation
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-semibold text-black-300">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>
              <Filters />
              <View className="flex flex-row gap-5 mt-3">
                {/*  Here you would map through your recommendation cards */}
                <Text className="text-base font-rubik-semibold text-black-300">
                  Recommendation Cards
                </Text>
              </View>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}
