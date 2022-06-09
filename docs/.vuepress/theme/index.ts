import { gungnirTheme } from 'vuepress-theme-gungnir'
import { path } from "@vuepress/utils";

import type { Theme } from "vuepress";
import type { GungnirThemeOptions } from "vuepress-theme-gungnir";

export const commentTheme = (options:  GungnirThemeOptions): Theme => ({
  name: "comment-theme",

  extends: gungnirTheme(options),

  layouts: {
    // we override the default layout to provide comment service
    Post: path.resolve(__dirname, 'layouts','Post.vue'),
  },
});
