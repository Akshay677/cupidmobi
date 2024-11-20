import React from 'react'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Pricecard from '../../components/pricecard/pricecard';
import Container from '@mui/material/Container';

export default function Signin() {
  return (
    <div>
      <Header />
      <Container>
        <div>
          <div className='div_box_si'>
            <div className='box_signin'>
              <input type='email' placeholder='Email' className='input_field' />
              <input type='password' placeholder='Password' className='input_field' />
              <div className='check'>
                <input type='checkbox' />
                <span className='remberme'>Remember Me</span>
              </div>
              <button className='header__sign-in si'>Sign in</button>
              <p className='sign__delimiter'>or</p>
              <p className='sign__text'>Don't have an account?{" "}

                <span className='l_color'>Sign up!</span>
              </p>

              <p className='sign__text l_color'>Forgot password?</p>
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
        </div>
      </Container>
      <Footer />
    </div>
  )
}
