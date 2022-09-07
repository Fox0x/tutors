import axios from 'axios';
import { Dispatch } from 'redux';
import { UserAction, UserActionTypes } from './../../types/user';



export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({
                type: UserActionTypes.FETCH_USERS,
            });
            const responce = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({
                type: UserActionTypes.FETCH_USERS_SUCCESS,
                payload: responce.data as any[],
            });
        } catch (error) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей',
            });
        };
    };
};