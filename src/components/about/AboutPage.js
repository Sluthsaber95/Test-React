import React from 'react';

class AboutPage extends React.Component {
  render(){
    return(
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux, React Router and a variety of other helpful libraries</p>
      </div>
    );
  }
}

export default AboutPage;

/* due current limitations in hot reloading. It's useful to have a class in hot reloading right now where stateless function components aren't hot reloaded unless they have some
*  parent that is a class. By doing this, we will have hot reload on this page
* */
