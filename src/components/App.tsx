// import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "./CafeInfo";
import VoteOptions from "./VoteOptions";

export default function App() {
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions />
    </div>
  );
}
