import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.scss';
import App from './Components/App/App';
import MediaContextProvider from './Context/MediaStore';
import AuthContextProvider from './Context/AuthStore';
import { Provider } from 'react-redux'
import { store } from './Redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <AuthContextProvider>
            <MediaContextProvider>
                <App/>
            </MediaContextProvider>
        </AuthContextProvider>

        {/* <Provider store={store}>
            <App />
        </Provider> */}


    </>
);


