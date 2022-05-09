import { useCallback, useState } from "react";
import { useSession } from "next-auth/client";
import router from "next/router";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";

// mobx
import { runInAction } from "mobx";
import { observer } from "mobx-react";
import { prodUpStore } from "@src/mobx/store";
// custom hook, css
import useMediaUp from "@src/hooks/useMediaUp";
import useDeleteMedia from "@src/hooks/useDeleteMedia";
import AdminLayout from "@components/layouts/Admin/layout";
import { BasicInfoForm, ErrorTxt } from "@components/pageComp/creator/styles";

function App() {
  //리액트 hook form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: prodUpStore.data && {
      ...prodUpStore.data,
      firstmeet: dayjs(prodUpStore.data.firstmeet).format(
        "YYYY-MM-DD[T]HH:mm:ss"
      )
    }
  });

  // 이미지 업로드 HOOK
  const [imgData, onImgUpHandler] = useMediaUp("cardoriginal");
  const [videoData, onVideoUpHandler] = useMediaUp("video");
  const [deleteVideoMsg, onVideoDeleteHandler] = useDeleteMedia("video");

  //세션 정보 가져오기
  const [session] = useSession();

  //isvod
  const [chk, setChk] = useState(false);

  const onSubmit = useCallback(
    data => {
      if (imgData === undefined && prodUpStore.data === null) {
        return alert("대표 이미지를 등록하셔야 합니다.");
      }

      const productData = {
        ...data,
        creator: session?.user.uid,
        meetday: dayjs(data.firstmeet).format("ddd요일"),
        imgurl: `${imgData !== "" ? imgData : prodUpStore.data.imgurl}`
      };
      runInAction(() => {
        prodUpStore.addProduct(productData);
      });
      router.push("./detail");
    },
    [imgData, session?.user.uid]
  );

  const handleCheck = useCallback(() => {
    setChk(!chk);
  }, [chk]);

  return (
    <AdminLayout genre={"creator"}>
      <BasicInfoForm>
        <div className="box_imgupload">
          <span className="imgArea">
            {imgData !== "" ? (
              <img src={String(imgData)} alt="모임대표이미지" />
            ) : prodUpStore.data !== null ? (
              <img src={prodUpStore.data.imgurl} alt="모임대표이미지" />
            ) : null}
          </span>
          <input
            type="file"
            id="upload"
            className="image-upload"
            onChange={onImgUpHandler}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">제목</label>
          <input
            type="text"
            placeholder="ex) 유리의 쿠킹클래스, 힙스타의 힙한 댄스"
            id="title"
            {...register("title", { required: true, maxLength: 70 })}
          />
          {errors.title && errors.title.type === "required" && (
            <ErrorTxt>제목을 입력해주세요.</ErrorTxt>
          )}
          {errors.title && errors.title.type === "maxLength" && (
            <ErrorTxt>70자 안으로 올바르게 올려주세요.</ErrorTxt>
          )}

          <label htmlFor="people">팀리더 이름</label>
          <input
            type="text"
            id="people"
            placeholder="팀리더"
            {...register("people", { required: true })}
          />
          {errors.people && errors.people.type === "required" && (
            <ErrorTxt>팀리더 이름을 올려주세요.</ErrorTxt>
          )}

          <label htmlFor="genre">장르</label>

          <select id="genre" {...register("genre")}>
            <option value="lecture">강의</option>
            <option value="online">온라인 강의</option>
            <option value="social">소셜살롱</option>
            <option value="consulting">상담</option>
          </select>
          {session?.user.role === "master" && (
            <>
              <label htmlFor="isvod">VOD</label>
              <input
                {...register("isvod")}
                type="checkbox"
                name="isvod"
                id="isvod"
                checked={chk}
                value={String(chk)}
                onChange={handleCheck}
              />
            </>
          )}
          <label htmlFor="location">장소 선택</label>
          <select id="location" {...register("location")}>
            <option value="강남">강남</option>
            <option value="신촌">신촌</option>
            <option value="홍대">홍대</option>
            <option value="이태원">이태원</option>
            <option value="대학로">대학로</option>
            <option value="종로">종로</option>
            <option value="온라인">온라인</option>
          </select>

          <div className="box_radio_area">
            <h2>모임기간</h2>
            <label htmlFor="field-1day">
              <input
                {...register("meetingcycle")}
                type="radio"
                name="meetingcycle"
                value="oneday"
                id="field-1day"
                defaultChecked={true}
              />
              1Day
            </label>
            <label htmlFor="field-month">
              <input
                {...register("meetingcycle")}
                type="radio"
                name="meetingcycle"
                value="month"
                id="field-month"
              />
              1Week
            </label>
          </div>

          {/* {
            <>
              <label htmlFor="meetday">모임일 선택</label>
              <select id="meetday" {...register("meetday")}>
                <option value="월요일">월요일</option>
                <option value="화요일">화요일</option>
                <option value="수요일">수요일</option>
                <option value="목요일">목요일</option>
                <option value="금요일">금요일</option>
                <option value="토요일">토요일</option>
                <option value="일요일">일요일</option>
              </select>
            </>
          } */}

          <label htmlFor="firstmeet">시작일</label>
          <input
            type="datetime-local"
            placeholder="시작일"
            id="firstmeet"
            {...register("firstmeet", { required: true })}
          />
          {errors.firstmeet && errors.firstmeet.type === "required" && (
            <ErrorTxt>첫 모임 일을 입력해주세요.</ErrorTxt>
          )}

          <label htmlFor="price">금액</label>
          <input
            type="number"
            id="price"
            placeholder="금액"
            {...register("price", { required: true })}
          />
          {errors.price && errors.price.type === "required" && (
            <ErrorTxt>금액을 입력해주세요.</ErrorTxt>
          )}
          <label htmlFor="saleprice">할인가</label>
          <input
            type="number"
            id="saleprice"
            placeholder="할인가"
            defaultValue={0}
            {...register("saleprice")}
          />
          {errors.saleprice && errors.saleprice.type === "required" && (
            <ErrorTxt>할인 금액을 입력해주세요.</ErrorTxt>
          )}
          <input type="submit" value="다음" />
        </form>
      </BasicInfoForm>
    </AdminLayout>
  );
}

export default observer(App);
