import React, {useEffect } from 'react';

function CompanyStructure() {

    useEffect(() => {
        document.title = `Company Structure`;
    });

    return (
        <div className="container">
            Company Structure page
        </div>
    );
}
export default CompanyStructure;
