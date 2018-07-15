
import React, { Component } from "react";
import { Button, Icon } from "@material-ui/core/";
import logo from '../assets/rocketeer.png'
import './style.css'

export default class Menu extends Component {
    render() {
        return (
            <div style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, display: 'flex'}}>
                <Button style={{ width: 90 }}>
                    About
            </Button>
                <Button style={{ width: 90 }}>
                    Blog
            </Button>
                <img src={logo} width={160} />
                <Button style={{ width: 90 }}>
                    Projects
            </Button>
                <Button style={{ width: 90 }}>
                    Contact
            </Button>
            </div>
        )
    }
}