Notes : 

What we have learnt in 1st episode :

React is a library not a full fledged framework.
That means react can be applied to a small portion of application as well.

It can work only in footer, header or side bar . It works what ever portion you make the root is.

React is , whatever has written in react-development.js file.

Learnings from episode 1:

How to write hello world program using HTML.
write hello world program using javascript.

Then write a hello world program in react.
So first bring react in our code.
Download the react-development.js file and react-doc.devlopment.js file from CDN to 
Index.html file.
Created scripts in app.js

React Element is an object.
1- created React Element. Which can be anything like div,h1 tag.
Reac.createElement takes 3 input parameter 
 1. The tag name  -which you want to create like div,h1,h2 ,span, p etc.
2. It is object where you can pass id:name and other attributes.
3. It’s children’s . You can pass normal 1 children. If it has multiple children then create 
An array and pass one by one.

2. ReactDom.createRoot will create the root tag.
3.  Then we use Root.render method to render it on screen 
Which convert react element which is an object to html tag which browser understand.

Root.render replaced if anything existing is there inside Root.