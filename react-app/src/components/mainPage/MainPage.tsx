import React from 'react';
import { SignUp } from '../signup/SignUp';
import classes from './MainPage.module.scss';

export const MainPage: React.FC = React.memo(() => {
    return (
        <div className={classes.mainBlock}>
            Hello friend!
            <SignUp />
        </div>
    );
});
