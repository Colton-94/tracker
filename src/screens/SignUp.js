import React, {useState, useContext}from 'react';
import {View,StyleSheet,} from 'react-native';
import {Text,Button,Input}from 'react-native-elements';
import SignIn from './SignIn';
import {Context as AuthContext} from '../context/AuthContext';
const SignUp=({navigation})=>{
    
    
    const {state,signup}=useContext(AuthContext);
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    return <View style={styles.container}>
    <Text h3>SignUp tp process</Text>
    <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
    <Input label="Pwd" value={password} onChangeText={setPassword}  autoCapitalize="none" autoCorrect={false} secureTextEntry />
        {state.errmsg?<Text>{state.errmsg}</Text>:null}
    <Button title="signUp" onPress={()=>{signup({email,password})}}/>
    </View>

};

SignUp.navigationOptions=()=>{
    return {
        headerShown:false
    };
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        marginBottom:150

    }
});

export default SignUp;