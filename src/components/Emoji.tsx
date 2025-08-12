import styles from "./Emoji.module.css";

type EmojiProps = {
  index: number;
  emojiData: { icon: string; bg: string }[];
  onPrev: () => void;
  onNext: () => void;
};

export default function Emoji({
  index,
  emojiData,
  onPrev,
  onNext,
}: EmojiProps) {
  return (
    <div className={styles.emojiContainer}>
      <button className={styles.prevButton} onClick={onPrev}>
        ⭠
      </button>
      <span className={styles.emojiBox}>{emojiData[index].icon}</span>
      <button className={styles.nextButton} onClick={onNext}>
        ⭢
      </button>
    </div>
  );
}
