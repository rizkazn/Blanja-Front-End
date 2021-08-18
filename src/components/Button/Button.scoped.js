import React from 'react'
import styles from './Button.css'

const Button = ({ type, title, myClass, clickAction }) => {
  return (
    <button type={type} className={`${styles.button} ${styles[myClass]}`} onClick={clickAction}>{title}</button>
  )
}

export default Button