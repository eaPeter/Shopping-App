import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Ionicons, FontAwesome, AntDesign, MaterialIcons, } from "@expo/vector-icons";
import { render } from "react-dom";

export default function Product_Detail(params) {
    const navigation = params.navigation;
      return (
        <View style ={{backgroundColor: "white", flex: 1}}>
        <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#000099",
              alignItems: "center",
              paddingTop: 15,
              paddingBottom: 10,
              paddingHorizontal: 15,
            }}
          >
            <Ionicons name="arrow-back-outline" size={24} color="white" />
            {/* <FontAwesome name="motorcycle" size={24} color="white" /> */}
            <Text style={{color: "white", fontWeight: "bold", fontSize: 16}}>DETAILS</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
              <View style = {{paddingLeft: 5,}}>
                <Ionicons name="ios-cart-outline" size={20} color="white" />
              </View>
            </View>
        </View>


        <View
          style={{
            backgroundColor: "white",
            flex: 1,
          }}>  
          <Image
          style={{
            width: 375,
            height: 300,
            borderBottomColor: "#e0e0e0", borderBottomWidth: 1,
            //borderColor: "#000099",
            //borderWidth: 1,
          }}
          source={{
            uri: "https://dhabione.com/wp-content/uploads/2020/01/qw.jpg",
          }}
        />

            <View style={{paddingLeft: 15, paddingTop: 10, borderBottomColor: "#e0e0e0", borderBottomWidth: 1, paddingBottom: 10,}}> 
                <Text style = {{color: "#black", fontWeight: "600", fontSize: 20, flexDirection: "row", paddingBottom: 1,}}>Single Seater Sofa, Red</Text>
                <Text style = {{color: "#000099", fontSize: 16,}}>GHC 7,000.00</Text>
            </View>

            <View style={{paddingLeft: 15,paddingTop: 10, borderBottomColor: "#e0e0e0", borderBottomWidth: 1, paddingBottom: 10,}}>
                <Text style = {{color: "#black", fontWeight: "600", fontSize: 20, flexDirection: "row", paddingBottom: 10,}}>Colours</Text>
                <View style={{flexDirection: "row",}}>
                    <View style={{paddingRight: 5}}>
                        <View style={{height: 30, width: 30, borderRadius: 30, color: "red", backgroundColor: "red", borderColor: "black", borderWidth: 1}}/>
                    </View>
                    <View style={{paddingLeft: 5, paddingRight: 5}}>
                        <View style={{height: 30, width: 30, borderRadius: 30, color: "red", backgroundColor: "#000099", padding: 15, borderColor: "black", borderWidth: 1}}/>
                    </View>
                    <View style={{paddingLeft: 5, paddingRight: 5}}>
                        <View style={{height: 30, width: 30, borderRadius: 30, color: "red", backgroundColor: "white", padding: 15, borderColor: "black", borderWidth: 1}}/>
                    </View>                   
                </View>
            </View>

            <View style={{padding: 15,paddingTop: 10, paddingBottom: 10,  borderBottomColor: "#e0e0e0", borderBottomWidth: 1,}}>
                <Text style = {{color: "#black", fontWeight: "600", fontSize: 20, flexDirection: "row", paddingBottom: 10,}}>Description</Text>
                <Text style={{flexWrap: "wrap"}}>Soft and comfortable single seater sofa with wooden legs. Comes in various colours and available in your country.
                Choose between pickup at delivery point or deliver to doorstep.</Text>
                <View style={{flexDirection: "row",}}>
                    <Text style={{fontWeight: "500", color: "#8a8a8a", paddingTop: 20, fontSize: 16}}>Size:</Text>
                    <Text style={{fontWeight: "500", color: "#black", paddingTop: 20, fontSize: 16, paddingLeft: 100,}}>Single Seater</Text>
                </View>
                <View style={{flexDirection: "row",}}>
                    <Text style={{fontWeight: "500", color: "#8a8a8a", paddingTop: 5, fontSize: 16}}>Categories:</Text>
                    <Text style={{fontWeight: "500", color: "#black", paddingTop: 5, fontSize: 16, paddingLeft: 52,}}>Furniture, Chair</Text>
                </View>
                <View style={{flexDirection: "row",}}>
                    <Text style={{fontWeight: "500", color: "#8a8a8a", paddingTop: 5, fontSize: 16}}>Dimensions:</Text>
                    <Text style={{fontWeight: "500", color: "#black", paddingTop: 5, fontSize: 16, paddingLeft: 45,}}>100 x 80 x 50 cm (LxWxD)</Text>
                </View>
            </View>

            <View style={{marginHorizontal: 15}}>
                <TouchableOpacity
                    onPress={() => {
                    navigation.navigate("Cart");
                    }}
                style={{
                textAlign: "center",
                padding: 10,
                height: 40,
                paddingHorizontal: 115,
                marginTop: 20,
                alignItems: "center",
                borderRadius: 2,
                flexDirection: "row",
                backgroundColor: "#000099",
            }}
            >
                <Text style={{ paddingLeft: 10, color: "white", fontWeight: "bold" }}>ADD TO CART</Text>
                </TouchableOpacity>
            </View>

        </View>
        </View>
      );
  
    }