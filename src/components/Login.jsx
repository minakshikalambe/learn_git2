import React, { useState } from 'react'
import { FormControl, FormLabel, Input, Button, Heading, Alert, AlertIcon, Text } from "@chakra-ui/react"
import axios from "axios"
import {Link,useNavigate} from "react-router-dom"

export const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState()
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()
    const handlechange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const config={
                headers:{
                    "Content-Type":"application/json"
                }
            }
            const {data:res} = await axios.post("http://localhost:8080/login",data,config)
            console.log(res.message)
            setSuccess(res.message)
            navigate("/")
            localStorage.setItem("loginInfo", JSON.stringify(data))
        } catch (error) {
            if(error.response.status <= 500){
                setSuccess("User Created Successfully");
            }
            else if (error.response.status === 400){
                setError("Can't use duplicate email")
            }
            else{

                setError(error.response.data.message)
            }
        }
    }
    return (
        <div style={{ width: "40%", margin: "auto", marginTop: "40px" }}>
            <Heading style={{ color: "teal", display: "flex", lineHeight: "3" }}>Login-Form</Heading>
            {error && <Alert status='error'>
                <AlertIcon />
                {error}
            </Alert>}
            {success && <Alert status='success'>
                <AlertIcon />
                {success}
            </Alert>}
            <form onSubmit={handleSubmit}>
            <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='Email' name="email" onChange={handlechange} value={data.email} />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input type='password' placeholder='Password' name="password" onChange={handlechange} value={data.password} />
            </FormControl>
            <Link to={`/`}><Button style={{ display: "flex", marginTop: "30px" }} type="submit" colorScheme='teal' >
                Login
            </Button></Link>
            <Text> If User Not Register ? <Link style={{color:"blue"}} to="/register">Register Now</Link></Text>
            </form>
        </div>
    )
}
