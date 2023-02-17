import React, {useState, useRef} from 'react';
import {observer} from "mobx-react-lite";
import UserStore from "../store/userStore";
import UserService from "../services/userService";
import "./FileComponent.css"
const FileComponent = observer(() => {

    let [show, setShow] = useState(false)
    let [showRoles, setShowRoles] = useState(false)
    let [isAdmin, setIsAdmin] = useState(false)
    let [roleUser, setRoleUser] = useState({})
    let roleRef = useRef('')
    function showUsers() {
        setShow(true)
        if(UserStore.currentUser.role === "admin"){
            setIsAdmin(true)
            UserService.getUsersAdmin().then(value => {
                UserStore.setUsers(value.data)
            })
        }
        else if(UserStore.currentUser.role === "developer"){
            UserService.getUsersDeveloper().then(value => {
                UserStore.setUsers(value.data)
            })
        }
        else if(UserStore.currentUser.role === "user"){
            UserService.getUsersUser().then(value => {
                UserStore.setUsers(value.data)
            })
        }
    }

    function hideUsers() {
        setShow(false)
    }

    function changeRole(id) {
        setShowRoles(true)
    }

    function deleteUser(id, name) {
        let b = prompt(`If you really want to delete ${name}, Enter yes`)
        if(b === "yes"){
            UserService.deleteUser(id).then(value =>{
                console.log(value)
            })
        }
    }

    function patchUser(event, id, name) {
        let b = prompt(`If you really want to set ${name} ${event.target.value} role, Enter yes`)
        if(b === "yes"){
            setRoleUser(roleUser.role = event.target.value)
            UserService.patchRole(id, roleUser).then(value =>{
                console.log(value)
            })
        }
    }

    return (
        <div>
             <center>
                 <div>Вхід успішний. Ласкаво просимо {UserStore.currentUser.username}. Ваша роль – {UserStore.currentUser.role}</div>
                 {!show ?<button onClick={showUsers}>Show users</button> :
                 <div>
                     <button onClick={hideUsers}>hide</button>
                     {
                         UserStore.users.map(user => <div key={user.id} className={"boxUser"}>{user.username} - {user.role} {isAdmin && <div>
                             <button onClick={()=>changeRole()}>change role</button>
                             {showRoles && <select onChange={(e)=>patchUser(e, user.id, user.username)} ref={roleRef}>
                                 <option>user</option>
                                 <option>developer</option>
                                 <option>admin</option>
                             </select>
                             }
                             <button onClick={()=>deleteUser(user.id, user.username)}>delete</button>
                         </div>}</div>)
                     }
                 </div>}
             </center>
        </div>
    );
});

export default FileComponent;