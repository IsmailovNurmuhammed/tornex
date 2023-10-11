import React from 'react'
import cls from './PagesC.module.scss'
import GameList from './../../components/GameList/GameList';

export default function PagesC() {
  return (
    <div className={cls.container}>
        <div className={cls.conHeader}>
        <div className={cls.avaCon}>
        <img src="/images/cava.jpg" alt="" />
        </div>
        <div className={cls.itemCon}>
            <div className={cls.profile}>
                <p className={cls.profItem}>CFKN</p>
                <p className={cls.profItem}>Возраст: 13</p>
            </div>
            
        </div>
        <div className={cls.titulCon}>
            <img className={cls.cup} src="/icons/winnercup.svg" alt="" />
            <p>Мои Достижения</p>
        </div>
        </div>
        <div className={cls.listGame}>
        <GameList playerName='CFKN'/>
        </div>
        
    </div>
  )
}
