
import { BsFillVolumeUpFill } from 'react-icons/bs'
import Speech from 'react-speech'
import React from 'react'
import './_Sign.scss'

const Sign = (props) => {
  return (
    <div className='sign' key={props.title}>
      <div className='sign__inner'>
        <h2>{props.title}</h2>
        <img src={props.image} alt={props.title} height='200' />
        <span className='button-wrap'>
          <BsFillVolumeUpFill />
          <Speech text={props.title} textAsButton />
        </span>
      </div>
    </div>
  )
}

export default Sign
