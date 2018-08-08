import React from "react";
import me from "../assets/me_large.jpg";
import { introMyself } from "../constants";

const About = () => (
    <div style={{ flexDirection: 'row', display: 'flex'}}>
        <div style={styles.bgImage}>
            <div style={styles.introContainer}>
                <span style={styles.text}>
                Hi!<br/>
Thi is a mobile developer in a outsourcing company.<br/>
At home, he is indie app developer.<br/>
He also have some experience with backend and design.<br/><br/>

If you want to share something or interested to work with him, feel free to press contact and leave some messages.<br/>
Peace!<br/>
            </span>
            </div>
        </div>
    </div>
)

const styles = {
    introContainer: {
        padding: 20, 
        position: 'absolute', 
        top: 0, 
        right: 0, 
        bottom: 0, 
        width: '45%', 
        height: '100%', 
        backgroundColor: 'rgba(255,255,255,0.6)',
        minWidth: 320,
        fontFamily: 'Verdana'
    },
    bgImage: {
        backgroundImage: `url(${me})`, 
        width: 720, 
        height: 498, 
        backgroundSize: 'cover', 
        position: 'relative'
    },
    text: {
        color: 'black'
    }
}
export default About