<template>

    <div>
        <mt-swipe :auto="2000">
  <mt-swipe-item v-for="(item, index) in swipList" :key="index">
    <img :src="item.picUrl" alt="" srcset="">
  </mt-swipe-item>
</mt-swipe>
  <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link  to="/home/percentageLayout">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">百分比布局（原生js） </div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link  to="/home/bootstrap">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">bootstrap</div></router-link ></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link  to="#">
		                    
                            <span class="mui-icon mui-icon-chatbubble"></span>
                            <div class="mui-media-body">jQury</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link  to="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link  to="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link  to="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></router-link></li>
		           
		        </ul>
  
   <br>   <br>   <br>   <br>
    </div>
</template> 

<script>
import  {Toast}  from 'mint-ui'
export default {
    data(){
       
        return {
            swipList:[]
        }
    },
    created(){

        this.getSwipePic();
    },
    methods: {
        getSwipePic(){

            this.axios.get('/publickTest/test.json')
      .then(response => {
          this.swipList = response.data
        console.log(response.data)})
      .catch(function (error) { // 请求失败处理
        console.log("失败"+error);
        Toast('加载轮播失败');
      });
        }
    },
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
        &:nth-child(1){
         background-color: yellow;
        }
            &:nth-child(2){
         background-color: green;
        }
        img{

            width: 100%;
            height: 100%;
        }
  
}
}

</style>
