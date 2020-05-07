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
        fetch("/beers/?key=659d5c6b8f3d2447f090119e48202fdb")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data,
                        filteredBeers:result.data
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
    filterBeers = e => {
        let filterTheBeers = this.state.items.filter((beer)=>{
            return(
                beer.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
        })
        this.setState({filteredBeers:filterTheBeers})
    }
    render() {
        const { error, isLoaded, items } = this.state;
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
                    <h1>Search For Specific Beer</h1>
                    <input className="w-40" type="text" onChange= {this.filterBeers}/>
                    <ul>
                        {this.state.filteredBeers.map(item => (
                            <li key={item.name} >
                                <Link to={`/beer-details/${item.id}`} >{item.name}</Link>
                            </li>
                        ))}
                        </ul>
                        
                </Container>
            );
        }
    }
}

 
export default AllBeers
