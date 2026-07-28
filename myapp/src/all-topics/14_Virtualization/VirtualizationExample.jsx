import axios from "axios";
import React, { useEffect, useState } from "react";
import { Virtuoso } from "react-virtuoso";

const VirtualizationExample = () => {
  const [todos, setTodos] = useState([]);

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
        style={{
          height: "500px",
          width: "500px",
          border: "2px solid black",
          overflowY: "scroll",
        }}
      >
        <Virtuoso
          style={{ height: "100%" }}
          totalCount={todos.length}
          data={todos}
          itemContent={(index, ele) => (
            <div key={ele.id} style={{ padding: "20px" }}>
              {ele.todo}
            </div>
          )}
        />
      </section>
    </div>
  );
};

export default VirtualizationExample;
