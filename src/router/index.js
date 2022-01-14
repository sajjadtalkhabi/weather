/**
 * Vue Router
 *
 * @library
 *
 * https://router.vuejs.org/en/
 */

// Lib imports
import Vue from "vue";
import Router from "vue-router";
import Meta from "vue-meta";
import Paths from "./path";
Vue.use(Router);
Vue.use(Meta);

let router = null;

create();
beforeLoad();


export default router;

function create() {
    router = new Router({
        mode: "history",
        routes: Paths
            .map((path) => route(path))
            .concat([{ path: "*", redirect: '/' }]),
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition;
            }
            if (to.hash) {
                return { selector: to.hash };
            }
            return { x: 0, y: 0 };
        },
    });
}

function route(options) {
    let path = options.path;
    let view = options.view;
    let name = options.name;
    let props = !!options.props;
    let meta = options.meta ? options.meta : "";
    return {
        name: name || view,
        path,
        props,
        meta,
        component: () =>
            import("@/views/" + view + '.vue'),
    };
}

function beforeLoad() {
    router.beforeEach((to, from, next) => {
        setTitle(to);
        next();
    });
}

function setTitle(to) {
    const DEFAULT_TITLE = "weather";
    document.title = to.meta.title || DEFAULT_TITLE;
}
