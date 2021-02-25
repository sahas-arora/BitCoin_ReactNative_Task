import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { useDarkMode } from "../hooks/useDarkMode";



const Header = () => {
    const [theme] = useDarkMode();

    console.log("theme right now  :", theme);
    return(
        <View style={styles.header}>
            <FontAwesome name="bitcoin" size={20} color="white" />
            <View>
                <Text style={styles.headerText}>Bitcoin Prices</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around', 
        alignItems: 'center',
        backgroundColor: '#181818'
    },
    headerText: {
       color: '#ff5019' 
    }
});

export default Header;