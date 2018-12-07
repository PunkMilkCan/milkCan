import Vue from 'vue';
import Router from 'vue-router';

    
import _15441998834579d49a922ebc8a6d77ca82c0a74289b98 from '@/pages/Appshell.vue';
    

    
import _1544199883457d2462dcf0c7beccd286c658e08187914 from '@/pages/Error.vue';
    

    
import _1544199883457fa552d893034483b4043b5abfffbef71 from '@/pages/Home.vue';
    

    
import _15441998834579f95ef222a6266ff3feeaf6e90743c57 from '@/pages/home/Index.vue';
    

    
import _15441998834573dcf77cede6b0e494aef9fb307e22209 from '@/pages/home/Profile.vue';
    

    
import _154419988345767830448037326425509e44bce7632b7 from '@/pages/Index.vue';
    


let routes = [
    {
        "path": "/appshell",
        "component": _15441998834579d49a922ebc8a6d77ca82c0a74289b98,
        "meta": {},
        "name": "appshell"
    },
    {
        "path": "/home",
        "component": _1544199883457fa552d893034483b4043b5abfffbef71,
        "meta": {},
        "children": [
            {
                "path": "",
                "component": _15441998834579f95ef222a6266ff3feeaf6e90743c57,
                "meta": {},
                "name": "home"
            },
            {
                "path": "profile",
                "component": _15441998834573dcf77cede6b0e494aef9fb307e22209,
                "meta": {},
                "name": "homeProfile"
            }
        ]
    },
    {
        "path": "/",
        "component": _154419988345767830448037326425509e44bce7632b7,
        "meta": {},
        "name": "index"
    },
    {
        "path": "/error",
        "component": _1544199883457d2462dcf0c7beccd286c658e08187914,
        "meta": {},
        "name": "error",
        "alias": "*"
    }
];

Vue.use(Router);




const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition;
    } else {
        const position = {};
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash;
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position;
    }
};



export const keepAlivePages = routes.filter(route => route.keepAlive || route.meta.keepAlive)
                            .map(route => route.name);

export function createRouter() {
    let router = new Router({
        mode: 'history',
        base: '/',
        scrollBehavior,
        routes
    });



    

    router.beforeEach((to, from, next) => {
        if (router.app.$store) {
            if (router.app.$store.state.pageTransition.enable) {
                
                let effect = 'fade';
                
                router.app.$store.commit('pageTransition/setType', 'fade');
                router.app.$store.commit('pageTransition/setEffect', effect);
            }
        }
        next();
    });


    return router;
}
