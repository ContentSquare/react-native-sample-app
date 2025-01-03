#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTLinkingManager.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"AdobeAnalytics";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  
  [AEPMobileCore setLogLevel: AEPLogLevelDebug];
  [AEPMobileCore configureWithAppId:@"<YOUR_APP_ID>"];

  const UIApplicationState appState = application.applicationState;
  
  [AEPMobileCore registerExtensions: @[
    AEPMobileLifecycle.class,
    AEPMobileUserProfile.class,
    AEPMobileIdentity.class,
    AEPMobileLifecycle.class,
    AEPMobileSignal.class,
    AEPMobileEdgeIdentity.class,
    AEPMobileEdge.class,
    AEPMobileAssurance.class,
  ] completion:^{
    if (appState != UIApplicationStateBackground) {
      [AEPMobileCore lifecycleStart:nil];
    }
  }];
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}
 
- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  //  return [RCTLinkingManager application:application openURL:url options:options];
  // NOTE: https://github.com/adobe/aepsdk-react-native/tree/main/packages/assurance#initializing
  [AEPMobileAssurance startSessionWithUrl:url];
  return true;
}

@end
