import React, { useState } from 'react';
import Logo from '../../../assets/img/logo.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import classes from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../../const';

export const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <header className={classes.headerSection}>
            <div className={classes.container}>
                <div className={classes.block_1}>
                    <div className={classes.location} onClick={() => navigate(PATH.LOCATION)}>
                        <LocationOnIcon fontSize="small" />
                        <div>Minsk city</div>
                    </div>
                    <div className={classes.storeInfo}>
                        <ul className={classes.benefits}>
                            <li>Payment</li>
                            <li>Delivery</li>
                            {/*up ===> &#9650;*/}
                            <li className={classes.more}>More &#9660;</li>
                        </ul>
                        <div className={classes.contacts}>
                            <div className={classes.phone}>
                                <PhoneAndroidIcon fontSize="small" />
                                <span>+7(999) 999-99-99</span>
                            </div>
                            <div>More &#9660;</div>
                        </div>
                        <div className={classes.hours}>
                            <AccessTimeIcon fontSize="small" />
                            <div className={classes.hours_time}>
                                <div>contact-center</div>
                                <div>8.00-20.00</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.block_2}>
                    <div className={classes.headerLogo}>
                        <img src={Logo} className={classes.logo} alt="logo" />
                    </div>
                    <div className={classes.searchField}></div>
                </div>
            </div>
        </header>
    );
};
