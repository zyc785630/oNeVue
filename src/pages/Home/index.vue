<template>
  <div>
        
    <TypeNav/>
    <ListContainer/>
        <!--列表-->
      

        <!--今日推荐-->
        <div class="today-recommend">
            <div class="py-container">
                <ul class="recommend">
                    <li class="clock">
                        <div class="time">
                            <img src="./images/home/clock.png" />
                            <h3>今日推荐</h3>
                        </div>
                    </li>
                    <li class="banner">
                        <img src="./images/home/today01.png" />
                    </li>
                    <li class="banner">
                        <img src="./images/home/today02.png" />
                    </li>
                    <li class="banner">
                        <img src="./images/home/today03.png" />
                    </li>
                    <li class="banner">
                        <img src="./images/home/today04.png" />
                    </li>
                </ul>
            </div>
        </div>

        <!-- 商品排行 -->
        <div class="rank">
            <div class="tab">
                <div class="tab-tit clearfix">
                    <a href="javascript:;" class="on">
                        <p class="img">
                            <i></i>
                        </p>
                        <p class="text">热卖排行</p>
                    </a>
                    <a href="javascript:;">
                        <p class="img">
                            <i></i>
                        </p>
                        <p class="text">特价排行</p>
                    </a>
                    <a href="javascript:;">
                        <p class="img">
                            <i></i>
                        </p>
                        <p class="text">新品排行</p>
                    </a>
                </div>

            </div>
            <div class="content">
                <ul>
                    <li>
                        <div class="img-item">
                            <p class="tab-pic">
                                <a href="#">
                                    <img src="./images/home/1.jpg" />
                                </a>
                            </p>
                            <div class="tab-info">
                                <div class="info-title">
                                    <a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                                </div>
                                <p class="info-price">定金：¥100.00</p>
                            </div>
                        </div>
                        <div class="img-item">
                            <p class="tab-pic">
                                <a href="#">
                                    <img src="./images/home/1.jpg" />
                                </a>
                            </p>
                            <div class="tab-info">
                                <div class="info-title">
                                    <a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                                </div>
                                <p class="info-price">定金：¥100.00</p>
                            </div>
                        </div>
                        <div class="img-item">
                            <p class="tab-pic">
                                <a href="#">
                                    <img src="./images/home/1.jpg" />
                                </a>
                            </p>
                            <div class="tab-info">
                                <div class="info-title">
                                    <a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                                </div>
                                <p class="info-price">定金：¥100.00</p>
                            </div>
                        </div>
                        <div class="img-item">
                            <p class="tab-pic">
                                <a href="#">
                                    <img src="./images/home/1.jpg" />
                                </a>
                            </p>
                            <div class="tab-info">
                                <div class="info-title">
                                    <a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                                </div>
                                <p class="info-price">定金：¥100.00</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 猜你喜欢 -->
        <div class="like">
            <div class="py-container">
                <div class="title">
                    <h3 class="fl">猜你喜欢</h3>
                    <a href="javascript:;" class="fr tip changeBnt">换一换</a>
                </div>
                <div class="bd">
                    <ul class="favourate">
                        <li>
                            <img src="./images/home/like_02.png" alt="" />
                            <div class="like-text">
                                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="./images/home/like_03.png" alt="" />
                            <div class="like-text">
                                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="./images/home/like_01.png" alt="" />
                            <div class="like-text">
                                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="./images/home/like_02.png" alt="" />
                            <div class="like-text">
                                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="./images/home/like_03.png" alt="" />
                            <div class="like-text">
                                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="./images/home/like_01.png" alt="" />
                            <div class="like-text">
                                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!--楼层-->
        <div class="floor">
            <div class="py-container">
                <div class="title clearfix">
                    <h3 class="fl">家用电器</h3>
                    <div class="fr">
                        <ul class="nav-tabs clearfix">
                            <li class="active">
                                <a href="#tab1" data-toggle="tab">热门</a>
                            </li>
                            <li>
                                <a href="#tab2" data-toggle="tab">大家电</a>
                            </li>
                            <li>
                                <a href="#tab3" data-toggle="tab">生活电器</a>
                            </li>
                            <li>
                                <a href="#tab4" data-toggle="tab">厨房电器</a>
                            </li>
                            <li>
                                <a href="#tab5" data-toggle="tab">应季电器</a>
                            </li>
                            <li>
                                <a href="#tab6" data-toggle="tab">空气/净水</a>
                            </li>
                            <li>
                                <a href="#tab7" data-toggle="tab">高端电器</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="tab-content">
                    <div class="tab-pane">
                        <div class="floor-1">
                            <div class="blockgary">
                                <ul class="jd-list">
                                    <li>节能补贴</li>
                                    <li>4K电视</li>
                                    <li>空气净化器</li>
                                    <li>IH电饭煲</li>
                                    <li>滚筒洗衣机</li>
                                    <li>电热水器</li>
                                </ul>
                                <img src="./images/home/floor-1-1.png" />
                            </div>
                            <div class="floorBanner">
                                <div class="swiper-container" id="floor1Swiper">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img src="./images/home/floor-1-b01.png">
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="./images/home/floor-1-b02.png">
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="./images/home/floor-1-b03.png">
                                        </div>
                                    </div>
                                    <!-- 如果需要分页器 -->
                                    <div class="swiper-pagination"></div>

                                    <!-- 如果需要导航按钮 -->
                                    <div class="swiper-button-prev"></div>
                                    <div class="swiper-button-next"></div>
                                </div>
                            </div>
                            <div class="split">
                                <span class="floor-x-line"></span>
                                <div class="floor-conver-pit">
                                    <img src="./images/home/floor-1-2.png" />
                                </div>
                                <div class="floor-conver-pit">
                                    <img src="./images/home/floor-1-3.png" />
                                </div>
                            </div>
                            <div class="split center">
                                <img src="./images/home/floor-1-4.png" />
                            </div>
                            <div class="split">
                                <span class="floor-x-line"></span>
                                <div class="floor-conver-pit">
                                    <img src="./images/home/floor-1-5.png" />
                                </div>
                                <div class="floor-conver-pit">
                                    <img src="./images/home/floor-1-6.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--楼层-->
        <div class="floor">
            <div class="py-container">
                <div class="title clearfix">
                    <h3 class="fl">家用电器</h3>
                    <div class="fr">
                        <ul class="nav-tabs clearfix">
                            <li class="active">
                                <a href="#tab1" data-toggle="tab">热门</a>
                            </li>
                            <li>
                                <a href="#tab2" data-toggle="tab">大家电</a>
                            </li>
                            <li>
                                <a href="#tab3" data-toggle="tab">生活电器</a>
                            </li>
                            <li>
                                <a href="#tab4" data-toggle="tab">厨房电器</a>
                            </li>
                            <li>
                                <a href="#tab5" data-toggle="tab">应季电器</a>
                            </li>
                            <li>
                                <a href="#tab6" data-toggle="tab">空气/净水</a>
                            </li>
                            <li>
                                <a href="#tab7" data-toggle="tab">高端电器</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="tab-content">
                    <div class="tab-pane">
                        <div class="floor-1">
                            <div class="blockgary">
                                <ul class="jd-list">
                                    <li>节能补贴</li>
                                    <li>4K电视</li>
                                    <li>空气净化器</li>
                                    <li>IH电饭煲</li>
                                    <li>滚筒洗衣机</li>
                                    <li>电热水器</li>
                                </ul>
                                <img src="./images/home/floor-1-1.png" />
                            </div>
                            <div class="floorBanner">
                                <div class="swiper-container" id="floor2Swiper">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img src="./images/home/floor-1-b01.png">
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="./images/home/floor-1-b02.png">
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="./images/home/floor-1-b03.png">
                                        </div>
                                    </div>
                                    <!-- 如果需要分页器 -->
                                    <div class="swiper-pagination"></div>

                                    <!-- 如果需要导航按钮 -->
                                    <div class="swiper-button-prev"></div>
                                    <div class="swiper-button-next"></div>
                                </div>
                            </div>
                            <div class="split">
                                <span class="floor-x-line"></span>
                                <div class="floor-conver-pit">
                                    <img src="./images/home/floor-1-2.png" />
                                </div>
                                <div class="floor-conver-pit">
                                    <img src="./images/home/floor-1-3.png" />
                                </div>
                            </div>
                            <div class="split center">
                                <img src="./images/home/floor-1-4.png" />
                            </div>
                            <div class="split">
                                <span class="floor-x-line"></span>
                                <div class="floor-conver-pit">
                                    <img src="./images/home/floor-1-5.png" />
                                </div>
                                <div class="floor-conver-pit">
                                    <img src="./images/home/floor-1-6.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--商标-->
        <div class="brand">
            <div class="py-container">
                <ul class="brand-list">
                    <li class="brand-item">
                        <img src="./images/home/brand_21.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./images/home/brand_03.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./images/home/brand_05.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./images/home/brand_07.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./images/home/brand_09.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./images/home/brand_11.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./images/home/brand_13.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./images/home/brand_15.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./images/home/brand_17.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./images/home/brand_19.png" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import ListContainer from './ListContainer/ListContainer'
export default {
  name: 'Home',
  components:{
    ListContainer
  }
}
</script>

<style lang="less" scoped>

</style>
