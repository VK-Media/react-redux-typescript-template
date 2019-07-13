import React from 'react';
import { connect } from 'react-redux';

import { DataState } from '../types/redux/dataTypes';

import { addTextToData } from '../store/actions/dataAction';

const App: React.FC = props => {
    return (
        <div className="app"></div>
    );
}

const mapStateToProps = (state: DataState) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, { addTextToData })(App);
