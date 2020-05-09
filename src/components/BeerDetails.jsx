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
               <img src={this.props.image} alt={this.props.name}  />
               <h2>Country : {this.props.location}</h2>
               <h4>Kind of Beer : {this.props.kind}</h4>
               <h3>Abv : {this.props.abv}</h3>
               <p> <h3>Description :</h3> {this.props.desc}</p>
               </div>
        )
    }
}

export default BeerDetails
