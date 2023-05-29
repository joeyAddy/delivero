import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWith,
} from "../features/basketSlice";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWith(state, id));

  const handleAddToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const handleRemoveToBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setIsPressed(!isPressed);
        }}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
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

      {isPressed && (
        <View
          className={`bg-white px-4 ${
            isPressed && "border border-gray-200 border-t-0 mb-3"
          }`}
        >
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              disabled={!items.length}
              onPress={handleRemoveToBasket}
            >
              <MinusCircleIcon
                color={items.length > 0 ? "#00CCBB" : "gray"}
                size={35}
              />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={handleAddToBasket}>
              <PlusCircleIcon color="#00CCBB" size={35} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
