import {makeAutoObservable} from "mobx";

class UserStore {
    isAuth = false
    currentUser = {}
    users = []
    constructor() {
        makeAutoObservable(this)
    }
    setIsAuth(b){
        this.isAuth = b
    }
    setCurrentUser(user){
        this.currentUser = user
    }
    setUsers(users){
        this.users = users
    }


}

export default new UserStore();