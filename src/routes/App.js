import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Layout} from "../containers/Layout";
import {LandingPage} from "../pages/LandingPage";
import SlidePages from "../pages/SlidePages";
import {imagesSlides} from '../utils/dataSliders';

function App() {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route exact path="/" element={<LandingPage />}/>
                <Route exact
                       path={imagesSlides[0].toText}
                       element={
                    <SlidePages
                        image={imagesSlides[0].image}
                        text={imagesSlides[0].text}
                        toText={imagesSlides[1].toText}
                    />}
                />
                <Route exact
                       path={imagesSlides[1].toText}
                       element={
                           <SlidePages
                               image={imagesSlides[1].image}
                               text={imagesSlides[1].text}
                               toText={imagesSlides[2].toText}
                           />}
                />
                <Route exact
                       path={imagesSlides[2].toText}
                       element={
                           <SlidePages
                               image={imagesSlides[2].image}
                               text={imagesSlides[2].text}
                               toText={imagesSlides[2].toText}
                           />}
                />
            </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
