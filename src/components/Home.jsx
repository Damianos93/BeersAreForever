import React, { Component } from 'react'
import {Link,Route} from "react-router-dom"
import "./Home.scss"
class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="background">
                Welcome to paradi...eeh i mean...The Home Of The Beers
            </div>
        )
    }
}

export default Home
