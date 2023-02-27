import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryState, toDoSelector, toDoState } from '../recoil/atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

export default function ToDoList() {
  // const toDos = useRecoilValue(toDoState)
  const [category, setCategory] = useRecoilState(categoryState)
  const toDos = useRecoilValue(toDoSelector)

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    console.log(event)
    const { currentTarget: { value } } = event
    console.log(value)
    setCategory(value)
  }
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      {/* {toDos.map((currnet) => <ToDo id={currnet.id} text={currnet.text} category={currnet.category} />)} */}
      {/* {toDos.map((toDo) => <ToDo key={toDo.id} {...toDo} />)} */}
      <h2>To Do</h2>
      <select onInput={onInput} value={category}>
        <option value='TO-DO'>toDo</option>
        <option value='DOING'>Doing</option>
        <option value='DONE'>Done</option>
      </select>
      {toDos?.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
      {/* {category === "TO-DO" && toDo.map((aToDo) => <ToDo key={aToDo.id}{...aToDo} />)}
      {category === "DOING" && doing.map((aToDo) => <ToDo key={aToDo.id}{...aToDo} />)}
      {category === "DONE" && done.map((aToDo) => <ToDo key={aToDo.id}{...aToDo} />)} */}
      {/* <ul>
        {toDo.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
      </ul>
      <hr />

      <h2>Done</h2>
      <ul>
        {done.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
      </ul>
      <hr /> */}

    </div >
  );
}
