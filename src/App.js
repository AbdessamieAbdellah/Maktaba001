import React from "react";
import Footer from './components/Footer/Footer'
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Welcome from './components/Welcoming/Welcome'
import Button from './components/Button/Button'
import './components/Button/Button.css'
import Guests from './components/Guests/Guests'
import {useState} from 'react'
import AddMember from './components/AddMember/AddMember'
import About from "./components/About/About";
import {BrowserRouter  as Router, Route} from 'react-router-dom' 
import Home from "./components/Home/Home";
import MemberPage from "./components/MemberPage/MemberPage";


function App({cName, text} ) {

  const [guests, setGuests]= useState([
    {
    id:1, 
    name: 'Abdessamie',
    age: 24,
    status: false,
    },
  {
    id:2,
    name:'Safoine',
    age: 21,
    status: true,
  },
  {
    id:3,
    name: 'Maroine',
    age: 30,
    status: false,
  }
])


//AddMember
const addMember = (guest) => {
const id = Math.floor(Math.random() * 1000) + 1
const newGuest = {id, ...guest}
setGuests([...guests, newGuest])

}

//Delete Guest
const deleteGuest = (id)=> {
  console.log('delete', id)
} 

  return (
    <Router>
    <div className="app">
       <Navbar/>
       <Home/>

        <div className='container' >
          <Welcome/>
          <Button text1= " Guest" text2= "Member" text3= "Staff"/>
           <br/><br/><br/><br/>
    
    
        <Route path='/addguest' exact render= { (props)=>(
             <> 
         <AddMember onAdd= {addMember} />
         <Guests guests= {guests} onDelete= {deleteGuest}/>
            </>
        ) }  /> 

       <Route path='/member' exact render= { () =>(
            <> 
        <MemberPage/>
            </>
          )}  /> 
  
       <Route path='/member' compenent={MemberPage} />
    
       <Route path='/staff' exact render= { (props)=>(
             <> 
               {/* <MemberPage/> */}
              <h1> The new enrolled guests:</h1>
             <Guests guests= {guests} onDelete= {deleteGuest}/>
             </>
             )}/> 
         <Route path='/about' component={About} />
    <Footer/>
    </div>
            </div>
    </Router>
    
  );
}

export default App;
