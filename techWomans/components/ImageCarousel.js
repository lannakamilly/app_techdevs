import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');

const ImageCarousel = ({ images }) => {
  return (
    <View>
      <Carousel
        data={images}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={{ width: width * 0.8, height: 200, borderRadius: 10 }} />
        )}
        sliderWidth={width}
        itemWidth={width * 0.8}
        loop
        autoplay
      />
    </View>
  );
};

export default ImageCarousel;
