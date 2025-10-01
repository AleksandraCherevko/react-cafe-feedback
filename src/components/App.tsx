import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "./CafeInfo";
import VoteOptions from "./VoteOptions";
import VoteStats from "./VoteStats";
import { Votes, VoteType } from "../types/votes";

export default function App() {
  const initialVotes: Votes = { good: 0, neutral: 0, bad: 0 };
  const [votes, setVotes] = useState<Votes>(initialVotes);

  const handleVote = (key: VoteType) => {
    setVotes({
      ...votes,
      [key]: votes[key] + 1,
    });
  };

  const resetVotes = () => {
    setVotes(initialVotes);
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions />
      <VoteStats />
    </div>
  );
}
