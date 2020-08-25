import "./assets/styles/imports.scss"
import styles from "./assets/styles/main.scss"
import landingHead from "./assets/images/landing-head.png"
import landingTitle from "./assets/images/landing-title.png"
import landingBgHands from "./assets/images/landing-bg-hands.png"
import landingBgBall from "./assets/images/landing-bg-ball.png"
import landingBody from "./assets/images/landing-body.png"
import landingWatchPlayBtn from "./assets/images/landing-watch-play-btn.png"
import landingStrokes from "./assets/images/landing-strokes.png"
import infoIcon from "./assets/images/info-icon.png"
import musicSwitchOn from "./assets/images/music-switch-on.png"
import headerFacebookIcon from "./assets/images/header-facebook-icon.png"
import headerTwitterIcon from "./assets/images/header-twitter-icon.png"
import headerCopyIcon from "./assets/images/header-copy-icon.png"

import * as React from "react"

const Header: React.FC = () =>
  <header>
    <div className={styles.landing__header_bar}>
      <img src={musicSwitchOn} />
      <img src={headerTwitterIcon} />
      <img src={headerFacebookIcon} />
      <img src={headerCopyIcon} />
    </div>
  </header>

const Content: React.FC = () => 
  <main className={styles.landing__content}>
    <img src={landingTitle} className={styles.landing__title} />
    <div className={styles.landing__watch_play_btn}>
      <img src={landingWatchPlayBtn} />
      <label>Watch Play</label>
    </div>
    <div className={styles.landing__play_to_get_rewards}>
      <img src={landingStrokes} className={styles.landing__play_to_get_rewards__strokes} />
      <label>Play to get rewards!</label>
      <img src={infoIcon} className={styles.landing__play_to_get_rewards__info_icon} />
    </div>
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
      <img src={landingBgBall} />
    </div>
  </div>

export const View: React.FC = () =>
  <div className={styles.wrapper}>
    <style>{`body {background-color: #111111}`}</style>
    <Background />
    <Header />
    <Content />
    <Footer />
  </div>