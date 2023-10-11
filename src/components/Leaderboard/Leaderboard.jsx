import React, { useEffect, useState } from "react";
import axios from "axios";
import cls from './Leaderboard.module.scss';

const Leaderboard = () => {
  const [leader, setLeader] = useState(null);

  useEffect(() => {
    axios.get("/players.json") // Замените путь на ваш JSON-файл
      .then((response) => {
        const playersData = response.data.players;

        // Найдем игрока с наибольшим количеством баллов (point + megapoint)
        const leader = playersData.reduce((currentLeader, player) => {
          const playerTotalPoints = player.points + player.megapoint;
          const currentLeaderTotalPoints = currentLeader
            ? currentLeader.points + currentLeader.megapoint
            : 0;

          return playerTotalPoints > currentLeaderTotalPoints ? player : currentLeader;
        }, null);

        setLeader(leader);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
      });
  }, []);

  return (
    <div className={cls.container}>
     <h2>Лидер рейтинга</h2>
      {leader && (
        
        <div className={cls.iconBlock}>
             
            <img className={cls.icon} src="/icons/winnercup.svg" alt="" />
          <p className={cls.txt}>{leader.name}</p>
          <img className={cls.icon} src="/icons/winnercup.svg" alt="" />

        </div>
      )}
    </div>
  );
};

export default Leaderboard;
