import landingHead from "./assets/images/landing-head.png"
// import landingTitle from "./assets/images/landing-title.png"
import landingBgHands from "./assets/images/landing-bg-hands.png"
import landingBody from "./assets/images/landing-body.png"
import musicSwitchOn from "./assets/images/music-switch-on.png"
import headerFacebookIcon from "./assets/images/header-facebook-icon.png"
import headerTwitterIcon from "./assets/images/header-twitter-icon.png"
import headerCopyIcon from "./assets/images/header-copy-icon.png"
import styles from "./assets/styles/main.scss"
import * as React from "react"

const Header: React.FC = () =>
  <header>
    <div className={styles.landing__navigation}>
      <img src={musicSwitchOn} />
      <img src={headerTwitterIcon} />
      <img src={headerFacebookIcon} />
      <img src={headerCopyIcon} />
    </div>
  </header>

const Content: React.FC = () => 
  <main>
  </main>

const Footer: React.FC = () =>
  <footer>
  </footer>
  
const Background: React.FC = () =>
  <div className={styles.landing__bg}>
    <img src={landingHead} />
    <img src={landingBody} />

    <div className={styles.landing__hands}>
      <img src={landingBgHands} />
    </div>
  </div>

export const View: React.FC = () =>
  <>
    <Background />
    <Header />
    <Content />
    <Footer />
  </>