import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./pages/Home";
import { ScreenHeaderBtn } from "./components/ScreenHeaderBtn";
// import { Stack } from "expo-router";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			{/* <Stack.Screen
				options={{
					headerStyle: { backgroundColor: "#000000" },
					headerShadowVisible: true,
					headerLeft: () => <ScreenHeaderBtn text="LeftBtn" />,
					headerRight: () => <ScreenHeaderBtn text="RightBtn" />,
					headerTitle: "Home",
				}}
			/> */}
			<Text>Hpme</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFF7",
	},
	titile: {
		fontSize: 20,
		color: "red",
	},
	paraGraph: {
		fontSize: 15,
		color: "blue",
	},
});
