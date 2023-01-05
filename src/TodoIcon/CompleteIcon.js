import React from 'react';
import { TodoIcon } from '.';

function CompleteIcon({ completed, onComplete }){
    return (
        <TodoIcon 
            type='check'
            color={completed ? 'rgba(11, 200, 194, 1)' : 'gray'}
            onClick={onComplete}
        />
    );
}

export {CompleteIcon} ;