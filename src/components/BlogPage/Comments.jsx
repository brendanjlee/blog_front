/* eslint-disable react/prop-types */
// todo ERROR handling and proptypes

import {
  Box,
  Flex,
  Text,
  Divider,
  Spacer,
  Textarea,
  Button,
} from "@chakra-ui/react";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

function CommentCard({ comment }) {
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      backgroundColor={"white"}
      borderRadius={"10px"}
      height={"100px"}
      p={"10px"}
    >
      <Box display={"flex"} gap={"10px"} alignItems={"center"}>
        <Text fontSize="18px" fontWeight={"bold"}>
          {comment.author.username}
        </Text>
        <Text>{comment.postedDate}</Text>
      </Box>
      <Spacer />
      <Text>{comment.content}</Text>
    </Box>
  );
}

function AddComment() {
  const { user } = useContext(AuthContext);
  return (
    <Box mt={"20px"}>
      <Flex flexDir={"column"} gap={"10px"}>
        {user ? (
          <>
            <Text>Share your thoughts:</Text>
            <Box backgroundColor={"white"}>
              <Textarea />
            </Box>
            <Button maxW={"100px"}>Post</Button>
          </>
        ) : (
          <>
            <Text>Login to comment: </Text>
            <Box backgroundColor={"white"}>
              <Textarea disabled />
            </Box>
          </>
        )}
      </Flex>
    </Box>
  );
}

function CommentSection({ commentData }) {
  return (
    <Box w={"60%"}>
      <Box>
        <Text fontSize={"3xl"}>{commentData.length} Comments</Text>
        <Divider />
      </Box>
      <Box display={"flex"} flexDir={"column"} gap={"10px"}>
        {commentData.map((comment) => (
          <CommentCard key={comment._id} comment={comment} />
        ))}
      </Box>
      <AddComment />
    </Box>
  );
}

export default CommentSection;
