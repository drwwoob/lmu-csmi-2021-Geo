import { useEffect, useState } from "react";
import "./styles.css";
import Form from "./Form.js";
import Info from "./Info.js";

export default function App() {
  const [ip, setIP] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const url = `https://ipapi.co/${ip}/json/`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setLocation(r))
      .catch((e) => setLocation(null));
  }, [ip]);

  return (
    <div className="App">
      <h1>Get Location For IP</h1>
      <Form setIP={setIP} />
      <Info data={location} />
    </div>
  );
}
