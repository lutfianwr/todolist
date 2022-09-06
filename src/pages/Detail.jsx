import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailForm from "../component/DetailForm";
import Layout from "../component/Layout";
import Loading from "../component/Loading";
import TodoDetail from "../component/TodoDetail";

const Detail = (props) => {
  const params = useParams();
  const detail_id = params.todo_id;
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`https://api.todoist.com/rest/v1/tasks/${detail_id}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      })
      .then((response) => {
        setTodos(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSubmit = (text, description, date) => {
    setLoading(true);
    setEdit(false);
    const todo = {
      content: text,
      description: description,
      due_date: date,
    };
    axios
      .post(`https://api.todoist.com/rest/v1/tasks/${detail_id}`, todo, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      })
      .then((res) => {
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <Layout>
        {!edit ? (
          <TodoDetail
            key={todos.id}
            content={todos.content}
            desc={todos.description}
            date={todos.due.date}
            created={todos.created.substring(0, 10)}
            edit={handleEdit}
          />
        ) : (
          <DetailForm
            submitTodo={handleSubmit}
            content={todos.content}
            desc={todos.description}
            date={todos.due.date}
          />
        )}
      </Layout>
    );
  }
};

export default Detail;
