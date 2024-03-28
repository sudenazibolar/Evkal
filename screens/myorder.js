import React, { useState, useRef } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image, TouchableHighlight, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';

const MyCart = () => {
  return (
    <SafeAreaView style={{ flex: 1, }}>


      <View style={{ marginTop: 10, flexDirection: "row", alignItems: 'center', marginHorizontal: 10 }}>
        <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 0.5, borderColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require("../src/arrowleft.png")} />
        </TouchableOpacity>
        <Text style={{ fontSize: 19, color: 'black', marginLeft: 100, }}>My Order</Text>
      </View>

      <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-between", marginHorizontal: 30 }}>
        <Text style={{ fontSize: 17, color: 'black', borderBottomColor: '#FF4F8E', borderBottomWidth: 3, }}>Active</Text>
        <Text style={{ fontSize: 17, color: 'black', }}>Completed</Text>
        <Text style={{ fontSize: 17, color: 'black', }}>Cancelled</Text>

      </View>
      <View style={{ height: 0.5, backgroundColor: 'gray', marginHorizontal: 5 }}></View>
      <View style={{ flexDirection: "column", backgroundColor: '#F1EFEF' }}>

        <View style={{ rowGap: 10, }}>
          <View style={{ marginHorizontal: 10, borderColor: 'gray', borderWidth: 0.5, marginHorizontal: 15, backgroundColor: 'white', marginTop: 40, padding: 12, borderRadius: 10, justifyContent: "space-between" }}>

            <View style={{ justifyContent: "center", backgroundColor: '#FFF6A5', alignItems: 'center', borderRadius: 5, alignSelf: "flex-start" }}>
              <Text style={{ fontSize: 13, color: '#E4CE00', paddingVertical: 5, paddingHorizontal: 10, }}>Order Placed</Text>
            </View>
            <View >
              <View>
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginHorizontal: 10 }}>
                  <View style={{}}>
                    <Text style={{ fontSize: 14, color: 'gray', }}>Transaction ID</Text>
                    <Text style={{ fontSize: 14, color: 'black', }}>#GR45HGJF</Text>
                  </View>


                  <View style={{}}>
                    <Text style={{ fontSize: 14, color: 'gray', }}>Order Date</Text>
                    <Text style={{ fontSize: 14, color: 'black', }}>$25.00</Text>
                  </View>

                  <View style={{}}>
                    <Text style={{ fontSize: 14, color: 'gray', }}>Totak Payment</Text>
                    <Text style={{ fontSize: 14, color: 'black', }}>10,Sep</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 20, marginHorizontal: 10, justifyContent: "space-evenly", }}>
                <TouchableOpacity style={{ borderColor: '#FF4F8E', borderWidth: 1, borderRadius: 5, padding: 10, width: 165, alignItems: 'center' }} >
                  <Text style={{ color: '#FF4F8E', }}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#FF4F8E', borderRadius: 5, padding: 10, width: 165, alignItems: 'center' }} >
                  <Text style={{ color: 'white', }}>Track Order</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </View>

        <View style={{ rowGap: 10, }}>
          <View style={{ marginHorizontal: 10, borderColor: 'gray', borderWidth: 0.5, marginHorizontal: 15, backgroundColor: 'white', marginTop: 30, padding: 12, borderRadius: 10, justifyContent: "space-between" }}>

            <View style={{ justifyContent: "center", backgroundColor: '#A2D9F4', alignItems: 'center', borderRadius: 5, alignSelf: "flex-start" }}>
              <Text style={{ fontSize: 13, color: '#60A4C6', paddingVertical: 5, paddingHorizontal: 10, }}>In Progress</Text>
            </View>
            <View >
              <View>
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginHorizontal: 10 }}>
                  <View style={{}}>
                    <Text style={{ fontSize: 14, color: 'gray', }}>Transaction ID</Text>
                    <Text style={{ fontSize: 14, color: 'black', }}>#GR45HGJF</Text>
                  </View>
                  <View style={{}}>
                    <Text style={{ fontSize: 14, color: 'gray', }}>Order Date</Text>
                    <Text style={{ fontSize: 14, color: 'black', }}>$25.00</Text>
                  </View>

                  <View style={{}}>
                    <Text style={{ fontSize: 14, color: 'gray', }}>Totak Payment</Text>
                    <Text style={{ fontSize: 14, color: 'black', }}>10,Sep</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 20, marginHorizontal: 10, justifyContent: "space-evenly", }}>
                <TouchableOpacity style={{ borderColor: '#FF4F8E', borderWidth: 1, borderRadius: 5, padding: 10, width: 165, alignItems: 'center' }} >
                  <Text style={{ color: '#FF4F8E', }}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#FF4F8E', borderRadius: 5, padding: 10, width: 165, alignItems: 'center' }} >
                  <Text style={{ color: 'white', }}>Track Order</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </View>

        <View style={{ rowGap: 10, }}>
          <View style={{ marginHorizontal: 10, borderColor: 'gray', borderWidth: 0.5, marginHorizontal: 15, backgroundColor: 'white', marginTop: 30, padding: 12, borderRadius: 10, justifyContent: "space-between" }}>

            <View style={{ justifyContent: "center", backgroundColor: '#A2D9F4', alignItems: 'center', borderRadius: 5, alignSelf: "flex-start" }}>
              <Text style={{ fontSize: 13, color: '#60A4C6', paddingVertical: 5, paddingHorizontal: 10, }}>In Progress</Text>
            </View>
            <View >
              <View>
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginHorizontal: 10 }}>
                  <View style={{}}>
                    <Text style={{ fontSize: 14, color: 'gray', }}>Transaction ID</Text>
                    <Text style={{ fontSize: 14, color: 'black', }}>#GR45HGJF</Text>
                  </View>


                  <View style={{}}>
                    <Text style={{ fontSize: 14, color: 'gray', }}>Order Date</Text>
                    <Text style={{ fontSize: 14, color: 'black', }}>$25.00</Text>
                  </View>

                  <View style={{}}>
                    <Text style={{ fontSize: 14, color: 'gray', }}>Totak Payment</Text>
                    <Text style={{ fontSize: 14, color: 'black', }}>10,Sep</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 20, marginHorizontal: 10, justifyContent: "space-evenly", }}>
                <TouchableOpacity style={{ borderColor: '#FF4F8E', borderWidth: 1, borderRadius: 5, padding: 10, width: 165, alignItems: 'center' }} >
                  <Text style={{ color: '#FF4F8E', }}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#FF4F8E', borderRadius: 5, padding: 10, width: 165, alignItems: 'center' }} >
                  <Text style={{ color: 'white', }}>Track Order</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>

        </View>
      </View>





    </SafeAreaView>

  );
}


export default MyCart;