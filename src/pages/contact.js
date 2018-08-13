import React from "react";

const Contact = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: 420, height: 180, display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: 10 }}>
                <div>Mr. Thi Vo</div>
                <div>HCMC, Vietnam</div>
            </div>
            <div style={{backgroundColor: '#e0e0e0', flex: 1, padding: 20 }}>
                <div>Email: <a href='mailto:thitruongvo@gmail.com'>thitruongvo@gmail.com</a></div>
                <div>Skype: thitruongvo</div>
                <div>Facebook: <a href='https://www.facebook.com/thitruongvo' target='_blank'>fb.com/thitruongvo</a></div>
            </div>
        </div>
    </div>
)

export default Contact