import React from 'react'
import { useForm } from 'react-hook-form'


export default function ToDoList() {
  const { register, watch } = useForm()
  return (
    <div>
      <h1>To Do</h1>
      <form >
        <input {...register("email")} placeholder='Email' />
        <input {...register("firstName")} placeholder='First Name' />
        <input {...register("lastName")} placeholder='Last Name' />
        <input {...register("userName")} placeholder='User Name' />
        <input {...register("password")} placeholder='Password' />
        <input {...register("password1")} placeholder='Password Confirm' />
        <button>Add</button>
      </form>
    </div>
  )
}
