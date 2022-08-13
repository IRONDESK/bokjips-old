import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import useSWR, { useSWRConfig } from "swr";
import axios from "axios";

import styled from "@emotion/styled";
import { COLOR } from "../../constants";

export default function Comments() {
  const router = useRouter();
  const corp_id = router.query.id;
  const userInfo = useSelector((state) => state);
  const { mutate } = useSWRConfig();

  const [commentShow, setCommentShow] = useState(false);
  const [commentText, setCommentText] = useState("");
  const getCommentURL = `http://52.79.165.66:8081/comments/select/${corp_id}?page=1&size=10`;

  const { data } = useSWR(getCommentURL, (...args) =>
    fetch(...args).then((res) => res.json())
  );

  const convertKRdate = (data) => {
    const now = new Date();
    const target = new Date(data + "Z");
    const date = target.toLocaleString("ja");
    const interval = now - target;
    return interval < 300000
      ? "방금"
      : interval < 600000
      ? "10분 전"
      : interval < 8.64e7 && now.getDate() === target.getDate()
      ? `${target.getHours()}:${
          target.getMinutes() > 9
            ? target.getMinutes()
            : "0" + target.getMinutes()
        }`
      : date.split(" ")[0] +
        ` ${target.getHours()}:${
          target.getMinutes() > 9
            ? target.getMinutes()
            : "0" + target.getMinutes()
        }`;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://52.79.165.66:8081/comments/insert",
        JSON.stringify({
          title: "제목2",
          content: commentText,
          user_id: userInfo.logged.user_id,
          corp_id,
        }),
        {
          headers: {
            Authorization: `Bearer ${userInfo?.logged.token}`,
            "Content-Type": `application/json`,
          },
        }
      )
      .then(() => {
        mutate(getCommentURL);
        setCommentText("");
      });
  };

  const deleteComment = (comments_id, writer) => {
    const confirmDel = confirm("선택하신 댓글을 삭제하시겠습니까?");
    if (confirmDel && writer === userInfo?.logged.user_id) {
      axios
        .delete(`http://52.79.165.66:8081/comments/delete/${comments_id}`)
        .then(() => mutate(getCommentURL));
    }
    if (confirmDel && writer !== userInfo?.logged.user_id) {
      alert("삭제 권한이 없습니다.");
    }
  };

  return (
    <Container>
      <Nav>
        <Title>댓글 {data?.dtoList.length}개</Title>
        <ToggleComment
          commentShow={commentShow}
          onClick={() => {
            setCommentShow(!commentShow);
          }}
        >
          <i className='material-icons'>edit</i> {commentShow ? "닫기" : "입력"}
        </ToggleComment>
      </Nav>
      <InputForm onSubmit={onSubmit} show={commentShow}>
        {commentShow ? (
          <>
            <Input
              type='text'
              value={commentText}
              onChange={(e) => {
                setCommentText(e.target.value);
              }}
              placeholder='내용을 입력하세요.'
            />
            <Submit type='submit'>
              <i className='material-icons'>check</i> 제출
            </Submit>
          </>
        ) : null}
      </InputForm>
      <List>
        {data
          ? data?.dtoList.map((el, index) => (
              <CommentItem key={index}>
                <p>{el.content}</p>
                <ul>
                  <li>{convertKRdate(el.regDate)}</li>
                  <li>
                    <button
                      className='material-icons'
                      onClick={() => {
                        deleteComment(el.comments_id, el.writer_id);
                      }}
                    >
                      delete_forever
                    </button>
                  </li>
                </ul>
              </CommentItem>
            ))
          : null}
        {data?.dtoList.length == 0 ? (
          <NoDataSection>
            <p className='material-icons'>playlist_remove</p>
            댓글이 없는 회사입니다. 첫 번째 댓글의 주인공이 되어주세요.
          </NoDataSection>
        ) : null}
      </List>
    </Container>
  );
}

const Container = styled.section`
  margin: 0 auto;
  padding: 25px 30px;
  width: 100%;
  min-height: 260px;
  box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 23px;
`;
const ToggleComment = styled.button`
  display: flex;
  gap: 4px;
  padding: 6px 12px;
  background-color: #000;
  border-radius: 20px;
  color: #fff;
  font-size: 0.9rem;
  opacity: ${(props) => (props.commentShow ? "0.45" : "1")};
  &:hover {
    background-color: ${COLOR.main};
  }
  i {
    font-size: 16px;
  }
`;
const InputForm = styled.form`
  display: flex;
  margin: 8px 0;
  padding: ${(prop) => (prop.show ? "1px 0" : "0")};
  opacity: ${(prop) => (prop.show ? "1" : "0")};
  align-items: flex-end;
  justify-content: space-evenly;
  gap: 0 4px;
  transition: all 0.3s;
`;
const Input = styled.input`
  flex: 1;
  padding: 8px 8px;
  font-size: 1rem;
  border: none;
  outline: none;
  border-bottom: 2px solid #000;
  &:focus {
    border-bottom: 2px solid ${COLOR.main};
  }
`;
const Submit = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1rem;
  &:hover {
    color: ${COLOR.main};
  }
  i {
    font-size: 1.5rem;
  }
`;
const List = styled.ul`
  display: flex;
  margin: 20px 0 30px 0;
  flex-direction: column;
`;
const CommentItem = styled.li`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${COLOR.gray};
  &:last-child {
    border: none;
  }
  p {
    padding-right: 4px;
    flex: 3;
    font-size: 0.9rem;
    line-height: 1.3rem;
    word-break: keep-all;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: ${COLOR.darkgray};
    font-size: 0.85rem;
    button {
      &:hover {
        color: ${COLOR.main};
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
    p {
      width: 100%;
      text-align: left;
    }
  } ;
`;

const NoDataSection = styled.section`
  margin: 0 0 36px 0;
  text-align: center;
  p {
    display: block;
    margin: 20px 0;
    font-size: 64px;
  }
`;
