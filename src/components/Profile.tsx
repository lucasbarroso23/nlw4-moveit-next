import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallangesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/lucasbarroso23.png" alt="Lucas Barroso" />
      <div>
        <strong>Lucas Barroso</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
