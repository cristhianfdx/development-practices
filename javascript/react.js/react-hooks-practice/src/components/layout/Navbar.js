import React, {Component} from 'react';
import {AppBar} from "@material-ui/core";
import BarSession from "./bar/BarSession";


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <BarSession/>
                </AppBar>
            </div>
        );
    }
}