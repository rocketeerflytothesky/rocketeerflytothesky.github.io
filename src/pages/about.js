import React from "react";
import me from "../assets/me.jpg";
import { introMyself } from "../constants";

const About = () => (
    <div style={{ flexDirection: 'row', display: 'flex' }}>
        <img src={me} />
        <div style={{ padding: 20, flex: 1 }}>
            <span>
                Hello<br/>
                I'm Thi
            </span>
        </div>
    </div>
)
export default About