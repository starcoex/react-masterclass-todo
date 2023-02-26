import React from 'react'
import { useSetRecoilState } from 'recoil'
import { IToDo, toDoState } from '../recoil/atoms'

export default function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState)
  // const onClick = (newCategory: IToDo["category"]) => {
  //   console.log(newCategory)
  // }
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget: { name } } = event
    setToDos((previous) => {
      const targetIndex = previous.findIndex((todo) => todo.id === id)
      const oldToDo = previous[targetIndex]
      const newToDo = { text, id, category: name as any }
      console.log(oldToDo, newToDo)
      return [...previous.slice(0, targetIndex), newToDo, ...previous.slice(targetIndex + 1)]
    })
  }
  return (
    <li>
      <span> {text}</span>
      {/* {category !== "DOING" && <button onClick={() => onClick("DOING")}>Doing</button>}
      {category !== "TO-DO" && <button onClick={() => onClick("TO-DO")}>To Do</button>}
      {category !== "DONE" && <button onClick={() => onClick("DONE")}>Done</button>} */}
      {category !== "DOING" && <button name='DOING' onClick={onClick}>Doing</button>}
      {category !== "TO-DO" && <button name='TO-DO' onClick={onClick}>To Do</button>}
      {category !== "DONE" && <button name="DONE" onClick={onClick}>Done</button>}
    </li>
  )
}
