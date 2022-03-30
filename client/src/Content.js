import React, { useState } from "react";

function Content() {
  const [Content, setContent] = useState("");

  const [ContentList, setContentList] = useState([]);

  const onSubmit = () => {
    if (Content === "") {
      alert("내용을 입력하세요");
    } else {
      let newContentList = [...ContentList];
      newContentList.push(Content);
      setContentList([...newContentList]);
      setContent("");
    }
  };

  return (
    <>
      {/* 제출 버튼을 클릭했을때 사용자가 어떤 값을 입력했는지 출력  */}
      <p>
        Content컴포넌트 <br />
        (제출 버튼을 클릭했을때 사용자가 어떤 값을 입력했는지 출력)
      </p>
      <div className="Content">
        {ContentList.map((it, idx) => (
          <div key={idx}>- {it}</div>
        ))}

        <input
          type="text"
          value={Content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button onClick={onSubmit}>제출</button>
      </div>
    </>
  );
}

export default Content;
