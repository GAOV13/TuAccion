import { Component } from "react";
import { Link } from 'react-router-dom';
import "../../../assets/css/slider.css"

class Slider extends Component {
  render (){
    return (
      <div class="slideshow-container">
        <div class={this.state.mySlides[0]}>
          <q>I love you the more in that I believe you had liked me for my own sake and for nothing else</q>
            <p class="author">- John Keats</p>
        </div>
        <div class={this.state.mySlides[1]}>
          <q>But man is not made for defeat. A man can be destroyed but not defeated.</q>
          <p class="author">- Ernest Hemingway</p>
        </div>
        <div class={this.state.mySlides[2]}>
          <q>I have not failed. I've just found 10,000 ways that won't work.</q>
          <p class="author">- Thomas A. Edison</p>
        </div>
        <div>
          <Link class="prev" onClick={() => this.plusSlides(-1)} to={this.props.pag}>&#10094;</Link>
          <Link class="next" onClick={() => this.plusSlides(1)} to={this.props.pag}>&#10095;</Link>
        </div>
        <div class="dot-container">
          <span class={this.state.dot[0]} onClick={() => this.currentSlide(1)}></span>
          <span class={this.state.dot[1]} onClick={() => this.currentSlide(2)}></span>
          <span class={this.state.dot[2]} onClick={() => this.currentSlide(3)}></span>
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