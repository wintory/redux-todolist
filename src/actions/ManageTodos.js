export function addTodo(value, status) {

  return { type: 'ADDTODO', data: { value: value, status: status } }
}