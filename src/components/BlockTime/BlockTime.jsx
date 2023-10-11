import React, { useState } from "react";
import cls from "./BlockTime.module.scss";
import { useSpring, animated } from "react-spring";

export default function BlockTime({
    data,
    dis,
    img,
    onToggle,
    isOpen,
    pNum,
    vs,
}) {
    const [isExpanded] = useState(false);

    const toggleSecondContainer = () => {
        onToggle();
    };


    // Создаем анимацию для появления/скрытия дополнительной информации
    const expandAnimation = useSpring({
        opacity: isOpen ? 1 : 0,
        maxHeight: isOpen ? 1000 : 0,
        overflow: "hidden",
        transform: `translateY(${isOpen ? 0 : -20}px)`,
        config: { duration: 300 },
    });

    const hasContentToDisplay = pNum && pNum.length > 0;

    return (
        <div className={cls.container}>
            <div
                className={`${cls.mainBlock} ${isExpanded ? cls.expanded : ""}`}
                onClick={toggleSecondContainer}
            >
                <div className={cls.iconCon}>
                    <img src={img} alt="icon" className={cls.icon} />
                </div>
                <p className={cls.txt}>{dis}</p>

                <p className={cls.num}>{data}</p>
            </div>

            {hasContentToDisplay && (
                <animated.div
                    className={cls.additionalInfo}
                    style={expandAnimation}
                >
                    <div className={cls.secCon}>
                        <div className={cls.secBlock}>
                            <p className={cls.snum}>{pNum[0]}</p>
                            <img className={cls.vs} src="/icons/vs.svg" alt="vs" />
                            <p className={cls.snum}>{pNum[1]}</p>
                        </div>
                        <div className={cls.secBlock}>
                            <p className={cls.snum}>{pNum[2]}</p>
                            <img className={cls.vs} src="/icons/vs.svg" alt="vs" />
                            <p className={cls.snum}>{pNum[3]}</p>
                        </div>
                    </div>
                </animated.div>
            )}
        </div>
    );
}
