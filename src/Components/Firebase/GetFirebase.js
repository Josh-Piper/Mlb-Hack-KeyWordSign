import ReactDOM from 'react-dom'
import React, { useEffect, useState } from 'react'
import firebase from '../../firebase'
import Speech from 'react-speech'
import PageHeader from '../PageHeader/PageHeader';
import Sign from '../Sign/Sign';
import './_Firebase.scss';

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
    <div className="container">
      <PageHeader title="Signs"/>
      <div className="signs">
        {signs.map((sign) => {
          return (
            <Sign title={sign.title} image={sign.image} />
          )
        })}
      </div>

    </div>
  )
}

export default GetFirebase
