// import React, { Component } from 'react'
// import { Link, } from "react-router-dom"
// import { Container, Spinner, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
// import "./AllBeers.scss"

// class AllBeers extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             error: null,
//             isLoaded: false,
//             items: [],
//             filteredBeers: [],
//             num: 1
//         }
//         this.IncrNum = this.IncrNum.bind(this)
//         this.DecrNum = this.DecrNum.bind(this)
//     }
   
//         fetchData(){
//             fetch(`/beers?key=659d5c6b8f3d2447f090119e48202fdb&p=${this.state.num}`)
//         .then(res => res.json())
//         .then(
//             (result) => {
//                 this.setState({
//                     isLoaded: true,
//                     items: result.data,
//                     filteredBeers: result.data.slice(0,20)
//                 });
//             },

//             (error) => {
//                 this.setState({
//                     isLoaded: true,
//                     error
//                 });
//             }
//         )
// }
//         componentDidMount() {
//             this.fetchData()
//         }
//     filterBeers = e => {
//         let filterTheBeers = this.state.items.filter((beer) => {
//             return (
//                 beer.name.toLowerCase().includes(e.target.value.toLowerCase())
//             )
//         })
//         this.setState({ filteredBeers: filterTheBeers })
//     }
//     IncrNum() {
//         this.setState({
//             num: this.state.num + 1
//         })
//         this.fetchData();
//     }
//     DecrNum() {
//         this.setState({
//             num: this.state.num - 1
//         })
//         this.fetchData();
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
//             return (
//                 <div className="back">
                  
//                         <div>
//                         <h1 className="text-light rafaBig">Search For Specific Beer</h1>
//                     <input type="text" onChange={this.filterBeers} />
//                     <ul className="style same-side">
//                         {this.state.filteredBeers.map(item => (
//                             <li key={item.name}>
//                                 <Link className="text-light" to={`/beer-details/${item.id}`} >{item.name}</Link>
//                             </li>
//                         ))}
//                     </ul>
//                     </div>
//                     <ToggleButtonGroup type="checkbox" defaultValue={[1, 2]} className="mb-2">
//                         <ToggleButton className="text-light bg-warning" value={1} onClick={()=>this.DecrNum()}>Previous Page</ToggleButton>
//                         <ToggleButton className="text-light bg-warning" value={2} onClick={()=>this.IncrNum()}>Next Page</ToggleButton>
//                     </ToggleButtonGroup>
                       
                    
                   
                    
//                 </div>
//             );
//         }
//     }
// }


// export default AllBeers

import React, {useState, useCallback,useEffect} from 'react'
import { Link } from "react-router-dom"
import { Spinner, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import "./AllBeers.scss"



function AllBeers() {

    const [pageCounter, setPageCounter] = useState(1)
    const [isLoaded,setIsLoaded] = useState(false)
    const [filterBeers,setFilterBeers] = useState(null)
    const [items,setItems] = useState([])
    const [error,setError] = useState(false)

    const fetchData=()=>{
         fetch(`/beers?key=4feaae179035e0e40542edf1b44b7ff8&p=${pageCounter}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true)
                    setItems(result.data)
                },

                (error) => {
                    setIsLoaded(true)
                    setError(true)
                }
            )}
    const filteredBeers = e => {
        setFilterBeers(items.filter((beer) => {
            return (
                beer.name.toLowerCase().includes(e.target.value.toLowerCase())
                )
            }))
        }
    
    const IncrNum = useCallback(()=>{
        setPageCounter(pageCounter+1)
        fetchData()
    },[pageCounter])
    const DecrNum = useCallback(()=>{
        if(pageCounter>0){
        setPageCounter(pageCounter-1)
        fetchData()}
    },[pageCounter])
    useEffect(() => {
        fetchData();
        });
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
           return <Spinner animation="border" role="status">
               <span className="sr-only">Loading...</span>
            </Spinner>
        } else {
            return (
               <div className="back">
                    <div>
                    <h1 className="text-light same-side">Search For Specific Beer</h1>
                    <input type="text" className="same-side" onChange={filteredBeers} />
                    </div>
                    <ul className="style same-side">
                        {filterBeers!=null?filterBeers.map(item => (
                            <li key={item.name}>
                                <Link className="text-light"  to={`/beer-details/${item.id}`} >{item.name}</Link>
                            </li>
                        )):items.map(item => (
                            <li key={item.name}>
                                <Link className="text-light"  to={`/beer-details/${item.id}`} >{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <ToggleButtonGroup type="checkbox" defaultValue={[1, 2]} className="same-side">
                        <ToggleButton className="text-light bg-warning" value={1} onClick={DecrNum}>Previous Page</ToggleButton>
                        <ToggleButton className="text-light bg-warning" value={2} onClick={IncrNum}>Next Page</ToggleButton>
                    </ToggleButtonGroup>
                </div>
            );
        }
    
}


export default AllBeers
