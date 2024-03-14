

import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';


const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={{ flexDirection: 'row', height: 60, backgroundColor: '#ffffff' , justifyContent:'space-between'}}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                let iconSource;
                if (label === 'Home') {
                    iconSource = require('../src/icon4.png');
                } else if (label === 'Category') {
                    iconSource = require('../src/icon2.png');
                } else if (label === 'My Cart') {
                    iconSource = require('../src/sepet.png');
                } else if (label === 'My Order') {
                    iconSource = require('../src/icon1.png');
                } else if (label === 'Profile') {
                    iconSource = require('../src/icon3.png');
                }

                return (
                    <TouchableOpacity
                        key={index}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: label === 'My Cart' ? -60 : 0,
                        }}
                        onPress={onPress}
                    >
                        {label === 'My Cart' ? (
                            
                            <View style={{ width: 60, height: 60, borderRadius: 60, backgroundColor: '#FF4F8E', alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={iconSource}
                                    resizeMode='contain'
                                    style={{  tintColor: isFocused ? '#000' : '#fff',width:24,height:24 }}
                                />
                            </View>
                        ) : (
                            <>
                                <Image
                                    source={iconSource}
                                    resizeMode='contain'
                                    style={{ width: isFocused ? 25 : 25, height: isFocused ? 25 : 25, tintColor: isFocused ? '#000000' : '#999999' }}
                                />
                                <Text style={{ color: '#000000', fontSize: 12, marginTop: 5, fontWeight: isFocused ? '400' : 'normal' }}>{label}</Text>
                            </>
                        )}
                    </TouchableOpacity>
                );
            })}
        </View>
    );

};

export default CustomTabBar;