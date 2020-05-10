import React, { Component } from 'react'
import "./SearchByCountry.scss"
import { Link} from "react-router-dom"
import { Container, Spinner, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

class SearchByType extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            filteredStyles: [],
            num: 1
        }
    }
     
    fetchData(){
        fetch(`/styles/?key=b4511df48ed054fa8d0c793195b6fae6&p=1`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        styles: result.data,
                        filteredStyles:[]
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
         filterStyles = e => {
         let filterTheStyles = this.state.styles.filter((style) => {

             return (
                style.category.name.toLowerCase().includes(e.target.value.toLowerCase())
             )
         })

         const styles= filterTheStyles.map(q => q.category.name);
         const stylesFinal = styles.filter((q, idx) =>
            styles.indexOf(q) === idx)
         this.setState({
             filteredStyles: styles.filter((q, idx) =>
             styles.indexOf(q) === idx)
         })
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
            <div className="backgroundss">
            <div className="same-side">
                    <h1 className="text-light">Search by Style</h1>
                    <input  type="text" onChange={this.filterStyles} />
                    <ul className="style text-light">                   
                    {this.state.filteredStyles.map(item => (
                            <li key={item.id}>
                               <Link className="text-light" to={`/beer-search-type/${item}`} >{item}</Link>
                            </li>
                        ))}
                    </ul>
                    </div>
                </div>
        )}
    }
}

export default SearchByType