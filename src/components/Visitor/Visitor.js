import {FaTimes} from 'react-icons/fa'


const Visitor = ({guest, onDelete}) => {
    return (
        <div className='guest'>
            <p>
            NAME: {guest.name}
                 <FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=>  onDelete(guest.id)} /> 
            </p>
            <p>AGE: {guest.age}</p>
          
        </div>
    )
}

export default Visitor
