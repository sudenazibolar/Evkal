import React, { useState, useRef } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image, TouchableHighlight, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
const Payment = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 10 }}>

      <View style={{ marginTop: 10, flexDirection: "row", alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 0.5, borderColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require("../src/arrowleft.png")} />
        </TouchableOpacity>
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 70 }}>
        <Image source={require("../src/check.png")} />


      </View>

      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
        <Text style={{ fontSize: 25, color: 'black', }}>Your order is </Text>
        <Text style={{ fontSize: 25, color: 'black', }}> successfully done</Text>

      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 70 }}>
        <Text style={{ fontSize: 20, color: 'black', }}> You can track the delivery in the</Text>
        <Text style={{ fontSize: 20, color: 'black', }}> “My Orders” section.</Text>

      </View>

      <TouchableOpacity style={{ backgroundColor: '#FF4F8E', borderRadius: 5, padding: 10, marginTop: 195, height: 45, alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }} >
        <Text style={{ color: 'white', }}>View Order</Text>
      </TouchableOpacity>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
        <Text style={{ fontSize: 15, color: '#FF4F8E', }}>View E-Receipt</Text></View>
    </SafeAreaView>

  );
};

export default Payment;