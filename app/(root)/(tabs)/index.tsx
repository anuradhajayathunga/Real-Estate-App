import Search from "@/components/Search";
import icons from "@/constants/icons";
import { useGlobalContext } from "@/lib/global-provider";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { user, refetch } = useGlobalContext();
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image
              source={{ uri: user?.avatar }}
              className="rounded-full size-12"
            />
            <View className="flex flex-col items-start justify-center ml-2">
              <Text className="text-xs font-rubik-light">Good Morning ☺️</Text>
              <Text className="text-base font-rubik-medium text-black-300 capitalized">
                {user?.name || "John Doe"}
              </Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6" />
        </View>
      </View>
      <Search />
      <View className="mx-2 my-5">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl font-rubik-bold text-primary-300">
            Featured
          </Text>
          <TouchableOpacity>
            <Text className="text-base font-rubik-semibold text-black-300">
              See All
            </Text>
          </TouchableOpacity>
          <View className="flex flex-row gap-5 mt-5">
          <Text className="text-base font-rubik-semibold text-black-300">
            Featured Cards
          </Text>
        </View>

        
        </View>
      </View>
      {/* <FeaturedCard />
      <Card/> */}
      {/* Render Featured Cards */}
    </SafeAreaView>
  );
}
