import { Student } from "./data";
export const calculateEntireClassAverage = (students: Student[]) => {
  const studentsFrequency = students.length;

  const totalClassAverage = students.reduce(
    (total, current) => total + current.averageScore,
    0
  );

  return Math.floor(totalClassAverage / studentsFrequency);
};
