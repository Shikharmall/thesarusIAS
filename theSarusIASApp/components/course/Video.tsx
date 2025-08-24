import React, { useEffect, useRef, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    useWindowDimensions,
    Animated,
    TouchableOpacity,
    Image,
    Alert,
    Pressable,
    Dimensions
} from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import * as ScreenOrientation from "expo-screen-orientation";


const lectures = [
    { id: 1, title: "Introduction to React Native", duration: "5:23", src: "https://res.cloudinary.com/drb1ds8e3/video/upload/v1755963094/demo_xskpxn.mp4" },
    { id: 2, title: "Setting up Environment", duration: "8:41", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
];

export default function VideoScreen() {
    const { width, height } = useWindowDimensions();
    const [orientation, setOrientation] = useState<ScreenOrientation.Orientation>(
        ScreenOrientation.Orientation.PORTRAIT_UP
    );

    // const [videoSource, setVideoSource] = useState(lectures[0].src);

    const [videoSource, setVideoSource] = useState(lectures[0].src);

    const player = useVideoPlayer(videoSource, (player) => {
        player.loop = false;
        player.showNowPlayingNotification = true;
        player.play();
    });

    // const { isPlaying } = useEvent(player, "playingChange", {
    //     isPlaying: player.playing,
    // });

    // Blink watermark animation
    const opacity = useRef(new Animated.Value(1)).current;
    const [position, setPosition] = useState({ x: 20, y: 20 });

    // useEffect(() => {
    //     // Detect orientation changes
    //     const subscription = ScreenOrientation.addOrientationChangeListener((event) => {
    //         setOrientation(event.orientationInfo.orientation);
    //     });

    //     return () => {
    //         ScreenOrientation.removeOrientationChangeListener(subscription);
    //     };
    // }, []);

    // Start blinking watermark
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(opacity, { toValue: 0, duration: 600, useNativeDriver: true }),
                Animated.timing(opacity, { toValue: 1, duration: 600, useNativeDriver: true }),
            ])
        ).start();

        const interval = setInterval(() => {
            const randomX = Math.random() * (width - 100);
            const randomY = Math.random() * ((width * 9) / 16 - 40);
            setPosition({ x: randomX, y: randomY });
        }, 3000);

        return () => clearInterval(interval);
    }, [width]);

    // Dynamic video height: fullscreen in landscape
    const videoHeight =
        orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
            orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT
            ? height
            : width * (9 / 16);

    const enterFullscreen = async () => {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    };

    const exitFullscreen = async () => {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    };

    return (
        <ScrollView style={styles.container}>
            {/* Video Player */}
            <View style={[styles.videoContainer, { width, height: videoHeight }]}>
                <VideoView
                    style={StyleSheet.absoluteFill}
                    player={player}
                    allowsFullscreen
                    allowsPictureInPicture
                    startsPictureInPictureAutomatically
                // onFullscreenEnter={enterFullscreen}
                // onFullscreenExit={exitFullscreen}
                />

                {/* <View style={{ position: "absolute", right: 10, bottom: 10 }}>
                    <Pressable>
                        <Text style={{color :'#fff'}}>Full</Text>
                    </Pressable>
                </View> */}

                {/* <View style={{ position: "absolute", right: 10, top: 10 }}>
                    <Pressable onPress={enterFullscreen}>
                        <Text style={{ color: "#fff" }}>⛶ Fullscreen</Text>
                    </Pressable>
                </View>

                <View style={{ position: "absolute", left: 10, top: 10 }}>
                    <Pressable onPress={exitFullscreen}>
                        <Text style={{ color: "#fff" }}>⛶ Fullscreen</Text>
                    </Pressable>
                </View> */}

                {/* Blinking watermark */}
                <Animated.Text
                    style={[
                        styles.watermark,
                        { left: position.x, top: position.y },
                    ]}
                >
                    Shivam Singh
                    {'\n'}
                    9869859875
                </Animated.Text>
            </View>

            {/* Course Details (hidden in landscape) */}
            {orientation === ScreenOrientation.Orientation.PORTRAIT_UP && (
                <>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title}>📘 UPSC Prelims</Text>
                        <Text style={styles.subtitle}>Instructor: Siddhant Agnihotri</Text>
                    </View>

                    {/* Lecture List */}
                    <View style={styles.lecturesContainer}>
                        <Text style={styles.sectionTitle}>📚 Lectures</Text>
                        {lectures.map((lecture, index) => (
                            <TouchableOpacity
                                key={lecture.id}
                                style={[styles.lectureItem, { backgroundColor: lecture?.src === videoSource ? '#d6d6d6ff' : '#ffffffff' }]}
                                //onPress={() => setVideoSource(lecture.src)}
                                onPress={() => setVideoSource(lecture.src)}
                            >
                                <View style={styles.thumbnailWrapper}>
                                    <Image
                                        source={require("../assets/images/thumbnail.png")}
                                        style={styles.thumbnail}
                                        resizeMode="cover"
                                    />
                                    <Text style={styles.lectureDuration}>{lecture.duration}</Text>
                                </View>
                                <Text style={styles.lectureTitle}>{lecture.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff", marginTop: 40 },
    videoContainer: { backgroundColor: "black", overflow: "hidden" },
    watermark: {
        position: "absolute",
        fontSize: 16,
        fontWeight: "700",
        color: "rgba(255,255,255,0.8)",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    detailsContainer: {
        padding: 16,
        borderTopWidth: 1,
        borderColor: "#ddd",
    },
    title: { fontSize: 18, fontWeight: "500", marginBottom: 6 },
    subtitle: { fontSize: 14, fontWeight: "400", marginBottom: 10 },
    lecturesContainer: { padding: 16, borderTopWidth: 1, borderColor: "#ddd" },
    sectionTitle: { fontSize: 18, fontWeight: "700", marginBottom: 10 },
    lectureItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderColor: "#eee",
    },
    thumbnailWrapper: {
        position: "relative",
        width: 80,
        height: 50,
        marginRight: 12,
        borderRadius: 6,
        overflow: "hidden",
    },
    thumbnail: { width: "100%", height: "100%", borderRadius: 6 },
    lectureDuration: {
        position: "absolute",
        bottom: 4,
        right: 6,
        fontSize: 12,
        color: "#fff",
        backgroundColor: "rgba(0,0,0,0.6)",
        paddingHorizontal: 4,
        paddingVertical: 1,
        borderRadius: 3,
    },
    lectureTitle: { flex: 1, fontSize: 15, color: "#333" },
});
