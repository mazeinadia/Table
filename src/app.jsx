import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Store from '../src/store';


export default class AppRouter extends React.Component {
    render() {
        return (
 //           <Provider store={Store}>
                <div className="theme-classic">
                        <div >Hello</div>
                </div>
            //</Provider>
        );
    }
}