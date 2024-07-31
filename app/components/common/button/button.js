"use client";
import Link from "next/link";
import { Fragment } from "react";
import styles from './button.module.css';

const Button = ({ loading = false, children, href }) => {
  const Wrapper = href ? Link : Fragment;

  return (
    <Wrapper href={href}>
      <button className={`${styles.button} `}>
        <span>{loading ? 'Loading...' : children}</span>
      </button>
    </Wrapper>
  );
};

export default Button;

// Usage
