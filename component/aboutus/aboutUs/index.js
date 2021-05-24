import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './index.module.css'
import clsx from 'clsx';

const AboutUs = () => {
    let settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        cssEase: 'linear',
    }
    return (
        <div className = {styles.cardContainer}>
        <Slider {...settings} >
            <div className = {styles.cardWrapper}>
                <div className = {styles.card}>
                    <div className = {styles.cardImage}>
                        <img className = {styles.img} src = '../images/khai.jpg' alt = 'picture of author'></img>
                    </div>
                    <ul className = {styles.socialIcons}>
                        <li className = {styles.liStyles}>
                            <a className = {styles.aStyles} href = 'https://www.facebook.com/leo.alan.5.7'><i className={clsx(styles.aStyles,'fab fa-facebook')}></i></a>
                        </li>
                         <li className = {styles.liStyles}>
                           <a className = {styles.aStyles} href = 'https://www.instagram.com/___leo.aslan___/'><i className={clsx(styles.aStyles, 'fab fa-instagram-square')}></i></a>
                         </li> 
                    </ul>
                    <div className = {styles.details}>
                        <h2>Tran Hung Quoc Khai <span className ={styles.jobTitle}>Ui Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className = {styles.cardWrapper}>
                <div className = {styles.card}>
                    <div className = {styles.cardImage}>
                        <img className = {styles.img} src = '../images/nh.jpg'></img>
                    </div>
                    <ul className = {styles.socialIcons}>
                        <li className = {styles.liStyles} >
                            <a className = {styles.aStyles} href = 'https://www.facebook.com/ftthzZ'><i className={clsx('fab fa-facebook')}></i></a>
                        </li>
                        <li className = {styles.liStyles}>
                            <a className = {styles.aStyles} href = 'https://www.instagram.com/erinabbey_/'><i className={clsx( 'fab fa-instagram-square')}></i></a>
                        </li>
                    </ul>
                    <div className = {styles.details}>
                        <h2>Nguyen Ngoc Huyen
                            <span className ={styles.jobTitle}>Ui Developer</span>
                            </h2>
                    </div>
                </div>
            </div>
            <div className = {styles.cardWrapper}>
                <div className = {styles.card}>
                    <div className = {styles.cardImage}>
                        <img className = {styles.img} src = '../images/trang.jpg'></img>
                    </div>
                    <ul className = {styles.socialIcons}>
                        <li className = {styles.liStyles}>
                            <a className = {styles.aStyles}  href = 'https://www.facebook.com/trangmoon309'><i className={clsx( 'fab fa-facebook')}></i></a>
                        </li>
                        <li className = {styles.liStyles}>
                            <a  className = {styles.aStyles} href = 'https://www.instagram.com/30thangs9/'><i className={clsx( 'fab fa-instagram-square')}></i></a>
                        </li>
                    </ul>
                    <div className = {styles.details}>
                        <h2>Huynh Phuong Trang<span className ={styles.jobTitle}>Ui Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className = {styles.cardWrapper}>
                <div className = {styles.card}>
                    <div className = {styles.cardImage}>
                        <img className = {styles.img} src = '../images/quynh.jpg'></img>
                    </div>
                    <ul className = {styles.socialIcons}>
                        <li className = {styles.liStyles}>
                            <a className = {styles.aStyles} href = 'https://www.facebook.com/ngockhanhquynh.hoang'><i className={clsx( 'fab fa-facebook')}></i></a>
                        </li>
                        <li className = {styles.liStyles}>
                            <a className = {styles.aStyles} href = 'https://www.instagram.com/__13mar/'><i className={clsx( 'fab fa-instagram-square')}></i></a>
                        </li>
                    </ul>
                    <div className = {styles.details}>
                        <h2>Khanh Quynh<span className ={styles.jobTitle}>Ui Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className = {styles.cardWrapper}>
                <div className = {styles.card}>
                    <div className = {styles.cardImage}>
                        <img className = {styles.img} src = '../images/khai.jpg' alt = 'picture of author'></img>
                    </div>
                    <ul className = {styles.socialIcons}>
                        <li className = {styles.liStyles}>
                            <a className = {styles.aStyles} href = 'https://www.facebook.com/leo.alan.5.7'><i className={clsx(styles.aStyles,'fab fa-facebook')}></i></a>
                        </li>
                         <li className = {styles.liStyles}>
                           <a className = {styles.aStyles} href = 'https://www.instagram.com/___leo.aslan___/'><i className={clsx(styles.aStyles, 'fab fa-instagram-square')}></i></a>
                         </li> 
                    </ul>
                    <div className = {styles.details}>
                        <h2>Tran Hung Quoc Khai <span className ={styles.jobTitle}>Ui Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className = {styles.cardWrapper}>
                <div className = {styles.card}>
                    <div className = {styles.cardImage}>
                        <img className = {styles.img} src = '../images/nh2.jpg'></img>
                    </div>
                    <ul className = {styles.socialIcons}>
                        <li className = {styles.liStyles} >
                            <a className = {styles.aStyles} href = 'https://www.facebook.com/ftthzZ'><i className={clsx('fab fa-facebook')}></i></a>
                        </li>
                        <li className = {styles.liStyles}>
                            <a className = {styles.aStyles} href = 'https://www.instagram.com/erinabbey_/'><i className={clsx( 'fab fa-instagram-square')}></i></a>
                        </li>
                    </ul>
                    <div className = {styles.details}>
                        <h2>Nguyen Ngoc Huyen
                            <span className ={styles.jobTitle}>Ui Developer</span>
                            </h2>
                    </div>
                </div>
            </div>
            <div className = {styles.cardWrapper}>
                <div className = {styles.card}>
                    <div className = {styles.cardImage}>
                        <img className = {styles.img} src = '../images/trang2.jpg'></img>
                    </div>
                    <ul className = {styles.socialIcons}>
                        <li className = {styles.liStyles}>
                            <a className = {styles.aStyles}  href = 'https://www.facebook.com/trangmoon309'><i className={clsx( 'fab fa-facebook')}></i></a>
                        </li>
                        <li className = {styles.liStyles}>
                            <a  className = {styles.aStyles} href = 'https://www.instagram.com/30thangs9/'><i className={clsx( 'fab fa-instagram-square')}></i></a>
                        </li>
                    </ul>
                    <div className = {styles.details}>
                        <h2>Huynh Phuong Trang<span className ={styles.jobTitle}>Ui Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className = {styles.cardWrapper}>
                <div className = {styles.card}>
                    <div className = {styles.cardImage}>
                        <img className = {styles.img} src = '../images/quynh2.jpg'></img>
                    </div>
                    <ul className = {styles.socialIcons}>
                        <li className = {styles.liStyles}>
                            <a className = {styles.aStyles} href = 'https://www.facebook.com/ngockhanhquynh.hoang'><i className={clsx( 'fab fa-facebook')}></i></a>
                        </li>
                        <li className = {styles.liStyles}>
                            <a className = {styles.aStyles} href = 'https://www.instagram.com/__13mar/'><i className={clsx( 'fab fa-instagram-square')}></i></a>
                        </li>
                    </ul>
                    <div className = {styles.details}>
                        <h2>Khanh Quynh<span className ={styles.jobTitle}>Ui Developer</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
        
        </div>
    )
}

export default AboutUs
