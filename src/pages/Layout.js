import React, {useState} from 'react';
import {FullPage, Slide} from 'react-full-page';

import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';
import ThirdSlide from './ThirdSlide';
import FourthSlide from './FourthSlide';
import FifthSlide from './FifthSlide';

import Navbar from '../components/Navbar';
import SideMenu from '../components/SideMenu';
{/*import BackToTopBtn from '../components/BackToTopBtn';*/ }

export default function Layout(props) {
    const [boxToShow, setBoxToShow] = useState(0);
    const [openMenu, setOpenMenu] = useState(false);

    return (
		<>
			<SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} boxToShow={boxToShow}/>
			<Navbar setBoxToShow={(id) => setBoxToShow(id)} />
			<div className={openMenu ? "fullpage" : ""}>
				<FullPage
					initialSlide={0}
					duration={300}
					afterChange={(args) => setBoxToShow(args.to)}
				>
					<Slide style={{ width: "100%" }}>
						{boxToShow === 0 && <FirstSlide />}
					</Slide>
					<Slide style={{ width: "100%" }}>
						{boxToShow === 1 && <SecondSlide />}
					</Slide>
					<Slide style={{ width: "100%" }}>
						{boxToShow === 2 && <ThirdSlide />}
					</Slide>
					<Slide style={{ width: "100%" }}>
						{boxToShow === 3 && <FourthSlide />}
					</Slide>
					<Slide style={{ width: "100%" }}>
						<FifthSlide animate={boxToShow === 4} />
					</Slide>
				</FullPage>
			</div>

            {/*<BackToTopBtn setBoxToShow={(id) => setBoxToShow(id)} />*/}
		</>
	);
}
