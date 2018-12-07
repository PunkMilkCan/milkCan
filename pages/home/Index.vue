<template>
    <div class="page-index">
        <p>首页</p>
        <p>首页</p>
        <p>首页</p>
        <p>首页</p>
        <p>首页</p>
        <p>首页</p>
        <p>首页</p>
        <p>首页</p>
        <p>首页</p>
        <p>首页</p>
        <p>首页</p>
        <p>首页</p>
        <p>首页</p>
        <p>首页</p>
        <p>首页</p>
        <p>首页</p>
    </div>
</template>

<script>
function setState(store) {}

export default {
    name: 'home_index',
    metaInfo: {
        title: '首页',
        titleTemplate: '%s - 牛奶罐时间',
        meta: [
            {name: 'keywords', content: '牛奶罐'},
            {name: 'description', content: '这是一个牛奶罐，朋克味的！'}
        ]
    },
    async asyncData({store, route}) {
        setState(store);
    },
    methods: {
        jumpTo (url) {
            this.$router.push(url)
        }
    }
};
</script>

<style lang="stylus" scoped>
.page-index
  width 100%
  height 1000px
</style>
