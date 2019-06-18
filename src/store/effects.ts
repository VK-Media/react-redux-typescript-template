import { ThunkAction } from 'redux-thunk';
import { ApplicationState, ApplicationAction } from './types';

import { resetSelectedModules } from './actions';

type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>;

export const requestCss = (): Effect => (dispatch, getState) => {
    const selectedModules = getState().selectedModules;
    const baseUrl: string = process.env.API_BASE_URL || 'http://localhost:5002';
    let url: string = `${baseUrl}/css?`;

    selectedModules.forEach(selectedModule => {
        url += `${selectedModule}=1&`;
    });

    url = url.substring(0, url.length - 1);

    window.open(url);
    dispatch(resetSelectedModules());
};