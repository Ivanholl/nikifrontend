import { combineReducers } from "redux";
import {
	SET_USER,
	SET_IS_AUTHENTICATED,
	SET_CONTENT,
	SET_LANGUAGES,
	SET_SELECTED_LANGUAGE,
	SET_LANGUAGE_VARIANTS,
	SET_SELECTED_VARIANT,
	FILTER_VARIANT,
} from "./actions";

import defaultContent from "../defaultContent.js";

const initialState = {
  user: {
    username: "",
  },
  isAuthenticated: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    case SET_IS_AUTHENTICATED:
      return { ...state, isAuthenticated: action.isAuthenticated };
    default:
      return state;
  }
}



const initialContent = {
	menus: {
		menuOne: defaultContent.menus.menuOne || "",
		menuTwo: defaultContent.menus.menuTwo || "",
		menuThree: defaultContent.menus.menuThree || "",
		menuFour: defaultContent.menus.menuFour || "",
	},
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
		partOne: defaultContent.fourthPaga.partOne || "",
		partTwo: defaultContent.fourthPaga.partTwo || "",
		link: defaultContent.fourthPaga.link || "",
		linkText: defaultContent.fourthPaga.linkText || "",
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
		showOnMap: defaultContent.fifthPage.showOnMap || "",
		mapCoordinatesLong: defaultContent.fifthPage.mapCoordinatesLong || "",
		mapCoordinatesLat: defaultContent.fifthPage.mapCoordinatesLat || "",
		formFields: {
			title: defaultContent.fifthPage.formFields.title || "",
			name: defaultContent.fifthPage.formFields.name || "",
			phone: defaultContent.fifthPage.formFields.phone || "",
			email: defaultContent.fifthPage.formFields.email || "",
			msg: defaultContent.fifthPage.formFields.msg || "",
			error: defaultContent.fifthPage.formFields.error || "",
			send: defaultContent.fifthPage.formFields.send || "",
		},
	},
	languages: ["en"],
	selectedLang: localStorage.getItem("language") || "en",
	languageVariants: [],
	selectedVariant: "default",
};

function contentReducer(state = initialContent, action) {
    switch (action.type) {
		case SET_CONTENT:			
			let temp = { ...state, ...action.content };
			return temp;
		case SET_LANGUAGES:
			return { ...state, languages: action.languages };
		case SET_SELECTED_LANGUAGE:
			return { ...state, selectedLang: action.selectedLang };
		case SET_LANGUAGE_VARIANTS:
			return { ...state, languageVariants: action.languageVariants };
		case SET_SELECTED_VARIANT:
			return { ...state, selectedVariant: action.selectedVariant };
		case FILTER_VARIANT:
			if(action.variant == "default") return state;
			let content = state.languageVariants[action.variant - 1];
			return { ...state, ...content };
		default:
			return state;
	}
}

const combinedReducers = combineReducers({
	userReducer,
	contentReducer,
});

export default combinedReducers;
