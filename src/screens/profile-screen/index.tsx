import { Box, Text } from "@/utils/theme";
import React from "react";
import styles from "./profile.style";
import { Image } from "react-native";

const ProfileScreen = () => {
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
        {/* <Box style={styles.email}> */}
        <Text style={styles.email} color="gray550">
          doe1234kforppfl@example.com
        </Text>
        {/* </Box> */}
      </Box>
    </>
  );
};

export default ProfileScreen;
