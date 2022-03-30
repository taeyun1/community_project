import styled from "@emotion/styled";

const UploadDiv = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  input {
    border-radius: 10px;
    border: 1px solid #c6c6c6;
    padding: 10px;
    &:active,
    &:focus {
      outline: none;
    }
  }

  // 내용 인풋 꾸미기
  textarea {
    min-height: 350px;
    resize: none; // 인풋 사이즈 조절못하게 설정

    border-radius: 10px;
    border: 1px solid #c6c6c6;
    padding: 10px;
    &:active,
    &:focus {
      outline: none;
    }

    // 스크롤바 넓이조정
    &::-webkit-scrollbar {
      width: 40px;
    }

    // 스크롤바 배경 및 그림자 꾸미기
    &::-webkit-scrollbar-track {
      background-color: #c6c6c6;
      border-radius: 15px;
      box-shadow: inset 0px 0px 5px whitesmoke;
    }

    // 스크롤
    &::-webkit-scrollbar-thumb {
      background-color: grey;
      border-radius: 15px;
      background-colip: padding-box;
      border: 2px solid transparent;
    }

    label {
      font-weight: 400;
      margin-top: 30px;
    }
  }
`;

const UploadButtonDiv = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  button {
    padding: 5px 10px;
    background-color: black;
    font-size: 24px;
    border-radius: 15px;
    color: white;
    font-weight: bold;
    border: 2px solid black;
    &:hover {
      background-color: white;
      color: black;
      border: 2px solid black;
    }
  }
`;

export { UploadDiv, UploadForm, UploadButtonDiv };
