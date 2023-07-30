<template>
  <div class="main-page">
    <div class="main-img">
      <div class="container">
        <div class="txt">
          <!-- <p>쏟아지는 이벤트</p>
          <p class="font-weight-bolder">가정의 달 이벤트를 확인해 보세요.</p> -->
        </div>
        <div class="btn d-flex">
          <v-btn v-if="!$vuetify.breakpoint.xs" @click="goAffilicate()">제휴신청하기<span><img
                src="@/assets/images/common/icon-btnarrow.svg" alt=""></span></v-btn>
          <!-- <v-btn v-if="$vuetify.breakpoint.xs">이번달 혜택 보기<span><img src="@/assets/images/common/icon-btnarrow.svg"
                alt=""></span></v-btn>
          <v-btn>가입 이벤트<span><img src="@/assets/images/common/icon-btnarrow.svg" alt=""></span></v-btn> -->
        </div>
      </div>
    </div>
    <div class="main-link container">
      <div class="d-flex">
        <router-link class="d-flex link-btn" to="/">
          <div class="icon"><img src="@/assets/images/page/main_icon01.svg" alt=""></div>
          <div class="txt">
            <p>셀프 개통</p>
            <p>비대면 개통 서비스<br>지금 바로 개통해 보세요.</p>
          </div>
          <img src="@/assets/images/common/icon-btnarrow.svg" alt="">
        </router-link>
        <router-link class="d-flex link-btn" to="/">
          <div class="icon"><img src="@/assets/images/page/main_icon02.svg" alt=""></div>
          <div class="txt">
            <p>무제한 데이터 요금제</p>
            <p>내 생활 패턴에 꼭 맞는<br>요금제를 찾아보세요.</p>
          </div>
          <img src="@/assets/images/common/icon-btnarrow.svg" alt="">
        </router-link>
      </div>
    </div>
    <div class="main-cont">
      <div class="container">
        <v-tabs v-model="tab" height="40px" hideSlider>
          <v-tab @click="swiperinit(1)">LG U+</v-tab>
          <v-tab @click="swiperinit(2)">SKT</v-tab>
          <v-tab @click="swiperinit(3)">KT</v-tab>
        </v-tabs>
        <div class="tab-cont-wrap">
          <div class="tab-cont" v-show="tab == '0'">
            <swiper class="swiper" :options="swiperOptions" ref="swiper1">
              <swiper-slide class="recom-sl">
                <div>
                  <p class="sl-tit">선불 스마트 300M<span>추천</span></p>
                  <span class="sl-com">LG U+</span>
                  <div class="sl-txt">
                    <div><span>데이터</span>
                      <p>300M</p><span>소진시 3 Mbps</span>
                    </div>
                    <div><span>음성/문자</span>
                      <p>기본 제공</p>
                    </div>
                  </div>
                  <div class="sl-pri">
                    <p>36,300<span>/월 부가세 포함</span></p>
                  </div>
                  <div class="swiper-pagewrap">
                    <div class="swiper-page">1/4</div>
                    <div class="swiper-btn play">
                      <p class="swiper-play" @click="swiperplay(1, $event)"><img src="@/assets/images/page/sl-play.svg"
                          alt=""></p>
                      <p class="swiper-stop" @click="swiperstop(1, $event)"><img src="@/assets/images/page/sl-stop.svg"
                          alt=""></p>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <p class="sl-tit">선불 스마트 10.3G</p>
                  <span class="sl-com">LG U+</span>
                  <div class="sl-txt">
                    <div><span>데이터</span>
                      <p>300M + 10G</p><span>소진시 3 Mbps</span>
                    </div>
                    <div><span>음성/문자</span>
                      <p>기본 제공</p>
                    </div>
                  </div>
                  <div class="sl-pri">
                    <p>38,300<span>/월 부가세 포함</span></p>
                  </div>
                  <div class="swiper-pagewrap">
                    <div class="swiper-page">2/4</div>
                    <div class="swiper-btn play">
                      <p class="swiper-play" @click="swiperplay(1, $event)"><img src="@/assets/images/page/sl-play.svg"
                          alt=""></p>
                      <p class="swiper-stop" @click="swiperstop(1, $event)"><img src="@/assets/images/page/sl-stop.svg"
                          alt=""></p>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <p class="sl-tit">선불 스마트 11G (일 2G)</p>
                  <span class="sl-com">LG U+</span>
                  <div class="sl-txt">
                    <div><span>데이터</span>
                      <p>11G + 일 2G</p><span>소진시 3 Mbps</span>
                    </div>
                    <div><span>음성/문자</span>
                      <p>기본 제공</p>
                    </div>
                  </div>
                  <div class="sl-pri">
                    <p>55,000<span>/월 부가세 포함</span></p>
                  </div>
                  <div class="swiper-pagewrap">
                    <div class="swiper-page">3/4</div>
                    <div class="swiper-btn play">
                      <p class="swiper-play" @click="swiperplay(1, $event)"><img src="@/assets/images/page/sl-play.svg"
                          alt=""></p>
                      <p class="swiper-stop" @click="swiperstop(1, $event)"><img src="@/assets/images/page/sl-stop.svg"
                          alt=""></p>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <p class="sl-tit">선불 스마트 일 5G</p>
                  <span class="sl-com">LG U+</span>
                  <div class="sl-txt">
                    <div><span>데이터</span>
                      <p>일 5G + 5 Mbps</p><span>소진시 5 Mbps</span>
                    </div>
                    <div><span>음성/문자</span>
                      <p>기본 제공</p>
                    </div>
                  </div>
                  <div class="sl-pri">
                    <p>66,000<span>/월 부가세 포함</span></p>
                  </div>
                  <div class="swiper-pagewrap">
                    <div class="swiper-page">4/4</div>
                    <div class="swiper-btn play">
                      <p class="swiper-play" @click="swiperplay(1, $event)"><img src="@/assets/images/page/sl-play.svg"
                          alt=""></p>
                      <p class="swiper-stop" @click="swiperstop(1, $event)"><img src="@/assets/images/page/sl-stop.svg"
                          alt=""></p>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="swiper-navi">
              <div class="swiper-button-prev swiper-btn-prev" slot="button-prev"></div>
              <div class="swiper-button-next swiper-btn-next" slot="button-next"></div>
            </div>
          </div>
          <div class="tab-cont" v-show="tab == '1'">
            <swiper class="swiper swiper2" :options="swiperOptions" ref="swiper2">
              <swiper-slide class="recom-sl">
                <div>
                  <p class="sl-tit">band 데이터 안심 300<span>추천</span></p>
                  <span class="sl-com">SKT</span>
                  <div class="sl-txt">
                    <div><span>데이터</span>
                      <p>300M</p><span>소진시 3 Mbps</span>
                    </div>
                    <div><span>음성/문자</span>
                      <p>기본 제공</p>
                    </div>
                  </div>
                  <div class="sl-pri">
                    <p>36,000<span>/월 부가세 포함</span></p>
                  </div>
                  <div class="swiper-pagewrap">
                    <div class="swiper-page">1/4</div>
                    <div class="swiper-btn play">
                      <p class="swiper-play" @click="swiperplay(2, $event)"><img src="@/assets/images/page/sl-play.svg"
                          alt=""></p>
                      <p class="swiper-stop" @click="swiperstop(2, $event)"><img src="@/assets/images/page/sl-stop.svg"
                          alt=""></p>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <p class="sl-tit">band 데이터 15G+</p>
                  <span class="sl-com">SKT</span>
                  <div class="sl-txt">
                    <div><span>데이터</span>
                      <p>15G</p>
                    </div>
                    <div><span>음성/문자</span>
                      <p>100분 / 2200원 (SMS기준 100건)</p>
                    </div>
                  </div>
                  <div class="sl-pri">
                    <p>39,000<span>/월 부가세 포함</span></p>
                  </div>
                  <div class="swiper-pagewrap">
                    <div class="swiper-page">2/4</div>
                    <div class="swiper-btn play">
                      <p class="swiper-play" @click="swiperplay(2, $event)"><img src="@/assets/images/page/sl-play.svg"
                          alt=""></p>
                      <p class="swiper-stop" @click="swiperstop(2, $event)"><img src="@/assets/images/page/sl-stop.svg"
                          alt=""></p>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <p class="sl-tit">band 데이터 퍼펙트</p>
                  <span class="sl-com">SKT</span>
                  <div class="sl-txt">
                    <div><span>데이터</span>
                      <p>11G + 일 2G</p><span>소진시 3 Mbps</span>
                    </div>
                    <div><span>음성/문자</span>
                      <p>기본 제공</p>
                    </div>
                  </div>
                  <div class="sl-pri">
                    <p>59,900<span>/월 부가세 포함</span></p>
                  </div>
                  <div class="swiper-pagewrap">
                    <div class="swiper-page">3/4</div>
                    <div class="swiper-btn play">
                      <p class="swiper-play" @click="swiperplay(2, $event)"><img src="@/assets/images/page/sl-play.svg"
                          alt=""></p>
                      <p class="swiper-stop" @click="swiperstop(2, $event)"><img src="@/assets/images/page/sl-stop.svg"
                          alt=""></p>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <p class="sl-tit">band 데이터 에센스</p>
                  <span class="sl-com">SKT</span>
                  <div class="sl-txt">
                    <div><span>데이터</span>
                      <p>100G</p><span>소진시 5 Mbps</span>
                    </div>
                    <div><span>음성/문자</span>
                      <p>기본 제공</p>
                    </div>
                  </div>
                  <div class="sl-pri">
                    <p>66,000<span>/월 부가세 포함</span></p>
                  </div>
                  <div class="swiper-pagewrap">
                    <div class="swiper-page">4/4</div>
                    <div class="swiper-btn play">
                      <p class="swiper-play" @click="swiperplay(2, $event)"><img src="@/assets/images/page/sl-play.svg"
                          alt=""></p>
                      <p class="swiper-stop" @click="swiperstop(2, $event)"><img src="@/assets/images/page/sl-stop.svg"
                          alt=""></p>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="swiper-navi">
              <div class="swiper-button-prev swiper-btn-prev" slot="button-prev"></div>
              <div class="swiper-button-next swiper-btn-next" slot="button-next"></div>
            </div>
          </div>
          <div class="tab-cont" v-show="tab == '2'">
            <swiper class="swiper" :options="swiperOptions" ref="swiper3">
              <swiper-slide class="recom-sl">
                <div>
                  <p class="sl-tit">선불 스위트 300M<span>추천</span></p>
                  <span class="sl-com">KT</span>
                  <div class="sl-txt">
                    <div><span>데이터</span>
                      <p>300M</p><span>소진시 3 Mbps</span>
                    </div>
                    <div><span>음성/문자</span>
                      <p>기본 제공</p>
                    </div>
                  </div>
                  <div class="sl-pri">
                    <p>36,300<span>/월 부가세 포함</span></p>
                  </div>
                  <div class="swiper-pagewrap">
                    <div class="swiper-page">1/4</div>
                    <div class="swiper-btn play">
                      <p class="swiper-play" @click="swiperplay(3, $event)"><img src="@/assets/images/page/sl-play.svg"
                          alt=""></p>
                      <p class="swiper-stop" @click="swiperstop(3, $event)"><img src="@/assets/images/page/sl-stop.svg"
                          alt=""></p>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <p class="sl-tit">선불 알뜰 15G+</p>
                  <span class="sl-com">KT</span>
                  <div class="sl-txt">
                    <div><span>데이터</span>
                      <p>15G</p><span>소진시 3 Mbps</span>
                    </div>
                    <div><span>음성/문자</span>
                      <p>100분 / 100건</p>
                    </div>
                  </div>
                  <div class="sl-pri">
                    <p>39,300<span>/월 부가세 포함</span></p>
                  </div>
                  <div class="swiper-pagewrap">
                    <div class="swiper-page">2/4</div>
                    <div class="swiper-btn play">
                      <p class="swiper-play" @click="swiperplay(3, $event)"><img src="@/assets/images/page/sl-play.svg"
                          alt=""></p>
                      <p class="swiper-stop" @click="swiperstop(3, $event)"><img src="@/assets/images/page/sl-stop.svg"
                          alt=""></p>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <p class="sl-tit">선불 스위트 10G (일 2G)</p>
                  <span class="sl-com">KT</span>
                  <div class="sl-txt">
                    <div><span>데이터</span>
                      <p>10G + 일 2G</p><span>소진시 3 Mbps</span>
                    </div>
                    <div><span>음성/문자</span>
                      <p>기본 제공</p>
                    </div>
                  </div>
                  <div class="sl-pri">
                    <p>54,000<span>/월 부가세 포함</span></p>
                  </div>
                  <div class="swiper-pagewrap">
                    <div class="swiper-page">3/4</div>
                    <div class="swiper-btn play">
                      <p class="swiper-play" @click="swiperplay(3, $event)"><img src="@/assets/images/page/sl-play.svg"
                          alt=""></p>
                      <p class="swiper-stop" @click="swiperstop(3, $event)"><img src="@/assets/images/page/sl-stop.svg"
                          alt=""></p>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <p class="sl-tit">선불 스위트 25G (일 2G)</p>
                  <span class="sl-com">KT</span>
                  <div class="sl-txt">
                    <div><span>데이터</span>
                      <p>25G + 일 2G</p><span>소진시 5 Mbps</span>
                    </div>
                    <div><span>음성/문자</span>
                      <p>기본 제공</p>
                    </div>
                  </div>
                  <div class="sl-pri">
                    <p>99,000<span>/월 부가세 포함</span></p>
                  </div>
                  <div class="swiper-pagewrap">
                    <div class="swiper-page">4/4</div>
                    <div class="swiper-btn play">
                      <p class="swiper-play" @click="swiperplay(3, $event)"><img src="@/assets/images/page/sl-play.svg"
                          alt=""></p>
                      <p class="swiper-stop" @click="swiperstop(3, $event)"><img src="@/assets/images/page/sl-stop.svg"
                          alt=""></p>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="swiper-navi">
              <div class="swiper-button-prev swiper-btn-prev" slot="button-prev"></div>
              <div class="swiper-button-next swiper-btn-next" slot="button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'


export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      tab: 0,
      dialog: false,
      swiperOptions: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 24,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        speed: 800,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        breakpoints: {
          600: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
          },
        }
      },
    }
  },
  methods: {
    swiperstop: function (i, e) {
      this.$refs[`swiper${i}`].swiper.autoplay.stop();
      e.target.parentElement.parentElement.classList.remove('play');
      e.target.parentElement.parentElement.classList.add('stop');
    },
    swiperplay: function (i, e) {
      this.$refs[`swiper${i}`].swiper.autoplay.start();
      e.target.parentElement.parentElement.classList.remove('stop');
      e.target.parentElement.parentElement.classList.add('play');
    },
    swiperinit: function (i) {
      this.$refs[`swiper${i}`].swiper.slideTo(3);
    },
    goAffilicate() {
      this.$router.push("/alliance/affiliate");
    }
  }

};
</script>
<style lang="scss" scoped>
.main-img {
  width: 100%;
  height: 325px;
  background: #FFD2E1;

  .container {
    position: relative;
    padding-top: 55px;
    height: 100%;
    background: #FFD2E1 url('~@/assets/images/page/main_img.png') right no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;

    .txt {
      width: 695px;
      margin: 0 auto;

      p {
        font-size: 2.4rem;
      }

      p:first-child {
        color: #399FC7;
      }
    }

    .btn {

      .v-btn {
        background: #fff;
        height: 60px;
        border-radius: 30px;
        padding: 0 16px 0 40px;
        font-size: 1.6rem;
        font-weight: 400;
        justify-content: space-between;

        span {
          background: #FAFAFB;
          width: 28px;
          width: 28px;
          border-radius: 100%;
        }
      }
    }
  }
}

.main-link {
  padding: 75px 0;

  >.d-flex {
    justify-content: center;
  }

  .link-btn {
    justify-content: space-between;
    align-items: center;
  }

  .icon {
    border-radius: 30px;
    background: #F9F9FA;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .txt {
    p:first-child {
      font-size: 1.6rem;
      font-weight: 500;
      margin-bottom: 8px;
    }

    p:last-child {
      color: #9799A5;
    }
  }
}

.main-cont {
  position: relative;
  background: #FAFAFB;
  padding: 40px 0;

  .v-tab {
    font-size: 1.3rem;
    border-radius: 100px;
    width: 110px;
    font-weight: 500;

    &--active {
      background: #2C2228;
      color: #fff;
      font-weight: 700;

      &::before {
        display: none;
      }
    }

    &:not(.v-tab--active) {
      color: #A0BCC0 !important;
    }

    &::before {
      border-radius: 100px;
    }
  }

  .tab-cont-wrap {
    overflow: hidden;
    width: 100%;

    >.tab-cont {
      position: relative;

      &:first-child {
        .swiper-slide {
          background: #DBAAC9;
        }
      }

      &:nth-child(2) {
        .swiper-slide {
          background: #A9D5F9;
        }
      }

      &:nth-child(3) {
        .swiper-slide {
          background: #5DCBD5;
        }
      }
    }

    .swiper-slide {
      border-radius: 16px;
      position: relative;
      height: 250px;

      >div {
        padding: 24px;
      }

      &.recom-sl {
        background: #E8C8A7 !important;
      }

      .sl-tit {
        font-size: 1.9rem;
        font-weight: 600;

        span {
          display: inline-block;
          margin-left: 10px;
          color: #fff;
          text-align: center;
          font-size: 1.2rem;
          width: 46px;
          height: 20px;
          border-radius: 10px;
          border: 1px solid #FFF;
        }
      }

      .sl-com {
        font-size: 1.2rem;
        font-weight: 600;
        position: absolute;
        right: 30px;
        top: 27px
      }

      .sl-txt {
        margin: 30px 0;

        >div {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          font-size: 1.4rem;

          >span:first-of-type {
            min-width: 50px;
            margin-right: 15px
          }

          >p {
            font-size: 1.5rem;
            font-weight: 600;

            +span {
              font-size: 1.2rem;
              margin-left: 4px;
            }
          }
        }
      }

      .sl-pri {
        font-size: 1.9rem;
        font-weight: 600;

        span {
          font-size: 1.2rem;
          font-weight: 400;
        }
      }
    }

    .swiper-slide-active {
      .swiper-pagewrap {
        opacity: 1;
        transition: all 0.7s;
      }
    }

    .swiper-pagewrap {
      display: flex;
      opacity: 0;
      transition: all 0.5s;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
      border-radius: 20px;
      background: rgba(0, 0, 0, 0.80);
      width: 70px;
      height: 25px;
      left: 20px;
      bottom: 20px;
      position: absolute;
      z-index: 4;
      color: #fff;

      .swiper-page {
        color: #fff;
        font-size: 1rem;
        line-height: 1;
        letter-spacing: 2px;
        width: auto;
        margin-right: 10px
      }

      .swiper-btn {
        display: flex;
        align-items: center;

        &.stop {
          p.swiper-stop {
            opacity: 0.5;
          }
        }

        &.play {
          p.swiper-play {
            opacity: 0.5;
          }
        }

        p {
          width: 13px;
          height: 25px;

          img {
            transform: scale(1.3);
            vertical-align: middle;
          }

          +p {
            margin-left: 4px
          }
        }
      }
    }
  }
}

@include pc {
  .main-img {
    .btn {
      position: absolute;
      bottom: 40px;

      .v-btn {
        width: 335px;

        +.v-btn {
          margin-left: 24px;
        }
      }
    }
  }

  .link-btn {
    width: 340px;

    .txt {
      margin-left: -30px;
    }

    +.link-btn {
      margin-left: 24px
    }
  }

  .main-cont {
    .tab-cont {
      .swiper-navi {
        display: none
      }
    }
  }
}

@include mobile {
  .main-img {
    height: auto;

    .container {
      padding: 50px 30px;
      background: #FFD2E1 url('~@/assets/images/page/m_main_img.png') center no-repeat;
      background-size: cover;
    }

    .txt {
      width: auto !important
    }

    .btn {
      flex-direction: column;
      width: 100%;
      margin-top: 60px;

      .v-btn {
        width: 100%;

        +.v-btn {
          margin-top: 4px;
        }
      }
    }
  }

  .main-link {
    padding: 40px;

    >.d-flex {
      flex-direction: column;

      .link-btn {
        .txt {
          margin: 0;
        }
      }

      .link-btn+.link-btn {
        margin: 20px 0 0 0;
      }
    }
  }

  .swiper-container {
    margin: 0 30px;
  }

  .swiper-navi {
    .swiper-button-prev {
      left: 0;
    }

    .swiper-button-next {
      right: 0;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 20px;
    }
  }

}

::v-deep {
  .v-tabs {
    margin-bottom: 20px;

    .v-item-group {
      background-color: transparent !important;
    }

    .v-slide-group__wrapper {
      display: block;
    }

    .v-slide-group__content {
      width: 336px;
      background: #ECF2F3;
      height: 40px;
      border-radius: 100px;
      margin: 0 auto;
    }
  }


  @include mobile {
    .v-slide-group__prev {
      display: none;
    }

    .v-slide-group__content {
      width: auto !important;
      margin: 0 30px !important;
    }

  }

}
</style>