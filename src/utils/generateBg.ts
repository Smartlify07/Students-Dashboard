export const generateBg = (averageScore: number) => {
  let mainBgColor: string;
  let lightBgColor: string;

  switch (true) {
    case averageScore >= 50 && averageScore <= 69:
      mainBgColor = "rgba(255,235,0)";
      lightBgColor = "rgba(255,235,0,0.3)";
      break;
    case averageScore >= 70 && averageScore <= 79:
      mainBgColor = "rgba(255,165,0)";
      lightBgColor = "rgba(255,165,0,0.3)";

      break;
    case averageScore >= 80 && averageScore <= 100:
      mainBgColor = "#86D718";
      lightBgColor = "#E5F2D2";
      break;
    default:
      mainBgColor = "#FF8158";
      lightBgColor = "#FFEBE5";
  }
  return { lightBgColor, mainBgColor };
};
