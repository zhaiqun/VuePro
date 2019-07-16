<template>

        

 <div>
 
    <!-- <script id="tpl-img" type="text/html">
        <% for(var i = 0; i < value.length; i++){ %>

            <% if(isM){ %>
                <div class="item <%= i==0?'active':'' %>">

                    <a href=""><img src=<%=value[i].mUrl %> alt="..."></a>
                </div>
                <%  } else {%>
                    <div class="item <%= i==0?'active':'' %>">
                        <a href="" style="background-image: url(<%= value[i].pcUrl %>)"> </a>
                    </div>
                    <% } %>
                        <% }%>



    </script>
    <script id="tpl-indicator" type="text/html">
        <% for(var i = 0; i < count; i++){ %>
            <li class="item <%= i==0?'active':'' %>" data-target="#carousel-example-generic" data-slide-to="<% =i %>"></li>
            <% }%>

    </script> -->
          <!-- 头部 -->
    <header class="wjs_topbar hidden-sm  hidden-xs">

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2 ">
                    <div class="wjs_app">
                        <span class="wjs_icon  wjs_icon_phone">

                        </span> 微金所
                        <span class="glyphicon glyphicon-chevron-down"></span>
                        <div class="appcode">
                            <img src="images/code.jpg" alt="">

                        </div>
                    </div>


                </div>
                <div class="col-md-5 ">
                    <span class="wjs_icon wjs_icon_tel">

                    </span> 4006-89-4006（服务时间：9:00-21:00）
                </div>
                <div class="col-md-2 ">常见问题 财富登录</div>
                <div class="col-md-3">
                    <a href="#" class="btn btn-default  btn-register">免费注册</a>
                    <a href="#">登录</a>
                </div>
            </div>
        </div>
    </header>

    <!-- 导航 -->
    <nav class="navbar  wjs_navbar" data-spy="affix" data-offset-top="60" data-offset-bottom="200">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">

                    <span class="wjs_icon wjs_icon_logo"></span>
                    <span class="wjs_icon wjs_icon_name"></span>
                </a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">我要投资 </a></li>

                    <li><a href="#">我要借贷</a></li>
                    <li><a href="#">平台介绍</a></li>
                    <li><a href="#">新手专区</a></li>
                    <li><a href="#">最新动态</a></li>
                    <li><a href="#">微平台</a></li>
                </ul>

                <ul class="nav navbar-nav navbar-right hidden-sm">
                    <li><a href="#">个人中心</a></li>

                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>
    <!-- 轮播图 -->
    <section class='wjs_banner'>
        <!--banner-->
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
            <li v-for="(item, index) in swipList" :key="index" data-target="#carousel-example-generic" :data-slide-to="index"  :class="index==0?'active':''"></li>

            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                   <div v-for="(item, index) in swipList" :key="index" :class="['item',index==0?'active':'']">
                  
                 <a  v-if="isM" href=""><img :src='item.mUrl' alt="..."> </a>
                 <a  v-else  href="" :style="'background-image: url('+item.pcUrl"> </a>
                </div>

            
            </div>

            <!-- Controls -->
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>




    </section>
    <!-- 产品信息 -->
    <section class="wjs_info  hidden-xs">
        <div class="container ">
            <!-- <div class="row"> -->
            <div class="col-md-4  col-sm-6 ">
                <a href="#">

                    <div class="media">
                        <div class="media-left media-middle">
                            <span class="wjs_icon  wjs_icon_dollar"></span>

                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">支付交易保障</h4>
                            <p>银联支付全称保证支付安全</p>
                        </div>
                    </div>
                </a>

            </div>
            <div class="col-md-4 col-sm-6">
                <a href="#">

                    <div class="media">
                        <div class="media-left media-middle">
                            <span class="wjs_icon  wjs_icon_dollar"></span>

                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">支付交易保障</h4>
                            <p>银联支付全称保证支付安全</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="#">

                    <div class="media">
                        <div class="media-left media-middle">
                            <span class="wjs_icon  wjs_icon_dollar"></span>

                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">支付交易保障</h4>
                            <p>银联支付全称保证支付安全</p>
                        </div>
                    </div>
                </a>
            </div>

            <!-- </div> -->
            <!-- <div class="row"> -->
            <div class="col-md-4 col-sm-6">
                <a href="#">

                    <div class="media">
                        <div class="media-left media-middle">
                            <span class="wjs_icon  wjs_icon_dollar"></span>

                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">支付交易保障</h4>
                            <p>银联支付全称保证支付安全</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-md-4  col-sm-6">
                <a href="#">

                    <div class="media">
                        <div class="media-left media-middle">
                            <span class="wjs_icon  wjs_icon_dollar"></span>

                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">支付交易保障</h4>
                            <p>银联支付全称保证支付安全</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-md-4  col-sm-6">
                <a href="#">

                    <div class="media">
                        <div class="media-left media-middle">
                            <span class="wjs_icon  wjs_icon_dollar"></span>

                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">支付交易保障</h4>
                            <p>银联支付全称保证支付安全</p>
                        </div>
                    </div>
                </a>
            </div>
            <!-- </div> -->
        </div>

    </section>
    <!-- 预约 -->
    <section class="wjs_book">
        <div class="container">
            <p><span class="wjs_icon wjs_icon_clock"></span> 现在有 273 人在排队，累计预约交易成功 7571 次。 什么是预约投标？ <a href="">立即预约</a></p>
            <p class="hidden-sm  hidden-xs"><span class="wjs_icon wjs_icon_video"></span> 微金所企业宣传片</p>
        </div>

    </section>
    <!-- 产品 -->
    <section class="wjs_product  clearfix">
        <div class="container">
            <div>

                <!-- Nav tabs -->
                <ul class="nav   nav-tabs" role="tablist">
                    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">特别推荐</a></li>
                    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">微平台</a></li>
                    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">微平台</a></li>
                    <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">微平台</a></li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="home">

                        <div class="container ">
                            <!-- <div class="row"> -->
                            <div class="col-md-4  col-sm-6  col-xs-12 ">

                                <a href="#" class="product_box active">
                                    <div class="pull-left">
                                        <p>新手体验标签1002期望</p>
                                        <ul>
                                            <li>投资金额（元）</li>
                                            <li>投资金额（元）</li>
                                            <li>0.01</li>
                                            <li>0.01</li>
                                            <li>投资金额（元）</li>
                                            <li>投资金额（元）</li>
                                            <li>0.01</li>
                                            <li>0.01</li>
                                        </ul>
                                    </div>

                                    <div class="pull-right">
                                        <p>8<sub>%</sub></p>
                                        <p>年利率</p>
                                    </div>
                                </a>

                            </div>
                            <div class="col-md-4  col-sm-6 col-xs-12 ">
                                <a href="#" class="product_box">



                                    <div class="pull-left">
                                        <p>新手体验标签1002期望</p>
                                        <ul>
                                            <li>投资金额（元）</li>
                                            <li>投资金额（元）</li>
                                            <li>0.01</li>
                                            <li>0.01</li>
                                            <li>投资金额（元）</li>
                                            <li>投资金额（元）</li>
                                            <li>0.01</li>
                                            <li>0.01</li>
                                        </ul>
                                    </div>

                                    <div class="pull-right">

                                        <div class="tips">
                                            <span data-toggle="tooltip" data-placement="top" title="微金宝">微</span>
                                            <span data-toggle="tooltip" data-placement="bottom" title="河南省">豫</span>
                                        </div>
                                        <p>8<sub>%</sub> </p>
                                        <p>年利率</p>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-4  col-sm-6  col-xs-12 ">
                                <a href="#" class="product_box">
                                    <div class="pull-left">
                                        <p>新手体验标签1002期望</p>
                                        <ul>
                                            <li>投资金额（元）</li>
                                            <li>投资金额（元）</li>
                                            <li>0.01</li>
                                            <li>0.01</li>
                                            <li>投资金额（元）</li>
                                            <li>投资金额（元）</li>
                                            <li>0.01</li>
                                            <li>0.01</li>
                                        </ul>
                                    </div>

                                    <div class="pull-right">
                                        <p>8<sub>%</sub></p>
                                        <p>年利率</p>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-4  col-sm-6  col-xs-12 ">
                                <a href="#" class="product_box">
                                    <div class="pull-left">
                                        <p>新手体验标签1002期望</p>
                                        <ul>
                                            <li>投资金额（元）</li>
                                            <li>投资金额（元）</li>
                                            <li>0.01</li>
                                            <li>0.01</li>
                                            <li>投资金额（元）</li>
                                            <li>投资金额（元）</li>
                                            <li>0.01</li>
                                            <li>0.01</li>
                                        </ul>
                                    </div>

                                    <div class="pull-right">
                                        <p>8<sub>%</sub></p>
                                        <p>年利率</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div role="tabpanel" class="tab-pane" id="profile">2</div>
                    <div role="tabpanel" class="tab-pane" id="messages">3</div>
                    <div role="tabpanel" class="tab-pane" id="settings">4</div>

                </div>

            </div>
        </div>
    </section>

    <!-- 新闻 -->
    <section class="wjs_news">
        <div class="container ">
            <div class="col-md-2  col-lg-offset-2 ">
                <h4>全部新闻</h4>
            </div>
            <div class="col-md-1 ">

                <div class="wjs_news_line hidden-sm hidden-xs"></div>
                <ul class="nav nav-tabs" role="tablist">

                    <li role="presentation" class="active"><a href="#home1" role="tab" data-toggle="tab"><span class="wjs_icon wjs_icon_news_01"></span></a></li>
                    <li role="presentation"><a href="#profile1" role="tab" data-toggle="tab"><span class="wjs_icon wjs_icon_news_02"></span></a></li>
                    <li role="presentation"><a href="#messages1" role="tab" data-toggle="tab"><span class="wjs_icon wjs_icon_news_03"></span></a></li>
                    <li role="presentation"><a href="#settings1" role="tab" data-toggle="tab"><span class="wjs_icon wjs_icon_news_04"></span></a></li>


                </ul>
            </div>

            <div class="col-md-7">


                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="home1">
                        <ul>

                            <li> <a href="#">2016-09-22【微还款】一周还款公告2016年1月18日-1月24日</a></li>
                            <li> <a href="#">2016-09-22【微还款】一周还款公告2016年1月18日-1月24日</a></li>
                            <li> <a href="#">2016-09-22【微还款】一周还款公告2016年1月18日-1月24日</a></li>
                            <li> <a href="#">2016-09-22【微还款】一周还款公告2016年1月18日-1月24日</a></li>
                            <li> <a href="#">2016-09-22【微还款】一周还款公告2016年1月18日-1月24日</a></li>
                            <li> <a href="#">2016-09-22【微还款】一周还款公告2016年1月18日-1月24日</a></li>
                            <li> <a href="#">2016-09-22【微还款】一周还款公告2016年1月18日-1月24日</a></li>
                            <li> <a href="#">2016-09-22【微还款】一周还款公告2016年1月18日-1月24日</a></li>
                        </ul>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="profile1">2</div>
                    <div role="tabpanel" class="tab-pane" id="messages1">3</div>
                    <div role="tabpanel" class="tab-pane" id="settings1">4</div>
                </div>

            </div>
        </div>


    </section>
    <!-- 合作伙伴 -->
    <footer class="wjs_partner">
        <div class="container">
            <h4>合作伙伴</h4>
            <ul>
                <li> <a href=""><span class="wjs_icon wjs_icon_partner01"></span></a> </span>
                </li>
                <li><a href=""><span class="wjs_icon wjs_icon_partner02"></span></a></li>
                <li><a href=""><span class="wjs_icon wjs_icon_partner03"></span></a></li>
                <li><a href=""><span class="wjs_icon wjs_icon_partner04"></span></a></li>
                <li><a href=""><span class="wjs_icon wjs_icon_partner05"></span></a></li>
                <li><a href=""><span class="wjs_icon wjs_icon_partner06"></span></a></li>
                <li><a href=""><span class="wjs_icon wjs_icon_partner07"></span></a></li>
                <li><a href=""><span class="wjs_icon wjs_icon_partner08"></span></a></li>
                <li><a href=""><span class="wjs_icon wjs_icon_partner09"></span></a></li>
            </ul>
        </div>

    </footer>
</div>

</template>

<style scoped>
    @import '../../lib/wjs_bootstrap/bootstrap/css/bootstrap.css';
    @import '../../lib/wjs_bootstrap/css/index.css';
</style>

<script>


   
import $ from 'jquery'   
    import '../../lib/wjs_bootstrap/bootstrap/js/bootstrap.js'

    import   {getImage,bannerCarousel,render}   from '../../lib/wjs_bootstrap/js/index.js'


export default {
    data() {
        return {
            swipList:[],
            isM:false
        }
    },mounted() {
            //   isM=render();
               $('[data-toggle="tooltip"]').tooltip();
               $(window).on('resize', ()=>{
                   this.isM=render();
               }).trigger('resize');
              
              getImage((result)=>{
                  this.swipList=result
                   console.log('结果确是'+this.swipList)
              });
             
             bannerCarousel()
        },
    }

</script>