import React, { useState } from "react";
import TimeCon from "./../../components/TimeCon/TimeCon";
import CardsBlock from "./../../components/CardsBlock/CardsBlock";
import TourList from "./../../components/TourList/TourList";
import CountdownTimer from "./../../components/CountdownTimer/CountdownTimer";
import cls from "./MainPage.module.scss";
import { Link } from "react-router-dom";
import Leaderboard from "../../components/Leaderboard/Leaderboard";

export default function MainPage() {
  const [firstDateFromChild, setFirstDateFromChild] = useState(null);
  const handleFirstDateFromChild = (date) => {
    setFirstDateFromChild(date);
  };
  console.log(firstDateFromChild);
  let targetDate = null; // Изначально установите targetDate как null

  if (firstDateFromChild) {
    const dateParts = firstDateFromChild.split(".");
    if (dateParts.length === 3) {
      const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T00:00:00`;
      targetDate = new Date(formattedDate);
    }
  }

  return (
    <div className={cls.container}>
       
      <header id="hed" className={cls.header}>
        <nav className={cls.navbar}>
          <Link className={cls.link} to="/info">
            <img src="/icons/info.svg" alt="icon" />
            <p className={cls.headerTxt}>Инструкция</p>
          </Link>
          <Link className={cls.link}  to="/archive">
            <img src="/icons/archive.svg" alt="icon" />
            <p className={cls.headerTxt}>Архив игр</p>
          </Link>
          <Link className={cls.link}  to="/news">
            <img src="/icons/news.svg" alt="icon" />
            <p className={cls.headerTxt}>Новости</p>
          </Link>
        </nav>
      </header>
      <div className={cls.main}>
        <p className={cls.mainTxt}>Добро пожаловать на сайт с играми и турнирами!</p>
        <p className={cls.mainTxt}>Читайте нашу инструкцию, чтобы узнать, как начать играть и выигрывать!</p>
      </div>
      <div className={cls.taimer}><CountdownTimer targetDate={targetDate} /></div>
      <TimeCon onFirstDateFromChild={handleFirstDateFromChild} />
      <TourList />
      <CardsBlock />
      <div className={cls.block}></div>
      
    </div>
  );
}
