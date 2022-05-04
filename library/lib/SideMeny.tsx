import * as React from "react";

import styles from "./SideMeny.module.css";

export interface SideMenyProps {
  test: boolean;
}

export const SideMeny = ({ test }: SideMenyProps): JSX.Element => {
  return <div className={styles.test}>test</div>;
};
