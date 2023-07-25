
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Write() {
  const [post, setPost] = useState({
    title: '',
    content: '',
    author: '',
    likes: '0'
  });

  const { title, content, author, likes } = post;

  const onChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };
  
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    alert('등록되었습니다!');
    navigate('/community');
    console.log(post);
  };

  const cancel = () => {
    navigate(`/community`);
  };

  return (
    <form>
      <div>
        <p>글쓰기</p>
        <hr/>
        <input 
          type="text" 
          name="title" 
          placeholder="제목" 
          value={title}
          onChange={onChange}
        />
        <textarea 
          name="content" 
          placeholder="내용을 입력하세요"
          value={content}
          onChange={onChange}
        ></textarea>
      </div>
      <div>
        <p>태그 선택</p>
        <hr/>
        {/* 태그 */}
        <hr/>
        <button onClick={submit}>등록</button>
        <button onClick={cancel}>취소</button>
      </div>
    </form>
  );
}

export default Write;
