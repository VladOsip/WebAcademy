import './slideshow.scss';

class SlideShowNew {
  constructor(mp = document.querySelector('body')) {
    this.mountPoint = mp;
    this.data = [];
    this.slides = [];
    this.activeIndex = 0;
  }
  init() {
    console.log(1);
    this.fetchData();
  }
  fetchData() {
    console.log(2);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/movies');
    xhr.send();
    const listener = () => {
      console.log(4);
      if (xhr.status === 200) {
        const resp = JSON.parse(xhr.response);
        this.data = resp.list;
        console.log(this.data);
        this.render();
      }
    };
    xhr.onload = listener;
  }
  render() {
    this.container = document.createElement('div');
    this.container.classList.add('slide-show__slides');
    this.data.forEach((movie, i) => {
      const slide = this.renderOne(movie, i);
      this.slides.push(slide);
      this.container.appendChild(slide);
    });
    this.mountPoint.appendChild(this.container);
    this.setActive();
  }
  renderOne(movie, i) {
    const slide = document.createElement('div');
    const img = document.createElement('img');
    slide.style.transform = `translateX(-${i * 100}%)`;
    slide.classList.add('slide-show__slide');
    img.src = movie.preview.high;
    img.classList.add('slide-show__img');
    slide.onclick = () => this.nextSlide();
    slide.appendChild(img);
    return slide;
  }
  nextSlide() {
    this.slides[this.activeIndex].classList.remove('slide-show__slide_active');
    if (this.activeIndex + 1 < this.slides.length) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0;
    }
    this.setActive();
  }
  setActive() {
    this.slides[this.activeIndex].classList.add('slide-show__slide_active');
  }
}

export { SlideShowNew };
