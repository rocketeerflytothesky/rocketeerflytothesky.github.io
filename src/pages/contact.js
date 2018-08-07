import React from "react";

const Contact = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: 300, height: 200, boxShadow: '1px 1px 1px #9E9E9E', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: 20 }}>
                <div>Mr. Thi Vo</div>
                <div>HCMC, Vietnam</div>
            </div>
            <div style={{backgroundColor: 'lightGray', flex: 1, padding: 20 }}>
                <div>Email: thitruongvo@gmail.com</div>
                <div>Skype: thitruongvo</div>
                <div>Facebook: </div>
            </div>
        </div>
    </div>
)

export default Contact