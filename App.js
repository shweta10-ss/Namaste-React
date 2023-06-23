//part 1
const heading = React.createElement("h1",
{
id: "heading" // here we can pass attributes. this is called as props. 
},
"Hello world from namaste react" );

console.log(heading); // react.createElement creates the object.
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading); // when we use render method it convert object to html element which browser understands.

//part 2
// create a html structure in React 

{/* <div id ="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
    </div>
</div> */}

const parent = React.createElement("div",
{id:"parent"},
React.createElement("div",
{id:"child"},
React.createElement("h1",{},"I am an h1 tag")
)
);
//root.render(parent); when you want to see the output uncomment it.
//console.log(parent);

//part 3
// create a html structure in React 

/* <div id ="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2tag</h2>
    </div>
</div> */

const parent1 = React.createElement("div",
{id:"parent"},
React.createElement("div",
{id:"child"},
[React.createElement("h1",{},"I am an h1 tag"),
React.createElement("h2",{},"I am an h2 tag")]
)
);
root.render(parent1);
console.log(parent1);

//part4
// create a html structure in React 

/* <div id ="parent">
    <div id="child1">
        <h1>I am h1 tag</h1>
        <h2>I am h2tag</h2>
    </div>
     <div id="child2">
        <h1>I am h1 tag</h1>
        <h2>I am h2tag</h2>
    </div>
</div> */
const parent2 = React.createElement("div",
{id:"parent"},
[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"I am an h1 tag"),
        React.createElement("h2",{},"I am an h2 tag")]
        ),
React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"I am an h1 tag"),
    React.createElement("h2",{},"I am an h2 tag")])
]
);

root.render(parent2);
console.log(parent2);