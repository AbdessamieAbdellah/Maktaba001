import Visitor from "../Visitor/Visitor"
import './Guests.css'



const Guests = ({guests, onDelete}) => {
  
    return (
        <div className="">
          {guests.map((guest)=> (<Visitor key={guest.id} guest={guest} onDelete = {onDelete} />  ) )}  
        </div>
    )
}

export default Guests
