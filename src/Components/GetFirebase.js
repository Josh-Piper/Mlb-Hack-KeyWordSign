import ReactDOM from 'react-dom'
import React, { useEffect, useState } from 'react'
import firebase from '../firebase'
import Speech from 'react-speech'

function GetFirebase () {
  const [signs, setSigns] = useState([])
  const [loading, setLoading] = useState(false)

  const ref = firebase.firestore().collection('keywords')

  const getKeywords = () => {
    setLoading(true)
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setSigns(items)
      setLoading(false)
    })
  }

  useEffect(() => {
    getKeywords()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>Signs</h1>
      {signs.map((sign) => {
        return (
          <div key={sign.title}>
            <h2>{sign.title}</h2>
            <img src={sign.image} alt={sign.title} height='200' />
            <Speech
              text={sign.title}
              textAsButton
            />
          </div>
        )
      })}
    </div>
  )
}

export default GetFirebase