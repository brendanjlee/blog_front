import { Flex, Text, Box, Image } from "@chakra-ui/react";
import CommentSection from "./Comments";

function BlogPage() {
  const data = {
    // title: "Short Title",
    title: "The resume that got a software engineer a $300,000 job at Google",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Brendan Lee",
    image: "https://bit.ly/dan-abramov'",
    postedDate: "2024-06-26",
  };

  return (
    <Flex m={"20px"} flexDir={"column"} alignItems={"center"} gap={"30px"}>
      <Flex flexDir={"column"} alignItems={"center"} w={"60%"} gap={"40px"}>
        <Box display={"flex"} flexDir={"column"}>
          <Text fontSize={"5xl"} fontWeight={"bold"}>
            {data.title}
          </Text>

          <Text>By {data.author}</Text>
          <Text>{data.postedDate}</Text>
        </Box>
        <Image
          src={data.image}
          alt="blog image"
          objectFit={"cover"}
          maxW={"400px"}
        />
        <Text>{data.content}</Text>
      </Flex>
      <CommentSection />
    </Flex>
  );
}

export default BlogPage;
