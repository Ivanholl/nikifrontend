import { combineReducers } from "redux";
import {
	// ADD_TODO,
	// TOGGLE_TODO,
	// SET_VISIBILITY_FILTER,
	// VisibilityFilters
	SET_USER,
	SET_IS_AUTHENTICATED,
	//
	//
	//
	SET_CONTENT,
} from "./actions";

import defaultContent from "../defaultContent.js";

// const {
//     SHOW_ALL
// } = VisibilityFilters

// function visibilityFilter(state = SHOW_ALL, action) {
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//             return action.filter
//         default:
//             return state
//     }
// }

const initialState = {
  user: {
    username: "",
  },
  isAuthenticated: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      // debugger
      return { ...state, user: action.user };
    case SET_IS_AUTHENTICATED:
      return { ...state, isAuthenticated: action.isAuthenticated };
    default:
      return state;
  }
}



const initialContent = {
	firstPage: {
		title: defaultContent.firstPage.title || "",
		cardsArr: defaultContent.firstPage.cardsArr || [],
	},
	secondPage: {
		small: defaultContent.secondPage.small || "",
		main: defaultContent.secondPage.main || "",
		Bold: defaultContent.secondPage.Bold || "",
		First: defaultContent.secondPage.First || "",
		Second: defaultContent.secondPage.Second || "",
		Tirth: defaultContent.secondPage.Tirth || "",
	},
	tirthPage: {
		cardsArr: defaultContent.tirthPage.cardsArr || "",
	},
	fourthPaga: {
		title: defaultContent.fourthPaga.title || ""
	},
	fifthPage: {
		city: defaultContent.fifthPage.city || "",
		zip: defaultContent.fifthPage.zip || "",
		str: defaultContent.fifthPage.str || "",
		number: defaultContent.fifthPage.number || "",
		building: defaultContent.fifthPage.building || "",
		floor: defaultContent.fifthPage.floor || "",
		phoneOne: defaultContent.fifthPage.phoneOne || "",
		phoneTwo: defaultContent.fifthPage.phoneTwo || "",
		phoneThree: defaultContent.fifthPage.phoneThree || "",
	},
};

function contentReducer(state = initialContent, action) {
    switch (action.type) {
        case SET_CONTENT:
			return { ...action.content }
        default:
            return state;
    }
}

const combinedReducers = combineReducers({
	// visibilityFilter,
	// todos
	userReducer,
	contentReducer,
});

export default combinedReducers;
