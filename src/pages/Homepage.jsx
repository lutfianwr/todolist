import "../styles/App.css";
import Header from "../component/Header";
import TodoForm from "../component/TodoForm";
import TodoItem from "../component/TodoItem";
import { useState, useEffect } from "react";
import Layout from "../component/Layout";
import axios from "axios";

function Homepage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`https://api.todoist.com/rest/v1/tasks`, {
        headers: {
          Authorization: `Bearer 8845c7d100a662743d705c1c0aaf4150bb1a226d`,
        },
      })
      .then((response) => {
        //console.log(response.data);
        //setData(response.data);
        setTodos(response.data);
      })
      .catch((err) => alert(err.toString()))
      .finally(() => ({ loading: false }));
  }

  const handleCreate = (text) => {
    const todo = {
      content: text,
    };
    if (text !== "") {
      axios
        .post(`https://api.todoist.com/rest/v1/tasks`, todo, {
          headers: {
            Authorization: `Bearer 8845c7d100a662743d705c1c0aaf4150bb1a226d`,
          },
        })
        .then((res) => {
          setTodos([res.data, ...todos]);
        })
        .catch((err) => {
          alert(err).toString();
        })
        .finally(() => ({ loading: false }));
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://api.todoist.com/rest/v1/tasks/${id}`, {
        headers: {
          Authorization: `Bearer 8845c7d100a662743d705c1c0aaf4150bb1a226d`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((err) => {
        alert(err).toString();
      })
      .finally(() => ({ loading: false }));
  };

  const handleUpdate = (id, text) => {
    const todo = {
      content: text,
    };
    axios

      .put(`https://api.todoist.com/rest/v1/tasks/${id}`, todo, {
        headers: {
          Authorization: `Bearer 8845c7d100a662743d705c1c0aaf4150bb1a226d`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setTodos(todos.map((todo) => (todo.id === id ? res.data : todo)));
      })
      .catch((err) => {
        alert(err).toString();
      })
      .finally(() => ({ loading: false }));
  };

  const handleComplete = (id) => {
    axios
      .post(
        `https://api.todoist.com/rest/v1/tasks/${id}`,
        {
          completed: true,
        },
        {
          headers: {
            Authorization: `Bearer 8845c7d100a662743d705c1c0aaf4150bb1a226d`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setTodos(todos.map((todo) => (todo.id === id ? res.data : todo)));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => ({ loading: false }));
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
      <TodoForm addTodo={handleCreate} />
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            text={todo.content}
            removeTodo={handleDelete}
            completeTodo={handleComplete}
          />
        );
      })}
    </Layout>
  );
}

export default Homepage;
