import { atom, selector } from 'recoil';

export interface IToDo {
  id: number;
  text: string;
  category: 'TO-DO' | 'DOING' | 'DONE';
}

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});
export const categoryState = atom({
  key: 'category',
  default: 'TO-DO',
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
    // if (category === 'TO-DO')
    //   return toDos.filter((toDo) => toDo.category === 'TO-DO');
    // if (category === 'DOING')
    //   return toDos.filter((toDo) => toDo.category === 'DOING');
    // if (category === 'DONE')
    //   return toDos.filter((toDo) => toDo.category === 'DONE');
  },
});
