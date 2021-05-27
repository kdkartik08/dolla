import {useState} from 'react';
import Sidebar from '../Components/Sidebar/index';
import Navbar from '../Components/Navbar/index';
import HeroSection from '../Components/HeroSection/index';
import InfoSection from '../Components/InfoSection/index';
import { homeObjOne, homeObjTwo, homeObjThree } from '../Components/InfoSection/Data';
import Services from '../Components/Services';
import Footer from '../Components/Footer/index';

const Home = () => {

    const [isOpen, setIsOpen]=useState(false);

    const toggle=()=>{
        setIsOpen(!isOpen);
    }

    return(
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <Services />
        <InfoSection {...homeObjThree} />
        <Footer/>
        </>
    );
};

export default Home;