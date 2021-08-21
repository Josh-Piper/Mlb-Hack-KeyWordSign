import { useState } from 'react'
import firebase from '../../firebase'
import 'firebase/storage'
import './_Firebase.scss';

function UploadFirebase () {
  const [inputTitle, setInputTitle] = useState('')
  const [inputImage, setInputImage] = useState('')

  async function handleImage (e) {
    const files = e.target.files
    const reader = new FileReader()

    reader.readAsDataURL(files[0])
    reader.onload = async (e) => {
      if (inputTitle === '') return
      setInputImage(e.target.result)
      const ref = firebase
        .storage()
        .ref()
        .child(inputTitle + '.png')

      const snapshot = await ref.putString(e.target.result, 'data_url')
      const imageUrl = await snapshot.ref.getDownloadURL()

      setInputImage(imageUrl)
    }
  }

  function addKeyWord (newKeyWord) {
    const ref = firebase.firestore().collection('keywords')

    ref
      .doc(newKeyWord.title.toLowerCase())
      .set(newKeyWord)
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <div className="container">
      <h1>Upload firebase</h1>

      <label for='item-title'>Title</label>
      <input type='text' name='item-title' id='item-title' onChange={(event) => setInputTitle(event.target.value)} value={inputTitle} />
      <br />
      <label for='img'>Select image:</label>
      <input type='file' name='item-image' id='item-image' accept='image/*' onChange={(event) => { handleImage(event) }} />

      <br />
      <button
        type='submit' onClick={() => {
          const newKeyWord = {
            title: inputTitle,
            image: inputImage
          }
          addKeyWord(newKeyWord)
          setInputTitle('')
          document.getElementById('item-image').value = null
        }}
      >
        Submit
      </button>
    </div>
  )
}

export default UploadFirebase
