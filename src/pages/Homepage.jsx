import "../styles/App.css";
import Header from "../component/Header";
import TodoForm from "../component/TodoForm";
import TodoItem from "../component/TodoItem";
import { useState, useEffect } from "react";
import Layout from "../component/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../component/Loading";
import Wave from "../component/Wave";

function Homepage() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

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
      .finally(() => setLoading(false));
  }

  const handleCreate = (text, description, date) => {
    setLoading(true);
    const todo = {
      content: text,
      description: description,
      due_date: date,
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
        })
        .catch((err) => {
          alert(err).toString();
        })
        .finally(() => setLoading(false));
    }
  };

  const handleDetail = (id) => {
    // const index = todos.findIndex((element, index) => {
    //   if (element.id === id) {
    //     console.log(index);
    //     return true;
    //   }
    // });
    navigate(`ToDoDetail/${id}`);
  };

  const handleDelete = (id) => {
    // setLoading(true);
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
      });
    // .finally(() => setLoading(false));
  };

  const handleComplete = (id) => {
    // setLoading(true);
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
      })
      .catch((err) => {
        console.log(err);
      });
    // .finally(() => setLoading(false));
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
      });
    // .finally(() => ({ fetchData }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <Layout>
        <Header></Header>
        <Wave></Wave>
        <TodoForm addTodo={handleCreate} />
        <div className="flex flex-wrap justify-center md:px-5">
          {todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                text={todo.name}
                removeTodo={handleDelete}
                completeTodo={handleComplete}
                uncompleteTodo={handleUncomplete}
                detailTodo={handleDetail}
              />
            );
          })}
        </div>
      </Layout>
    );
  }
}

export default Homepage;
