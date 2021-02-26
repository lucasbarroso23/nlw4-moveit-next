import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/CompletedChallanges.module.css';

export function CompletedChallanges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.CompletedChallangesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}