import React from 'react'
import PropTypes from 'prop-types'

const  NewFriend= (props) => {
  return (
    <div>
      <form action="">
        <div>
          <input type="text" name = "name" placeholder = 'Enter your name'/>
        </div>
        <div>
          <input type="email" name = "email" placeholder = "Enter your email"/>
        </div>
        <div>
          <input type="number" name = "age" placeholder = "Enter your age"/>
        </div>
        <div className = "btn-container">
          
        </div>
      </form>
    </div>
  )
}

export default NewFriend
