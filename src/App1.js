import { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { createTodo , removeTodo } from './slice/todosSlice';

// 1. 匯入 useDispatch
// 2. 將剛剛建立的 action 匯入

const initState = {
  id: '',
  text: '',
};

function TodoList() {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: '這是一段話 copy'
  //   }
  // ]);
  const todos = useSelector((state)=>{
    return state.todos
  })
  const [newTodoText, setNewTodoText] = useState(''); 
  const [editState, setEditState] = useState(initState);
  const dispatch = useDispatch();

  function addTodo() {
    dispatch(createTodo({
      id: new Date().getTime(),
      text: newTodoText,
    }));
    setNewTodoText('');
  }

  const editTodo = (e) => {
    // setEditState({
    //   ...editState,
    //   text: e.target.value,
    // });
  }

  const saveEdit = (id) => {
    // const index = todos.findIndex((todo) => todo.id === id);
    // const newTodo = [...todos];
    // newTodo[index] = editState;
    // setTodos(newTodo);
    // setEditState(initState);
  }
  const cancelEdit = () => {
    // setEditState(initState);
  }

  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  }

  return (
    <div>
      <input type='text' value={newTodoText} onChange={(e) => 
        setNewTodoText(e.target.value)
      }/>
      <button type='button' onClick={() => addTodo()}>
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id !== editState.id && (
              <div>
                {todo.text}
                <button
                  type='button'
                  onClick={() => {
                    setEditState({
                      text: todo.text,
                      id: todo.id,
                    });
                  }}
                >
                  編輯
                </button>
                <button
                  type='button'
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                >
                  刪除
                </button>
              </div>
            )}
            {todo.id === editState.id && (
              <div>
                <input
                  type='text'
                  value={editState.text}
                  onChange={(e) => editTodo(e)}
                />
                <button type='button' onClick={() => saveEdit(todo.id)}>
                  確認
                </button>
                <button type='button' onClick={() => cancelEdit()}>
                  取消
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
