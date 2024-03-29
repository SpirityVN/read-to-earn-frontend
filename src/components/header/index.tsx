import { Box, Text } from "@chakra-ui/react";
import React from "react";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import { getNowddddMMMMDYYYY } from "@/utils";
import SignIn from "../SignIn";
import { useRouter } from "next/router";
export default function Header() {
  const { push } = useRouter();

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      className={styles.home_top__container}
    >
      <Box display={"flex"}>
        <Box marginRight={"23px"} onClick={() => push("/")} cursor={"pointer"}>
          <Image src={"/assets/logo.svg"} alt={"123"} width={100} height={24} />
        </Box>
        <Box padding={"3px"}>
          <Text fontWeight={800} fontSize={"10px"} lineHeight={"12px"}>
            {getNowddddMMMMDYYYY()}
          </Text>
          <Text fontSize={"10px"} fontWeight={"medium"} color={"black.300"}>
            Today’s paper
          </Text>
        </Box>
      </Box>
      <Box>
        <SignIn />
      </Box>
    </Box>
  );
}
