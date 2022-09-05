import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import Layout from "../component/Layout";
import Loading from "../component/Loading";
import TodoDetail from "../component/TodoDetail";

const Detail = (props) => {
  const params = useParams();
  const detail_id = params.todo_id;
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

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
        <TodoDetail
          key={todos.id}
          content={todos.content}
          desc={todos.description}
          date={todos.due.date}
          created={todos.created.substring(0, 10)}
        />
      </Layout>
    );
  }
};

export default Detail;
