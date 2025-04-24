import { Todo } from "@prisma/client";

export const updateTodo = async (
  id: string,
  completed: boolean
): Promise<Todo> => {
  const body = { completed };

  const todo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (res) => {
    if (!res.ok) {
      const errorText = await res.text();
      console.error("Error response:", errorText);
      throw new Error("Error actualizando TODO");
    }
    return res.json();
  });

  console.log({ todo });

  return todo;
};

export const createTodo = async (description: string): Promise<Todo> => {
  const body = { description };

  const todo = await fetch(`/api/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (res) => {
    if (!res.ok) {
      const errorText = await res.text();
      console.error("Error response:", errorText);
      throw new Error("Error creando TODO");
    }
    return res.json();
  });

  console.log({ todo });

  return todo;
};

export const deleteCompletedTodos = async (): Promise<Todo[]> => {
  const todos = await fetch(`/api/todos`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (res) => {
    if (!res.ok) {
      const errorText = await res.text();
      console.error("Error response:", errorText);
      throw new Error("Error eliminando TODO");
    }
    return res.json();
  });

  return todos;
}