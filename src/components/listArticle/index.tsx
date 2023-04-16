import React from 'react'
import styles from "@/styles/Home.module.scss";
import { Box, Text, Button, space } from '@chakra-ui/react'
import Image from "next/image";

export default function ListArticle() {
    return (
        <Box className={styles.listArticle} >
            <Box className={styles.listArticle_list}>
                <Image src="/img/listArticle_img1.png" alt=""
                    className={styles.listArticle_item}
                    height={159}
                    width={353}
                />
                <Text className={styles.listArticle_item} id={styles.author} paddingRight={28}>By James Landale</Text>
                <Text className={styles.listArticle_item} id={styles.team} paddingRight={28}>TeamliserVCorp</Text>
                <Text className={styles.listArticle_item} id={styles.listArticle_item_content} paddingRight={28}>
                    Nghiên cứu cho thấy game thủ có kỹ năng đưa ra quyết
                    định tốt hơn với hoạt động não bộ tăng cường
                </Text>
                <Button className={styles.listArticle_item}
                    id={styles.listArticle_item_earn}>#EARN</Button>
            </Box>
            <Box className={styles.listArticle_list} marginBottom={16}>
                <Image src="/img/listArticle_img2.png" alt=""
                    className={styles.listArticle_item}
                    height={159}
                    width={376}
                />
                <Text className={styles.listArticle_item} id={styles.author} paddingRight={28}>By James Landale</Text>
                <Text className={styles.listArticle_item} id={styles.team} paddingRight={28}>TeamliserVCorp</Text>
                <Text className={styles.listArticle_item} id={styles.listArticle_item_content} paddingRight={28}>
                    Dynamic avatars for legacy capture:
                    a revolution of blockchain use in the making
                </Text>
                <Button className={styles.listArticle_item}
                    id={styles.listArticle_item_earn}>#EARN</Button>
            </Box>
            <Box className={styles.listArticle_list}>
                <Image src="/img/listArticle_img3.png" alt=""
                    className={styles.listArticle_item}
                    height={159}
                    width={376}

                />
                <Text className={styles.listArticle_item} id={styles.author} paddingRight={28}>By James Landale</Text>
                <Text className={styles.listArticle_item} id={styles.team} paddingRight={28}>TeamliserVCorp</Text>
                <Text className={styles.listArticle_item} id={styles.listArticle_item_content} paddingRight={28}>
                    Blockchain.com Shopping Assets to Fill
                    $270M Hole From Three Arrows Capital: Sources
                </Text>
                <Button className={styles.listArticle_item}
                    id={styles.listArticle_item_earn}>#EARN</Button>
            </Box>
        </Box>
    )
}