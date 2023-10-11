import React from "react";
import cls from "./Back.module.scss";
import { Link } from "react-router-dom";

export default function Back() {
  return (
    <div className={cls.con}>
      <Link className={cls.link} to='/'>
        <div className={cls.button}>
          <img src="/icons/arrow.svg" alt="arrow" className={cls.img} />
          <p className={cls.txt}>Назад</p>
        </div>
      </Link>
    </div>
  );
}
