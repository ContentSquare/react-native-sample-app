// Use these imports in SDK 46 and lower
import { ConfigPlugin, withInfoPlist } from '@expo/config-plugins';

// In SDK 47 and higher, use the following imports instead:
// import { ConfigPlugin, InfoPlist, withInfoPlist } from 'expo/config-plugins';
// import { ExpoConfig } from 'expo/config';

const CS_URL_SCHEME = "cs-$(PRODUCT_BUNDLE_IDENTIFIER)"

export const withCSCustomConfig: ConfigPlugin<void> = (config) => {
  return withInfoPlist(config, (config) => {
    const hasURLSchemes = config.modResults.CFBundleURLTypes && config.modResults.CFBundleURLTypes.length > 0;
    if (hasURLSchemes) {
      if (config.modResults.CFBundleURLTypes && config.modResults.CFBundleURLTypes.find((URLType) => URLType.CFBundleURLSchemes.includes(CS_URL_SCHEME)) === undefined) {
        config.modResults.CFBundleURLTypes && config.modResults.CFBundleURLTypes[0].CFBundleURLSchemes.push(CS_URL_SCHEME);
      }
    } else {
      config.modResults.CFBundleURLTypes = [
        { CFBundleURLSchemes: [CS_URL_SCHEME] },
      ];
    }
    return config;
  });
};
