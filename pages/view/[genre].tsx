import { GetServerSideProps } from "next";
import { dbConnect, Product, Notice } from "../../pages/api";
import { dehydrate, QueryClient } from "react-query";
import { useProductsMain } from "@src/hooks/api/useProducts/useProductsMain";
import { IndexSeo } from "@components/elements/CommonSeo";
import Layout from "@components/layouts";
import Morebtn from "@components/pageComp/indexpage/Morebtn";
import {
  MainVisual,
  WrapIndex,
  CategoryMenu,
  CardSlideArea,
  BlogArea,
  NoticeArea
} from "@components/pageComp/indexpage";
import { ISSR } from "@src/typings/db";
import Title from "@components/elements/Title";
import { css } from "@emotion/react";
import { mq } from "@components/mq";
import Link from "next/link";
import { useVodProducts } from "@src/hooks/api/useVodProducts";
import Card from "@components/elements/Card";
import React from "react";
import Scrollbars from "react-custom-scrollbars";

const Home = ({ SsrData }: ISSR) => {
  const { blogData, products, vodproducts } = SsrData;

  const { data } = useProductsMain(products);
  const productsData = data?.products;

  const genreTitle1 = [
    { title: "강의", url: "/view/lecture" },
    { title: "온라인강의", url: "/view/lecture" }
  ];

  function getGenreData1() {
    if (Array.isArray(productsData)) {
      return [
        productsData.filter(el => el.genre === "lecture"),
        productsData.filter(el => el.genre === "online")
      ];
    }
  }

  const genreData1 = getGenreData1();

  console.log(genreData1);

  return (
    <Scrollbars style={{ width: 360, height: 740 }} universal={true}>
      <Layout>
        <div>
          <img src="/images/mo_mainvis1.png" alt="연애학교" />
        </div>
        <WrapIndex>
          <CategoryMenu />
          <Title>강의</Title>
          <div
            css={css`
              display: grid;
              padding: 20px;
              gap: 22px 10px;
              grid-template-columns: 1fr 1fr;
            `}
          >
            {genreData1 &&
              genreData1[0].map(el => (
                <React.Fragment key={el._id}>
                  <Link href={`/detailview/${el._id}`}>
                    <a>
                      <Card data={el} querykey="main" />
                    </a>
                  </Link>
                </React.Fragment>
              ))}
          </div>
          <Title>온라인 강의</Title>
          <div
            css={css`
              display: grid;
              padding: 20px;
              gap: 22px 10px;
              grid-template-columns: 1fr 1fr;
            `}
          >
            {genreData1 &&
              genreData1[1].map(el => (
                <React.Fragment key={el._id}>
                  <Link href={`/detailview/${el._id}`}>
                    <a>
                      <Card data={el} querykey="main" />
                    </a>
                  </Link>
                </React.Fragment>
              ))}
          </div>
          <Title>심리학 석,박사 분들과의 연애심리상담</Title>
          <div
            css={css`
              display: flex;
              ${mq[0]} {
                display: block;
                padding: 0 20px;
                > div {
                  margin-bottom: 15px;
                }
              }
            `}
          >
            <Link href="/detailview/6277a352b7390c1b485883a2">
              <a>
                <img src="/images/mo_mainvis4.png" alt="이별, 이혼, 재회상담" />
                <p
                  css={css`
                    margin-top: 10px;
                    font-weight: bold;
                    color: #000;
                  `}
                >
                  이별, 이혼, 재회상담
                </p>
              </a>
            </Link>
            <Link href="/detailview/6277a399b7390c1b485883ac">
              <a
                css={css`
                  margin-left: auto;
                `}
              >
                <img src="/images/mo_mainvis5.png" alt="짝사랑, 썸상담" />
                <p
                  css={css`
                    margin-top: 10px;
                    font-weight: bold;
                    color: #000;
                  `}
                >
                  짝사랑, 썸 상담
                </p>
              </a>
            </Link>
          </div>
        </WrapIndex>
      </Layout>
    </Scrollbars>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await dbConnect();

  const [result, result2, result3] = await Promise.all([
    Notice.find(
      { category: "블로그" },
      { body: false, createdAt: false, updatedAt: false }
    )
      .limit(2)
      .lean(),

    Product.find(
      { isvod: { $ne: true }, islive: { $ne: false } },
      { body: false }
    )
      .sort({ firstmeet: 1 })
      .limit(90)
      .lean(),

    Product.find({ isvod: true, islive: { $ne: false } }, { body: false })
      .sort({ firstmeet: 1 })
      .limit(90)
      .lean()
  ]);

  const SsrData = {
    blogData: JSON.parse(JSON.stringify(result)),
    products: JSON.parse(JSON.stringify(result2)),
    vodproducts: JSON.parse(JSON.stringify(result3))
  };

  console.log("SsrData.vodproducts", SsrData.vodproducts);

  await queryClient.prefetchQuery(["list", "main"], () => SsrData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      SsrData
    }
  };
};

export default Home;
