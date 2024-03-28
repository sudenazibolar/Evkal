import React, { useState, useRef } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image, TouchableHighlight, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';

const ConfirmPayment = ({navigation}) => {
  const nextPage = ()=>{
    navigation.navigate('Checkout');
  }
  const backPage = ()=>{
    navigation.navigate('MainTabs');
  }
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 10 }}>
      <View style={{ marginTop: 10, flexDirection: "row", alignItems: 'center' }}>
        <TouchableOpacity onPress={backPage} style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 0.5, borderColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require("../src/arrowleft.png")} />
        </TouchableOpacity>

        <Text style={{ fontSize: 19, color: 'black', marginLeft: 75 }}>Review Summary</Text>
      </View>

      <View style={{ flexDirection: "column", marginTop: 15 }}>

        <View style={{ rowGap: 10, }}>
          <TouchableOpacity style={{ backgroundColor: '#DEDCDC', alignItems: 'center', padding: 8, borderRadius: 10, flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
              <Image source={require("../src/orange.png")} />
              <View style={{ justifyContent: "center", marginHorizontal: 20 }}>
                <Text style={{ fontSize: 17, color: 'black', }}>Orange</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 15, color: '#FF4F8E' }}>35$</Text>
                  <Text style={{ fontSize: 13, color: 'gray', marginLeft: 10 }}>/5kg</Text>
                  <Text style={{ fontSize: 13, color: 'gray', textDecorationLine: "line-through", marginLeft: 10 }}>10$/1kg</Text>
                </View>
              </View></View>
            <View style={{ backgroundColor: '#FF4F8E', borderRadius: 7, }}>

              <Text style={{ fontSize: 19, color: '#fff', paddingVertical: 10, paddingHorizontal: 17, }}>5</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ backgroundColor: '#DEDCDC', alignItems: 'center', padding: 8, borderRadius: 10, flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
              <Image source={require("../src/charry.png")} />
              <View style={{ justifyContent: "center", marginHorizontal: 20 }}>
                <Text style={{ fontSize: 17, color: 'black', }}>Charry</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 15, color: '#FF4F8E' }}>8$</Text>
                  <Text style={{ fontSize: 13, color: 'gray', marginLeft: 10 }}>/500g</Text>

                </View>
              </View></View>
            <View style={{ backgroundColor: '#FF4F8E', borderRadius: 7, }}>

              <Text style={{ fontSize: 19, color: '#fff', paddingVertical: 10, paddingHorizontal: 17, }}>2</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ backgroundColor: '#DEDCDC', alignItems: 'center', padding: 8, borderRadius: 10, flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
              <Image source={require("../src/tomato.png")} />
              <View style={{ justifyContent: "center", marginHorizontal: 20 }}>
                <Text style={{ fontSize: 17, color: 'black', }}>Tomatoes</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 15, color: '#FF4F8E' }}>6$</Text>
                  <Text style={{ fontSize: 13, color: 'gray', marginLeft: 10 }}>/500g</Text>

                </View>
              </View></View>
            <View style={{ backgroundColor: '#FF4F8E', borderRadius: 7, }}>

              <Text style={{ fontSize: 19, color: '#fff', paddingVertical: 10, paddingHorizontal: 17, }}>1</Text>
            </View>
          </TouchableOpacity>

        </View>


      </View>
      <View style={{ marginHorizontal: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 50, }}>
          <View style={{ rowGap: 10 }}>
            <Text style={{ fontSize: 15, color: 'gray', }}>Order Date</Text>
            <Text style={{ fontSize: 15, color: 'gray', }}>Delivery Date</Text>
            <Text style={{ fontSize: 15, color: 'gray', }}>Promo code</Text>
            <Text style={{ fontSize: 15, color: 'gray', }}>Delivery Time</Text>
          </View>
          <View style={{ alignItems: 'flex-end', rowGap: 10 }}>
            <Text style={{ fontSize: 15, color: 'black', }}>Sep 18,2023 | 10:00 AM</Text>
            <Text style={{ fontSize: 15, color: 'black', }}>SEP 19,2023</Text>
            <Text style={{ fontSize: 15, color: 'black', }}>DISC10OFF</Text>
            <Text style={{ fontSize: 15, color: 'black', }}>01:00 AM - 08:00 AM</Text>
          </View>



        </View>

        <View style={{ height: 1, backgroundColor: '#DEDCDC', marginTop: 10 }}></View>

        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 10, }}>
          <View style={{ rowGap: 10 }}>
            <Text style={{ fontSize: 15, color: 'gray', }}>Amount</Text>
            <Text style={{ fontSize: 15, color: 'gray', }}>Delivery Charge</Text>
            <Text style={{ fontSize: 15, color: 'gray', }}>Tax</Text>
            <Text style={{ fontSize: 15, color: 'gray', }}>Discount</Text>
          </View>
          <View style={{ alignItems: 'flex-end', rowGap: 10 }}>
            <Text style={{ fontSize: 15, color: 'black', }}>$120</Text>
            <Text style={{ fontSize: 15, color: 'black', }}>$05.00</Text>
            <Text style={{ fontSize: 15, color: 'black', }}>$00.00</Text>
            <Text style={{ fontSize: 15, color: 'black', }}>-$35.00</Text>
          </View>
        </View>
        <TouchableOpacity onPress={nextPage} style={{ backgroundColor: '#FF4F8E', borderRadius: 5, padding: 10, marginTop:50, height: 45, alignItems: 'center', justifyContent: 'center' ,}} >
          <Text style={{ color: 'white', }}>Confirm Payment</Text>
        </TouchableOpacity></View>
    </SafeAreaView>

  );
};

export default ConfirmPayment;