import axios from 'axios';
import { MAIN_URL } from './Url';
export function getPosts(){
    return axios.get(`${MAIN_URL}posts/fetchpost`);
}
export function addPost(data){
    return axios.post(`${MAIN_URL}posts/addpost`,data);
}
export function Login(data){
    return axios.post(`${MAIN_URL}posts/signin`,data);
}
export function getmenu(data){
    return axios.get(`${MAIN_URL}posts/getpost`,data);
}
export function placeOrder(data){
    return axios.post(`${MAIN_URL}posts/order`,data) 
}
export function allorders(){
    return axios.get(`${MAIN_URL}posts/allorders`) 
}
export function email(){
    return axios.post(`${MAIN_URL}posts/email`) 
}



