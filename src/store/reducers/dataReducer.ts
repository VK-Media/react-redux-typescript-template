import produce from 'immer';

import { DataState, DataAction } from '../../types/redux/dataTypes';

export const initialState: DataState = {
    data: []
}

const reducer = (state = initialState, action: DataAction) => {
    switch (action.type) {
        case "addTextToData":
            return produce(state, draft => {
                draft.data.push(action.payload);
            });
        default:
            return state;
    }
}

export default reducer;