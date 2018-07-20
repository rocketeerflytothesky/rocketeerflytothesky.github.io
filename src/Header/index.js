
import React, { Component } from "react";
import { Button } from "@material-ui/core/";
import logo from '../assets/rocketeer.png'
import './style.css'
import { Link, withRouter } from "react-router-dom";

class _Header extends Component {

    render() {
        console.log('current location ', this.props.location)
        return (
            <div style={styles.container}>
                <div>
                    <Link to='/about' style={{ textDecoration: 'none'}}>
                    <Button style={{ width: 90, borderWidth: 1, borderColor: '#EFEFEF'  }}>About</Button>
                    </Link>
                    <Link to='/blog' style={{ textDecoration: 'none' }}>
                    <Button style={{ width: 90 }}>Blog</Button>
                    </Link>
                </div>
                <Link to='/' style={{ textDecoration: 'none' }}>
                <img src={logo} width={160} />
                </Link>
                <div>
                <Link to='/projects' style={{ textDecoration: 'none' }}>
                    <Button style={{ width: 90 }}>Projects</Button>
                    </Link>
                    <Link to='/contact' style={{ textDecoration: 'none' }}>
                    <Button style={{ width: 90 }}>Contact</Button>
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
    }
}

export default withRouter(_Header)

