import React from 'react'
import PropTypes from 'prop-types'

const  NewFriend= ({handlechange, handleAddFriend, name, age, email}) => {
  return (
    <div>
      <form action="">
        <div>
          <input type="text" value = {name} name = "name" placeholder = 'Enter your name' onChange = {handlechange}/>
        </div>
        <div>
          <input type="email" value = {email} name = "email" placeholder = "Enter your email" onChange = {handlechange}/>
        </div>
        <div>
          <input type="number" value = {age} name = "age" placeholder = "Enter your age" onChange = {handlechange}/>
        </div>
        <div className = "btn-container">
          <button onClick = {handleAddFriend} type = "submit">Save</button>
        </div>
      </form>
    </div>
  )
}

export default NewFriend
