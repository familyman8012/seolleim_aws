import { useEffect, useState } from "react";
import Link from "next/link";
import { MobileMenu } from "./styles";

function MobMenu() {
  // 메뉴를 위해 url 가져오기
  const [headUrl, setheadUrl] = useState("");
  useEffect(() => {
    setheadUrl(
      window?.location?.pathname.substring(
        window?.location?.pathname.lastIndexOf("/") + 1
      )
    );
  }, []);

  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);

  return (
    <MobileMenu>
      <Link href="/index2">
        <a>
          <span className={headUrl === "" ? "on" : "off"}> 홈</span>
        </a>
      </Link>
      <Link href="/party">
        <a>
          <span className={headUrl === "party" ? "on" : "off"}>파티</span>
        </a>
      </Link>
      <Link href="/notice">
        <a>
          <span className={headUrl === "notice" ? "on" : "off"}>
            연애소셜살롱
          </span>
        </a>
      </Link>
      <Link href="/view/lecture">
        <a>
          <span className={headUrl === "lecture" ? "on" : "off"}>
            강의/상담
          </span>
        </a>
      </Link>
      {/* <Link href="/category">
        <a>
          <span
            className={
              (winReady && window?.location?.pathname.includes("view")) ||
              headUrl === "category" ||
              headUrl === "oneday" ||
              headUrl === "month"
                ? "on"
                : "off"
            }
          >
            카테고리
          </span>
        </a>
      </Link>
      <Link href="/vodmain">
        <a>
          <span className={headUrl === "vodmain" ? "on" : "off"}>VOD</span>
        </a>
      </Link> */}

      <Link href="/mypage">
        <a>
          <span className={headUrl === "mypage" ? "on" : "off"}>마이</span>
        </a>
      </Link>
    </MobileMenu>
  );
}

export default MobMenu;
