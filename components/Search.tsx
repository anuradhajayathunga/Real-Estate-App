import React, { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { useDebouncedCallback } from "use-debounce";

import icons from "@/constants/icons";
import { router, useLocalSearchParams, usePathname } from "expo-router";

const Search = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  const debouncedSearch = useDebouncedCallback((text: string) => {
    router.setParams({ query: text });
  }, 500);

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  return (
    <View className="flex items-center justify-center w-full mt-5">
      <View className="flex flex-row items-center justify-between w-11/12 px-4 py-4 border rounded-full bg-primary-100 border-black-100/20">
        <View className="z-50 flex flex-row items-center justify-start flex-1">
          <Image source={icons.search} className="size-5" />
          <TextInput
            value={search}
            onChangeText={handleSearch}
            placeholder="Search for anything"
            className="flex-1 ml-2 text-sm font-rubik text-black-300"
          />
        </View>

        <TouchableOpacity>
          <Image source={icons.filter} className="size-5" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
