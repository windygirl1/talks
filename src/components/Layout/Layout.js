import React, {useState} from "react"
import { Nav } from "../Navbar/Nav"
import {Home} from "../pages/home"
import './Layout.css'
import { Route, Routes } from "react-router-dom"
import { Start } from "../pages/Start"
import Write from "../pages/write"
import { SignIn } from "../pages/signin"




const Layout = () => {

  const [todo, setTodos] = useState([]);
  const [text, setText] = useState("");
  const onChangeText = (event) => {
    setText(event.target.value)
}

const onAddTask = (index) => {
  setTodos((prevState) => [...prevState, { text, id: index }]);
  setText("");
};

// const hey = todo.map((item) => (
//   <Home
//   key={item.index}
//   text={item.text} 
//   />
// ))
  return (
    <div className="Layout">
     <Nav/>
     <Routes>
     <Route path="/" element={<Start/>}></Route>
     <Route path="/home" element={<Home/>}></Route>
     <Route path="/write" element={<Write onChange={(e) => onChangeText(e)}
        onClick={onAddTask}
        value={text}/>}></Route>
     {/* <Route path="/signin" element={<SignIn/>}></Route> */}
     </Routes>
    </div>
  )
}

export default Layout