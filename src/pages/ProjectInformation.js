import React from 'react';

const ProjectInformation = () => {
    
    return ( 

        <div>
            <h2>Project Information</h2>
            <p>On this page you can find details about this project as well as a links to the source code.</p>

            <h4>Repositories</h4>
            <p>React Front End:<a href="https://github.com/rob-mathieu/react-beer"> https://github.com/rob-mathieu/react-beer</a> <br/>
            Express Proxy:<a href="https://github.com/rob-mathieu/react-beer-api"> https://github.com/rob-mathieu/react-beer-api</a> </p>


            <h4>Why is there a proxy?</h4>
            <p>- there is an intermediate proxy due to Brewery DB not supporting front-end JavaScript requests, which results in a CORS policy issue. To resolve this issue, I set up another server that enables CORS for http:localhost:3000 to handle the front-end requests.</p>
        
            Check out my other projects on <a href="https://www.robocoder.io/">Robocoder.</a>
        </div>

    );

}
 
export default ProjectInformation;