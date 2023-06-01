export const QuranImages = Array.from({ length: 604 }, (_, index) => ({
    id: index + 1,
    quranImage: require(`../Assets/Images/quran/${index + 1}.png`),
  }));
