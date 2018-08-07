import React from "react";
import me from "../assets/me_large.jpg";
import { introMyself } from "../constants";

const About = () => (
    <div style={{ flexDirection: 'row', display: 'flex' }}>
        <div style={styles.bgImage}>
            <div style={styles.introContainer}>
                <span style={styles.text}>
                    Hello<br />
                    I'm Thi
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
    },
    bgImage: {
        backgroundImage: `url(${me})`, 
        width: '100%', 
        height: 600, 
        backgroundSize: 'cover', 
        position: 'relative'
    },
    text: {
        color: 'black'
    }
}
export default About