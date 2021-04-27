import React, {useEffect } from 'react';
import './css/Products.css';

function Products(props) {

    useEffect(() => {
        document.title = `Products`;
    });

    return (
        <div className="container">
            <table id="example" className="table table-striped table-bordered w-100 mt-3" >
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Filename</th>
                    <th>Height</th>
                    <th>Width</th>
                    <th>Price</th>
                    <th>Rating</th>
                </tr>
                </thead>
                <tbody>
                {props.data.products.map((item,key)=>{
                    return(
                        <tr key={key}>
                            <td>{item.title}</td>
                            <td>{item.type}</td>
                            <td>{item.description}</td>
                            <td>{item.filename}</td>
                            <td>{item.height}</td>
                            <td>{item.width}</td>
                            <td>{item.price}</td>
                            <td>{item.rating}</td>
                        </tr>
                    )
                })}
                </tbody>
                <tfoot>
                <tr>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Filename</th>
                    <th>Height</th>
                    <th>Width</th>
                    <th>Price</th>
                    <th>Rating</th>
                </tr>
                </tfoot>
            </table>
        </div>
    );
}
export default Products;
