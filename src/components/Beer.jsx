import React, { Component } from 'react'
import {Link,Route} from "react-router-dom"
import { Container, Spinner } from 'react-bootstrap';
import BeerDetails from "./BeerDetails"

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
        fetch(`/beer/${this.props.match.params.id}?key=659d5c6b8f3d2447f090119e48202fdb`)
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
                      <BeerDetails name={items.name}/>
                </Container>
            );
        }
    }
}

export default Beer
