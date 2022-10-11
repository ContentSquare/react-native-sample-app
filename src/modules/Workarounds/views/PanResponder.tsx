import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  PanResponder as PanResponderComponent,
} from 'react-native';
import Contentsquare from '@contentsquare/react-native-bridge';

export const PanResponder = () => {
  var _previousLeft: number = 20;
  var _previousTop: number = 84;
  const [left, setLeft] = useState(_previousLeft);
  const [top, setTop] = useState(_previousTop);
  const [isPressed, setIsPressed] = useState(false);

  const circle: React.ElementRef<typeof View> | null = null;

  const panResponder = useRef(
    PanResponderComponent.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: () => {
        // stop the Contentsquare tracking when the pan gesture starts
        Contentsquare.stopTracking();
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
        setIsPressed(true);
      },
      onPanResponderMove: (_, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
        setLeft(_previousLeft + gestureState.dx);
        setTop(_previousTop + gestureState.dy);
      },
      onPanResponderTerminationRequest: () => true,
      onPanResponderRelease: (_, gestureState) => {
        // resume tracking as the gesture ends
        Contentsquare.resumeTracking();
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        setIsPressed(false);
        _previousLeft += gestureState.dx;
        _previousTop += gestureState.dy;
      },
      onPanResponderTerminate: (_, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
        setIsPressed(false);
        _previousLeft += gestureState.dx;
        _previousTop += gestureState.dy;
      },
      onShouldBlockNativeResponder: () => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <View
        ref={circle}
        style={[
          styles.circle,
          {
            transform: [{ translateX: left }, { translateY: top }],
            backgroundColor: isPressed ? 'blue' : 'green',
          },
        ]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

const CIRCLE_SIZE = 80;
const styles = StyleSheet.create({
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    backgroundColor: 'green',
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  container: {
    flex: 1,
    height: 500,
  },
});
