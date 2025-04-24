"use client"
import { Todo } from "@prisma/client";
import { TodoItem } from "./TodoItem";

import * as todosAPI from "../helpers/todos";
import { useRouter } from "next/navigation";

interface Props {
    todos?: Todo[]
}

export const TodosGrid = ({ todos = [] }: Props) => {

    const router = useRouter();

    const toogleTodo = async (id: string, completed: boolean) => {
        const updateTodo = await todosAPI.updateTodo(id, completed);
        router.refresh();
    }

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toogleTodo} />
                ))
            }
        </div>
    );
}