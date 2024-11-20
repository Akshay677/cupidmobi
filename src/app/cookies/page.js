import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Pricecard from '../../components/pricecard/pricecard';
import Container from '@mui/material/Container';


export default function Cookes() {
    return (
        <div>
            <Header />
            <div className='mth'>
                <Container>
                    <div className='mb'>
                        <h1 className='cookies_h1'>
                            <strong>Cookies</strong>
                        </h1>
                        <div>
                            <p>
                                Cookies are small text files which are stored on your computer and/or mobile phone and allow web applications to
                                respond to you as an individual. Cookies help analyze web traffic or let you know when you visit a
                                particular site. The web application can tailor its operations to your needs,
                                pinpoint likes and dislikes by gathering and remembering information about your preferences
                            </p>
                            <h2 className='cookies_h2'>
                                How we use Cookies
                            </h2>
                            <p className='mb1'>
                                We use traffic log cookies to identify which pages are being used. This helps us analyze data about web page traffic and improve our website in order to tailor it to customer needs.
                                We only use this information for statistical analysis purposes and then the data is removed from the system.
                            </p>


                            <p className='mb1'>
                                Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer,
                                mobile phone or any information about yourself, other than the data you choose to share with us.
                            </p>
                            <h2 className='cookies_h2'>
                                Consent to use of Cookies

                            </h2>
                            <p className='mb1'>
                                Cookies may ask permission to be placed on your computer or mobile phone once you agree, the file will be added.

                            </p>
                            <h2 className='cookies_h2'>
                                Blocking use of Cookies
                            </h2>
                            <p className='mb1'>
                                Most web browsers automatically accept cookies, but you can modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.

                            </p>
                            <h2 className='cookies_h2'>
                                Third party Websites
                            </h2>
                            <p className='mb1'>
                                The Company and its subsidiaries are not liable for any cookies used by third party websites and thus cannot be held liable for any third party misconducts, misuses and/or misleading cookies.
                            </p>

                        </div>

                    </div>
                    <div>
                        <h2 className="heading_ mt">
                            <b>Cupidmobi.com</b>
                            – Best Place for premium content
                        </h2>
                        <p className="section__text">
                            Looking for the best destination for premium content? Look no further!
                            Our platform offers a curated selection of high-quality content
                            tailored to your interests and preferences. From exclusive games and
                            apps to in-depth videos, we strive to provide an unparalleled
                            entertainment experience. With our user-friendly interface and
                            extensive library of premium content, you'll discover a world of
                            entertainment at your fingertips.

                        </p>
                        <p className="section__text">
                            On our platform, we pride ourselves on being the ultimate destination
                            for premium content enthusiasts. With a focus on quality and
                            diversity, we continuously update our collection to ensure there's
                            something for everyone.You'll find engaging and thought-provoking
                            content that meets your needs.
                        </p>
                    </div>
                    <Pricecard />
                </Container>

            </div>
            <Footer />
        </div>
    )
}
