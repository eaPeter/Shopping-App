
import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Ionicons, FontAwesome, AntDesign, MaterialIcons, } from "@expo/vector-icons";
import { render } from "react-dom";


export default function Cart(params){
    const navigation = params.navigation;
    return(
        <View style ={{backgroundColor: "white", flex: 1,}}>
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
            <Text style={{color: "white", fontWeight: "bold", fontSize: 16}}>CART</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            </View>
            </View>

            <Text style={{fontWeight: "bold", fontSize: 22, padding:  15}}>My Cart</Text>

        <View style={{ paddingVertical: 5, paddingHorizontal: 15}}>
        <TouchableOpacity
        
          style={{
            //padding: 10,
            height: 130,
            width: 340,
            //paddingRight: 25,
            //marginTop: 2,
            //marginBottom: 10,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            // borderColor: "#000099",
            borderWidth: 1,
            borderColor: "#e0e0e0",
          }}
        >
          <Image
          style={{
            //borderRadius: 20,
            //marginBottom: 60,
            width: 100,
            height: 100,
            borderRadius: 5,
            marginLeft: 10,
            borderColor: "#000099",
            borderWidth: 1,
          }}
          source={{
            uri: "https://dhabione.com/wp-content/uploads/2020/01/qw.jpg",
          }}
        />
        <View style={{paddingLeft: 30, }}>
          <Text style = {{color: "#black", fontWeight: "500", fontSize: 16, }}>Single Seater Sofa</Text>
          <Text style = {{color: "#000099"}}>GHC 1,200.00</Text>

          <View style={{flexDirection: "row", fontSize: 16, paddingTop: 10}}>
          <Text style={{fontWeight: "bold"}}>Quantity:</Text>
          <Text style={{paddingHorizontal: 15}}>1</Text>
          </View>
        </View>

        </TouchableOpacity>
        </View>

        <View style={{ paddingVertical: 5, paddingHorizontal: 15}}>
        <TouchableOpacity
          
          style={{
            //padding: 10,
            height: 130,
            width: 340,
            //paddingRight: 25,
            //marginTop: 2,
            //marginBottom: 10,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            // borderColor: "#000099",
            borderWidth: 1,
            borderColor: "#e0e0e0",
          }}
        >
          <Image
          style={{
            //borderRadius: 20,
            //marginBottom: 60,
            width: 100,
            height: 100,
            borderRadius: 5,
            marginLeft: 10,
            borderColor: "#000099",
            borderWidth: 1,
          }}
          source={{
            uri: "https://www.sofasbysaxon.com/images/langham-2-seater-sofa-p649-166129_medium.jpg",
          }}
        />
        <View style={{paddingLeft: 30, }}>
          <Text style = {{color: "#black", fontWeight: "500", fontSize: 16, }}>Double Seater Sofa</Text>
          <Text style = {{color: "#000099"}}>GHC 2,200.00</Text>

          <View style={{flexDirection: "row", fontSize: 16, paddingTop: 10}}>
          <Text style={{fontWeight: "bold"}}>Quantity:</Text>
          <Text style={{paddingHorizontal: 15}}>2</Text>
          </View>
        </View>

        </TouchableOpacity>

        <Text style={{fontWeight: "bold", fontSize: 20, paddingTop: 10, fontWeight: "bold", }}>Order Info</Text>
        <View style={{fontSize: 20, paddingVertical: 5, flexDirection: "row", alignItems: "center", justifyContent: "space-between",}}>
            <Text >Discount:</Text>
        
            <Text>GHC 1,000.00</Text>
            
        </View>

        <View style={{fontSize: 20, paddingVertical: 5, flexDirection: "row", alignItems: "center", justifyContent: "space-between",}}>
            <Text >Sub-Total:</Text>
        
            <Text>GHC 10,000.00</Text>
            
        </View>

        <View style={{fontSize: 20, paddingVertical: 5, flexDirection: "row", alignItems: "center", justifyContent: "space-between",}}>
            <Text >Total:</Text>
        
            <Text>GHC 9,000.00</Text>
            
        </View>

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
          <Text style={{ paddingLeft: 10, color: "white", fontWeight: "bold" }}>PAY NOW</Text>
          <MaterialIcons name="navigate-next" size={24} color="white" />
        </TouchableOpacity>

        
        

        </View>
        </View>
    )
}