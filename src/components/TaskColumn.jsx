import TaskCard from "./TaskCard";
import "./TaskColumn.css";

export default function TaskColumn({
  title,
  icon,
  tasks,
  status,
  handleDelete,
}) {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" />
        {title}
      </h2>
      {/* 할일이 잇을경우 status가 맞는 열에 출력함 */}
      {tasks.length > 0 &&
        tasks.map((task, i) => {
          return (
            task.status === status && (
              <TaskCard
                key={i}
                title={task.task}
                tags={task.tags}
                handleDelete={handleDelete}
                index={i}
              />
            )
          );
        })}
    </section>
  );
}
