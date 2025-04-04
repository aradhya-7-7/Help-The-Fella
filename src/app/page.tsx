"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Button, CircularProgress, Typography } from "@mui/material";
import PostCard from "./../components/PostCard/PostCard";
import { PostType } from "./../models/post";
import { useTheme } from "@mui/material";
import AddPost from "./../components/modals/AddPost";
import Link from "next/link";

const Home = () => {
  const [isAddPostOpen, setIsAddPostOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<PostType[]>([]);
  const theme = useTheme();

  const getPosts = async () => {
    setIsLoading(true);
    const resp = await fetch("/api/posts");
    const data = await resp.json();
    setPosts(data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <AddPost
        isOpen={isAddPostOpen}
        onClose={() => {
          setIsAddPostOpen(false);
        }}
        refresh={getPosts}
      />
      <div className={styles.hero}>
        <h1 className={styles.logo}>
          <span>Help</span>
          <span>The</span>
          <span>Fella</span>
        </h1>
        <Typography className={styles.hero_sub} variant="h6">
          {`A community where gamers help gamers! Got a question about a game or eSports?
          Confused about settings? Do not worry, fella—we’ve got your back!`}
        </Typography>
      </div>
      <div className={styles.main}>
        <div className={styles.actions}>
          <Typography
            style={{
              color: theme.palette.secondary.contrastText,
            }}
            variant="h2"
          >
            Questions:
          </Typography>
          <Button
            onClick={() => setIsAddPostOpen(true)}
            style={{
              background: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
              fontWeight: 600,
            }}
          >
            {"Let's Help Yours fellas!"}
          </Button>
        </div>
        {isLoading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: "4rem 0",
            }}
          >
            <CircularProgress size={100} color="secondary" />
          </div>
        ) : (
          <div className={styles.posts_container}>
            {posts.map((post, i) => (
              <Link
                href={`/${post.id}`}
                key={post.id}
                className={styles.post_card}
              >
                <PostCard post={post} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
