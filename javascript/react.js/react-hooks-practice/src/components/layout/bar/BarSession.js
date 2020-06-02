import React, {Component} from 'react';

import {Button, Toolbar, Typography} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    }
});

class BarSession extends Component {
    render() {

        const {classes} = this.props;

        return (
            <div>
                <Toolbar>
                    <Typography variant="h6">
                        VAXI HOMES
                    </Typography>
                    <div className={classes.sectionDesktop}>
                        <Button>Login</Button>
                    </div>
                </Toolbar>
            </div>
        );
    }
}

export default (withStyles(styles))(BarSession);