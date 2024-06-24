import { useState } from "react";
import Tag from "./Tag";
import "./TaskForm.css";

export default function TaskForm({ setTasks }) {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //submit 이벤트 중지
    //console.log("새 할일 저장!");
    setTasks((prev) => {
      return [...prev, taskData];
    });
    //저장후 리셋
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  const selectTag = (tag) => {
    //이미 태그가 있는 경우 => 삭제 , 없는경우 => 추가
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag); //같은 태그 삭제
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  console.log(taskData.tags);
  //선택된 태그아이템중 tag가 있으면 true 없으면 false
  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          onChange={handleChange}
          className="task_input"
          placeholder="할일 입력..."
        />

        <div className="task_form_bottom_line">
          <div>
            {/* selected에는 true(태그배열에 각태그 이름이 있으면) 없으면 false로 전달됨 */}
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tag
              tagName="REACT"
              selectTag={selectTag}
              selected={checkTag("REACT")}
            />
          </div>

          <div>
            <select
              name="status"
              value={taskData.status}
              onChange={handleChange}
              className="task_status"
            >
              <option value="todo">할일</option>
              <option value="doing">진행중</option>
              <option value="done">완료</option>
            </select>
            <button type="submit" className="task_submit">
              + 추가
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}
