import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../api/api";
import styles from "./PostDetail.module.scss";

const PostDetail: React.FC = () => {
  const { postId } = useParams();
  const { data, isLoading } = useGetPostByIdQuery(Number(postId));

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!data) {
    return <p className={styles.loading}>Post not found</p>;
  }

  return (
    <div className={styles["post-detail"]}>
      <h1>{postId}</h1>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
      <Link to="/" className={styles.a}>
        Назад
      </Link>
    </div>
  );
};

export default PostDetail;
