import React, { useState, useEffect } from "react";
import styles from "./Movie.module.css";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function Movie() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState({});
  const [movie, setMovie] = useState([]);
  const [page,setPage] = useState(1);

  const [ref, inView] = useInView(); // 스크롤 해서 마지막 부분이 보일떄 true

  const getItems=()=> {
    
  }
//작성중
  useEffect(() => {
    const Url =
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=4.0&sort_by=year";
    fetch(Url)
      .then((response) => response.json())
      .then((res) => {
        setMovies(res);
        setLoading(false);
        setMovie(movies.data.movies);
      });
  }); // 빈 배열을 넣으면 한번만 실행 다른 값을 넣으면 업데이트 될떄 실행


  return (
    <main>
    <div className={styles.movie_list}>
      {loading ? <h1>loading...</h1> : ""}
      {movie &&
        movie.map((item) => (
          <MovieContainer
            image={item.medium_cover_image}
            title={item.title}
            year={item.year}
            genres={item.genres}
            summary={item.summary}
            rating={item.rating}
            key={item.id}
            id={item.id}
          />
        ))}
    </div>
    <div ref={ref}>{/* 이걸 보게 된다면 inview()=true */}
      <br></br>
    </div>
    
    </main>
   
  );
}

function MovieContainer(props) {
  return (
    <div className={styles.container}>
      <div className={styles.cover_image}>
        <img src={props.image} alt="이미지없음"></img>
      </div>
      <div className={styles.movie_info}>
        <p>rating :{props.rating / 2}/5</p>
        <Rating rating={props.rating} />
        <h1>
          <Link to={`/movie/detail/${props.id}`}>{props.title}</Link>
        </h1>
        <h6>{props.year} </h6>
        <br></br>
        <p>{props.summary} </p>
        <h3>{props.genres + ", "} </h3>
      </div>
    </div>
  );
}

//별점 주는 컴포넌트
const Rating = (props) => {
  const ratingPercent = (props.rating / 2) * 20; // rating이 10점 만점이라 5점 만점으로 바꾼뒤 20을 곱해 퍼센트 단위로 변경
  const templateStyle = {
    width: ratingPercent + "%", // width를 퍼센트 만큼 설정.
  };

  return (
    <div className={styles.star_rating}>
      <div className={styles.star_ratings_fill} style={templateStyle}>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <div className={styles.star_ratings_base}>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
    </div>
  );
};

export default Movie;
