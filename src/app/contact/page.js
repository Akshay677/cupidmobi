import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Pricecard from '../../components/pricecard/pricecard';
import Container from '@mui/material/Container';

export default function Contact() {
    return (
        <div>
            <Header />
            <div className='mth'>
                <Container>
                    <div>

                        <div className='contact_div'>
                            <div className='contact_div_1'>
                                <h2 className='section__title'>
                                    Contact Form
                                </h2>
                                <div className='contact_div'>
                                    <input type='text' className='form__input w' placeholder='Name' />
                                    <input type='email' className='form__input w' placeholder='Email' />
                                </div>
                                <input type='email' className='form__input' placeholder='Mobile' />
                                <textarea type='email' className='form__input_' rows={6} placeholder='Type your message...' />
                                <button className='form__btn'>Send</button>
                            </div>
                            <div className='contact_div_2'>
                                <h2 className='section__title'>
                                    Info
                                </h2>
                                <p className='mb1'>
                                    It is a long fact that a reader will be distracted by the
                                    readable content of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a more-or-less
                                    normal distribution of letters, as opposed to using.
                                </p>
                                <p className='mb1'>+31 20 570 3170</p>
                                <p className='mb1'>support@Cupidmobi.com</p>
                            </div>
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
