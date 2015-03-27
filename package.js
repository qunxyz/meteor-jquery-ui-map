Package.describe({
  name: "jackyqiu:meteor-jquery-ui-map",
  summary: "Google maps v3 plugin for jQuery and jQuery Mobile",
  version: "3.0.rc1",
  git: "https://github.com/qunxyz/meteor-jquery-ui-map.git"
});

Package.onUse(function (api) {
  api.versionsFrom("1.0");

  api.use('jquery', 'client');

  api.use("mizzao:build-fetcher@0.2.0", 'client');

  api.add_files('jquery-ui-map.fetch.json', 'client');
});
