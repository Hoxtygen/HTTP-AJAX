import React from 'react'
import PropTypes from 'prop-types'

const Friend = (props) => {
  const { name, age, email} = props.friend;
    return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{age}</p>
    </div>
  )
}

export default Friend
