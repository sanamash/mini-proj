import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  const [question, setQuestion] = useState(data);
  return (
    <main className="container">
      <h3>question and answers about login</h3>
      <section className="info">
        {question.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </section>
    </main>
  );
}

export default App;
