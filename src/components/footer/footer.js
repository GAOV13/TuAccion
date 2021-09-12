import { Component } from "react";
import "../../assets/css/footer.css"

class Footer extends Component {
  render(){
    return (
      <section className='footer_info'>
          <div className='footer_container'>
            <div className='footer_item'>
              <h1>Our Vision</h1>
            </div>
            <div className='footer_item'>
              <h1>Features</h1>
            </div>
            <div className='footer_item'>
              <h1>Our Team</h1>
            </div>
            <div className='footer_item'>
              <h1>Latest News</h1>
            </div>
            <div className='footer_item'>
              <h1>Contact</h1>
            </div>
          </div>
          <p>Copyright Metro Hospital 2021</p>
      </section>
    );
  }
}

export default Footer;