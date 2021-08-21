import React, { useEffect, useState } from 'react'
import firebase from '../../firebase'
import PageHeader from '../PageHeader/PageHeader'
import Sign from '../Sign/Sign'
import './_Firebase.scss'

const GetFirebase = () => {
  const [signs, setSigns] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const ref = firebase.firestore().collection('keywords')

    setLoading(true)
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setSigns(items)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <PageHeader title='Loading' />
  }

  return (
    <div className='container'>
      <PageHeader title='Signs' />
      <div className='signs'>
        {signs.map((sign) => {
          return (
            <Sign key={sign.title} title={sign.title} image={sign.image} />
          )
        })}
      </div>

    </div>
  )
}

export default GetFirebase
