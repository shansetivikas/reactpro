import React from 'react';
// import Book from './Book';
import CardView from './CardView';
import Card from './Card';

const App = () => {
  // const data = "try this book";
  // const testVar = 1;
  // const imgPath = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png";
  // const details = {
  //   name: 'test',
  //   address: 'hyderabad'
  // };
  // const altText = "test"
  // const dummyVar = 2;
  // const data1 = [1,2,3];
  return (
    // <>
    //  <p>{details.name}</p>
    //   <p style={{backgroundColor:'blue'}}>App {altText}</p>
    //   <img src={imgPath} alt="test"/>
    //   <Book bookData={data} testVar={testVar} ></Book> 
    // </>
    <Card>
      <CardView></CardView>
      <CardView></CardView>
    </Card>
  )
}


export default App;
