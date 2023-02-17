import axios from "axios";

const url = "http://localhost:3000/"
export default class UserService {

    static login(body){
        return axios.post(url + "auth/login", body)
    }

    static registration(body){
        return axios.post(url + "auth/registration", body)
    }

    static getUsersAdmin(){
        return axios.get(url + "user/", {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
    }

    static getUsersDeveloper(){
        return axios.get(url + "user/developer", {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
    }
    static getUsersUser(){
        return axios.get(url + "user/user", {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
    }
    static patchRole(id, role){
        return axios.patch(url + "user/" + id, role, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
    }

    static deleteUser(id){
        return axios.delete(url + "user/" + id, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
    }

}