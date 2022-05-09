import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import Slider from "@components/modules/Slider";
import Card from "@components/elements/Card";
import Title from "@components/elements/Title";
import CardBadge from "@components/elements/CardBadge";
import CardSkeleton from "@components/elements/Card/CardSkeleton";
import { IProduct } from "@src/typings/db";
import { css } from "@emotion/react";
import { WrapCategoryArea } from "./styles";

export interface IGenreData {
  genreData?: IProduct[][] | undefined;
  isLoading?: boolean;
  genreTitle: { title: string; url: string }[];
  type?: string;
}

function Index({ genreData, isLoading, genreTitle, type }: IGenreData) {
  const sliderOption = {
    0: {
      slidesPerView: 2,
      spaceBetween: 13
    },
    551: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1441: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  };

  return (
    <div
      className={type === "vod" ? "wrap_vod" : "wrap_product"}
      css={css`
        .card-badge {
          display: none;
        }
        ${type === "vod" &&
        `.meetinfobox {display:none;}h2 {
        &:before,
        & + a {
          display: none !important;
        }
      }
      .imgbox svg,
      .meetinfobox,
      .card-badge {
        display: none;
      }
      div[type="basic"] {
        border-radius: 30px;
        box-shadow: 0 0 8px 0 rgb(0 0 0 / 7%);
      }`}
      `}
    >
      {genreTitle.map((el, i: number) => {
        return (
          <WrapCategoryArea
            key={el.title}
            className={el.title === "온라인강의" ? "vod" : ""}
          >
            <Title i={i} url={el.url}>
              {el.title}
            </Title>

            {isLoading && (
              <div
                css={css`
                  display: flex;
                `}
              >
                {Array.from({ length: 4 }).map((_, idx) => (
                  <CardSkeleton key={idx} />
                ))}
                ;
              </div>
            )}
            {!isLoading && (
              <Slider breakPoint={sliderOption} i={i}>
                {genreData &&
                  genreData[i]?.map((el: IProduct) => (
                    <SwiperSlide key={el._id}>
                      <Link href={`/detailview/${el._id}`}>
                        <a>
                          <CardBadge el={el} />
                          <Card data={el} querykey="main" />
                        </a>
                      </Link>
                    </SwiperSlide>
                  ))}
              </Slider>
            )}
          </WrapCategoryArea>
        );
      })}
    </div>
  );
}

export default Index;
