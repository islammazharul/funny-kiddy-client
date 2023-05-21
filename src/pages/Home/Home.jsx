import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Message from '../Message/Message';
import Feature from '../Feature/Feature';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <Products></Products>
            <Feature></Feature>
            <Message></Message>
        </div>
    );
};

export default Home;