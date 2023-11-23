import ProductsGrid from "@/components/products/productsGrid";
import NavigateBack from "@/components/shared/navigate-back";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import theme, { Box } from "@/utils/theme";
import React from "react";
import { FlatList } from "react-native";

const Products = () => {
  const AllProducts = [
    {
      id: 1,
      name: "One pice sofa",
      pic: "https://plus.unsplash.com/premium_photo-1678559033839-aaf50cb4c843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8fDB8fHww",
      price: "$ 123.45",
      desc: "loream ipsum gen",
    },
    {
      id: 2,
      name: "Sofa set",
      pic: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww",
      price: "$ 153.45",
      desc: "loream ipsum gen",
    },
    {
      id: 3,
      name: "Family sofa",
      pic: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      price: "$ 125.43",
      desc: "loream ipsum gen",
    },
    {
      id: 4,
      name: "Meeting Table",
      pic: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      price: "$ 298.45",
      desc: "loream ipsum gen",
    },
    {
      id: 5,
      name: "Dining Table",
      pic: "https://plus.unsplash.com/premium_photo-1676823570926-238f23020786?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      price: "$ 153.75",
      desc: "loream ipsum gen",
    },
    {
      id: 6,
      name: "Book Table",
      pic: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      price: "$ 165.34",
      desc: "loream ipsum gen",
    },
    {
      id: 7,
      name: "White Couch",
      pic: "https://images.unsplash.com/photo-1632829882891-5047ccc421bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      price: "$ 452.11",
      desc: "loream ipsum gen",
    },
    {
      id: 8,
      name: "Flying Chair",
      pic: "https://images.unsplash.com/photo-1567016546367-c27a0d56712e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      price: "$ 443.65",
      desc: "loream ipsum gen",
    },
    {
      id: 9,
      name: "Luxury Sofa",
      pic: "https://images.unsplash.com/photo-1634497885778-152eb6fd543d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      price: "$ 133.665",
      desc: "loream ipsum gen",
    },
  ];

  const itemsToRender = ({ item }: any) => {
    return (
      <Box key={item.id}>
        <ProductsGrid item={item} />
      </Box>
    );
  };
  return (
    <SafeAreaWrapper>
      <Box mt="3" mb="12">
        <NavigateBack />
        <Box m="5">
          <FlatList
            data={AllProducts}
            numColumns={2}
            renderItem={itemsToRender}
            contentContainerStyle={{
              columnGap: theme.spacing["3"],
            }}
          />
        </Box>
      </Box>
    </SafeAreaWrapper>
  );
};

export default Products;
