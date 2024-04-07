import { Container } from "react-bootstrap"
import {Header} from "../components/header/Header"
import {User} from "../components/main/Users"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import {AddUser} from "../components/main/AddUser"





export const Home = () => {
    
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])
    const [genderControl, setGenderControl] = useState(false)

    console.log(users)

    const [user, setUser] = useState({
        name: "",
        email: "",
        dob: "",
        picture: "",
        city: "",
        cell: "",
        passWord: "",
        gender:""
      });

    const getUser = async () => {
        const res = await fetch("https://randomuser.me/api/");
        const data = await res.json();
        setUser(data.results[0]);
        user.gender === "male" ? setGenderControl(false) : setGenderControl(true)
      };
      useEffect(() => {
        getUser();
      }, []);
return(
<Container>
    <Header />
    <User addUser={users} setAddUser={setUsers} getUser={getUser} user={user}/>
    <AddUser addUser={users} setAddUser={setUsers} getUser={getUser} user={user}/>

</Container>
 
)
}