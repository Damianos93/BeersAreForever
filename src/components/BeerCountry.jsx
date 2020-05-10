import React, { Component } from 'react'
import { Container, Spinner, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import {Link} from "react-router-dom"
import "./BeerCountry.scss"

class BeerCountry extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            filteredCountries: [],
            num: 1
        }
        this.IncrNum = this.IncrNum.bind(this)
        this.DecrNum = this.DecrNum.bind(this)
    }
    fetchData = () => {
        fetch(`/beers/?key=4feaae179035e0e40542edf1b44b7ff8&withBreweries=Y&p=${this.state.num}`)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    items: result.data || [],
                    filteredBeers: result.data

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
    componentDidMount() {
        this.fetchData()
    }
    filterBeers = e => {
        let filterTheBeers = this.state.items.filter((beer) => {
            return (
                beer.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
        })
        this.setState({ filteredBeers: filterTheBeers })
    }
    IncrNum() {
        this.setState({
            num: this.state.num + 1
        })
        this.fetchData();
    }
    DecrNum() {
        this.setState({
            num: this.state.num - 1
        })
        this.fetchData();
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
                <div className="beer-background">
                    <h1 className="text-light rafaBig same-side">Search For Specific Beer</h1>
                    <input type="text" className="same-side" onChange={this.filterBeers} />
                    <ul className="style same-side">
                        {this.state.filteredBeers.map((item, key) => (
                               <li key={item.name}>
                                <Link className="text-light" to={`/beer-details/${item.id}`} >{item.name}</Link>
                                </li>
                        ))}
                        </ul>
                        <ToggleButtonGroup type="checkbox" defaultValue={[1, 2]} className="same-side">
                         <ToggleButton className="text-light bg-warning" value={1} onClick={()=>this.DecrNum()}>Previous Page</ToggleButton>
                         <ToggleButton className="text-light bg-warning" value={2} onClick={()=>this.IncrNum()}>Next Page</ToggleButton>
                     </ToggleButtonGroup>
                </div>
            );

        }
    }
}

export default BeerCountry