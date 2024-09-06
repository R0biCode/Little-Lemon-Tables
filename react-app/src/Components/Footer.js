function Footer() {
    return (
      <div className="FooterWrapper">
        <div className="FooterLogo">
          <img
            className="LittleLemonLogo"
            alt="Little Lemon Logo"
            height="50px"
            width="200px"
            src={require('../Images/LittleLemonLogo.jpg')}
          />
        </div>
        <div className="FooterSection">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div className="FooterSection">
          <h3>Contact</h3>
          <ul>
            <li>Chicago, Lily Street 48C-12</li>
            <li>+40 748-493-244</li>
            <li>hello@littlelemon.com</li>
          </ul>
        </div>
        <div className="FooterSection">
          <h3>Social Media Links</h3>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Footer;
  