import React from 'react';


function Portfolio() {
    return (
        <div className="portfolio-container">
            <div className="portfolio-content">
                
                <div className="portfolio-item">
                    <h3> Work 1</h3>
                    <p>Adipisicing incididunt ea tempor occaecat. Eu nulla esse aliqua nisi. Laboris culpa aute enim nulla irure est. Lorem pariatur voluptate commodo laboris exercitation reprehenderit. Irure aute ullamco cillum eiusmod sint Lorem sint veniam qui.</p>
                </div>
                <div className="portfolio-item">
                    <h3> Work 2</h3>
                    <p>Adipisicing incididunt ea tempor occaecat. Eu nulla esse aliqua nisi. Laboris culpa aute enim nulla irure est. Lorem pariatur voluptate commodo laboris exercitation reprehenderit. Irure aute ullamco cillum eiusmod sint Lorem sint veniam qui.</p>
                </div>
                <div className="portfolio-item">
                    <h3> Work 3</h3>
                    <p>Adipisicing incididunt ea tempor occaecat. Eu nulla esse aliqua nisi. Laboris culpa aute enim nulla irure est. Lorem pariatur voluptate commodo laboris exercitation reprehenderit. Irure aute ullamco cillum eiusmod sint Lorem sint veniam qui.</p>
                </div>
                <div className="portfolio-item">
                    <h3> Work 4</h3>
                    <p>Adipisicing incididunt ea tempor occaecat. Eu nulla esse aliqua nisi. Laboris culpa aute enim nulla irure est. Lorem pariatur voluptate commodo laboris exercitation reprehenderit. Irure aute ullamco cillum eiusmod sint Lorem sint veniam qui.</p>
                </div>
                {/* Add more portfolio items as needed */}
            </div>
            <div className="portfolio-image">
                
                <img src="https://img.freepik.com/free-vector/portfolio-management-previous-projects-samples-works-catalog-skills-presentation-successful-graphic-designer-web-developer-cartoon-character_335657-1586.jpg?t=st=1710237428~exp=1710241028~hmac=d65e84e9ddad4e1898a225d0056239d1b7d1cc71d063c8ed359c5c93d20c4cdc&w=740" alt="Portfolio"  height={20}/>
            </div>
        </div>
    );
}

export default Portfolio;
