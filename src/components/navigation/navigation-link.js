import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {NavLinkWithSubmenu} from "./navlink-with-submenu";

export class NavigationLink extends Component {

    render() {
        const {item} = this.props;
        if (!item.child)
            return (
                <li><NavLink exact={true} to={item.path} activeClassName={"active"}>
                    {item.icon}
                    <span>{item.title}</span></NavLink></li>
            );
        else
            return (
                <NavLinkWithSubmenu navTitle={item.title} icon={item.icon} child={item.child}/>
            )
    }
}

