import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
import trackApi from '../api/track';
import { navigate } from '../navigationRef';
import { useCallback } from 'react';


const authReducer=(state,action)=>{
    switch (action.type){
        case 'signup':
            return {errmsg:'',token:action.payload};
        case 'signuperr':
        return {...state,errmsg:action.payload};
        default:
            return state;
    }
};

const signup=(dispatch)=>{
    return async({email,password})=>{
        console.log(email,password);
        try{
            const resp=await trackApi.post('/signup',{email,password});
            await AsyncStorage.setItem('token',resp.data.token);
            dispatch({type:'signup',payload:resp.data.token});
            // callback();
           navigate('TrackList');
        }catch(err){
            dispatch({type:'signuperr',payload:'something went wrong with signup'})
        }

        

    };

};

export const {Provider,Context}=createDataContext(authReducer,{ signup },{token:null,errmsg:''});