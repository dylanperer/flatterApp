import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./global.css";

// Ensure we import the CSS for Tailwind so it's included in hot module reloads.
//@ts-ignore
const ctx = require.context(
    // If this require.context is not inside the root directory (next to the package.json) then adjust this file path
    // to resolve correctly.
    './node_modules/.cache/expo/tailwind'
);
if (ctx.keys().length) ctx(ctx.keys()[0]);

export default function App() {
  return (
    <View className={"bg-red-500 flex h-full w-full"}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
