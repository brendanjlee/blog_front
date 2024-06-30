import {
  Box,
  Flex,
  Text,
  Divider,
  Spacer,
  Textarea,
  Button,
} from "@chakra-ui/react";

function CommentCard() {
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
          BoeJiden123
        </Text>
        <Text>2024-06-29</Text>
      </Box>
      <Spacer />
      <Text>Wow!!!!!</Text>
    </Box>
  );
}

function AddComment() {
  return (
    <Box mt={"20px"}>
      <Flex flexDir={"column"} gap={"10px"}>
        <Text>Share your thoughts:</Text>
        <Box backgroundColor={"white"}>
          <Textarea />
        </Box>
        <Button maxW={"100px"}>Post</Button>
      </Flex>
    </Box>
  );
}

function CommentSection() {
  return (
    <Box w={"60%"}>
      <Box>
        <Text fontSize={"3xl"}>4 Comments</Text>
        <Divider />
      </Box>
      <Box display={"flex"} flexDir={"column"} gap={"10px"}>
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </Box>
      <AddComment />
    </Box>
  );
}

export default CommentSection;
