// import React from 'react';
// import Book from './Book';
// // import CardView from './CardView';
// // import Card from './Card';

import Button from "./Button";
// import School from "./School";

// const App = () => {
//   const dataMessage = "try this book";
//   const testVar = 1;
//   const imgPath = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png";
//   const details = {
//     name: 'test',
//     address: 'hyderabad'
//   };
//   const altText = "test"
//   const dummyVar = 2;
//   const data1 = [1,2,3];
//   return (
//     <>
//      <p>{details.name}</p>
//       <p style={{backgroundColor:'blue'}}>App {altText}</p>
//       <img src={imgPath} alt="test"/>
//       <Book message={dataMessage} testVar={testVar} ></Book> 
//     </>
//     <Card>
//       <CardView></CardView>
//       <CardView></CardView>
//     </Card>
//   )
// }


const App = () => {

    // let schoolName = 'Akshara'
    
    // return (
    //      <School name={schoolName}></School>
    // )

    const handleClick = (a) => {
      alert(a);
        // alert("clicked here")
    }

    return(
      <Button clickFn={handleClick}></Button>
    )
}


export default App;
