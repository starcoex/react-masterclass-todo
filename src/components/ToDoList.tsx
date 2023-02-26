import React from 'react';
import { useForm } from 'react-hook-form';
import { constSelector, useRecoilState } from 'recoil';
import styled from 'styled-components';
import { toDoState } from '../recoil/atoms';

interface IForm {
  toDo: string

}

export default function ToDoList() {
  const Form = styled.form`
    display: flex;
    flex-direction: column;
  `;
  // const toDoValue = useRecoilValue(toDoState)
  // const toDoModifiedFn = useSetRecoilState(toDoState)
  const [toDos, setToDos] = useRecoilState(toDoState)
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<IForm>()
  const handleVaild = ({ toDo }: IForm) => {

    setToDos((pre) => [{ id: Date.now(), text: toDo, category: "TO-DO" }, ...pre])
    setValue("toDo", "")
  }
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <Form onSubmit={handleSubmit(handleVaild)}>
        <input {...register("toDo", { required: "Please wirte a To Do" })} placeholder="Write a to do"></input>
        <button>Add</button>
        <ul>
          {toDos.map((currnet) => <li key={currnet.id}>{currnet.text}</li>)}
        </ul>
      </Form>
    </div >
  );
}
