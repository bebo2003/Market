import React, { useEffect, useState } from 'react'
import styles from "./Home.module.css"
import RecentProducts from './components/RecentProducts/RecentProducts'
import PopularCategory from './components/PopularCategories/PopularCategories'
import StaticSlider from '../StaticSlider/StaticSlider'
import LandPage from '../../components/LandPage/LandPage'


export default function Home() {
    const[counr,useCount]=useState(0)


  return (
    <div>
       <StaticSlider/>
       <PopularCategory/>
      <LandPage/>
     
      <AdminPost/>
      

    

      </div>
  )
}


// import React, { useEffect, useState } from 'react';
// import styles from "./Home.module.css";
// import RecentProducts from './components/RecentProducts/RecentProducts';
// import PopularCategory from './components/PopularCategories/PopularCategories';
// import StaticSlider from '../StaticSlider/StaticSlider';
// import AdminPost from '../AdminPost/AdminPost';
import AdminPost from './../AdminPost/AdminPost';


// export default function Home() {
//     const [userType, setUserType] = useState(null);



//     useEffect(() => {
//         const userTypeFromStorage = localStorage.getItem("userType");
//         if (userTypeFromStorage) {
//             setUserType(userTypeFromStorage);
//         }
//     }, []);

//     return (

//         // <div>

//         //     <StaticSlider />
//         //     {userType === "lender" && (
//         //       <AdminPost/>
//         //     )}




//         //     <PopularCategory />
//         //     <RecentProducts />


//         // </div>



//         <div>

//             {/* Preloader */}
//             <div className="preloader-bg"></div>
//             <div id="preloader">
//                 <div id="preloader-status">
//                     <div className="preloader-position loader">
//                         <span></span>
//                     </div>
//                 </div>
//             </div>

//             {/* Progress scroll to top */}
//             <div className="progress-wrap cursor-pointer">
//                 <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
//                     <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
//                 </svg>
//             </div>

//             {/* Navbar */}
//             <nav className="navbar navbar-expand-lg">
//                 <div className="container">
//                     <div className="logo-wrapper">
//                         <a className="logo" href="index.html">
//                             <img src="img/logo.png" className="logo-img" alt="Logo" />
//                         </a>
//                     </div>
//                     <button
//                         className="navbar-toggler"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#navbar"
//                         aria-controls="navbar"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="navbar-toggler-icon">
//                             <i className="ti-menu"></i>
//                         </span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbar">
//                         <ul className="navbar-nav ms-auto">
//                             {/* Menus */}
//                             <li className="nav-item dropdown">
//                                 <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Home <i className="ti-angle-down"></i>
//                                 </a>
//                                 <ul className="dropdown-menu">
//                                     {Array.from({ length: 15 }, (_, i) => (
//                                         <li key={i}>
//                                             <a href={`index${i === 0 ? '' : i + 1}.html`} className="dropdown-item">
//                                                 <span>
//                                                     {`Home Layout ${i + 1}`}
//                                                 </span>
//                                             </a>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </li>
//                             <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
//                             <li className="nav-item dropdown">
//                                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Rooms & Suites <i className="ti-angle-down"></i>
//                                 </a>
//                                 <ul className="dropdown-menu">
//                                     <li><a href="rooms.html" className="dropdown-item"><span>Rooms 1</span></a></li>
//                                     <li><a href="rooms2.html" className="dropdown-item"><span>Rooms 2</span></a></li>
//                                     <li><a href="rooms3.html" className="dropdown-item"><span>Rooms 3</span></a></li>
//                                     <li><a href="room-details.html" className="dropdown-item"><span>Room Details</span></a></li>
//                                 </ul>
//                             </li>
//                             <li className="nav-item"><a className="nav-link" href="restaurant.html">Restaurant</a></li>
//                             <li className="nav-item"><a className="nav-link" href="spa-wellness.html">Spa</a></li>
//                             <li className="nav-item dropdown">
//                                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Pages <i className="ti-angle-down"></i>
//                                 </a>
//                                 <ul className="dropdown-menu">
//                                     <li><a href="services.html" className="dropdown-item"><span>Services</span></a></li>
//                                     <li><a href="facilities.html" className="dropdown-item"><span>Facilities</span></a></li>
//                                     <li><a href="gallery.html" className="dropdown-item"><span>Gallery</span></a></li>
//                                     <li><a href="team.html" className="dropdown-item"><span>Team</span></a></li>
//                                     <li><a href="pricing.html" className="dropdown-item"><span>Pricing</span></a></li>
//                                     <li><a href="careers.html" className="dropdown-item"><span>Careers</span></a></li>
//                                     <li><a href="faq.html" className="dropdown-item"><span>F.A.Qs</span></a></li>
//                                     <li className="dropdown-submenu dropdown">
//                                         <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
//                                             <span>Other Pages <i className="ti-angle-right"></i></span>
//                                         </a>
//                                         <ul className="dropdown-menu">
//                                             <li><a href="404.html" className="dropdown-item"><span>404 Page</span></a></li>
//                                             <li><a href="coming-soon.html" className="dropdown-item"><span>Coming Soon</span></a></li>
//                                         </ul>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li className="nav-item dropdown">
//                                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     News <i className="ti-angle-down"></i>
//                                 </a>
//                                 <ul className="dropdown-menu">
//                                     <li><a href="news.html" className="dropdown-item"><span>News 1</span></a></li>
//                                     <li><a href="news2.html" className="dropdown-item"><span>News 2</span></a></li>
//                                     <li><a href="post.html" className="dropdown-item"><span>Post Page</span></a></li>
//                                 </ul>
//                             </li>
//                             <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>

//             {/* Slider */}
//             <header className="header slider-fade">
//                 <div className="owl-carousel owl-theme">
//                     {[2, 3, 1].map((num, idx) => (
//                         <div key={idx} className="text-center item bg-img" data-overlay-dark={num === 1 ? "3" : "2"} data-background={`img/slider/${num}.jpg`}>
//                             <div className="v-middle caption">
//                                 <div className="container">
//                                     <div className="row">
//                                         <div className="col-md-10 offset-md-1">
//                                             <span>
//                                                 {Array(5).fill(0).map((_, i) => (
//                                                     <i className="star-rating" key={i}></i>
//                                                 ))}
//                                             </span>
//                                             <h4>{["Luxury Hotel & Best Resort", "Unique Place to Relax & Enjoy", "The Ultimate Luxury Experience"][idx]}</h4>
//                                             <h1>{["Enjoy a Luxury Experience", "The Perfect Base For You", "Enjoy The Best Moments of Life"][idx]}</h1>
//                                             <div className="butn-light mt-30 mb-30">
//                                                 <a href="#" data-scroll-nav="1"><span>Rooms & Suites</span></a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Slider Reservation */}
//                 <div className="reservation">
//                     <a href="tel:8551004444">
//                         <div className="icon d-flex justify-content-center align-items-center">
//                             <i className="flaticon-call"></i>
//                         </div>
//                         <div className="call">
//                             <span>855 100 4444</span> <br />Reservation
//                         </div>
//                     </a>
//                 </div>
//             </header>

//             <section className="about section-padding">
//                 <div className="container">
//                     <div className="row">
//                         {/* النص والمحتوى */}
//                         <div className="col-md-6 mb-30 animate-box" data-animate-effect="fadeInUp">
//                             <span>
//                                 {[...Array(5)].map((_, i) => (
//                                     <i key={i} className="star-rating"></i>
//                                 ))}
//                             </span>
//                             <div className="section-subtitle">The Cappa Luxury Hotel</div>
//                             <div className="section-title">Enjoy a Luxury Experience</div>
//                             <p>
//                                 Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan
//                                 vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit.
//                                 Donec id velit ac arcu posuere blane.
//                             </p>
//                             <p>
//                                 Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci
//                                 varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque
//                                 habitant morbine.
//                             </p>
//                             {/* الاتصال للحجز */}
//                             <div className="reservations">
//                                 <div className="icon">
//                                     <span className="flaticon-call"></span>
//                                 </div>
//                                 <div className="text">
//                                     <p>Reservation</p>
//                                     <a href="tel:855-100-4444">855 100 4444</a>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* الصور الجانبية */}
//                         <div className="col col-md-3 animate-box" data-animate-effect="fadeInUp">
//                             <img src="img/rooms/8.jpg" alt="Room 8" className="mt-90 mb-30" />
//                         </div>
//                         <div className="col col-md-3 animate-box" data-animate-effect="fadeInUp">
//                             <img src="img/rooms/2.jpg" alt="Room 2" />
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="rooms1 section-padding bg-cream" data-scroll-index="1">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-12">
//                             <div className="section-subtitle">The Cappa Luxury Hotel</div>
//                             <div className="section-title">Rooms & Suites</div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         {[
//                             {
//                                 img: "img/rooms/1.jpg",
//                                 price: "150$ / Night",
//                                 name: "Junior Suite",
//                             },
//                             {
//                                 img: "img/rooms/2.jpg",
//                                 price: "200$ / Night",
//                                 name: "Family Room",
//                             },
//                             {
//                                 img: "img/rooms/3.jpg",
//                                 price: "250$ / Night",
//                                 name: "Double Room",
//                             },
//                             {
//                                 img: "img/rooms/4.jpg",
//                                 price: "300$ / Night",
//                                 name: "Deluxe Room",
//                             },
//                             {
//                                 img: "img/rooms/7.jpg",
//                                 price: "150$ / Night",
//                                 name: "Superior Room",
//                             },
//                         ].map((room, index) => (
//                             <div
//                                 key={index}
//                                 className={`col-md-${index < 3 ? "4" : "6"}`} // أول 3 غرف في صفوف 4 أعمدة، والباقي 6
//                             >
//                                 <div className="item">
//                                     <div className="position-re o-hidden">
//                                         <img src={room.img} alt={room.name} />
//                                     </div>
//                                     <span className="category">
//                                         <a href="rooms2.html">Book</a>
//                                     </span>
//                                     <div className="con">
//                                         <h6>
//                                             <a href="room-details.html">{room.price}</a>
//                                         </h6>
//                                         <h5>
//                                             <a href="room-details.html">{room.name}</a>
//                                         </h5>
//                                         <div className="line"></div>
//                                         <div className="row facilities">
//                                             <div className="col col-md-7">
//                                                 <ul>
//                                                     <li><i className="flaticon-bed"></i></li>
//                                                     <li><i className="flaticon-bath"></i></li>
//                                                     <li><i className="flaticon-breakfast"></i></li>
//                                                     <li><i className="flaticon-towel"></i></li>
//                                                 </ul>
//                                             </div>
//                                             <div className="col col-md-5 text-end">
//                                                 <div className="permalink">
//                                                     <a href="room-details.html">
//                                                         Details <i className="ti-arrow-right"></i>
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <section className="pricing section-padding bg-blck">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-4">
//                             <div className="section-subtitle">
//                                 <span>Best Prices</span>
//                             </div>
//                             <div className="section-title">
//                                 <span>Extra Services</span>
//                             </div>
//                             <p className="color-2">
//                                 The best prices for your relaxing vacation. The utanislen quam nestibulum ac quame odion elementum sceisue the aucan.
//                             </p>
//                             <p className="color-2">
//                                 Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus mus nellen etesque habitant morbine.
//                             </p>
//                             <div className="reservations mb-30">
//                                 <div className="icon">
//                                     <span className="flaticon-call"></span>
//                                 </div>
//                                 <div className="text">
//                                     <p className="color-2">For information</p>
//                                     <a href="tel:855-100-4444">855 100 4444</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-8">
//                             <div className="owl-carousel owl-theme">
//                                 <div className="pricing-card">
//                                     <img src="img/pricing/1.jpg" alt="" />
//                                     <div className="desc">
//                                         <div className="name">Room cleaning</div>
//                                         <div className="amount">
//                                             $50<span>/ month</span>
//                                         </div>
//                                         <ul className="list-unstyled list">
//                                             <li><i className="ti-check"></i> Hotel ut nisan the duru</li>
//                                             <li><i className="ti-check"></i> Orci miss natoque vasa ince</li>
//                                             <li><i className="ti-close unavailable"></i>Clean sorem ipsum morbin</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="pricing-card">
//                                     <img src="img/pricing/2.jpg" alt="" />
//                                     <div className="desc">
//                                         <div className="name">Drinks included</div>
//                                         <div className="amount">
//                                             $30<span>/ daily</span>
//                                         </div>
//                                         <ul className="list-unstyled list">
//                                             <li><i className="ti-check"></i> Hotel ut nisan the duru</li>
//                                             <li><i className="ti-check"></i> Orci miss natoque vasa ince</li>
//                                             <li><i className="ti-close unavailable"></i>Clean sorem ipsum morbin</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="pricing-card">
//                                     <img src="img/pricing/3.jpg" alt="" />
//                                     <div className="desc">
//                                         <div className="name">Room Breakfast</div>
//                                         <div className="amount">
//                                             $30<span>/ daily</span>
//                                         </div>
//                                         <ul className="list-unstyled list">
//                                             <li><i className="ti-check"></i> Hotel ut nisan the duru</li>
//                                             <li><i className="ti-check"></i> Orci miss natoque vasa ince</li>
//                                             <li><i className="ti-close unavailable"></i>Clean sorem ipsum morbin</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="pricing-card">
//                                     <img src="img/pricing/4.jpg" alt="" />
//                                     <div className="desc">
//                                         <div className="name">Safe & Secure</div>
//                                         <div className="amount">
//                                             $15<span>/ daily</span>
//                                         </div>
//                                         <ul className="list-unstyled list">
//                                             <li><i className="ti-check"></i> Hotel ut nisan the duru</li>
//                                             <li><i className="ti-check"></i> Orci miss natoque vasa ince</li>
//                                             <li><i className="ti-close unavailable"></i>Clean sorem ipsum morbin</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section
//                 className="video-wrapper video section-padding bg-img bg-fixed"
//                 data-overlay-dark="3"
//                 data-background="img/slider/2.jpg"
//             >
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-8 offset-md-2 text-center">
//                             <span>
//                                 <i className="star-rating"></i>
//                                 <i className="star-rating"></i>
//                                 <i className="star-rating"></i>
//                                 <i className="star-rating"></i>
//                                 <i className="star-rating"></i>
//                             </span>
//                             <div className="section-subtitle">
//                                 <span>The Cappa Luxury Hotel</span>
//                             </div>
//                             <div className="section-title">
//                                 <span>Promotional Video</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="text-center col-md-12">
//                             <a className="vid" href="https://youtu.be/7BGNAGahig8">
//                                 <div className="vid-butn">
//                                     <span className="icon">
//                                         <i className="ti-control-play"></i>
//                                     </span>
//                                 </div>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="facilties section-padding">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-12">
//                             <div className="section-subtitle">Our Services</div>
//                             <div className="section-title">Hotel Facilities</div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-4">
//                             <div className="single-facility animate-box" data-animate-effect="fadeInUp">
//                                 <span className="flaticon-world"></span>
//                                 <h5>Pick Up & Drop</h5>
//                                 <p>We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.</p>
//                                 <div className="facility-shape"><span className="flaticon-world"></span></div>
//                             </div>
//                         </div>
//                         <div className="col-md-4">
//                             <div className="single-facility animate-box" data-animate-effect="fadeInUp">
//                                 <span className="flaticon-car"></span>
//                                 <h5>Parking Space</h5>
//                                 <p>Fusce tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.</p>
//                                 <div className="facility-shape"><span className="flaticon-car"></span></div>
//                             </div>
//                         </div>
//                         <div className="col-md-4">
//                             <div className="single-facility animate-box" data-animate-effect="fadeInUp">
//                                 <span className="flaticon-bed"></span>
//                                 <h5>Room Service</h5>
//                                 <p>Room tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.</p>
//                                 <div className="facility-shape"><span className="flaticon-bed"></span></div>
//                             </div>
//                         </div>
//                         <div className="col-md-4">
//                             <div className="single-facility animate-box" data-animate-effect="fadeInUp">
//                                 <span className="flaticon-swimming"></span>
//                                 <h5>Swimming Pool</h5>
//                                 <p>Swimming pool tincidunt nise ace park norttito sit space, mus nellentesque habitant.</p>
//                                 <div className="facility-shape"><span className="flaticon-swimming"></span></div>
//                             </div>
//                         </div>
//                         <div className="col-md-4">
//                             <div className="single-facility animate-box" data-animate-effect="fadeInUp">
//                                 <span className="flaticon-wifi"></span>
//                                 <h5>Fibre Internet</h5>
//                                 <p>Wifi tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.</p>
//                                 <div className="facility-shape"><span className="flaticon-wifi"></span></div>
//                             </div>
//                         </div>
//                         <div className="col-md-4">
//                             <div className="single-facility animate-box" data-animate-effect="fadeInUp">
//                                 <span className="flaticon-breakfast"></span>
//                                 <h5>Breakfast</h5>
//                                 <p>Eat tincidunt nisa ace park norttito sit amet space, mus nellentesque habitant</p>
//                                 <div className="facility-shape"><span className="flaticon-breakfast"></span></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//             <section className="testimonials">
//                 <div
//                     className="background bg-img bg-fixed section-padding pb-0"
//                     data-background="img/slider/2.jpg"
//                     data-overlay-dark="3"
//                 >
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-md-8 offset-md-2">
//                                 <div className="testimonials-box">
//                                     <div className="head-box">
//                                         <h6>Testimonials</h6>
//                                         <h4>What Client's Say?</h4>
//                                         <div className="line"></div>
//                                     </div>
//                                     <div className="owl-carousel owl-theme">
//                                         <div className="item">
//                                             <span className="quote">
//                                                 <img src="img/quot.png" alt="" />
//                                             </span>
//                                             <p>
//                                                 Hotel dapibus asue metus the nec feusiate eraten miss
//                                                 hendreri net ve ante the lemon sanleo nectan feugiat erat
//                                                 hendrerit necuis ve ante otel inilla duiman at finibus
//                                                 viverra neca the sene on satien the miss drana inc
//                                                 fermen norttito sit space, mus nellentesque habitan.
//                                             </p>
//                                             <div className="info">
//                                                 <div className="author-img">
//                                                     <img src="img/team/4.jpg" alt="" />
//                                                 </div>
//                                                 <div className="cont">
//                                                     <span>
//                                                         <i className="star-rating"></i>
//                                                         <i className="star-rating"></i>
//                                                         <i className="star-rating"></i>
//                                                         <i className="star-rating"></i>
//                                                         <i className="star-rating"></i>
//                                                     </span>
//                                                     <h6>Emily Brown</h6>
//                                                     <span>Guest review</span>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <div className="item">
//                                             <span className="quote">
//                                                 <img src="img/quot.png" alt="" />
//                                             </span>
//                                             <p>
//                                                 Hotel dapibus asue metus the nec feusiate eraten miss
//                                                 hendreri net ve ante the lemon sanleo nectan feugiat erat
//                                                 hendrerit necuis ve ante otel inilla duiman at finibus
//                                                 viverra neca the sene on satien the miss drana inc
//                                                 fermen norttito sit space, mus nellentesque habitan.
//                                             </p>
//                                             <div className="info">
//                                                 <div className="author-img">
//                                                     <img src="img/team/1.jpg" alt="" />
//                                                 </div>
//                                                 <div className="cont">
//                                                     <span>
//                                                         <i className="star-rating"></i>
//                                                         <i className="star-rating"></i>
//                                                         <i className="star-rating"></i>
//                                                         <i className="star-rating"></i>
//                                                         <i className="star-rating"></i>
//                                                     </span>
//                                                     <h6>Nolan White</h6>
//                                                     <span>Guest review</span>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <div className="item">
//                                             <span className="quote">
//                                                 <img src="img/quot.png" alt="" />
//                                             </span>
//                                             <p>
//                                                 Hotel dapibus asue metus the nec feusiate eraten miss
//                                                 hendreri net ve ante the lemon sanleo nectan feugiat erat
//                                                 hendrerit necuis ve ante otel inilla duiman at finibus
//                                                 viverra neca the sene on satien the miss drana inc
//                                                 fermen norttito sit space, mus nellentesque habitan.
//                                             </p>
//                                             <div className="info">
//                                                 <div className="author-img">
//                                                     <img src="img/team/5.jpg" alt="" />
//                                                 </div>
//                                                 <div className="cont">
//                                                     <span>
//                                                         <i className="star-rating"></i>
//                                                         <i className="star-rating"></i>
//                                                         <i className="star-rating"></i>
//                                                         <i className="star-rating"></i>
//                                                         <i className="star-rating"></i>
//                                                     </span>
//                                                     <h6>Olivia Martin</h6>
//                                                     <span>Guest review</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div> {/* owl-carousel */}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="services section-padding">
//                 <div className="container">
//                     {services.map((service, index) => {
//                         const isImageLeft = index % 2 === 0;
//                         return (
//                             <div className="row" key={index}>
//                                 <div
//                                     className={`col-md-6 p-0 ${isImageLeft ? "" : "order2"
//                                         } animate-box`}
//                                     data-animate-effect={isImageLeft ? "fadeInLeft" : "fadeInLeft"}
//                                 >
//                                     <div className="content bg-cream valign">
//                                         <div className="cont text-left">
//                                             <div className="info">
//                                                 <h6>{service.subtitle}</h6>
//                                             </div>
//                                             <h4>{service.title}</h4>
//                                             <p>{service.description}</p>
//                                             <div className="butn-dark">
//                                                 <a href={service.link}>
//                                                     <span>Learn More</span>
//                                                 </a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div
//                                     className={`col-md-6 p-0 ${isImageLeft ? "" : "order1"} animate-box`}
//                                     data-animate-effect={isImageLeft ? "fadeInRight" : "fadeInRight"}
//                                 >
//                                     <div className="img left">
//                                         <a href={service.link}>
//                                             <img src={service.image} alt={service.title} />
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </section>

//             <section className="testimonials">
//                 <div
//                     className="background bg-img bg-fixed section-padding pb-0"
//                     style={{ backgroundImage: "url('img/slider/2.jpg')" }}
//                 >
//                     <div className="container">
//                         <div className="row">
//                             {/* Reservation Text */}
//                             <div className="col-md-5 mb-30 mt-30">
//                                 <p>
//                                     <i className="star-rating"></i>
//                                     <i className="star-rating"></i>
//                                     <i className="star-rating"></i>
//                                     <i className="star-rating"></i>
//                                     <i className="star-rating"></i>
//                                 </p>
//                                 <h5>
//                                     Each of our guest rooms feature a private bath, wi-fi, cable
//                                     television and include full breakfast.
//                                 </h5>
//                                 <div className="reservations mb-30">
//                                     <div className="icon color-1">
//                                         <span className="flaticon-call"></span>
//                                     </div>
//                                     <div className="text">
//                                         <p className="color-1">Reservation</p>
//                                         <a className="color-1" href="tel:8551004444">
//                                             855 100 4444
//                                         </a>
//                                     </div>
//                                 </div>
//                                 <p>
//                                     <i className="ti-check"></i>
//                                     <small>Call us, it's toll-free.</small>
//                                 </p>
//                             </div>

//                             {/* Booking Form */}
//                             <div className="col-md-5 offset-md-2">
//                                 <div className="booking-box">
//                                     <div className="head-box">
//                                         <h6>Rooms & Suites</h6>
//                                         <h4>Hotel Booking Form</h4>
//                                     </div>
//                                     <div className="booking-inner clearfix">
//                                         <form onSubmit={handleSubmit} className="form1 clearfix">
//                                             <div className="row">
//                                                 <div className="col-md-12">
//                                                     <div className="input1_wrapper">
//                                                         <label>Check in</label>
//                                                         <DatePicker
//                                                             selected={checkInDate}
//                                                             onChange={(date) => setCheckInDate(date)}
//                                                             className="form-control input"
//                                                             placeholderText="Check in"
//                                                         />
//                                                     </div>
//                                                 </div>

//                                                 <div className="col-md-12">
//                                                     <div className="input1_wrapper">
//                                                         <label>Check out</label>
//                                                         <DatePicker
//                                                             selected={checkOutDate}
//                                                             onChange={(date) => setCheckOutDate(date)}
//                                                             className="form-control input"
//                                                             placeholderText="Check out"
//                                                         />
//                                                     </div>
//                                                 </div>

//                                                 <div className="col-md-6">
//                                                     <div className="select1_wrapper">
//                                                         <label>Adults</label>
//                                                         <select
//                                                             className="form-control"
//                                                             value={adults}
//                                                             onChange={(e) => setAdults(e.target.value)}
//                                                         >
//                                                             <option value="0">Adults</option>
//                                                             {[1, 2, 3, 4].map((num) => (
//                                                                 <option key={num} value={num}>
//                                                                     {num}
//                                                                 </option>
//                                                             ))}
//                                                         </select>
//                                                     </div>
//                                                 </div>

//                                                 <div className="col-md-6">
//                                                     <div className="select1_wrapper">
//                                                         <label>Children</label>
//                                                         <select
//                                                             className="form-control"
//                                                             value={children}
//                                                             onChange={(e) => setChildren(e.target.value)}
//                                                         >
//                                                             <option value="0">Children</option>
//                                                             {[1, 2, 3, 4].map((num) => (
//                                                                 <option key={num} value={num}>
//                                                                     {num}
//                                                                 </option>
//                                                             ))}
//                                                         </select>
//                                                     </div>
//                                                 </div>

//                                                 <div className="col-md-12">
//                                                     <button
//                                                         type="submit"
//                                                         className="btn-form1-submit mt-15"
//                                                     >
//                                                         Check Availability
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/* End Booking Form */}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//         </div>
//     );
// }

