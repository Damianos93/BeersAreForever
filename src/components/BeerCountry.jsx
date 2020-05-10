import React, { Component } from 'react'
import { Container, Spinner } from 'react-bootstrap';

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
        fetch(`/beers/?key=659d5c6b8f3d2447f090119e48202fdb&withBreweries=Y`)
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
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        } else {
            return (
                <Container>
                      {this.state.items.map((item,key) => (
                           <div>
                             {item.breweries[0].locations[0].country.isoCode === this.props.match.params.id?item.name:null}
                            </div>
                        ))}
                </Container>
            );
            
        }
    }
}

export default BeerCountry