
import { Action } from 'redux';

export interface DataState {
    data: Array<string>;
}

export interface AddDummyToData extends Action {
    type: 'addDummyToData';
}

export type DataAction =
    | AddDummyToData;