import React from 'react';
import {Text,View,StyleSheet, Button} from 'react-native';

const TrackList=({navigation})=>{
    return <>
    <Text style={{fontSize:48}}>TrackList</Text>
    <Button title="track" onPress={()=>{navigation.navigate('Detail')}} />
    </>
};

const styles=StyleSheet.create({});

export default TrackList;