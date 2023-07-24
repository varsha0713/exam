import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return ( 
        <>
         <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"pink"}}>
  <div class="container-fluid">
  <img src="https://images.unsplash.com/photo-1579820010410-c10411aaaa88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGphdmFzY3JpcHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
    <a class="navbar-brand" href="#">Travel Website</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Explore</a></li>
            <li><a class="dropdown-item" href="#">Book Package</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Contact Us</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <Link to="/"><button type="submit" class="btn" style={{backgroundColor:"#9eeaf9"}} href="home.html">Home</button></Link>
        <Link to="/Header"><button type="submit" class="btn" style={{backgroundColor:"#9eeaf9"}} href="Header.html">Header</button></Link>
        <Link to="/aboutus"><button type="submit" class="btn" style={{backgroundColor:"#9eeaf9"}} href="aboutus.html">About Us</button></Link>
        <Link to="/login"><button type="submit" class="btn" style={{backgroundColor:"#9eeaf9"}} href="login.html">Login</button></Link>
        
      </form>
    </div>
  </div>
</nav>
  
        <Outlet />
      </>
     );
}
 
export default Layout;