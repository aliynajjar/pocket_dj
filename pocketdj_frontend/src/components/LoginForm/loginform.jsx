import Input from "../Input/input";
import  './loginform.css';
import Button from "../Button/button";
import {useState } from "react";
import { Navigate } from "react-router-dom";
import Logo from '../../assets/logo.svg';
import Settings from '../../assets/settings.svg'

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const[error,setError]=useState("");

const handleUsername=(e)=>{
      setUsername(e.target.value)
  }
 const handlePassword=(e)=>{
     setPassword(e.target.value)
  }

  const validatePassword=(password)=> {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
      }
      
  
  const handleSubmit=()=>{
    // if (validateEmail(username)){
        if(validatePassword(password)){
          const data = {
            username: username,
            password: password
          };
          console.log(data)
//     axios.post("http://127.0.0.1:8000/api/v0.0.1/auth/login",data).then((res) => {
//         console.log(res)
//         localStorage.setItem('token',res.data.authorisation.token);
//         localStorage.setItem('email',res.data.user.email);
//         window.location.href="http://localhost:3000/code_editor"  
// }
//     ).catch((err) => {
//         console.log(err);
//     })
// }else(setError("Invalid credentials"))
// }else(setError("Invalid credentials"))

  }}
 
    return(
      <>
        <div className="form_container">
        <div className="left_box">
        <img src={Logo} alt="logo" />
        <div className="app_title">Pocket DJAI</div>
        <img src={Settings} alt="settings"/>
        </div>
        <div className="right_box">
        <h1>Admin Portal</h1>
        <Input name={"Username"} type={"text"} onChange={handleUsername} size="40" />
        <Input name={"password"} type={"password"} onChange={handlePassword}/>
        <Button name={"Login"} onSubmit={handleSubmit}/>
        <p className="error"><br/>{error}</p>
        </div>
        </div>
        </> 
    );}

export default LoginForm;