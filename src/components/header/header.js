"use client"
import React, { useState } from 'react'
import Container from '@mui/material/Container';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Link from 'next/link';

export default function Header() {
    const [show, setshow] = useState(false);
    const Showfun = () => {
        setshow(!show)
    }
    return (
        <div>
            <div className='header'>
                <div className='header__top'>
                    <Container>
                        <div className='row'>
                            <div className='pull-left '>
                                Sam Media B.V.
                                <span className='hidden-xs'> Van Diemenstraat 356, 1013 CR, Amsterdam, The Netherlands</span>
                            </div>
                            <div className='pull-right'>
                                <div>+31 20 570 3170</div>
                                <div>info@Cupidmobi.com</div>
                            </div>
                        </div>
                    </Container>
                </div>
                <Container>
                    <div className='row'>
                        <div className='header_height'>
                            <Link href="/" className='link_'>
                                <div className='header__logo'>
                                    Cupidmobi.com
                                </div>
                            </Link>
                            <div className='nav_item'>
                                <p className='header__nav-link'>GAMES</p>
                                <p className='header__nav-link'>VIDEOS</p>
                                <p className='header__nav-link'>APPS</p>
                                <MoreHorizIcon className='header__nav-link' onClick={Showfun} />
                            </div>
                            {show ?
                                <div className='app_box'>
                                    <Link href="/about">
                                        <p className='p_ra'>About</p>
                                    </Link>
                                    <Link href="/faq">
                                        <p className='p_ra'>FAQ</p>
                                    </Link>
                                    <Link href="/privacy">
                                        <p className='p_ra'>Privacy policy</p>
                                    </Link>
                                    <Link href="/cookies">
                                        <p className='p_ra'>Cookie policy</p>
                                    </Link>
                                    <Link href="/contact">
                                        <p className='p_ra'>Contact Us</p>
                                    </Link>
                                </div>
                                : ""}
                            <div className='btn_style'>
                                <Link href="/signin" className='link_style'>
                                    <button className='header__sign-in'>SIGN IN</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
