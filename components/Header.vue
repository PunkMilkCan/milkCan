<template>
  <div>
  	<transition name="slide">
	    <header v-if="isHeaderShow">
	      <div class="wrapper center">
	        <i @click="showMenu" class="fa fa-heart"></i>
	        <a @click="change" target="_blank" v-if="slogan && slogan.href" :href="slogan.href" title="111"><p>{{slogan ? slogan.content : ''}}<i @click="showMenu" class="fa fa-external-link"></i></p></a>
	        <p @click="change" v-else>{{slogan ? slogan.content : ''}}</p>
	      </div>
	    </header>
	  </transition>
	  <transition name="slide">
	  	<div class="black" v-if="isMenuShow">
	  	</div>
	  </transition>
    <transition name="fade">
      <div class="menu" v-if="isMenuShow">
      	<div class="cell" @click="(e) => choose(e, 1)" :class="{ active: activeIndex === 1 }">首页<i class="fa fa-hand-o-left"></i></div>
      	<div class="cell" @click="(e) => choose(e, 2)" :class="{ active: activeIndex === 2 }">个人信息<i class="fa fa-hand-o-left"></i></div>
      	<div class="cell" @click="(e) => choose(e, 3)" :class="{ active: activeIndex === 3 }">作品展示<i class="fa fa-hand-o-left"></i></div>
      	<div class="cell" @click="(e) => choose(e, 4)" :class="{ active: activeIndex === 4 }">业余爱好<i class="fa fa-hand-o-left"></i></div>
      	<div class="cell" @click="(e) => choose(e, 5)" :class="{ active: activeIndex === 5 }">意见反馈<i class="fa fa-hand-o-left"></i></div>
      </div>
    </transition>
  </div>
</template>

<script>
import data from '@/assets/fav/slogan.json'
import { throttle } from '@/assets/fav/utils.js'
export default {
  name: 'my-header',
  data () {
    return {
      slogan: null,
      isMenuShow: false,
      isHeaderShow: true,
      scrollPosition: 0,
      activeIndex: 1
    }
  },
  watch: {
    isMenuShow () {
      if (this.isMenuShow) {
        document.body.addEventListener('click', this.hideMenu)
      } else {
        document.body.removeEventListener('click', this.hideMenu)
      }
    }
  },
  mounted () {
    this.change()
    window.addEventListener('scroll', throttle(this.scrollFunc, 500, 1000))
  },
  methods: {
    change () {
      let len = data.slogan.length
      let random = Math.floor(Math.random() * len)
      this.slogan = data.slogan[random]
    },
    showMenu () {
      this.isMenuShow = true
    },
    hideMenu () {
      this.isMenuShow = false
    },
    scrollFunc () {
			let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
			if (scrollTop > this.scrollPosition) {
				this.isHeaderShow = false
			} else {
				this.isHeaderShow = true
			}
			this.scrollPosition = scrollTop
    },
    choose (e, args) {
    	e.stopPropagation()
    	this.activeIndex = args
    	setTimeout(() => {
    		this.isMenuShow = false
    		this.$router.replace('/home/profile')
    	}, 300)
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../static/style/common.styl'
header
  height 45px
  background -webkit-linear-gradient(left, $color-bg-header-start, $color-bg-header-end)
  background linear-gradient(to right, $color-bg-header-start, $color-bg-header-end)
  box-shadow 0px 1px 2px 1px $color-shadow;
  position fixed
  width 100%
  .wrapper
    padding 0 2%
    display -webkit-box
    display flex
    -webkit-box-align center
    align-items center
    height 100%
    color #fff
    .fa-heart
      margin-right 8px
      transform-origin 50% 110%
      transform scale(1)
      animation scale 1s infinite
      cursor pointer !important
    p
      word-break keep-all
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
      cursor pointer !important
    a
    	overflow hidden
    	color #fff
    	text-decoration none
    	.fa
    		font-size .8rem
    	&:hover
    		text-decoration underline
.menu
  position fixed
  height 100%
  width 70%
  background -webkit-linear-gradient(right top, $color-bg-header-start , $color-bg-header-end)
  background linear-gradient(to bottom left, $color-bg-header-start , $color-bg-header-end)
  overflow-y scroll
  .cell
  	width 40%
  	font-size 25px
  	padding 6% 9%
  	color $color-bg-header-end
  	background #eee
  	border-top-right-radius 40px
  	border-bottom-right-radius 40px
  	margin-top 10%
  	transform rotate(-4deg)
  	transform-origin 0% 0%
  	margin-left -4%
  	transition all .3s
  	position relative
  	.fa
  		position absolute
  		right -40px
  		color #fff
  		top 50%
  		margin-top -.5em
  		display none
  	&.active
  		background #fff
  		transform rotate(0)
  		margin-left 0
  		color $color-bg-header-start
  .cell.active
  	&>.fa
  		display block
.black
	height 100%
	width 100%
	position fixed
	background rgba(0, 0, 0, .6)
@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
<style>
.fade-enter-active, .fade-leave-active  {
  transition: all .5s ease;
}
.fade-enter, .fade-leave-to {
  transform: translateX(-500px);
  opacity: 0;
}
.slide-enter-active, .slide-leave-active  {
  transition: all 1s ease;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
}
</style>