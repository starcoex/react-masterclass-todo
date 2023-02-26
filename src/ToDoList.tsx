import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

interface IFormData {
  // [key: string]: string;
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  password1: string;
}

export default function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>({
    defaultValues: { email: 'naver.com' },
  });
  const onSubmit = (data: IFormData) => {
    if (data.password !== data.password1) {
      setError('password1', { message: 'xxx' }, { shouldFocus: true });
    }
    if (data.firstName === 'nico') {
      setError('firstName', { message: '가입불가' });
    }
  };
  // const { errors } = formState;
  // console.log(errors);
  const Form = styled.form`
    display: flex;
    flex-direction: column;
  `;

  return (
    <div>
      <h1>To Do</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('email', {
            required: true,
            minLength: { value: 4, message: 'shots' },
          })}
          placeholder='Email'
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register('firstName', {
            validate: (value) => (value.includes('nicoo') ? 'XXXXX' : true),
          })}
          placeholder='First Name'
        />
        <span>{errors.firstName?.message}</span>
        <input {...register('lastName')} placeholder='Last Name' />
        <input {...register('userName')} placeholder='User Name' />
        <input
          {...register('password', {
            required: '필수',
            minLength: {
              value: 5,
              message: '5글자 이상',
            },
          })}
          placeholder='Password'
        />
        <input
          {...register('password1', {
            required: '필수',
            minLength: {
              value: 5,
              message: '패스워드가 일치 하지 않습니다',
            },
          })}
          placeholder='Password Confirm'
        />
        <span>{errors?.password1?.message}</span>

        <button>Add</button>
      </Form>
    </div>
  );
}
