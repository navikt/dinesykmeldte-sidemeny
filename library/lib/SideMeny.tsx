import * as React from "react";

import styles from "./SideMeny.module.css";

interface Props {
  test: boolean;
}

const SideMeny = ({ test }: Props): JSX.Element => {
  return <div className={styles.test}>yeet</div>;
};

export default SideMeny;
