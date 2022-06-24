import {useState} from 'react'


const AddMember = ({onAdd}) => {


    const [name, setFullName]     = useState('')
    const [age, setAge]           = useState('')
    const [status, setStatus]     = useState(false)
    
    const onSubmit = (e) => {
        e.preventDefault()

         if(!name){
        alert('Please enter a Valid Full Name!')
        return
                       }

        onAdd({name, age, status})
        setFullName('')
        setAge('')
        setStatus(false)
        
    }

    return (
        <form className='add-form' onSubmit= {onSubmit}>
            <div className='form-control'>
                <label>
                 Full Name:  
                </label>
                <input type='text' placeholder='Enter your Full Name' value={name} 
                onChange={(e) => setFullName(e.target.value)  }  />
            </div>
            <div className='form-control'>
                <label >
                 Age:
                </label>
                <input type='text' placeholder='Enter your Age' value={age} onChange={(e) => setAge(e.target.value) }  />            
            </div>
            <div className='form-control
                          form-control-check' >
                <label> 
                    Set Status
                </label>
                <input type='checkbox' checked={status} value={status} onChange={(e)=> setStatus(e.currentTarget.checked) } />
            </div>
            <input type='submit' value='Save Member' className='btn btn-block'/>
        </form>
    )
}

export default AddMember
