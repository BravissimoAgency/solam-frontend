import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

export default function(ctx, inject) {
    const gtm = new GTM(ctx, {
        id: "GTM-MVGKCPM",
        layer: "dataLayer",
        pageTracking: true,
        pageViewEventName: "nuxtRoute",
        respectDoNotTrack: false,
        dev: true,
        query: {},
        scriptURL: "//www.googletagmanager.com/gtm.js",
        noscriptURL: "//www.googletagmanager.com/ns.html",
        env: {} // env is supported for backward compability and is alias of query
    });

    inject("gtm", gtm);
}

class GTM {
    constructor(ctx, options) {
        this.ctx = ctx;
        this.options = options;
    }

    init() {
        window[this.options.layer] = window[this.options.layer] || [];

        this.addHeadScripts();

        this.pushEvent({
            event: "gtm.js",
            "gtm.start": new Date().getTime()
        });

        if (this.options.pageTracking && (!this.options.respectDoNotTrack || !this.hasDNT())) {
            this.initPageTracking();
        }
    }

    addHeadScripts() {
        this.addGtmScript();
        this.addAnalyticsScript();
    }

    addGtmScript() {
        const queryParams = Object.assign({}, this.options.env, this.options.query);

        queryParams.id = this.options.id;

        if (this.options.layer) {
            queryParams.l = this.options.layer;
        }

        const queryString = Object.keys(queryParams)
            .filter(key => queryParams[key] !== null && queryParams[key] !== undefined)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
            .join("&");

        let script = document.createElement("script");
        script.async = true;
        script.id = "gtag";
        (script.src = (this.options.scriptURL || "//www.googletagmanager.com/gtm.js") + "?" + queryString),
            document.head.appendChild(script);
    }

    addAnalyticsScript() {
        Vue.use(VueAnalytics, Object.assign({ router: this.ctx.router }, {
            id: 'UA-101268558-39'
        }))
    }

    initPageTracking() {
        this.ctx.app.router.afterEach((to, from) => {
            setTimeout(() => {
                window[this.options.layer].push(
                    to.gtm || {
                        event: this.options.pageViewEventName,
                        pageType: "PageView",
                        pageUrl: to.fullPath,
                        routeName: to.name
                    }
                );
            }, 0);
        });
    }

    pushEvent(obj) {
        try {
            if (!window || !window[this.options.layer]) {
                throw new Error("missing GTM dataLayer");
            }
            if (typeof obj !== "object") {
                throw new Error("event should be an object");
            }
            if (!obj.hasOwnProperty("event")) {
                throw new Error("missing event property");
            }
            window[this.options.layer].push(obj);
        } catch (err) {
            console.error("[ERROR] [GTM]", err);
        }
    }

    hasDNT() {
        return (
            window.doNotTrack === "1" ||
            navigator.doNotTrack === "yes" ||
            navigator.doNotTrack === "1" ||
            navigator.msDoNotTrack === "1" ||
            (window.external &&
                window.external.msTrackingProtectionEnabled &&
                window.external.msTrackingProtectionEnabled())
        );
    }
}
