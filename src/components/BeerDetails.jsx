import React, { Component } from 'react'

class BeerDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
     

    }

    render() {
        return (
            <div>
               <h1>{this.props.name}</h1>
               <h1>{this.props.abv}</h1>
               <h1>{this.props.image}</h1>
               <h1>{this.props.kind}</h1>
               <h1>{this.props.genre}</h1>
               <h1>{this.props.desc}</h1>
            </div>
        )
    }
}

export default BeerDetails
