/* eslint-disable react/prop-types */
// todo ERROR handling and proptypes

import {
  Text,
  Flex,
  Image,
  Spacer,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

function PostCard({ data }) {
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
          <LinkOverlay as={ReactRouterLink} to={`/posts/${data._id}`}>
            <Text fontSize={20} fontWeight={"bold"}>
              {data.title}
            </Text>
          </LinkOverlay>
          <Spacer />
          <Text>{data.author.username}</Text>
          <Text fontSize={12} color={"grey"}>
            Posted {data.postedDate}
          </Text>
        </Flex>
        <Image
          src={data.imageUrl}
          alt="blog image"
          objectFit={"cover"}
          boxSize={"130px"}
        />
      </Flex>
    </LinkBox>
  );
}

function PostList({ blogData }) {
  return (
    <Flex
      m={"10px"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"10px"}
    >
      {blogData.map((blogPost) => (
        <PostCard key={blogPost._id} data={blogPost} />
      ))}
    </Flex>
  );
}

export default PostList;
