import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Modal from "react-native-modal";
import tw from 'tailwind-react-native-classnames';
import { getApi, apiUrl } from '../Helpers/helper';

const Modals = (props) => {
  
    return (
        <View style={tw`w-full px-6`}>
            <Modal isVisible={props.isModalVisible} swipeDirection="left" animationIn="slideInUp" animationOut="slideOutDown" >
                <View style={tw`items-center bg-gray-100 rounded-md shadow-lg p-3 justify-center items-center`}>
                    <Text style={tw`text-2xl py-5 font-bold `}>
                   { props.mailLink ? <Icon name="check-circle" size={50} color="green" /> : <Entypo name="circle-with-cross" size={50} color="red" /> } 
                    </Text>
                    <Text style={tw`items-center  text-red-500`}>{props.errors || props.mailLink}</Text>
                    <View style={tw`w-full px-6 items-center `}>
                    <TouchableOpacity style={tw`w-32 rounded-md py-2 px-2 bg-black my-3`} onPress={props.toggleModal}>
                    <Text style={tw`text-center text-white`}>Ok</Text>
                </TouchableOpacity>
            </View>
                   
                   
               
                </View>

            </Modal>
        </View>
    )
}
export default Modals
