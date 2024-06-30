import { Flex, Center } from "@chakra-ui/react";
import PostCard from "./PostCard";

function HomePage() {
  return (
    <Center>
      <Flex
        m={"10px"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"10px"}
      >
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Flex>
    </Center>
  );
}

export default HomePage;
