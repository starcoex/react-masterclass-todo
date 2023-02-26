import { atom } from 'recoil';

export interface IToDo {
  id: number;
  text: string;
  category: 'TO-DO' | 'DOING' | 'DONE';
}

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});
