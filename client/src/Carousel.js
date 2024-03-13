import React from 'react';

export default function Carousel(){
    return(
        <>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://raw.githubusercontent.com/solodev/text-animations-slick-slider/master/images/rocket.jpg" alt="" className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Introduction to Rocket Launches</h5>
                        <p>Learn about the exciting world of rocket launches and space exploration.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://www.etcourse.com/sites/default/files/2019-01/Highlights-Job%20Opportunities.jpg" alt="" className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Explore Job Opportunities</h5>
                        <p>Discover career options and job opportunities in various industries.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span style={{ backgroundColor: "#004795" }} className="carousel-control-prev-icon rounded-circle" />
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span style={{ backgroundColor: "#004795" }} className="carousel-control-next-icon rounded-circle" />
            </button>
        </div>
        </>
    )
}
