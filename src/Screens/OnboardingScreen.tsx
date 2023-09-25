import { Text, View, Button, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) =>{
    return (
        <Onboarding
        pages={[
            {
            backgroundColor: '#fff',
            image: <Image source={require('../../assets/images/circle.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../../assets/images/square.png')} />,
                title: 'Onboarding',
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