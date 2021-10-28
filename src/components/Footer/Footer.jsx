import React from 'react';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/* Column 1 */}
                        <div className="column">
                            <h4>
                                Green Leave
                            </h4>
                            <p>
                            Leave the environment Green after you!
                            </p>

                        </div>
                        {/* Column 2 */}
                        <div className="column">
                        <h4>Explore</h4>
                         <ul className="list-unstyled">
                                <li><a href="/"> Home </a></li>
                                <li><a href="/"> Blog </a></li>
                        </ul>
                        </div>
                        {/* Column 3 */}
                        <div className="column">


                            <h4>Contact Us</h4>
                               <p> 00, Adress Street,<br />
                                Chisinau, Moldova.<br />
                                Email Address: <br />
                                Phones: +373 </p>


                        </div>
                    </div>
                    {/* Footer End */}
                    <div className="footer-end">
                        <p className="text-xs-center">
                            &copy; {new Date().getFullYear()} Green Leave - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer;
















