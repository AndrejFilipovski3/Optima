import React, {useEffect } from 'react';

function AboutUs() {

    useEffect(() => {
        document.title = `About Us`;
    });

    return (
        <div className="container">
            About us page
        </div>
    );
}
export default AboutUs;
