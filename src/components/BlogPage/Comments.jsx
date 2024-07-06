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
  AlertIcon,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import util from "../../utils/validate";
import blogService from "../../api/blog";

function CommentCard({ user, comment, deleteComment }) {
  async function handleDelete(e) {
    e.preventDefault();
    console.log("delete commment " + comment._id);
    try {
      const sessionUser = JSON.parse(localStorage.getItem("user"));

      await blogService.deleteCommentById(
        comment.parentPost,
        comment._id,
        sessionUser.token
      );

      deleteComment(comment._id);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleEdit(e) {
    e.preventDefault();
    console.log("edit comment");
  }

  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      backgroundColor={"white"}
      borderRadius={"10px"}
      height={"100px"}
      p={"10px"}
    >
      <Box display={"flex"} alignItems={"center"} justifyItems={""}>
        <Flex gap={"10px"} alignItems={"center"}>
          <Text fontSize="18px" fontWeight={"bold"}>
            {comment.author.username}
          </Text>
          <Text>{comment.postedDate}</Text>
        </Flex>
        <Spacer />
        {user && user.userId === comment.author._id && (
          <Flex gap={"5px"}>
            <Button onClick={handleEdit}>
              <EditIcon />
            </Button>
            <Button onClick={handleDelete}>
              <DeleteIcon />
            </Button>
          </Flex>
        )}
      </Box>
      <Spacer />
      <Text>{comment.content}</Text>
    </Box>
  );
}

function AddCommentBox({ user, postId, addNewComment }) {
  const [commentData, setCommentData] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // check if user is logged in
    if (!user) {
      setError("Must be logged in to comment. Refresh page");
      return;
    }

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
  const { user } = useContext(AuthContext);

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

  const deleteComment = (commentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment._id !== commentId)
    );
  };

  return (
    <Box w={"60%"}>
      <Box>
        <Text fontSize={"3xl"}>{comments.length} Comments</Text>
        <Divider />
      </Box>
      <Box display={"flex"} flexDir={"column"} gap={"10px"}>
        {comments.map((comment) => (
          <CommentCard
            key={comment._id}
            user={user}
            comment={comment}
            deleteComment={deleteComment}
          />
        ))}
      </Box>
      <AddCommentBox
        user={user}
        postId={postId}
        addNewComment={addNewComment}
      />
    </Box>
  );
}

export default CommentSection;
