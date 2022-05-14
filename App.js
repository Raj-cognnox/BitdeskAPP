import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Component/HomeScreen';
import Login from './Component/Login';
import Register from './Component/Register';
import Mailsent from './Component/Mailsent';
import Otpverify from './Component/Otpverify';
import UserDashboard from './Component/UserDashboard';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen  name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
         <Stack.Screen  name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen  name="Register" component={Register} options={{ title: 'Register' }} />
        <Stack.Screen  name="Mailsent" component={Mailsent} options={{ title: 'Mailsent' }} />
        <Stack.Screen  name="Otpverify" component={Otpverify} options={{ title: 'Otpverify' }} />
        <Stack.Screen  name="UserDashboard" component={UserDashboard} options={{ title: 'UserDashboard' }} />
       </Stack.Navigator>
    </NavigationContainer>
  
  );
}


