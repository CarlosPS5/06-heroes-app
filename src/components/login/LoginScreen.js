import React from 'react'
import { Redirect } from 'react-router-dom'


export const LoginScreen = ({history}) => {

    const Login = () => {
        //history.push("/")
        history.replace("/")
    }

    return  <>
                <h1>Login Screen</h1>
                <hr/>
                <button type="button" className="btn btn-primary" onClick = {Login}>Log In</button>
            </>
}