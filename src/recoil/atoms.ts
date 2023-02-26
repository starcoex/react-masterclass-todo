import { atom } from 'recoil';

interface IToDo {
  id: number;
  text: string;
  category: 'TO-DO' | 'DOING' | 'DONE';
}

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});
