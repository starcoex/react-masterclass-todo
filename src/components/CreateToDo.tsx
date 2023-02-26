import React from 'react'
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { toDoState } from '../recoil/atoms';
const Form = styled.form`
    display: flex;
    flex-direction: column;
  `;

interface IForm {
  toDo: string
}

export default function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState)
  const { register, handleSubmit, setValue } = useForm<IForm>()
  const handleVaild = ({ toDo }: IForm) => {
    setToDos((pre) => [{ id: Date.now(), text: toDo, category: "TO-DO" }, ...pre])
    setValue("toDo", "")
  }
  return (
    <Form onSubmit={handleSubmit(handleVaild)}>
      <input {...register("toDo", { required: "Please wirte a To Do" })} placeholder="Write a to do"></input>
      <button>Add</button>
    </Form>
  )
}
