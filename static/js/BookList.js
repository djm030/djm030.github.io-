import React from "react";
import styles from "./BookList.module.css";
import axios from 'axios';

const BookList = () => {
  return (
    <div className={styles.booklist}>
      <Book
        title="1번제목"
        author="1번작가"
        imgLink="http://image.yes24.com/goods/115142458/XL"
      />
      <Book
        title="2번제목"
        author="2번작가"
        imgLink="http://image.yes24.com/goods/115142458/XL"
      />
      <Book
        title="3번제목"
        author="3번작가"
        imgLink="http://image.yes24.com/goods/115142458/XL"
      />
    </div>
  );
};

const Book = (props) => {
  return (
    <div className={styles.book}>
      {/* <img className={styles.Img} alt="없음" src={props.imgLink} /> */}
      <Img />
      <h1>{props.title}</h1>
      <h3>{props.author} </h3>
    </div>
  );
};

// 이미지 저자 제목 들어가는 책

const Img = (props) => (
  <img
    className={styles.Img}
    alt="없음"
    src={props.imgLink}
  ></img>
);

// const Title = () => {
//   return <h1>제목</h1>;
// };

// const Author = () => {
//   return <h3>저자</h3>;
// };

export default BookList;
