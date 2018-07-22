
import React, { Component } from "react";
import { Button } from "@material-ui/core/";
import logo from '../../assets/rocketeer.png'
//import { Link, withRouter } from "react-router-dom";
import Link from "gatsby-link";

export default class Header extends Component {

    selectedButtonIndex() {
        const path = this.props.location.pathname
        console.log('current location ', path)
        if (path === '/') {
            return 0
        }
        else if (path === '/about') {
            return 1
        }
        else if (path === '/blog') {
            return 2
        }
        else if (path === '/projects') {
            return 3
        }
        else if (path === '/contact') {
            return 4
        }
    }

    render() {
        console.log('current location ', this.props.location)
        const selectedMenuIndex = this.selectedButtonIndex()
        console.log('selected Index ', selectedMenuIndex)
        return (
            <div style={styles.container}>
                <div>
                    <Link to='/about' style={{ textDecoration: 'none'}}>
                    <Button style={selectedMenuIndex=== 1 ? styles.buttonBordered : styles.button}>About</Button>
                    </Link>
                    <Link to='/blog' style={{ textDecoration: 'none' }}>
                    <Button style={selectedMenuIndex=== 2 ? styles.buttonBordered : styles.button }>Blog</Button>
                    </Link>
                </div>
                <Link to='/' style={{ textDecoration: 'none', justifyContent: 'center', alignItems: 'center', height: 80 }}>
                    <img src={logo} width={180}/>
                </Link>
                <div>
                <Link to='/projects' style={{ textDecoration: 'none' }}>
                    <Button style={selectedMenuIndex=== 3 ? styles.buttonBordered : styles.button }>Projects</Button>
                    </Link>
                    <Link to='/contact' style={{ textDecoration: 'none' }}>
                    <Button style={selectedMenuIndex=== 4 ? styles.buttonBordered : styles.button}>Contact</Button>
                    </Link>
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
        marginBottom: 32,
    },
    button: {
        width: 90
    },
    buttonBordered: {
        width: 90,
        borderBottomWidth: 2, 
        borderBottomColor: 'black', 
        borderBottomStyle: 'solid'
    }
}


