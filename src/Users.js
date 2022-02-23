import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Buttons from "./Components/Button";
import CardList from "./Components/Cardlist/CardList";
import "./User.scss";
import axios from "axios";

/**********************************************************
  
  현재 https://node-pagnation.herokuapp.com/users 에서 전체 데이터를 받아오고 있습니다
  하지만 데이터가 너무 많네요! 20개 씩 끊어서 보여주면 좋겠습니다.
  offset, limit 개념을 활용하여 페이지네이션을 구현해주세요.
  
  - 백엔드에서 offset 과 limit 이라는 "키값"을 통해 데이터를 끊어서 보내줄 준비가 되어있습니다. 
  - 쿼리스트링을 사용해 limit와, offset을 바꿔가며 요청을 보내보세요.
  - 선택된 페이지의 버튼은 Buttons.scss에 준비된,
    selected 클래스명을 활용해 현재 페이지와 일치할 경우 스타일링 될 수 있도록 해주세요.
***********************************************************/

// 자주 사용하는  limit같은 상수는 상수데이터로 만들어주면 유지보수하기 편하다
// 그것만 찾아가서 건들면 되니까
const LIMIT = 10;

export default function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // url 현위치 뒤쪽으로 덧붙임
  const location = useLocation();
  // console.log(location); // path, search

  useEffect(() => {
    axios // data로 반환되니 잘이용하도록.
      .get(
        // get은 default로 생략 가능
        `https://node-pagnation.herokuapp.com/users${
          location.search || `?limit=${LIMIT}&offset=0`
          // 처음 웹페이지를 열면 search의 값이 없는상태,
          // || 연산자: 초기값이  falsy할때 초기값을 부여함.
          // *참고) &&연산자 : trusy할때 작동시키는것과 반대
        }`
      )
      // fetch를 안쓰고 axios를 써서 json형식으로 변환하는 과정을 생략한다. -> then((res) => res.json()) 안써줌
      .then((res) => setUsers(res.data.users));
  }, [location.search]);

  const updateOffset = (buttonIndex) => {
    const offset = LIMIT * buttonIndex;
    const queryString = `?limit=${LIMIT}&offset=${offset}`;
    navigate(queryString);
  };

  return (
    <div className="photos">
      <h1>Mini Project - Pagination</h1>
      <Buttons updateOffset={updateOffset} users={users} />
      {/* updateOffset의 파라미터로 아무것도 전달 안해도 연결됨. */}
      <CardList users={users} />
    </div>
  );
}
