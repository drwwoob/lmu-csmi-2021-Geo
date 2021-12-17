import { useState } from "react";

export default function Form({ setIP }) {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setIP(input);
        }}
      >
        find Location
      </button>
    </div>
  );
}
