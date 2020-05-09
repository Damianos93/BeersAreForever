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
        fetch(`/brewery/${this.props.match.params.id}?key=659d5c6b8f3d2447f090119e48202fdb&withLocations=Y&withSocialAccounts=Y`)
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
                <Container>
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
                </Container>
            );
        }
    }
}

export default Beer
