import React, { useEffect, useState } from "react";
import axios from "axios";

const LIMIT = 10;

const Todos = () => {
  const [data, setData] = useState(null);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    async function getTodos() {
      try {
        let resp = await axios.get(
          `https://dummyjson.com/todos?limit=${LIMIT}&skip=${skip}`,
        );
        console.log(resp.data);
        setData(resp.data); // {limit:10 , skip : 0 , todos:[10] , total:254}
      } catch (error) {
        console.log(error);
      }
    }
    getTodos();
  }, [skip]);

  return (
    <div>
      <h1>Todos List</h1>

      {data?.todos.map(({ id, todo }) => {
        return (
          <div key={id}>
            <h4>{todo}</h4>
          </div>
        );
      })}

      <button
        onClick={() => setSkip((prev) => (prev > 0 ? prev - 10 : 0))}
        // disabled={skip === 0 ? true : false}
      >
        prev
      </button>
      <button onClick={() => setSkip((prev) => prev + 10)}>next</button>
    </div>
  );
};

export default Todos;
