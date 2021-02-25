import React from "react";
import { View, StyleSheet } from "react-native";

import ToggleThemeButton from "../components/ToggleThemeButton";
import PriceShow from "../components/PriceShow";
import useApiResults from "../hooks/useApiResults";

import globalStyle from "../styles/globalStyle";

const HomeScreen = ({ theme, toggleTheme }) => {

    const bitPrice = useApiResults(); 
    const styleWrapper = theme === 'dark' ? globalStyle.darkMode : globalStyle.lightMode;
    

    return(
            <View style={styleWrapper}>
                <View style={styles.container}>
                    <ToggleThemeButton theme={theme} toggleTheme={toggleTheme} />
                    <PriceShow results={bitPrice} theme={theme} />
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
     
    }
});

export default HomeScreen;