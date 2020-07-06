import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap';
var images = [];

export default function SideMenu(props) {
    const dispatch = useDispatch();
    const allContent = useSelector((state) => state.contentReducer);
    
    function getFullPageArr(array, val, key, index) {
		let arr = [...array];
        arr[index] = { ...arr[index], [key]: val };
        return arr;
	}
    function firstPageFields() {
        var arrayToMap = allContent.firstPage.cardsArr;
        return (<>
            <InputGroup className="mb-3">
                <FormControl value={allContent.firstPage.title}
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { firstPage: { ...allContent.firstPage, title: event.target.value }} }) }                    
                />
            </InputGroup>
            {arrayToMap.map((item, index) =>         
                <InputGroup className="w-100 mb-1">
                    <FormControl
                        key={index}
                        onChange={(event) => dispatch({ type: "SET_CONTENT", content: { firstPage: { ...allContent.firstPage, cardsArr: getFullPageArr(arrayToMap, event.target.value, 'text', index) } } })}
                        value={item.text}
                    />
                    <DropdownButton id="dropdown-basic-button" title={item.image}  as={InputGroup.Prepend}
                        onSelect={(e) => dispatch({ type: "SET_CONTENT", content: { firstPage: { ...allContent.firstPage, cardsArr: getFullPageArr(arrayToMap, e, 'image', index) } } })}
                    >
                        {images.map((itemInner, indexInner) => 
                            <Dropdown.Item key={indexInner} eventKey={itemInner}>{itemInner}</Dropdown.Item>
                        )}
                    </DropdownButton>
                </InputGroup>
            )}
        </>)
    }
    function secondPageFields() {
        return (<>
            <FormControl value={allContent.secondPage.small}
                onChange={(event) => dispatch({ type: "SET_CONTENT", content: { secondPage: { ...allContent.secondPage, small: event.target.value }} }) }                
            />
            <FormControl as="textarea" value={allContent.secondPage.main}
                onChange={(event) => dispatch({ type: "SET_CONTENT", content: { secondPage: { ...allContent.secondPage, main: event.target.value }} }) }                
            />
            <FormControl value={allContent.secondPage.Bold}
                onChange={(event) => dispatch({ type: "SET_CONTENT", content: { secondPage: { ...allContent.secondPage, Bold: event.target.value }} }) }                
            />
            <FormControl as="textarea" value={allContent.secondPage.First}
                onChange={(event) => dispatch({ type: "SET_CONTENT", content: { secondPage: { ...allContent.secondPage, First: event.target.value }} }) }                
            />
            <FormControl  as="textarea" value={allContent.secondPage.Second}
                onChange={(event) => dispatch({ type: "SET_CONTENT", content: { secondPage: { ...allContent.secondPage, Second: event.target.value }} }) }                
            />
            <FormControl as="textarea" value={allContent.secondPage.Tirth}
                onChange={(event) => dispatch({ type: "SET_CONTENT", content: { secondPage: { ...allContent.secondPage, Tirth: event.target.value }} }) }                
            />
        </>)
    };
    function TirdPageFields() {
        var arrayToMap = allContent.tirthPage.cardsArr;
        return (<>{
            arrayToMap.map((item, index) =>         
                <InputGroup className="w-100 mb-1" key={index}>
                    <FormControl                        
                        onChange={(event) => dispatch({ type: "SET_CONTENT", content: { tirthPage: { ...allContent.tirthPage, cardsArr: getFullPageArr(arrayToMap, event.target.value, 'text', index) } } })}
                        value={item.text}
                    />
                    <DropdownButton id="dropdown-basic-button" title={item.image}  as={InputGroup.Prepend}
                        onSelect={(e) => dispatch({ type: "SET_CONTENT", content: { tirthPage: { ...allContent.tirthPage, cardsArr: getFullPageArr(arrayToMap, e, 'image', index) } } })}
                    >
                        {images.map((itemInner, indexInner) => 
                            <Dropdown.Item key={indexInner} eventKey={itemInner}>{itemInner}</Dropdown.Item>
                        )}
                    </DropdownButton>
                </InputGroup>
            )
        }</>)
    }
    function forthPageFields () {
        return (<>
            <FormControl value={allContent.fourthPaga.title}
                onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fourthPaga: { ...allContent.fourthPaga, title: event.target.value }} }) }                
            />
        </>)
    }
    function fifthPageFields () {
        return (<>
         <InputGroup className="w-100 mb-1">
                <FormControl value={allContent.fifthPage.city}
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage, city: event.target.value }} }) }                
                />
                <FormControl value={allContent.fifthPage.zip}
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage, zip: event.target.value }} }) }                
                />
            </InputGroup>
            <InputGroup className="w-100 mb-1">
                <FormControl value={allContent.fifthPage.str}
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage, str: event.target.value }} }) }                
                />
                <FormControl  value={allContent.fifthPage.number}
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage, number: event.target.value }} }) }                
                />
            </InputGroup>
            <InputGroup className="w-100 mb-1">
                <FormControl value={allContent.fifthPage.building}
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage, building: event.target.value }} }) }                
                />
                <FormControl value={allContent.fifthPage.floor}
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage, floor: event.target.value }} }) }                
                />
            </InputGroup>
            <InputGroup className="w-100 mb-1">
                <FormControl value={allContent.fifthPage.phoneOne}
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage, phoneOne: event.target.value }} }) }                
                />
                <FormControl value={allContent.fifthPage.phoneTwo}
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage, phoneTwo: event.target.value }} }) }                
                />
                <FormControl value={allContent.fifthPage.phoneThree}
                    onChange={(event) => dispatch({ type: "SET_CONTENT", content: { fifthPage: { ...allContent.fifthPage, phoneThree: event.target.value }} }) }                
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

    useEffect(() => {
        if(!images.length) {
            images = allContent.firstPage.cardsArr.map((item) => item.image);
        }  
    })
    return (
		<div
			className={`side-menu-container ${props.openMenu ? "opened" : ""}`}
		>
			<button
				className="open-menu"
				onClick={() => props.setOpenMenu(!props.openMenu)}
			>
				{" "}
				{">"}{" "}
			</button>
			{props.openMenu && 
			    <div className="form-container">{renderField()}</div>
            }
		</div>
	);
}