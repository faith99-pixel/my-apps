import React from "react";
import ReactDOM from "react-dom/client";

import './index.css';


// function Greeting() {
//   return (
//     <>
//       <Person />
//       <Message />
//     </>
//   );
// }

// const Person = () => <h2>Zoe Zeb</h2>;
// const Message = () => {
//   return <p>This is my message</p>;
// };

// function Book (){
// return(
//     <article>
//         <Name />
//         <People />

//     </article>
// )
// }

// const Name = () => <h2>This is my book</h2>;
// const People = () => {
//     <p>Peopledsbheygye</p>
// }

const author = 'Abraham Verghese';
const img = './images/book1.jpg';
const title = 'The Covenant of Water'


// you can setup parameters and arguments anywhere in the index.js






const BookList = () => {
  return (
    <section className="booklist">
      <Book job="developer"/>
      <Book title="Just a random title" number={22}/>
      
    </section>
  );
};

const Book = (props) => {
    console.log(props);
  return (
    <article className="book">
     <img src={img}
     alt={title} />
     <h2>{title}</h2>
       <h4>{author.toUpperCase()}</h4>
       
       
    </article>
  );
};

// const Image = () => <img src="./images/book1.jpg" alt="The Covenant of Water (Oprah's Book Club)" />;
// const Title = () => <h2>The Covenant of Water</h2>;

  
// const Author = () => {
//   const inlineHeadingStyles = {
//     color: '#617d98',
//     fontSize: '0.75rem',
//     marginTop: '0.5rem',
//   };
//   return <h4 style={inlineHeadingStyles}>Abraham Verghese </h4>;
// };

//   return <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem'}}> Abraham Verghese </h4>;




// <>
//   <div className="someValue">
//     <h2>hello people</h2>
//     <ul>
//       <li>
//         <a href="#">hello world</a>
//       </li>
//     </ul>
//     <h2>hello world</h2>
//   </div>
//   <input type="text" name="" id="" />
// </>

// function Greeting(){
//     return React.createElement('h2', {}, 'hello world');
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
