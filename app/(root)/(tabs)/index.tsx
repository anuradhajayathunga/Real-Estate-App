import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="items-center justify-center flex-1 bg-gray-100">
      <Text className="text-2xl font-semibold text-blue-500">
        Hello from NativeWind + World...! 🌟
      </Text>
      <Link href="/sign-in">Sign in</Link>
    </View>
  );
}
