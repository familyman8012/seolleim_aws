import Title from "@components/elements/Title";
import { css } from "@emotion/react";
import React from "react";

function Index() {
  return (
    <div
      css={css`
        background: #f8f9f9;
      `}
    >
      <h2
        css={css`
          width: 360px;
          margin: 20px auto;
        `}
      >
        반응형 웹 중 모바일화면 미리보기
      </h2>
      <div
        css={css`
          width: 360px;
          margin: 0 auto;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        `}
      >
        <iframe
          src="index2"
          width="360px"
          css={css`
            height: 90vh;
            border: none;
            background: #fff;
          `}
          scrolling="no"
        />
      </div>
    </div>
  );
}

export default Index;
