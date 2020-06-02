import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {MuiThemeProvider} from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";
import theme from "./themes/theme";

import PropertyList from "./components/views/PropertyList";
import Navbar from "./components/layout/Navbar";

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <MuiThemeProvider theme={theme}>
                        <Navbar/>
                        <Grid container>
                            <Switch>
                                <Route path="/" exact component={PropertyList}>

                                </Route>
                            </Switch>
                        </Grid>
                    </MuiThemeProvider>
                </Router>
            </div>
        );
    }
}


