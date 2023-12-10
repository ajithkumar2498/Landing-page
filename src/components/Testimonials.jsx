

function Testimonials({testimonials}){

    return <>
   
        <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src={testimonials.image} alt="..." />
                <h5>{testimonials.name}</h5>
                <p className="font-weight-light mb-0">{testimonials.para}</p>
            </div>
        </div>
       
    </>
}

export default Testimonials