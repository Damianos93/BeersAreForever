import React, { Component } from 'react'
import { Container, Spinner } from 'react-bootstrap';
import "./BeerCountry.scss"

class BeerCountry extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            items: []  
        }
    }
    componentDidMount() {
        fetch(`/beers/?key=b4511df48ed054fa8d0c793195b6fae6&withBreweries=Y`)
            .then(res => res.json())
            .then((result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data || []
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
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        } else {
            return (
                <div className="beer-background">
                <div className="same-side">
                      {this.state.items.map(item => (
                           <div className="text-light">
                                {item.breweries[0].locations[0].country.isoCode==this.props.match.params.id?item.name:null}
                            </div>
                        ))}
                </div>
                </div>
            );
            
        }
    }
}

export default BeerCountry