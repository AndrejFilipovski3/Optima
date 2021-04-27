import React, {useEffect } from 'react';

function Contact() {

    useEffect(() => {
        document.title = `Contact`;
    });

    return (
        <div className="container">
            Contact page
        </div>
    );
}
export default Contact;
