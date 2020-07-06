// import {
//   authenticate,
//   setTokenInterseptor,
// } from "../api/axiosConfig";
// import * as userApi from "../api/userApi.js";
// import * as Config from "../conf.js";


/*
 * action types
 */

export const SET_USER = "SET_USER";
export const SET_IS_AUTHENTICATED = "SET_IS_AUTHENTICATED";
// export const ADD_TODO = 'ADD_TODO'
// export const TOGGLE_TODO = 'TOGGLE_TODO'
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SET_CONTENT = "SET_CONTENT";


const backendURL = process.env.NODE_ENV === "production" ? '' : 'http://localhost:9000';
console.log(process.env);
/*
 * other constants
 */

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

/*
 * action creators
 */

export function setUser(user) {
  return { type: SET_USER, user };
}
export function setIsAuthenticated(isAuthenticated) {
  return { type: SET_IS_AUTHENTICATED, isAuthenticated };
}

export function login(email, pass) {
  return (dispatch) =>
    new Promise((resolve, reject) => {
        resolve()
    //   authenticate(email, pass)
    //     .then((res) => {
    //       if (res.data) {
    //         var token = res.data.token;
    //         setTokenInterseptor(token);
    //         dispatch(getUserInfo()).then(() => resolve());
    //       } else {
    //         reject();
    //       }
    //     })
    //     .catch((err) => console.error(err));
    });
}

export function getUserInfo() {
  return (dispatch) =>
    new Promise((resolve, reject) => {
    //   userApi
    //     .me()
    //     .then((res) => {
    //       if (res.data) {
    //         dispatch(setUser(res.data));
    //         dispatch(setIsAuthenticated(true));
    //         resolve(res);
    //       } else {
    //         reject();
    //       }
    //     })
    //     .catch((err) => console.error(err));
    });
}
export function checkIfAuth() {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      if (localStorage && localStorage.token) {
        // setTokenInterseptor(localStorage.token);
        dispatch(getUserInfo()).then(() => resolve());
      }
      // else {
      //     reject()
      // }
    });
}

export function logout() {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      if (localStorage && localStorage.token) {
        // setTokenInterseptor("");
        dispatch(setUser({}));
        resolve();
      } else {
        reject();
      }
    });
}

// export function addTodo(text) {
//   return { type: ADD_TODO, text }
// }
//
// export function toggleTodo(index) {
//   return { type: TOGGLE_TODO, index }
// }
//
// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter }
// }



export function setContent(content) {
	return { type: SET_CONTENT, content };
}


export function getContent(lang) {
	return (dispatch) => 
		new Promise((resolve, reject) => {
			console.log('get config')
			fetch(backendURL + '/content?lang=' + lang)
				.then(response => response.json())
				.then(content => {
					console.log('server response')			
					console.log(content)
					dispatch(setContent(content))
					resolve(content)
				})
				.catch(err => {
					console.error(err)
					reject(err)
				})
		});
}