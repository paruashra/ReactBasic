import React from 'react'
import './myStyles.css'
import '../appStyles.css'
import styles from '../appStyles.module.css'


function Stylesheet(props) {
  let className = props.primary ? 'primary' : ''
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheet</h1>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
    </div>
  )
}

export default Stylesheet