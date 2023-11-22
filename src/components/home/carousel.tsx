import { Dimensions, FlatList, Image, StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import theme, { Box } from "@/utils/theme";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const flatlistRef = useRef<FlatList<{ id: number; img: string }> | null>(
    null
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get("window").width;
  const slides = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const itemsToRender = ({ item, index }: any) => {
    return (
      <Box key={item.id}>
        <Image
          source={{ uri: item.img }}
          style={{ height: 200, width: screenWidth }}
        />
      </Box>
    );
  };

  const renderDotIndicator = () => {
    return slides.map((dot, index) => {
      // console.log("idx: ", index);

      // if activeIndex is equal to index
      if (activeIndex === index) {
        return (
          <Box
            key={index}
            bg="gray4"
            height={11}
            width={11}
            borderRadius="rounded"
            mx="1.5"
          ></Box>
        );
      } else {
        return (
          <Box
            key={index}
            bg="blu100"
            height={10}
            width={10}
            borderRadius="rounded"
            mx="1.5"
          ></Box>
        );
      }
    });
  };

  const handleScroll = (event: any) => {
    // get the scroll position
    const scrollPosition = event.nativeEvent.contentOffset.x;
    // console.log({ scrollPosition });

    // calculating carousel width
    // const carouselWidth = screenWidth - 44;

    // get the index of current active item
    const index = Math.ceil(scrollPosition / screenWidth);

    // console.log({ index });

    setActiveIndex(index);
  };

  // auto scroll
  useEffect(() => {
    // if activeIndex is equal to last index --> jump back to first index
    // else activeIndex + 1
    let intervel = setInterval(() => {
      if (activeIndex === slides.length - 1) {
        flatlistRef.current?.scrollToIndex({
          index: 0,
          animated: true,
        });
      } else {
        flatlistRef.current?.scrollToIndex({
          index: activeIndex + 1,
          animated: true,
        });
      }
    }, 2000);

    return () => clearInterval(intervel);
  });

  const getItemLayout = (data: any, index: any) => ({
    length: screenWidth,

    offset: screenWidth * index,
    index: index,
  });
  return (
    // <Box style={styles.carouselContainer}>
    //   <SliderBox
    //     images={slides}
    //     dotColor={theme.colors.blu100}
    //     inactiveDotColor={theme.colors.gray4}
    //     ImageComponentStyle={{
    //       borderRadius: theme.borderRadii["rounded-2xl"],
    //       marginTop: 15,
    //       width: "90%",
    //     }}
    //     autoplay
    //     circleLoop
    //   />
    // </Box>
    <Box style={styles.carouselContainer}>
      <FlatList
        data={slides}
        ref={flatlistRef}
        renderItem={itemsToRender}
        getItemLayout={getItemLayout}
        horizontal
        pagingEnabled={true}
        onScroll={handleScroll}
      />
      <Box
        flexDirection="row"
        justifyContent="center"
        position="absolute"
        bottom={5}
      >
        {renderDotIndicator()}
      </Box>
    </Box>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: theme.spacing["5.5"],
    position: "relative",
  },
});
