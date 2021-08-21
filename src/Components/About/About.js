import { Fragment } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import './_About.scss';

function About () {
  return (
      <Fragment>
      <div className="container">
        <PageHeader title="About"/>
          <div className="about">

            <div className="about_block">
              <h2>What is keyword sign?</h2>
              <div className="about_block_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor turpis, aliquet a nulla et, volutpat egestas urna. Cras a enim non dolor vehicula auctor nec eget felis. Quisque quis metus ac erat scelerisque malesuada. 
              </div>
            </div>
            <div className="about_block">
              <h2>Who is this for?</h2>
              <div className="about_block_text">
                #TODO: list styling? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor turpis, aliquet a nulla et, volutpat egestas urna. Cras a enim non dolor vehicula auctor nec eget felis. 
              </div> 
            </div>

            <div className="resources">
              <h2>Further resources</h2>
              <div className="resources_block">
                <div className="video">
                  <iframe src='https://www.youtube.com/embed/S3ZX1KV7IHY' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen/>
                </div>
                  <div className="resources_block_text">
                    #TODO: list styling, find further links or make video fullsize
                  </div>
                </div>
              </div>
          </div>
          
      </div>
      </Fragment>
  )
}

export default About
