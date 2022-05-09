import { mq } from "@components/mq";
import styled from "@emotion/styled";

export const WrapCategoryArea = styled.div`
  position: relative;
  &.vod {
    .meetinfobox {
      display: none;
    }
  }
  ${mq[0]} {
    .swiper {
      padding: 0 20px;
    }
    .swiper-btn-next,
    .swiper-btn-prev {
      display: none;
    }
  }
`;
