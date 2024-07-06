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
  Alert,
} from "@chakra-ui/react";
import { AlertIcon } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import util from "../../utils/validate";
import blogService from "../../api/blog";

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

function AddComment({ postId, addNewComment }) {
  const { user } = useContext(AuthContext);
  const [commentData, setCommentData] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // validate input
    if (!util.validateComment(commentData)) {
      setError("Comments cannot be empty");
      return;
    }

    try {
      const sessionUser = JSON.parse(localStorage.getItem("user"));
      const res = await blogService.postComment(
        postId,
        commentData,
        sessionUser.token
      );
      addNewComment(res.data.comment);
      setCommentData("");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <Box mt={"20px"}>
      <Flex flexDir={"column"} gap={"10px"}>
        {user ? (
          <>
            <Text>Share your thoughts:</Text>
            {error && (
              <Box w="100%" maxW={"md"}>
                <Alert status="error">
                  <AlertIcon />
                  {error}
                </Alert>
              </Box>
            )}
            <form onSubmit={handleSubmit}>
              <Box backgroundColor={"white"}>
                <Textarea
                  value={commentData}
                  onChange={(e) => setCommentData(e.target.value)}
                />
              </Box>
              <Button maxW={"100px"} type="submit" formAction="submit">
                Post
              </Button>
            </form>
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

function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPostComments = async () => {
      const res = await blogService.getPostComments(postId);
      setComments(res.data.comments);
    };
    void fetchPostComments();
  }, [postId]);

  const addNewComment = (newComment) => {
    const newComments = [newComment, ...comments];
    console.log(newComments);
    setComments(newComments);
  };

  return (
    <Box w={"60%"}>
      <Box>
        <Text fontSize={"3xl"}>{comments.length} Comments</Text>
        <Divider />
      </Box>
      <Box display={"flex"} flexDir={"column"} gap={"10px"}>
        {comments.map((comment) => (
          <CommentCard key={comment._id} comment={comment} />
        ))}
      </Box>
      <AddComment postId={postId} addNewComment={addNewComment} />
    </Box>
  );
}

export default CommentSection;
