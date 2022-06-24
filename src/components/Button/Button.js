import React from 'react'
import {Link} from 'react-router-dom'


const Button = ({ text1, text2, text3, onClick }) => {
    return (

      <>
      <Link to='/addguest' >
            <button className="button"  >{text1} </button>
      </Link>
      <Link to ='/member' > 
              <button className="button" >{text2} </button>  </Link>
       <Link to='/staff'>
             <button className="button" >{text3} </button>  
      </Link>
      </>
    )
}

export default Button