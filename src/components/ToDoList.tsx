import React from 'react';
import { useRecoilValue } from 'recoil';
import { toDoState } from '../recoil/atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

export default function ToDoList() {
  const toDos = useRecoilValue(toDoState)
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      {/* {toDos.map((currnet) => <ToDo id={currnet.id} text={currnet.text} category={currnet.category} />)} */}
      {toDos.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
    </div >
  );
}
