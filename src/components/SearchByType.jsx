// import React, { Component } from 'react'
// import "./SearchByCountry.scss"
// import { Link} from "react-router-dom"
// import { Container, Spinner} from 'react-bootstrap';

// class searchByCountry extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             error: null,
//             isLoaded: false,
//             countries: [],
//             filteredCountries: [],
//             num: 1
//         }
//     }
     
//     fetchData(){
        
//         fetch(`/beers/?key=b4511df48ed054fa8d0c793195b6fae6&`)
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     this.setState({
//                         isLoaded: true,
//                         countries: result.data,
//                         filteredCountries:[]
//                     });
//                 },

//                 (error) => {
//                     this.setState({
//                         isLoaded: true,
//                         error
//                     });
//                 }
//             )
//     }
//     componentDidMount() {
//         this.fetchData();
        
//       }
//     filterCountries = e => {
//         let filterTheCountries = this.state.countries.filter((country) => {
           
//             return (
//                 country.style.category.name.toLowerCase().includes(e.target.value.toLowerCase())
//             )
//         })
        
//         const countries = filterTheCountries.map(q => q.style.category.name); 
//         const countriesFinal = countries.filter((q, idx) => 
//         countries.indexOf(q) === idx)
//         this.setState({ filteredCountries:countries.filter((q, idx) => 
//             countries.indexOf(q) === idx)})
//     }
    
//     render() {
        
//         const { error, isLoaded } = this.state;
//         if (error) {
//             return <div>Error: {error.message}</div>;
//         } else if (!isLoaded) {
//             return <Spinner animation="border" role="status">
//                 <span className="sr-only">Loading...</span>
//             </Spinner>
//         } else {
//         return (
//             <div className="backgrounds">
//             <div className="same-side">
//                     <h1 className="text-light">Search by Iso code</h1>
//                     <input className="w-40" type="text" onChange={this.filterCountries} />
//                     <ul className="style">
//                     {this.state.filteredCountries.map((item,index) => (
//                             <li key={index}>
//                                <Link className="text-light" to={`/beer-search/${item}`}>{item}</Link>
//                             </li>
//                         ))}
//                     </ul>
                   
//                 </div>
//                 </div>
//         )}
//     }
// }

// export default searchByCountry