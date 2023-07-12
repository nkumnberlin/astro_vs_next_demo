import {StackContext, StaticSite, AstroSite} from "sst/constructs";

export function API({stack}: StackContext) {
    // const site = new AstroSite(stack, "site", {
    //     path: "astro_demo/",
    //     cdk: {
    //         id: 'astro_dev'
    //     }
    // });

    const site = new StaticSite(stack, 'site', {
        path: "astro_demo/"
    })
    // Add the site's URL to stack output
    stack.addOutputs({
        URL: site.url,
    });
}
