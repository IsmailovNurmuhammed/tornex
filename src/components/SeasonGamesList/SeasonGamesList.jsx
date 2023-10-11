import React, { useState, useEffect } from "react";
import cls from "./SeasonGamesList.module.scss";
import { useSpring, animated } from "react-spring";

export default function SeasonGamesList({
  name,
  date,
  firstPlace,
  secondPlace,
  thirdPlace,
  fourthPlace,
  onToggle,
  isOpen,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(isOpen);
  }, [isOpen]);

  const toggleSecondContainer = () => {
    onToggle();
  };

  const expandAnimation = useSpring({
    opacity: isExpanded ? 1 : 0,
    maxHeight: isExpanded ? 1000 : 0,
    overflow: "hidden",
    transform: `translateY(${isExpanded ? 0 : -20}px)`,
    config: { duration: 400 },
  });

  const hasContentToDisplay = name && name.length > 0;

  return (
    <div className={cls.gameItem}>
      <div>
        <div
          className={`${cls.mainBlock} ${isExpanded ? cls.expanded : ""}`}
          onClick={toggleSecondContainer}
        >
          <div className={cls.name}>{name}</div>
          <p className={cls.date}>{date}</p>
        </div>

        {hasContentToDisplay && (
          <animated.div className={cls.additionalInfo} style={expandAnimation}>
            <div className={cls.secCon}>
              <div className={cls.placeCon}>
                <img className={cls.placeIcon} src="/icons/place1.svg" alt="" />
                <p className={`${cls.nick} ${cls.first}`}>{firstPlace}</p>
              </div>
              <div className={cls.placeCon}>
                <img className={cls.placeIcon} src="/icons/place2.svg" alt="" />
                <p className={`${cls.nick} ${cls.second}`}>{secondPlace}</p>
              </div>
              <div className={cls.placeCon}>
                <img className={cls.placeIcon} src="/icons/place3.svg" alt="" />
                <p className={`${cls.nick} ${cls.third}`}>{thirdPlace}</p>
              </div>
              <div className={cls.placeCon}>
                <img className={cls.placeIcon} src="/icons/place4.svg" alt="" />
                <p className={`${cls.nick} ${cls.fourth}`}>{fourthPlace}</p>
              </div>
            </div>
          </animated.div>
        )}
      </div>
    </div>
  );
}
