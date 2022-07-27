import "./login.css";

import LoginForm from "../../components/LoginForm/LoginForm";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

function Login() {
  const [show, changeShow] = useState(false);
  const [content, changeContent] = useState({
    title: "a",
    content: "b",
    type: "c",
  });

  const updateModal = (newContent) => {
    changeContent(newContent);
    changeShow(true);
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <LoginForm modalFunc={updateModal} />
        </div>
      </div>
      <Modal
        title={content.title}
        type={content.type}
        message={content.message}
        callback={changeShow}
        value={show}
      />
    </>
  );
}

export default Login;
