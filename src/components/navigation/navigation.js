import React, {Component} from 'react';
import {NavigationLink} from "./navigation-link";
import PropTypes from 'prop-types';

export class Navigation extends Component {

    render() {

        const items = this.props.items.map((item, key) => {
            if (item.divider)
                return (<li key={key.toString()}>
                    <div className="horizontal">
                        <small>{item.title}</small>
                    </div>
                </li>);
            else
                return (
                    <NavigationLink key={key.toString()} item={item}/>
                )
        });
        return (items &&
            <nav className="navigation" style={{direction: "rtl"}}>
                <ul>
                    {items}
                </ul>
            </nav>
        )
    }
}

Navigation.propTypes = {
    items: PropTypes.array.isRequired
};

export default Navigation