import { useState } from "react";
import "./App.css";

function App() {
  const [categoryTitle, setCategoryTitle] = useState("");
  const createCategory = () => {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "x-readme-version": "v3.0",
        "x-readme": {
          "proxy-enabled": true,
        },
        "content-type": "application/json",
        authorization:
          "Basic cmRtZV94bjhzOWhjMGJhYWY5Y2I4MDkyNDNkYmNkMzg1ZjdmNjNkMzQ1NGMwODZhMGU4MTY2MmUwODRiNTk5NGE2ZTE2YzVjYmRhOg==",
      },
      body: JSON.stringify({ type: "guide", title: categoryTitle }),
    };

    fetch("https://dash.readme.com/api/v1/categories", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  const addChangeLog = () => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization:
          "Basic cmRtZV94bjhzOWhjMGJhYWY5Y2I4MDkyNDNkYmNkMzg1ZjdmNjNkMzQ1NGMwODZhMGU4MTY2MmUwODRiNTk5NGE2ZTE2YzVjYmRhOg==",
      },
      body: JSON.stringify({
        hidden: true,
        title: "Test title ",
        body: JSON.stringify("This is the body for the test of change log"),
        type: "added",
      }),
    };

    fetch("https://dash.readme.com/api/v1/changelogs", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={categoryTitle}
          onChange={(e) => setCategoryTitle(e.target.value)}
          placeholder="Enter Category Title"
        />
        <button onClick={createCategory}>Create Category</button>
        <button onClick={addChangeLog}>Add change log</button>
      </div>
    </>
  );
}

export default App;
