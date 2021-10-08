const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.namae),
    React.createElement("h3", {}, props.raze),
    React.createElement("h3", {}, props.tipe),
  ]);
};

function App() {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", { id: "dogo" }, "write a history"),
    React.createElement(Pet, {
      namae: "sakamoto",
      raze: "dogo",
      tipe: "labrator",
    }),
    React.createElement(Pet, { namae: "sakura", raze: "cat", tipe: "orange" }),
    React.createElement(Pet, { namae: "dickhead", raze: "fish", tipe: "pargo" })
  );
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));
