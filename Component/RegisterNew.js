import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, Button } from 'react-native';
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import tw from 'tailwind-react-native-classnames';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };
    }







    render() {
        return (
            <View style={tw`bg-gray-50 flex-1 justify-center items-center`}>
                <View style={tw`w-full px-6`}>

                    <Button
                        title="Show Dialog"
                        onPress={() => {
                            this.setState({ visible: true });
                        }}
                    />
                    <Dialog
                        visible={this.state.visible}
                        onTouchOutside={() => {
                            this.setState({ visible: false });
                        }}
                    >
                        <DialogContent>

                        </DialogContent>
                    </Dialog>


                </View>
            </View>
        );
    }
}

export default Register;