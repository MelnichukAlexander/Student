import React, { useRef, useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  Button
} from "react-native";

const images = new Array(
  'https://i.pinimg.com/736x/48/c6/13/48c6137c650fe15b345fb51c1267b23f.jpg',
  'https://i.pinimg.com/236x/98/ad/a1/98ada104526fed6d5883aed3e191e11e.jpg',
  'https://i.pinimg.com/236x/08/62/f7/0862f765ac85a712484fcde5f7ee8bdb.jpg',
  'https://i.pinimg.com/474x/65/7c/7c/657c7cc135b2273a01e9de7289bd72b8.jpg',
  'https://i.pinimg.com/236x/71/83/2b/71832b17ba6ff68196ac65400d936571.jpg',
  'https://i.pinimg.com/474x/73/40/0f/73400f3e8676d7690ee366ab8c51fa32.jpg'
);

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000, // 5 секунд
      useNativeDriver: true,
    }).start();
  });

  return (
    <Animated.View style={{ ...props.style, opacity: fadeAnim }}>
      {props.children}
    </Animated.View>
  );
};

const App = () => {
  const [showLaunchScreen, setShowLaunchScreen] = useState(false);
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();

  const handleShowLaunchScreen = () => {
    setShowLaunchScreen(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Показать картинки" onPress={handleShowLaunchScreen} />
      {showLaunchScreen && (
        <FadeInView style={styles.fadeContainer}>
          <View style={styles.scrollContainer}>
            <ScrollView
              horizontal={true}
              style={styles.scrollViewStyle}
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={Animated.event([
                {
                  nativeEvent: {
                    contentOffset: {
                      x: scrollX,
                    },
                  },
                },
              ],
              { useNativeDriver: false })}
              scrollEventThrottle={1}
            >
              {images.map((image, imageIndex) => {
                return (
                  <View
                    style={{ width: windowWidth, height: 250 }}
                    key={imageIndex}
                  >
                    <ImageBackground source={{ uri: image }} style={styles.card}>
                      <View style={styles.textContainer}>
                        <Text style={styles.infoText}>
                          {"Image - " + imageIndex}
                        </Text>
                      </View>
                    </ImageBackground>
                  </View>
                );
              })}
            </ScrollView>
            <View style={styles.indicatorContainer}>
              {images.map((image, imageIndex) => {
                const width = scrollX.interpolate({
                  inputRange: [
                    windowWidth * (imageIndex - 1),
                    windowWidth * imageIndex,
                    windowWidth * (imageIndex + 1),
                  ],
                  outputRange: [8, 16, 8],
                  extrapolate: "clamp",
                });
                return (
                  <Animated.View
                    key={imageIndex}
                    style={[styles.normalDot, { width }]}
                  />
                );
              })}
            </View>
          </View>
        </FadeInView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    top: 200,
  },
  fadeContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right:0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white", 
  },
  scrollContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;