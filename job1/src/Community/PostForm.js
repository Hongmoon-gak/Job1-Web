import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import { PostTagComponent } from "../Component/TagComponent";
import tagsData from "../Component/TagsData";
import styled from "styled-components";

function PostForm() {
  //const getAuthor = axios.get(`${}/url`,{id});
  const [post, setPost] = useState({
    id:'',
    title: '',
    contents: '',
    // 태그도 전달하기
    author: '', //{getAuthor} 사용자 계정 토큰 받아오기
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

  const [tagSelect, setTagSelect] = useState();
  const handleTag = (index) => {
    if (index === tagSelect){
      setTagSelect(null);
    }
    else{
      setTagSelect(index);
    }
  }
  
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    if (title === '') { // 제목, 내용 입력되지 않은 경우
      alert('제목을 입력해주세요.');
      return;
    } else if(contents === '') {
      alert('내용을 입력해주세요');
      return;
    }

    const currentTime = new Date();
    const newPost = setPost({
      ...post,
      date: currentTime,
    })
    /*
    try{
      const res = await axios.post(`${}/url`, {newPost})
      alert('등록되었습니다');
      navigate('/community'); // 커뮤니티, 이전페이지, 작성한 게시글 중 어디로 링크할지 논의 필요
      console.log({ ...post, date: currentTime });
    } catch(err){
      alert('오류가 발생했습니다. 다시 시도해주세요.')
    }
    */
  };

  const cancel = (e) => {
    e.preventDefault()
    alert('취소되었습니다')
    navigate(-1);
  };

  return (
    <Wrapper>
      <ColContainer>
        <P>글쓰기</P>
        <Hr/>
        <Title 
          type="text" 
          name="title" 
          placeholder="제목" 
          value={title}
          onChange={onChange}
        />
        <Contents 
          name="contents" 
          placeholder="내용을 입력하세요"
          value={contents}
          onChange={onChange}
        ></Contents>
      </ColContainer>

      <ColContainer>
        <P>태그 선택</P>
        <Hr/>
        <RowContainer>
          {tagsData.map((tag, index) => (
            <PostTagComponent 
              key={tag.id} 
              text={tag.text} 
              selected={tagSelect === index}
              onClick={() => handleTag(index)}
            />
          ))}
        </RowContainer>
        <Hr/>
        <RowContainer>
          <SubmitBtn onClick={submit}>등록</SubmitBtn>
          <CancelBtn onClick={cancel}>취소</CancelBtn>
        </RowContainer>
      </ColContainer>
    </Wrapper>
  );
}

export default PostForm;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6rem 0;
`
const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const RowContainer = styled.div`
  display: flex;
  width: 45rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
`
const Title = styled.input`
  width: 54.25rem;
  height: 3.625rem;
  border: 1px solid #A7A7A7;
  box-sizing: border-box;
  padding: 1rem 2rem;
  font-family: DM Sans;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  &: focus {outline: none;} // focus일때 outline 제거
`
const Contents = styled.textarea`
  width: 54.25rem;
  height: 38.8125rem;
  border: 1px solid #A7A7A7;
  box-sizing: border-box;
  margin: 1rem 0 3rem 0;
  padding: 1.5rem 2rem;
  font-family: DM Sans;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  &: focus {outline: none;} // focus일때 outline 제거
`
const SubmitBtn = styled.button`
  width: 6.9375rem;
  height: 3.25rem;
  border-radius: 3.125rem;
  border: none;
  background: #31892F;
  color: #FFF;
  text-align: center;
  font-family: DM Sans;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  margin: 0.5rem;
`
const CancelBtn = styled.button`
  width: 6.9375rem;
  height: 3.25rem;
  border-radius: 3.125rem;
  border: none;
  background: #969696;
  color: #FFF;
  text-align: center;
  font-family: DM Sans;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  margin: 0.5rem;
`
const P = styled.p`
  margin: 0;
  font-family: DM Sans;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
`
const Hr = styled.hr`
  width: 54.25rem;
  margin: 1.5rem 0;
`