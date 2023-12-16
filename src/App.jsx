
import './App.css'
import Icontypes from './components/Icontypes.jsx'
import Imageshowcase from './components/Imageshowcase.jsx'
import Testimonials from './components/Testimonials.jsx'
import Calltoaction from './components/Calltoaction.jsx'
import Footer from './components/Footer.jsx'
import test1 from '../src/img/testimonials-1.jpg'
import test2 from '../src/img/testimonials-2.jpg'
import test3 from '../src/img/testimonials-3.jpg'
import bg1 from '../src/img/bg-showcase-1.jpg'
import bg2 from '../src/img/bg-showcase-2.jpg'
import bg3 from '../src/img/bg-showcase-3.jpg'



function App() {

let icons =[
    {   icon:"bi-window",
        name:"fully Responsive",
        details:"This theme will look great on any device, no matter the size!"
    },
    {   icon:"bi-layers",
        name:"Bootstrap 5 Ready",
        details:"Featuring the latest build of the new Bootstrap 5 framework!"
    },
    {   icon:"bi-terminal",
        name:"Easy to Use",
        details:"Ready to use with your own content, or customize the source files!"
    }
]

let testimonials = [{
  image:test1,
  name:"Margaret E.",
  para:"This is fantastic! Thanks so much guys!"
},
{
    image:test2,
    name:"Fred S.",
    para:"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
  },
  {
    image:test3,
    name:"Sarah W.",
    para:"Thanks so much for making these free resources available to us!"
  }
]
 let imageshowcase=[
    {
    image:bg1,
    title:"Fully Responsive Design",
    para:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
    },
    {
    image:bg2,
    title:"Updated For Bootstrap 5",
    para:"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
    },
    {
    image:bg3,
    title:"Easy to Use & Customize",
    para:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
    }
]
  return     <>
       <nav className="navbar navbar-light bg-light static-top">
            <div className="container">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <a className="btn btn-primary" href="#signup">Sign Up</a>
            </div>
        </nav>
        <header className="masthead">
            <div className="container position-relative" >
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-white">
                            <h1 className="mb-5">Generate more leads with a professional landing page!</h1>
                                  <form className="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">
                                <div className="row">
                                    <div className="col">
                                        <input className="form-control form-control-lg" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                                        <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                                        <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
                                    </div>
                                    <div className="col-auto"><button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                                </div>
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        <p>To activate this form, sign up at</p>
                                        <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">
                  {
                   icons.map((e,i)=>{ return <Icontypes icon={e.icon} name={e.name} details={e.details} key={i}/> })
                  }
                </div>
            </div>
        </section>
      <section className="showcase">
            <div className="container-fluid reverse p-0">
               {imageshowcase.map((e,i)=>{return <Imageshowcase image={e.image} title={e.title} para={e.para} key={i}/> })}
            </div>
        </section>
      <section className="testimonials text-center bg-light">
            <div className="container">
              <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                    {
                      testimonials.map((e,i)=>{return <Testimonials testimonials={e} key={i}/>})
                    }
                </div>
            </div>
      </section>
      <Calltoaction />
      <Footer />
     
    </>
}
export default App