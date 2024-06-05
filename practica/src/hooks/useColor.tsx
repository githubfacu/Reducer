import { useReducer } from 'react'
import { reducerColor } from '../reducerColor';
import { ActionType, StateType } from '../types';

const initialValue: StateType = {
    color: 'black',
    bgColor: 'white',
    fuente: 'Verdana'
}

export const useColor = () => {

    const [propiedades, dispatch] = useReducer(reducerColor, initialValue);

    const cambiarBgColor = (bgColor: string) => {
		const action: ActionType = {
			type: 'cambiar bgColor',
			payload: bgColor,
		};

		dispatch(action);
	};

    const cambiarColor = (color: string) => {
		const action: ActionType = {
			type: 'cambiar color',
			payload: color,
		};

		dispatch(action);
	};

    const cambiarFuente = (fuente: string) => {
		const action: ActionType = {
			type: 'cambiar fuente',
			payload: fuente,
		};

		dispatch(action);
	};


  return { cambiarBgColor, cambiarColor, cambiarFuente, propiedades }
}
