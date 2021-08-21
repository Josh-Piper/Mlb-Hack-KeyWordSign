import { Fragment } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import './_About.scss';

function About () {
  return (
      <Fragment>
        <PageHeader title="About"/>
        <div>
          <iframe width='300' height='200' src='https://www.youtube.com/embed/S3ZX1KV7IHY' title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen/>
          <p>
            A web app created to help children who struggle to communicate by providing an AAC application to reinforce the
            Keyword Sign gestures reinforced aurally.
          </p>
          <br/>
          <p>
            Thus, allowing children to practice their Keyword Sign and giving Speech Pathologists reinforcement learning tools
            during their sessions.
          </p>
          <p>
            Its not to teach the kids key word sign but help them verbalise what they are thinking.
          </p>
          <br/>
          <p>
            If a 2 year old knows Key Word Sign but a baby sitter come, then it can be used to help the kid verbalise what
            they are thinking since learning gestures is easier for a child.
          </p>
        </div>
      </Fragment>
  )
}

export default About