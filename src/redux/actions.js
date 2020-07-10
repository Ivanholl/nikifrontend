// import {
//   authenticate,
//   setTokenInterseptor,
// } from "../api/axiosConfig";
// import * as userApi from "../api/userApi.js";
// import * as Config from "../conf.js";

import axios from 'axios';
/*
 * action types
 */

export const SET_USER = "SET_USER";
export const SET_IS_AUTHENTICATED = "SET_IS_AUTHENTICATED";
// export const ADD_TODO = 'ADD_TODO'
// export const TOGGLE_TODO = 'TOGGLE_TODO'
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SET_CONTENT = "SET_CONTENT";
export const SET_LANGUAGES = "SET_LANGUAGES";
export const SET_SELECTED_LANGUAGE = "SET_SELECTED_LANGUAGE";
export const SET_LANGUAGE_VARIANTS = "SET_LANGUAGE_VARIANTS";
export const SET_SELECTED_VARIANT = "SET_SELECTED_VARIANT";
export const FILTER_VARIANT = "FILTER_VARIANT";

const backendURL = process.env.NODE_ENV === "production" ? '' : 'http://localhost:9000';

/*
 * other constants
 */

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

export const axiosInstance = axios.create({
	baseURL: backendURL,
});
export function setTokenInterseptor(token) {
    saveToLocalStorage('token', token);

    // const interceptor = axiosInstance.interceptors.request.use(config => {
    //     config.headers.token = token;
    //     return config
    // })
    axiosInstance.interceptors.request.use(config => {
        config.headers.token = token;
        return config
    })
};

/*
 * action creators
 */

export function setUser(user) {
  return { type: SET_USER, user };
}
export function setIsAuthenticated(isAuthenticated) {
  return { type: SET_IS_AUTHENTICATED, isAuthenticated };
}

export function login(user, pass) {
  return (dispatch) =>
    new Promise((resolve, reject) => {
		fetch(backendURL + `/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({user, pass}),
			})
			.then((response) => response.json())
			.then((res) => {
				
				dispatch(setIsAuthenticated(true));
				// dispatch(setUser(res.token));
				setTokenInterseptor(res.token);
				resolve();
			})
			.catch((err) => {
				console.error(err);
				reject(err);
			});
        // resolve()
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
		axiosInstance.get("/me")
			.then((res) => {
				if (res.data) {
					// dispatch(setUser(res.data));
					dispatch(setIsAuthenticated(true));
					resolve(res);
				} else {
					reject();
				}
			})
			.catch((err) => console.error(err));
    });
}
export function checkIfAuth() {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      if (localStorage && localStorage.token) {
        setTokenInterseptor(localStorage.token);
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
function saveToLocalStorage(key, value) {
	// Check browser support
	if (typeof(Storage) !== "undefined") {
		// Store
		localStorage.setItem(key, value);
		return true;
	} else {
		return false;
	}
}


export function setContent(content) {
	return { type: SET_CONTENT, content };
}
export function setLanguages(languages) {
	return { type: SET_LANGUAGES, languages };
}
export function setSelectedLang(selectedLang) {	
	return { type: SET_SELECTED_LANGUAGE, selectedLang };
}
export function setLanguageVariants(languageVariants) {
	return { type: SET_LANGUAGE_VARIANTS, languageVariants };
}
export function setSelectedVariant(selectedVariant) {
	return { type: SET_SELECTED_VARIANT, selectedVariant };
}
export function filterVariant(variant) {
	return { type: FILTER_VARIANT, variant };
}

export function setUpSelectedLanguage(lang) {
	return (dispatch) => {
		saveToLocalStorage('language', lang)
		dispatch(getContent(lang));
		dispatch(setSelectedLang(lang));
		dispatch(getLanguageVariants(lang));
	}
}

export function getLanguages() {
	return (dispatch) =>
		new Promise((resolve, reject) => {
			
			axiosInstance.get("/getLanguages")
				.then((languages) => {
					
					dispatch(setLanguages(languages.data));
					resolve(languages.data);
				})
				.catch((err) => {
					console.error(err);
					reject(err);
				});
		});
}

export function getContent(lang) {
	return (dispatch) => 
		new Promise((resolve, reject) => {
			axiosInstance.get("/content?lang=" + lang)
				.then(content => {
					
					dispatch(setContent(content.data))
					resolve(content.data);
				})
				.catch(err => {
					console.error(err)
					reject(err)
				})
		});
}

export function editContent(content, lang, variant) {
	return (dispatch) =>
		new Promise((resolve, reject) => {
			
			content.lang = lang;
			let sendParams = {
				firstPage: content.firstPage,
				secondPage: content.secondPage,
				tirthPage: content.tirthPage,
				fourthPaga: content.fourthPaga,
				fifthPage: content.fifthPage,
				lang: content.lang,
				menus: content.menus,
			};
			// fetch(backendURL + "/editContent?lang=" + lang, {
			// 	method: "POST",
			// 	headers: {
			// 		"Content-Type": "application/json",
			// 	},
			// 	body: JSON.stringify(sendParams),
			// })
				// .then((response) => response.json())
			axiosInstance.post("/editContent?lang=" + lang, sendParams)
				.then((res) => {
					
					dispatch(setContent(content.data));
					resolve(content.data);
				})
				.catch((err) => {
					console.error(err);
					reject(err);
				});
		});
}
export function editContentVariant(content, lang, variant) {
	return (dispatch) =>
		new Promise((resolve, reject) => {
			
			content.lang = lang;

			let sendParams = {
				firstPage: content.firstPage,
				secondPage: content.secondPage,
				tirthPage: content.tirthPage,
				fourthPaga: content.fourthPaga,
				fifthPage: content.fifthPage,
				lang: content.lang,
				menus: content.menus,
			};
			// debugger
			// fetch(backendURL + `/editContentVariant?lang=${lang}&variant=${variant}`, {
			// 	method: "POST",
			// 	headers: {
			// 		"token": "",
			// 		"Content-Type": "application/json",
			// 	},
			// 	body: JSON.stringify(sendParams),
			// })
			// 	.then((response) => response.json())
			axiosInstance.post(`/editContentVariant?lang=${lang}&variant=${variant}`, sendParams)
				.then((res) => {
					
					dispatch(setContent(content.data));
					resolve(content.data);
				})
				.catch((err) => {
					console.error(err);
					reject(err);
				});
		});
}

export function getLanguageVariants(lang) {
	return (dispatch) =>
		new Promise((resolve, reject) => {
			
			axiosInstance.get("/getAllVariants?lang=" + lang)			
			.then((content) => {
				
				dispatch(setLanguageVariants(content.data));
				resolve(content.data);
			})
			.catch((err) => {
				dispatch(setLanguageVariants([{}]));
				console.error(err);
				reject(err);
			});
		});
}