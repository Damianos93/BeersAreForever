import React, { Component } from 'react'
import "./SearchByCountry.scss"
import { Link} from "react-router-dom"
import { Container, Spinner} from 'react-bootstrap';
class searchByCountry extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            filteredCountries: [],
            num: 1
        }
    }
     
    fetchData(){
        fetch(`/locations/?key=659d5c6b8f3d2447f090119e48202fdb&p=1`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        countries: result.data,
                        filteredCountries:[]
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
    componentDidMount() {
        this.fetchData();
        
      }
    filterCountries = e => {
        let filterTheCountries = this.state.countries.filter((country) => {
           
            return (
                country.countryIsoCode.toLowerCase().includes(e.target.value.toLowerCase())
            )
        })
        
        const countries = filterTheCountries.map(q => q.countryIsoCode); 
        const countriesFinal = countries.filter((q, idx) => 
        countries.indexOf(q) === idx)
        this.setState({ filteredCountries:countries.filter((q, idx) => 
            countries.indexOf(q) === idx)})
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

                    <h1>Search by Iso code</h1>
                    <input className="w-40" type="text" onChange={this.filterCountries} />
                    <ul>
                    
                    {this.state.filteredCountries.map((item,index) => (
                            <li key={index}>
                               <Link to={`/beer-search/${item}`} >{item}</Link>
                            </li>
                        ))}
                    </ul>
                   
                </Container>
        )}
    }
}

export default searchByCountry