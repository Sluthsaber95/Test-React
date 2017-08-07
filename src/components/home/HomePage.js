import React from 'react';
import {Link} from 'react-router'; // importing the Link component from the react router.

class HomePage extends React.Component{
  render(){
    return(
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, Redux and React Route in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    ); // react-router will be handling this anchor <link>.
  }
}

export default HomePage;

//note: first see if HTML comments in the return statement is possible. Then change linting settings so that you can parse HTML comments
