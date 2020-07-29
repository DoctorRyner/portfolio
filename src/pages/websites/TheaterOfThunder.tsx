import landingHead from "./assets/images/landing-head.png"
import landingTitle from "./assets/images/landing-title.png"
import landingBody from "./assets/images/landing-body.png"
import musicSwitchOn from "./assets/images/music-switch-on.png"
import headerFacebookIcon from "./assets/images/header-facebook-icon.png"
import headerTwitterIcon from "./assets/images/header-twitter-icon.png"
import headerCopyIcon from "./assets/images/header-copy-icon.png"
import styles from "./assets/styles/main.scss"
import * as React from "react"

const Header: React.FC = () =>
  <header>
    <nav className={styles.landing__nav}>
      <div className={styles.landing__nav__items}>
        <img src={musicSwitchOn} className={styles.landing__nav__items__first} />
        <img src={headerTwitterIcon} />
        <img src={headerFacebookIcon} />
        <img src={headerCopyIcon} />
      </div>
    </nav>
    <img src={landingHead} className={styles.landing__bg} />
    <img src={landingTitle} className={styles.landing__title}/>
  </header>

const Content: React.FC = () => 
  <main>
    <img src={landingBody} className={styles.landing__bg} />
  </main>

const Footer: React.FC = () =>
  <footer>

  </footer>

export const View: React.FC = () =>
  <div className={styles.wrapper} >
    <Header />
    <Content />
    <Footer />
  </div>