import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { SwiperSlide } from "swiper/react";
import Slider from "@components/modules/Slider";
import { IMainVis } from "@src/typings/db";
import { Mainvis, SlideItem, TxtBox } from "./styles";

export interface IMainVisImgs {
  mainVisImgs: IMainVis[];
}

function Index() {
  const [windowWidthSize, setWindowWidthSize] = useState<number>(1000);

  const handleResize = debounce(() => {
    setWindowWidthSize(window.innerWidth);
  }, 25);

  useEffect(() => {
    setWindowWidthSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const MainVisTxt = [
    {
      txt1: "설레임는",
      txt2: "새로운 친구들과 함께하는",
      txt3: `문화 공간입니다.`
    },
    {
      txt1: "내가 그린 그림으로",
      txt2: "전시회를 열고 싶다면?",
      txt3: `설레임에서 이제 화가의 꿈을 이루어보세요`
    },
    {
      txt1: "스트레스여 안녕~",
      txt2: "신나게 춤추자",
      txt3: `다이어트도 OK~ 몸치도 따라하는 힙한댄스`
    }
  ];

  return (
    <Mainvis>
      <Slider>
        {MainVisTxt?.map((el, i: number) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <SlideItem i={i + 1} on={isActive ? "on" : ""}>
                <div className="txtbox">
                  <p className="txt1">{el.txt1}</p>
                  <p className="txt2">{el.txt2}</p>
                  <p className="txt3">{el.txt3}</p>
                  <a>GET START</a>
                </div>
              </SlideItem>
            )}
          </SwiperSlide>
        ))}
      </Slider>
    </Mainvis>
  );
}

export default Index;
