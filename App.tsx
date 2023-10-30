import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import "./global.css";
import {AppInputField} from "./lib/common/components/AppInputField";
import {Main} from "./lib/common/components/Main";
import React from "react";

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
        <Main>
            <AppInputField/>
        </Main>
    );
}
