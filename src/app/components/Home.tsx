import React from "react";
import {HomePageSlider} from "./layout/widgets/sliders/HomePageSlider.tsx";
import Modal from 'react-modal'; 
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import { useTheme } from "@material-ui/core/styles";
import {useMediaQuery} from 'react-responsive' 

const MyCollection = [
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/bags.jpg",
    },
    {
        label: "2",
        imgPath:
            "assets/pages/img/kanhava/bags_1.jpg",
    },
    {
        label: "3",
        imgPath:
            "assets/pages/img/kanhava/bags_2.jpg",
    },
    {
        label: "4 ",
        imgPath:
            "assets/pages/img/kanhava/bags_3.jpg",
    },
];
const MyCollection1 = [
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_13.jpg",
    },
    {
        label: "2",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_14.jpg",
    },
    {
        label: "3",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_15.jpg",
    },
    {
        label: "4 ",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_16.jpg",
    },
    {
        label: "5 ",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_17.jpg",
    },
    {
        label: "6 ",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_30.jpg",
    },
    {
        label: "7 ",
        imgPath:
            "assets/pages/img/kanhava/bags_27.jpg",
    },
    {
        label: "8 ",
        imgPath:
            "assets/pages/img/kanhava/bags_27_1.jpg",
    },
    {
        label: "9 ",
        imgPath:
            "assets/pages/img/kanhava/bags_28.jpg",
    },
    {
        label: "10 ",
        imgPath:
            "assets/pages/img/kanhava/bags_29.jpg",
    },
];
const MyCollection3 = [
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_6.jpg",
    },
    {
        label: "2",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_7.jpg",
    },
    {
        label: "3",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_8.jpg",
    },
    {
        label: "4",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_6.jpg",
    },
];
const MyCollection4 = [
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/PXL_2128.jpg",
    },
    {
        label: "2",
        imgPath:
            "assets/pages/img/kanhava/PXL_1808.jpg",
    },
    {
        label: "3",
        imgPath:
            "assets/pages/img/kanhava/PXL_1833.jpg",
    },
    {
        label: "4 ",
        imgPath:
            "assets/pages/img/kanhava/PXL_1815.jpg",
    },
];
const MyCollection5 = [    

    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/bags_15.jpg",
    },
    {
        label: "2",
        imgPath:
            "assets/pages/img/kanhava/bags_16-1.jpg",
    },
    {
        label: "3",
        imgPath:
            "assets/pages/img/kanhava/bags_17-1.jpg",
    },
    {
        label: "4 ",
        imgPath:
            "assets/pages/img/kanhava/bags_17-1.jpg",
    },
];
const MyCollection6 = [   
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_4.jpg",
    },
    {
        label: "2",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_5.jpg",
    },
    {
        label: "3",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_3.jpg",
    },
    {
        label: "4 ",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_4.jpg",
    },
];
const MyCollection7 = [   
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/PXL_2124.jpg",
    },
    {
        label: "2",
        imgPath:
            "assets/pages/img/kanhava/PXL_1820.jpg",
    },
    {
        label: "3",
        imgPath:
            "assets/pages/img/kanhava/PXL_1849.jpg",
    },
    {
        label: "4 ",
        imgPath:
            "assets/pages/img/kanhava/PXL_1850.jpg",
    },
];
const MyCollection8 = [   
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/bags_11.jpg",
    },
    {
        label: "2",
        imgPath:
            "assets/pages/img/kanhava/bags_7.jpg",
    },
    {
        label: "3",
        imgPath:
            "assets/pages/img/kanhava/bags_8.jpg",
    },
    {
        label: "4 ",
        imgPath:
            "assets/pages/img/kanhava/bags_9.jpg",
    },
    {
        label: "5",
        imgPath:
            "assets/pages/img/kanhava/bags_6.jpg",
    },
];
const MyCollection9 = [   
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/bags_14.jpg",
    },
    {
        label: "2",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_19.jpg",
    },
    {
        label: "3",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_18.jpg",
    },
    {
        label: "4 ",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_19.jpg",
    },
    
];
const MyCollection11 = [   
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/bags_38.jpg",
    },
    {
        label: "2",
        imgPath:
            "assets/pages/img/kanhava/bags_37.jpg",
    },
    {
        label: "3",
        imgPath:
            "assets/pages/img/kanhava/bags_41.jpg",
    },
    {
        label: "4 ",
        imgPath:
            "assets/pages/img/kanhava/bags_40.jpg",
    },
    
];
// bags 35 travel
const MyCollection12 = [   
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/bags_34.jpg",
    },
    {
        label: "2",
        imgPath:
            "assets/pages/img/kanhava/bags_35.jpg",
    },
    {
        label: "3",
        imgPath:
            "assets/pages/img/kanhava/bags_32.jpg",
    },
    {
        label: "4 ",
        imgPath:
            "assets/pages/img/kanhava/bags_31.jpg",
    },
    
];
// red luggage
const MyCollection13 = [   
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/PXL_2142.jpg",
    },
    {
        label: "2",
        imgPath:
            "assets/pages/img/kanhava/PXL_1845.jpg",
    },
    {
        label: "3",
        imgPath:
            "assets/pages/img/kanhava/PXL_2142.jpg",
    },
    {
        label: "4 ",
        imgPath:
            "assets/pages/img/kanhava/PXL_1845.jpg",
    },
    
];
const MyCollection14 = [   
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_22.jpg",
    },
    {
        label: "2",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_20.jpg",
    },
    {
        label: "3",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_23.jpg",
    },
    {
        label: "4 ",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_32.jpg",
    },
    
];
const MyCollection15 = [   
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_9.jpg",
    },
    {
        label: "2",
        imgPath:
            "assets/pages/img/kanhava/PXL_1840.jpg",
    },
    {
        label: "3",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_9.jpg",
    },
    {
        label: "4 ",
        imgPath:
            "assets/pages/img/kanhava/PXL_1840.jpg",
    },
    
];
// cooler
const MyCollection16 = [   
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/bags_5.jpg",
    },
    {
        label: "2",
        imgPath:
            "assets/pages/img/kanhava/bags_4.jpg",
    },
    {
        label: "3",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_7.jpg",
    },
    {
        label: "4 ",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_8.jpg",
    },
    
];
// ......
const MyCollection17 = [   
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/PXL_2135.jpg",
    },
    {
        label: "2",
        imgPath:
            "assets/pages/img/kanhava/PXL_1835.jpg",
    },
    {
        label: "3",
        imgPath:
            "assets/pages/img/kanhava/PXL_2130.jpg",
    },
    {
        label: "4 ",
        imgPath:
            "assets/pages/img/kanhava/imbamatombo_12.jpg",
    },
    
];
const MyCollection18 = [   
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/bags_21-1.jpg",
    },
    {
        label: "2",
        imgPath:
            "assets/pages/img/kanhava/bags_20-1.jpg",
    },
    {
        label: "3",
        imgPath:
            "assets/pages/img/kanhava/bags_22-1.jpg",
    },
    {
        label: "4 ",
        imgPath:
            "assets/pages/img/kanhava/bags_20-1.jpg",
    },
    
];
const MyCollection19 = [   
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/bags_24-1.jpg",
    },
    {
        label: "2",
        imgPath:
            "assets/pages/img/kanhava/bags_23-1.jpg",
    },
    {
        label: "3",
        imgPath:
            "assets/pages/img/kanhava/PXL_2135.jpg",
    },
    {
        label: "4 ",
        imgPath:
            "assets/pages/img/kanhava/bags_23-1.jpg",
    },
    
];
const MyCollection20 = [   
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/bags_26-1.jpg",
    },
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/bags_26-1.jpg",
    },
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/bags_26-1.jpg",
    },
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/bags_26-1.jpg",
    },
    
    
];
const MyCollection21 = [   
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/bags_46.jpg",
    },
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/bags_46.jpg",
    },
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/bags_46.jpg",
    },
    {
        label: "1",
        imgPath:
            "assets/pages/img/kanhava/bags_46.jpg",
    },
   
];

export default function Home() {
  
//   const { user }: any = useAuth();

    const [subtitle, setSubtitle] = React.useState('');

    const [modalUpgradeIsOpen, setUpgradeIsOpen] = React.useState(false);
    const [modalBag2IsOpen, setBag2IsOpen] = React.useState(false);
    const [modalBag3IsOpen, setBag3IsOpen] = React.useState(false);
    const [modalBag4IsOpen, setBag4IsOpen] = React.useState(false);
    const [modalBag5IsOpen, setBag5IsOpen] = React.useState(false); 

    const [modalBag6IsOpen, setBag6IsOpen] = React.useState(false);
    const [modalBag7IsOpen, setBag7IsOpen] = React.useState(false);
    const [modalBag8IsOpen, setBag8IsOpen] = React.useState(false);
    const [modalBag9IsOpen, setBag9IsOpen] = React.useState(false);

    const [modalLBag11IsOpen, setLBag11IsOpen] = React.useState(false);
    const [modalLBag12IsOpen, setLBag12IsOpen] = React.useState(false);
    const [modalLBag13IsOpen, setLBag13IsOpen] = React.useState(false);
    const [modalLBag14IsOpen, setLBag14IsOpen] = React.useState(false);
    const [modalLBag15IsOpen, setLBag15IsOpen] = React.useState(false);

    const [modalLBag16IsOpen, setLBag16IsOpen] = React.useState(false);
    const [modalLBag17IsOpen, setLBag17IsOpen] = React.useState(false);
    const [modalLBag18IsOpen, setLBag18IsOpen] = React.useState(false);
    const [modalLBag19IsOpen, setLBag19IsOpen] = React.useState(false);
    const [modalLBag20IsOpen, setLBag20IsOpen] = React.useState(false);
    const [modalLBag21IsOpen, setLBag21IsOpen] = React.useState(false);

    const [customStyles, setCustomStyles] = React.useState({
        content: {
            top: '68%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    });

    function openUpgradeModal() {
      setUpgradeIsOpen(true);
    }

    function closeUpgradeModal() {
      setUpgradeIsOpen(false);
    }

    function openBag2Modal() {
        setBag2IsOpen(true);
    }
  
      function closeBag2Modal() {
        setBag2IsOpen(false);
      }

      function openBag3Modal() {
        setBag3IsOpen(true);
      }
  
      function closeBag3Modal() {
        setBag3IsOpen(false);
      }

      function openBag4Modal() {
        setBag4IsOpen(true);
      }
  
      function closeBag4Modal() {
        setBag4IsOpen(false);
      }

      function openBag5Modal() {
        setBag5IsOpen(true);
      }
  
      function closeBag5Modal() {
        setBag5IsOpen(false);
      }

// ----
      function openBag6Modal() {
        setBag6IsOpen(true);
      }
      function closeBag6Modal() {
        setBag6IsOpen(false);
      }

      function openBag7Modal() {
        setBag7IsOpen(true);
      }  
      function closeBag7Modal() {
        setBag7IsOpen(false);
      }

      function openBag8Modal() {
        setBag8IsOpen(true);
      }  
      function closeBag8Modal() {
        setBag8IsOpen(false);
      }

      function openBag9Modal() {
        setBag9IsOpen(true);
      }  
      function closeBag9Modal() {
        setBag9IsOpen(false);
      } 


      function openLBag11Modal() {
        setLBag11IsOpen(true);
      }  
      function closeLBag11Modal() {
        setLBag11IsOpen(false);
      }
      
      function openLBag12Modal() {
        setLBag12IsOpen(true);
      }  
      function closeLBag12Modal() {
        setLBag12IsOpen(false);
      }

      function openLBag13Modal() {
        setLBag13IsOpen(true);
      }  
      function closeLBag13Modal() {
        setLBag13IsOpen(false);
      }

      function openLBag14Modal() {
        setLBag14IsOpen(true);
      }  
      function closeLBag14Modal() {
        setLBag14IsOpen(false);
      }

      function openLBag15Modal() {
        setLBag15IsOpen(true);
      }  
      function closeLBag15Modal() {
        setLBag15IsOpen(false);
      }

      function openLBag16Modal() {
        setLBag16IsOpen(true);
      }  
      function closeLBag16Modal() {
        setLBag16IsOpen(false);
      }
      function openLBag17Modal() {
        setLBag17IsOpen(true);
      }  
      function closeLBag17Modal() {
        setLBag17IsOpen(false);
      }
      function openLBag18Modal() {
        setLBag18IsOpen(true);
      }  
      function closeLBag18Modal() {
        setLBag18IsOpen(false);
      }
      function openLBag19Modal() {
        setLBag19IsOpen(true);
      }  
      function closeLBag19Modal() {
        setLBag19IsOpen(false);
      }
      function openLBag20Modal() {
        setLBag20IsOpen(true);
      }  
      function closeLBag20Modal() {
        setLBag20IsOpen(false);
      }
      function openLBag21Modal() {
        setLBag21IsOpen(true);
      }  
      function closeLBag21Modal() {
        setLBag21IsOpen(false);
      }
    

    const CollectionSize = MyCollection.length; 
    const theme = useTheme(); 
    const [index, setActiveStep] = React.useState(0); 
      

     // Function to go to the next picture 
    const goToNextPicture = () => { 
        setActiveStep((prevIndex) => (prevIndex + 1) % MyCollection.length);;
    }; 

    const goToPrevPicture = () => { 
        setActiveStep((prevIndex) => (prevIndex - 1 + MyCollection.length) % MyCollection.length); 
    };
    
    
    
  return (
      <>
    
          <HomePageSlider />
            <br />
          <div className="main">
            <div className="container">
                {/* BEGIN SALE PRODUCT & NEW ARRIVALS */}
                
                {/* END SALE PRODUCT & NEW ARRIVALS */}
                {/* BEGIN SIDEBAR & CONTENT */}
                <div className="row margin-bottom-40 ">
                {/* BEGIN SIDEBAR */}
                
                {/* END SIDEBAR */}
                {/* BEGIN CONTENT */}

                <div className="row">
                <div className="sidebar col-md-6 col-lg-3">
                    <br />
                    <ul className="list-group margin-bottom-25 sidebar-menu my-15px">
                    <li className="list-group-item clearfix">
                        <a href="#Backpacks">
                        <i className="fa fa-angle-right" /> Backpacks
                        </a>
                    </li>                    
                    <li className="list-group-item clearfix">
                        <a href="#Luggagebags">
                        <i className="fa fa-angle-right" /> Luggage bags
                        </a>
                    </li>
                    <li className="list-group-item clearfix">
                        <a href="#Coolerbags">
                        <i className="fa fa-angle-right" /> Cooler bags
                        </a>
                    </li>
                    <li className="list-group-item clearfix">
                        <a href="#Backpacks">
                        <i className="fa fa-angle-right" /> Book bags
                        </a>
                    </li>
                    <li className="list-group-item clearfix">
                        <a href="#Luggagebags">
                        <i className="fa fa-angle-right" /> Chairbags
                        </a>
                    </li>
                    <li className="list-group-item clearfix">
                        <a href="#Luggagebags">
                        <i className="fa fa-angle-right" /> Gym bags
                        </a>
                    </li>
                    <li className="list-group-item clearfix">
                        <a href="#Coolerbags">
                        <i className="fa fa-angle-right" /> Pencil bags
                        </a>
                    </li>                    
                    <li className="list-group-item clearfix">
                        <a href="#Sportsbags">
                        <i className="fa fa-angle-right" /> Sports bags
                        </a>
                    </li>
                    </ul>
                </div>
                    {/* <div>item</div> */}
                    <div className="col-sm-6 col-lg-2">
                    <div id="Sportsbags">Sports bags</div>
                        <div className="card border-0" style={{width: '11.2rem'}}>
                        {/* <div className="card-body"> */}
                            {/* <h5 className="card-title">Special title treatment</h5> */}
                            <img
                                src="assets/pages/img/kanhava/imbamatombo_34.jpg"
                                className="img-responsive"
                                alt="Berry Lace Dress"
                            />
                            {/* <a
                                href="#product-pop-up"
                                className="btn btn-default fancybox-fast-view"
                            >
                                View
                            </a> */}
                            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                       {/* </div> */}
                        </div>

                        <div className="card mt-3 border-0" style={{width: '11.2rem'}}>
                        {/* <div className="card-body"> */}
                        <img
                            src="assets/pages/img/kanhava/bags_48.jpg"
                            className="img-responsive"
                            alt="Berry Lace Dress"
                        />
                        {/* <div>                                    
                            <a
                            href="#product-pop-up"
                            className="btn btn-default fancybox-fast-view"
                            >
                            View
                            </a>
                            </div> */}
                        {/* </div> */}
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <br />
                        <div className="card border-0">
                        {/* <div className="card-body"> */}
                        <img
                            src="assets/pages/img/kanhava/imbamatombo_35.jpg"
                            className="img-responsive"
                            alt="Berry Lace Dress"
                        />
                        {/* <div>                                    
                        <a
                            href="#product-pop-up"
                            className="btn btn-default fancybox-fast-view"
                        >
                            View
                        </a>
                        </div> */}
                        </div>

                        <div className="card mt-2 border-0" style={{width: '11rem'}}>
                        {/* <div className="card-body"> */}
                        <img
                            src="assets/pages/img/kanhava/imbamatombo_37.jpg"
                            className="img-responsive"
                            alt="Berry Lace Dress"
                        />
                        {/* <div>                                    
                        <a
                            href="#product-pop-up"
                            className="btn btn-default fancybox-fast-view"
                        >
                            View
                        </a>
                        </div> */}
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <br />
                        <div className="card  border-0" style={{width: '13.5rem'}}>
                        {/* <div className="card-body"> */}
                        <img
                            src="assets/pages/img/kanhava/imbamatombo_36.jpg"
                            className="img-responsive"
                            alt="Berry Lace Dress"
                         />
                            {/* <div>                                   
                                    <a
                                    href="#product-pop-up"
                                    className="btn btn-default fancybox-fast-view"
                                    >
                                    View
                                    </a>
                                </div> */}
                        </div>
                        <div className="card mt-3 border-0" style={{width: '14.5rem'}}>
                        {/* <div className="card-body"> */}
                        <img
                            src="assets/pages/img/kanhava/bags_46.jpg"
                            className="img-responsive"
                            alt="Berry Lace Dress"
                        />
                        {/* <div>                                    
                            <a
                            href="#product-pop-up"
                            className="btn btn-default fancybox-fast-view"
                            >
                            View
                            </a>
                            </div> */}
                        {/* </div> */}
                        </div>
                        {/* </div> */}
                    </div>

                    <div className="col-sm-6 col-lg-2">
                        {/* <br /> */}
                        
                        <div className="card p-4 mt-2 border-0" style={{width: '14.2rem'}} >
                        {/* <div className="card-body"> */}
                        <img
                            src="assets/pages/img/kanhava/bags_47.jpg"
                            className="img-responsive"
                            alt="Berry Lace Dress"
                        />
                        {/* <div>                                    
                        <a
                            href="#product-pop-up"
                            className="btn btn-default fancybox-fast-view"
                        >
                            View
                        </a>
                        </div> */}
                    </div>
                    </div>
                </div>
               
                </div>               
                <br />
                {/* #############  Backpacks ##################### */}
                <div className="row">                
                    <div className="col-sm-6 mb-3 col-lg-3 ">
                    <div id="Backpacks">Backpacks</div>
                        <div className="card  border-0" style={{ width: 254 }}>
                        {/* <div className="card-body"> */}
                            {/* <h5 className="card-title">Special title treatment</h5> */}
                            <a
                                href="#product-pop-up">
                            <img
                                src="assets/pages/img/kanhava/bags_1.jpg"
                                className="img-responsive"
                                alt="Berry Lace Dress"
                                onClick={openUpgradeModal}
                            />
                            </a>
                            <div>
                            <a
                                href="#product-pop-up"
                                className="btn btn-default fancybox-fast-view"
                                onClick={openUpgradeModal}
                            >
                                View
                            </a>
                            </div>
                            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                       {/* </div> */}
                        </div>

                        <br />

                        <div className="card border-0" style={{ width: 254}}>
                        {/* <div className="card-body"> */}
                        <a href="#product-pop-up">
                            <img
                                src="assets/pages/img/kanhava/imbamatombo_16.jpg"
                                className="img-responsive"
                                alt="Berry Lace Dress"
                                onClick={openBag2Modal}
                            />
                        </a>
                        <div>
                        <a
                            href="#product-pop-up"
                            className="btn btn-default fancybox-fast-view"
                            onClick={openBag2Modal}
                        >
                            View
                            </a>
                        </div>                                                            
                        {/* </div> */}
                        </div>

                        <br />

                        <div className="card mt-2 border-0" style={{ width: 254}}>
                        {/* <div className="card-body"> */}
                            {/* <h5 className="card-title">Special title treatment</h5> */}
                            <a
                            href="#product-pop-up">
                            <img
                                src="assets/pages/img/kanhava/bags_1.jpg"
                                className="img-responsive"
                                alt="Berry Lace Dress"
                                onClick={openUpgradeModal}
                            />
                            </a>
                            <div>
                            <a
                                href="#product-pop-up"
                                className="btn btn-default fancybox-fast-view"
                                onClick={openUpgradeModal}
                            >
                                View
                            </a>
                            </div>
                            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                       {/* </div> */}
                        </div>
                        
                    

                    </div>

                    <div className="col-sm-6 mb-3 col-lg-3">
                        <br />
                        <div className="card border-0" style={{ width: 254 }}>
                        {/* <div className="card-body"> */}
                        <a
                            href="#product-pop-up">
                            <img
                                src="assets/pages/img/kanhava/imbamatombo_6.jpg"
                                className="img-responsive"
                                alt="Berry Lace Dress"
                                onClick={openBag3Modal}
                            />
                        </a>
                        <div>                                    
                        <a
                            href="#product-pop-up"
                            className="btn btn-default fancybox-fast-view"
                            onClick={openBag3Modal}
                        >
                            View
                        </a>
                        </div>
                        </div>

                        <br />

                        <div className="card border-0" style={{ width: 244 }}>
                        {/* <div className="card-body"> */}
                        <a
                            href="#product-pop-up">
                            <img
                                src="assets/pages/img/kanhava/PXL_1815.jpg"
                                className="img-responsive"
                                alt="Berry Lace Dress"
                                onClick={openBag4Modal}
                            />
                        </a>
                        <div>                                    
                        <a
                            href="#product-pop-up"
                            className="btn btn-default fancybox-fast-view"
                            data-bs-target="#kt_modal_create"
                            onClick={openBag4Modal}
                        >
                            View
                        </a>
                        </div>

                        {/* </div> */}
                        </div>
                        <br />
                    <div className="card mt-2 border-0" style={{ width: 254 }}>
                        {/* <div className="card-body"> */}
                        <a
                            href="#product-pop-up">
                            <img
                                src="assets/pages/img/kanhava/PXL_1849.jpg"
                                className="img-responsive"
                                alt="Berry Lace Dress" 
                                onClick={openBag7Modal}
                            />
                        </a>
                        <div>                                    
                        <a
                            href="#product-pop-up"
                            className="btn btn-default fancybox-fast-view"
                            onClick={openBag7Modal}
                        >
                            View
                        </a>
                        </div>
                        </div>                   
                    </div>

                    <div className="col-sm-6 mb-3 col-lg-3">
                        <br />
                        <div className="card border-0" style={{ width: 254 }}>
                        {/* <div className="card-body"> */}
                        <a
                            href="#product-pop-up">
                        <img
                            src="assets/pages/img/kanhava/bags_18-1.jpg"
                            className="img-responsive"
                            alt="Berry Lace Dress"
                            onClick={openBag5Modal}
                        />
                        </a>
                        <div>                                    
                        <a
                            href="#product-pop-up"
                            className="btn btn-default fancybox-fast-view"
                            onClick={openBag5Modal}
                        >
                            View
                        </a>
                        </div>

                        {/* </div> */}
                        </div>

                        <br />

                        <div className="card border-0" style={{ width: 248 }}>
                        {/* <div className="card-body"> */}
                            {/* <h5 className="card-title">Special title treatment</h5> */}
                            <a
                            href="#product-pop-up">
                            <img
                                src="assets/pages/img/kanhava/PXL_1823.jpg"
                                className="img-responsive"
                                alt="Berry Lace Dress"
                                onClick={openBag6Modal}
                            />
                            </a>
                            <div>
                            <a
                                href="#product-pop-up"
                                className="btn btn-default fancybox-fast-view"
                                onClick={openBag6Modal}
                            >
                                View
                            </a>
                            </div>
                            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                       </div>

                        <br />

                        <div className="card mt-1 border-0" style={{ width: 254 }}>
                        {/* <div className="card-body"> */}
                        <a
                            href="#product-pop-up">
                        <img
                            src="assets/pages/img/kanhava/bags_6.jpg"
                            className="img-responsive"
                            alt="Berry Lace Dress"
                            onClick={openBag8Modal}
                        />
                        </a>
                        <div>                                    
                            <a
                            href="#product-pop-up"
                            className="btn btn-default fancybox-fast-view"
                            onClick={openBag8Modal}
                            >
                            View
                            </a>                            
                        </div>
                    </div>
                    </div>
                    <br />
                    <div className="col-sm-6 mb-3 col-lg-3">
                        <br />
                        <div className="card mt-8 border-0" style={{ width: 254 }}>
                        {/* <div className="card-body"> */}
                        <a
                            href="#product-pop-up">
                            <img
                                src="assets/pages/img/kanhava/imbamatombo_3.jpg"
                                className="img-responsive"
                                alt="Berry Lace Dress"
                                onClick={openBag6Modal}
                            />
                         </a>
                            <div>
                                    
                               <a
                                href="#product-pop-up"
                                className="btn btn-default fancybox-fast-view"
                                onClick={openBag6Modal}
                                >
                                View
                                </a>
                            </div>
                        </div>
                        {/* </div> */}

                        <br />

                        <div className="card border-0" style={{ width: 247 }}>
                        {/* <div className="card-body"> */}
                        <a
                            href="#product-pop-up">
                            <img
                                src="assets/pages/img/kanhava/imbamatombo_10.jpg"
                                className="img-responsive"
                                alt="Berry Lace Dress"
                                onClick={openBag8Modal}
                            />
                        </a>
                        <div>                                    
                            <a
                            href="#product-pop-up"
                            className="btn btn-default fancybox-fast-view"
                            onClick={openBag8Modal}
                            >
                            View
                            </a>
                            </div>
                        </div>
                        {/* </div> */}

                        <br />

                        <div className="card  border-0" style={{ width: 257}}>
                        {/* <div className="card-body"> */}
                        <a
                            href="#product-pop-up">
                            <img
                                src="assets/pages/img/kanhava/imbamatombo_19.jpg"
                                className="img-responsive"
                                alt="Berry Lace Dress"
                                onClick={openBag9Modal}
                            />
                        </a>
                        <div>                                    
                            <a
                            href="#product-pop-up"
                            className="btn btn-default fancybox-fast-view"
                            onClick={openBag9Modal}
                            >
                            View
                            </a>
                            </div>
                        {/* </div> */}
                        </div>

                        <br />
                        
                    </div>

                    <br />                    
                </div>

                {/* ############## Travel bags ############################## */}
                <br />
                <div className="row">
                {/* <div className="col-md-6 col-lg-3">                 */}
                    <div className="col-sm-6 col-lg-4">
                    <div id="Luggagebags">Travel/Luggage bags</div>
                        <div className="card border-0" >
                        {/* <div className="card-body"> */}
                            {/* <h5 className="card-title">Special title treatment</h5> */}
                            <a
                            href="#product-pop-up">
                            <img
                                src="assets/pages/img/kanhava/bags_40.jpg"
                                className="img-responsive"
                                alt="Berry Lace Dress"
                                onClick={openLBag11Modal}
                            />
                            </a>
                            <div>
                            <a
                                href="#product-pop-up"
                                className="btn btn-default fancybox-fast-view"
                                onClick={openLBag11Modal}
                            >
                                View
                            </a>
                            </div>
                            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                       {/* </div> */}
                        </div>
                    </div>
                    {/* </div> */}
                    {/* <div>item</div> */}
                    <div className="col-sm-6 col-lg-3">
                        <br />
                        <div className="card border-0" style={{width: '14.5rem'}}>
                        {/* <div className="card-body"> */}
                            {/* <h5 className="card-title">Special title treatment</h5> */}
                            <a
                            href="#product-pop-up">
                            <img
                                src="assets/pages/img/kanhava/bags_33.jpg"
                                className="img-responsive"
                                alt="Berry Lace Dress"
                                onClick={openLBag12Modal}
                            />
                            </a>
                            <div>
                            <a
                                href="#product-pop-up"
                                className="btn btn-default fancybox-fast-view"
                                onClick={openLBag12Modal}
                            >
                                View
                            </a>
                            </div>
                            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                       {/* </div> */}
                        </div>

                        <div className="card mt-3 border-0" style={{width: '14.5rem'}}>
                        {/* <div className="card-body"> */}
                        <a
                            href="#product-pop-up">
                            <img
                                src="assets/pages/img/kanhava/PXL_1840.jpg"
                                className="img-responsive"
                                alt="Berry Lace Dress"
                                onClick={openLBag15Modal}
                            />
                        </a>
                        <div>                                    
                            <a
                            href="#product-pop-up"
                            className="btn btn-default fancybox-fast-view"
                            onClick={openLBag15Modal}
                            >
                            View
                            </a>
                            </div>
                        {/* </div> */}
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <br />
                        <div className="card border-0" style={{width: '14.3rem'}}>
                        {/* <div className="card-body"> */}
                        <a
                            href="#product-pop-up">
                            <img
                                src="assets/pages/img/kanhava/PXL_1845.jpg"
                                className="img-responsive"
                                alt="Berry Lace Dress"
                                onClick={openLBag13Modal}
                            />
                        </a>
                        <div>                                    
                        <a
                            href="#product-pop-up"
                            className="btn btn-default fancybox-fast-view"
                            onClick={openLBag13Modal}
                        >
                            View
                        </a>
                        {/* </div> */}

                        </div>
                        </div>

                        <div className="card  border-0" style={{width: '14.3rem'}}>
                        {/* <div className="card-body"> */}
                        <a
                            href="#product-pop-up">
                            <img
                                src="assets/pages/img/kanhava/imbamatombo_22.jpg"
                                className="img-responsive"
                                alt="Berry Lace Dress"
                                onClick={openLBag14Modal}
                            />
                        </a>
                        <div>                                    
                        <a
                            href="#product-pop-up"
                            className="btn btn-default fancybox-fast-view"
                            onClick={openLBag14Modal}
                        >
                            View
                        </a>
                        {/* </div> */}

                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <br />
                        <div className="card  border-0" style={{width: '14.5rem', paddingLeft:'8%'}}>
                        <div className="card-body">
                        <a
                            href="#product-pop-up">
                            <img
                                src="assets/pages/img/kanhava/imbamatombo_9.jpg"
                                className="img-responsive"
                                alt="Berry Lace Dress"
                                onClick={openLBag15Modal}
                            />
                        </a>
                            <div>                                    
                                    <a
                                    href="#product-pop-up"
                                    className="btn btn-default fancybox-fast-view"
                                    onClick={openLBag15Modal}
                                    >
                                    View
                                    </a>
                                </div>
                        </div>
                      
                        </div>
                    </div>                    
                </div>

                <br />

                <div className="row" id="pencilCases">
                <div className="sidebar col-md-6 col-lg-4">
                    <br />
                    <div id="Coolerbags">Cooler bags and Pencil cases</div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="card mt-2 border-0" style={{width:'22.7rem'}}>
                          {/* <div className="card-body"> */}
                          <a
                              href="#product-pop-up">
                              <img
                                  src="assets/pages/img/kanhava/bags_25-1.jpg"
                                  className="img-responsive"
                                  alt="Berry Lace Dress"
                                  onClick={openLBag19Modal}
                              />
                          </a>
                          <div>                                    
                          <a
                              href="#product-pop-up"
                              className="btn btn-default fancybox-fast-view"
                              onClick={openLBag19Modal}
                          >
                              View
                          </a>
                          {/* </div> */}
                          </div>
                        </div>
                        </div>
                    
                    </div>
                    {/* <div>item</div> */}
                    <br />
                    <div className="col-sm-6 col-lg-3">   
                        <br />
                        <br />                 
                        <div className="card mt-2 border-0" style={{width: '14.4rem'}}>
                        {/* <div className="card-body"> */}
                            {/* <h5 className="card-title">Special title treatment</h5> */}
                            <a
                            href="#product-pop-up">
                            <img
                                src="assets/pages/img/kanhava/bags_4.jpg"
                                className="img-responsive"
                                alt="Berry Lace Dress"
                                onClick={openLBag16Modal}
                            />
                            </a>
                            <div>
                            <a
                                href="#product-pop-up"
                                className="btn btn-default fancybox-fast-view"
                                onClick={openLBag16Modal}
                            >
                                View
                            </a>
                            </div>
                            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                       {/* </div> */}
                        </div>

                        <div className="card mt-3 border-0" style={{width: '14.4rem'}}>
                        {/* <div className="card-body"> */}
                        <a
                            href="#product-pop-up">
                            <img
                                src="assets/pages/img/kanhava/PXL_2130.jpg"
                                className="img-responsive"
                                alt="Berry Lace Dress"
                                onClick={openLBag17Modal}
                            />
                        </a>
                        <div>                                    
                            <a
                            href="#product-pop-up"
                            className="btn btn-default fancybox-fast-view"
                            onClick={openLBag17Modal}
                            >
                            View
                            </a>
                            </div>
                        {/* </div> */}
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <br />
                        <br />
                        <br />
                        <div className="card mt-3 border-0" style={{width: '13.7rem'}}>
                        {/* <div className="card-body"> */}
                        <a
                            href="#product-pop-up">
                        <img
                            src="assets/pages/img/kanhava/imbamatombo_12.jpg"
                            className="img-responsive"
                            alt="Berry Lace Dress"
                            onClick={openLBag17Modal}
                        />
                        </a>
                        <div>                                    
                        <a
                            href="#product-pop-up"
                            className="btn btn-default mt-4 fancybox-fast-view"
                            onClick={openLBag17Modal}
                        >
                            View
                        </a>
                        {/* </div> */}

                        </div>
                        </div>

                        <div className="card mt-3 border-0" style={{width: '13.4rem'}}>
                        {/* <div className="card-body"> */}
                        <a
                            href="#product-pop-up">
                            <img
                                src="assets/pages/img/kanhava/bags_26-1.jpg"
                                className="img-responsive"
                                alt="Berry Lace Dress"
                                onClick={openLBag20Modal}
                            />
                        </a>
                        <div>                                    
                        <a
                            href="#product-pop-up"
                            className="btn btn-default fancybox-fast-view"
                            onClick={openLBag20Modal}
                        >
                            View
                        </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <br />
                        <br />
                        <div className="card mt-4 border-0" style={{width: '14.5rem', paddingLeft:'2%'}}>
                        <div className="card-body">
                        <a
                            href="#product-pop-up">
                            <img
                                src="assets/pages/img/kanhava/bags_46.jpg"
                                className="img-responsive"
                                alt="Berry Lace Dress"
                                onClick={openLBag21Modal}
                            />
                        </a>
                            <div>                                    
                                    <a
                                    href="#product-pop-up"
                                    className="btn btn-default fancybox-fast-view"
                                    onClick={openLBag21Modal}
                                    >
                                    View
                                    </a>
                                </div>
                        </div>
                      
                        </div>

                        <div className="card mt-4 border-0" style={{width: '14.5rem', paddingLeft:'2%'}}>
                        <div className="card-body">
                        <a
                            href="#product-pop-up">
                            <img
                                src="assets/pages/img/kanhava/bags_20-1.jpg"
                                className="img-responsive"
                                alt="Berry Lace Dress"
                                onClick={openLBag18Modal}
                            />
                         </a>
                            <div>                                    
                                    <a
                                    href="#product-pop-up"
                                    className="btn btn-default fancybox-fast-view"
                                    onClick={openLBag18Modal}
                                    >
                                    View
                                    </a>
                                </div>
                        </div>                      
                        </div>
                    </div>                    
                </div>
                <br />
                <br />
                    {/* END TWO PRODUCTS & PROMO */}
                </div>
            </div>

                  <Modal
                    isOpen={modalUpgradeIsOpen}
                    onRequestClose={closeUpgradeModal}
                    style={customStyles}
                    contentLabel="modal"
                    >
                   <div
                      className="upgrade-modal fade show"
                      id="kt_modal_upgrade_plan"
                      tabIndex={-1}
                      style={{ background:'white'}}
                    //   aria-modal="true"
                    //   role="dialog"
                    >
                      {/*begin::Modal dialog*/}
                      {/* <div className="modal-dialog modal-xl"> */}
                        {/*begin::Modal content*/}
                        <div className="upgrade-modal rounded">
                          {/*begin::Modal header*/}
                          <div className="modal-header justify-content-end border-0 pb-0">
                            {/*begin::Close*/}
                            <div
                              className="btn btn-sm btn-icon btn-active-color-primary"
                              data-bs-dismiss="modal"
                            >
                              <i className="ki-duotone ki-cross fs-1">
                                <span className="path1" />
                                
                                <span className="path2" />
                              </i>{" "}
                            </div>
                            {/*end::Close*/}
                          </div>
                          {/*end::Modal header*/}
                          {/*begin::Modal body*/}
                          <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/*begin::Heading*/}
                            
                            {/*end::Heading*/}
                            {/*begin::Plans*/}
                            <div className="d-flex flex-column">
                              {/*begin::Nav group*/}
                              <div
                                className="nav-group nav-group-outline mx-auto"
                                data-kt-buttons="true"
                                data-kt-initialized={1}
                              >
                                                              
                                </div>
                                <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button 
                                        className="fa fa-chevron-left"
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToPrevPicture}>                                            
                                    </button>
                                   
                                    <div 
                                        style={{ 
                                            marginLeft: "4%", 
                                        }} 
                                    > 
            
                                        <div 
                                            style={{ 
                                                maxWidth: 400, 
                                                flexGrow: 1, 
                                            }} 
                                        > 
                                            <Paper 
                                                square 
                                                elevation={0} 
                                                style={{ 
                                                    height: 50,  
                                                    textAlign:'center',                                                    
                                                    // paddingLeft: theme.spacing(4), 
                                                    backgroundColor: "transparent", 
                                                    alignItems: "center", 
                                                }} 
                                            > 
                                                <Typography>{MyCollection[index].label}</Typography> 
                                            </Paper> 
                                            
                                                <img 
                                                    src={MyCollection[index].imgPath} 
                                                    style={{ 
                                                        // height: 255, 
                                                        width: "90%", 
                                                        // maxWidth: 400, 
                                                        display: "block", 
                                                        overflow: "hidden", 
                                                    }} 
                                                alt={MyCollection[index].label} 
                                            /> 
                                               
                                        </div> 
                                    </div> 
                                    
                                    <button 
                                        className="fa fa-chevron-right" 
                                        id="controlbtn"
                                        style={{background:'transparent', marginLeft: "4%"}} 
                                        onClick={goToNextPicture}>                                        
                                    </button>
                                </div>
                                    
                                </div>
                                    
                                    <div className="d-flex mt-1 flex-center flex-row-fluid pt-12">
                                    <button
                                        type="reset"
                                        className="btn btn-light me-3"
                                        onClick={closeUpgradeModal}
                                        // onRequestClose={closeUpgradeModal}
                                    >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                // className="btn btn-primary"
                                id="kt_modal_upgrade_plan_btn"
                              >                            
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Modal body*/}
                        {/* </div> */}
                        {/*end::Modal content*/}
                      </div>
                      {/*end::Modal dialog*/}
                    </div>
                  </Modal>

                  <Modal
                    isOpen={modalBag2IsOpen}
                    onRequestClose={closeBag2Modal}
                    style={customStyles}
                    contentLabel="modal"
                    >
                   <div
                      className="upgrade-modal fade show"
                      id="kt_modal_upgrade_plan"
                      tabIndex={-1}
                      style={{ background:'white'}}
                    //   aria-modal="true"
                    //   role="dialog"
                    >
                      {/*begin::Modal dialog*/}
                      {/* <div className="modal-dialog modal-xl"> */}
                        {/*begin::Modal content*/}
                        <div className="upgrade-modal rounded">
                          {/*begin::Modal header*/}
                          <div className="modal-header justify-content-end border-0 pb-0">
                            {/*begin::Close*/}
                            <div
                              className="btn btn-sm btn-icon btn-active-color-primary"
                              data-bs-dismiss="modal"
                            >
                              <i className="ki-duotone ki-cross fs-1">
                                <span className="path1" />
                                
                                <span className="path2" />
                              </i>{" "}
                            </div>
                            {/*end::Close*/}
                          </div>
                          {/*end::Modal header*/}
                          {/*begin::Modal body*/}
                          <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/*begin::Heading*/}
                            
                            {/*end::Heading*/}
                            {/*begin::Plans*/}
                            <div className="d-flex flex-column">
                              {/*begin::Nav group*/}
                              <div
                                className="nav-group nav-group-outline mx-auto"
                                data-kt-buttons="true"
                                data-kt-initialized={1}
                              >
                                                              
                                </div>
                                <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button 
                                        className="fa fa-chevron-left"
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToPrevPicture}>                                            
                                    </button>
                                   
                                    <div 
                                        style={{ 
                                            marginLeft: "4%", 
                                        }} 
                                    > 
            
                                        <div 
                                            style={{ 
                                                maxWidth: 400, 
                                                flexGrow: 1, 
                                            }} 
                                        > 
                                            <Paper 
                                                square 
                                                elevation={0} 
                                                style={{ 
                                                    height: 50,  
                                                    textAlign:'center',                                                    
                                                    // paddingLeft: theme.spacing(4), 
                                                    backgroundColor: "transparent", 
                                                    alignItems: "center", 
                                                }} 
                                            > 
                                                <Typography>{MyCollection1[index].label}</Typography> 
                                            </Paper> 
                                            
                                                <img 
                                                    src={MyCollection1[index].imgPath} 
                                                    style={{ 
                                                        // height: 255, 
                                                        width: "100%", 
                                                        // maxWidth: 400, 
                                                        display: "block", 
                                                        overflow: "hidden", 
                                                    }} 
                                                alt={MyCollection1[index].label} 
                                            /> 
                                               
                                        </div> 
                                    </div> 
                                    
                                    <button 
                                        className="fa fa-chevron-right" 
                                        id="controlbtn"
                                        style={{background:'transparent', marginLeft: "4%"}} 
                                        onClick={goToNextPicture}>                                        
                                    </button>
                                </div>
                                    
                                </div>
                                    
                                    <div className="d-flex mt-1 flex-center flex-row-fluid pt-12">
                                    <button
                                        type="reset"
                                        className="btn btn-light me-3"
                                        onClick={closeBag2Modal}
                                        // onRequestClose={closeUpgradeModal}
                                    >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                // className="btn btn-primary"
                                id="kt_modal_upgrade_plan_btn"
                              >                            
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Modal body*/}
                        {/* </div> */}
                        {/*end::Modal content*/}
                      </div>
                      {/*end::Modal dialog*/}
                    </div>
                  </Modal>

                  <Modal
                    isOpen={modalBag3IsOpen}
                    onRequestClose={closeBag3Modal}
                    style={customStyles}
                    contentLabel="modal"
                    >
                   <div
                      className="upgrade-modal fade show"
                      id="kt_modal_upgrade_plan"
                      tabIndex={-1}
                      style={{ background:'white'}}
                    //   aria-modal="true"
                    //   role="dialog"
                    >
                      {/*begin::Modal dialog*/}
                      {/* <div className="modal-dialog modal-xl"> */}
                        {/*begin::Modal content*/}
                        <div className="upgrade-modal rounded">
                          {/*begin::Modal header*/}
                          <div className="modal-header justify-content-end border-0 pb-0">
                            {/*begin::Close*/}
                            <div
                              className="btn btn-sm btn-icon btn-active-color-primary"
                              data-bs-dismiss="modal"
                            >
                              <i className="ki-duotone ki-cross fs-1">
                                <span className="path1" />
                                
                                <span className="path2" />
                              </i>{" "}
                            </div>
                            {/*end::Close*/}
                          </div>
                          {/*end::Modal header*/}
                          {/*begin::Modal body*/}
                          <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/*begin::Heading*/}
                            
                            {/*end::Heading*/}
                            {/*begin::Plans*/}
                            <div className="d-flex flex-column">
                              {/*begin::Nav group*/}
                              <div
                                className="nav-group nav-group-outline mx-auto"
                                data-kt-buttons="true"
                                data-kt-initialized={1}
                              >
                                                              
                                </div>
                                <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button 
                                        className="fa fa-chevron-left"
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToPrevPicture}>                                            
                                    </button>
                                   
                                    <div 
                                        style={{ 
                                            marginLeft: "4%", 
                                        }} 
                                    > 
            
                                        <div 
                                            style={{ 
                                                maxWidth: 400, 
                                                flexGrow: 1, 
                                            }} 
                                        > 
                                            <Paper 
                                                square 
                                                elevation={0} 
                                                style={{ 
                                                    height: 50,  
                                                    textAlign:'center',                                                    
                                                    // paddingLeft: theme.spacing(4), 
                                                    backgroundColor: "transparent", 
                                                    alignItems: "center", 
                                                }} 
                                            > 
                                                <Typography>{MyCollection3[index].label}</Typography> 
                                            </Paper> 
                                            
                                                <img 
                                                    src={MyCollection3[index].imgPath} 
                                                    style={{ 
                                                        // height: 255, 
                                                        width: "96%", 
                                                        // maxWidth: 400, 
                                                        display: "block", 
                                                        overflow: "hidden", 
                                                    }} 
                                                alt={MyCollection3[index].label} 
                                            /> 
                                               
                                        </div> 
                                    </div> 
                                    
                                    <button 
                                        className="fa fa-chevron-right" 
                                        id="controlbtn"
                                        style={{background:'transparent', marginLeft: "4%"}} 
                                        onClick={goToNextPicture}>                                        
                                    </button>
                                </div>
                                    
                                </div>
                                    
                                    <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button
                                        type="reset"
                                        className="btn btn-light me-3"
                                        onClick={closeBag3Modal}
                                        // onRequestClose={closeUpgradeModal}
                                    >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                // className="btn btn-primary"
                                id="kt_modal_upgrade_plan_btn"
                              >                            
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Modal body*/}
                        {/* </div> */}
                        {/*end::Modal content*/}
                      </div>
                      {/*end::Modal dialog*/}
                    </div>
                  </Modal>

                  <Modal
                    isOpen={modalBag4IsOpen}
                    onRequestClose={closeBag4Modal}
                    style={customStyles}
                    contentLabel="modal"
                    >
                   <div
                      className="upgrade-modal fade show"
                      id="kt_modal_upgrade_plan"
                      tabIndex={-1}
                      style={{ background:'white'}}
                    //   aria-modal="true"
                    //   role="dialog"
                    >
                      {/*begin::Modal dialog*/}
                      {/* <div className="modal-dialog modal-xl"> */}
                        {/*begin::Modal content*/}
                        <div className="upgrade-modal rounded">
                          {/*begin::Modal header*/}
                          <div className="modal-header justify-content-end border-0 pb-0">
                            {/*begin::Close*/}
                            <div
                              className="btn btn-sm btn-icon btn-active-color-primary"
                              data-bs-dismiss="modal"
                            >
                              <i className="ki-duotone ki-cross fs-1">
                                <span className="path1" />
                                
                                <span className="path2" />
                              </i>{" "}
                            </div>
                            {/*end::Close*/}
                          </div>
                          {/*end::Modal header*/}
                          {/*begin::Modal body*/}
                          <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/*begin::Heading*/}
                            
                            {/*end::Heading*/}
                            {/*begin::Plans*/}
                            <div className="d-flex flex-column">
                              {/*begin::Nav group*/}
                              <div
                                className="nav-group nav-group-outline mx-auto"
                                data-kt-buttons="true"
                                data-kt-initialized={1}
                              >
                                                              
                                </div>
                                <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button 
                                        className="fa fa-chevron-left"
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToPrevPicture}>                                            
                                    </button>
                                   
                                    <div 
                                        style={{ 
                                            marginLeft: "4%", 
                                        }} 
                                    > 
            
                                        <div 
                                            style={{ 
                                                maxWidth: 400, 
                                                flexGrow: 1, 
                                            }} 
                                        > 
                                            <Paper 
                                                square 
                                                elevation={0} 
                                                style={{ 
                                                    height: 50,  
                                                    textAlign:'center',                                                    
                                                    // paddingLeft: theme.spacing(4), 
                                                    backgroundColor: "transparent", 
                                                    alignItems: "center", 
                                                }} 
                                            > 
                                                <Typography>{MyCollection4[index].label}</Typography> 
                                            </Paper> 
                                            
                                                <img 
                                                    src={MyCollection4[index].imgPath} 
                                                    style={{ 
                                                        // height: 255, 
                                                        width: "90%", 
                                                        // maxWidth: 400, 
                                                        display: "block", 
                                                        overflow: "hidden", 
                                                    }} 
                                                alt={MyCollection4[index].label} 
                                            /> 
                                               
                                        </div> 
                                    </div> 
                                    
                                    <button 
                                        className="fa fa-chevron-right" 
                                        id="controlbtn"
                                        style={{background:'transparent', marginLeft: "4%"}} 
                                        onClick={goToNextPicture}>                                        
                                    </button>
                                </div>
                                    
                                </div>
                                    
                                    <div className="d-flex mt-1 flex-center flex-row-fluid pt-12">
                                    <button
                                        type="reset"
                                        className="btn btn-light me-3"
                                        onClick={closeBag4Modal}
                                        // onRequestClose={closeUpgradeModal}
                                    >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                // className="btn btn-primary"
                                id="kt_modal_upgrade_plan_btn"
                              >                            
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Modal body*/}
                        {/* </div> */}
                        {/*end::Modal content*/}
                      </div>
                      {/*end::Modal dialog*/}
                    </div>
                  </Modal>

                  <Modal
                    isOpen={modalBag5IsOpen}
                    onRequestClose={closeBag5Modal}
                    style={customStyles}
                    contentLabel="modal"
                    >
                   <div
                      className="upgrade-modal fade show"
                      id="kt_modal_upgrade_plan"
                      tabIndex={-1}
                      style={{ background:'white'}}
                    //   aria-modal="true"
                    //   role="dialog"
                    >
                      {/*begin::Modal dialog*/}
                      {/* <div className="modal-dialog modal-xl"> */}
                        {/*begin::Modal content*/}
                        <div className="upgrade-modal rounded">
                          {/*begin::Modal header*/}
                          <div className="modal-header justify-content-end border-0 pb-0">
                            {/*begin::Close*/}
                            <div
                              className="btn btn-sm btn-icon btn-active-color-primary"
                              data-bs-dismiss="modal"
                            >
                              <i className="ki-duotone ki-cross fs-1">
                                <span className="path1" />
                                
                                <span className="path2" />
                              </i>{" "}
                            </div>
                            {/*end::Close*/}
                          </div>
                          {/*end::Modal header*/}
                          {/*begin::Modal body*/}
                          <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/*begin::Heading*/}
                            
                            {/*end::Heading*/}
                            {/*begin::Plans*/}
                            <div className="d-flex flex-column">
                              {/*begin::Nav group*/}
                              <div
                                className="nav-group nav-group-outline mx-auto"
                                data-kt-buttons="true"
                                data-kt-initialized={1}
                              >
                                                              
                                </div>
                                <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button 
                                        className="fa fa-chevron-left"
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToPrevPicture}>                                            
                                    </button>
                                   
                                    <div 
                                        style={{ 
                                            marginLeft: "4%", 
                                        }} 
                                    >             
                                        <div 
                                            style={{ 
                                                maxWidth: 400, 
                                                flexGrow: 1, 
                                            }} 
                                        > 
                                            <Paper 
                                                square 
                                                elevation={0} 
                                                style={{ 
                                                    height: 50,  
                                                    textAlign:'center',                                                    
                                                    // paddingLeft: theme.spacing(4), 
                                                    backgroundColor: "transparent", 
                                                    alignItems: "center", 
                                                }} 
                                            > 
                                                <Typography>{MyCollection5[index].label}</Typography> 
                                            </Paper> 
                                            
                                                <img 
                                                    src={MyCollection5[index].imgPath} 
                                                    style={{ 
                                                        // height: 255, 
                                                        width: "96%", 
                                                        // maxWidth: 400, 
                                                        display: "block", 
                                                        overflow: "hidden", 
                                                    }} 
                                                alt={MyCollection5[index].label} 
                                            /> 
                                               
                                        </div> 
                                    </div> 
                                    
                                    <button 
                                        className="fa fa-chevron-right" 
                                        id="controlbtn"
                                        style={{background:'transparent', marginLeft: "4%"}} 
                                        onClick={goToNextPicture}>                                        
                                    </button>
                                </div>
                                    
                                </div>
                                    
                                    <div className="d-flex mt-1 flex-center flex-row-fluid pt-12">
                                    <button
                                        type="reset"
                                        className="btn btn-light me-3"
                                        onClick={closeBag5Modal}
                                        // onRequestClose={closeUpgradeModal}
                                    >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                // className="btn btn-primary"
                                id="kt_modal_upgrade_plan_btn"
                              >                            
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Modal body*/}
                        {/* </div> */}
                        {/*end::Modal content*/}
                      </div>
                      {/*end::Modal dialog*/}
                    </div>
                  </Modal>
{/* 6 */}
                  <Modal
                    isOpen={modalBag6IsOpen}
                    onRequestClose={closeBag6Modal}
                    style={customStyles}
                    contentLabel="modal"
                    >
                   <div
                      className="upgrade-modal fade show"
                      id="kt_modal_upgrade_plan"
                      tabIndex={-1}
                      style={{ background:'white'}}
                    //   aria-modal="true"
                    //   role="dialog"
                    >
                      {/*begin::Modal dialog*/}
                      {/* <div className="modal-dialog modal-xl"> */}
                        {/*begin::Modal content*/}
                        <div className="upgrade-modal rounded">
                          {/*begin::Modal header*/}
                          <div className="modal-header justify-content-end border-0 pb-0">
                            {/*begin::Close*/}
                            <div
                              className="btn btn-sm btn-icon btn-active-color-primary"
                              data-bs-dismiss="modal"
                            >
                              <i className="ki-duotone ki-cross fs-1">
                                <span className="path1" />
                                
                                <span className="path2" />
                              </i>{" "}
                            </div>
                            {/*end::Close*/}
                          </div>
                          {/*end::Modal header*/}
                          {/*begin::Modal body*/}
                          <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/*begin::Heading*/}
                            
                            {/*end::Heading*/}
                            {/*begin::Plans*/}
                            <div className="d-flex flex-column">
                              {/*begin::Nav group*/}
                              <div
                                className="nav-group nav-group-outline mx-auto"
                                data-kt-buttons="true"
                                data-kt-initialized={1}
                              >
                                                              
                                </div>
                                <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button 
                                        className="fa fa-chevron-left"
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToPrevPicture}>                                            
                                    </button>
                                   
                                    <div 
                                        style={{ 
                                            marginLeft: "4%", 
                                        }} 
                                    >             
                                        <div 
                                            style={{ 
                                                maxWidth: 400, 
                                                flexGrow: 1, 
                                            }} 
                                        > 
                                            <Paper 
                                                square 
                                                elevation={0} 
                                                style={{ 
                                                    height: 50,  
                                                    textAlign:'center',                                                    
                                                    // paddingLeft: theme.spacing(4), 
                                                    backgroundColor: "transparent", 
                                                    alignItems: "center", 
                                                }} 
                                            > 
                                                <Typography>{MyCollection6[index].label}</Typography> 
                                            </Paper> 
                                            
                                                <img 
                                                    src={MyCollection6[index].imgPath} 
                                                    style={{ 
                                                        // height: 255, 
                                                        width: "96%", 
                                                        // maxWidth: 400, 
                                                        display: "block", 
                                                        overflow: "hidden", 
                                                    }} 
                                                alt={MyCollection6[index].label} 
                                            /> 
                                               
                                        </div> 
                                    </div> 
                                    
                                    <button 
                                        className="fa fa-chevron-right" 
                                        id="controlbtn"
                                        style={{background:'transparent', marginLeft: "4%"}} 
                                        onClick={goToNextPicture}>                                        
                                    </button>
                                </div>
                                    
                                </div>
                                    
                                    <div className="d-flex mt-1 flex-center flex-row-fluid pt-12">
                                    <button
                                        type="reset"
                                        className="btn btn-light me-3"
                                        onClick={closeBag6Modal}
                                        // onRequestClose={closeUpgradeModal}
                                    >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                // className="btn btn-primary"
                                id="kt_modal_upgrade_plan_btn"
                              >                            
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Modal body*/}
                        {/* </div> */}
                        {/*end::Modal content*/}
                      </div>
                      {/*end::Modal dialog*/}
                    </div>
                  </Modal>
{/* ------------ */}
                  <Modal
                    isOpen={modalBag7IsOpen}
                    onRequestClose={closeBag7Modal}
                    style={customStyles}
                    contentLabel="modal"
                    >
                   <div
                      className="upgrade-modal fade show"
                      id="kt_modal_upgrade_plan"
                      tabIndex={-1}
                      style={{ background:'white'}}
                    //   aria-modal="true"
                    //   role="dialog"
                    >
                      {/*begin::Modal dialog*/}
                      {/* <div className="modal-dialog modal-xl"> */}
                        {/*begin::Modal content*/}
                        <div className="upgrade-modal rounded">
                          {/*begin::Modal header*/}
                          <div className="modal-header justify-content-end border-0 pb-0">
                            {/*begin::Close*/}
                            <div
                              className="btn btn-sm btn-icon btn-active-color-primary"
                              data-bs-dismiss="modal"
                            >
                              <i className="ki-duotone ki-cross fs-1">
                                <span className="path1" />
                                
                                <span className="path2" />
                              </i>{" "}
                            </div>
                            {/*end::Close*/}
                          </div>
                          {/*end::Modal header*/}
                          {/*begin::Modal body*/}
                          <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/*begin::Heading*/}
                            
                            {/*end::Heading*/}
                            {/*begin::Plans*/}
                            <div className="d-flex flex-column">
                              {/*begin::Nav group*/}
                              <div
                                className="nav-group nav-group-outline mx-auto"
                                data-kt-buttons="true"
                                data-kt-initialized={1}
                              >
                                                              
                                </div>
                                <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button 
                                        className="fa fa-chevron-left"
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToPrevPicture}>                                            
                                    </button>
                                   
                                    <div 
                                        style={{ 
                                            marginLeft: "4%", 
                                        }} 
                                    >             
                                        <div 
                                            style={{ 
                                                maxWidth: 400, 
                                                flexGrow: 1, 
                                            }} 
                                        > 
                                            <Paper 
                                                square 
                                                elevation={0} 
                                                style={{ 
                                                    height: 50,  
                                                    textAlign:'center',                                                    
                                                    // paddingLeft: theme.spacing(4), 
                                                    backgroundColor: "transparent", 
                                                    alignItems: "center", 
                                                }} 
                                            > 
                                                <Typography>{MyCollection7[index].label}</Typography> 
                                            </Paper> 
                                            
                                                <img 
                                                    src={MyCollection7[index].imgPath} 
                                                    style={{ 
                                                        // height: 255, 
                                                        width: "90%", 
                                                        // maxWidth: 400, 
                                                        display: "block", 
                                                        overflow: "hidden", 
                                                    }} 
                                                alt={MyCollection7[index].label} 
                                            /> 
                                               
                                        </div> 
                                    </div> 
                                    
                                    <button 
                                        className="fa fa-chevron-right" 
                                        id="controlbtn"
                                        style={{background:'transparent', marginLeft: "4%"}} 
                                        onClick={goToNextPicture}>                                        
                                    </button>
                                </div>
                                    
                                </div>
                                    
                                    <div className="d-flex mt-1 flex-center flex-row-fluid pt-12">
                                    <button
                                        type="reset"
                                        className="btn btn-light me-3"
                                        onClick={closeBag7Modal}
                                        // onRequestClose={closeUpgradeModal}
                                    >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                // className="btn btn-primary"
                                id="kt_modal_upgrade_plan_btn"
                              >                            
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Modal body*/}
                        {/* </div> */}
                        {/*end::Modal content*/}
                      </div>
                      {/*end::Modal dialog*/}
                    </div>
                  </Modal>

                  <Modal
                    isOpen={modalBag8IsOpen}
                    onRequestClose={closeBag8Modal}
                    style={customStyles}
                    contentLabel="modal"
                    >
                   <div
                      className="upgrade-modal fade show"
                      id="kt_modal_upgrade_plan"
                      tabIndex={-1}
                      style={{ background:'white'}}
                    //   aria-modal="true"
                    //   role="dialog"
                    >
                      {/*begin::Modal dialog*/}
                      {/* <div className="modal-dialog modal-xl"> */}
                        {/*begin::Modal content*/}
                        <div className="upgrade-modal rounded">
                          {/*begin::Modal header*/}
                          <div className="modal-header justify-content-end border-0 pb-0">
                            {/*begin::Close*/}
                            <div
                              className="btn btn-sm btn-icon btn-active-color-primary"
                              data-bs-dismiss="modal"
                            >
                              <i className="ki-duotone ki-cross fs-1">
                                <span className="path1" />
                                
                                <span className="path2" />
                              </i>{" "}
                            </div>
                            {/*end::Close*/}
                          </div>
                          {/*end::Modal header*/}
                          {/*begin::Modal body*/}
                          <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/*begin::Heading*/}
                            
                            {/*end::Heading*/}
                            {/*begin::Plans*/}
                            <div className="d-flex flex-column">
                              {/*begin::Nav group*/}
                              <div
                                className="nav-group nav-group-outline mx-auto"
                                data-kt-buttons="true"
                                data-kt-initialized={1}
                              >
                                                              
                                </div>
                                <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button 
                                        className="fa fa-chevron-left"
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToPrevPicture}>                                            
                                    </button>
                                   
                                    <div 
                                        style={{ 
                                            marginLeft: "4%", 
                                        }} 
                                    >             
                                        <div 
                                            style={{ 
                                                maxWidth: 400, 
                                                flexGrow: 1, 
                                            }} 
                                        > 
                                            <Paper 
                                                square 
                                                elevation={0} 
                                                style={{ 
                                                    height: 50,  
                                                    textAlign:'center',                                                    
                                                    // paddingLeft: theme.spacing(4), 
                                                    backgroundColor: "transparent", 
                                                    alignItems: "center", 
                                                }} 
                                            > 
                                                <Typography>{MyCollection8[index].label}</Typography> 
                                            </Paper> 
                                            
                                                <img 
                                                    src={MyCollection8[index].imgPath} 
                                                    style={{ 
                                                        // height: 255, 
                                                        width: "90%", 
                                                        // maxWidth: 400, 
                                                        display: "block", 
                                                        overflow: "hidden", 
                                                    }} 
                                                alt={MyCollection8[index].label} 
                                            /> 
                                               
                                        </div> 
                                    </div> 
                                    
                                    <button 
                                        className="fa fa-chevron-right" 
                                        id="controlbtn"
                                        style={{background:'transparent', marginLeft: "4%"}} 
                                        onClick={goToNextPicture}>                                        
                                    </button>
                                </div>
                                    
                                </div>
                                    
                                    <div className="d-flex mt-1 flex-center flex-row-fluid pt-12">
                                    <button
                                        type="reset"
                                        className="btn btn-light me-3"
                                        onClick={closeBag8Modal}
                                        // onRequestClose={closeUpgradeModal}
                                    >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                // className="btn btn-primary"
                                id="kt_modal_upgrade_plan_btn"
                              >                            
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Modal body*/}
                        {/* </div> */}
                        {/*end::Modal content*/}
                      </div>
                      {/*end::Modal dialog*/}
                    </div>
                  </Modal>

                  <Modal
                    isOpen={modalBag9IsOpen}
                    onRequestClose={closeBag9Modal}
                    style={customStyles}
                    contentLabel="modal"
                    >
                   <div
                      className="upgrade-modal fade show"
                      id="kt_modal_upgrade_plan"
                      tabIndex={-1}
                      style={{ background:'white'}}
                    //   aria-modal="true"
                    //   role="dialog"
                    >
                      {/*begin::Modal dialog*/}
                      {/* <div className="modal-dialog modal-xl"> */}
                        {/*begin::Modal content*/}
                        <div className="upgrade-modal rounded">
                          {/*begin::Modal header*/}
                          <div className="modal-header justify-content-end border-0 pb-0">
                            {/*begin::Close*/}
                            <div
                              className="btn btn-sm btn-icon btn-active-color-primary"
                              data-bs-dismiss="modal"
                            >
                              <i className="ki-duotone ki-cross fs-1">
                                <span className="path1" />
                                
                                <span className="path2" />
                              </i>{" "}
                            </div>
                            {/*end::Close*/}
                          </div>
                          {/*end::Modal header*/}
                          {/*begin::Modal body*/}
                          <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/*begin::Heading*/}
                            
                            {/*end::Heading*/}
                            {/*begin::Plans*/}
                            <div className="d-flex flex-column">
                              {/*begin::Nav group*/}
                              <div
                                className="nav-group nav-group-outline mx-auto"
                                data-kt-buttons="true"
                                data-kt-initialized={1}
                              >
                                                              
                                </div>
                                <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button 
                                        className="fa fa-chevron-left"
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToPrevPicture}>                                            
                                    </button>
                                   
                                    <div 
                                        style={{ 
                                            marginLeft: "4%", 
                                        }} 
                                    >             
                                        <div 
                                            style={{ 
                                                maxWidth: 400, 
                                                flexGrow: 1, 
                                            }} 
                                        > 
                                            <Paper 
                                                square 
                                                elevation={0} 
                                                style={{ 
                                                    height: 50,  
                                                    textAlign:'center',                                                    
                                                    // paddingLeft: theme.spacing(4), 
                                                    backgroundColor: "transparent", 
                                                    alignItems: "center", 
                                                }} 
                                            > 
                                                <Typography>{MyCollection9[index].label}</Typography> 
                                            </Paper> 
                                            
                                                <img 
                                                    src={MyCollection9[index].imgPath} 
                                                    style={{ 
                                                        // height: 255, 
                                                        width: "96%", 
                                                        // maxWidth: 400, 
                                                        display: "block", 
                                                        overflow: "hidden", 
                                                    }} 
                                                alt={MyCollection9[index].label} 
                                            /> 
                                               
                                        </div> 
                                    </div> 
                                    
                                    <button 
                                        className="fa fa-chevron-right" 
                                        id="controlbtn"
                                        style={{background:'transparent', marginLeft: "4%"}} 
                                        onClick={goToNextPicture}>                                        
                                    </button>
                                </div>
                                    
                                </div>
                                    
                                    <div className="d-flex mt-1 flex-center flex-row-fluid pt-12">
                                    <button
                                        type="reset"
                                        className="btn btn-light me-3"
                                        onClick={closeBag9Modal}
                                        // onRequestClose={closeUpgradeModal}
                                    >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                // className="btn btn-primary"
                                id="kt_modal_upgrade_plan_btn"
                              >                            
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Modal body*/}
                        {/* </div> */}
                        {/*end::Modal content*/}
                      </div>
                      {/*end::Modal dialog*/}
                    </div>
                  </Modal>

                  {/* 11 */}
                  <Modal
                    isOpen={modalLBag11IsOpen}
                    onRequestClose={closeLBag11Modal}
                    style={customStyles}
                    contentLabel="modal"
                    >
                   <div
                      className="upgrade-modal fade show"
                      id="kt_modal_upgrade_plan"
                      tabIndex={-1}
                      style={{ background:'white'}}
                    //   aria-modal="true"
                    //   role="dialog"
                    >
                      {/*begin::Modal dialog*/}
                      {/* <div className="modal-dialog modal-xl"> */}
                        {/*begin::Modal content*/}
                        <div className="upgrade-modal rounded">
                          {/*begin::Modal header*/}
                          <div className="modal-header justify-content-end border-0 pb-0">
                            {/*begin::Close*/}
                            <div
                              className="btn btn-sm btn-icon btn-active-color-primary"
                              data-bs-dismiss="modal"
                            >
                              <i className="ki-duotone ki-cross fs-1">
                                <span className="path1" />
                                
                                <span className="path2" />
                              </i>{" "}
                            </div>
                            {/*end::Close*/}
                          </div>
                          {/*end::Modal header*/}
                          {/*begin::Modal body*/}
                          <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/*begin::Heading*/}
                            
                            {/*end::Heading*/}
                            {/*begin::Plans*/}
                            <div className="d-flex flex-column">
                              {/*begin::Nav group*/}
                              <div
                                className="nav-group nav-group-outline mx-auto"
                                data-kt-buttons="true"
                                data-kt-initialized={1}
                              >
                                                              
                                </div>
                                <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button 
                                        className="fa fa-chevron-left"
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToPrevPicture}>                                            
                                    </button>
                                   
                                    <div 
                                        style={{ 
                                            marginLeft: "4%", 
                                        }} 
                                    >             
                                        <div 
                                            style={{ 
                                                maxWidth: 400, 
                                                flexGrow: 1, 
                                            }} 
                                        > 
                                            <Paper 
                                                square 
                                                elevation={0} 
                                                style={{ 
                                                    height: 50,  
                                                    textAlign:'center',                                                    
                                                    // paddingLeft: theme.spacing(4), 
                                                    backgroundColor: "transparent", 
                                                    alignItems: "center", 
                                                }} 
                                            > 
                                                <Typography>{MyCollection11[index].label}</Typography> 
                                            </Paper> 
                                            
                                                <img 
                                                    src={MyCollection11[index].imgPath} 
                                                    style={{ 
                                                        // height: 255, 
                                                        width: "96%", 
                                                        // maxWidth: 400, 
                                                        display: "block", 
                                                        overflow: "hidden", 
                                                    }} 
                                                alt={MyCollection11[index].label} 
                                            /> 
                                               
                                        </div> 
                                    </div> 
                                    
                                    <button 
                                        className="fa fa-chevron-right" 
                                        id="controlbtn"
                                        style={{background:'transparent', marginLeft: "4%"}} 
                                        onClick={goToNextPicture}>                                        
                                    </button>
                                </div>
                                    
                                </div>
                                    
                                    <div className="d-flex mt-1 flex-center flex-row-fluid pt-12">
                                    <button
                                        type="reset"
                                        className="btn btn-light me-3"
                                        onClick={closeLBag11Modal}
                                        // onRequestClose={closeUpgradeModal}
                                    >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                // className="btn btn-primary"
                                id="kt_modal_upgrade_plan_btn"
                              >                            
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Modal body*/}
                        {/* </div> */}
                        {/*end::Modal content*/}
                      </div>
                      {/*end::Modal dialog*/}
                    </div>
                  </Modal>

                  <Modal
                    isOpen={modalLBag12IsOpen}
                    onRequestClose={closeLBag12Modal}
                    style={customStyles}
                    contentLabel="modal"
                    >
                   <div
                      className="upgrade-modal fade show"
                      id="kt_modal_upgrade_plan"
                      tabIndex={-1}
                      style={{ background:'white'}}
                    //   aria-modal="true"
                    //   role="dialog"
                    >
                      {/*begin::Modal dialog*/}
                      {/* <div className="modal-dialog modal-xl"> */}
                        {/*begin::Modal content*/}
                        <div className="upgrade-modal rounded">
                          {/*begin::Modal header*/}
                          <div className="modal-header justify-content-end border-0 pb-0">
                            {/*begin::Close*/}
                            <div
                              className="btn btn-sm btn-icon btn-active-color-primary"
                              data-bs-dismiss="modal"
                            >
                              <i className="ki-duotone ki-cross fs-1">
                                <span className="path1" />
                                
                                <span className="path2" />
                              </i>{" "}
                            </div>
                            {/*end::Close*/}
                          </div>
                          {/*end::Modal header*/}
                          {/*begin::Modal body*/}
                          <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/*begin::Heading*/}
                            
                            {/*end::Heading*/}
                            {/*begin::Plans*/}
                            <div className="d-flex flex-column">
                              {/*begin::Nav group*/}
                              <div
                                className="nav-group nav-group-outline mx-auto"
                                data-kt-buttons="true"
                                data-kt-initialized={1}
                              >
                                                              
                                </div>
                                <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button 
                                        className="fa fa-chevron-left"
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToPrevPicture}>                                            
                                    </button>
                                   
                                    <div 
                                        style={{ 
                                            marginLeft: "4%", 
                                        }} 
                                    >             
                                        <div 
                                            style={{ 
                                                maxWidth: 400, 
                                                flexGrow: 1, 
                                            }} 
                                        > 
                                            <Paper 
                                                square 
                                                elevation={0} 
                                                style={{ 
                                                    height: 50,  
                                                    textAlign:'center',                                                    
                                                    // paddingLeft: theme.spacing(4), 
                                                    backgroundColor: "transparent", 
                                                    alignItems: "center", 
                                                }} 
                                            > 
                                                <Typography>{MyCollection12[index].label}</Typography> 
                                            </Paper> 
                                            
                                                <img 
                                                    src={MyCollection12[index].imgPath} 
                                                    style={{ 
                                                        // height: 255, 
                                                        width: "94%", 
                                                        // maxWidth: 400, 
                                                        display: "block", 
                                                        overflow: "hidden", 
                                                    }} 
                                                alt={MyCollection12[index].label} 
                                            /> 
                                               
                                        </div> 
                                    </div> 
                                    
                                    <button 
                                        className="fa fa-chevron-right" 
                                        id="controlbtn"
                                        style={{background:'transparent', marginLeft: "4%"}} 
                                        onClick={goToNextPicture}>                                        
                                    </button>
                                </div>
                                    
                                </div>
                                    
                                    <div className="d-flex mt-1 flex-center flex-row-fluid pt-12">
                                    <button
                                        type="reset"
                                        className="btn btn-light me-3"
                                        onClick={closeLBag12Modal}
                                        // onRequestClose={closeUpgradeModal}
                                    >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                // className="btn btn-primary"
                                id="kt_modal_upgrade_plan_btn"
                              >                            
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Modal body*/}
                        {/* </div> */}
                        {/*end::Modal content*/}
                      </div>
                      {/*end::Modal dialog*/}
                    </div>
                  </Modal>

                  <Modal
                    isOpen={modalLBag14IsOpen}
                    onRequestClose={closeLBag14Modal}
                    style={customStyles}
                    contentLabel="modal"
                    >
                   <div
                      className="upgrade-modal fade show"
                      id="kt_modal_upgrade_plan"
                      tabIndex={-1}
                      style={{ background:'white'}}
                    //   aria-modal="true"
                    //   role="dialog"
                    >
                      {/*begin::Modal dialog*/}
                      {/* <div className="modal-dialog modal-xl"> */}
                        {/*begin::Modal content*/}
                        <div className="upgrade-modal rounded">
                          {/*begin::Modal header*/}
                          <div className="modal-header justify-content-end border-0 pb-0">
                            {/*begin::Close*/}
                            <div
                              className="btn btn-sm btn-icon btn-active-color-primary"
                              data-bs-dismiss="modal"
                            >
                              <i className="ki-duotone ki-cross fs-1">
                                <span className="path1" />
                                
                                <span className="path2" />
                              </i>{" "}
                            </div>
                            {/*end::Close*/}
                          </div>
                          {/*end::Modal header*/}
                          {/*begin::Modal body*/}
                          <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/*begin::Heading*/}
                            
                            {/*end::Heading*/}
                            {/*begin::Plans*/}
                            <div className="d-flex flex-column">
                              {/*begin::Nav group*/}
                              <div
                                className="nav-group nav-group-outline mx-auto"
                                data-kt-buttons="true"
                                data-kt-initialized={1}
                              >
                                                              
                                </div>
                                <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button 
                                        className="fa fa-chevron-left"
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToPrevPicture}>                                            
                                    </button>
                                   
                                    <div 
                                        style={{ 
                                            marginLeft: "20%", 
                                        }} 
                                    >             
                                        <div 
                                            style={{ 
                                                maxWidth: 400, 
                                                flexGrow: 1, 
                                            }} 
                                        > 
                                            <Paper 
                                                square 
                                                elevation={0} 
                                                style={{ 
                                                    height: 50,  
                                                    textAlign:'center',                                                    
                                                    // paddingLeft: theme.spacing(4), 
                                                    backgroundColor: "transparent", 
                                                    alignItems: "center", 
                                                }} 
                                            > 
                                                <Typography>{MyCollection14[index].label}</Typography> 
                                            </Paper>                                            
                                                <img 
                                                    src={MyCollection14[index].imgPath} 
                                                    style={{ 
                                                        // height: 255, 
                                                        width: "80%", 
                                                        // maxWidth: 400, 
                                                        display: "block", 
                                                        overflow: "hidden", 
                                                    }} 
                                                alt={MyCollection14[index].label} 
                                            /> 
                                               
                                        </div> 
                                    </div> 
                                    
                                    <button 
                                        className="fa fa-chevron-right" 
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToNextPicture}>                                        
                                    </button>
                                </div>
                                    
                                </div>
                                    
                                    <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button
                                        type="reset"
                                        className="btn btn-light me-3"
                                        onClick={closeLBag13Modal}
                                        // onRequestClose={closeUpgradeModal}
                                    >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                // className="btn btn-primary"
                                id="kt_modal_upgrade_plan_btn"
                              >                            
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Modal body*/}
                        {/* </div> */}
                        {/*end::Modal content*/}
                      </div>
                      {/*end::Modal dialog*/}
                    </div>
                  </Modal>

                  <Modal
                    isOpen={modalLBag13IsOpen}
                    onRequestClose={closeLBag13Modal}
                    style={customStyles}
                    contentLabel="modal"
                    >
                   <div
                      className="upgrade-modal fade show"
                      id="kt_modal_upgrade_plan"
                      tabIndex={-1}
                      style={{ background:'white'}}
                    //   aria-modal="true"
                    //   role="dialog"
                    >
                      {/*begin::Modal dialog*/}
                      {/* <div className="modal-dialog modal-xl"> */}
                        {/*begin::Modal content*/}
                        <div className="upgrade-modal rounded">
                          {/*begin::Modal header*/}
                          <div className="modal-header justify-content-end border-0 pb-0">
                            {/*begin::Close*/}
                            <div
                              className="btn btn-sm btn-icon btn-active-color-primary"
                              data-bs-dismiss="modal"
                            >
                              <i className="ki-duotone ki-cross fs-1">
                                <span className="path1" />
                                
                                <span className="path2" />
                              </i>{" "}
                            </div>
                            {/*end::Close*/}
                          </div>
                          {/*end::Modal header*/}
                          {/*begin::Modal body*/}
                          <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/*begin::Heading*/}
                            
                            {/*end::Heading*/}
                            {/*begin::Plans*/}
                            <div className="d-flex flex-column">
                              {/*begin::Nav group*/}
                              <div
                                className="nav-group nav-group-outline mx-auto"
                                data-kt-buttons="true"
                                data-kt-initialized={1}
                              >
                                                              
                                </div>
                                <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button 
                                        className="fa fa-chevron-left"
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToPrevPicture}>                                            
                                    </button>
                                   
                                    <div 
                                        style={{ 
                                            marginLeft: "4%", 
                                        }} 
                                    >             
                                        <div 
                                            style={{ 
                                                maxWidth: 400, 
                                                flexGrow: 1, 
                                            }} 
                                        > 
                                            <Paper 
                                                square 
                                                elevation={0} 
                                                style={{ 
                                                    height: 50,  
                                                    textAlign:'center',                                                    
                                                    // paddingLeft: theme.spacing(4), 
                                                    backgroundColor: "transparent", 
                                                    alignItems: "center", 
                                                }} 
                                            > 
                                                <Typography>{MyCollection13[index].label}</Typography> 
                                            </Paper>                                            
                                                <img 
                                                    src={MyCollection13[index].imgPath} 
                                                    style={{ 
                                                        // height: 255, 
                                                        width: "96%", 
                                                        // maxWidth: 400, 
                                                        display: "block", 
                                                        overflow: "hidden", 
                                                    }} 
                                                alt={MyCollection13[index].label} 
                                            /> 
                                               
                                        </div> 
                                    </div> 
                                    
                                    <button 
                                        className="fa fa-chevron-right" 
                                        id="controlbtn"
                                        style={{background:'transparent', marginLeft: "4%"}} 
                                        onClick={goToNextPicture}>                                        
                                    </button>
                                </div>
                                    
                                </div>
                                    
                                    <div className="d-flex mt-1 flex-center flex-row-fluid pt-12">
                                    <button
                                        type="reset"
                                        className="btn btn-light me-3"
                                        onClick={closeLBag13Modal}
                                        // onRequestClose={closeUpgradeModal}
                                    >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                // className="btn btn-primary"
                                id="kt_modal_upgrade_plan_btn"
                              >                            
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Modal body*/}
                        {/* </div> */}
                        {/*end::Modal content*/}
                      </div>
                      {/*end::Modal dialog*/}
                    </div>
                  </Modal>

                  <Modal
                    isOpen={modalLBag14IsOpen}
                    onRequestClose={closeLBag14Modal}
                    style={customStyles}
                    contentLabel="modal"
                    >
                   <div
                      className="upgrade-modal fade show"
                      id="kt_modal_upgrade_plan"
                      tabIndex={-1}
                      style={{ background:'white'}}
                    //   aria-modal="true"
                    //   role="dialog"
                    >
                      {/*begin::Modal dialog*/}
                      {/* <div className="modal-dialog modal-xl"> */}
                        {/*begin::Modal content*/}
                        <div className="upgrade-modal rounded">
                          {/*begin::Modal header*/}
                          <div className="modal-header justify-content-end border-0 pb-0">
                            {/*begin::Close*/}
                            <div
                              className="btn btn-sm btn-icon btn-active-color-primary"
                              data-bs-dismiss="modal"
                            >
                              <i className="ki-duotone ki-cross fs-1">
                                <span className="path1" />
                                
                                <span className="path2" />
                              </i>{" "}
                            </div>
                            {/*end::Close*/}
                          </div>
                          {/*end::Modal header*/}
                          {/*begin::Modal body*/}
                          <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/*begin::Heading*/}
                            
                            {/*end::Heading*/}
                            {/*begin::Plans*/}
                            <div className="d-flex flex-column">
                              {/*begin::Nav group*/}
                              <div
                                className="nav-group nav-group-outline mx-auto"
                                data-kt-buttons="true"
                                data-kt-initialized={1}
                              >
                                                              
                                </div>
                                <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button 
                                        className="fa fa-chevron-left"
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToPrevPicture}>                                            
                                    </button>
                                   
                                    <div 
                                        style={{ 
                                            marginLeft: "4%", 
                                        }} 
                                    >             
                                        <div 
                                            style={{ 
                                                maxWidth: 400, 
                                                flexGrow: 1, 
                                            }} 
                                        > 
                                            <Paper 
                                                square 
                                                elevation={0} 
                                                style={{ 
                                                    height: 50,  
                                                    textAlign:'center',                                                    
                                                    // paddingLeft: theme.spacing(4), 
                                                    backgroundColor: "transparent", 
                                                    alignItems: "center", 
                                                }} 
                                            > 
                                                <Typography>{MyCollection14[index].label}</Typography> 
                                            </Paper>                                            
                                                <img 
                                                    src={MyCollection14[index].imgPath} 
                                                    style={{ 
                                                        // height: 255, 
                                                        width: "95%", 
                                                        // maxWidth: 400, 
                                                        display: "block", 
                                                        overflow: "hidden", 
                                                    }} 
                                                alt={MyCollection14[index].label} 
                                            /> 
                                               
                                        </div> 
                                    </div> 
                                    
                                    <button 
                                        className="fa fa-chevron-right" 
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToNextPicture}>                                        
                                    </button>
                                </div>
                                    
                                </div>
                                    
                                    <div className="d-flex mt-2 flex-center flex-row-fluid pt-12">
                                    <button
                                        type="reset"
                                        className="btn btn-light me-3"
                                        onClick={closeLBag14Modal}
                                        // onRequestClose={closeUpgradeModal}
                                    >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                // className="btn btn-primary"
                                id="kt_modal_upgrade_plan_btn"
                              >                            
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Modal body*/}
                        {/* </div> */}
                        {/*end::Modal content*/}
                      </div>
                      {/*end::Modal dialog*/}
                    </div>
                  </Modal>

                  <Modal
                    isOpen={modalLBag15IsOpen}
                    onRequestClose={closeLBag15Modal}
                    style={customStyles}
                    contentLabel="modal"
                    >
                   <div
                      className="upgrade-modal fade show"
                      id="kt_modal_upgrade_plan"
                      tabIndex={-1}
                      style={{ background:'white'}}
                    //   aria-modal="true"
                    //   role="dialog"
                    >
                      {/*begin::Modal dialog*/}
                      {/* <div className="modal-dialog modal-xl"> */}
                        {/*begin::Modal content*/}
                        <div className="upgrade-modal rounded">
                          {/*begin::Modal header*/}
                          <div className="modal-header justify-content-end border-0 pb-0">
                            {/*begin::Close*/}
                            <div
                              className="btn btn-sm btn-icon btn-active-color-primary"
                              data-bs-dismiss="modal"
                            >
                              <i className="ki-duotone ki-cross fs-1">
                                <span className="path1" />
                                
                                <span className="path2" />
                              </i>{" "}
                            </div>
                            {/*end::Close*/}
                          </div>
                          {/*end::Modal header*/}
                          {/*begin::Modal body*/}
                          <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/*begin::Heading*/}
                            
                            {/*end::Heading*/}
                            {/*begin::Plans*/}
                            <div className="d-flex flex-column">
                              {/*begin::Nav group*/}
                              <div
                                className="nav-group nav-group-outline mx-auto"
                                data-kt-buttons="true"
                                data-kt-initialized={1}
                              >
                                                              
                                </div>
                                <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button 
                                        className="fa fa-chevron-left"
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToPrevPicture}>                                            
                                    </button>
                                   
                                    <div 
                                        style={{ 
                                            marginLeft: "4%", 
                                        }} 
                                    >             
                                        <div 
                                            style={{ 
                                                maxWidth: 400, 
                                                flexGrow: 1, 
                                            }} 
                                        > 
                                            <Paper 
                                                square 
                                                elevation={0} 
                                                style={{ 
                                                    height: 50,  
                                                    textAlign:'center',                                                    
                                                    // paddingLeft: theme.spacing(4), 
                                                    backgroundColor: "transparent", 
                                                    alignItems: "center", 
                                                }} 
                                            > 
                                                <Typography>{MyCollection15[index].label}</Typography> 
                                            </Paper>                                            
                                                <img 
                                                    src={MyCollection15[index].imgPath} 
                                                    style={{ 
                                                        // height: 255, 
                                                        width: "100%", 
                                                        // maxWidth: 400, 
                                                        display: "block", 
                                                        overflow: "hidden", 
                                                    }} 
                                                alt={MyCollection15[index].label} 
                                            /> 
                                               
                                        </div> 
                                    </div> 
                                    
                                    <button 
                                        className="fa fa-chevron-right" 
                                        id="controlbtn"
                                        style={{background:'transparent', marginLeft: "4%"}} 
                                        onClick={goToNextPicture}>                                        
                                    </button>
                                </div>
                                    
                                </div>
                                    
                                    <div className="d-flex mt-5 flex-center flex-row-fluid pt-12">
                                    <button
                                        type="reset"
                                        className="btn btn-light me-3"
                                        onClick={closeLBag15Modal}
                                        // onRequestClose={closeUpgradeModal}
                                    >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                // className="btn btn-primary"
                                id="kt_modal_upgrade_plan_btn"
                              >                            
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Modal body*/}
                        {/* </div> */}
                        {/*end::Modal content*/}
                      </div>
                      {/*end::Modal dialog*/}
                    </div>
                  </Modal>

                  <Modal
                    isOpen={modalLBag16IsOpen}
                    onRequestClose={closeLBag16Modal}
                    style={customStyles}
                    contentLabel="modal"
                    >
                   <div
                      className="upgrade-modal fade show"
                      id="kt_modal_upgrade_plan"
                      tabIndex={-1}
                      style={{ background:'white'}}
                    //   aria-modal="true"
                    //   role="dialog"
                    >
                      {/*begin::Modal dialog*/}
                      {/* <div className="modal-dialog modal-xl"> */}
                        {/*begin::Modal content*/}
                        <div className="upgrade-modal rounded">
                          {/*begin::Modal header*/}
                          <div className="modal-header justify-content-end border-0 pb-0">
                            {/*begin::Close*/}
                            <div
                              className="btn btn-sm btn-icon btn-active-color-primary"
                              data-bs-dismiss="modal"
                            >
                              <i className="ki-duotone ki-cross fs-1">
                                <span className="path1" />
                                
                                <span className="path2" />
                              </i>{" "}
                            </div>
                            {/*end::Close*/}
                          </div>
                          {/*end::Modal header*/}
                          {/*begin::Modal body*/}
                          <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/*begin::Heading*/}
                            
                            {/*end::Heading*/}
                            {/*begin::Plans*/}
                            <div className="d-flex flex-column">
                              {/*begin::Nav group*/}
                              <div
                                className="nav-group nav-group-outline mx-auto"
                                data-kt-buttons="true"
                                data-kt-initialized={1}
                              >
                                                              
                                </div>
                                <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button 
                                        className="fa fa-chevron-left"
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToPrevPicture}>                                            
                                    </button>
                                   
                                    <div 
                                        style={{ 
                                            marginLeft: "6%", 
                                        }} 
                                    >             
                                        <div 
                                            style={{ 
                                                maxWidth: 400, 
                                                flexGrow: 1, 
                                            }} 
                                        > 
                                            <Paper 
                                                square 
                                                elevation={0} 
                                                style={{ 
                                                    height: 50,  
                                                    textAlign:'center',                                                    
                                                    // paddingLeft: theme.spacing(4), 
                                                    backgroundColor: "transparent", 
                                                    alignItems: "center", 
                                                }} 
                                            > 
                                                <Typography>{MyCollection16[index].label}</Typography> 
                                            </Paper>                                            
                                                <img 
                                                    src={MyCollection16[index].imgPath} 
                                                    style={{ 
                                                        // height: 255, 
                                                        width: "90%",    
                                                        // maxWidth: 400, 
                                                        display: "block", 
                                                        overflow: "hidden", 
                                                    }} 
                                                alt={MyCollection16[index].label} 
                                            /> 
                                               
                                        </div> 
                                    </div> 
                                    
                                    <button 
                                        className="fa fa-chevron-right" 
                                        id="controlbtn"
                                        style={{background:'transparent', marginLeft:'4%'}}  
                                        onClick={goToNextPicture}>                                        
                                    </button>
                                </div>
                                    
                                </div>
                                    
                                    <div className="d-flex mt-4 flex-center flex-row-fluid pt-12">
                                    <button
                                        type="reset"
                                        className="btn btn-light me-3"
                                        onClick={closeLBag16Modal}
                                        // onRequestClose={closeUpgradeModal}
                                    >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                // className="btn btn-primary"
                                id="kt_modal_upgrade_plan_btn"
                              >                            
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Modal body*/}
                        {/* </div> */}
                        {/*end::Modal content*/}
                      </div>
                      {/*end::Modal dialog*/}
                    </div>
                  </Modal>

                  <Modal
                    isOpen={modalLBag17IsOpen}
                    onRequestClose={closeLBag17Modal}
                    style={customStyles}
                    contentLabel="modal"
                    >
                   <div
                      className="upgrade-modal fade show"
                      id="kt_modal_upgrade_plan"
                      tabIndex={-1}
                      style={{ background:'white'}}
                    //   aria-modal="true"
                    //   role="dialog"
                    >
                      {/*begin::Modal dialog*/}
                      {/* <div className="modal-dialog modal-xl"> */}
                        {/*begin::Modal content*/}
                        <div className="upgrade-modal rounded">
                          {/*begin::Modal header*/}
                          <div className="modal-header justify-content-end border-0 pb-0">
                            {/*begin::Close*/}
                            <div
                              className="btn btn-sm btn-icon btn-active-color-primary"
                              data-bs-dismiss="modal"
                            >
                              <i className="ki-duotone ki-cross fs-1">
                                <span className="path1" />
                                
                                <span className="path2" />
                              </i>{" "}
                            </div>
                            {/*end::Close*/}
                          </div>
                          {/*end::Modal header*/}
                          {/*begin::Modal body*/}
                          <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/*begin::Heading*/}
                            
                            {/*end::Heading*/}
                            {/*begin::Plans*/}
                            <div className="d-flex flex-column">
                              {/*begin::Nav group*/}
                              <div
                                className="nav-group nav-group-outline mx-auto"
                                data-kt-buttons="true"
                                data-kt-initialized={1}
                              >
                                                              
                                </div>
                                <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button 
                                        className="fa fa-chevron-left"
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToPrevPicture}>                                            
                                    </button>
                                   
                                    <div 
                                        style={{ 
                                            marginLeft: "4%", 
                                        }} 
                                    >             
                                        <div 
                                            style={{ 
                                                maxWidth: 400, 
                                                flexGrow: 1, 
                                            }} 
                                        > 
                                            <Paper 
                                                square 
                                                elevation={0} 
                                                style={{ 
                                                    height: 50,  
                                                    textAlign:'center',                                                    
                                                    // paddingLeft: theme.spacing(4), 
                                                    backgroundColor: "transparent", 
                                                    alignItems: "center", 
                                                }} 
                                            > 
                                                <Typography>{MyCollection17[index].label}</Typography> 
                                            </Paper>                                            
                                                <img 
                                                    src={MyCollection17[index].imgPath} 
                                                    style={{ 
                                                        // height: 255, 
                                                        width: "100%", 
                                                        // maxWidth: 400, 
                                                        display: "block", 
                                                        overflow: "hidden", 
                                                    }} 
                                                alt={MyCollection17[index].label} 
                                            /> 
                                               
                                        </div> 
                                    </div> 
                                    
                                    <button 
                                        className="fa fa-chevron-right" 
                                        id="controlbtn"
                                        style={{background:'transparent', marginLeft:'4%'}} 
                                        onClick={goToNextPicture}>                                        
                                    </button>
                                </div>
                                    
                                </div>
                                    
                                    <div className="d-flex mt-5 flex-center flex-row-fluid pt-12">
                                    <button
                                        type="reset"
                                        className="btn btn-light me-3"
                                        onClick={closeLBag17Modal}
                                        // onRequestClose={closeUpgradeModal}
                                    >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                // className="btn btn-primary"
                                id="kt_modal_upgrade_plan_btn"
                              >                            
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Modal body*/}
                        {/* </div> */}
                        {/*end::Modal content*/}
                      </div>
                      {/*end::Modal dialog*/}
                    </div>
                  </Modal>
                        
                  <Modal
                    isOpen={modalLBag18IsOpen}
                    onRequestClose={closeLBag18Modal}
                    style={customStyles}
                    contentLabel="modal"
                    >
                   <div
                      className="upgrade-modal fade show"
                      id="kt_modal_upgrade_plan"
                      tabIndex={-1}
                      style={{ background:'white'}}
                    //   aria-modal="true"
                    //   role="dialog"
                    >
                      {/*begin::Modal dialog*/}
                      {/* <div className="modal-dialog modal-xl"> */}
                        {/*begin::Modal content*/}
                        <div className="upgrade-modal rounded">
                          {/*begin::Modal header*/}
                          <div className="modal-header justify-content-end border-0 pb-0">
                            {/*begin::Close*/}
                            <div
                              className="btn btn-sm btn-icon btn-active-color-primary"
                              data-bs-dismiss="modal"
                            >
                              <i className="ki-duotone ki-cross fs-1">
                                <span className="path1" />
                                
                                <span className="path2" />
                              </i>{" "}
                            </div>
                            {/*end::Close*/}
                          </div>
                          {/*end::Modal header*/}
                          {/*begin::Modal body*/}
                          <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/*begin::Heading*/}
                            
                            {/*end::Heading*/}
                            {/*begin::Plans*/}
                            <div className="d-flex flex-column">
                              {/*begin::Nav group*/}
                              <div
                                className="nav-group nav-group-outline mx-auto"
                                data-kt-buttons="true"
                                data-kt-initialized={1}
                              >
                                                              
                                </div>
                                <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button 
                                        className="fa fa-chevron-left"
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToPrevPicture}>                                            
                                    </button>
                                   
                                    <div 
                                        style={{ 
                                            marginLeft: "4%", 
                                        }} 
                                    >             
                                        <div 
                                            style={{ 
                                                maxWidth: 400, 
                                                flexGrow: 1, 
                                            }} 
                                        > 
                                            <Paper 
                                                square 
                                                elevation={0} 
                                                style={{ 
                                                    height: 50,  
                                                    textAlign:'center',                                                    
                                                    // paddingLeft: theme.spacing(4), 
                                                    backgroundColor: "transparent", 
                                                    alignItems: "center", 
                                                }} 
                                            > 
                                                <Typography>{MyCollection18[index].label}</Typography> 
                                            </Paper>                                            
                                                <img 
                                                    src={MyCollection18[index].imgPath} 
                                                    style={{ 
                                                        // height: 255, 
                                                        width: "100%", 
                                                        // maxWidth: 400, 
                                                        display: "block", 
                                                        overflow: "hidden", 
                                                    }} 
                                                alt={MyCollection18[index].label} 
                                            /> 
                                               
                                        </div> 
                                    </div> 
                                    
                                    <button 
                                        className="fa fa-chevron-right" 
                                        id="controlbtn"
                                        style={{background:'transparent', marginLeft:'4%'}} 
                                        onClick={goToNextPicture}>                                        
                                    </button>
                                </div>
                                    
                                </div>
                                    
                                    <div className="d-flex mt-5 flex-center flex-row-fluid pt-12">
                                    <button
                                        type="reset"
                                        className="btn btn-light me-3"
                                        onClick={closeLBag18Modal}
                                        // onRequestClose={closeUpgradeModal}
                                    >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                // className="btn btn-primary"
                                id="kt_modal_upgrade_plan_btn"
                              >                            
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Modal body*/}
                        {/* </div> */}
                        {/*end::Modal content*/}
                      </div>
                      {/*end::Modal dialog*/}
                    </div>
                  </Modal>

                  <Modal
                    isOpen={modalLBag19IsOpen}
                    onRequestClose={closeLBag19Modal}
                    style={customStyles}
                    contentLabel="modal"
                    >
                   <div
                      className="upgrade-modal fade show"
                      id="kt_modal_upgrade_plan"
                      tabIndex={-1}
                      style={{ background:'white'}}
                    //   aria-modal="true"
                    //   role="dialog"
                    >
                      {/*begin::Modal dialog*/}
                      {/* <div className="modal-dialog modal-xl"> */}
                        {/*begin::Modal content*/}
                        <div className="upgrade-modal rounded">
                          {/*begin::Modal header*/}
                          <div className="modal-header justify-content-end border-0 pb-0">
                            {/*begin::Close*/}
                            <div
                              className="btn btn-sm btn-icon btn-active-color-primary"
                              data-bs-dismiss="modal"
                            >
                              <i className="ki-duotone ki-cross fs-1">
                                <span className="path1" />
                                
                                <span className="path2" />
                              </i>{" "}
                            </div>
                            {/*end::Close*/}
                          </div>
                          {/*end::Modal header*/}
                          {/*begin::Modal body*/}
                          <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/*begin::Heading*/}
                            
                            {/*end::Heading*/}
                            {/*begin::Plans*/}
                            <div className="d-flex flex-column">
                              {/*begin::Nav group*/}
                              <div
                                className="nav-group nav-group-outline mx-auto"
                                data-kt-buttons="true"
                                data-kt-initialized={1}
                              >
                                                              
                                </div>
                                <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button 
                                        className="fa fa-chevron-left"
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToPrevPicture}>                                            
                                    </button>
                                   
                                    <div 
                                        style={{ 
                                            marginLeft: "4%", 
                                        }} 
                                    >             
                                        <div 
                                            style={{ 
                                                maxWidth: 400, 
                                                flexGrow: 1, 
                                            }} 
                                        > 
                                            <Paper 
                                                square 
                                                elevation={0} 
                                                style={{ 
                                                    height: 50,  
                                                    textAlign:'center',                                                    
                                                    // paddingLeft: theme.spacing(4), 
                                                    backgroundColor: "transparent", 
                                                    alignItems: "center", 
                                                }} 
                                            > 
                                                <Typography>{MyCollection19[index].label}</Typography> 
                                            </Paper>                                            
                                                <img 
                                                    src={MyCollection19[index].imgPath} 
                                                    style={{ 
                                                        // height: 255, 
                                                        width: "100%", 
                                                        // maxWidth: 400, 
                                                        display: "block", 
                                                        overflow: "hidden", 
                                                    }} 
                                                alt={MyCollection19[index].label} 
                                            /> 
                                               
                                        </div> 
                                    </div> 
                                    
                                    <button 
                                        className="fa fa-chevron-right" 
                                        id="controlbtn"
                                        style={{background:'transparent', marginLeft:'4%'}} 
                                        onClick={goToNextPicture}>                                        
                                    </button>
                                </div>
                                    
                                </div>
                                    
                                    <div className="d-flex mt-5 flex-center flex-row-fluid pt-12">
                                    <button
                                        type="reset"
                                        className="btn btn-light me-3"
                                        onClick={closeLBag19Modal}
                                        // onRequestClose={closeUpgradeModal}
                                    >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                // className="btn btn-primary"
                                id="kt_modal_upgrade_plan_btn"
                              >                            
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Modal body*/}
                        {/* </div> */}
                        {/*end::Modal content*/}
                      </div>
                      {/*end::Modal dialog*/}
                    </div>
                  </Modal>

                  <Modal
                    isOpen={modalLBag20IsOpen}
                    onRequestClose={closeLBag20Modal}
                    style={customStyles}
                    contentLabel="modal"
                    >
                   <div
                      className="upgrade-modal fade show"
                      id="kt_modal_upgrade_plan"
                      tabIndex={-1}
                      style={{ background:'white'}}
                    //   aria-modal="true"
                    //   role="dialog"
                    >
                      {/*begin::Modal dialog*/}
                      {/* <div className="modal-dialog modal-xl"> */}
                        {/*begin::Modal content*/}
                        <div className="upgrade-modal rounded">
                          {/*begin::Modal header*/}
                          <div className="modal-header justify-content-end border-0 pb-0">
                            {/*begin::Close*/}
                            <div
                              className="btn btn-sm btn-icon btn-active-color-primary"
                              data-bs-dismiss="modal"
                            >
                              <i className="ki-duotone ki-cross fs-1">
                                <span className="path1" />
                                
                                <span className="path2" />
                              </i>{" "}
                            </div>
                            {/*end::Close*/}
                          </div>
                          {/*end::Modal header*/}
                          {/*begin::Modal body*/}
                          <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/*begin::Heading*/}
                            
                            {/*end::Heading*/}
                            {/*begin::Plans*/}
                            <div className="d-flex flex-column">
                              {/*begin::Nav group*/}
                              <div
                                className="nav-group nav-group-outline mx-auto"
                                data-kt-buttons="true"
                                data-kt-initialized={1}
                              >
                                                              
                                </div>
                                <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button 
                                        className="fa fa-chevron-left"
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToPrevPicture}>                                            
                                    </button>
                                   
                                    <div 
                                        style={{ 
                                            marginLeft: "3%", 
                                        }} 
                                    >             
                                        <div 
                                            style={{ 
                                                maxWidth: 400, 
                                                flexGrow: 1, 
                                            }} 
                                        > 
                                            <Paper 
                                                square 
                                                elevation={0} 
                                                style={{ 
                                                    height: 50,  
                                                    textAlign:'center',                                                    
                                                    // paddingLeft: theme.spacing(4), 
                                                    backgroundColor: "transparent", 
                                                    alignItems: "center", 
                                                }} 
                                            > 
                                                <Typography>{MyCollection20[index].label}</Typography> 
                                            </Paper>                                            
                                                <img 
                                                    src={MyCollection20[index].imgPath} 
                                                    style={{ 
                                                        // height: 255, 
                                                        width: "100%", 
                                                        // maxWidth: 400, 
                                                        display: "block", 
                                                        overflow: "hidden", 
                                                    }} 
                                                alt={MyCollection20[index].label} 
                                            /> 
                                               
                                        </div> 
                                    </div> 
                                    
                                    <button 
                                        className="fa fa-chevron-right " 
                                        id="controlbtn"
                                        style={{background:'transparent', marginLeft:'4%'}} 
                                        onClick={goToNextPicture}>                                        
                                    </button>
                                </div>
                                    
                                </div>                                    
                                    <div className="d-flex mt-5 flex-center flex-row-fluid pt-12" id="cancel">
                                    <button
                                        type="reset"
                                        className="btn btn-light me-3"
                                        onClick={closeLBag20Modal}
                                        // onRequestClose={closeUpgradeModal}
                                    >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                // className="btn btn-primary"
                                id="kt_modal_upgrade_plan_btn"
                              >                            
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Modal body*/}
                        {/* </div> */}
                        {/*end::Modal content*/}
                      </div>
                      {/*end::Modal dialog*/}
                    </div>
                  </Modal>

                  <Modal
                    isOpen={modalLBag21IsOpen}
                    onRequestClose={closeLBag21Modal}
                    style={customStyles}
                    contentLabel="modal"
                    >
                   <div
                      className="upgrade-modal fade show"
                      id="kt_modal_upgrade_plan"
                      tabIndex={-1}
                      style={{ background:'white'}}
                    //   aria-modal="true"
                    //   role="dialog"
                    >
                      {/*begin::Modal dialog*/}
                      {/* <div className="modal-dialog modal-xl"> */}
                        {/*begin::Modal content*/}
                        <div className="upgrade-modal rounded">
                          {/*begin::Modal header*/}
                          <div className="modal-header justify-content-end border-0 pb-0">
                            {/*begin::Close*/}
                            <div
                              className="btn btn-sm btn-icon btn-active-color-primary"
                              data-bs-dismiss="modal"
                            >
                              <i className="ki-duotone ki-cross fs-1">
                                <span className="path1" />
                                
                                <span className="path2" />
                              </i>{" "}
                            </div>
                            {/*end::Close*/}
                          </div>
                          {/*end::Modal header*/}
                          {/*begin::Modal body*/}
                          <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/*begin::Heading*/}
                            
                            {/*end::Heading*/}
                            {/*begin::Plans*/}
                            <div className="d-flex flex-column">
                              {/*begin::Nav group*/}
                              <div
                                className="nav-group nav-group-outline mx-auto"
                                data-kt-buttons="true"
                                data-kt-initialized={1}
                              >
                                                              
                                </div>
                                <div className="d-flex flex-center flex-row-fluid pt-12">
                                    <button 
                                        className="fa fa-chevron-left"
                                        id="controlbtn"
                                        style={{background:'transparent'}} 
                                        onClick={goToPrevPicture}>                                            
                                    </button>
                                   
                                    <div 
                                        style={{ 
                                            marginLeft: "4%", 
                                        }} 
                                    >             
                                        <div 
                                            style={{ 
                                                maxWidth: 400, 
                                                flexGrow: 1, 
                                            }} 
                                        > 
                                            <Paper 
                                                square 
                                                elevation={0} 
                                                style={{ 
                                                    height: 50,  
                                                    textAlign:'center',                                                    
                                                    // paddingLeft: theme.spacing(4), 
                                                    backgroundColor: "transparent", 
                                                    alignItems: "center", 
                                                }} 
                                            > 
                                                <Typography>{MyCollection21[index].label}</Typography> 
                                            </Paper>                                            
                                                <img 
                                                    src={MyCollection21[index].imgPath} 
                                                    style={{ 
                                                        // height: 255, 
                                                        width: "100%", 
                                                        // maxWidth: 400, 
                                                        display: "block", 
                                                        overflow: "hidden", 
                                                    }} 
                                                alt={MyCollection21[index].label} 
                                            /> 
                                               
                                        </div> 
                                    </div> 
                                    
                                    <button 
                                        className="fa fa-chevron-right" 
                                        id="controlbtn"
                                        style={{background:'transparent', marginLeft:'4%'}} 
                                        onClick={goToNextPicture}>                                        
                                    </button>
                                </div>
                                    
                                </div>
                                    
                                    <div className="d-flex mt-5 flex-center flex-row-fluid pt-12">
                                    <button
                                        type="reset"
                                        className="btn btn-light me-3"
                                        onClick={closeLBag21Modal}
                                        // onRequestClose={closeUpgradeModal}
                                    >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                // className="btn btn-primary"
                                id="kt_modal_upgrade_plan_btn"
                              >                            
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Modal body*/}
                        {/* </div> */}
                        {/*end::Modal content*/}
                      </div>
                      {/*end::Modal dialog*/}
                    </div>
                  </Modal>
      </>
  );
  
};

