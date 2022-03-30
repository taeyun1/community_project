import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { UploadDiv, UploadForm, UploadButtonDiv } from "../../Style/UploadCSS";

function Upload() {
  let navigate = useNavigate();

  const [Title, setTitle] = useState("");

  const [Content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (Title === "" || Content === "") {
      return alert("모든 항목을 입력해주세요");
    }

    // Post스키마에 정의된 키값으로 적고, 보낼 값 적기
    let body = {
      title: Title,
      content: Content,
    };

    // 데이터베이스랑 통신하기
    // 1. 클라이언트에서 post요청으로 /api/post/submit을 server로(server/index.js) 요청을 보냄
    // 2. 서버로 body를  보냄

    axios
      .post("/api/post/submit", body)
      .then((res) => {
        if (res.data.success) {
          // setTitle("");
          // setContent("");
          alert("작성이 완료되었습니다.");
          navigate("/");
        } else {
          alert("작성을 실패하였습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UploadDiv>
      <h3>업로드</h3>

      <UploadForm>
        <label htmlFor="title">제목</label>
        <input
          id="title"
          type="text"
          value={Title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
            console.log(Title);
          }}
        />

        <label htmlFor="content">내용</label>

        <textarea
          id="content"
          type="text"
          value={Content}
          onChange={(e) => {
            setContent(e.currentTarget.value);
            console.log(Content);
          }}
        />
        <UploadButtonDiv>
          <button onClick={(e) => onSubmit(e)}>제출</button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
}

export default Upload;
