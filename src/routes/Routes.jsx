import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../pages/Detail";
import Homepage from "../pages/Homepage";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ToDoDetail/:todo_id" element={<Detail />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
