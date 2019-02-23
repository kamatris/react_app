import React, { Component } from 'react';
import './css/Header.css';

class Header extends Component {
    state = {
        siteUrl: "/"
    }

    render() {
        return (
            <div className="header">
                <h2>
                    <a href={this.state.siteUrl}>{this.props.label} </a> {this.props.version}
                </h2>
            </div>
        )
    }
}

export default Header;