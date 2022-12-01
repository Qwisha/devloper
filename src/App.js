import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap/dist/js/bootstrap';
import OwlCarousel from 'react-owl-carousel';
// import 'react-owl-carousel'; 
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Typewriter from 'typewriter-effect';
import { BsPhone, BsLaptop, BsTriangle, BsColumns, BsDistributeVertical, BsGlobe2 } from "react-icons/bs";
import { FaAndroid, FaAngular, FaApple, FaCss3, FaEnvelope, FaFacebookF, FaHtml5, FaInstagram, FaLinkedinIn, FaMapMarkedAlt, FaPhoneAlt, FaPinterest, FaQuoteLeft, FaReact, FaTwitter } from "react-icons/fa";

function App() {
    const options = {
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2,
            },
            400: {
                items: 2,
            },
            600: {
                items: 3,
            },
            700: {
                items: 4,
            },
            1000: {
                items: 5,
    
            }
        },
    };
    const options1 = {
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        dots:true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 2,
    
            }
        },
    };
    return (
        <>
            <div>
                <header>
                    <header class="main-header">
                        <nav class="navbar header-nav navbar-expand-lg one-page-nav">
                            <div class="container">

                                <a class="navbar-brand" href="#">
                                    <img src={require('./image/asset 0.png')} title="" alt="" />
                                </a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-collapse-toggle" aria-controls="navbar-collapse-toggle" aria-expanded="false" aria-label="Toggle navigation">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>

                                <div class="collapse navbar-collapse justify-content-end" id="navbar-collapse-toggle">
                                    <ul class="navbar-nav mx-auto">
                                        <li><a class="nav-link active" data-scroll-nav="0" href="#home"><span>Home</span></a></li>
                                        <li><a class="nav-link" data-scroll-nav="1" href="#services"><span>Services</span></a></li>
                                        <li><a class="nav-link" data-scroll-nav="2" href="#skill"><span>Skills</span></a></li>
                                        <li><a class="nav-link" data-scroll-nav="3" href="#work"><span>Portfolio</span></a></li>
                                        <li><a class="nav-link" data-scroll-nav="4" href="#contactus"><span>Contact</span></a></li>
                                    </ul>
                                </div>

                                <div class="ms-auto d-none d-lg-block">
                                    <a class="px-btn px-btn-theme" data-scroll-nav="4" href="#contactus">Contact Now</a>
                                </div>
                            </div>
                        </nav>
                    </header>
                </header>
                <section data-scroll-index="0" class="home-section bg-gray" id='home'>
                    <div class="container">
                        <div class="row gy-5 align-items-center">
                            <div class="col-lg-6">
                                <div class="home-intro one-page-nav text-center text-lg-start">
                                    <h6>👋, My name is Krinky</h6>
                                    <h1 className='d-flex left-align1'>I'm a <span class='ms-1'> <Typewriter
                                        options={{
                                            strings: ['Developer', 'Designer'],
                                            delay: 230,
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    /></span></h1>

                                    <p>Based in Los Angeles, California.</p>
                                    <div class="btn-bar">
                                        <a class="px-btn px-btn-theme" href="#">Let's Start</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 pt-4 pt-lg-0">
                                <div class="home-image text-center">
                                    <img src={require('./image/asset 1.png')} title="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="bg-dark py-3 py-md-4">
                        <div class="container">
                            <OwlCarousel className='owl-theme'dots={false} {...options}>
                                <div class='item  item1'>
                                    <div class="p-3 text-center d-flex align-items-center justify-content-center w-100">
                                        <img src={require('./image/asset 3.png')} title="" alt="" />
                                    </div>
                                </div>
                                <div class='item item1'>
                                    <div class="p-3 text-center d-flex align-items-center justify-content-center w-100">
                                        <img src={require('./image/asset 4.png')} title="" alt="" />
                                    </div>
                                </div>
                                <div class='item item1'>
                                    <div class="p-3 text-center d-flex align-items-center justify-content-center w-100">
                                        <img src={require('./image/asset 5.png')} title="" alt="" />
                                    </div>
                                </div>
                                <div class='item item1'>
                                    <div class="p-3 text-center d-flex align-items-center justify-content-center w-100">
                                        <img src={require('./image/asset 6.png')} title="" alt="" />
                                    </div>
                                </div>
                                <div class='item item1'>
                                    <div class="p-3 text-center d-flex align-items-center justify-content-center w-100">
                                        <img src={require('./image/asset 7.png')} title="" alt="" />
                                    </div>
                                </div>
                                <div class='item item1'>
                                    <div class="p-3 text-center d-flex align-items-center justify-content-center w-100">
                                        <img src={require('./image/asset 8.png')} title="" alt="" />
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </section>

                <section>
                    <div>
                        <div class="container">
                            <div class="row my-5 gy-5 align-items-center">
                                <div class="col-lg-6 text-center">
                                    <img src={require('./image/asset 9.png')} title="" alt="" />
                                </div>
                                <div class="col-lg-6 ps-lg-5">
                                    <div class="about-text">
                                        <h3 class="h1">I'm a Freelancer Front-end Developer with over 3 years of experience.</h3>
                                        <p>I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>
                                        <div class="row pt-2">
                                            <div class="col-6 col-md-4">
                                                <h5>285+</h5>
                                                <span>Projet Completed</span>
                                            </div>
                                            <div class="col-6 col-md-4">
                                                <h5>190+</h5>
                                                <span>Happy Clients</span>
                                            </div>
                                        </div>
                                        <div class="btn-bar pt-4">
                                            <a class="px-btn px-btn-theme me-4" href="#contactus">Contact Me</a>
                                            <a class="px-btn px-btn-dark" href="#portfolio">Portfolio</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <section data-scroll-index="1" class="mt-3 section services-section bg-gray service" id="services">
                            <div class="container">
                                <div class="row section-heading justify-content-center">
                                    <div class="col-lg-6 text-center">
                                        <h3><span>My Services</span></h3>
                                    </div>
                                </div>
                                <div class="row gy-4">
                                    <div class="col-md-6">
                                        <div class="feature-box-01 bg-1">
                                            <div class="icon"><BsPhone /></div>
                                            <div class="feature-content">
                                                <h5>Web Design</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="feature-box-01 bg-2">
                                            <div class="icon"><BsLaptop /></div>
                                            <div class="feature-content">
                                                <h5>Development</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="feature-box-01 bg-3">
                                            <div class="icon"><BsTriangle /></div>
                                            <div class="feature-content">
                                                <h5>SEO Marketing</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="feature-box-01 bg-4">
                                            <div class="icon"><BsColumns /></div>
                                            <div class="feature-content">
                                                <h5>Web Design</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="feature-box-01 bg-5">
                                            <div class="icon"><BsDistributeVertical /></div>
                                            <div class="feature-content">
                                                <h5>Development</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="feature-box-01 bg-6">
                                            <div class="icon"><BsGlobe2 /></div>
                                            <div class="feature-content">
                                                <h5>SEO Marketing</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                <section>
                    <div>
                        <section data-scroll-index="2" class="section experience-section pb-0" id='skill'>
                            <div class="container">
                                <div class="row gy-5">
                                    <div class="col-lg-6">
                                        <div class="section-heading">
                                            <h3 class="m-0"><span>My Skills</span></h3>
                                        </div>
                                        <div class="skill-box">
                                            <div class="row g-3">
                                                <div class="col-6 col-md-4 col-lg-6">
                                                    <div class="feature-box-02 bg-1">
                                                        <div class="icon">
                                                            <FaHtml5 />
                                                        </div>
                                                        <h6>HTML</h6>
                                                    </div>
                                                </div>
                                                <div class="col-6 col-md-4 col-lg-6">
                                                    <div class="feature-box-02 bg-2">
                                                        <div class="icon">
                                                            <FaCss3 />
                                                        </div>
                                                        <h6>CSS</h6>
                                                    </div>
                                                </div>
                                                <div class="col-6 col-md-4 col-lg-6">
                                                    <div class="feature-box-02 bg-3">
                                                        <div class="icon">
                                                            <FaReact />
                                                        </div>
                                                        <h6>React JS</h6>
                                                    </div>
                                                </div>
                                                <div class="col-6 col-md-4 col-lg-6">
                                                    <div class="feature-box-02 bg-4">
                                                        <div class="icon">
                                                            <FaAngular />
                                                        </div>
                                                        <h6>Angular</h6>
                                                    </div>
                                                </div>
                                                <div class="col-6 col-md-4 col-lg-6">
                                                    <div class="feature-box-02 bg-5">
                                                        <div class="icon">
                                                            <FaApple />
                                                        </div>
                                                        <h6>iOs App</h6>
                                                    </div>
                                                </div>
                                                <div class="col-6 col-md-4 col-lg-6">
                                                    <div class="feature-box-02 bg-6">
                                                        <div class="icon">
                                                            <FaAndroid />
                                                        </div>
                                                        <h6>App Dev</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 text-center">
                                        <img src={require('./image/asset 10.png')} title="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                <section>
                    <div>
                        <section class="py-5 bg-dark" id='work'>
                            <div class="container">
                                <div class="row gy-3">
                                    <div class="col-lg-8 col-md-7 text-center text-md-start">
                                        <h4 class="h1 m-0 text-white">Intrested working with me?</h4>
                                    </div>
                                    <div class="col-lg-4 col-md-5 text-center text-md-end">
                                        <a class="px-btn px-btn-theme2" data-scroll-nav="4" href="#contactus">Contact Now</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                <section>
                    <div>
                        <section data-scroll-index="3" class="section work-section bg-gray">
                            <div class="container">
                                <div class="row section-heading justify-content-center">
                                    <div class="col-lg-6 text-center">
                                        <h3><span>Latest Projects</span></h3>
                                    </div>
                                </div>
                                <div class="lightbox-gallery portfolio-box">`
                                    <div class="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
                                        <div class="col-md-6 col-lg-5">
                                            <div class="portfolio-img">
                                                <img src={require('./image/asset 11.jpeg')} title="" alt="" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-5">
                                            <div class="portfolio-text">
                                                <h6><span>Web Design</span></h6>
                                                <h4>Website Design for Marketing Agency Startup</h4>
                                                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                                                <div class="btn-bar">
                                                    <a class="px-btn px-btn-theme" data-scroll-nav="4" href="#contactus">View Project </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center flex-row-reverse">
                                        <div class="col-md-6 col-lg-5">
                                            <div class="portfolio-img">
                                                <img src={require('./image/asset 12.jpeg')} title="" alt="" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-5">
                                            <div class="portfolio-text">
                                                <h6><span>Web Design</span></h6>
                                                <h4>Website Design for Marketing Agency Startup</h4>
                                                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                                                <div class="btn-bar">
                                                    <a class="px-btn px-btn-theme" data-scroll-nav="4" href="#contactus">View Project </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
                                        <div class="col-md-6 col-lg-5">
                                            <div class="portfolio-img">
                                                <img src={require('./image/asset 13.jpeg')} title="" alt="" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-5">
                                            <div class="portfolio-text">
                                                <h6><span>Web Design</span></h6>
                                                <h4>Website Design for Marketing Agency Startup</h4>
                                                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                                                <div class="btn-bar">
                                                    <a class="px-btn px-btn-theme" data-scroll-nav="4" href="#contactus">View Project </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row gx-3 gy-4 portfolio-box justify-content-around align-items-center flex-row-reverse">
                                        <div class="col-md-6 col-lg-5">
                                            <div class="portfolio-img">
                                                <img src={require('./image/asset 14.jpeg')} title="" alt="" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-5">
                                            <div class="portfolio-text">
                                                <h6><span>Web Design</span></h6>
                                                <h4>Website Design for Marketing Agency Startup</h4>
                                                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                                                <div class="btn-bar">
                                                    <a class="px-btn px-btn-theme" data-scroll-nav="4" href="#contactus">View Project </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                <section>
                    <div>
                        <section class="section testimonial-section">
                            <div class="container">
                                <div class="row section-heading justify-content-center">
                                    <div class="col-lg-6 text-center">
                                        <h3><span>Testimonial</span></h3>
                                    </div>
                                </div>
                                <OwlCarousel className='owl-theme' {...options1}>
                                    <div className="item">
                                        <div class="feature-box-03">
                                            <div class="feature-img">
                                                <img src={require('./image/asset 15.jpeg')} title="" alt="" />
                                            </div>
                                            <div class="feature-content">
                                                <div class="icons">
                                                    <FaQuoteLeft />
                                                </div>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                                <h6>Jennifer Lutheran</h6>
                                                <span>CEO at pxdraft</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div class="feature-box-03">
                                            <div class="feature-img">
                                                <img src={require('./image/asset 16.jpeg')} title="" alt="" />
                                            </div>
                                            <div class="feature-content">
                                                <div class="icons">
                                                    <FaQuoteLeft />
                                                </div>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                                <h6>Jennifer Lutheran</h6>
                                                <span>CEO at pxdraft</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div class="feature-box-03">
                                            <div class="feature-img">
                                                <img src={require('./image/asset 17.jpeg')} title="" alt="" />
                                            </div>
                                            <div class="feature-content">
                                                <div class="icons">
                                                    <FaQuoteLeft />
                                                </div>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                                <h6>Jennifer Lutheran</h6>
                                                <span>CEO at pxdraft</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div class="feature-box-03">
                                            <div class="feature-img">
                                                <img src={require('./image/asset 18.jpeg')} title="" alt="" />
                                            </div>
                                            <div class="feature-content">
                                                <div class="icons">
                                                    <FaQuoteLeft />
                                                </div>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                                <h6>Jennifer Lutheran</h6>
                                                <span>CEO at pxdraft</span>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </section>
                    </div>
                </section>
                <section>
                    <div>
                        <section data-scroll-index="4" id="contactus" class="section contactus-section bg-dark" >
                            <div class="container">
                                <div class="row gy-5">
                                    <div class="col-lg-6">
                                        <div class="contact-form">
                                            <h6>Get in touch</h6>
                                            <p class="lead">Our friendly team would love to hear from you.</p>
                                            <form id="contact-form" method="POST">
                                                <div class="row gx-3 gy-4">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="form-label">First name</label>
                                                            <input name="Name" id="name" placeholder="Name *" class="form-control" type="text" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="form-label">Your Email</label>
                                                            <input name="Email" id="email" placeholder="Email *" class="form-control" type="email" />
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-group">
                                                            <label class="form-label">Subject</label>
                                                            <input name="Subject" id="subject" placeholder="Subject *" class="form-control" type="text" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label class="form-label">Your message</label>
                                                            <textarea name="message" id="message" placeholder="Your message *" rows="4" class="form-control"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="send">
                                                            <button class="px-btn px-btn-theme2" type="button" value="Send"> Send Message</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="col-lg-5 ms-auto col-xl-4">
                                        <div class="pb-5">
                                            {/* <img class="w-100" src={require('./image/asset 0.png')} title="" alt=""/> */}
                                        </div>
                                        <ul class="contact-infos">
                                            <li>
                                                <div class="icon bg-1">
                                                    <FaEnvelope />
                                                </div>
                                                <div class="col">
                                                    <h5>Phone</h5>
                                                    <p>+01 123 654 8096</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="icon bg-2">
                                                    <FaPhoneAlt />
                                                </div>
                                                <div class="col">
                                                    <h5>Mail</h5>
                                                    <p>info@domainname.com</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="icon bg-3">
                                                    <FaMapMarkedAlt />
                                                </div>
                                                <div class="col">
                                                    <h5>Visit My Studio</h5>
                                                    <p>Warnwe Park Streetperrine, <br />FL 33157 New York City</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                <section>
                    <div>
                        <footer class="footer">
                            <div class="container">
                                <div class="row align-items-center">
                                    <div class="col-md-6 py-2">
                                        <div class="nav justify-content-center justify-content-md-start">
                                            <a href="#"><FaFacebookF /></a>
                                            <a href="#"><FaTwitter /></a>
                                            <a href="#"><FaInstagram /></a>
                                            <a href="#"><FaLinkedinIn /></a>
                                            <a href="#"><FaPinterest /></a>
                                        </div>
                                    </div>
                                    <div class="col-md-6 py-2 text-center text-md-end">
                                        <p class="m-0">© 2022 copyright all right reserved</p>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </section>
            </div>
        </>
    );
}

export default App;
