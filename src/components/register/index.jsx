import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import Wrapper from './style'
import { Link } from 'react-router-dom'

const Register = () => {
    const [name,setName]=useState("")
    const [contact,setContact]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch();
    const add=()=>{
        dispatch({
            type:"ADD_USER",payload:{name,contact,password}
        })
    }

  return (
    <Wrapper>
    <div>
    <h3>REGISTRATION</h3>
      <input type="text" placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <input type="text" placeholder='contact' value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
      <input type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <select name="" id="dropdown">
        <option value="" selected disabled>Select Role</option>
        <option value="student">Student</option>
        <option value="teacher">Faculty</option>
      </select>
      <input type="submit"  value="Add" onClick={add}/>
      <label>Already Have an Account? </label>
      <Link to="/">Login</Link>
    </div>
    </Wrapper>
  )
}

export default Register
