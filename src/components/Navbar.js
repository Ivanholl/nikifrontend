import React from 'react';
import { Nav, DropdownButton, Dropdown } from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu'
import { useSelector, useDispatch } from "react-redux";

import logo from '../images/Logo-proakt.png';
import * as Actions from '../redux/actions';

export default function Navbar(props) {
    const dispatch = useDispatch();
    const languages = useSelector((state) => state.contentReducer.languages);
    const menus = useSelector((state) => state.contentReducer.menus);
    const selectedLang = useSelector((state) => state.contentReducer.selectedLang);

    function handleClick(num) {
        props.setBoxToShow(num)
    }

    return (<header className="App-header">
        <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
        <Nav activeKey="/home" >
            <div className="main-menu">
                <Nav.Item>
                    <Nav.Link href="#about" onClick={() => handleClick(1)}>{menus.menuOne}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#services" onClick={() => handleClick(2)}>{menus.menuTwo}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="#jobs" onClick={() => handleClick(3)}>{menus.menuThree}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="#contacts" onClick={() => handleClick(4)}>{menus.menuFour}</Nav.Link>
                </Nav.Item>
            </div>
            {/* <div className="outsorce">
                <Nav.Item>
                    <Nav.Link eventKey="link-4">Комуникатор</Nav.Link>
                </Nav.Item>
            </div> */}
            {/* <div className="lang">
                <p key={index}><a href="/">{lang}</a></p>
            </div> */}
            <DropdownButton className="lang" title={selectedLang}
                onSelect={(e) => dispatch(Actions.setUpSelectedLanguage(e))}
            >
                {languages.map((lang, index) =>
                    <Dropdown.Item key={index} eventKey={lang}>{lang}</Dropdown.Item>
                )}
            </DropdownButton>
        </Nav>
        <Menu right={true} fallDown={'fallDown'}>
            <a onClick={() => handleClick(1)} className="menu-item" href="#about">За Нас</a>
            <a onClick={() => handleClick(2)} className="menu-item" href="#services">Услуги</a>
            <a onClick={() => handleClick(3)} className="menu-item" href="#jobs">Кариери</a>
            <a onClick={() => handleClick(4)} className="menu-item" href="#contacts">Контакти</a>
            <a className="menu-item">
                <DropdownButton className="lang" variant="dark" title={selectedLang} onSelect={(e) => dispatch(Actions.setUpSelectedLanguage(e))} >
                    {languages.map((lang, index) =>
                        <Dropdown.Item key={index} eventKey={lang}>{lang}</Dropdown.Item>
                    )}
                </DropdownButton>
            </a>
        </Menu>
    </header>);
}
