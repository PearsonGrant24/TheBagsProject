import React, {useState, useEffect} from "react";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
    children: React.ReactNode;
}

export const Header:React.FunctionComponent<HeaderProps> = ({ children, ...props}) : any | null => {

const navigate = useNavigate();

  const AboutUs = () => {
    navigate('/AboutUs');
  };

  const Home = () => {
    navigate('/Home');
  };

  return (
    <>    
        <header className="header-wrap header-5">
            <div className="top-header d-none d-md-block">
                <div className="container-flud">
                    <div className="row">
                        <div className="col-md-7 pr-md-0 col-12">
                            <div className="header-cta">
                                <ul>
                                    <li >
                                        <a href="mailto:sharon@kanhava.co.zw"><i
                                        className="fal fa-envelope" style={{color:'#e6400c'}}></i>sharon@kanhava.co.zw</a>
                                    </li>
                                    <li>
                                        <a href="tel:+263 719339292"><i className="fal fa-phone"></i>+263 71 933 9292 / +263 78 121 5625</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5 col-12">
                            <div className="header-right-cta d-flex justify-content-end">
                                <div className="social-profile mr-30">

                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-header-wraper">
            <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="header-logoh">
                        <div className="logoh7">
                            <a href="/Home">
                                <img className='logo' src="assets/KanhavaLogo01.PNG" alt="logo" />
                            </a>
                        </div>
                        </div>
                    <button
                        className="navbar-toggler "
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon " />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" onClick={Home}>
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={AboutUs}>
                                About
                            </a>                           
                        </li>
                        <li className="nav-item dropdown">
                        <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                        Products
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#Backpacks">
                            Backpacks
                        </a>
                        <a className="dropdown-item" href="#Sportsbags">
                            Sports bags
                        </a>
                        <a className="dropdown-item" href="#Luggagebags">
                            Travel bags
                        </a>                        
                        <a className="dropdown-item" href="#Coolerbags">
                            Food/Cooler bags
                        </a>                        
                        <a className="dropdown-item" href="#Luggagebags">
                            Gym bags
                        </a>  
                        <a className="dropdown-item" href="#Backpacks">
                            Book bags
                        </a>
                        <a className="dropdown-item" href="#Coolerbags">
                            Pencil bags
                        </a>
                        <a className="dropdown-item" href="#Luggagebags">
                            Chair bags
                        </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contactus">
                        Contacts
                        </a>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    
                    </form>
                </div>
                </nav>

            </div>
        </header>
        <div className="header-gutter"></div>
        
    </>
  );
  
};
