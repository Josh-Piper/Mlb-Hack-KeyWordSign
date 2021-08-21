import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from 'react-icons/all'
import PageHeader from '../PageHeader/PageHeader'
import firebase from '../../firebase'
import Form from '../Form/Form'
import Sign from '../Sign/Sign'
import './_Translate.scss'

const Translate = () => {
  const [existingKeywords, setExistingKeywords] = useState([])
  const [words, setWords] = useState([])

  useEffect(() => {
    const ref = firebase.firestore().collection('keywords')

    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setExistingKeywords(items)
    })
  }, [])

  const getWord = (word) => {
    const result = existingKeywords.find(w => w.title.toLowerCase() === word.toLowerCase())
    return result
  }

  const handleChangeWords = (e) => {
    setWords(e.target.value.split(' '))
  }

  return (
    <div className='container'>

      <PageHeader title='Translate' />

      <Form>
        <input type='search' onChange={handleChangeWords} />
        <span className='iconWrapper'>
          <IoSearchOutline />
        </span>
      </Form>

      <div className='signs'>
        {words.map((keyWord) => {
          const foundWord = getWord(keyWord)

          if (foundWord) {
            return (<Sign title={foundWord.title} image={foundWord.image} />)
          } else {
            return <></>
          }
        })}
      </div>
    </div>
  )
}

export default Translate
