import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-url-polyfill/auto";
import RestaurantScreen from "./screens/RestaurantScreen";
import BasketScreen from "./screens/BasketScreen";
import { store } from "./store";
import { Provider } from "react-redux";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import Delivery from "./screens/Delivery";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            {/* screens */}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen
              name="Basket"
              component={BasketScreen}
              options={{
                presentation: "modal",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="PreparingOrderScreen"
              component={PreparingOrderScreen}
              options={{
                presentation: "fullScreenModal",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Delivery"
              component={Delivery}
              options={{
                presentation: "fullScreenModal",
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
