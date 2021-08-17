import React from "react";

function About(){


    return(
        <div className="about">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 aboutLeft">
                        <img src="assets/images/about.jpg" alt="aboutimage" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 aboutRight">
                        <h1>About <b>Percentech</b></h1>
                        <h5>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;