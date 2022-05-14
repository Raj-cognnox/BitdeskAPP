import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'tailwind-react-native-classnames';
import { getApi, apiUrl } from '../Helpers/helper';
import Modals from './Modals'
const UserDashboard = ({navigation}) => {
 
 const StorageData = async () => {
       try{
         await AsyncStorage.removeItem('token',)
        await AsyncStorage.removeItem('userRole',)
        await AsyncStorage.removeItem('email',)
         navigation.navigate('HomeScreen')
         } catch(err){
           alert(err);
       }
      }
 
    return (
        <View style={tw`bg-gray-50 flex-1 justify-center items-center`}>
            <View style={tw`py-1`}>
                <Image style={tw`w-20 h-20`} source={require('../assets/logo.png')} />
            </View>

          
           

            <View style={tw`w-full px-6`}>
              <Text style={tw`text-center text-red-400`}> Welcome in User Dashboard </Text>
             
            </View>

            <View style={tw`w-32 px-6 `}>
                    <TouchableOpacity style={tw`w-full rounded-md py-2 px-2 bg-black my-3`} onPress={StorageData}>
                        <Text style={tw`text-center text-white`}>Log Out</Text>
                    </TouchableOpacity>
                </View>

           

        </View>
    );
}


export default UserDashboard;