<template>
    <div class="page-home">
        <my-header></my-header>
        <router-view></router-view>
    </div>
</template>

<script>
function setState(store) {}
import Header from '@/components/Header'
export default {
    name: 'home',
    components: {
        'my-header': Header
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
@import '../static/style/common.styl'
.page-home
    width 100%
</style>
