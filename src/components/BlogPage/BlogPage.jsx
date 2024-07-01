import { Flex, Text, Box, Image, Center } from "@chakra-ui/react";
import CommentSection from "./Comments";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import blogService from "../../services/blog";

function BlogPage() {
  const { postId } = useParams();
  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPostById = async () => {
      const res = await blogService.getPostById(postId);
      setPostData(res.data);
      setLoading(false);
    };
    const fetchPostComments = async () => {
      const res = await blogService.getPostComments(postId);
      setComments(res.data);
    };
    void fetchPostById();
    void fetchPostComments();
  }, [postId]);

  if (loading) {
    return (
      <Center>
        <Text>Loading Data...</Text>
      </Center>
    );
  }

  return (
    <Flex m={"20px"} flexDir={"column"} alignItems={"center"} gap={"30px"}>
      <Flex flexDir={"column"} alignItems={"center"} w={"60%"} gap={"40px"}>
        <Box display={"flex"} flexDir={"column"}>
          <Text fontSize={"5xl"} fontWeight={"bold"}>
            {postData.title}
          </Text>
          <Text>By {postData.author.username}</Text>
          <Text>{postData.postedDate}</Text>
        </Box>
        <Image
          src={postData.imageUrl}
          alt="blog image"
          objectFit={"cover"}
          maxW={"400px"}
        />
        <Text>{postData.content}</Text>
      </Flex>
      <CommentSection commentData={comments} />
    </Flex>
  );
}

export default BlogPage;
