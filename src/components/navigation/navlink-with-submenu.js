import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export class NavLinkWithSubmenu extends Component {
    constructor(props) {
        super(props);

        this.toggleSubmenu = this.toggleSubmenu.bind(this);
        this.state = {
            visible: false
        }
    }

    toggleSubmenu() {
        const visibility = this.state.visible;
        this.setState({
            visible: !visibility
        })
    }

    render() {
        const {navTitle, icon} = this.props;
        const {visible} = this.state;
        const items = this.props.child.map((item, key) => (
            <li key={key.toString()}>
                <NavLink exact={true} activeClassName={"active"} to={item.path}>
                    {item.icon}
                    <span>{item.title}</span></NavLink></li>
        ));
        return (
            <li className={visible ? 'has-submenu show-submenu' : 'has-submenu'}>
                {/*<Icon name={visible ? "chevron up" : "chevron down"} size="tiny"/>*/}
                {/*eslint-disable-next-line */}
                <a onClick={this.toggleSubmenu} className="parent-link">
                    {icon}
                    <span>{navTitle}</span></a>
                <ul className="submenu">
                    {items}
                </ul>
            </li>
        );
    }
}

