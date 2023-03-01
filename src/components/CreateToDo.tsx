
import { faPlus, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { categoryState, toDoState } from '../recoil/atoms';
const Form = styled.form`
    display: flex;
    flex-direction: column;
    position:relative;
    width:100%;
    height:3rem;
    margin:0 auto;
    margin-bottom:1rem;
    & > *{
      height:100%
    }
input {
  width : 100%;
  padding-left:0.9rem;
  }
  button{
    position:absolute;
    right:0;
    width:3rem;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  `;

interface IForm {
  toDo: string
}

export default function CreateToDo() {
  const [toDos, setToDos] = useRecoilState(toDoState)
  const category = useRecoilValue(categoryState)
  const { register, handleSubmit, setValue } = useForm<IForm>()
  const handleVaild = ({ toDo }: IForm) => {
    setValue("toDo", "")
    setToDos((prev) => [{ id: Date.now(), text: toDo, category: category }, ...prev])
  }
  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos))
  }, [toDos])
  return (
    <Form onSubmit={handleSubmit(handleVaild)}>
      <input {...register("toDo", { required: "Please wirte a To Do" })} placeholder="Write a to do"></input>
      <button><FontAwesomeIcon icon={faPlus} /></button>
    </Form>
  )
}
