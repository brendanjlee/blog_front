import {
  Text,
  Flex,
  Image,
  Spacer,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

function PostCard() {
  const data = {
    // title: "Short Title",
    title: "The resume that got a software engineer a $300,000 job at Google",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Brendan Lee",
    image: "https://bit.ly/dan-abramov'",
    postedDate: "2024-06-26",
  };

  return (
    <LinkBox
      bg={"white"}
      borderRadius={"10px"}
      p={"10px"}
      minW={"600px"}
      maxW={"600px"}
    >
      <Flex gap={"5px"}>
        <Flex direction={"column"} flex={"1"}>
          <LinkOverlay as={ReactRouterLink} to="tempPage">
            <Text fontSize={20} fontWeight={"bold"}>
              {data.title}
            </Text>
          </LinkOverlay>
          <Spacer />
          <Text>{data.author}</Text>
          <Text fontSize={12} color={"grey"}>
            Posted {data.postedDate}
          </Text>
        </Flex>
        <Image
          src={data.image}
          alt="blog image"
          objectFit={"cover"}
          boxSize={"130px"}
        />
      </Flex>
    </LinkBox>
  );
}

export default PostCard;
