import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import PhotoGallery from '../PhotoGallery/PhotoGallery';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <Products></Products>
        </div>
    );
};

export default Home;