import React from 'react'
import styles from './Input.css'

const Input = ({ type, name, id, value, placeholder, myClass, myOwnClass, actionChange }) => {
  return (
    <input
    type={type}
    name={name}
    id={id}
    value={value}
    className={`${styles.input} ${styles[myClass]} ${myOwnClass}`}
    placeholder={placeholder}
    onChange={actionChange}
    />
  )
}

export default Input