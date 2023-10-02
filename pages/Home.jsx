import React from "react";
import { View, Text } from "react-native";
import { ScreenHeaderBtn } from "../components/ScreenHeaderBtn";
// import { Stack } from "expo-router";
const Home = () => {
	return (
		<View>
			{/* <Stack.Screen
				options={{
					headerStyle: { backgroundColor: "#000000" },
					headerShadowVisible: true,
					headerLeft: () => <ScreenHeaderBtn text="LeftBtn" />,
					headerRight: () => <ScreenHeaderBtn text="RightBtn" />,
					headerTitle: "Home",
				}}
			/> */}
			<Text>Home</Text>
		</View>
	);
};

export default Home;
