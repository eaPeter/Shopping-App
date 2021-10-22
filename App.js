import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput , Button} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Screens/Login.js";
import Home from "./Screens/Home.js";
import Cart from "./Screens/Cart.js";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>An Amazement</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <MainNavigator.Navigator
          screenOptions={{ headerShown: true ,  }}
          // initialRouteName=""
        >
          <MainNavigator.Screen name="Login" component={Login} />
          <MainNavigator.Screen name="Home" component={Home} />
          <MainNavigator.Screen name="Cart" component={Cart} />
         
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}


const Cat = (props) => {
  const[name, setName] = useState(null);
  const[age, setAge] = useState(null);
  return(
    <View style = {styles.container}>
      {/* <Text>Hello,I go by name {props.name}, I am {myAge} years old. {myAge > 18 ? 'I am an adult' : 'I am yet to be an adult'}</Text> */}
      <Text>Enter Name</Text>
      <TextInput placeholder = 'Enter your name'
      onChangeText={setName}/>
      <Text>Enter Age</Text>
      <TextInput placeholder = 'Enter age'
      onChangeText = {setAge}/>
      {/* <Button onPress={() => setMyAge(myAge+1)} title='Increase Age'/> */}
      <Button onPress={() => alert('Name: ' + name + '\n' + 'Age: ' + age)} title='OK'/>
    </View>
  );
}
// const App = () => {
//   return(
//     <View style = {styles.container}>
//       <Cat name = 'Agartha'/>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
