"use client";

import { Todo } from "@prisma/client";
import styles from "./TodoItem.module.css";
import { IoCheckboxOutline } from "react-icons/io5";

interface Props {
    todo: Todo
    toggleTodo: (id: string, completed: boolean) => Promise<Todo | void>
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
    return (
        <div className={todo.completed ? styles.todoDone : styles.todoPending}>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
                <div
                    onClick={() => toggleTodo(todo.id, !todo.completed)}
                    className={`
                    flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 bg-blue-100 
                    ${todo.completed ? "bg-blue-400" : "bg-red-400"}
                    `}>
                    {todo.completed ? <IoCheckboxOutline size={30} className="text-blue-500" /> : <IoCheckboxOutline size={30} className="text-gray-500" />}
                </div>
                <div className="text-center sm:text-left">
                    {
                        todo.description
                    }
                </div>
            </div>
        </div>
    );
}