import "../styles/App.css";
import Header from "../component/Header";
import TodoForm from "../component/TodoForm";
import TodoItem from "../component/TodoItem";
import { useState, useEffect } from "react";
import Layout from "../component/Layout";
import axios from "axios";

function Homepage() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`https://api.todoist.com/rest/v1/tasks`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      })
      .then((response) => {
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
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        })
        .then((res) => {
          setTodos([res.data, ...todos]);
          console.log("created");
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
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      })
      .then((res) => {
        setTodos(todos.filter((todo) => todo.id !== id));
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
          priority: "2",
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      )
      .then((res) => {
        fetchData();

        //setTodos(todos.map((todo) => (todo.id === id ? res.data : todo)));
      })
      .catch((err) => {
        console.log(err);
      })
      // .finally(() => ({ loading: false }));
      .finally(() => ({ fetchData }));
  };
  const handleUncomplete = (id) => {
    axios
      .post(
        `https://api.todoist.com/rest/v1/tasks/${id}`,
        {
          completed: true,
          priority: "1",
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      )
      .then((res) => {
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => ({ fetchData }));
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

  if (loading) {
    return <div>now loading</div>;
  } else {
    return (
      <Layout>
        <div>{console.log(todos)}</div>
        <Header></Header>
        <TodoForm addTodo={handleCreate} />
        <div>
          {todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                text={todo.content}
                removeTodo={handleDelete}
                completeTodo={handleComplete}
                uncompleteTodo={handleUncomplete}
              />
            );
          })}
        </div>
      </Layout>
    );
  }
}

export default Homepage;
