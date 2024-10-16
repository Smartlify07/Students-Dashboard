import { studentsData } from "./data";

export const calculateGradeFrequency = (min: number, max: number) => {
  // Check the number of students with the average score rounded down
  // filter students with the rounded down score, return the length

  const studentsWithScore = studentsData.filter(
    (student) => student.averageScore >= min && student.averageScore <= max
  );

  return { studentsWithScore, studentsFrequency: studentsWithScore.length };
};

export const calculateGradeFrequencyPercentage = (frequency: number) => {
  // take number of students returned from freq, divide by total students multiply by 100
  const percentage = (frequency / studentsData.length) * 100;
  return percentage;
};
