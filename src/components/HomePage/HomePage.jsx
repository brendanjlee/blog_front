import { Flex } from "@chakra-ui/react";
import PostCard from "./PostCard";

function HomePage() {
  return (
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
    </Flex>
  );
}

export default HomePage;
