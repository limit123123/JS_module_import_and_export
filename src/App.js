import "./styles.css";

import xx, { plus, age, name } from "./test";

import * as myTools from "./test";

export default function App() {
  console.log(xx);
  console.log(plus, age, name);

  console.log(myTools);

  return <div className="App"></div>;
}
