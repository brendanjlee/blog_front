import { Box, Text, Flex, Image, Spacer } from "@chakra-ui/react";

function PostCard() {
  const data = {
    title: "The resume that got a software engineer a $300,000 job at Google",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Brendan Lee",
    image: "https://bit.ly/dan-abramov'",
    postedDate: "2024-06-26",
  };

  return (
    <Box bg={"white"} borderRadius={"10px"} h={"150px"} w={"60%"} p={"10px"}>
      <Flex>
        <Flex direction={"column"}>
          <Text fontSize={20} fontWeight={"bold"}>
            {data.title}
          </Text>
          <Spacer />
          <Text>{data.author}</Text>
          <Text fontSize={12} color={"grey"}>
            Posted {data.postedDate}
          </Text>
        </Flex>
        <Image
          src={data.image}
          alt="blog image"
          objectFit={"contain"}
          boxSize={"130px"}
        />
      </Flex>
    </Box>
  );
}

export default PostCard;
