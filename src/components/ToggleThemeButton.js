import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const Toggle = ({ theme, toggleTheme }) => {
    const iconName = theme === 'dark' ? 'sun' : 'moon';  
    const iconColor = theme === 'dark' ? 'white' : 'black';
    
    return(
        <TouchableOpacity onPress={() => toggleTheme()}>
            <Feather name={iconName} color={iconColor} size={35} style={styles.button} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
        marginTop: 10,
        marginRight: 10
    }
});

export default Toggle;