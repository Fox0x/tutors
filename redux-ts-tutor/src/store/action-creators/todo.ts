import axios from 'axios';
import { Dispatch } from 'redux';
import { TodoAction, TodoActionTypes } from './../../types/todo';


export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({
                type: TodoActionTypes.FETCH_TODOS
            });
            const responce = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _page: page,
                    _limit: limit
                },

            });
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_SUCCESS,
                payload: responce.data as any[],
            });
        } catch (error) {
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: 'Произошла ошибка при загрузке todo',
            });
        };
    };
};

export const setTodosPage = (page: number): TodoAction => {
    return {
        type: TodoActionTypes.SET_TODO_PAGE,
        payload: page
    }

};