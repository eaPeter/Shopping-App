
import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Ionicons, FontAwesome, AntDesign, MaterialIcons, } from "@expo/vector-icons";
import { render } from "react-dom";

export default function Home(params) {
  const navigation = params.navigation;
    return (
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          paddingTop: 55,
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Ionicons name="menu" size={24} color="black" />
          <FontAwesome name="motorcycle" size={24} color="black" />
          <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            <View style = {{paddingHorizontal: 5,}}>
              <AntDesign name="search1" size={20} color="black" />
            </View>
            <View style = {{paddingLeft: 5,}}>
              <Ionicons name="ios-cart-outline" size={20} color="black" />
            </View>
          </View>
        </View>

        <View style={{
          flexDirection: "row", 
          justifyContent: "space-between", 
          alignItems: "center", 
          paddingTop: 10,
          alignContent: "center",
            }}>
          <View style={{
            flexDirection: "row",
          }}>
            <Text style ={{ fontSize: 20, fontWeight: 'bold', paddingVertical: 10, alignItems: "left"}}>Top Selling</Text>
          </View>
          <View style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text style ={{ fontSize: 14, paddingVertical: 10, alignSelf: "flex-end"}}>See All</Text>
          <MaterialIcons name="navigate-next" size={18} color="black" />
          </View>
        </View>
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between", 
          }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Product_Detail");
          }}
          style={{
            padding: 10,
            height: 250,
            width: 162,
            paddingRight: 25,
            marginTop: 10,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            borderColor: "#9900CC",
            borderWidth: 2,
            backgroundColor: "#e3e3e3",
          }}
        >
          <Text style = {{color: "#9900CC"}}>Yahhhhhh</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Product_Detail");
          }}
          style={{
            padding: 10,
            height: 250,
            width: 162,
            paddingLeft: 25,
            marginTop: 10,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            borderColor: "#9900CC",
            borderWidth: 2,
            backgroundColor: "#e3e3e3",
          }}
        >
          <Text style = {{color: "#9900CC"}}>Yahhhhhh</Text>
        </TouchableOpacity>
        </View>

        <View style={{
            flexDirection: "row",
            justifyContent: "space-between", 
          }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Product_Detail");
          }}
          style={{
            padding: 10,
            height: 250,
            width: 162,
            paddingRight: 25,
            marginTop: 10,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            borderColor: "#9900CC",
            borderWidth: 2,
            backgroundColor: "#e3e3e3",
          }}
        >
          <Text style = {{color: "#9900CC"}}>Yahhhhhh</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Product_Detail");
          }}
          style={{
            padding: 10,
            height: 250,
            width: 162,
            paddingLeft: 25,
            marginTop: 10,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            borderColor: "#9900CC",
            borderWidth: 2,
            backgroundColor: "#e3e3e3",
          }}
        >
          <Text style = {{color: "#9900CC"}}>Yahhhhhh</Text>
        </TouchableOpacity>
        </View>3
      </View>
    );

  }