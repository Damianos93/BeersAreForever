import React, { Component } from 'react'
import { Container, Spinner } from 'react-bootstrap';
import AllBreweries from './AllBreweries';

class Beer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            items: []  
        }
    }
    componentDidMount() {
        fetch(`/brewery/${this.props.match.params.id}?key=4feaae179035e0e40542edf1b44b7ff8&withLocations=Y&withSocialAccounts=Y`)
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
                      <AllBreweries 
                      name={items.name} 
                      country={items.locations[0].country.name}
                      location={items.locations[0].streetAddress}
                      city={items.locations[0].locality}
                      state={items.locations[0].region}
                      image={items.images.medium} 
                      website={items.website} 
                      desc={items.description}
                      est={items.established} 
                    />
                    </div>
            
            );
        }
    }
}

export default Beer
