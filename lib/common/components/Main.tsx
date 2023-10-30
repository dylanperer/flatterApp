import React, {PropsWithChildren} from "react";
import {View} from "react-native";

export const Main: React.FC<PropsWithChildren<{}>> = (props) => {
    return <View className="bg-stone-50 w-full h-full flex justify-center items-center">
        {props.children}
    </View>
}