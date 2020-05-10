import React, { Component } from 'react'
import { Container, Spinner } from 'react-bootstrap';
import BeerDetails from "./BeerDetails"

class Beer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            items: [] ,
            
        }
    }
    componentDidMount() {
        fetch(`/beer/${this.props.match.params.id}?key=4feaae179035e0e40542edf1b44b7ff8&withBreweries=Y`)
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
                <div className="same-side">
                      <BeerDetails 
                      name={items.name} 
                      location={items.breweries[0].locations[0].country.name}
                      image={items.labels?items.labels.medium:null}
                      abv={items.abv} 
                      desc={items.style.description}
                      kind={items.style.category.name} />
                </div>
                
            );
        }
    }
}

export default Beer
