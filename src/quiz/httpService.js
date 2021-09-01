import axios from "axios";

const baseURL = "http://localhost:2410";
//const baseURL = "https://nameless-peak-87129.herokuapp.com";
function get(url){
    return axios.get(baseURL + url);
}

function post(url,obj){
    return axios.post(baseURL + url, obj)
}

function deleteReq(url){
    return axios.delete(baseURL+url)
}

function editReq(url){
    return axios.put(baseURL+url)
}

export default {
    get,
    post,
    deleteReq,
    editReq,
}