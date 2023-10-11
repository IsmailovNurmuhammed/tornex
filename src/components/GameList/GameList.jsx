import React, { useEffect, useState } from "react";
import cls from "./GameList.module.scss";
import axios from "axios";

export default function GameList({ playerName }) {
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    // Используйте Axios для загрузки данных из JSON-файла
    axios.get("/players.json")
      .then(response => {
        // Найдите данные для указанного игрока
        const player = response.data.players.find(player => player.name === playerName);
        if (player) {
          setPlayerData(player);
        } else {
          console.error(`Игрок с именем ${playerName} не найден`);
        }
      })
      .catch(error => {
        console.error("Ошибка при загрузке данных:", error);
      });
  }, [playerName]);

  // Функция для вычисления суммы баллов для режима игры
  const calculateTotalPoints = (game) => {
    // Преобразуйте баллы за разные места в числовой формат
    const firstPlacePoints = parseInt(game.firstPlace, 10);
    const secondPlacePoints = parseInt(game.secondPlace, 10);
    const thirdPlacePoints = parseInt(game.thirdPlace, 10);
    const fourthPlacePoints = parseInt(game.fourthPlace, 10);
  
    // Вычислите общее количество баллов, давая 3 балла за первое место и 2 балла за второе место
    const totalPoints = 3 * firstPlacePoints + 2 * secondPlacePoints + 1 * thirdPlacePoints + fourthPlacePoints;
  
    return totalPoints;
  };
  if (!playerData) {
    return <div>Загрузка данных...</div>;
  }

  return (
    <div className={cls.container}>
      <div className={cls.gamesList}>
        <div className={cls.header}>
        <h2 className={cls.conTitle}>Режимы</h2>
        <div className={cls.imgCon}><img className={cls.headerImg} src="/icons/place1.svg" alt="place"/></div>
        <div className={cls.imgCon}><img className={cls.headerImg} src="/icons/place2.svg" alt="place"/></div>
        <div className={cls.imgCon}><img className={cls.headerImg} src="/icons/place3.svg" alt="place"/></div>
        <div className={cls.imgCon}><img className={cls.headerImg} src="/icons/place4.svg" alt="place"/></div>
        <p className={cls.headerItem}>Баллы</p>
        </div>
       
        <ul>
          {playerData.games.map((game, index) => (
            <li className={cls.gameCon} key={index}>
              <div className={cls.gameTitle}>{game.name}</div>
              <p className={`${cls.gameItem} ${cls.first}`}> {game.firstPlace}</p>
              <p className={`${cls.gameItem} ${cls.second}`}> {game.secondPlace}</p>
              <p className={`${cls.gameItem} ${cls.third}`}> {game.thirdPlace}</p>
              <p className={`${cls.gameItem} ${cls.fourth}`}> {game.fourthPlace}</p>
              <p className={`${cls.gameItem} ${cls.fifth}`}> {calculateTotalPoints(game)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
