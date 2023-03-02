import React from "react"
import './home.css'
import axios from "axios"
import ResultDisplay from "./resultDisplay"
import Loader from "../loader"

export class Home extends React.Component {

  state = {
    text: [],
    isFetching: true
  }

  componentDidMount() {
  this.state.isFetching = true
  axios.get('https://talks-a2a25-default-rtdb.firebaseio.com/text.json')
  .then(res => {
   this.state.isFetching = false
   const fetchedResults = []
   for( let key in res.data) {
     fetchedResults.unshift(
       {
        ...res.data[key],
        id: key
       }
     )
   }
   this.setState({ text: fetchedResults })
   })
   .catch(function(error) {
    console.log(error);
  })
  }


  render() {
  return (
    <>
    {this.state.isFetching ? <Loader/> : 
    <div>
    <div className="card card-body mt-10" style={{width: '300px', margin: 'auto', marginTop: '150px'}}>
      {this.state.text.map(result => (
       <ResultDisplay 
         key={result.id}
         letter={result.letter}
       />))}
      <hr/> 
    </div>
    </div>   
      }
   </>
    )
  }
  
}