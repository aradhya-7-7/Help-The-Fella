"use client";
import { useState, useEffect } from "react";
import { Button, Typography, Grid, CircularProgress } from "@mui/material";
import { PostType } from "./../../models/post";
import AddReply from "./../../components/modals/AddReply";
import PostReplyCard from "./../../components/PostReplyCard/PostReplyCard";
import { useParams } from "next/navigation";
import Header from "./../../components/Header/Header";
import { CSSProperties } from "react";
import Image from "next/image";

function PostPage() {
  const [isAddPostOpen, setIsAddPostOpen] = useState(false);
  const [post, setPost] = useState<PostType>();
  const params = useParams();

  const getPost = async () => {
    const resp = await fetch(`/api/posts/${params.id}`);
    const data = await resp.json();
    setPost(data.data);
  };

  useEffect(() => {
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  // Retro Futuristic Styles as proper CSSProperties objects
  const [postBodyStyle, setPostBodyStyle] = useState<CSSProperties>({
    position: "relative",
    padding: "2rem",
    margin: "1rem auto",
    maxWidth: "1200px",
    borderRadius: "8px",
    background: "rgba(20, 20, 40, 0.7)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 0 20px rgba(128, 0, 255, 0.3), 0 0 40px rgb(0, 9, 9)",
    border: "1px solid rgba(128, 0, 255, 0.2)",
    overflow: "hidden",
  });

  const backgroundContainerStyle: CSSProperties = {
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    opacity: 0.2,
  };

  const backgroundImageStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    filter: "blur(8px)",
  };

  const postDetailsStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row" as const,
    gap: "2rem",
  };

  const postInfoStyle: CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem",
  };

  const postTitleStyle: CSSProperties = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#ff00ff",
    textShadow:
      "0 0 10px rgba(255, 0, 255, 0.7), 0 0 20px rgba(255, 0, 255, 0.5)",
    marginBottom: "0.5rem",
  };

  const postDateStyle: CSSProperties = {
    fontSize: "0.8rem",
    color: "#00ffff",
    fontFamily: '"Share Tech Mono", monospace',
    letterSpacing: "1px",
  };

  const postAuthorStyle: CSSProperties = {
    fontSize: "1.2rem",
    color: "#ffcc00",
    textShadow: "0 0 5px rgba(255, 204, 0, 0.5)",
  };

  const authorSpanStyle: CSSProperties = {
    color: "#00ffff",
  };

  const postDescriptionStyle: CSSProperties = {
    fontSize: "1rem",
    lineHeight: 1.6,
    color: "#e0e0ff",
    textShadow: "0 0 2px rgba(224, 224, 255, 0.3)",
    marginTop: "1rem",
  };

  const postLinksStyle: CSSProperties = {
    marginTop: "1rem",
  };

  const linksSpanStyle: CSSProperties = {
    color: "#00ffff",
    fontWeight: "bold",
    marginRight: "0.5rem",
  };

  const linkStyle: CSSProperties = {
    color: "#FFFF33",
    textDecoration: "none",
    display: "block",
    margin: "0.5rem 0",
    padding: "0.5rem",
    background: "rgba(255, 0, 255, 0.1)",
    borderLeft: "3px solid #ff00ff",
    transition: "all 0.3s ease",
  };

  const postImageStyle: CSSProperties = {
    maxWidth: "300px",
    borderRadius: "8px",
    border: "2px solid rgba(0, 255, 255, 0.3)",
    boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
  };

  const postRepliesStyle: CSSProperties = {
    maxWidth: "1200px",
    margin: "2rem auto",
    padding: "1.5rem",
    background: "rgba(20, 20, 40, 0.7)",
    backdropFilter: "blur(10px)",
    borderRadius: "8px",
    boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
    border: "1px solid rgba(0, 255, 255, 0.2)",
  };

  const repliesHeaderStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
    borderBottom: "1px solid rgba(0, 255, 255, 0.3)",
    paddingBottom: "1rem",
  };

  const repliesTitleStyle: CSSProperties = {
    fontSize: "1.8rem",
    color: "#00ffff",
    textShadow: "0 0 10px rgba(0, 255, 255, 0.7)",
  };

  const repliesCountStyle: CSSProperties = {
    color: "#ff00ff",
    fontSize: "1.5rem",
  };

  const helpButtonStyle: CSSProperties = {
    background: "linear-gradient(45deg, #ff00ff 0%, #00ffff 100%)",
    color: "#000",
    fontWeight: "bold",
    padding: "0.75rem 1.5rem",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    textTransform: "uppercase",
    letterSpacing: "1px",
    boxShadow:
      "0 0 10px rgba(255, 0, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.5)",
    transition: "all 0.3s ease",
  };

  const repliesContainerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.5rem",
  };

  const noRepliesStyle: CSSProperties = {
    textAlign: "center",
    padding: "2rem",
    fontSize: "1.2rem",
    color: "#00ffff",
    fontFamily: '"Share Tech Mono", monospace',
    border: "1px dashed rgba(0, 255, 255, 0.3)",
    borderRadius: "4px",
  };

  const loadingContainerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "80vh",
    padding: "4rem 0",
    background: "linear-gradient(135deg, #0f0f1f 0%, #1a1a3a 100%)",
  };

  const customProgressStyle: CSSProperties = {
    color: "#ff00ff",
    boxShadow: "0 0 20px rgba(255, 0, 255, 0.7)",
  };

  // Media query styles for mobile
  const applyMobileStyles = () => {
    if (window.innerWidth <= 768) {
      setPostBodyStyle((prevStyle) => ({
        ...prevStyle,
        padding: "1rem",
        margin: "0.5rem",
      }));

      Object.assign(postDetailsStyle, {
        flexDirection: "column-reverse" as const,
      });

      Object.assign(postTitleStyle, {
        fontSize: "1.8rem",
      });

      Object.assign(postAuthorStyle, {
        fontSize: "1rem",
      });

      Object.assign(postDescriptionStyle, {
        fontSize: "0.9rem",
      });

      Object.assign(postImageStyle, {
        maxWidth: "100%",
        marginBottom: "1rem",
      });

      Object.assign(postRepliesStyle, {
        padding: "1rem",
        margin: "1rem 0.5rem",
      });

      Object.assign(repliesHeaderStyle, {
        flexDirection: "column" as const,
        alignItems: "flex-start",
        gap: "1rem",
      });

      Object.assign(repliesTitleStyle, {
        fontSize: "1.5rem",
      });

      Object.assign(helpButtonStyle, {
        width: "100%",
        padding: "0.5rem 1rem",
      });
    }
  };

  // Apply mobile styles on mount and window resize
  useEffect(() => {
    applyMobileStyles();
    window.addEventListener("resize", applyMobileStyles);
    return () => window.removeEventListener("resize", applyMobileStyles);
  }, []);

  return post ? (
    <>
      <AddReply
        isOpen={isAddPostOpen}
        onClose={() => {
          setIsAddPostOpen(false);
        }}
        refresh={getPost}
        postId={post.id}
      />
      <Header />
      <div style={postBodyStyle}>
        {post.image && post.image.length > 0 ? (
          <div style={backgroundContainerStyle}>
            <img
              src={post.image}
              style={backgroundImageStyle}
              alt="background"
            />
          </div>
        ) : null}
        <div style={postDetailsStyle}>
          <div style={postInfoStyle}>
            <Typography variant="h3" style={postTitleStyle}>
              {post.title}
            </Typography>
            <Typography
              variant="caption"
              style={postDateStyle}
            >{`${post.created_at}`}</Typography>
            <Typography variant="h6" style={postAuthorStyle}>
              <span style={authorSpanStyle}>By:</span> {post.name}
            </Typography>
            <Typography variant="body2" style={postDescriptionStyle}>
              {post.description}
            </Typography>
            <Typography variant="subtitle2" style={postLinksStyle}>
              <span style={linksSpanStyle}>Links:</span>
              {post.links.split(" , ").map((link) => (
                <a
                  key={link}
                  style={linkStyle}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link}
                </a>
              ))}
            </Typography>
          </div>
          <div>
            {post.image ? (
              <img src={post.image} style={postImageStyle} alt={post.title} />
            ) : (
              <p style={{ textAlign: "center", color: "gray" }}>
                .
              </p>
            )}
          </div>
        </div>
      </div>
      <div style={postRepliesStyle}>
        <div style={repliesHeaderStyle}>
          <Typography variant="h4" style={repliesTitleStyle}>
            replies{" "}
            <span style={repliesCountStyle}>
              ({post.replies ? post.replies.length : 0})
            </span>
          </Typography>
          <Button
            onClick={() => setIsAddPostOpen(true)}
            style={helpButtonStyle}
          >
            Help The Fellow Gamer!
          </Button>
        </div>
        <div style={repliesContainerStyle}>
          {post.replies && post.replies.length > 0 ? (
            post.replies.map((reply) => (
              <PostReplyCard key={reply.id} reply={reply} />
            ))
          ) : (
            <p style={noRepliesStyle}>No Replies</p>
          )}
        </div>
      </div>
    </>
  ) : (
    <div style={loadingContainerStyle}>
      <CircularProgress size={100} style={customProgressStyle} />
    </div>
  );
}

export default PostPage;
