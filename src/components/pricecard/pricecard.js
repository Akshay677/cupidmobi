import React from 'react';


export default function Pricecard() {
    return (
        <div>
            <div className='grid-container'>
                <div className='grid-item'>
                    <div className='grid_p'>
                        <div className='grid_f'>
                            <p>Basic</p>
                            <span>Free</span>
                        </div>
                        <div className='price__item'>
                            <span>
                                <i className='icon'>✓</i>
                                7 days
                            </span>
                        </div>
                        <div className='price__item'>
                            <span>
                                <i className='icon'>✓</i>
                                720p Resolution
                            </span>
                        </div>
                        <div className='price__item'>
                            <span>
                                <i className='icon crose'>×</i>
                                Limited Availability
                            </span>
                        </div>
                        <div className='price__item'>
                            <span>
                                <i className='icon crose'>×</i>
                                Desktop Only
                            </span>
                        </div>
                        <div className='price__item'>
                            <span>
                                <i className='icon crose'>×</i>
                                Limited Support
                            </span>
                        </div>
                        <button className='price__btn'>Choose plan</button>
                    </div>
                </div>
                <div className='grid-item p_top'>
                    <div className='grid_p'>
                        <div className='grid_f'>
                            <p>Premium</p>
                            <span>$34.99
                                <sub>/ month</sub>
                            </span>
                        </div>
                        <div className='price__item'>
                            <span>
                                <i className='icon'>✓</i>
                                1 Month
                            </span>
                        </div>
                        <div className='price__item'>
                            <span>
                                <i className='icon'>✓</i>
                                Full HD
                            </span>
                        </div>
                        <div className='price__item'>
                            <span>
                                <i className='icon'>✓</i>
                                Lifetime Availability
                            </span>
                        </div>
                        <div className='price__item'>
                            <span>
                                <i className='icon crose'>×</i>
                                TV & Desktop
                            </span>
                        </div>
                        <div className='price__item'>
                            <span>
                                <i className='icon crose'>×</i>
                                24/7 Support
                            </span>
                        </div>
                        <button className='price__btn p_btn'>Choose plan</button>
                    </div>
                </div>
                <div className='grid-item'>
                    <div className='grid_p'>
                        <div className='grid_f'>
                            <p>Cinematic</p>
                            <span>$49.99
                                <sub>/ month</sub>
                            </span>
                        </div>
                        <div className='price__item'>
                            <span>
                                <i className='icon'>✓</i>
                                2 Months
                            </span>
                        </div>
                        <div className='price__item'>
                            <span>
                                <i className='icon'>✓</i>
                                Ultra HD
                            </span>
                        </div>
                        <div className='price__item'>
                            <span>
                                <i className='icon '>✓</i>
                                Lifetime Availability
                            </span>
                        </div>
                        <div className='price__item'>
                            <span>
                                <i className='icon '>✓</i>
                                Any Device
                            </span>
                        </div>
                        <div className='price__item'>
                            <span>
                                <i className='icon '>✓</i>
                                24/7 Support
                            </span>
                        </div>
                        <button className='price__btn'>Choose plan</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
