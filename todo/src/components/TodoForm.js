import React from 'react';

const TodoForm = props => {
    return (
        <div className='form-container'>
            <form autoComplete='off'>
                <input type="text"
                    name="todoItem"
                    placeholder='...Todo'/>
                <button>Add Todo</button>
            </form>
            <button>Clear Completed</button>
        </div>
    )
}

export default TodoForm;