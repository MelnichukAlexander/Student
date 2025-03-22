import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); 

const images = [
  { id: 1, uri: 'https://yandex-images.clstorage.net/5zYXI4118/7d2965si2/LnoCLNN024Qm7vA28ZGGpthAIVcvPaL_HTMmOtfeDAcpvSZ2Vy8cXNFUXLtWJ0YSUMsTKF3INmFZ5YQ3uWahm3NuFz3iaffhR6vYb6GxirLQNVRba0zK7mlaL0um13ljGZ0n3_uywbAkjIVXx9aybxmjBnA4-To87HncwlDfnRpu-rrI4-yuCEpGYc7NIWKqlGmF5wdAvo7Bk7urQhp9CoyIU48j6mVgaNjp68M6Kl9RR8ponZ3WANgwjGogn02utp4CTMcYdgw-LnVWiRkGblg9kY-HeKZidXOv915aKX78dH-bC97dCAjk7btXljIHifM6II0NkjColEQayJtFshYm5sBTqMJ8XkZx7vVZnoKAyY3zX1hKigGzs2vSWsUa5LBvv09WJSB8LEHXz16SFy2XOlxBJWbMrGS0NjRz-aryaiJoczSeYHJOBcqpDS7yeHXBK4NcNh4lN4NjilahOlTIx_PPAknw7HgpMw--mls1OwZIef2-tDzU-PLAOyUyBnpmzA949rhaKvG-3YVabvy12f-vpFI61S8Hj67-yVLc_FeDL3JlLOCIlbMz2lpvTfuqeA3V4vAMoFDm_Dfl0hZykqQ3MNbUMloNasHdsgYY5Z3nh6DG0rWPF0dK9n3OzAC3AxOG8VwUYBlTH96GKzErOnRNyboIQGCEYqQLfRp6HlY8S9i6YMYqiZZJ9TKSkPGxzxc4EgY9rxMHepoJ6rwQY49brgmkbFhdF39mIpdZWwa4zXlW3KQIhIZM20XWpoKy8E_owtzy-jGyEVFy4vwxSauDVNL2Rb93D_pG_d5oAKcD75Zp9FwsXbO7sp63pfPyvEltLkjMKPwCXLdhJmoO5iiTpKrwxtKtEnF1Ojr8eb1nI7T6HiV3F1cOqiHKePjPL7N-eZQMDK1b8-7OW73L1rT5AVrARMSc8qwHtapmAoLkf2g-ePo2pbbZzfZixOV9s494RhrBfyPHOvbQ' },
  { id: 2, uri: 'https://avatars.mds.yandex.net/i?id=a50f57403345e9e25587fed24f36c6d8e8ebd2e0-9686739-images-thumbs&n=13' },
  { id: 3, uri: 'https://avatars.mds.yandex.net/i?id=441a4770b0dca06b5abec13e9a932d88a6e60da0-12473832-images-thumbs&n=13' }, 
  { id: 4, uri: 'https://avatars.mds.yandex.net/i?id=308e939872b70ed6da578c37abad20cb896753ae-12385820-images-thumbs&n=13' }, 
  { id: 5, uri: 'https://yandex-images.clstorage.net/5zYXI4118/7d2965si2/LnoCLNN024Qm7vA28ZGGpthAIVcvPaL_HTMmOsvKDV80zG5CSncRLM1xLKtTd0tDDY8TBQnNfngAnZFjrDakx2IqHmniWdflR6PoW6GxirLQNVRba0zK7mlaL3bn01mmkFzvq_uKjZxElPWXX0oaH3yjXjClPHKMtGS0trDnST4e8j7Ij4RKfEpKYRLN3SI-8A05O5voEj6xm18fcsYt9kgES3u33uEgQHhtpxeu1gfZx7IMkXUiJMQkZAJog_G6OgbmzPvsXuQOcgXWAYk2VnA1IdcvCAZirdsLawI6AeJgMPMT1-LlcNTUdf_PGiZPyVf2POHR6lQsIGweyDsVNq62UrybhFpccjKdOtl9KiqoFc0_W8ga_iHb5w8a_hHGJLgLO6MqSRxMHNXva34mMwV_AsDlIRp40MjQBix30Z6OKg6gt4wueC5mLUohwWbydBGxq39MKvZ514Mvqoa5iqTsZ-szfiH4jPzdo3PSGic9p9q4dZFWvCSADJ7YZ5U68mZmeJ_o2gxa7lnWpQF-Jljp1Y-PVK4aXX_rRyKyKfpEnEs3P46deLCYHZcLErYXSY-G_EXl_qgYjMx-yG9hUsouRhT3mCbYRraxvkFROj5w7UFn7_S-0rl3X9syTsl6eGjfR8tmEZicnMHTd8ImGwmT3gQJJSosQLBUtqQDpcq2xiqgA-iiJM6eMSrJRRYW4HWVs2fUupKJGyv_Ql4d9jBAJ7-zXlXc_CRlbx-yGteJIzLQ7U0qyKhgbHp4n0EGsvZSHDc4GgCWOnFapYXucnQZVUMfxN6aCcffy5ZO2XqEeEfvgypVeDjw2U_jGu7TDTdKRIVtUky4DEiKtBMV3m66OjADEIag9h45gqXNGr7U-X2rfwy-wv0rA9-GtrFW2JBXj9MKpZBwrImj-yLK271bPswNgTK8SLycBrgfcRKCdq64P_SOBF6m9dqdUdpqeDXBr5sEilLJd_MrugrY' }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current; // Анимация прозрачности

  const goToNextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      animateTransition();
    }
  };

  const goToPrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      animateTransition();
    }
  };

  const animateTransition = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Слайдер с картинками</Text>

      {/* Картинка с анимацией */}
      <Animated.View style={{ opacity: fadeAnim, width: '100%', alignItems: 'center' }}>
        <Image source={{ uri: images[currentIndex].uri }} style={styles.image} />
      </Animated.View>

      {/* Индикаторы (точки) */}
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === currentIndex && styles.activeIndicator, // Активный индикатор
            ]}
          />
        ))}
      </View>

      {/* Кнопки навигации */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={goToPrevSlide} style={styles.button}>
          <Text style={styles.buttonText}>Назад</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToNextSlide} style={styles.button}>
          <Text style={styles.buttonText}>Вперед</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '60%',
  },
  button: {
    backgroundColor: '#E6E6FA',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#D8BFD8',
  },
});

export default Slider;