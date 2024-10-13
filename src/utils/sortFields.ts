import { Fields } from "../context/SortDropDownContext";
import { Student } from "./data";

export const sortFields = (
  whatToSort: Fields.AverageScore | Fields.WorkCompleted | Fields.StudentName,
  howToSort: "ascending" | "descending",
  data: Student[]
) => {
  const copiedData = [...data];
  const sortedItems = copiedData
    .sort((a, b) => {
      if (whatToSort === Fields.StudentName) {
        if (howToSort === "ascending") {
          if (
            a.profile[whatToSort].toLowerCase() <
            b.profile[whatToSort].toLowerCase()
          )
            return -1;
          if (
            a.profile[whatToSort].toLowerCase() >
            b.profile[whatToSort].toLowerCase()
          )
            return 1;
        } else if (howToSort === "descending") {
          if (
            a.profile[whatToSort].toLowerCase() <
            b.profile[whatToSort].toLowerCase()
          )
            return 1;
          if (
            a.profile[whatToSort].toLowerCase() >
            b.profile[whatToSort].toLowerCase()
          )
            return -1;
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
