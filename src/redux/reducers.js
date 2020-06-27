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
		title: defaultContent.firstPageTitle || "",
		inforArr: defaultContent.firstPageInforArr || "",
	},
	secondPage: {
		title: {
			small: defaultContent.secondPageTitleSmall || "",
			main: defaultContent.secondPageTitleMain || "",
		},
		article: {
			Bold: defaultContent.secondPageTitleArticleBold || "",
			First: defaultContent.secondPageTitleArticleFirst || "",
			Second: defaultContent.secondPageTitleArticleSecond || "",
			Tirth: defaultContent.secondPageTitleArticleTirth || "",
		},
	},
	thirdPage: {
		infosArr: defaultContent.thirdPageInfosArr || "",
	},
	fifthPage: {
		city: defaultContent.fifthPageCity || "",
		zip: defaultContent.fifthPageZip || "",
		str: defaultContent.fifthPageStr || "",
		number: defaultContent.fifthPageNumber || "",
		building: defaultContent.fifthPageBuilding || "",
		floor: defaultContent.fifthPageFloor || "",
		phoneOne: defaultContent.fifthPagePhoneOne || "",
		phoneTwo: defaultContent.fifthPagePhoneTwo || "",
		phoneThree: defaultContent.fifthPagePhoneThree || "",
	},
};

function contentReducer(state = initialContent, action) {
    switch (action.type) {
        case SET_CONTENT:
            let firstPageSet = { 
                title: action.firstPage.title,
                inforArr: action.firstPage.inforArr
            };
            return { ...state, firstPage: firstPageSet };
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
