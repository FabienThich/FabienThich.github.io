import React from 'react';
import './projects.css'

function Projects() {
    return(
        <body>
            <div>
                {/** Heading **/}
                <h2 className='introformatproject'>Projects</h2>
                
                <br />
                <br />
                <br />
                <a href='https://fabienthich.github.io/calculator/' target='_blank'><img src='Calculator.png' className='imgformat2'/></a>
                <p className='descHeading'>Calculator</p>
            </div>
        </body>
    )
}

export default Projects;