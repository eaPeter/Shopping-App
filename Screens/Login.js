
import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export default function Login(params) {
    const navigation = params.navigation;
    return (
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          paddingHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            //transform: [{ rotate: "-45deg" }],
            borderRadius: 10,
            marginBottom: 10,
            width: 200,
            height: 200,
          }}
          source={require("../Images/blue-logo.png")}
        />
        <Text style={{ fontSize: 20, color: "grey" }}>Humbly welcomed to</Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Cloud Mall</Text>
        <View style={{}}>
          <TextInput
            style={{
              textAlign: "center",
              padding: 10,
              marginTop: 30,
              borderRadius: 10,
              borderWidth: 0.7,
              paddingHorizontal: 60,
            }}
            placeholder="Username"
          />
        </View>
        <View style={{ marginTop: 10,}}>
          <TextInput
            secureTextEntry={true}
            onChangeText={(
              e
            )=> {
              console.log(e)
            }}
            style={{
              textAlign: "center",
              padding: 10,
              borderRadius: 10,
              borderWidth: 0.7,
              paddingHorizontal: 60,
            }}
            placeholder="Password"
          />
        </View>
        
        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            padding: 10,
            paddingHorizontal: 80,
            marginTop: 30,
            alignItems: "center",
            borderRadius: 10,
            flexDirection: "row",
            backgroundColor: "#000099",
          }}
        >
          <AntDesign name="apple1" size={24} color="white" />
          <Text style={{ paddingLeft: 10, color: "white" }}>Login with Apple</Text>
        </TouchableOpacity> */}

<TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            textAlign: "center",
            padding: 10,
            height: 40,
            paddingHorizontal: 115,
            marginTop: 20,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            backgroundColor: "#000099",
          }}
        >
          {/* <AntDesign name="google" size={24} color="white" /> */}
          <Text style={{ paddingLeft: 10, color: "white", fontWeight: "bold" }}>LOGIN</Text>
          <MaterialIcons name="navigate-next" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            padding: 10,
            height: 40,
            paddingHorizontal: 80,
            marginTop: 10,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            borderColor: "#000099",
            borderWidth: 2,
            backgroundColor: "white",
          }}
        >
          <AntDesign name="google" size={18} color="#000099" />
          <Text style={{ paddingLeft: 10, color: "#000099" }}>Login with Google</Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", paddingTop: 20, color: "grey" }}>Don't have an account yet?<Text onPress={()=> {navigation.navigate("Sign_Up");}} style={{ paddingLeft: 10, color: "#000099" , fontWeight: "bold"}}>SIGN UP</Text></Text>
      </View>
    );
  }