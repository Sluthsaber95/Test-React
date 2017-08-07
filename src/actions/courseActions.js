import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi'

export function loadCoursesSuccess(courses){
  return {type: types.LOAD_COURSES_SUCCESS , courses}; //if the right hand-side the same as the left-hand side you omit it; i.e. no need for course: course
}

export function loadCourses(){
  return function(dispatch){
    return courseApi.getAllCourses().then(course => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  }
}
