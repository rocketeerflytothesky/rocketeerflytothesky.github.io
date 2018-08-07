
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
                <Link to='/about' style={selectedMenuIndex === 1 ? styles.linkHighlight : styles.link}>
                    <Button style={styles.button}>About</Button>
                </Link>
                <Link to='/blog' style={selectedMenuIndex === 2 ? styles.linkHighlight : styles.link}>
                    <Button style={styles.button}>Blog</Button>
                </Link>
                <Link to='/projects' style={selectedMenuIndex === 3 ? styles.linkHighlight : styles.link}>
                    <Button style={styles.button}>Projects</Button>
                </Link>
                <Link to='/contact' style={selectedMenuIndex === 4 ? styles.linkHighlight : styles.link}>
                    <Button style={styles.button}>Contact</Button>
                </Link>
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
        width: 100,
        color: 'grey',
    },
    linkHighlight: {
        textDecoration: 'none', 
        marginRight: 10,
        borderBottom: 'solid',
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
    },
    link: {
        textDecoration: 'none', 
        marginRight: 10,
    }
}


