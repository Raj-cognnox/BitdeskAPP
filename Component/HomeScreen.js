import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert,Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            cpassword: '',
        };
    }
    onSignup() {
        const { email, password, cpassword } = this.state;
        Alert.alert('Credentials', `${email} + ${password} + ${cpassword}`);
    }
    render() {
        return (
            <View style={tw`bg-gray-50 flex-1 items-center justify-center bg-white`}>
                <View style={tw`py-1`}>
                <Image style={tw`w-20 h-20 `} source={require('../assets/logo.png')} />
                </View>


                <View style={tw``}>
                <Text style={tw`text-3xl pt-10 font-bold`}>Welcome to Bitdesks</Text>
                </View>

                <View style={tw`px-6`}>
                    <TouchableOpacity style={tw`w-full rounded-md py-2 px-2 my-3`} onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={tw`text-center text-white bg-black p-3 rounded-md`}> Sign Up With Email</Text>
                    </TouchableOpacity>
                </View>
               


                <View style={tw`w-full px-6`}>
                    <TouchableOpacity style={tw`w-full rounded-md py-2 px-2 my-3`} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={tw`text-center text-black`}>Already have an account?  <Text style={tw`text-center text-yellow-400 underline `}>Sign In</Text></Text>
                    </TouchableOpacity>
                </View>
             
                
            </View>
        );
    }
}

export default HomeScreen;