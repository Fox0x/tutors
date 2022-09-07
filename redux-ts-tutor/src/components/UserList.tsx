import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const UserList: React.FC = () => {
    const { users, loading, error } = useTypedSelector((state) => state.user);
    const { fetchUsers } = useActions();

    useEffect(() => {
        fetchUsers();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (error) return <div>{error}</div>;
    if (loading) return <div>Loading...</div>;
    return (
        <div>
            {Array.from(users).map((user: any) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
};
