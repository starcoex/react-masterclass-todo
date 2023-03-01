
import { faCommentAlt, faLightbulb, faMoon, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Categories } from '../enum/Category';
import { categoriesState, categoryState, isLightState, toDoSelector, toDoState } from '../recoil/atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import { Helmet } from "react-helmet"

const Container = styled.div`
padding: 0 2rem;
max-width:30rem;
margin: 0 auto;
hr{
  margin: 2rem auto;
}
`
const Header = styled.header`
height:8rem;
display:flex;
align-items:center;
justify-content:center;
`
const Title = styled.h1`
font-size:2.4rem;
font-weight:600;
color:${props => props.theme.accentColor};
`
const Toggle = styled.button`
display:flex;
align-items:center;
justify-content:center;
position:fixed;
top:1rem;
right:1rem;
width:3rem;
height:3rem;
padding:0;
font-size:1.6rem;
border:none;
border-radius:50%;
background-color:${props => props.theme.cardBgColor};
color:${props => props.theme.accentColor};
box-shadow: 0 0.2rem 0.5rem rgba(10, 10, 10, 0.1);
`
const CategoriesContainer = styled.div`
display:grid;
grid-template-columns:repeat(4, 1fr);
gap:0.6rem;
`
const CateroriesItem = styled.div`
display:flex;
align-items:flex-start;
justify-content:space-between;
flex-direction:column;
border-radius:0.7rem;
button{
  width:100%;
  height:100%;
  border:none;
  background-color:${props => props.theme.bgColor};
  color:${props => props.theme.textColor};
  font-size:0.9rem;
  align-items:center; 
  justify-content:center;
  gap:0.2rem;
  }
button[disabled]{
  border:0.2rem solid ${props => props.theme.accentColor};
  font-weight:600;
  
}

`

export default function ToDoList() {
  const toDos = useRecoilValue(toDoSelector)
  const [category, setCategory] = useRecoilState(categoryState)
  const [categories, setCategories] = useRecoilState(categoriesState)
  const [isLigth, setIsLigth] = useRecoilState(isLightState)
  const toggleTheme = () => {
    setIsLigth((prev) => !prev)
  }
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const { currentTarget: { value } } = event
    setCategory(value as any)
  }
  const onClick = (category: string) => {
    setCategory(category)
  }
  // let categoriesArr = Object.keys(categories).map((item) => categories[item])

  const addCategory = () => {
    const newCategory = prompt("New Category Add", "")
    if (newCategory) {
      //   if (Object.keys(categories).map((item) => item.includes(newCategory))) {
      //     alert("같은 카테고리가 이미 있어서 추가할 수 없습니다.")
      //     return
      //   }
      if (categories.includes(newCategory)) {
        alert("같은 카테고리가 이미 있어서 추가할 수 없습니다.")
        return
      }
      setCategories([...categories, newCategory])
      setCategory(newCategory)
    }
  }
  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories))
  }, [categories])

  return (
    <>
      <Container>
        <Toggle onClick={toggleTheme}><FontAwesomeIcon icon={isLigth ? faMoon : faLightbulb} /></Toggle>
        <Helmet ><title>To Do - {category}</title></Helmet>
        <Header><Title>To Do</Title></Header>
        <CategoriesContainer>
          {/* {Object.keys(categories).map((item) => categories[item])} */}
          {categories.map((item) => <CateroriesItem key={item}>
            <button disabled={item === category} onClick={() => onClick(item)}>{item}</button>
          </CateroriesItem>)}
          <CateroriesItem>
            <button onClick={addCategory}><FontAwesomeIcon icon={faCommentAlt} /></button>
          </CateroriesItem>
        </CategoriesContainer>
        <hr />
        <CreateToDo />

        {/* <select onInput={onInput} value={category}> */}
        {/* <option value={Categories['TO-DO']}>ToDo</option>
          <option value={Categories['DOING']}>Doing</option>
          <option value={Categories.DONE}>Done</option> */}
        {/* <option value={categories[0]}>ToDo</option>
          <option value={categories[1]}>Doing</option>
          <option value={categories[2]}>Done</option> */}
        {/* {categories.map((item) => <option value={item}>{item}</option>)}
        </select> */}
        {toDos?.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
        {/* <button>지우기</button> */}
      </Container>
    </ >
  );
}
