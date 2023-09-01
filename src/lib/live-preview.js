// import { ContentstackGatsby } from "../../plugin/src/live-preview";
import { ContentstackGatsby } from "gatsby-source-contentstack/live-preview";
import ContentstackLivePreview from "@contentstack/live-preview-utils";

export const livePreview = new ContentstackGatsby({
    api_key: process.env.GATSBY_CONTENTSTACK_API_KEY,
    environment: process.env.GATSBY_CONTENTSTACK_ENVIRONMENT,
    live_preview: {
        management_token: process.env.GATSBY_CONTENTSTACK_MANAGEMENT_TOKEN,
        enable: true,
        host: process.env.GATSBY_CONTENTSTACK_API_HOST
    }
});

ContentstackLivePreview.init({
    stackSdk: livePreview.stackSdk,
})
