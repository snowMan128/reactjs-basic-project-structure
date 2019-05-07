import React, {Component} from 'react';
import {connect} from "react-redux";

function MainHeader(props) {

    return (
        <h1>Main Header</h1>
    )
}

function mapStateToProps(state) {

    return {
        sidebar_open: state.settings.main_sidebar_close
    }
}

export default connect(mapStateToProps)(MainHeader);