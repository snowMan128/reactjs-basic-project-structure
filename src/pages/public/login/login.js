import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";

function LoginPage(props) {


    return (
        <h1>Login Page</h1>
    )
}


function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

LoginPage = connect(mapStateToProps)(LoginPage)

export default LoginPage;