

const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, 'carlos'),
        React.createElement("h3", {}, 'jen'),
        React.createElement("h3", {}, 'hugoi'),
        React.createElement("h3", {}, 'sasuke'),

    ])

}

function App() {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, 'write a history'),
        React.createElement(Pet),
        React.createElement(Pet),
        React.createElement(Pet),

    );
} 
ReactDOM.render(React.createElement(App), document.getElementById('root'))