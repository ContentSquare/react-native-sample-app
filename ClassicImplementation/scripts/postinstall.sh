#!/bin/bash

# Patch react-native-screens 4.2.0 codegen issue
NATIVE_COMP_FILE="node_modules/react-native-screens/src/fabric/bottom-tabs/BottomTabsAccessoryContentNativeComponent.ts"
if [ -f "$NATIVE_COMP_FILE" ]; then
  echo "Patching $NATIVE_COMP_FILE for codegen compatibility..."
  # Replace the custom type with a string literal type inline
  sed -i '' "s/type BottomAccessoryEnvironment = 'regular' | 'inline';//g" "$NATIVE_COMP_FILE"
  sed -i '' "s/CT.WithDefault<BottomAccessoryEnvironment, 'regular'>/CT.WithDefault<'regular' | 'inline', 'regular'>/g" "$NATIVE_COMP_FILE"
fi

echo "Dependencies installed successfully!"
