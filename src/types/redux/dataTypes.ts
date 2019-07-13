
import { Action } from 'redux';

export interface DataState {
    data: Array<string>;
}

export interface AddTextToData extends Action {
    type: 'addTextToData';
    payload: string
}

export type DataAction =
    | AddTextToData;