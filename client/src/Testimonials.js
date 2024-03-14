import React, { useState, useEffect } from 'react';
import './App.css';


const testimonials = [
    {
      id: 1,
      author: 'John Doe',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      author: 'Jane Smith',
      quote: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    
  ];


export default function Testimonials(){
const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

    return(
        <>
  <>
 
  <div className="container">
    <div className="row my-5 py-5">
      <div className="col">
        <img
          src="https://neilpatel.com/wp-content/uploads/fly-images/107300/Testimonial-Examples_Featured-Image-1200x675-c.png"
          className="responsive"
          alt="" width={650}
        />
      </div>
      <div className="col">
        <h1
          className="text-center mb-3 "
          style={{
            fontSize: 50,
            fontWeight: "bolder",
            fontFamily: "Playfair Display,serif"
          }}
        >
          {" "}
          What People Say
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio
          urna, lacinia vel accumsan nec, pulvinar nec elit. Vivamus vel
          vestibulum lacus. In orci orci, posuere sit amet enim ac, interdum
          cursus ligula. Mauris vel fringilla lacus. Proin at posuere justo.
          Donec non ultricies mi. Ut porttitor nisi fringilla enim consectetur,
          vel imperdiet nisi tempor. Cras in aliquet arcu. Aliquam posuere ante
          et suscipit consectetur. Nunc molestie sapien at nisi facilisis
          interdum. Quisque convallis sem vitae convallis egestas. Nunc id
          ligula turpis. Praesent placerat quis erat et gravida. Aenean nec nibh
          hendrerit tellus tincidunt mattis. In interdum ligula vel est
          condimentum elementum. Nullam turpis ipsum, convallis non mauris a,
          posuere ultrices eros. Sed at quam est. Ut placerat fermentum
          tincidunt. Etiam vitae justo in nisi blandit faucibus. Proin metus
          turpis, consequat eget varius quis, aliquet quis nibh. Morbi vitae
          velit mattis, molestie arcu sit amet, aliquet felis.
        </p>
      </div>
    </div>
  </div>


  <div className="testimonial-container">
      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className={
            index === currentTestimonialIndex
              ? 'testimonial-slide active'
              : 'testimonial-slide'
          }
        >
          <blockquote>
            <p>{testimonial.quote}</p>
            <cite>- {testimonial.author}</cite>
          </blockquote>
        </div>
      ))}
    </div>
  
</>


        </>
    )
}
