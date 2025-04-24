import { NewTodo } from "@/components/NewTodo";
import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos/components/TodosGrid";

export default async function RestTodosPage() {
    const todos = await prisma.todo.findMany({
        orderBy: {
            id: "desc",
        }
    })
    return (
        <div>
            <div className="w-full px-3 mx-5 mb-5">
                <NewTodo />
            </div>
            <TodosGrid todos={todos} />
        </div>
    );
}