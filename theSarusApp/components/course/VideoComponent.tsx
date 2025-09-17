import * as ScreenOrientation from "expo-screen-orientation";
import { useVideoPlayer, VideoView } from "expo-video";
import React, { useRef } from "react";
import { Button, StyleSheet, View } from "react-native";

export default function VideoComponent() {
  const player = useVideoPlayer(
    { uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" },
    (player) => {
      player.play();
    }
  );

  const videoRef = useRef<VideoView>(null);

  const handleEnterFullscreen = async () => {
    try {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
      await videoRef.current?.enterFullscreen();
    } catch (error) {
      console.warn("Fullscreen enter failed:", error);
    }
  };

  const handleExitFullscreen = async () => {
    try {
      await videoRef.current?.exitFullscreen();
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    } catch (error) {
      console.warn("Fullscreen exit failed:", error);
    }
  };

  return (
    <View style={styles.container}>
      <VideoView
        ref={videoRef}
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
        onFullscreenExit={handleExitFullscreen}
      />
      <Button title="Go Fullscreen" onPress={handleEnterFullscreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: 320,
    height: 180,
    backgroundColor: "black",
  },
});
