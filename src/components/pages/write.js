import React, { Component, useState } from "react"
import axios from 'axios'


export default class Write extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      text: {
        letter: ''
    },
    isSend: false
    }
  }

  handleChange = ({target: {value, id}}) => {
    this.setState({
      text: { [id]: value }
    })
  }


  sendLetter = () => {
    axios.post('https://talks-a2a25-default-rtdb.firebaseio.com/text.json', this.state.text)
     .then(response => {
      console.log(response)
      })
      .catch(error => console.log(error))
      alert('Ваше письмо отправленно')
  }


  render() {
  // let fromInput = React.createRef()
  // let textInput = React.createRef()
 
  // const [output, setOutput] = useState('')
  // const [put, setput] = useState('')

  // function showInput() {
  //   setput(fromInput.current.value)
  //   setOutput(textInput.current.value)
  // }
  
  // let text = [output, put]

  // axios.post('https://talks-a2a25-default-rtdb.firebaseio.com/text.json', text)
  //   .then(response => {
  //    console.log(response)
  //    })
  //    .catch(error => console.log(error))
  return(
    <div className="card" style={{width: '300px', margin: 'auto', marginTop: '150px'}}>
     <textarea className="card-body" placeholder="Это твоё письмо. Расскажи всем что-нибудь интересное" id="letter" style={{minHeight: '300px', maxHeight: '400px'}} onChange={this.handleChange}/>
     <button className="btn btn-primary" onClick={this.sendLetter}>Отправить</button>
    </div>
   )  
  }
}