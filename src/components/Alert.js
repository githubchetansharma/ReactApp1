import React from 'react'
import '../App.css';
export default function Alert(props){
  return (
    props.alert && <div className="fixed-top alert alert-warning alert-dismissible fade show" role="alert">
      <strong className='pera'>{props.alert.type}</strong>:<p className='pera'>{props.alert.msg}</p>
    </div>
  )
}
