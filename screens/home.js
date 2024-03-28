import React, { useState, useRef } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image, TouchableHighlight, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';

const Home = ({ navigation }) => {
    const [focus, setFocus] = useState(false);

    const onCancel = () => {
        setFocus(false)
        Keyboard.dismiss()
    }

    const scrollViewRef = useRef(null); 

    const [selectedIndex, setSelectedIndex] = useState(0);
    const windowWidth = Dimensions.get('window').width;

    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / windowWidth);
        setSelectedIndex(index);
    };

    const handleDotPress = (index) => {
        setSelectedIndex(index);
        scrollViewRef.current.scrollTo({ x: index * windowWidth });
    };

    const images = [
        require('../src/img2.png'),
        require('../src/img1.png'),
        require('../src/img3.png'),
        require('../src/img4.png'),


    ];

    const dots = images.map((_, index) => (
        <TouchableOpacity
            key={index}
            style={[styles.dot, selectedIndex === index && styles.selected]}
            onPress={() => handleDotPress(index)}
        />
    ));

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, marginHorizontal: 15, justifyContent: 'center', }}>
                <View>
                    <View style={{ justifyContent: 'center', marginTop: 10 }}>
                        <View >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View>
                                    <View >
                                        <Text style={{ fontSize: 15, color: '#B0B0B0', }}>Location</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Image source={require("../src/navi.png")} />
                                        <Text style={{ fontSize: 17, color: 'black', marginHorizontal: 10 }}>My Flat</Text>
                                        <TouchableOpacity style={{ justifyContent: 'center' }}>
                                            <Image source={require("../src/arrow.png")} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#DEDCDC', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require("../src/bell.png")} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flex: 1, height: 45, borderRadius: 5, borderColor: 'gray', borderWidth: 0.5, paddingHorizontal: 10, marginRight: 10, borderRadius: 5, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../src/search.png')} />
                            <TextInput
                                style={{ flex: 1, marginHorizontal: 10 }}
                                placeholder="Search Food,Drink"
                                placeholderTextColor={'#B0B0B0'}
                            />
                        </View>
                        <View style={{ backgroundColor: '#FF4F8E', width: 50, height: 45, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require("../src/options.png")} />
                        </View>
                    </View>
                </View>

                <View style={{ flex: 3, justifyContent: 'center', }}>
                    <View style={styles.container}>
                        <ScrollView
                            ref={scrollViewRef}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            onScroll={handleScroll}
                            scrollEventThrottle={200}
                        >
                            {images.map((image, index) => (
                                <Image
                                    key={index}
                                    source={image}
                                    style={{ width: windowWidth, height: 200 }}
                                    resizeMode="cover"
                                />
                            ))}
                        </ScrollView>
                        <View style={styles.dotsContainer}>{dots}</View>
                    </View>
                </View>

                <View style={{ flex: 2, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10 }}>
                        <Text style={{ fontSize: 17, color: 'black' }}>Categories</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 17, color: '#FF4F8E', marginHorizontal: 10 }}>See All</Text>
                            <Image source={require("../src/arrowpink.png")} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>

                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: '#DEDCDC', alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}>
                                <Image source={require("../src/jars.png")} />

                            </TouchableOpacity>
                            <Text style={{ fontSize: 15, color: 'black', }}>Jars</Text></View>


                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: '#DEDCDC', alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}>
                                <Image source={require("../src/chicken.png")} />

                            </TouchableOpacity>
                            <Text style={{ fontSize: 15, color: 'black', }}>Chicken</Text></View>


                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: '#DEDCDC', alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}>
                                <Image source={require("../src/appl.png")} />

                            </TouchableOpacity>
                            <Text style={{ fontSize: 15, color: 'black', }}>Fruits</Text></View>


                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: '#DEDCDC', alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}>
                                <Image source={require("../src/fish.png")} />

                            </TouchableOpacity>
                            <Text style={{ fontSize: 15, color: 'black', }}>Sea Food</Text></View>

                    </View>
                </View>


                <View style={{ flex: 3, justifyContent: 'center', }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10 }}>
                        <Text style={{ fontSize: 17, color: 'black' }}>Recommend</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 17, color: '#FF4F8E', marginHorizontal: 10 }}>See All</Text>
                            <Image source={require("../src/arrowpink.png")} />
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', }}>


                        <View style={{ borderColor: '#C3BEBE', borderWidth: 1, height: 180, marginTop: 20, borderRadius: 10 }}>
                            <Image source={require("../src/img6.png")} style={{ borderRadius: 10 }} />
                            <Text style={{ fontSize: 15, color: 'black', marginHorizontal: 20, marginTop: 10, justifyContent: 'space-evenly' }}>Strawberry</Text>
                            <Text style={{ fontSize: 14, color: 'gray', marginHorizontal: 20, justifyContent: 'space-evenly' }}>20$</Text>

                        </View>
                        <View style={{ borderColor: '#C3BEBE', borderWidth: 1, height: 180, marginTop: 20, borderRadius: 10 }}>
                            <Image source={require("../src/img7.png")} style={{ borderRadius: 10 }} />
                            <Text style={{ fontSize: 15, color: 'black', marginHorizontal: 20, marginTop: 10, justifyContent: 'space-evenly' }}>Cherry</Text>
                            <Text style={{ fontSize: 14, color: 'gray', marginHorizontal: 20, justifyContent: 'space-evenly' }}>30$</Text>
                        </View>


                    </View>






                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#FDC9DC',
        marginHorizontal: 5,
    },
    selected: {
        backgroundColor: '#FF4F8E',
    },
});

export default Home;
