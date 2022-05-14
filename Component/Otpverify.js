import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'tailwind-react-native-classnames';
import { getApi, apiUrl } from '../Helpers/helper';
import Modals from './Modals'



const Otpverify = ({ navigation }) => {
    const [otp, setOtp] = useState('')
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState('')
    const [message, setMessage] = useState('')
    const [isModalVisible, setModalVisible] = useState(false);
    // modal area
     const toggleModal = () => {
        setModalVisible(false);
    }
    // modal area end

    const Storagemail = async()=>{
        try{
            let email = await AsyncStorage.getItem('email')
            console.log(email)
        setEmail(email)
           } catch(err){
              alert(err);
         }
    }
    
    const GetOtps = async () => {
        fetch(`${apiUrl}send-login-otp?email=${email}`)
            .then((result) => {
                result.json().then((resp) => {
                    if (resp.status == 'ok') {
                        setMessage(resp.message)
                     } else { 
                        setErrors(resp.message)
                     }
                })

            });



    }

    const sendOtp = (e) => {
         fetch(`${apiUrl}otp-login-verify?otp=${otp}&email=${email}`)
            .then((result) => {
                result.json().then((resp) => {
                    if (resp.status == 'ok') {
                        let token = resp.token
                        let userRole = resp.token
                        StorageData(token,userRole)
                        navigation.navigate('UserDashboard')
                    } else {}
                })
            });
    }
    
    const StorageData = async (token,userRole) => {
        console.log("StorageData data otp ", token,userRole)
       try{
           await AsyncStorage.setItem('token', token)
           await AsyncStorage.setItem('userRole', userRole)
         } catch(err){
            alert(err);
       }
      }

      useEffect(() => {
        Storagemail();
    }, [])
    return (
        <View style={tw`bg-gray-50 flex-1 justify-center items-center`}>
            <View style={tw`py-1`}>
                <Image style={tw`w-20 h-20`} source={require('../assets/logo.png')} />
            </View>

            <View style={tw`w-full px-6 mb-4`}>
                <Text style={tw``}>OTP verification :</Text>
                <TextInput style={tw` rounded-md py-2 px-2 bg-gray-100 border-solid border-2 border-gray-200 `}
                    value={otp}
                    onChangeText={(otp) => setOtp(otp)}
                    placeholder={'Enter otp'} />
            </View>
             <View style={tw`w-full px-6 `}>
                <TouchableOpacity style={tw`w-full rounded-md py-2 px-2 bg-black my-3`} onPress={sendOtp}>
                    <Text style={tw`text-center text-white`}>Send</Text>
                </TouchableOpacity>
            </View>

            <View style={tw`w-full px-6`}>
              <Text style={tw`text-center text-red-400`}>{message}</Text>
             
            </View>

           

            <View style={tw`w-full px-6`}>
                <TouchableOpacity style={tw`w-full rounded-md py-2 px-2 my-3`} onPress={GetOtps}>
                    <Text style={tw`text-center text-black`}>Get Code</Text>
                </TouchableOpacity>
            </View>

            <Modals isModalVisible={isModalVisible} toggleModal={toggleModal} errors={errors}/>
        </View>
    );
}


export default Otpverify;