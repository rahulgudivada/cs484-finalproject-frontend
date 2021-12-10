import React from 'react'
import googleImage from '../../assets/googleImage.png'
import githubImage from '../../assets/githubImage.png'
import styles from './LoginPage.module.css'

export default function loginPage() {

  const googleLogin = () => {
    window.open("https://cs484-finalproject-backend.herokuapp.com/auth/google", "_self");
  }

  const githubLogin = () => {
    window.open("https://cs484-finalproject-backend.herokuapp.com/auth/github", "_self");
  }


  return (
    <div className={styles.loginPage}>
      <div className={styles.loginForm}>
        <h1>Login</h1>
        <div className={styles.googleContainer} onClick={googleLogin}>
          <img src={googleImage} alt="Google Icon"/>
          <p>Login with Google</p>
        </div>
        <div className={`${styles.googleContainer} ${styles.githubContainer}`} onClick={githubLogin}>
          <img src={githubImage} alt="Github Icon"/>
          <p>Login with Github</p>
        </div>
      </div>


      
    </div>
  )
}
