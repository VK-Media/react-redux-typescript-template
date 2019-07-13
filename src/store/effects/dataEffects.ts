import { ThunkAction } from 'redux-thunk';
import { DataState, DataAction } from '../../types/redux/dataTypes';

import dataApi from '../../apis/dataApi';

import { addTextToData } from '../actions';

type Effect = ThunkAction<any, DataState, any, DataAction>;

export const requestData = (): Effect => async (dispatch, getState) => {
    let response: string;

    response = await dataApi.get('/data');

    dispatch(addTextToData(response));
};