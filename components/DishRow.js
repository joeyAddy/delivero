import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

const DishRow = ({ id, name, description, price, image }) => {
  return (
    <TouchableOpacity className="bg-white border p-4 border-gray-200">
      <View className="flex-row">
        <View className="flex-1 pt-2">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">{description}</Text>
          <Text className="text-gray-400">
            <Currency quantity={price} currency="GBP" />
          </Text>
        </View>
        <View>
          <Image
            style={{
              borderWidth: 1,
              borderColor: "#F3F3F4",
            }}
            source={{
              uri: urlFor(image).url(),
            }}
            className="h-20 w-20 bg-gray-300"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DishRow;
