import {NavigationActions} from 'react-native';

let nav;

export const setNavigator=(nav)=>{
 nav=nav;
};

export const navigate=(routeName,params)=>{
 nav.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    
    );
};