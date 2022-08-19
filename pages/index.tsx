import {} from "@fortawesome/free-brands-svg-icons"

import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlassContainer } from "../components/GlassContainer";
import Head from 'next/head'
import { IconsContainer } from "../components/IconsContainer";
import type { NextPage } from 'next'
import { ProfileImage } from "../components/ProfileImage";
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Erick Silva</title>
        <meta name="description" content="Software Engineer - Erick Silva" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <GlassContainer>
          <ProfileImage src="/erick.jpeg" width={100} height={100}/>
          <h1 className={styles.title}>
            Erick Silva
          </h1>

          <p className={styles.description}>Front-End Software Engineer</p>

          <IconsContainer>
            <a target="_blank" href="https://www.linkedin.com/in/erickhcs" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin}  height={25} width={25} color="white" />
            </a>
            <a target="_blank" href="https://github.com/erickhcs" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub}  height={25} width={25} color="white" />
            </a>
            <a target="_blank" href="https://twitter.com/erickhcs_" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter}  height={25} width={25} color="white" />
            </a>
          </IconsContainer>
        </GlassContainer>

      </main>
    </div>
  )
}

export default Home
