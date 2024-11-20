"use client"
import React, { useState } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Pricecard from '../../components/pricecard/pricecard';
import Container from '@mui/material/Container';

export default function FAQ() {
    const [faqshow, setfaqshoa] = useState(true);
    const [faqshow2, setfaqshoa2] = useState(false);
    const [faqshow3, setfaqshoa3] = useState(false);
    const [faqshow4, setfaqshoa4] = useState(false);
    const [faqshow5, setfaqshoa5] = useState(false);

    const Faqfun = () => {
        setfaqshoa(true)
        setfaqshoa2(false)
        setfaqshoa3(false)
        setfaqshoa4(false)
        setfaqshoa5(false)
    }
    const Faqfun2 = () => {
        setfaqshoa(false)
        setfaqshoa2(true)
        setfaqshoa3(false)
        setfaqshoa4(false)
        setfaqshoa5(false)
    }
    const Faqfun3 = () => {
        setfaqshoa(false)
        setfaqshoa2(false)
        setfaqshoa3(true)
        setfaqshoa4(false)
        setfaqshoa5(false)
    }
    const Faqfun4 = () => {
        setfaqshoa(false)
        setfaqshoa2(false)
        setfaqshoa3(false)
        setfaqshoa4(true)
        setfaqshoa5(false)
    }
    const Faqfun5 = () => {
        setfaqshoa(false)
        setfaqshoa2(false)
        setfaqshoa3(false)
        setfaqshoa4(false)
        setfaqshoa5(true)
    }
    return (
        <div>
            <Header />
            <div className='mth'>
                <Container>
                    <div>
                        <h2 className='section__title'>
                            <b>  Cupidmobi.com </b>
                            - FAQ
                        </h2>
                        <div className='div_divided'>
                            <div className='p_1'>
                                <p onClick={Faqfun}>Getting Started</p>
                                <p onClick={Faqfun2}>Product </p>
                                <p onClick={Faqfun3}>Payment</p>
                                <p onClick={Faqfun4}>General</p>
                                <p onClick={Faqfun5}>Customer Service</p>
                            </div>
                            <div className='p_2'>
                                {faqshow ?
                                    <div className='fade'>
                                        <h4 className='faq_h4'>What is Cupidmobi.com?
                                        </h4>
                                        <p className='div_p'>
                                            Cupidmobi.com delivers the most popular games in the world straight to your mobile device. We offer Html5 and Android games where you enjoy the best of
                                            arcade, sports and brain teasing games that guarantee hours of gaming entertainment!

                                        </p>
                                        <h4 className='faq_h4'>What do I receive with Cupidmobi.com?
                                        </h4>
                                        <p className='div_p'>
                                            An instant access to many premium games based on your location with the best mobile experience. You can access our
                                            platform from any device once connected to the internet. Bookmark your favorite games and play later.

                                        </p>
                                    </div>
                                    : ""}
                                {faqshow2 ?
                                    <div className='fade'>
                                        <h4 className='faq_h4'>What kind of games does Cupidmobi.com offer?                                    </h4>
                                        <p className='div_p'>
                                            Cupidmobi.com offers a unique mobile experience that showcases the best and latest Mobile games.

                                        </p>
                                        <h4 className='faq_h4'>What do I do if a game is not working or is unavailable?
                                        </h4>
                                        <p className='div_p'>
                                            Check your internet connection. You must be connected to the internet to enjoy uninterrupted games. Alternatively, you can try refreshing the service. If you still face troubleshooting issues, please get in touch with our Customer Care Team.

                                        </p>
                                        <h4 className='faq_h4'>How often are new games added?
                                        </h4>
                                        <p className='div_p'>
                                            We regularly spruce up our portfolio so there is always something new for you to play and enjoy. Our up-to-the-minute updates ensure you never miss out on the latest in global entertainment.

                                        </p>
                                    </div>
                                    : ""}
                                {faqshow3 ?
                                    <div className='fade'>
                                        <h4 className='faq_h4'>How did I get subscribed to Cupidmobi.com?
                                        </h4>
                                        <p className='div_p'>
                                            Mobile carrier billing subscription
                                        </p>
                                        <p className='div_p'>
                                            Subscribing to Cupidmobi.com through mobile carrier billing is only possible by registering on one of our promotional pages. We confirm your enrolment to our services by sending you an SMS message to your mobile phone.</p>
                                        <p className='div_p'>
                                            Credit card billing
                                        </p>
                                        <p className='div_p'>
                                            Subscribing to Cupidmobi.com through credit card billing is only possible by registering on one of our promotional pages where you have to create an account and enter your payment information.
                                        </p>
                                        <h4 className='faq_h4'>Is there a charge for using Cupidmobi.com?
                                        </h4>
                                        <p className='div_p'>
                                            You are charged the rate that is mentioned on the promotional page that you visited when you subscribed to the service. In case you subscribed through mobile carrier billing you can find the subscription charges in the welcome message you received upon subscribing and in the monthly SMS reminder you receive from us. In case you subscribed through credit card billing you can find the subscription charges in the welcome email you received upon subscribing and in the monthly payment confirmation email.
                                        </p>
                                    </div>
                                    : ""}
                                {faqshow4 ?
                                    <div className='fade'>
                                        <h4 className='faq_h4'>What is the minimum age criteria required to subscribe to Cupidmobi.com?
                                        </h4>
                                        <p className='div_p'>
                                            Our service offers games that is suitable for all ages. However, as a subscriber, you must be 18+ or have received permission from your parents or legal guardian, or anyone authorised to pay your bill.
                                        </p>
                                        <h4 className='faq_h4'>Which devices work with Cupidmobi.com?
                                        </h4>
                                        <p className='div_p'>
                                            Cupidmobi.com can be easily accessed from your desktop, mobile or tablet. The service is compatible with all mobile devices (smartphones and feature phones). The best user experience is through smartphones, and requires 2G and up.
                                        </p>
                                    </div>
                                    : ""}
                                {faqshow5 ?
                                    <div className='fade'>
                                        <h4 className='faq_h4'>How do I reach out to Customer Care?</h4>
                                        <p className='div_p'>
                                            Our dedicated Customer Care Team will be happy to answer all
                                            your questions and solve any issues. You can email us at support@Cupidmobi.com
                                            or use the Contact Us form.

                                        </p>
                                    </div>
                                    : ""}
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
