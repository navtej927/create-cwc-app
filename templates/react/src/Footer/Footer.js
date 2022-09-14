import React from 'react';
import Styles from '../global-styles/global.css';

export const Footer = () => {
  return (
    <div className={Styles["container"]}>
      Footer envs {process.env.CHANGE_ME}
    </div>
  );
};
