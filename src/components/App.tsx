import React from 'react';
import { connect } from 'react-redux';

import { DataState } from '../types/redux/dataTypes';

import { addTextToData } from '../store/actions/dataAction';

import styles from './App.module.scss';

const App: React.FC = props => {
    return (
        <div className={styles.app}>
            <h1>VK Media</h1>
            <h4>React Redux TypeScript Template</h4>
        </div>
    );
}

const mapStateToProps = (state: DataState) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, { addTextToData })(App);
