import Layout from "@components/layouts";
import React from "react";
import Scrollbars from "react-custom-scrollbars";

function Party() {
  return (
    <Scrollbars style={{ width: 360, height: 740 }} universal={true}>
      <Layout>
        <div>
          <img src="/images/vis_party.jpg" alt="" />
        </div>
        <div className="new_main_title">
          <div className="title_box">
            <span className="first_txt">
              <strong>곧 개최되는 파티</strong>
            </span>
            <span className="second_txt">지금 바로 신청하실 수 있어요</span>
          </div>
        </div>
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
                    설레임 아지트1<span className="info_age">27세 ~ 37세</span>
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
                    설레임 아지트2<span className="info_age">27세 ~ 37세</span>
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
      </Layout>
    </Scrollbars>
  );
}

export default Party;
