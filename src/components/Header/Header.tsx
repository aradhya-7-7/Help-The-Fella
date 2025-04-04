import { Button } from "@mui/material";
import styles from "./header.module.css";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();

  return (
    <div className={styles.header}>
      <Button onClick={() => router.push("/")} className={styles.back_btn}>
        {"<"}
      </Button>
      <h1 className={styles.logo}>
        <span>Help</span>
        <span>The</span>
        <span>Fella</span>
      </h1>
    </div>
  );
}

export default Header;
