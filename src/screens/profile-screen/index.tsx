import theme, { Box, Text } from "@/utils/theme";
import React from "react";
import styles from "./profile.style";
import { FlatList, Image, Pressable, Touchable } from "react-native";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

const ProfileScreen = () => {
  const navList = [
    {
      id: 1,
      icon: <Ionicons name="heart-outline" size={24} color="black" />,
      name: "Favourite",
    },
    { id: 2, icon: <Feather name="truck" size={24} />, name: "Order" },
    {
      id: 3,
      icon: <Feather name="shopping-bag" size={24} color="black" />,
      name: "Cart",
    },
    {
      id: 4,
      icon: <AntDesign name="deleteuser" size={24} color="black" />,
      name: "Delete Account",
    },
    {
      id: 5,
      icon: <AntDesign name="logout" size={24} color="black" />,
      name: "Logout",
    },
  ];
  return (
    <>
      <Box style={styles.top}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={styles.img}
        />
      </Box>
      <Box style={styles.dp}>
        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg",
          }}
          style={styles.dpImg}
        />
      </Box>
      <Box mt="14">
        <Text variant="textXl" textAlign="center" fontWeight="bold">
          John Doe
        </Text>
        <Text style={styles.email} color="gray550">
          doe1234kforppfl@example.com
        </Text>
      </Box>

      <Box style={styles.navList}>
        {navList.map((navItem) => {
          return (
            <>
              <Pressable
                key={navItem.id}
                style={{ flexDirection: "row", padding: theme.spacing[3] }}
              >
                {navItem.icon}

                <Text ml="5" color="gray550">
                  {navItem.name}
                </Text>
              </Pressable>
              <Box borderBottomWidth={1} borderBottomColor="gray550"></Box>
            </>
          );
        })}
      </Box>
    </>
  );
};

export default ProfileScreen;
