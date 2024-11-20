import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Pricecard from '../../components/pricecard/pricecard';
import Container from '@mui/material/Container';
import Image from 'next/image';


export default function About() {
    return (
        <div>
            <Header />
            <div className='mth'>
                <Container>
                    <div>
                        <h2 className='section__title'>
                            <b>  Cupidmobi.com </b>
                            - About us
                        </h2>
                        <div>
                            <h2 className='video_text'>Videos. Podcasts. Classes.</h2>
                            <div className='para_div'>
                                <p>
                                    We are the home of smart, thoughtful videos, podcasts, and classes
                                    from your favorite creators. A place for experimentation and
                                    exploration, with exclusive originals, bonus content, and no ads
                                    in sight.
                                </p>
                            </div>
                            <h2 className='section__title'>
                                Why subscribe?
                            </h2>
                            <p className='mb1'>
                                Dive into a world of endless entertainment with Cupidmobi.com!
                                This revolutionary platform brings together everything you crave –
                                captivating videos, thrilling games, invigorating fitness programs,
                                and even educational courses – all under one roof. Explore a vast
                                library of content, seamlessly switching between a pulse-pounding
                                game and a mind-bending documentary, all within a user-friendly
                                interface.
                            </p>
                            <p className='mb1'>
                                Experience entertainment like never before. Cupidmobi.com's
                                innovative design makes it easy to personalize your journey,
                                allowing you to curate a playlist of activities that fit your mood
                                and interests. Whether you're seeking a laugh-out-loud comedy, an
                                adrenaline-pumping adventure, or a brain-teasing puzzle, Cupidmobi.com has something to keep you engaged.
                            </p>
                            <p className='mb1'>
                                Join the Cupidmobi.com movement and unlock a world of
                                possibilities. Sign up today and embark on a never-ending adventure
                                of discovery, entertainment, and personal growth. With Cupidmobi.com, you're in control – explore, play, and learn at your own pace,
                                all within a vibrant and engaging online community.
                            </p>
                        </div>
                        <div>
                            <h2 className='section__title'>Our Products</h2>
                            <div className='div_img_'>
                                <div>
                                    <Image src="/img/striker.svg" alt="image" width={120} height={90} />
                                    <h4 style={{ marginTop: "2rem" }}>Striker</h4>
                                </div>
                                <div>
                                    <Image src="/img/mobiotv.png" alt="image" width={120} height={90} />
                                    <h4 style={{ marginTop: "2rem" }}>Mobiotv</h4>

                                </div>
                                <div>
                                    <Image src="/img/mobio360.png" alt="image" width={120} height={90} />
                                    <h4 style={{ marginTop: "2rem" }}>Mobio360</h4>

                                </div>
                                <div>
                                    <Image src="/img/gamelords.png" alt="image" className='img_logo' width={120} height={90} />
                                    <h4 style={{ marginTop: "2rem" }}>Gamelords</h4>

                                </div>
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
