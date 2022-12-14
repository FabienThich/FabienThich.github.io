import React from 'react';
import './home.css'

function AboutMe() {
    return(
        <body>
            <div>
                {/**Professional Sumamary*/}
                
                <div className='containter-fluid'>
                    <div className='row'>
                        <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xm-12'>
                            <p className='setupformattitle'>Professional Summary</p>
                        </div>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='col-xxl-4 col-xl-4 col-lg-6 col-md-8 col-sm-12 col-xm-12'><img src='React Homepage.png' alt='In the works' /></div>
                        <div className='col-xxl-7 col-xl-7 col-lg-6 col-md-8 col-sm-12 col-xm-12'><p className='setupformatparagraph'>I am a student at Northview Heights Secondary School. I am part of the Information and Communication Technologies sector of the Specialist High Skills Major program with my major focus on Computer Science. My short term goal is to gain admittance to the University of Toronto for Computer Science. For my career goal, I am aiming to work in the software development industry and build softwares and applications to help assist users with tasks and needs. (Need to update picture on the left)</p></div>
                    </div>

                    <br />
                </div>
                

                {/**Personal Interest */}
                
                <div className='containter-fluid text-center'>
                    <div className='row row justify-content-md-center'>
                        <div className='col-xxl-3 col-xl-7 col-lg-7 col-md-8 col-sm-11 col-xm-12'><img src='React Homepage.png' alt='In the works' />
                            <div className="row-xxl-3 row-xl-7 row-lg-7 row-md-8 row-sm-11 row-xm-12">
                                <b>Stock Market - - - - -- - - - -- - - - -- - - - -- - - - -- - - - -</b>
                            </div>
                        </div>

                        <div className='col-xxl-3 col-xl-7 col-lg-7 col-md-8 col-sm-11 col-xm-12'><img src='React Homepage.png' alt='In the works' />
                            <div className="row-xxl-3 row-xl-7 row-lg-7 row-md-8 row-sm-11 row-xm-12">
                                <b>Weight Room - - - - -- - - - -- - - - -- - - - -- - - - -- - - - -</b>
                            </div>
                        </div>

                        <div className='col-xxl-3 col-xl-7 col-lg-7 col-md-8 col-sm-11 col-xm-12'><img src='React Homepage.png' alt='In the works' />
                            <div className="row-xxl-3 row-xl-7 row-lg-7 row-md-8 row-sm-11 row-xm-12">
                                <b>Track & Field - - - - -- - - - -- - - - -- - - - -- - - - -- - - - -</b>
                            </div>
                        </div>
                    </div> 
                </div>

            </div>
        </body>
    )
}

export default AboutMe;