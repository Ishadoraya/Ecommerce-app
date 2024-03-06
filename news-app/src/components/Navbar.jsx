import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/">Kal Tak</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-light">Politics</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-light">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-light">Entertainment</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 rounded-0" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success rounded-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
