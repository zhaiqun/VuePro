<template>

    <div>
        <mt-swipe :auto="2000">
  <mt-swipe-item v-for="(item, index) in swipList" :key="index">
    <img :src="item.picUrl" alt="" srcset="">
  </mt-swipe-item>
  
</mt-swipe>
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
