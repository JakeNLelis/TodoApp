export async function getAllTodos(req, res, next) {
  res.send("Get All Todos");
}

export async function getTodo(req, res, next) {
  res.send(`Get Todo with id: ${req.params.id}`);
}

export async function createTodo(req, res, next) {
  res.send("Created Todo");
}

export async function updateTodo(req, res, next) {
  res.send(`Update Todo with id: ${req.params.id}`);
}

export async function deletTodo(req, res, next) {
  res.send(`Delete Todo with id: ${req.params.id}`);
}
