import JohnDoe from "../assets/avatars/John Doe.svg";
import Emily from "../assets/avatars/Emily Davis.svg";
import James from "../assets/avatars/James Wilson.svg";
import Michael from "../assets/avatars/Michael Johnson.svg";
import Olivia from "../assets/avatars/Olivia Taylor.svg";
import Sarah from "../assets/avatars/Sarah Brown.svg";
import Sophia from "../assets/avatars/Sophia Martinez.svg";
import David from "../assets/avatars/David Lee.svg";
import Daniel from "../assets/avatars/Daniel Anderson.svg";
import Jane from "../assets/avatars/Jane Smith.svg";
export type Student = {
  averageScore: number;
  workCompleted: number;
  id: number | string;
  profile: {
    profileImage: string;
    studentName: string;
  };
};

export const studentsData: Student[] = [
  {
    id: 1, // Unique ID
    averageScore: 40,
    workCompleted: 35,
    profile: {
      studentName: "John Doe",
      profileImage: JohnDoe,
    },
  },
  {
    id: 2, // Unique ID
    averageScore: 72,
    workCompleted: 30,
    profile: {
      studentName: "Jane Smith",
      profileImage: Jane,
    },
  },
  {
    id: 3, // Unique ID
    averageScore: 60,
    workCompleted: 25,
    profile: {
      studentName: "Michael Johnson",
      profileImage: Michael,
    },
  },
  {
    id: 4, // Unique ID
    averageScore: 95,
    workCompleted: 38,
    profile: {
      studentName: "Emily Davis",
      profileImage: Emily,
    },
  },
  {
    id: 5, // Unique ID
    averageScore: 45,
    workCompleted: 28,
    profile: {
      studentName: "David Lee",
      profileImage: David,
    },
  },
  {
    id: 6, // Unique ID
    averageScore: 78,
    workCompleted: 32,
    profile: {
      studentName: "Sarah Brown",
      profileImage: Sarah,
    },
  },
  {
    id: 7, // Unique ID
    averageScore: 52,
    workCompleted: 29,
    profile: {
      studentName: "James Wilson",
      profileImage: James,
    },
  },
  {
    id: 8, // Unique ID
    averageScore: 68,
    workCompleted: 27,
    profile: {
      studentName: "Sophia Martinez",
      profileImage: Sophia,
    },
  },
  {
    id: 9, // Unique ID
    averageScore: 40,
    workCompleted: 19,
    profile: {
      studentName: "Daniel Anderson",
      profileImage: Daniel,
    },
  },
  {
    id: 10, // Unique ID
    averageScore: 92,
    workCompleted: 36,
    profile: {
      studentName: "Olivia Taylor",
      profileImage: Olivia,
    },
  },
];
