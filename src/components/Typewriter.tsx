import { useEffect, useState } from 'react';

const phrases = [
  'Akıllı web siteleri',
  'Otomatik randevu sistemleri',
  'Yapay zeka destekli iletişim',
  '7/24 yanıt veren asistan',
];

export function useTypewriter(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => prev + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            isDeleting
              ? currentWord.substring(0, prev.length - 1)
              : currentWord.substring(0, prev.length + 1),
          );
        },
        isDeleting ? deletingSpeed : typingSpeed,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}

export function TypewriterText() {
  const text = useTypewriter(phrases);

  return (
    <span className="text-gradient-teal">
      {text}
      <span className="ml-0.5 inline-block w-[3px] h-[1em] translate-y-[3px] bg-teal-400 animate-blink" />
    </span>
  );
}
