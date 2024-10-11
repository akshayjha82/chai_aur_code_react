import { createContext,useContext } from "react";

export const TodoContext = createContext({
  todos : [{
    id : 1,
    todo : "This is Todo",
    checked : false
  }],
  addTodo : (todo)=>{},
  deleteTodo : (id)=>{},
  updateTodo : (id,todo)=>{},
  checkedTodo : (id)=>{}
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
}