import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';
import Modal from './components/Modal.jsx';
import React, { useState } from 'react';
import Counter from './components/counter.jsx';

function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
    console.log('onTodoDelete')
  }

  function cancelModal() {
    setShowModal(false);
  }

  function confirmModal() {
    setShowModal(false);
    console.log('confirmModal')
  }

  return (
   <div>
    <Title/>
    <div>
      <input type="text" onChange={(event) => {
        console.log(event.target.value)
      }} />
      <button onClick={() => setShowModal(true)}>Add todo</button>
    </div>
    <div className="todo__wrapper">
     <Todo title="Finish Frontend Simplified"/>
     <Todo title="Finish Interview Section"/>
     <Todo title="Land a 100k Jb"/>
   </div>
    {showModal && <Modal cancelModal={cancelModal} confirmModal={confirmModal} title="Confirm Delete?" />}
  </div>
  );    
}

export default App;
