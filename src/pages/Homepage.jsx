import "../styles/App.css";
import Header from "../component/Header";
import TodoForm from "../component/TodoForm";
import TodoItem from "../component/TodoItem";
import { useState, useEffect } from "react";
import Layout from "../component/Layout";
import axios from "axios";

function Homepage() {
  const [data, setData] = useState([]);
  const [todos, setTodos] = useState([]);
  const [remove, setRemove] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`https://api.todoist.com/rest/v1/tasks`, {
        headers: {
          Authorization: `Bearer 8845c7d100a662743d705c1c0aaf4150bb1a226d`,
          // my apikey 8845c7d100a662743d705c1c0aaf4150bb1a226d
        },
      })
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((err) => alert(err.toString()))
      .finally(() => ({ loading: false }));
  }

  const handleCreate = (text) => {
    axios
      .post("https://api.todoist.com/rest/v1/tasks", { text })
      .then((res) => {
        setTodos([...todos, res.data]);
      })
      .catch((err) => alert(err.toString()))
      .finally(() => ({ loading: false }));
  };

  const handleRemove = (id) => {
    axios
      .delete(`https://api.todoist.com/rest/v1/tasks/${id}`, {
        headers: {
          Authorization: `Bearer 8845c7d100a662743d705c1c0aaf4150bb1a226d`,
        },
      })
      .then((res) => {
        setRemove([...remove, res.data]);
      })
      .catch((err) => alert(err.toString()))
      .finally(() => ({ loading: false }));
  };

  //no api
  const addTodo = (text) => {
    if (text !== "") {
      let id = 1;
      if (todos.length > 0) {
        id = todos[0].id + 1;
      }
      let todo = { id: id, text: text, completed: false };
      //let newTodos = [todo, ...todos];
      setTodos([todo, ...todos]);
    }
  };

  const removeTodo = (id) => {
    let updateTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updateTodos);
  };

  const completeTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  return (
    <Layout>
      <Header></Header>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <TodoItem
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            todo={todo}
            key={todo.id}
          />
        );
      })}
    </Layout>
  );
}

export default Homepage;
