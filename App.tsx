import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Lists from "./app/screens/Lists";

export default function App() {
	return (
		<View style={styles.container}>
			<Lists />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
