
import React, { Component } from "react";
import { Button, Icon } from "@material-ui/core/";
import { Styl } from "react-dom";
import logo from '../assets/rocketeer.png'
import './style.css'

export default class Menu extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div>
                    <Button style={{ width: 90 }}>About</Button>
                    <Button style={{ width: 90 }}>Blog</Button>
                </div>
                <img src={logo} width={160} />
                <div>
                    <Button style={{ width: 90 }}>Projects</Button>
                    <Button style={{ width: 90 }}>Contact</Button>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        display: 'flex',
        flexWrap: 'wrap',
    }
}