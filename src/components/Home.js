import { Outlet} from "react-router-dom";
const Home = () => {
    return ( 
        <>
        <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://media.istockphoto.com/id/1291641896/photo/program-code-on-computer-display-in-magnifying-glass-close-up.webp?b=1&s=170667a&w=0&k=20&c=r1ecdVCH_ickNNHEyE7bP0rdmI05v6QR5bUcwh1xQZQ=" />
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Explore</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://plus.unsplash.com/premium_photo-1661412727566-dfd85cd6a21f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="myimage" width="319px" height="213px" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Plan</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="myimage" width="319px" height="213px" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Execute</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br></br>

<footer className="footer">
        <div className="container">
          <div className="row" style={{backgroundColor:"cyan"}}>
            
              <h3>Contact Us</h3>
              <ul>
                <li>123 Main Street</li>
                <li>City, State ZIP</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@example.com</li>
              </ul>
           
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                
                 
              </div>
              
            </div>
          </div>
        </div>
      </footer>
<Outlet />
</>

     );
}
 
export default Home;