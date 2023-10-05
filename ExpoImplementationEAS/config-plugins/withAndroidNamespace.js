// NOTE: temporary solution - https://github.com/expo/expo/issues/21784#issuecomment-1478667530
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withAppBuildGradle } = require('@expo/config-plugins');

const withAndroidNamespace = config => {
  return withAppBuildGradle(config, config => {
    const buildGradle = config.modResults.contents;
    const namespace = config.android.package.toString();
    const newContents = buildGradle.replace(
      /namespace (.*)\n/,
      `namespace '${namespace}'\n`
    );
    config.modResults.contents = newContents;
    console.log(`withAndroidNamespace: change namespace to ${namespace}`);
    return config;
  });
};

module.exports = withAndroidNamespace;
