import PageHeader from '../PageHeader/PageHeader'
import { Fragment } from 'react'
import './_About.scss'

const About = () => {
  return (
    <>
      <div className='container'>
        <PageHeader title='About' />
        <div className='about'>

          <div className='about_block'>
            <h2>What is keyword sign?</h2>
            <div className='about_block_text'>
              Key Word Sign is a communication technique to assist children and others to reinforce meaning through AusLan sign language. Only 'key' words are used, such as 'more', to help adults understand children.
            </div>
          </div>
          <div className='about_block'>
            <h2>Who is this for?</h2>
            <div className='about_block_text'>
              This application is an Augmentative and Alternative Communication tool that allows children and adults communicate with each other. Many adults may not know Key Word Sign nor AusLan, in which case they can open Keyword Sign AAC for clarification.
            </div>
          </div>

          <div className='resources'>
            <h2>Further resources</h2>
            <div className='resources_block'>
              <div className='video'>
                <iframe src='https://www.youtube.com/embed/S3ZX1KV7IHY' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
              </div>
              <div className='resources_block_text'>
                Libby Brownlie, a speech pathologist, brought Key Word Sign to Australia. 
                
                <br /><br />Learn more by watching this video!
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default About
