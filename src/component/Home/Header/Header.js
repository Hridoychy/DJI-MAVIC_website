import React from 'react';
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import Professional from '../Professional/Professional';
import Blog from '../Blog/Blog'
import './Header.css'
import Service from '../Service/Service';
import Testomonial from '../Testomonial/Testomonial'
import Footer from '../Footer/Footer';
import HomeService from '../../HomeService/HomeService';
import Media from '../../Media/Media'

const Header = () => {
    return (
        <div>
            <section className='banner'>
                < Navbar></Navbar>
                <Banner></Banner>

            </section>
            <HomeService/>
            <Professional />
            <Media/>
            <Blog />
            <Testomonial />
            <Footer />
        </div>
    );
};

export default Header;