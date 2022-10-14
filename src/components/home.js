import React from 'react';
import Typewriter from 'typewriter-effect';

function Home() {
    return(
        <body>
            <div>

                {/** NEW SECTION**/}
                {/** Introcution 1 **/}
                <div className='typewriter1'>
                  <Typewriter
                    onInit={(typewriter) => {
                    typewriter.typeString("HELLO...")
                    .pauseFor(200)
                    .deleteAll()
                    .typeString("THIS IS ME")
                    .start();
                    }}
                    /> 
                </div>
                
                {/** Introcution 2 **/}
                <div className='typewriter2'>
                  <Typewriter
                    onInit={(typewriter) => {
                    typewriter.typeString("WELCOME!")
                    .pauseFor(200)
                    .deleteAll()
                    .typeString("FABIEN THICH")
                    .start();
                    }}
                    /> 
                </div>

                {/** Introcution 3 **/}
                <div className='typewriter3'>
                  <Typewriter
                    onInit={(typewriter) => {
                    typewriter.typeString("")
                    .pauseFor(200)
                    .typeString("An intern at North P&D with a passion of becoming a software developer.")
                    .start();
                    }}
                    /> 
                </div>

                {/** Introduction Image**/}
                <img className='introduction-image' src='Introduction Image.png' />
                
                {/** NEW SECTION**/}

            </div>
        </body>
    )
}

export default Home;