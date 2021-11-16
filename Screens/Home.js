
import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Ionicons, FontAwesome, AntDesign, MaterialIcons, } from "@expo/vector-icons";
import { render } from "react-dom";


export default function Home(params) {
  const navigation = params.navigation;
    return (
      <View style ={{backgroundColor: "white", flex: 1}}>
      <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#9900CC",
            alignItems: "center",
            paddingTop: 15,
            paddingBottom: 10,
            paddingHorizontal: 15,
          }}
        >
          <Ionicons name="menu" size={24} color="white" />
          {/* <FontAwesome name="motorcycle" size={24} color="white" /> */}
          <Text style={{color: "white", fontWeight: "bold", fontSize: 16}}>HOME</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            <View style = {{paddingRight: 10,}}>
              <AntDesign name="search1" size={20} color="white" />
            </View>
            <View style = {{paddingLeft: 5,}}>
              <Ionicons name="ios-cart-outline" size={20} color="white" />
            </View>
          </View>
        </View>
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          //paddingTop: 35,
          paddingHorizontal: 15,
        }}>  
        
        <View style={{
          flexDirection: "row", 
          justifyContent: "space-between", 
          alignItems: "center", 
          paddingTop: 5,
          alignContent: "center",
            }}>
          <View style={{
            flexDirection: "row",
          }}>
            <Text style ={{ fontSize: 20, fontWeight: 'bold', paddingVertical: 5, alignItems: "left"}}>New Arrivals</Text>
          </View>
          <View style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text style ={{ fontSize: 14, paddingVertical: 5, alignSelf: "flex-end"}}>See All</Text>
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
            //padding: 10,
            height: 200,
            width: 162,
            //paddingRight: 25,
            marginTop: 2,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            // borderColor: "#9900CC",
            // borderWidth: 2,
            backgroundColor: "#e3e3e3",
          }}
        >
          <Image
          style={{
            //borderRadius: 20,
            //marginBottom: 60,
            width: 162,
            height: 200,
            borderRadius: 5,
            borderColor: "#9900CC",
            borderWidth: 2,
          }}
          source={{
            uri: "https://dhabione.com/wp-content/uploads/2020/01/qw.jpg",
          }}
        />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Product_Detail");
          }}
          style={{
            //padding: 10,
            height: 200,
            width: 162,
            //paddingRight: 25,
            marginTop: 2,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            // borderColor: "#9900CC",
            // borderWidth: 2,
            backgroundColor: "#e3e3e3",
          }}
        >
          <Image
          style={{
            //borderRadius: 20,
            //marginBottom: 60,
            width: 162,
            height: 200,
            borderRadius: 5,
            borderColor: "#9900CC",
            borderWidth: 2,
          }}
          source={{
            uri: "https://www.sofasbysaxon.com/images/langham-2-seater-sofa-p649-166129_medium.jpg",
          }}
        />
        </TouchableOpacity>
        </View>

        <View style={{
          flexDirection: "row", 
          //justifyContent: "space-between", 
          alignItems: "center", 
          paddingTop: 10,
          alignContent: "center",
          paddingBottom: 5,
            }}>  
        <View style={{paddingRight: 28, }}> 
          <Text style = {{color: "#black", fontWeight: "500", fontSize: 16, flexDirection: "row", }}>Single Seater Sofa</Text>
          <Text style = {{color: "#9900CC"}}>GHC 1,200.00</Text>
        </View>

        <View style={{paddingLeft: 28, }}>
          <Text style = {{color: "#black", fontWeight: "500", fontSize: 16, }}>Double Seater Sofa</Text>
          <Text style = {{color: "#9900CC"}}>GHC 2,200.00</Text>
        </View>
        </View>

        <View style={{
          flexDirection: "row", 
          justifyContent: "space-between", 
          alignItems: "center", 
          paddingTop: 5,
          alignContent: "center",
            }}>
          <View style={{
            flexDirection: "row",
          }}>
            <Text style ={{ fontSize: 20, fontWeight: 'bold', paddingVertical: 5, alignItems: "left"}}>Hot Sales</Text>
          </View>
          <View style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text style ={{ fontSize: 14, paddingVertical: 5, alignSelf: "flex-end"}}>See All</Text>
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
            //padding: 10,
            height: 200,
            width: 162,
            //paddingRight: 25,
            marginTop: 2,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            // borderColor: "#9900CC",
            // borderWidth: 2,
            backgroundColor: "#e3e3e3",
          }}
        >
          <Image
          style={{
            //borderRadius: 20,
            //marginBottom: 60,
            width: 162,
            height: 200,
            borderRadius: 5,
            borderColor: "#9900CC",
            borderWidth: 2,
          }}
          source={{
            uri: "https://cdn.siasat.com/wp-content/uploads/2021/09/Apple-Watch.jpg",
          }}
        />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Product_Detail");
          }}
          style={{
            //padding: 10,
            height: 200,
            width: 162,
            //paddingRight: 25,
            marginTop: 2,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            // borderColor: "#9900CC",
            // borderWidth: 2,
            backgroundColor: "#e3e3e3",
          }}
        >
          <Image
          style={{
            //borderRadius: 20,
            //marginBottom: 60,
            width: 162,
            height: 200,
            borderRadius: 5,
            borderColor: "#9900CC",
            borderWidth: 2,
          }}
          source={{
            uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/iphone-12-vs-12-pro-camera-lead-1606257532.jpg",
          }}
        />
        </TouchableOpacity>
        
        </View>

        <View style={{
          flexDirection: "row", 
          //justifyContent: "space-between", 
          alignItems: "center", 
          paddingTop: 10,
          alignContent: "center",
          paddingBottom: 5,
            }}>  
        <View style={{paddingRight: 12, }}> 
          <Text style = {{color: "#black", fontWeight: "500", fontSize: 16, flexDirection: "row", }}>Apple Watch, Original</Text>
          <Text style = {{color: "#9900CC"}}>GHC 7,000.00</Text>
        </View>

        <View style={{paddingLeft: 15, }}>
          <Text style = {{color: "#black", fontWeight: "500", fontSize: 16, }}>Iphone 12 Pro Max</Text>
          <Text style = {{color: "#9900CC"}}>GHC 9,000.00</Text>
        </View>
        </View>

        <View style={{
          flexDirection: "row", 
          justifyContent: "space-between", 
          alignItems: "center", 
          paddingTop: 5,
          alignContent: "center",
            }}>
          <View style={{
            flexDirection: "row",
          }}>
            <Text style ={{ fontSize: 20, fontWeight: 'bold', paddingVertical: 5, alignItems: "left"}}>Discount Deals</Text>
          </View>
          <View style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text style ={{ fontSize: 14, paddingVertical: 5, alignSelf: "flex-end"}}>See All</Text>
          <MaterialIcons name="navigate-next" size={18} color="black" />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Product_Detail");
          }}
          style={{
            //padding: 10,
            height: 110,
            width: 340,
            //paddingRight: 25,
            marginTop: 2,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            // borderColor: "#9900CC",
            borderWidth: 1,
            borderColor: "#e0e0e0",
          }}
        >
          <Image
          style={{
            //borderRadius: 20,
            //marginBottom: 60,
            width: 90,
            height: 90,
            borderRadius: 5,
            marginLeft: 10,
            borderColor: "#9900CC",
            borderWidth: 1,
          }}
          source={{
            uri: "https://cdn.siasat.com/wp-content/uploads/2021/09/Apple-Watch.jpg",
          }}
        />
        <View style={{paddingLeft: 30, }}>
          <Text style = {{color: "#black", fontWeight: "500", fontSize: 16, }}>Iphone 12 Pro Max</Text>
          <Text style = {{color: "black",}}>
            <Text style = {{color: "black", textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>30% </Text>
            70% off
            </Text>
          <Text style = {{color: "#9900CC"}}>GHC 9,000.00</Text>
        </View>
        </TouchableOpacity>

      </View>
      </View>
    );

  }