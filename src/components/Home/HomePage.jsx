import { useEffect, useState } from "react";
import { Center, Text } from "@chakra-ui/react";
import blogService from "../../api/blog";
import PostList from "./PostCard";

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const res = await blogService.getAllPosts();

      setBlogData(res.data);
      setLoading(false);
    };
    void fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <Center>
        <Text>Loading Data...</Text>
      </Center>
    );
  }

  return (
    <Center>
      <PostList blogData={blogData} />
    </Center>
  );
}

export default HomePage;
