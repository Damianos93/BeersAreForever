import React, { Component } from 'react'

class AllBreweries extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }


    }

    render() {
        return (
            <div>
                <h1>Brewery : {this.props.name}</h1>
                <img src={this.props.image} alt={this.props.name} />
                <p> <h3>About us :</h3> {this.props.desc}</p>
                <h2>Our Website</h2><a href={this.props.website} rel="noopener noreferrer" target="_blank">{this.props.website}</a>
                <h3>Established at : {this.props.est}</h3>
                <h5> Country : {this.props.country}</h5>
                <h5>City : {this.props.city}</h5>
                <h5>Address : {this.props.location}</h5>
                <h5>State : {this.props.state}</h5>
                ]
            </div>
        )
    }
}

export default AllBreweries
