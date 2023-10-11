import React from 'react'
import cls from './PagesG.module.scss'
import GameList from './../../components/GameList/GameList';

export default function PagesG() {
  return (
    <div className={cls.container}>
        <div className={cls.conHeader}>
        <div className={cls.avaCon}>
        <img src="/images/gava.jpg" alt="" />
        </div>
        <div className={cls.itemCon}>
            <div className={cls.profile}>
                <p className={cls.profItem}>Gorbatic</p>
                <p className={cls.profItem}>Возраст: 16</p>
            </div>
            
        </div>
        <div className={cls.titulCon}>
            <img className={cls.cup} src="/icons/winnercup.svg" alt="" />
            <p>Мои Достижения</p>
        </div>
        </div>
        <div className={cls.listGame}>
        <GameList playerName='Gorbatic'/>
        </div>
        
    </div>
  )
}
