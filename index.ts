// index.js
import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.json());

interface Todo {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

// In-memory storage for TODO items
let todos: Todo[] = [];

// Generate a unique ID for each TODO item
const generateId = () => Math.random().toString(36).substr(2, 9);

// Create a TODO item
app.post('/api/todos', (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  const newTodo = { id: generateId(), title, description: description || '', completed: false };
  todos.push(newTodo);

  res.status(201).json(newTodo);
});

// Get all TODO items
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Get a specific TODO item by ID
app.get('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === req.params.id);
  if (!todo) return res.status(404).json({ error: 'TODO not found' });

  res.json(todo);
});

// Update a TODO item by ID
app.put('/api/todos/:id', (req, res) => {
  const { title, description, completed } = req.body;
  const todo = todos.find(t => t.id === req.params.id);

  if (!todo) return res.status(404).json({ error: 'TODO not found' });
  if (title !== undefined) todo.title = title;
  if (description !== undefined) todo.description = description;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// Delete a TODO item by ID
app.delete('/api/todos/:id', (req, res) => {
  const todoIndex = todos.findIndex(t => t.id === req.params.id);

  if (todoIndex === -1) return res.status(404).json({ error: 'TODO not found' });

  todos.splice(todoIndex, 1);
  res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
