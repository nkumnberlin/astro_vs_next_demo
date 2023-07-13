import {StackContext, StaticSite, AstroSite} from "sst/constructs";

export function API({stack}: StackContext) {
    // const site = new AstroSite(stack, "site", {
    //     path: "astro_demo/",
    //     cdk: {
    //         id: 'astro_dev'
    //     }
    // });

    const site = new StaticSite(stack, 'site', {
        path: "astro_demo/",
        buildOutput: "dist",
        buildCommand: "yarn astro build",
        environment: {
            ASTRO_PUBLIC_WEBINY_API_URL:"https://d9wiwukh06btt.cloudfront.net/cms/read/de-DE",
    WEBINY_API_TOKEN:"ad8493266156763b7f16ea7e14ce2b1c1bf65816c0da0b88"
        }
    })
    // Add the site's URL to stack output
    stack.addOutputs({
        URL: site.url,
    });
}
