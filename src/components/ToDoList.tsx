import React from 'react';
import { useRecoilValue } from 'recoil';
import { toDoSelector, toDoState } from '../recoil/atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

export default function ToDoList() {
  const toDos = useRecoilValue(toDoState)
  const [toDo, doing, done] = useRecoilValue(toDoSelector)
  console.log(toDo, doing, done)
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      {/* {toDos.map((currnet) => <ToDo id={currnet.id} text={currnet.text} category={currnet.category} />)} */}
      {/* {toDos.map((toDo) => <ToDo key={toDo.id} {...toDo} />)} */}
      <h2>To Do</h2>
      <ul>
        {toDo.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
      </ul>
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
      </ul>
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
      </ul>
    </div >
  );
}
