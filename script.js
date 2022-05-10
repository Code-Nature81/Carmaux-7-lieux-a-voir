class CitiesSlider extends React.Component {
    constructor(props) {
      super(props);
  
      this.IMAGE_PARTS = 4;
  
      this.changeTO = null;
      this.AUTOCHANGE_TIME = 2400;
  
      this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    }
  
    componentWillUnmount() {
      window.clearTimeout(this.changeTO);
    }
  
    componentDidMount() {
      this.runAutochangeTO();
      setTimeout(() => {
        this.setState({ activeSlide: 0, sliderReady: true });
      }, 0);
    }
  
    runAutochangeTO() {
      this.changeTO = setTimeout(() => {
        this.changeSlides(1);
        this.runAutochangeTO();
      }, this.AUTOCHANGE_TIME);
    }
  
    changeSlides(change) {
      window.clearTimeout(this.changeTO);
      const { length } = this.props.slides;
      const prevSlide = this.state.activeSlide;
      let activeSlide = prevSlide + change;
      if (activeSlide < 0) activeSlide = length - 1;
      if (activeSlide >= length) activeSlide = 0;
      this.setState({ activeSlide, prevSlide });
    }
  
    render() {
      const { activeSlide, prevSlide, sliderReady } = this.state;
      return (
        React.createElement("div", { className: classNames('slider', { 's--ready': sliderReady }) },
        React.createElement("p", { className: "slider__top-heading" }, "Carmaux 7 lieux à voir"),
        
        React.createElement("div", { className: "slider__slides" },
        this.props.slides.map((slide, index) =>
        React.createElement("div", {
          className: classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index }),
          key: slide.city },
  
        React.createElement("div", { className: "slider__slide-content" },
        React.createElement("h3", { className: "slider__slide-subheading" }, slide.country || slide.city),
        React.createElement("h2", { className: "slider__slide-heading" },
        slide.city.split('').map(l => React.createElement("span", null, l))),
  
        React.createElement("p", { className: "slider__slide-readmore" }, "")),
  
        React.createElement("div", { className: "slider__slide-parts" },
        [...Array(this.IMAGE_PARTS).fill()].map((x, i) =>
        React.createElement("div", { className: "slider__slide-part", key: i },
        React.createElement("div", { className: "slider__slide-part-inner", style: { backgroundImage: `url(${slide.img})` } }))))))),
  
  
  
  
  
  
        React.createElement("div", { className: "slider__control", onClick: () => this.changeSlides(-1) }),
        React.createElement("div", { className: "slider__control slider__control--right", onClick: () => this.changeSlides(1) }),
        React.createElement("div", { className: "slider__table" })));
  
  
  }}
  
  
  const slides = [
  {
    city: 'Aux-Morts',
    country: 'Monument',
    img: 'https://image.jimcdn.com/app/cms/image/transf/dimension=682x2048:format=jpg/path/sb96c01c741db7101/image/ie5a564fb0f997125/version/1617690211/image.jpg/' },
  {
    city: 'Cérou',
    country: 'Le',
    img: 'https://image.jimcdn.com/app/cms/image/transf/dimension=682x2048:format=jpg/path/sb96c01c741db7101/image/i5b0aa0df4bddeb2e/version/1617735038/image.jpg' },
  
  {
    city: 'Kiosque',
    country: 'Le',
    img: 'https://image.jimcdn.com/app/cms/image/transf/dimension=682x2048:format=jpg/path/sb96c01c741db7101/image/i4e5013ce500fc111/version/1617993853/image.jpg/' },
  
  {
    city: 'Verdure',
    country: 'Théâtre',
    img: 'https://image.jimcdn.com/app/cms/image/transf/dimension=682x2048:format=jpg/path/sb96c01c741db7101/image/i49d319abf33fd30f/version/1617699411/image.jpg' },
  
  {
    city: 'Médiathèque',
    country: 'La',
    img: 'https://image.jimcdn.com/app/cms/image/transf/dimension=682x2048:format=jpg/path/sb96c01c741db7101/image/iee933ecc8d194019/version/1617735038/image.jpg/' },

    {
        city: 'Coin-Du-Lac',
        country: 'Fontaine',
        img: 'https://image.jimcdn.com/app/cms/image/transf/dimension=682x2048:format=jpg/path/sb96c01c741db7101/image/ia7bb21dd5457bf5d/version/1617690211/image.jpg/' },
  
    {
      city: 'Jean-Jaurès',
      country: 'Statue',
      img: 'https://image.jimcdn.com/app/cms/image/transf/dimension=682x2048:format=jpg/path/sb96c01c741db7101/image/i7b7d6fec1d54286b/version/1617690211/image.jpg/' }];
    
   
  
  
  
  ReactDOM.render(React.createElement(CitiesSlider, { slides: slides }), document.querySelector('#app'));
  
  