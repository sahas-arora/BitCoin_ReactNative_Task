import React from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const PriceShow = ({ results }) => {

    const renderPrices = ({ item }) => {
        let styleOptions = {
            "USD": {
               icon: <FontAwesome name="usd" size={24} color="rgba(0,0,0,0.6)" />, 
               color: ['#fbc2eb', '#a6c1ee']
            },
            "GBP": {
                icon: <FontAwesome5 name="pound-sign" size={24} color="rgba(0,0,0,0.6)" />,
                color:  ['#4facfe', '#00f2fe']   
            },
            "EUR": {
                icon: <FontAwesome5 name="euro-sign" size={24} color="rgba(0,0,0,0.6)" />,
                color: ['#8fd3f4', '#84fab0']
            } 
        };
    
        return(
            <View style={styles.child_container}>
              <LinearGradient
                    // Background Linear Gradient
                    start={{x: 0, y:0.5}}
                    end={{x: 1, y: 0.5}}
                    colors={styleOptions[item.code].color}
                    style={styles.background}
                />
                <Text>
                    {item.code} ({item.description})
                </Text>
                <View style={styles.viewStyle}>
                    {styleOptions[item.code].icon} 
                        <Text style={styles.textStyle}>
                        {item.rate}
                        </Text>
                </View>   
            </View>
        );
    }


    return(
        <View styles={styles.parent_container}>
        <FlatList
            data={results}
            keyExtractor={(price) => price.code}
            renderItem={renderPrices}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    parent_container: {
        display: "flex",
    },
    child_container: {
        display: "flex",
        marginTop: 20,
        borderRadius: 6,
        padding: 10,
        position: 'relative'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: 4
    },
    viewStyle: {
        display: "flex",
        flexDirection: "row",
        marginTop: 10, 
        justifyContent: "flex-start"
    },
    textStyle: {
        marginTop: -3, 
        fontSize: 25,
        marginLeft: 10, 
        color:"rgba(0,0,0,0.8)"
    }
})


export default PriceShow;