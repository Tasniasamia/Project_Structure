"use client";
import Link from "next/link";
import { Fragment } from "react";
import styles from './button.module.css';

const Button = ({ loading = false, children, href ,className,wrapperClassName}) => {
  const Wrapper = href ? Link : Fragment;

  return (
    <Wrapper href={href} className={wrapperClassName}>
      <button className={`${styles.button} ${className} `}>
        <span>{loading ? 'Loading...' : children}</span>
      </button>
    </Wrapper>
  );
};

export default Button;

// Usage
