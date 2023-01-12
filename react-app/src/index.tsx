import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </BrowserRouter>,

    document.getElementById('root'),
);

serviceWorker.unregister();
