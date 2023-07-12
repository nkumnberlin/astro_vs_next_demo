import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "sstastrowebiny",
      region: "eu-central-1",
      profile: 'default',
      bootstrap: {
        stackName: 'astro'
      }
    };
  },
  stacks(app) {
    app.stack(API);
  }
} satisfies SSTConfig;
