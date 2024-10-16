export enum Grades {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
}

export const calculateGrade = (averageScore: number) => {
  let grade: Grades;
  switch (true) {
    case averageScore >= 89:
      grade = Grades.A;
      break;
    case averageScore >= 79:
      grade = Grades.B;
      break;
    case averageScore >= 69:
      grade = Grades.C;
      break;
    case averageScore >= 59:
      grade = Grades.D;
      break;
    case averageScore >= 49:
      grade = Grades.E;
      break;

    default:
      grade = Grades.F;
  }
  return grade;
};
