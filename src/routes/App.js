import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Layout} from "../containers/Layout";
import {LandingPage} from "../pages/LandingPage";
import SlidePages from "../pages/SlidePages";
import {imagesSlides} from '../utils/dataSliders';
import LoginPhone from "../pages/LoginPhone";
import {VerificationCodePhone} from "../pages/VerificationCodePhone";
import {CreateAccount} from "../pages/CreateAccount";

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
                               toText="/login-phone"
                           />}
                />
                <Route exact path="/login-phone" element={<LoginPhone/>} />
                <Route exact path="/verification-code-phone" element={<VerificationCodePhone/>} />
                <Route exact path="/create-account" element={<CreateAccount />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
