import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { Post } from "../../types/PostTypes";
import { useGetPostWithOffsetQuery } from "../../api/api";
import styles from "./PostList.module.scss";

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const { data, isFetching } = useGetPostWithOffsetQuery(offset);

  const navigate = useNavigate();

  const loadMore = () => {
    if (!isFetching) {
      setOffset((prevOffset) => prevOffset + 10);
    }
  };

  useEffect(() => {
    if (data) {
      const newPosts = data;
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      if (newPosts.length === 0) {
        setHasMore(false);
      }
    }
  }, [data]);

  useEffect(() => {
    const handleNavigateBack = () => {
      setPosts([]);
      setOffset(0);
    };

    return () => {
      handleNavigateBack();
    };
  }, []);

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<div className={styles.loader}>Loading...</div>}
    >
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <span>{post.id}</span>
          <h3>{post.title}</h3>
          <p>{post.body.slice(0, 100)}...</p>
          <Link
            to={`/post/${post.id}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(`/post/${post.id}`);
            }}
          >
            Просмотр
          </Link>
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default PostList;
