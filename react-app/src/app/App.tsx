import React, { useState, useEffect } from 'react';
import { Container, LinearProgress } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/store';
import { WithLayout } from '../components/common/withLayout/WithLayout';
import { Footer } from '../components/common/footer/Footer';
import Error404 from '../components/common/error404/Error404';
import './App.css';
import { initializeAppTC } from '../store/reducers/app-reducer';
// import { GoogleMaps } from '../components/maps/Maps';
import { PATH } from '../const';

import { MainPage } from '../components/mainPage/MainPage';
import { Header } from '../components/common/header/Header';

export const App = () => {
    const [open, setOpen] = useState(false);

    // const status = useAppSelector(appStatusSelector);

    const dispatch = useAppDispatch();

    //Скорее всего это здесь не нужно???
    useEffect(() => {
        dispatch(initializeAppTC());
    }, []);

    return (
        <div className="App">
            <Header />
            {/* {status === 'loading' && <LinearProgress />} */}
            {/* <ErrorSnackbar /> */}
            <Container fixed>
                <Routes>
                    <Route
                        path="registration"
                        element={
                            <WithLayout>
                                <MainPage />
                            </WithLayout>
                        }
                    />

                    <Route
                        path="/*"
                        element={
                            <WithLayout>
                                <Error404 />
                            </WithLayout>
                        }
                    />
                </Routes>
            </Container>
            <Footer open={open} setOpen={setOpen} />
        </div>
    );
};
