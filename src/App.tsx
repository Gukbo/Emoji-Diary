import React, { useState } from "react";
import Emoji from "./components/Emoji";
import styles from "./App.module.css";

const emojiData = [
  { icon: "😀", bg: "Happy" },
  { icon: "😍", bg: "Love" },
  { icon: "😐", bg: "Soso" },
  { icon: "😥", bg: "Nerv" },
  { icon: "😭", bg: "Sad" },
  { icon: "😴", bg: "Sleepy" },
  { icon: "😵", bg: "Dizzy" },
  { icon: "🤬", bg: "Angry" },
  { icon: "😵‍💫", bg: "Crazy" },
];

export default function App() {
  const [index, setIndex] = useState(0);

  const bgClass = styles["bg" + emojiData[index].bg];

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + emojiData.length) % emojiData.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % emojiData.length);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.appContainer} ${bgClass}`}>
        <p>오늘의 기분을 선택해보세요!</p>
        <Emoji
          index={index}
          emojiData={emojiData}
          onPrev={handlePrev}
          onNext={handleNext}
        />
        <p>이모지를 클릭하여 기분을 변경할 수 있습니다.</p>
      </div>
    </div>
  );
}
