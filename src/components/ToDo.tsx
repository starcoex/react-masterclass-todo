import React from 'react'
import { useSetRecoilState } from 'recoil'
import { Categories } from '../enum/Category'
import { IToDo, toDoState } from '../recoil/atoms'

export default function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState)
  // const onClick = (newCategory: IToDo["category"]) => {
  //   console.log(newCategory)
  // }
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget: { name } } = event
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((todo) => todo.id === id)
      // const oldToDo = previous[targetIndex]
      const newToDo = { text, id, category: name as any }
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)]
    })
  }
  const handleDelete = (previous: string) => {
    if (window.confirm(`${previous} 할 일을 정말 삭제하시겠습니까?`)) {
      setToDos((oldToDos) => {
        const targetIndex = oldToDos.findIndex((oldToDo) => oldToDo.id === id)
        return [...oldToDos.slice(0, targetIndex), ...oldToDos.slice(targetIndex + 1)]
      })
    }
  }
  return (
    <li>
      <span> {text}</span>
      {/* {category !== "DOING" && <button onClick={() => onClick("DOING")}>Doing</button>}
      {category !== "TO-DO" && <button onClick={() => onClick("TO-DO")}>To Do</button>}
      {category !== "DONE" && <button onClick={() => onClick("DONE")}>Done</button>} */}
      {category !== Categories.DOING && <button name={Categories.DOING} onClick={onClick}>Doing</button>}
      {category !== Categories['TO-DO'] && <button name={Categories['TO-DO']} onClick={onClick}>To Do</button>}
      {category !== Categories.DONE && <button name={Categories.DONE} onClick={onClick}>Done</button>}
      <button onClick={() => handleDelete(text)}>지우기</button>
    </li>
  )
}
