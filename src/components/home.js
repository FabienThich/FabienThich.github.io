import React from 'react';

function Home() {
    return(
        <body>
            <div>
                {/** Heading **/}
                {/** <h2 style={{"fontSize" : "50px"}}>Home</h2> **/}

                {/**New Section **/}
                <img className='introduction-image' src='Introduction Image.png' />
                <p className='introduction-font1'>THIS IS ME</p>
                <p className='introduction-font2'>FABIEN THICH</p>
                <p className='introduction-font3'>An intern at North P&D with a passion of becoming a software developer.</p>
                
            </div>
        </body>
    )
}

export default Home;