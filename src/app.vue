<template>
    <div  class="containner">


<mt-header fixed title="z小q的主页"></mt-header>
<transition>
 <router-view></router-view>
</transition>

<nav class="mui-bar mui-bar-tab">
			<router-link  to='/home' class="mui-tab-item" >
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">前端学习</span>
			</router-link>
			<router-link  to='/customer' class="mui-tab-item">
				<span class="mui-icon mui-icon-person-filled"></span>
				<span class="mui-tab-label">工作经历</span>
			</router-link>
			<router-link to='/cart' class="mui-tab-item " >
				<span class="mui-icon mui-icon-extra mui-icon-extra-heart-filled"></span>
				<span class="mui-tab-label">业余爱好</span>
			</router-link>
			<router-link to='/search' class="mui-tab-item" >
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
		 
    </div>
</template>


<style lang="scss" scoped>
.containner{

	padding-top: 40px;
	padding-bottom: 50px;
	overflow: hidden;

	.v-leave-to{

		opacity: 0;
		transform:translateX(-100%);
		position: absolute;
	}
	.v-enter
	{

		opacity: 0;
		transform:translateX(100%)
	}

	.v-enter-active,
	.v-leave-active{

		transition: all 0.2s linear;
	}
}
</style>

