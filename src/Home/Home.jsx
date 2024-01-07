import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import './Home.css';
import image2 from './timers-fRCLF3JM.png';
import imge3 from './rec2-cCRfZVCK.png';
import imge4 from './rec1-oz0gj_s-.png';
import imge5 from './rec4-iEbklOf4.png';
import imge6 from './rec3-3AEDT0pz.png';
import navImg from './hero-7N0lozEa.png';
import rev1 from './img1.jpg';
import rev2 from './img2.jpg';
import rev3 from './img3.jpg';

export default function Home() {
    
    let [isDarkMode, setIsDarkMode] = useState(false);
    let [isLoadingHead, setIsLoadingHead] = useState('start-100');
    let [isLoadingPrag, setIsLoadingPrag] = useState('end-100');
     
    useEffect(() => {
        const timeoutHead = setTimeout(() => {
          setIsLoadingHead('start-0');
        }, 3000);
        
    return () => clearTimeout(timeoutHead);
}, []);
    useEffect(() => {
        const timeoutPrag = setTimeout(() => {
            setIsLoadingPrag('end-0');
        }, 3000);
        
    return () => clearTimeout(timeoutPrag);
}, []);
    let darkMode= () =>{
       setIsDarkMode((mode)=>!mode);
    }
    
    const scrollToSection= (sectionId)=> {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div className={isDarkMode?'dark-mode ':'light-mode'}>
        <header id='home'>
          <div className={`h-100 ${isDarkMode?'home-dark':''}`}>
            <div className='bg-navb '>
            <nav className={`navbar navbar-expand-lg me-5 pe-5 ${isDarkMode?'dark-nav':'light-nav'}`}>
                <div className="container me-5 ">
                    <div className='d-flix '>
                        <i id='moon' onClick={darkMode} className={isDarkMode?'fa-regular fa-moon':'fa-regular fa-sun'} ></i>
                        <img className="navbar-brand nav-img" src={navImg}/>
                    </div>
                <button className="navbar-toggler bg-white ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-start" id="navbarSupportedContent">
                    <ul className="navbar-nav list me-auto  mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link list-link px-2" onClick={()=>scrollToSection('home')} aria-current="page" href='#home'>الرئيسية</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link list-link px-2" onClick={()=>scrollToSection('who')} href='#who'>من نحن</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link list-link px-2" onClick={()=>scrollToSection('opinions')} href='#opinions'>آراء العملاء</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link list-link px-2" onClick={()=>scrollToSection('contact')} href='#contact'>تواصل معنا</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>  
            </div>
            <div className='container h-75 pt-4'>
                <div className='row h-100'>
                    <div className='col-md-8 d-flex h-100 over-flow flex-column justify-content-center'>
                        <h2  className={`order-1 h1 hafazny-head green position-relative ${isLoadingHead} ${isDarkMode?'head-dark':''}`}>حفظنى معك فى تعلم القرأن</h2>
                        <p className={`order-2 hafazny-prag pt-4 position-relative ${isLoadingPrag}  ${isDarkMode?'prag-dark':''}`}>هناك حقيقة مثبتة منذ زمن طويل وهي أن <br/>المحتوى المقروء لصفحة ما سيلهي القارئ عن <br/>التركيز على الشكل الخارجي للنص أو شكل توضع<br/> الفقرات في الصفحة التي يقرأها</p>
                        <button className={`btn order-3 ms-auto btn-contact  mt-3 py-2 fs-5 fw-bold position-relative ${isLoadingHead} ${isDarkMode?'butn-dark':''}`} onClick={()=>scrollToSection('contact')}><Link>تواصل معنا </Link></button>
                    </div>
                </div>
            </div>
         </div>
        </header>
        <div className={isDarkMode?'section':''}>
        <section  className='w-75 mx-auto second-img'>
           <img className='w-100 mt-5 ' src={image2}/>
        </section>
        <section id='who' className='pt-5'>
        <div className='h-100vh'>
            <div className='container'>
            <h2 className={`mb-3 who ${isDarkMode?'text-white':''}`}>من نحن </h2>

            <div className='row mt-5'>
            <div className={`col-md-6 position-relative ${isLoadingHead}`}>
              <div className=' bg-white rounded'>
                <img className='w-100' src={imge3}/>
                <div className=' px-3  pb-3 '>
                    <h3 className='more-than green pb-3 pt-4'>اكثر من معلم ومعلمة</h3>
                    <p className='more-prag'>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
                </div>
                </div>

            </div>
            <div className={`col-md-6 position-relative ${isLoadingPrag}`}>
            <div className=' bg-white rounded'>

                <img className='w-100' src={imge4}/>
                <div className=' px-3  pb-3 '>
                    <h3 className='more-than green pb-3 pt-4'>اكثر من معلم ومعلمة</h3>
                    <p className='more-prag'>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
                </div>
                </div>
            </div>
</div>
            </div>
        </div>
        
        <div className='h-100vh my-4'>
            <div className='container'>

            <div className='row'>
            <div className={`col-md-6 position-relative ${isLoadingHead}`}>
            <div className=' bg-white rounded'>

                <img className='w-100' src={imge5}/>
                <div className=' px-3  pb-3 '>
                    <h3 className='more-than green pb-3 pt-4'>حفظنى معك فى تعلم القرأن</h3>
                    <p className='more-prag'>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
                </div>
                </div>
            </div>
            <div className={`col-md-6 position-relative ${isLoadingPrag}`}>
            <div className=' bg-white rounded'>
                <img className='w-100 ' src={imge6}/>
                <div className=' px-3  pb-3 '>
                    <h3 className='more-than green pb-3 pt-4'> مختلف الاعمار والمستويات</h3>
                    <p className='more-prag'>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
                </div>
                </div>
            </div>
</div>
            </div>
        </div>
        </section>
        <section id='opinions' className={`carosel w-100 mb-5 my-auto position-relative ${isLoadingPrag}`}>
            <div className='mx-5  more-than py-4 '>
                <h2 className=' text-white fw-bolder'>اراء العملاء</h2>
                <p className='text-black'>بعض آراء العملاء الذين شرفنا بالعمل معهم</p>
            </div>
            <div className='all-carsol mx-auto mb-5'>
                <div className='w-100'>
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner bg-white mx-auto ">
                            <div className="carousel-item active">
                                <div className='w-50 pb-4  d-flex flex-column align-items-center  text-center mx-auto'>
                                    <img src={rev1} className="d-block  circle" alt="..."/>
                                    <p> شكرا لكم من اجل خدمتكم تطبيق جميل مزيد من التالق</p>
                                    <p><span className='text-danger'>DAUGLAS MCNUN</span>, Financial Advisor</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='w-50  pb-4 d-flex flex-column align-items-center  text-center mx-auto'>
                                    <img src={rev2} className="d-block  circle" alt="..."/>
                                    <p>شكرا لكم من اجل خدمتكم تطبيق جميل مزيد من التالق</p>
                                    <p><span className='text-danger'>DAUGLAS MCNUN</span>, Financial Advisor</p>
                                </div>  
                            </div>
                            <div className="carousel-item">
                                <div className='w-50 pb-4 d-flex flex-column align-items-center  text-center mx-auto'>
                                    <img src={rev3} className="d-block  circle" alt="..."/>
                                    <p>شكرا لكم من اجل خدمتكم تطبيق جميل مزيد من التالق</p>
                                    <p><span className='text-danger'>DAUGLAS MCNUN</span>, Financial Advisor</p>
                                </div> 
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                    </div>
                </div>
            </div>
        </section>
        <section id='contact' className={`contact-all mb-5 ${isDarkMode?'bg-grayy':''}`}>
          <div className='container'>
            <div className='row mx-4 contact-row'>
                <div className='col-md-6 form-all px-5 order-1'>
                   <h2 className='form-black text-black h1  mb-5'>تواصل معنا</h2>
                   <form>
                       <label className='d-block' htmlFor='name'>الاسم</label>
                       <input className='form-control inpt' type='text' id='name' name='name' placeholder='ادخل الاسم'/>

                       <label className='d-block' htmlFor='email'>البريد الالكتروني</label>
                       <input className='form-control inpt' type='email' id='email' name='email' placeholder='ادخل البريد الالكتروني'/>

                       <label className='d-block' htmlFor='message'> نص الرساله</label>
                       <textarea className='form-control inpt messages' type='text' id='message' name='message' placeholder='ادخل رسالتك'></textarea>

                       <button className='btn  w-100 text-light send'>ارسال</button>
                   </form>
                </div>
                <div className='col-md-6  numbers-all pe-4 order-2'>
                  <div className=''>
                    <h2 className='form-black green  h1 mb-4 '>تواصل معنا</h2>
                    <h3 className='form-black h1 '>ارسل لنا استفسارك وسوف يقوم فريقنا بالتواصل معك</h3>
                  </div>
                  <div className='bg-white contacts mt-5'>
                      <p>رقم الهاتف</p>
                      <h2 className='form-black'>+9661234567890 +9661234567891</h2>
                   </div>
                   <div className='bg-white contacts mt-5'>
                      <p>البريد الالكتروني</p>
                      <h2 className='form-black'>publictarnsport@email.com</h2>
                   </div>
                </div>
            </div>
          </div>
        </section>
        <footer>
            <div className='container w-100'>
              <div className='row foot-row mb-5'>
                <div className="col-lg-6  order-1 order11">
                   <img className='foot-img ' src={navImg}/>
                   <h3 className='foot-head pt-3'>هناك حقيقة مثبتة منذ زمن طويل <br/>وهي أن المحتوى المقروء لصفحة<br/> ما سيلهي القارئ عن التركيز على <br/>الشكل الخارجي للنص أو شكل توضع <br/>الفقرات في الصفحة التي يقرأها</h3>
                </div>
                <div className="col-lg-6  order-2 order22">
                   <div className='container'>
                      <div className='row  pt-2 '>
                         <div className='col-md-6 list-alll text-start  order-1 order33'>
                            <h6 className='mb-4 pages '>الصفحات الرئيسية</h6>
                            <ul className='foot-list px-0 '>
                                <li className='' onClick={()=>scrollToSection('home')}><Link href='#home'> الرئيسية</Link></li>
                                <li className='' onClick={()=>scrollToSection('home')}><Link>المعلمون</Link></li>
                                <li className='' onClick={()=>scrollToSection('home')}><Link>الحجوزات</Link></li>
                                <li className='' onClick={()=>scrollToSection('home')}><Link>الجلسات</Link></li>
                                <li className='' onClick={()=>scrollToSection('home')}><Link>القائمة</Link></li>
                            </ul>
                         </div>
                         <div className='col-md-6 list-alll text-start w-50 me-auto order-2 order44'>
                            <h6 className='mb-4 pages '>واصل معنا</h6>
                            <ul className='foot-list px-0 '>
                                <li className='' onClick={()=>scrollToSection('home')}><Link href='#home'>+9661234567891</Link></li>
                                <li className='' onClick={()=>scrollToSection('home')}><Link>publictarnsport@email.com</Link></li>
                            </ul>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
        </footer>
       </div>
        </div>
    )
}
