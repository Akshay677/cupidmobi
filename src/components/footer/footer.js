import React from 'react';
import Container from '@mui/material/Container';
import Link from 'next/link';


export default function Footer() {
    return (
        <div className='border'>
            <Container>
                <div className='footer_'>
                    <div>
                        <p className='footer__logo'>Cupidmobi.com</p>
                    </div>
                    <div className='footer_div'>
                        <Link href="/about">
                            <p>About</p>
                        </Link>
                        <Link href="/faq">
                            <p>FAQ</p>
                        </Link>
                        <Link href="/privacy">
                            <p>Privacy Policy</p>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}
