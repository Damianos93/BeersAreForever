import React, { Component } from 'react'
import { Link,  } from "react-router-dom"
import { Container, Spinner } from 'react-bootstrap';
class AllBeers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            filteredBeers:[]
        }
    }
    componentDidMount() {
        fetch(`/breweries/?key=659d5c6b8f3d2447f090119e48202fdb`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data,
                        filteredBreweries:result.data
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
        let filterTheBreweries = this.state.items.filter((brewery)=>{
            return(
                brewery.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
        })
        this.setState({filteredBreweries:filterTheBreweries})
    }
    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
            //   <div>Loading...</div>;
        } else {
            return (
                <Container>
                    <h1>Search For Specific Brewery</h1>
                    <input className="w-40" type="text" onChange= {this.filterBreweries}/>
                    <ul>
                        {this.state.filteredBreweries.map(item => (
                            <li key={item.name} >
                                <Link to={`/brewery-details/${item.id}`} >{item.name}</Link>
                            </li>
                        ))}
                        </ul>
                        
                </Container>
            );
        }
    }
}

 
export default AllBeers
