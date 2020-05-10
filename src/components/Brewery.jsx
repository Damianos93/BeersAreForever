import React, { Component } from 'react'
import { Link, } from "react-router-dom"
import { Container, Spinner } from 'react-bootstrap';
import "./Brewery.scss"
class AllBeers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            filteredBeers: []
        }
    }
    componentDidMount() {
        fetch(`/breweries/?key=4feaae179035e0e40542edf1b44b7ff8`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data,
                        filteredBreweries: result.data
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    filterBreweries = e => {
        let filterTheBreweries = this.state.items.filter((brewery) => {
            return (
                brewery.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
        })
        this.setState({ filteredBreweries: filterTheBreweries })
    }
    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        } else {
            return (
                <div className="rafaBeau">
                        <h1 className="text-light same-side">Search For Specific Brewery</h1>
                        <input className="same-side" type="text" onChange={this.filterBreweries} />
                        <ul className="style same-side">
                            {this.state.filteredBreweries.map(item => (
                                <li key={item.name} >
                                    <Link className="text-light" to={`/brewery-details/${item.id}`} >{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                </div>



            );
        }
    }
}


export default AllBeers
