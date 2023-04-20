import React, { useRef } from 'react';
import Slider from 'react-slick';

export const PreviousNextMethods = () => {
  let slider = useRef(null);
  console.log(slider);

  const next = () => {
    slider.slickNext();
  };

  const previous = () => {
    slider.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2>Previous and Next methods</h2>
      <Slider ref={c => (slider = c)} {...settings}>
        <div key={1}>
          <h3>1</h3>
        </div>
        <div key={2}>
          <h3>2</h3>
        </div>
        <div key={3}>
          <h3>3</h3>
        </div>
        <div key={4}>
          <h3>4</h3>
        </div>
        <div key={5}>
          <h3>5</h3>
        </div>
        <div key={6}>
          <h3>6</h3>
        </div>
      </Slider>
      <div style={{ textAlign: 'center' }}>
        <button className="button" onClick={previous}>
          Previous
        </button>
        <button className="button" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
};

// import React, { Component } from 'react';
// import Slider from 'react-slick';

// export class PreviousNextMethods extends Component {
//   constructor(props) {
//     super(props);
//     console.log(this);
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//   }
//   next() {
//     this.slider.slickNext();
//   }
//   previous() {
//     this.slider.slickPrev();
//   }
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };
//     return (
//       <div>
//         <h2>Previous and Next methods</h2>
//         <Slider ref={c => (this.slider = c)} {...settings}>
//           <div key={1}>
//             <h3>1</h3>
//           </div>
//           <div key={2}>
//             <h3>2</h3>
//           </div>
//           <div key={3}>
//             <h3>3</h3>
//           </div>
//           <div key={4}>
//             <h3>4</h3>
//           </div>
//           <div key={5}>
//             <h3>5</h3>
//           </div>
//           <div key={6}>
//             <h3>6</h3>
//           </div>
//         </Slider>
//         <div style={{ textAlign: 'center' }}>
//           <button className="button" onClick={this.previous}>
//             Previous
//           </button>
//           <button className="button" onClick={this.next}>
//             Next
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
