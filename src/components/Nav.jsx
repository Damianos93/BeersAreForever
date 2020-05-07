import React, { Component } from 'react'
import {Nav} from 'react-bootstrap';
import "./Nav.scss"
class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Nav className="beer-image">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/allBeers" >AllBeers</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Breweries</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default NavBar