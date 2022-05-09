import { GetServerSideProps } from "next";
import { dbConnect, Product, Notice } from "./api";
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
import { Scrollbars } from "react-custom-scrollbars";

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

  return (
    <Scrollbars style={{ width: 360, height: 740 }} universal={true}>
      <Layout>
        <IndexSeo />
        <MainVisual />
        <Title>진행 중인 파티 소식</Title>
        <div
          css={css`
            padding: 0 20px;
          `}
        >
          <div className="item_list minishop_item_list main_product_list_area">
            <ul>
              <li>
                <div className="item_box if_add_wish">
                  <a
                    href="#none"
                    className="wish js_wish_evt"
                    data-pcode="S0323983"
                  >
                    <span className="ic_wish off"></span>
                  </a>

                  <div className="photo_area">
                    <span className="thumb">
                      <img
                        src="/images/party1.png"
                        alt="[모집] 7월 23일(토) 싱글샴페인파티"
                      />
                    </span>
                  </div>

                  <div className="info_box">
                    <div className="add_txt">
                      설레임 아지트1
                      <span className="info_age">27세 ~ 37세</span>
                    </div>

                    <div className="item_title">
                      [모집] 7월 23일(토) 싱글샴페인파티
                    </div>

                    <div className="list_price">
                      <div className="list_price_box">
                        <div className="title_box">
                          <div className="tit_box man">
                            <span className="tit">남성</span>
                          </div>

                          <div className="tit_box woman">
                            <span className="tit">여성</span>
                          </div>
                        </div>
                        <div className="price_box">
                          <ul>
                            <li>
                              <div className="info man">
                                <span className="lineup">
                                  <strong>45,000</strong>
                                  <em>원</em>
                                </span>
                              </div>

                              <div className="info woman">
                                <span className="lineup">
                                  <strong>30,000</strong>
                                  <em>원</em>
                                </span>
                              </div>
                            </li>

                            <li>
                              <div className="num_box">
                                <span className="number">
                                  <strong>30</strong>명/<strong>30</strong>명
                                </span>
                              </div>
                              <div className="num_box">
                                <span className="number">
                                  <strong>30</strong>명/<strong>30</strong>명
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="item_box if_add_wish">
                  <a
                    href="#none"
                    className="wish js_wish_evt"
                    data-pcode="S0323983"
                  >
                    <span className="ic_wish off"></span>
                  </a>

                  <div className="photo_area">
                    <span className="thumb">
                      <img
                        src="/images/party2.png"
                        alt="[모집] 7월 23일(토) 싱글샴페인파티"
                      />
                    </span>
                  </div>

                  <div className="info_box">
                    <div className="add_txt">
                      설레임 아지트2
                      <span className="info_age">27세 ~ 37세</span>
                    </div>

                    <div className="item_title">
                      [모집] 7월 23일(토) 싱글샴페인파티
                    </div>

                    <div className="list_price">
                      <div className="list_price_box">
                        <div className="title_box">
                          <div className="tit_box man">
                            <span className="tit">남성</span>
                          </div>

                          <div className="tit_box woman">
                            <span className="tit">여성</span>
                          </div>
                        </div>
                        <div className="price_box">
                          <ul>
                            <li>
                              <div className="info man">
                                <span className="lineup">
                                  <strong>45,000</strong>
                                  <em>원</em>
                                </span>
                              </div>

                              <div className="info woman">
                                <span className="lineup">
                                  <strong>30,000</strong>
                                  <em>원</em>
                                </span>
                              </div>
                            </li>

                            <li>
                              <div className="num_box">
                                <span className="number">
                                  <strong>30</strong>명/<strong>30</strong>명
                                </span>
                              </div>
                              <div className="num_box">
                                <span className="number">
                                  <strong>30</strong>명/<strong>30</strong>명
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>{" "}
          </div>
        </div>
        <div
          css={css`
            border-bottom: 1px solid #e1e1e1;
          `}
        >
          <BlogArea blogData={blogData} />
        </div>
        <WrapIndex>
          <CategoryMenu />
          <CardSlideArea genreData={genreData1} genreTitle={genreTitle1} />
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
