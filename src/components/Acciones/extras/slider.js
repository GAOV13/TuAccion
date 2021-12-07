import { Component } from "react";
import { Link } from 'react-router-dom';
import "../../../assets/css/slider.css"
import IMG1 from "../../../assets/img/BANNER1.jpg"
import IMG2 from "../../../assets/img/BANNER2.jpg"
import IMG3 from "../../../assets/img/BANNER3.jpg"

class Slider extends Component {
  render (){
    return (
      <div className="slideshow-container">
        <div className={this.state.mySlides[0]}>
          <img src={IMG1}></img>
          {/* <div className="texto">  
            <q>I love you the more in that I believe you had liked me for my own sake and for nothing else</q>
            <p className="author">- John Keats</p>
          </div> */}
        </div>
        <div className={this.state.mySlides[1]}>
          <img src={IMG2}></img>
          {/* <div className="texto">
            <q>But man is not made for defeat. A man can be destroyed but not defeated.</q>
            <p className="author">- Ernest Hemingway</p>
          </div> */}
        </div>
        <div className={this.state.mySlides[2]}>
        <img src={IMG3}></img>
          {/* <div className="texto">  
            <q>I have not failed. I've just found 10,000 ways that won't work.</q>
            <p className="author">- Thomas A. Edison</p>
          </div> */}
        </div>
        <div>
          <Link className="estilo prev" onClick={() => this.plusSlides(-1)} to={this.props.pag}>&#10094;</Link>
          <Link className="estilo next" onClick={() => this.plusSlides(1)} to={this.props.pag}>&#10095;</Link>
        </div>
        <div className="dot-container">
          <span className={this.state.dot[0]} onClick={() => this.currentSlide(1)}></span>
          <span className={this.state.dot[1]} onClick={() => this.currentSlide(2)}></span>
          <span className={this.state.dot[2]} onClick={() => this.currentSlide(3)}></span>
        </div>
      </div>
    );
  }

  constructor(props){
    super(props);
    this.state = {slideIndex: this.props.id,
                  mySlides: ["mySlides", "mySlides", "mySlides"],
                  dot: ["dot", "dot", "dot"]};
    this.showSlides(this.props.id)
  }

  componentWillUnmount(){
    this.setState( { } )
	}

  showSlides(n) {
    var i;
    var index = n;
    var slides = this.state.mySlides;
    var dots = this.state.dot;
    if (n > slides.length) {index = 1}
    if (n < 1) {index = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i] = "mySlides";
      dots[i] = dots[i].replace(" active", "");
    }
    slides[index-1] = "mySlidesB";
    dots[index-1] += " active";

    this.setState({
      mySlides: slides,
      dot: dots,
      slideIndex: index
    });
    this.idSelect(index)
  }

  plusSlides(n) {
    var index = this.state.slideIndex + n;
    this.showSlides(index);
  }

  currentSlide(n) {
    this.showSlides(n);
  }

  idSelect(n){
    this.props.onIdSelect(n);
  }
}

export default Slider;