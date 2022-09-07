import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

export const TodoList: React.FC = () => {
    const { todos, loading, error, page, limit } = useTypedSelector(
        (state) => state.todo
    );
    const { fetchTodos, setTodosPage } = useActions();

    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        fetchTodos(page, limit);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    if (error) return <div>{error}</div>;
    if (loading) return <div>Loading...</div>;
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <p key={todo.id}>
                        {todo.id} - {todo.title}
                    </p>
                );
            })}

            <div
                style={{
                    display: 'flex',
                }}>
                {pages.map((p) => {
                    return (
                        <div
                            onClick={() => setTodosPage(p)}
                            style={{
                                border:
                                    p === page
                                        ? '2px solid green'
                                        : '1px solid gray',
                                cursor: 'pointer',
                                margin: '10px',
                            }}
                            key={p}>
                            {p}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
