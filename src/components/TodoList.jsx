import { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="container">
      <div className="todo-app card">
        <h1 className="todo-title">할 일 목록</h1>
        
        <div className="todo-input-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="새로운 할 일을 입력하세요..."
            className="todo-input"
          />
          <button onClick={addTodo} className="add-button">
            추가
          </button>
        </div>

        <div className="todo-list">
          {todos.length === 0 ? (
            <p className="empty-message">할 일이 없습니다. 새로운 할 일을 추가해보세요!</p>
          ) : (
            todos.map(todo => (
              <div key={todo.id} className={`todo-item bounce-enter ${todo.completed ? 'completed' : ''}`}>
                <div className="todo-content">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="todo-checkbox"
                  />
                  <span className="todo-text">{todo.text}</span>
                </div>
                <button 
                  onClick={() => deleteTodo(todo.id)}
                  className="delete-button"
                >
                  삭제
                </button>
              </div>
            ))
          )}
        </div>

        {todos.length > 0 && (
          <div className="todo-stats">
            <span>총 {todos.length}개 | 완료 {todos.filter(todo => todo.completed).length}개</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoList;