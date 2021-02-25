import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDarkMode } from "./src/hooks/useDarkMode";

import HomeScreen from "./src/screens/HomeScreen";


const App = () => {
  const Stack = createStackNavigator();
  const [theme, toggleTheme] = useDarkMode();
  

  
  const headerOptions = theme === 'dark' ? {
    headerStyle: {
      backgroundColor: '#00001c',
      shadowRadius: 0,
      shadowOffset: {
        height: 0
      }
    },
    headerTitleStyle: {
      color: '#ff5019',
    }
  } : {
    headerStyle: {
      backgroundColor: 'white',
      shadowRadius: 0,
      shadowOffset: {
        height: 0
      }
    },
    headerTitleStyle: {
      color: '#000'
    }
  }

  return (
    <NavigationContainer>
        <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
      <Stack.Navigator>
        <Stack.Screen 
          name="Bitcoin Task" 
          component={(props) => (
          <HomeScreen {...props} theme={theme} toggleTheme={toggleTheme} />
          )}
          options={headerOptions}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
