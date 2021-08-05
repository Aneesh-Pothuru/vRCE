import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../../assets/logo.png";
import { Logo } from "./navigation.styles";
import { Link } from "react-router-dom";

export const Navigation = () => {
    return(
        <div>
            <AppBar position="static" style={{ backgroundColor: "#00364D" }}>
                <Toolbar>
                    <Logo src={logo} alt=""/>
                    <Link to="/vRCE" style={{ color: '#FFF', textDecoration: 'none' }}>
                        <Typography>
                            <h2>
                                <b>vRealize Cloud Efficiency</b>
                            </h2>
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}