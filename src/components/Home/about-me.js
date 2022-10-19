import React from 'react';
import './home.css'

function AboutMe() {
    return(
        <body>
            <div>
                <p className='setupformattitle'>Professional Life</p>
                <img className="setupformatimage" src='React Homepage.png' alt='In the works' />
                <p className='setupformatparagraph'>I am a student at Northview Heights Secondary School. I am part of the Information and Communication Technologies sector of the Specialist High Skills Major program with my major focus on Computer Science. My short term goal is to gain admittance to the University of Toronto for Computer Science. For my career goal, I am aiming to work in the software development industry and build softwares and applications to help assist users with tasks and needs. (Need to update picture on the left)</p>
                
                <p className='formattitle'>Personal Interests</p>
                <img className="graphformatimage1" src='React Homepage.png' alt='In the works' />
                <img className="graphformatimage2" src='React Homepage.png' alt='In the works' />
                <img className="graphformatimage3" src='React Homepage.png' alt='In the works' />

                <p className='formatparagraph1'>Stock Market--------------------------------</p>
                <p className='formatparagraph2'>Track and Field--------------------------------------------------------------</p>
                <p className='formatparagraph3'>Cooking-----------------------------------------------------------</p>
                
                
            </div>
        </body>
    )
}

export default AboutMe;