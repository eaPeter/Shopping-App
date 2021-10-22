
import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

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
            transform: [{ rotate: "45deg" }],
            borderRadius: 20,
            marginBottom: 60,
            width: 200,
            height: 200,
          }}
          source={{
            uri: "https://image.freepik.com/free-photo/slim-blithesome-woman-posing-with-bicycle-indoor-full-length-shot-curly-female-model-purple-pants_197531-20542.jpg",
          }}
        />
        <Text style={{ fontSize: 30, color: "grey" }}>Humbly welcomed to</Text>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Ride It Shop</Text>
        <View style={{}}>
          <TextInput
            style={{
              padding: 15,
              borderRadius: 10,
              borderWidth: 0.7,
              paddingHorizontal: 60,
            }}
            placeholder="Enter your username"
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
              padding: 15,
              borderRadius: 10,
              borderWidth: 0.7,
              paddingHorizontal: 60,
            }}
            placeholder="Enter your password"
          />
        </View>
        
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            padding: 15,
            paddingHorizontal: 80,
            marginTop: 10,
            alignItems: "center",
            borderRadius: 10,
            flexDirection: "row",
            backgroundColor: "#9900CC",
          }}
        >
          <AntDesign name="apple1" size={24} color="white" />
          <Text style={{ paddingLeft: 10, color: "white" }}>Login with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            padding: 15,
            paddingHorizontal: 80,
            marginTop: 10,
            alignItems: "center",
            borderRadius: 10,
            flexDirection: "row",
            backgroundColor: "#9900CC",
          }}
        >
          <AntDesign name="google" size={24} color="white" />
          <Text style={{ paddingLeft: 10, color: "white" }}>Login with Google</Text>
        </TouchableOpacity>
      </View>
    );
  }