import React from 'react';
import {faSortAlphaDown,faSortAlphaUp,faSortNumericUp,faSortNumericDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './css/Products.css';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedData: this.props.data.products
        }
    }
    render() {

        const sortAscendingTitle = () => {
            let data = Array.from(this.state.sortedData)

            data.sort((a, b) => a.title.localeCompare(b.title, navigator.languages[0] || navigator.language, {numeric: true, ignorePunctuation: true}))

            this.setState({
                sortedData:data
            })
        }

        const  sortDescendingTitle = () => {
            let data = Array.from(this.state.sortedData)

            data.sort((a, b) => a.title.localeCompare(b.title, navigator.languages[0] || navigator.language, {numeric: true, ignorePunctuation: true})).reverse();

            this.setState({
                sortedData:data
            })
        }

        const sortAscendingType = () => {
            let data = Array.from(this.state.sortedData)

            data.sort((a, b) => a.type.localeCompare(b.type, navigator.languages[0] || navigator.language, {numeric: true, ignorePunctuation: true}))

            this.setState({
                sortedData:data
            })
        }

        const  sortDescendingType = () => {
            let data = Array.from(this.state.sortedData)

            data.sort((a, b) => a.type.localeCompare(b.type, navigator.languages[0] || navigator.language, {numeric: true, ignorePunctuation: true})).reverse();

            this.setState({
                sortedData:data
            })
        }

        const sortAscendingDescription = () => {
            let data = Array.from(this.state.sortedData)

            data.sort((a, b) => a.description.localeCompare(b.description, navigator.languages[0] || navigator.language, {numeric: true, ignorePunctuation: true}))

            this.setState({
                sortedData:data
            })
        }

        const  sortDescendingDescription = () => {
            let data = Array.from(this.state.sortedData)

            data.sort((a, b) => a.description.localeCompare(b.description, navigator.languages[0] || navigator.language, {numeric: true, ignorePunctuation: true})).reverse();

            this.setState({
                sortedData:data
            })
        }

        const sortAscendingFileName = () => {
            let data = Array.from(this.state.sortedData)

            data.sort((a, b) => a.filename.localeCompare(b.filename, navigator.languages[0] || navigator.language, {numeric: true, ignorePunctuation: true}))

            this.setState({
                sortedData:data
            })
        }

        const  sortDescendingFileName = () => {
            let data = Array.from(this.state.sortedData)

            data.sort((a, b) => a.filename.localeCompare(b.filename, navigator.languages[0] || navigator.language, {numeric: true, ignorePunctuation: true})).reverse();

            this.setState({
                sortedData:data
            })
        }

        const sortAscendingHeight = () => {
            let data = this.state.sortedData

            data.sort((a,b) => (a.height > b.height) ? 1 : ((b.height > a.height) ? -1 : 0))

            this.setState({
                sortedData:data
            })
        }

        const  sortDescendingHeight = () => {
            let data = this.state.sortedData

            data.sort((a,b) => (a.height > b.height) ? 1 : ((b.height > a.height) ? -1 : 0)).reverse();

            this.setState({
                sortedData:data
            })
        }

        const sortAscendingWidth = () => {
            let data = this.state.sortedData

            data.sort((a,b) => (a.width > b.width) ? 1 : ((b.width > a.width) ? -1 : 0))

            this.setState({
                sortedData:data
            })
        }

        const  sortDescendingWidth = () => {
            let data = this.state.sortedData

            data.sort((a,b) => (a.width > b.width) ? 1 : ((b.width > a.width) ? -1 : 0)).reverse();

            this.setState({
                sortedData:data
            })
        }

        const sortAscendingPrice = () => {
            let data = this.state.sortedData

            data.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))

            this.setState({
                sortedData:data
            })
        }

        const  sortDescendingPrice= () => {
            let data = this.state.sortedData

            data.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)).reverse();

            this.setState({
                sortedData:data
            })
        }

        const sortAscendingRating = () => {
            let data = this.state.sortedData

            data.sort((a,b) => (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0))

            this.setState({
                sortedData:data
            })
        }

        const  sortDescendingRating= () => {
            let data = this.state.sortedData

            data.sort((a,b) => (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0)).reverse();

            this.setState({
                sortedData:data
            })
        }

        return(
            <div className="container">
                <table id="example" className="table table-striped table-bordered w-100 mt-3" >
                    <thead>
                    <tr>
                        <th className="text-center">
                            Title<br/>
                            <FontAwesomeIcon onClick={()=>sortAscendingTitle()} icon={faSortAlphaDown}  size="lg" style={{paddingRight: '6px',cursor:'pointer'}}/>
                            <FontAwesomeIcon onClick={()=>sortDescendingTitle()} icon={faSortAlphaUp} size="lg" style={{paddingRight: '6px',cursor:'pointer'}}/>
                        </th>
                        <th className="text-center">
                            Type<br/>
                            <FontAwesomeIcon onClick={()=>sortAscendingType()} icon={faSortAlphaDown} size="lg" style={{paddingRight: '6px',cursor:'pointer'}}/>
                            <FontAwesomeIcon onClick={()=>sortDescendingType()} icon={faSortAlphaUp} size="lg" style={{paddingRight: '6px',cursor:'pointer'}}/>
                        </th>
                        <th className="text-center">
                            Description<br/>
                            <FontAwesomeIcon onClick={()=>sortAscendingDescription()} icon={faSortAlphaDown} size="lg" style={{paddingRight: '6px',cursor:'pointer'}}/>
                            <FontAwesomeIcon onClick={()=>sortDescendingDescription()} icon={faSortAlphaUp} size="lg" style={{paddingRight: '6px',cursor:'pointer'}}/>
                        </th>
                        <th className="text-center">
                            Filename<br/>
                            <FontAwesomeIcon onClick={()=>sortAscendingFileName()} icon={faSortAlphaDown} size="lg" style={{paddingRight: '6px',cursor:'pointer'}}/>
                            <FontAwesomeIcon onClick={()=>sortDescendingFileName()} icon={faSortAlphaUp} size="lg" style={{paddingRight: '6px',cursor:'pointer'}}/>
                        </th>
                        <th className="text-center">
                            Height<br/>
                            <FontAwesomeIcon onClick={()=>sortAscendingHeight()} icon={faSortNumericDown} size="lg" style={{paddingRight: '6px',cursor:'pointer'}}/>
                            <FontAwesomeIcon onClick={()=>sortDescendingHeight()} icon={faSortNumericUp} size="lg" style={{paddingRight: '6px',cursor:'pointer'}}/>
                        </th>
                        <th className="text-center">
                            Width<br/>
                            <FontAwesomeIcon onClick={()=>sortAscendingWidth()} icon={faSortNumericDown} size="lg" style={{paddingRight: '6px',cursor:'pointer'}}/>
                            <FontAwesomeIcon onClick={()=>sortDescendingWidth()} icon={faSortNumericUp} size="lg" style={{paddingRight: '6px',cursor:'pointer'}}/>
                        </th>
                        <th className="text-center">
                            Price<br/>
                            <FontAwesomeIcon onClick={()=>sortAscendingPrice()} icon={faSortNumericDown} size="lg" style={{paddingRight: '6px',cursor:'pointer'}}/>
                            <FontAwesomeIcon onClick={()=>sortDescendingPrice()} icon={faSortNumericUp} size="lg" style={{paddingRight: '6px',cursor:'pointer'}}/>
                        </th>
                        <th className="text-center">
                            Rating<br/>
                            <FontAwesomeIcon onClick={()=>sortAscendingRating()} icon={faSortNumericDown} size="lg" style={{paddingRight: '6px',cursor:'pointer'}}/>
                            <FontAwesomeIcon onClick={()=>sortDescendingRating()} icon={faSortNumericUp} size="lg" style={{paddingRight: '6px',cursor:'pointer'}}/>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.sortedData.map((item,key)=>{
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
}

export default Products;
