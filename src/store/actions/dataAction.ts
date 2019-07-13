import { AddTextToData } from '../../types/redux/dataTypes';

export const addTextToData = (text: string): AddTextToData => ({
    type: 'addTextToData',
    payload: text
});