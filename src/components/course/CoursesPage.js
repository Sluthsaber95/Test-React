import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';


class CoursesPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.courseRow = this.courseRow.bind(this);
  }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }
  // use to display the existing courses on load



  render(){
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
      </div>
    );
  }
}
CoursesPage.propTypes= {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};
function mapStateToProps(state, ownProps){ //now in this case, it'll be most useful for accessing routing related props injected by React Router
  return{
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch) //what this does is wrap together all the actions from the imported courseActions and dispatch all of them
  };
}// maps what actions are available in our component
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

// mapDispatchToProps is an optional parameter when we omit this parameter something interesting happens.
// Instead our component automatically gets a dispatch property attached to it

// CoursesPages here is referred to as container container components
// Connect is a higher order component, that is going to wrap our CoursesPage
// Uses the currying feature in JS, the alternative would be to
// -> taking the results of one function and passing it on the another function. Very popular in function programming
// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateAndProps(CoursesPage);
// the above is a more turse style

// once we get linting errors we need to go and address all these linting errors
