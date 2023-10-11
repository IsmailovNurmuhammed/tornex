import React from 'react'
import cls from './NewsPage.module.scss'
import Back from '../../components/Back/Back'

export default function NewsPage() {
  return (
    <div className={cls.con}>
         <Back/>
        <div className={cls.blockNews}>
            <p className={cls.title}>Обновления</p>
            <p className={cls.newsItem}>Привет! У нас хорошие новости: скоро на сайте появятся новые увлекательные игры, где вы сможете соревноваться и устанавливать рекорды. Не упустите шанс стать лучшим игроком недели и получить уникальный бонус!</p> 
        </div>
        <div className={cls.blockNews}>
            <p className={cls.title}>Новости</p>
            <p className={cls.newsItem}>Если вы думаете, где блок с глобальными турнирами, то не волнуйтесь, его пока нет. Однако, как только мы проведем глобальный турнир, этот блок сразу появится. Следите за обновлениями и готовьтесь к соревнованиям!</p>
        </div>
        <div className={cls.blockNews}>
            <p className={cls.title}>Достижения</p>
            <p className={cls.newsItem}>Скоро у нас появится блок с достижениями, где вы узнаете, как получить разнообразные награды и бонусы. Следите за обновлениями и не упустите возможность стать настоящим чемпионом!</p>
        </div>
        
    </div>
  )
}
