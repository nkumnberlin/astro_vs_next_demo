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
            ASTRO_PUBLIC_WEBINY_API_URL:"",
    WEBINY_API_TOKEN:""
        }
    })
    // Add the site's URL to stack output
    stack.addOutputs({
        URL: site.url,
    });
}
