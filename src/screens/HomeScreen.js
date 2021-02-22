import React from "react";
import { View, StyleSheet } from "react-native";

import PriceShow from "../components/PriceShow";
import useApiResults from "../hooks/useApiResults";

const HomeScreen = () => {

    const bitPrice = useApiResults(); 

    return(
        <View style={styles.container}>
            <PriceShow results={bitPrice} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "90%",
        marginLeft: "5%"
    }
});

export default HomeScreen;