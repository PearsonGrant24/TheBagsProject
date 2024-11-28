import React from 'react'

type FooterProps = {
    children: React.ReactNode;
}

export const Footer2: React.FunctionComponent<FooterProps> = ({children, ...props}): any | null => {
  return (
    <>
    <div style={{backgroundImage:"url('assets/footer.JPG')", backgroundRepeat:"no-repeat",backgroundSize:"contain"}}>

    <div className="footer-widgets">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-xl-3 col-12 pr-xl-4">
                                <div className="single-footer-wid site_footer_widget">
                                    <a href="AboutUs">
                                        {/* <img src="/assets/pages/img/KanhavaLogo02.png" style={{background:"#313030"}} alt="" height={64}/> */}
                                        <div className="wid-title">
                                        <h4>ABOUT</h4>
                                    </div>
                                    </a>
                                    <p className="mt-4">
                                    Kanhava is a bag manufacturing company.
                                    We dream of becoming the leading bag manufacturer in Zim and 
                                    maybe regionally. We value quality, excellence, creativity, 
                                    professionalism. We strive to meet and go beyond our customer's 
                                    expectations....
                                    </p>
                                </div>
                            </div>
                            {/*    /.col-lg-3 - single-footer-wid    */}
                            <div className="col-md-6 col-xl-3 col-12">
                                <div className="single-footer-wid">
                                    <div className="wid-title">
                                        <h4>INFORMATION</h4>
                                    </div>
                                    <ul>
                                        <li><a href="/Home">Contact Us</a></li>
                                        <li><a href="/AboutUs">About Us</a></li>
                                        {/* <li><a href="/menu">Customer Service</a></li> */}
                                        <li><a href="/Home">Promotions</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                            {/*    /.col-lg-3 - single-footer-wid    */}
                            <div className="col-md-6 col-xl-3 col-12">
                                <div className="single-footer-wid">
                                    <div className="wid-title">
                                        <h4>PRODUCTS</h4>
                                    </div>

                                    <ul>
                                        <li><a href="#Backpacks">Backpacks</a></li>
                                        <li><a href="#Sportsbags">Sports bags</a></li>
                                        <li><a href="#Luggagebags">Travel/Luggage bags</a></li>
                                        <li><a href="#Coolerbags">Food/Cooler bags</a></li>
                                        <li><a href="#Luggagebags">Gym bags</a></li>
                                        <li><a href="#Backpacks">Book bags</a></li>
                                        <li><a href="#Coolerbags">Pencil cases</a></li>
                                        <li><a href="#Luggagebags">Chair bags</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/*    /.col-lg-3 - single-footer-wid    */}
                            <div className="col-md-6 col-xl-3 col-12">
                                <div className="single-footer-wid contact_widget_2">
                                    <div className="wid-title">
                                        <h4 id="contactus">OUR CONTACTS</h4>
                                    </div>
                                    <div className="contact-us">
                                        <div className="single-contact-info">
                                            <div className="icon">
                                                {/* <i className=""></i> */}
                                            </div>
                                            <div className="contact-info">
                                                <p>35/700 Whisper Drive, Borrowdale</p>
                                            </div>
                                        </div>
                                        <div className="single-contact-info">
                                            <div className="icon">
                                                <i className="icon01"></i>
                                            </div>
                                            <div className="contact-info">
                                                <a href="">
                                                    <p>Harare, Zimbabwe </p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-contact-info">
                                            <div className="icon">
                                                <i className="icon01">Phone:</i>
                                            </div>
                                            <div className="contact-info">
                                                <a href="#">
                                                    <p>+263 71 933 9292</p>
                                                    <p>+263 78 121 5625</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-contact-info">
                                            <div className="icon">
                                                <i className="icon01">Email:</i>
                                            </div>
                                            <div className="contact-info">
                                                <a href="sharon@kanhava.co.zw">
                                                    <p>sales@kanhava.co.zw</p>
                                                    <p>sharon@kanhava.co.zw</p>
                                                </a>
                                            </div>
                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                            {/*    /.col-lg-3 - single-footer-wid    */}
                        </div>
                    </div>
                </div> 
    </div>
    </>
  )
}
