import React, { useState, useEffect } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { useDebouncedCallback } from "use-debounce";
import icons from "@/constants/icons";
import { router, useLocalSearchParams } from "expo-router";

const Search = () => {
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();
  const [search, setSearch] = useState(params.query || "");

  // Update local state when params change
  useEffect(() => {
    setSearch(params.query || "");
  }, [params.query]);

  const debouncedSearch = useDebouncedCallback((text: string) => {
    // Preserve existing filter parameter while updating query
    const newParams: { query?: string; filter?: string } = {
      query: text.trim() || undefined, // Remove empty strings
    };
    
    // Preserve existing filter if it exists
    if (params.filter) {
      newParams.filter = params.filter;
    }

    router.setParams(newParams);
  }, 500);

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  const handleClear = () => {
    setSearch("");
    debouncedSearch("");
  };

  return (
    <View className="flex items-center justify-center w-full mt-5">
      <View className="flex flex-row items-center justify-between w-full px-4 py-4 mt-5 border rounded-full bg-accent-100 border-primary-200">
        <View className="z-50 flex flex-row items-center justify-start flex-1">
          <Image source={icons.search} className="size-5" />
          <TextInput
            value={search}
            onChangeText={handleSearch}
            placeholder="Search for anything"
            className="flex-1 ml-2 text-sm font-rubik text-black-300"
            returnKeyType="search"
            onSubmitEditing={() => debouncedSearch(search)}
          />
          {search && search.length > 0 && (
            <TouchableOpacity onPress={handleClear} className="ml-2">
              <Image source={icons.backArrow } className="size-4" />
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity>
          <Image source={icons.filter} className="size-5" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;