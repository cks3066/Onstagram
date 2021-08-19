import React from "react";
import _ from "lodash";

const Search = (props) => {
  const [text, setText] = React.useState("");

  const onChange = (e) => {
    setText(e.target.value);
    keyPress(e);
  };

  // 같은 이벤트 발생 시 이전 요청 취소 > 하나의 값만 나옴
  const debounce = _.debounce((e) => {
    console.log("debounce ::: ", e.target.value);
  }, 1000);
  
  // 이벤트를 모아서 주기적 실행 > 누르는 동시에 여러 출력
  const throttle = _.throttle((e) => {
    console.log("throttle ::: ", e.target.value);
  }, 1000);

  const keyPress = React.useCallback(debounce, []);

  return (
    <div>
      <input type="text" onChange={onChange} value={text} />
    </div>
  );
};

export default Search;
