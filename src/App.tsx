import React, { useState } from "react";
import Emoji from "./components/Emoji";
import styles from "./App.module.css";

const emojiData = [
  { icon: "😀", bg: "Happy", fc: "White" },
  { icon: "😍", bg: "Love", fc: "Gray" },
  { icon: "😐", bg: "Soso", fc: "Gray" },
  { icon: "😥", bg: "Nerv", fc: "Gray" },
  { icon: "😭", bg: "Sad", fc: "White" },
  { icon: "😴", bg: "Sleepy", fc: "Gray" },
  { icon: "😵", bg: "Dizzy", fc: "Gray" },
  { icon: "🤬", bg: "Angry", fc: "White" },
  { icon: "😵‍💫", bg: "Crazy", fc: "White" },
];

export default function App() {
  const [index, setIndex] = useState(0);

  const bgClass = styles["bg" + emojiData[index].bg];
  const fcClass = styles["fc" + emojiData[index].fc];

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + emojiData.length) % emojiData.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % emojiData.length);
  };

  return (
    <div className={`${styles.mainContainer} ${bgClass}`}>
      <div className={`${styles.appContainer} ${bgClass}`}>
        <p className={`${styles.emojiP} ${fcClass}`}>
          오늘의 기분을 선택해보세요!
        </p>
        <Emoji
          index={index}
          emojiData={emojiData}
          onPrev={handlePrev}
          onNext={handleNext}
        />
        <p className={`${styles.emojiName} ${fcClass}`}>
          {emojiData[index].bg}
        </p>
        <p className={`${styles.emojiP} ${fcClass}`}>
          이모지를 클릭하여 기분을 변경할 수 있습니다.
        </p>
      </div>
    </div>
  );
}
