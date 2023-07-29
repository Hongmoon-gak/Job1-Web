
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Write() {
  const [post, setPost] = useState({
    id:'',
    title: '',
    contents: '',
    author: '', // 사용자 계정 토큰 받아오기
    date:'',
    likes: '0',
    
  });

  const { id, title, contents, author, date, likes } = post;

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
    if (title === '') { // 제목, 내용 입력되지 않은 경우
      alert('제목을 입력해주세요.');
      return;
    } else if(content === '') {
      alert('내용을 입력해주세요');
      return;
    }

    const currentTime = new Date();
    setPost({
      ...post,
      date: currentTime,
    })
    alert('등록되었습니다');
    navigate('/community');
    console.log({ ...post, date: currentTime });
  };

  const cancel = () => {
    alert('취소되었습니다')
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
