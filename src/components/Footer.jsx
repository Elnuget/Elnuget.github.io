function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>&copy; {year} Carlos Angulo Pizarro</p>
      </div>
    </footer>
  )
}

export default Footer
