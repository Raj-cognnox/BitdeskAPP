import React, { Component } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'tailwind-react-native-classnames';
class Mailsent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={tw`bg-gray-50 flex-1 justify-center items-center`}>
            <View style={tw`bg-gray-100 rounded-xl shadow-lg p-3 justify-center items-center`}>
                <View style={tw`py-1`}>
                    <Image style={tw`w-20 h-20 `} source={require('../assets/logo.png')} />
                </View>
                <View style={tw`items-center`}>
                    <Text style={tw`text-2xl pt-10 font-bold`}>Mail Sent Successfully.</Text>
                    <Text style={tw`items-center `}>Please verify your mail first and then try to Login.</Text>
                    


                </View>
                <View style={tw`w-32 px-6 `}>
                    <TouchableOpacity style={tw`w-full rounded-md py-2 px-2 bg-black my-3`} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={tw`text-center text-white`}>Login</Text>
                    </TouchableOpacity>
                </View>


            </View>
            </View>
        );
    }
}

export default Mailsent;