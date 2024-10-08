import { Fields } from "../context/SortDropDownContext";
import { Student } from "./data";

export const sortFields = (
  whatToSort: Fields.AverageScore | Fields.WorkCompleted | Fields.StudentName,
  howToSort: "ascending" | "descending",
  data: Student[]
) => {
  const sortedItems = data
    .sort((a, b) => {
      if (whatToSort === Fields.StudentName) {
        if (howToSort === "ascending") {
          if (a.profile[whatToSort] < b.profile[whatToSort]) return -1;
        } else if (howToSort === "descending") {
          console.log("descending");
          if (a.profile[whatToSort] < b.profile[whatToSort]) return 1;
        }
        return 0;
      } else {
        if (howToSort === "ascending") return a[whatToSort] - b[whatToSort];
        else return b[whatToSort] - a[whatToSort];
      }
    })
    .map((student) => student);
  return sortedItems;
};
