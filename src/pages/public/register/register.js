import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";

function RegisterPage(props) {

    return (
        <h1>Register Page</h1>
    )
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }

}

RegisterPage = connect(mapStateToProps)(RegisterPage)

export default RegisterPage;