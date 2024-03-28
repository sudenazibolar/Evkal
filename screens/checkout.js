import React, { useState, useRef } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image, TouchableHighlight, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';

const Checkout = ({navigation}) => {
    const nextPage=()=>{
        navigation.navigate('Payment');
    }

    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 10 }}>


            <View style={{ marginTop: 10, flexDirection: "row", alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 0.5, borderColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require("../src/arrowleft.png")} />
                </TouchableOpacity>
                <Text style={{ fontSize: 19, color: 'black', marginLeft: 100 }}>Checkout</Text>
            </View>

            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 16, color: 'black', }}>Use Easy Grocery Pay</Text>

                <TouchableOpacity style={{ backgroundColor: '#DEDCDC', alignItems: 'center', padding: 12, borderRadius: 5, flexDirection: "row", marginTop: 10, justifyContent: "space-between" }}>

                    <View>
                        <Text style={{ fontSize: 14, color: 'gray', }}>Your current balance</Text></View>
                    <View>
                        <Text style={{ fontSize: 14, color: 'gray', }}>USA 444.63</Text></View>

                </TouchableOpacity>

                <View style={{ height: 1, backgroundColor: 'gray', marginTop: 20 }}></View></View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 16, color: 'black', }}>Pay With</Text>


                <View style={{ flexDirection: "column", marginTop: 15 }}>

                    <View style={{ rowGap: 10, }}>
                        <TouchableOpacity style={{ borderColor: '#FF4F8E', borderWidth: 1, alignItems: 'center', padding: 12, borderRadius: 10, flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                                <View style={{ borderRadius: 10, justifyContent: 'center', alignItems: 'center', borderColor: '#FF4F8E', borderWidth: 1, height: 20, width: 20, marginHorizontal: 10 }}>
                                    <View style={{ borderRadius: 10, backgroundColor: '#FF4F8E', height: 12.5, width: 12.5 }}>

                                    </View>

                                </View>
                                <Image source={require("../src/Vector-1.png")} />
                                <View style={{ justifyContent: "center", marginHorizontal: 10 }}>
                                    <Text style={{ fontSize: 14, color: 'black', }}>Cash on delivery</Text>
                                    <View style={{ flexDirection: "row" }}>

                                    </View>
                                </View></View>
                            <View style={{ backgroundColor: '#FF4F8E', borderRadius: 7, }}>


                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderColor: 'gray', borderWidth: 0.5, alignItems: 'center', padding: 12, borderRadius: 10, flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                                <View style={{ borderRadius: 10, borderColor: '#FF4F8E', borderWidth: 1, height: 20, width: 20, marginHorizontal: 10 }}>

                                </View>
                                <Image source={require("../src/Vector.png")} />
                                <View style={{ justifyContent: "center", marginHorizontal: 10 }}>
                                    <Text style={{ fontSize: 14, color: 'black', }}>Add Card</Text>
                                    <View style={{ flexDirection: "row" }}>

                                    </View>
                                </View></View>
                            <View style={{ backgroundColor: '#FF4F8E', borderRadius: 7, }}>


                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 45, borderColor: 'gray', borderWidth: 0.5, padding: 12, borderRadius: 10, flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                                <View style={{ borderRadius: 10, borderColor: '#FF4F8E', borderWidth: 1, width: 20, height: 20, marginHorizontal: 10 }}>

                                </View>
                                <Image source={require("../src/Paypal.png")} />
                                <View style={{ justifyContent: "center", marginHorizontal: 10 }}>
                                    <Text style={{ fontSize: 14, color: 'black', }}>Paypal</Text>
                                    <View style={{ flexDirection: "row" }}>

                                    </View>
                                </View></View>
                            <View style={{ backgroundColor: '#FF4F8E', borderRadius: 7, }}>


                            </View>

                        </TouchableOpacity>

                    </View>


                </View>


                <View style={{ height: 1, backgroundColor: 'gray', marginTop: 30 }}></View>


            </View>

            <View style={{ marginTop: 30 }}>
                <View style={{ backgroundColor: '#DEDCDC', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 1, borderRadius: 5, flexDirection: "row", justifyContent: "space-between" }}>

                    <View>
                        <TextInput placeholder="PROME CODE" />
                    </View>
                    <View>
                        <TouchableOpacity style={{ backgroundColor: '#FF4F8E', borderRadius: 5, paddingVertical: 10, paddingHorizontal: 25, alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={{ color: 'white', }}>Apply</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 40, marginHorizontal: 10 }}>
                    <View style={{ rowGap: 10 }}>
                        <Text style={{ fontSize: 15, color: 'gray', }}>Sub-total</Text>
                        <Text style={{ fontSize: 15, color: 'gray', }}>Delivery fee</Text>
                        <Text style={{ fontSize: 15, color: 'gray', }}>Tax</Text>
                        <Text style={{ fontSize: 15, color: 'gray', }}>Discount</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end', rowGap: 10 }}>
                        <Text style={{ fontSize: 15, color: 'black', }}>$120.00</Text>
                        <Text style={{ fontSize: 15, color: 'black', }}>$5.00</Text>
                        <Text style={{ fontSize: 15, color: 'black', }}>$00.00</Text>
                        <Text style={{ fontSize: 15, color: 'black', }}>-$35.00</Text>
                    </View>

                </View>
                <View style={{  borderColor: 'gray', marginTop: 40, borderBottomWidth:1,borderStyle:"dashed",}}></View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between",marginHorizontal: 10,marginTop:15}}>
                    <Text style={{ fontSize: 15, color: 'gray', }}>Total Coat</Text>
                    <Text style={{ fontSize: 15, color: 'black', }}>$90.00</Text>
                </View>
            </View>
            <TouchableOpacity onPress={nextPage}   style={{ backgroundColor: '#FF4F8E', borderRadius: 5, padding: 10, marginTop: 35, height: 45, alignItems: 'center', justifyContent: 'center' }} >
                <Text style={{ color: 'white', }}>Confirm Payment</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );

}


export default Checkout;