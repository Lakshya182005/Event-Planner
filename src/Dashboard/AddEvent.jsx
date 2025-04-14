import React from 'react'

function AddEvent(props) {
  return (
    <div>
        Add Event
        <button onClick={()=>{props.setaddmore(!props.addmore)}}>go back</button>
    </div>
    
  )
}

export default AddEvent