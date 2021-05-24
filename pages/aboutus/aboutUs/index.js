import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {styles} from './AboutUs.css'

const AboutUs = () => {
    let settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: 'linear',

    }
    return (
        <Slider {...settings}>
            <div className = {styles.cardWrapper}>
                <div className = {styles.card}>
                    <div className = {styles.cardImage}>
                        <img src = ''></img>
                    </div>
                    <ul className = {styles.socialIcons}>
                        <li>
                            <a hrf = '#'><i className = 'fa fa-facebook'></i></a>
                        </li>
                        <li>
                            <a hrf = '#'><i className = 'fa fa-instagram'></i></a>
                        </li>
                    </ul>
                    <div className = {styles.details}>
                        <h2>ngoc huyen <span className ={styles.jobTitle}>Ui Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className = {styles.cardWrapper}>
                <div className = {styles.card}>
                    <div className = {styles.cardImage}>
                        <img src = ''></img>
                    </div>
                    <ul className = {styles.socialIcons}>
                        <li>
                            <a hrf = '#'><i className = 'fa fa-facebook'></i></a>
                        </li>
                        <li>
                            <a hrf = '#'><i className = 'fa fa-instagram'></i></a>
                        </li>
                    </ul>
                    <div className = {styles.details}>
                        <h2>ngoc huyen <span className ={styles.jobTitle}>Ui Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className = {styles.cardWrapper}>
                <div className = {styles.card}>
                    <div className = {styles.cardImage}>
                        <img src = ''></img>
                    </div>
                    <ul className = {styles.socialIcons}>
                        <li>
                            <a hrf = '#'><i className = 'fa fa-facebook'></i></a>
                        </li>
                        <li>
                            <a hrf = '#'><i className = 'fa fa-instagram'></i></a>
                        </li>
                    </ul>
                    <div className = {styles.details}>
                        <h2>ngoc huyen <span className ={styles.jobTitle}>Ui Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className = {styles.cardWrapper}>
                <div className = {styles.card}>
                    <div className = {styles.cardImage}>
                        <img src = ''></img>
                    </div>
                    <ul className = {styles.socialIcons}>
                        <li>
                            <a hrf = '#'><i className = 'fa fa-facebook'></i></a>
                        </li>
                        <li>
                            <a hrf = '#'><i className = 'fa fa-instagram'></i></a>
                        </li>
                    </ul>
                    <div className = {styles.details}>
                        <h2>ngoc huyen <span className ={styles.jobTitle}>Ui Developer</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default AboutUs
