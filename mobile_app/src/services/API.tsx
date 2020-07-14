import { HTTP } from '@ionic-native/http';

export const getRequest = async (method:string) => {
    const data = await HTTP.get('http://192.168.1.108:3000/'+method, {},{});
    return data; 
};

export const postRequest = async (method:string, dataArr={}) => {
    const data = await HTTP.post('http://192.168.1.108:3000/'+method, dataArr,{});
    return data; 
};

export default getRequest;
