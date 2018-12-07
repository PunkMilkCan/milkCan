<template>
    <div class="skeleton-wrapper">
        <div class="wrapper">
            <figure class="milkcan">
                <p class="slogan">M&nbsp;i&nbsp;l&nbsp;k</p>
            </figure>
            <div class="shadow"></div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'skeleton'
};
</script>

<style lang="stylus" scoped>
.skeleton-wrapper
    text-align center
    display --webkit-box
    display flex
    align-items center
    .wrapper
        position absolute
        left 50%
        top 50%
        margin -70px 0 0 -90px
</style>
<style>
.milkcan {
    width: 90px;
    height: 140px;
    background: radial-gradient(circle at top left,
    transparent 8px, #E96462 0) top left,
    radial-gradient(circle at top right,
            transparent 8px, #E96462 0) top right,
    radial-gradient(circle at bottom right,
            transparent 8px, #E96462 0) bottom right,
    radial-gradient(circle at bottom left,
            transparent 8px, #E96462 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
    position: relative;
    text-align: center;
    transform: rotate(-50deg);
    animation: shake 1s infinite;
}
.milkcan:before {
    content: '';
    position: absolute;
    width: 70px;
    height: 10px;
    background: #E0FFFF;
    border-radius: 100%;
    left: 10px;
    top: -5px;
    border-top: 3px solid #D1EEEE;
}
.milkcan:after {
    content: '';
    position: absolute;
    width: 70px;
    height: 10px;
    background: #E96462;
    border-radius: 100%;
    left: 10px;
    bottom: -5px;
    border-bottom: 1px solid #D1EEEE;
}
.milkcan > .slogan {
	transform: rotate(90deg) translate(-50%, 110%);
	position: absolute;
	top: 50%;
	left: 50%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	font-size: 30px;
	color: #fff;
}
.shadow {
	width: 200px;
	height: 10px;
	background: #eee;
	border-radius: 100%;
	animation: scale 1s infinite;
	transform: scale(1);
	transform-origin: (50%, 50%)
}
@keyframes shake {
    0% {
    	transform: rotate(-50deg);
    }
    50% {
    	transform: rotate(-30deg);
    }
    100% {
    	transform: rotate(-50deg);
    }
}
@keyframes scale {
    0% {
    	transform: scale(1);
    }
    50% {
    	transform: scale(.6);
    }
    100% {
    	transform: scale(1);
    }
}
</style>
