import { Categories } from './../enum/Category';
import { atom, selector } from 'recoil';

export let categories: string[] = ['TO-DO', 'DOING', 'DONE'];

export interface IToDo {
  id: number;
  text: string;
  category: string;
  // category: Categories;
}
export const isLightState = atom<boolean>({
  key: 'isLightState',
  default: JSON.parse(localStorage.getItem('isLight') ?? JSON.stringify(true)),
});

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: JSON.parse(localStorage.getItem('toDos') ?? '[]'),
});
export const categoryState = atom<string>({
  key: 'category',
  default: categories[0],
  // default: Categories['TO-DO'],
});
export const categoriesState = atom<string[]>({
  key: 'categoriesState',
  default: JSON.parse(
    localStorage.getItem('categories') ?? JSON.stringify(categories)
    // localStorage.getItem('categories') ?? JSON.stringify(Categories)
  ),
});
export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
