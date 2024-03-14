import SubscribeSection from "./SubscribeSection";

export default function Footer(){
    return(
        <>
     <>
  <footer
    className="text-center text-lg-start text-white p-5"
    style={{ backgroundColor: "#4d4ffa", height: 500 }}
  >
    
    <div className="container p-4 pb-0">
      <section className="">
        
        <div className="row">
          
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Company name
            </h6>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tempus neque sed odio lobortis hendrerit. Suspendisse ultrices nec
              nunc vitae tristique. Aliquam vel nunc porttitor, blandit nisl
              semper, dapibus lectus. Vivamus vitae orci et nulla consequat
              hendrerit a quis justo.
            </p>
          </div>
          
          <hr className="w-100 clearfix d-md-none" />
          
          
          
          <hr className="w-100 clearfix d-md-none" />
        
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 text-white">
            <h6 className="text-uppercase mb-4 font-weight-bold text-white">
              Contact
            </h6>
            <p className="text-white">
              <i className="fas fa-home mr-3 " /> Mysore
            </p>
            <p className="text-white">
              <i className="fas fa-envelope mr-3 text-white" /> abc@gmail.com
            </p>
            <p className="text-white">
              <i className="fas fa-phone mr-3 text-white" /> 9876543210
            </p>
            <p className="text-white">
              <i className="fas fa-print mr-3 text-white" /> 9876543218
            </p>
          </div>
          <hr className="w-100 clearfix d-md-none" />
        
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 text-white">
            <h6 className="text-uppercase mb-4 font-weight-bold text-white">
              Contact
            </h6>
            <SubscribeSection></SubscribeSection>
          </div>
          
          
        </div>
        
      </section>
    
      <hr className="my-3" />
      
      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">
          
          <div className="col-md-7 col-lg-8 text-center text-md-start">
            
            <div className="p-3">
              © 2024 Copyright: Amirtha
               
            </div>
            
          </div>
          
          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
          
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/">
              <i className="fab fa-facebook-f" />
            </a>
            
            <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/">
              <i className="fab fa-twitter" />
            </a>
            
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.google.com/">
              <i className="fab fa-google" />
            </a>
            
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </section>
     
    </div>
    
  </footer>
  
</>

        </>
    )
}
