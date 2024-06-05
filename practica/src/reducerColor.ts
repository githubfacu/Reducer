import { ActionType, StateType } from "./types"


export const reducerColor = (state: StateType, action: ActionType) => {

    switch (action.type) {
        case 'cambiar bgColor':
            return {...state, bgColor: action.payload}

        case 'cambiar color':
            return {...state, color: action.payload}

        case 'cambiar fuente':
            return {...state, fuente: action.payload}

        default:
            return state
    }
}