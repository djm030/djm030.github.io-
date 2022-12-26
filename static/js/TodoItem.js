import styles from "./TodoItem.module.css";
function TodoItem(props) {
  console.log(props.times[props.index - 1]);
  console.log(props.times[props.index]);
  return (
    <div className={styles.todoItem}>
      <h3> 님의 {props.index + 1}번째 todolist입니다.</h3>
      <li>
        {props.item} 작성시간 : {props.times[props.index - 1]}
      </li>
    </div>
  );
}

export default TodoItem;
