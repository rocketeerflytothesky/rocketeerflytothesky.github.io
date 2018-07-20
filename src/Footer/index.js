import React, { Component } from "react";
const style = {
    textAlign: "center",
    height: "20px",
    width: "100%",
}

const phantom = {
    display: 'block',
    height: '20px',
    width: '100%',
}
export const Footer = () => (
    <div>
        <div style={phantom} />
        <div style={style}>
        <text>
            © Copyright 2018 thitruongvo@gmail.com
        </text>
    </div>
    </div>
)