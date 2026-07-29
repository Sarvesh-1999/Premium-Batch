import axios from "axios";
import React, { useEffect, useState } from "react";
import { Virtuoso } from "react-virtuoso";

const VirtualizationExample = () => {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  useEffect(() => {
    async function getTodos() {
      try {
        let resp = await axios.get("https://dummyjson.com/todos?limit=254");
        console.log(resp.data.todos);
        setTodos(resp.data.todos);
      } catch (error) {
        console.log(error);
      }
    }
    getTodos();
  }, []);

  return (
    <div>
      <h1>VirtualizationExample</h1>

      <section
        style={{ height: "500px", width: "500px", border: "1px solid black" }}
      >
        <Virtuoso
          style={{ backgroundColor: "lightblue" }}
          data={todos}
          totalCount={todos.length}
          itemContent={(_, ele) => <li style={{padding:"20px"}}>{ele.todo}</li>}
        />
      </section>
    </div>
  );
};

export default VirtualizationExample;
