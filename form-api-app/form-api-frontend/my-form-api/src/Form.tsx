import React, { useState } from "react";
import axios from "axios";

const Form: React.FC = () => {
  const [data, setData] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/data", { data });
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Data:
          <br />
          <input
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
