  
  
  function Imageshowcase({image,title,para}){
    return <>
          <div className="row g-0 reverse ">
            <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: `url(${image})` }}></div>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                  <h2>{title}</h2>
                  <p className="lead mb-0">{para}</p>
              </div>
          </div>
    </>
  }


  export default Imageshowcase