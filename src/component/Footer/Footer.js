import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer bg-primary text-white ">
            <div className="container my-4 d-flex col col-md-4 col-lg-6">
                <div className="row row-col">

                    <div className=" col-md-4 col">
                        <h1>Our Vision :</h1>
                        <h4> To be a reluxable jurney</h4>
                        <p>One always quickly consider that for the developmental <br /> role of education in a country the tertiary level is important.</p>
                        <p>email : tourpackage@gmail.com</p>
                    </div>
                    <div className="col-md-4 col">
                        <h1>Contact Info :</h1>
                        <h4> Our Address</h4>
                        <p>7A, 89/2, Haque chamber,
                            West Panthapath,
                            Dhaka -1215, <br />
                            Bangladesh
                            +88-01971-746663

                            +88-01972-746663

                            info@shonod.com</p>
                        <p>email : tourpackage@gmail.com</p>
                    </div>
                    <div className="col-md-4 col">
                        <h3>Payment :</h3>
                        <img className="payment" src="https://i2.wp.com/thereviewstories.com/wp-content/uploads/2020/10/paymentgateway.jpg?w=1080&ssl=1" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;