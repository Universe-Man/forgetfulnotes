// import '../styles/sass/footer.scss';
// import '../styles/Footer.module.css'
import styles from '../styles/Footer.module.scss'

const Footer = () => {
  const thisyear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <p><b>Designed and Built by Ian Pollack</b></p>
      <p>
        <a href="https://www.ianjpollack.com/" target="_blank" rel="noopener noreferrer">Portfolio</a> | <a href="https://github.com/Universe-Man/" target="_blank" rel="noopener noreferrer">Github</a> | <a href="https://www.linkedin.com/in/ianjpollack/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        {' | © '}{thisyear}
      </p>
    </div>
  )
}

export default Footer;