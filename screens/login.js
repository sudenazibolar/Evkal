import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert, Image, SafeAreaView } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Login = ({ navigation }) => {

    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [focus, setFocus] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {

        if (email === '' && password === '') {
            navigation.navigate('MainTabs');
        } else {
            alert('Email and password are required.');
        }
    };

    const handleSignUp = () => {

    };

    const handleForgotPassword = () => {

    };
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ flex: 1, marginHorizontal: 30, justifyContent: 'center', }}>
                <View style={{ alignItems: 'center', }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                        <Text style={{ color: 'black', fontSize: 30, }}>Sign In</Text>
                        <Text style={{ color: '#B0B0B0', fontSize: 17, marginTop: 10 }}>Hi! Welcome back, you've been missed</Text>

                    </View>


                </View>
                <View style={{ justifyContent: 'center', marginTop: 90 }}>

                    <View style={{ justifyContent: 'center', }}>
                        <Text style={{ color: 'black', }}>Email</Text>
                        <TextInput
                            onFocus={() => setFocus(true)}
                            style={{ height: 45, borderColor: 'gray', borderWidth: 0.5, borderRadius: 5, paddingLeft: 15, }}
                            placeholder="example@gmail.com"
                            placeholderTextColor={'#B0B0B0'}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View>

                        <Text style={{ color: 'black', marginTop: 20 }}>Password</Text>
                        <View style={{ height: 45, borderColor: 'gray', borderWidth: 0.5, paddingHorizontal: 10, borderRadius: 5, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput
                                onFocus={() => setFocus(true)}
                                style={{ flex: 1, }}
                                placeholder="•••••••••••••••••••••••••••••"
                                placeholderTextColor={'#B0B0B0'}
                                value={password}
                                secureTextEntry={!showPassword}
                                onChangeText={setPassword}
                            />
                            <TouchableOpacity onPress={toggleShowPassword} >
                                <Image source={showPassword ? require('../src/eye.png') : require('../src/eye.png')} />
                            </TouchableOpacity>
                        </View>


                    </View>

                    <TouchableOpacity style={{ alignItems: 'flex-end', }} onPress={handleForgotPassword}>
                        <Text style={{ color: '#FF4F8E', textDecorationLine: 'underline', alignItems: 'flex-end', marginTop: 10, }}>Forget Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: '#FF4F8E', borderRadius: 5, padding: 10, marginTop: 25, height: 45, alignItems: 'center', justifyContent: 'center' }} onPress={handleSignIn}>
                        <Text style={{ color: 'white', }}>Sign In</Text>
                    </TouchableOpacity>


                </View>
                <View >

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 40 }}>
                        <View style={{ borderBottomColor: '#B0B0B0', borderBottomWidth: 0.2, width: '30%' }}></View>
                        <Text style={{ fontSize: 13, color: 'black', }}>Or sign in with</Text>
                        <View style={{ borderBottomColor: '#B0B0B0', borderBottomWidth: 0.2, width: '30%' }}></View>
                    </View>

                    <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 50 }}>
                        <TouchableOpacity style={{ width: 70, height: 70, borderRadius: 35, borderColor: '#B0B0B0', borderWidth: 0.5, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require("../src/apple.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 70, height: 70, borderRadius: 35, borderColor: '#B0B0B0', borderWidth: 0.5, alignItems: 'center', justifyContent: 'center', marginHorizontal: 20 }}>
                            <Image source={require("../src/google.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 70, height: 70, borderRadius: 35, borderColor: '#B0B0B0', borderWidth: 0.5, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require("../src/face.png")} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 50 }}>
                        <Text style={{ fontSize: 13, color: 'black', }}>Don't have an account?</Text>
                        <TouchableOpacity style={{ textDecorationLine: 'underline', color: '#FF4F8E', fontSize: 13, }} onPress={handleSignUp}>
                            <Text style={{ color: '#FF4F8E', textDecorationLine: 'underline', marginLeft: 10 }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>




    );
};

export default Login;
