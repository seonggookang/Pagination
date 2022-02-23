import React from "react";
import "./Button.scss";

export default function Buttons({ updateOffset, users }) {
  return (
    // 20개 됐으면 전체 값의 100에서 20을 나눈 5개의 버튼만 있어야지
    <div className="pageBtn">
      {users.map((_, idx) => {
        while (idx < 100 / users.length) {
          return (
            <button key={idx} onClick={() => updateOffset(idx)}>
              {idx + 1}
            </button>
          );
        }
      })}
    </div>
  );
}
