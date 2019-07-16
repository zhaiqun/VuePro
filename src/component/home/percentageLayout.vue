<template>
<div class="jd_containner">

        <!--头部搜索栏-->
        <header class="jd_search">
            <div class="jd_search_box">

                <a href="#" class="icon_logo">京东</a>

                <form action="">
                    <span class="icon_search"></span>
                    <input type="text" placeholder="搜索" class="jd_search_input">
                </form>
                <a href="" class="jd_login">登录</a>

            </div>
        </header>

        <!--轮播图区域-->
        <div class="banner">
            <ul>
                <li>
                    <a href=""><img src="../../images/JDm/l8.jpg" alt=""></a>
                </li>
                <li>
                    <a href=""><img src="../../images/JDm/l1.jpg" alt=""></a>
                </li>
                <li>
                    <a href=""><img src="../../images/JDm/l2.jpg" alt=""></a>
                </li>
                <li>
                    <a href=""><img src="../../images/JDm/l3.jpg" alt=""></a>
                </li>
                <li>
                    <a href=""><img src="../../images/JDm/l4.jpg" alt=""></a>
                </li>
                <li>
                    <a href=""><img src="../../images/JDm/l5.jpg" alt=""></a>
                </li>
                <li>
                    <a href=""><img src="../../images/JDm/l6.jpg" alt=""></a>
                </li>
                <li>
                    <a href=""><img src="../../images/JDm/l7.jpg" alt=""></a>
                </li>
                <li>
                    <a href=""><img src="../../images/JDm/l8.jpg" alt=""></a>
                </li>
                <li>
                    <a href=""><img src="../../images/JDm/l1.jpg" alt=""></a>
                </li>

            </ul>
            <ul>


                <li class="active"></li>
                <li>





                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

        <!--产品目录-->
        <nav class="jd_productCatalog">
            <ul>
                <li><img src="../../images/JDm/nav0.png" alt="">
                    <p>分类</p>
                </li>
                <li><img src="../../images/JDm/nav1.png" alt="">
                    <p>分类</p>
                </li>
                <li><img src="../../images/JDm/nav2.png" alt="">
                    <p>分类</p>
                </li>
                <li><img src="../../images/JDm/nav3.png" alt="">
                    <p>分类</p>
                </li>
                <li><img src="../../images/JDm/nav4.png" alt="">
                    <p>分类</p>
                </li>
                <li><img src="../../images/JDm/nav5.png" alt="">
                    <p>分类</p>
                </li>
                <li><img src="../../images/JDm/nav6.png" alt="">
                    <p>分类</p>
                </li>
                <li><img src="../../images/JDm/nav7.png" alt="">
                    <p>分类</p>
                </li>
            </ul>
        </nav>



        <div class="jd_product">
            <!--促销产品-->
            <section class="saleProduct">
                <div class="caption">
                    <div class="iconClock"></div>
                    <span>掌上描述</span>
                    <div class="timer">
                        <span>0</span><span>3</span>
                        <span>:</span>
                        <span>0</span><span>3</span>
                        <span>:</span>
                        <span>0</span><span>3</span>
                    </div>

                    <a href="#">更多></a>
                </div>

                <ul class="saleProDetail">
                    <li>
                        <a href=""><img src="../../images/JDm/detail01.jpg" alt=""></a>
                        <p class="nowPrice">¥10.00</p>
                        <p class="originalPrice">¥100.00</p>
                    </li>
                    <li>
                        <a href=""><img src="../../images/JDm/detail02.jpg" alt=""></a>
                        <p class="nowPrice">¥10.00</p>
                        <p class="originalPrice">¥100.00</p>
                    </li>
                    <li>
                        <a href=""><img src="../../images/JDm/detail01.jpg" alt=""></a>
                        <p class="nowPrice">¥10.00</p>
                        <p class="originalPrice">¥100.00</p>
                    </li>
                </ul>


            </section>
            <!--京东超市-->
            <section class="market">
                <div class="marketTitle  bb">
                    <h3> 京东超市</h3>

                </div>
                <a class="w_50 br fl"><img src="../../images/JDm/cp1.jpg" alt=""></a>
                <a class="w_50  fr  bb"><img src="../../images/JDm/cp2.jpg" alt=""></a>
                <a class="w_50  fr "><img src="../../images/JDm/cp3.jpg" alt=""></a>
            </section>
            <!--京东自营-->
            <section class="Jd_seft">
                <div class="seftTitle  bb">
                    <h3> 京东自营</h3>

                </div>
                <a class="w_50  fr bl"><img src="../../images/JDm/cp4.jpg" alt=""></a>
                <a class="w_50 fl bb"><img src="../../images/JDm/cp5.jpg" alt=""></a>
                <a class="w_50 fl"><img src="../../images/JDm/cp6.jpg" alt=""></a>

            </section>

            <section class="Jd_hot">
                <div class="hotTitle  bb">
                    <h3> 京东热门</h3>

                </div>
                <a class="w_50 br fl"><img src="../../images/JDm/cp1.jpg" alt=""></a>
                <a class="w_50  fr  bb"><img src="../../images/JDm/cp2.jpg" alt=""></a>
                <a class="w_50  fr "><img src="../../images/JDm/cp3.jpg" alt=""></a>

            </section>

        </div>



    </div>
    

    

</template>

<style scoped>
@import '../../lib/JDm/css/base.css';
@import '../../lib/JDm/css/index.css';
</style>

<script>


import {    banner,search}  from   '../../lib/JDm/js/index.js';
// import '../../lib/JDm/js/iscroll-lite.js'

export default {
    data() {
        return {
            
        }
    },mounted(){
    
        banner();
        search();
    }
}
</script>

<style lang="scss" scoped>
// .mui-media-body{
//     li{
//     font-size: 14px;
//     }
    
//     .mui-ellipsis{
//   font-size: 12px;
//     display:  flex;
//     justify-content: space-between;
//     color:#2226af
// }
// }

</style>
