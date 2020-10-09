import React, { Component, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as Actions from '../redux/actions';
import {InputGroup, FormControl, Dropdown, DropdownButton, Button, Card, Accordion } from 'react-bootstrap';

import TextEditor from './TextEditor'

var images = [];

export default function SideMenu(props) {
    const dispatch = useDispatch();
    const allContent = useSelector((state) => state.contentReducer);
    const langVariants = useSelector((state) => state.contentReducer.languageVariants);
    const selectedLang = useSelector((state) => state.contentReducer.selectedLang);
    const languages = useSelector((state) => state.contentReducer.languages);
    const selectedVariant = useSelector((state) => state.contentReducer.selectedVariant);


    function getFullPageArr(array, val, key, index) {
		let arr = [...array];
        arr[index] = { ...arr[index], [key]: val };
        return arr;
    }

    function firstPageFields() {
        var arrayToMap = allContent.firstPage.cardsArr;
        return (<>
            <InputGroup className="mb-3">
                <FormControl value={allContent.menus.menuOne}  placeholder="menu One"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { menus: { ...allContent.menus, menuOne: event.target.value }} }) }
                />
                <FormControl value={allContent.menus.menuTwo}  placeholder="menu Two"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { menus: { ...allContent.menus, menuTwo: event.target.value }} }) }
                />
                <FormControl value={allContent.menus.menuThree}  placeholder="menu Three"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { menus: { ...allContent.menus, menuThree: event.target.value }} }) }
                />
                <FormControl value={allContent.menus.menuFour}  placeholder="menu Four"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { menus: { ...allContent.menus, menuFour: event.target.value }} }) }
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl value={allContent.firstPage.title} placeholder="title"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { firstPage: { ...allContent.firstPage, title: event.target.value }} }) }
                />
            </InputGroup>
            <Accordion>
                {arrayToMap.map((item, index) =>
                    <Card key={index}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="dark" as={Button} eventKey={index}>
                                Click to show Card {index + 1} text.
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={index}>
                            <>
                            <InputGroup className="w-100 mb-1" key={index}>
                                <FormControl
                                     placeholder="content"
                                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { firstPage: { ...allContent.firstPage, cardsArr: getFullPageArr(arrayToMap, event.target.value, 'title', index) } } })}
                                    value={item.title}
                                />
                                <DropdownButton  title={item.image}  as={InputGroup.Prepend}
                                    onSelect={(e) => dispatch({ type: "SET_CONTENT", content: { firstPage: { ...allContent.firstPage, cardsArr: getFullPageArr(arrayToMap, e, 'image', index) } } })}
                                >
                                    {images.map((itemInner, indexInner) =>
                                        <Dropdown.Item key={indexInner} eventKey={itemInner}>{itemInner}</Dropdown.Item>
                                    )}
                                </DropdownButton>
                            </InputGroup>
                            {/*}<FormControl as="textarea" value={item.text} placeholder="infocard opened text"
                                onChange={(event) => dispatch({ type: "SET_CONTENT", content: { firstPage: { ...allContent.firstPage, cardsArr: getFullPageArr(arrayToMap, event.target.value, 'text', index) } } }) }
                            />*/}
                            <TextEditor text={item.text} handleOnChange={(outputText) => dispatch({ type: "SET_CONTENT", content: { firstPage: { ...allContent.firstPage, cardsArr: getFullPageArr(arrayToMap, outputText, 'text', index) } } })}/>
                            </>
                        </Accordion.Collapse>
                    </Card>
                )}
            </Accordion>
        </>)
    }
    function secondPageFields() {
        return (<>
            <FormControl value={allContent.secondPage.small}  placeholder="small text"
                onChange={(event) => dispatch({ type: "SET_CONTENT", content: { secondPage: { ...allContent.secondPage, small: event.target.value }} }) }
            />
            <FormControl as="textarea" value={allContent.secondPage.main}  placeholder="main text"
                onChange={(event) => dispatch({ type: "SET_CONTENT", content: { secondPage: { ...allContent.secondPage, main: event.target.value }} }) }
            />
            <FormControl value={allContent.secondPage.Bold}  placeholder="bold text"
                onChange={(event) => dispatch({ type: "SET_CONTENT", content: { secondPage: { ...allContent.secondPage, Bold: event.target.value }} }) }
            />
            <FormControl as="textarea" value={allContent.secondPage.First}  placeholder="first part"
                onChange={(event) => dispatch({ type: "SET_CONTENT", content: { secondPage: { ...allContent.secondPage, First: event.target.value }} }) }
            />
            <FormControl  as="textarea" value={allContent.secondPage.Second}  placeholder="second part"
                onChange={(event) => dispatch({ type: "SET_CONTENT", content: { secondPage: { ...allContent.secondPage, Second: event.target.value }} }) }
            />
            <FormControl as="textarea" value={allContent.secondPage.Tirth}  placeholder="tirth part"
                onChange={(event) => dispatch({ type: "SET_CONTENT", content: { secondPage: { ...allContent.secondPage, Tirth: event.target.value }} }) }
            />
        </>)
    };
    function TirdPageFields() {
        var arrayToMap = allContent.tirthPage.cardsArr;
        return (
            <Accordion defaultActiveKey="0">
                {arrayToMap.map((item, index) =>
                    <Card key={index}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="dark" as={Button} eventKey={index}>
                                Click to show Card {index + 1} text.
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={index}>
                            <>
                            <InputGroup className="w-100 mb-1" >
                                <FormControl
                                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { tirthPage: { ...allContent.tirthPage, cardsArr: getFullPageArr(arrayToMap, event.target.value, 'title', index) } } })}
                                    value={item.title}   placeholder="content"
                                />
                                <DropdownButton  title={item.image}  as={InputGroup.Prepend}
                                    onSelect={(e) => dispatch({ type: "SET_CONTENT", content: { tirthPage: { ...allContent.tirthPage, cardsArr: getFullPageArr(arrayToMap, e, 'image', index) } } })}
                                >
                                    {images.map((itemInner, indexInner) =>
                                        <Dropdown.Item key={indexInner} eventKey={itemInner}>{itemInner}</Dropdown.Item>
                                    )}
                                </DropdownButton>
                            </InputGroup>
                            {/*<FormControl as="textarea" value={item.text}  placeholder="infocard opened text"
                                onChange={(event) =>  dispatch({ type: "SET_CONTENT", content: { tirthPage: { ...allContent.tirthPage, cardsArr: getFullPageArr(arrayToMap, event.target.value, 'text', index) } } })}
                            />*/}
                            <TextEditor text={item.text} handleOnChange={(outputText) =>  dispatch({ type: "SET_CONTENT", content: { tirthPage: { ...allContent.tirthPage, cardsArr: getFullPageArr(arrayToMap, outputText, 'text', index) } } }) }/>
                            </>
                        </Accordion.Collapse>
                    </Card>
                )}
            </Accordion >
        )
    }
    function forthPageFields () {
        return (<>
            <FormControl value={allContent.fourthPaga.partOne}   placeholder="text"
                onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fourthPaga: { ...allContent.fourthPaga, partOne: event.target.value }} }) }
            />
            <FormControl value={allContent.fourthPaga.partTwo}   placeholder="text"
                onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fourthPaga: { ...allContent.fourthPaga, partTwo: event.target.value }} }) }
            />
            <FormControl value={allContent.fourthPaga.link}   placeholder="text"
                onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fourthPaga: { ...allContent.fourthPaga, link: event.target.value }} }) }
            />
            <FormControl value={allContent.fourthPaga.linkText}   placeholder="text"
                onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fourthPaga: { ...allContent.fourthPaga, linkText: event.target.value }} }) }
            />


        </>)
    }
    function fifthPageFields () {
        return (<>
         <InputGroup className="w-100 mb-1">
                <FormControl value={allContent.fifthPage.city}   placeholder="city"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage, city: event.target.value }} }) }
                />
                <FormControl value={allContent.fifthPage.zip}  placeholder="zip"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage, zip: event.target.value }} }) }
                />
            </InputGroup>
            <InputGroup className="w-100 mb-1">
                <FormControl value={allContent.fifthPage.str}   placeholder="street"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage, str: event.target.value }} }) }
                />
                <FormControl  value={allContent.fifthPage.number}   placeholder="street number"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage, number: event.target.value }} }) }
                />
            </InputGroup>
            <InputGroup className="w-100 mb-1">
                <FormControl value={allContent.fifthPage.building}  placeholder="building"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage, building: event.target.value }} }) }
                />
                <FormControl value={allContent.fifthPage.floor}   placeholder="floor"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage, floor: event.target.value }} }) }
                />
            </InputGroup>
            <InputGroup className="w-100 mb-1">
                <FormControl value={allContent.fifthPage.phoneOne}   placeholder="phone one (empty by design)"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage, phoneOne: event.target.value }} }) }
                />
                <FormControl value={allContent.fifthPage.phoneTwo}   placeholder="phone two"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage, phoneTwo: event.target.value }} }) }
                />
                <FormControl value={allContent.fifthPage.phoneThree}   placeholder="phone three"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage, phoneThree: event.target.value }} }) }
                />
            </InputGroup>
            <InputGroup className="w-100 mb-1">
                <FormControl value={allContent.fifthPage.showOnMap}   placeholder="phone one (empty by design)"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage, showOnMap: event.target.value }} }) }
                />
                <FormControl value={allContent.fifthPage.mapCoordinatesLong}   placeholder="phone two"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage, mapCoordinatesLong: event.target.value }} }) }
                />
                <FormControl value={allContent.fifthPage.mapCoordinatesLat}   placeholder="phone three"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage, mapCoordinatesLat: event.target.value }} }) }
                />
            </InputGroup>
            <h5>FORM</h5>
             <InputGroup className="w-100 mb-1">
                <FormControl value={allContent.fifthPage.formFields.title}   placeholder="phone one (empty by design)"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage.formFields, formFields: { ...allContent.fifthPage.formFields, title: event.target.value }}} }) }
                />
                <FormControl value={allContent.fifthPage.formFields.error}   placeholder="phone two"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage.formFields, formFields: { ...allContent.fifthPage.formFields, error: event.target.value }}} }) }
                />
                <FormControl value={allContent.fifthPage.formFields.send}   placeholder="phone three"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage.formFields, formFields: { ...allContent.fifthPage.formFields, send: event.target.value }}} }) }
                />
            </InputGroup>
            <InputGroup className="w-100 mb-1">
                <FormControl value={allContent.fifthPage.formFields.name}   placeholder="phone one (empty by design)"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage.formFields, formFields: { ...allContent.fifthPage.formFields, name: event.target.value }}} }) }
                />
                <FormControl value={allContent.fifthPage.formFields.phone}   placeholder="phone two"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage.formFields, formFields: { ...allContent.fifthPage.formFields, phone: event.target.value }}} }) }
                />
                <FormControl value={allContent.fifthPage.formFields.email}   placeholder="phone three"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage.formFields, formFields: { ...allContent.fifthPage.formFields, email: event.target.value }}} }) }
                />
                <FormControl value={allContent.fifthPage.formFields.msg}   placeholder="phone three"
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage.formFields, formFields: { ...allContent.fifthPage.formFields, msg: event.target.value }}} }) }
                />
            </InputGroup>
        </>)
    }
    function renderField() {
        switch (props.boxToShow) {
			case 0:
				return firstPageFields();
			case 1:
				return secondPageFields();
			case 2:
				return TirdPageFields();
			case 3:
				return forthPageFields();
			case 4:
				return fifthPageFields();
			default:
				break;
		}
    }
    function onSave() {
        var r = window.confirm("Are you sure you want to save?");

        if(r) {
            if (selectedVariant != "default") {
				dispatch(Actions.editContentVariant(allContent, selectedLang, selectedVariant));
			} else {
				dispatch(Actions.editContent(allContent,selectedLang)
				);
			}
        }
    }
    function onMakeDefault() {
        var r = window.confirm("Are you sure you want to make this variant default?");

        if (r) {
            dispatch(Actions.editContent(allContent, selectedLang));
        }
    }
    useEffect(() => {
		if(!images.length) {
		    images = allContent.firstPage.cardsArr.map((item) => item.image);
		}
		if (langVariants && !langVariants.length) dispatch(Actions.getLanguageVariants(selectedLang));
	});
    return (
		<div
			className={`side-menu-container ${props.openMenu ? "opened" : ""}`}
		>
			<h3>Language Versions</h3>
			<button
				className="open-menu"
				onClick={() => props.setOpenMenu(!props.openMenu)}
			>
				{""}
			</button>
			<div className="form-container">
				<p>Get Specific Variant</p>
				<InputGroup className="w-100 mb-1">
					<DropdownButton
						className="lang"
						title={"selected language: " + selectedLang}
						onSelect={(e) =>
							dispatch(Actions.setUpSelectedLanguage(e))
						}
					>
						{languages.map((lang, index) => (
							<Dropdown.Item key={index} eventKey={lang}>
								{lang}
							</Dropdown.Item>
						))}
					</DropdownButton>
					<DropdownButton
						title={"selected variant: " + selectedVariant}
						as={InputGroup.Prepend}
						onSelect={(e) =>
							dispatch(Actions.setSelectedVariant(e))
						}
					>
						{[1, 2, 3].map((item, index) => (
							<Dropdown.Item key={index} eventKey={item}>
								{" "}
								{item}{" "}
							</Dropdown.Item>
						))}
					</DropdownButton>

					<Button
						variant="success"
						onClick={() =>
							dispatch(Actions.filterVariant(selectedVariant))
						}
					>
						Filter
					</Button>
				</InputGroup>
				<hr />
				<div className="form-inner">
					{props.openMenu && renderField()}
				</div>
				<hr />
				<Button variant="success" onClick={() => onSave()}>
					Save Changes
				</Button>
				<Button variant="warning" onClick={() => onMakeDefault()}>
					Make this version default
				</Button>
			</div>
		</div>
	);
}
