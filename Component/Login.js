import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'tailwind-react-native-classnames';
import { getApi, apiUrl } from '../Helpers/helper';
import Modals from './Modals'
const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')
 
    const [isModalVisible, setModalVisible] = useState(false);
    // modal area

    const toggleModal = () => {
        setModalVisible(false);
    }
    // modal area end
     const  onSignin = async () => {
        console.log("values ", email, password)
        if (!email == "" && !password == "") {
              fetch(`${apiUrl}login?email=${email}&password=${password}`)
                .then((result) => {
                     result.json().then((resp) => {
                        console.log("login", resp);
                        if (resp.status == 'ok') {
                            let email = resp.email
                            StorageData(email); 
                            navigation.navigate('Otpverify')
                        } 
                        if (resp.status == 'notOk') {
                            let email = resp.result.email
                            StorageData(email); 
                        }else {
                         setErrors(resp.message)
                         setModalVisible(true)
                        }
                    })}).catch(error => {
                    alert(error.message)
                })
        } else {
            setErrors("Please Enter Valid Credentials.")
            setModalVisible(true)
           
        }
    }

    
    const StorageData = async (email) => {
        console.log("StorageData data ", email)
       try{
           await AsyncStorage.setItem('email', email)
           alert("data save");
         } catch(err){
            alert(err);
       }
      }
    return (
        <View style={tw`bg-gray-50 flex-1 justify-center items-center`}>
            <View style={tw`py-1`}>
                <Image style={tw`w-20 h-20`} source={require('../assets/logo.png')} />
            </View>

            <View style={tw`w-full px-6 mb-4`}>
                <Text style={tw``}>Email :</Text>
                <TextInput style={tw` rounded-md py-2 px-2 bg-gray-100 border-solid border-2 border-gray-200 `}
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                    placeholder={'Enter your email'} />
            </View>

            <View style={tw`w-full px-6 mb-4`}>
                <Text style={tw``}>Password :</Text>
                <TextInput style={tw` rounded-md py-2 px-2 bg-gray-100 border-solid border-2 border-gray-200 `}
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    placeholder={'Enter your password'} />
            </View>
            <View style={tw`w-full px-6 `}>
                <TouchableOpacity style={tw`w-full rounded-md py-2 px-2 bg-black my-3`} onPress={onSignin}>
                    <Text style={tw`text-center text-white`}>Login </Text>
                </TouchableOpacity>
            </View>

           

            <View style={tw`w-full px-6`}>
                <TouchableOpacity style={tw`w-full rounded-md py-2 px-2 my-3`} onPress={() => navigation.navigate('Login')}>
                    <Text style={tw`text-center text-black`}>Already have an account?  <Text style={tw`text-center text-yellow-400 underline `}>Sign In</Text></Text>
                </TouchableOpacity>
            </View>

            <Modals isModalVisible={isModalVisible} toggleModal={toggleModal} errors={errors}/>
        </View>
    );
}


export default Login;