import React, { useEffect, useState } from 'react'
import firebase from '../../firebase'
import PageHeader from '../PageHeader/PageHeader';
import Form from '../Form/Form';
import Sign from '../Sign/Sign';
import {IoSearchOutline} from "react-icons/all";
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

      <Form>
        <input type='search' onChange={handleChangeWords} />
        <span className="iconWrapper">
          <IoSearchOutline/>
        </span>
      </Form>

      <div className="signs">
        {words.map((keyWord) => {
          const foundWord = getWord(keyWord)
          console.log(foundWord)
          if (foundWord) {
            return (
              <Sign title={foundWord.title} image={foundWord.image} />
            )
          }
        })}
      </div>
    </div>
  )
}

export default Translate
