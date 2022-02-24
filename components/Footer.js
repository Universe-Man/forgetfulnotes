// import '../styles/sass/footer.scss';

const Footer = () => {
  const thisyear = new Date().getFullYear();

  return (
    <div className="footer">
      <h4>Designed and Built by Ian Pollack</h4>
      <p>
        <a href="https://www.ianjpollack.com/" target="_blank" rel="noopener noreferrer">Portfolio</a> | <a href="https://github.com/Universe-Man/" target="_blank" rel="noopener noreferrer">Github</a> | <a href="https://www.linkedin.com/in/ianjpollack/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        {' | © '}{thisyear}
      </p>
    </div>
  )
}

export default Footer;