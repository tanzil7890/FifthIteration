import { Text, View, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Onboarding from 'react-native-onboarding-swiper';

const Dots = () => {
    let backgroundColor;

    backgroundColor= selected ? 'rgba(0,0, 0, 0.8)': 'rgb(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}>

        </View>
    );
};
const Skip = ({...props}) => (
    <TouchableOpacity 
    style={{marginHorizontal:10}}
    {...props}>
        <Text style={{fontSize: 16}}>Skip</Text>    
    </TouchableOpacity>
);
const Next = ({...props}) => (
    <TouchableOpacity 
    style={{marginHorizontal:10}}
    {...props}>
        <Text style={{fontSize: 16}}>Next</Text>    
    </TouchableOpacity>
);
const Done = ({...props}) => (
    <TouchableOpacity 
    style={{marginHorizontal:10}}
    {...props}>
        <Text style={{fontSize: 16}}>Done</Text>    
    </TouchableOpacity>
);


const OnboardingScreen = ({ navigation }) =>{
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={()=> navigation.navigate("Login")}
        onDone={()=> navigation.navigate("Login")}
        pages={[
            {
            backgroundColor: '#fdeb93',
            image: <Image source={require('../../assets/images/circle.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#a6e4d0',
                image: <Image source={require('../../assets/images/square.png')} />,
                title: 'Onboarding2',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#e9bcbe',
                image: <Image source={require('../../assets/images/circle.png')} />,
                title: 'Onboarding3',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
        ]}
        />
    );
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})