import React, { useEffect, useState } from 'react'
import firebase from '../../firebase'
import PageHeader from '../PageHeader/PageHeader';
import './_Translate.scss';

function Translate () {
  const [existingKeywords, setExistingKeywords] = useState([])
  const [words, setWords] = useState([])

  const ref = firebase.firestore().collection('keywords')

  const getKeywords = () => {
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setExistingKeywords(items)
    })
  }

  useEffect(() => {
    getKeywords()
  }, [])

  const getWord = (word) => {
    const result = existingKeywords.find(w => w.title.toLowerCase() === word.toLowerCase())
    return result
  }

  const handleChangeWords = (e) => {
    setWords(e.target.value.split(' '))
  }

  return (
    <div className="container">
      <PageHeader title="Translate"/>
      <input type='text' onChange={handleChangeWords} />
      <button type='submit'>Go</button>

      {words.map((keyWord) => {
        const foundWord = getWord(keyWord)
        console.log(foundWord)
        if (foundWord) {
          return (
            <div>
              <h1>{foundWord.title}</h1>
              <img src={foundWord.image} alt={foundWord.title} height='200' />
            </div>
          )
        }
      })}
    </div>
  )
}

export default Translate
