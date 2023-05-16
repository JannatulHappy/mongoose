  // 1. Create an interface representing a document in MongoDB.
  export interface IUser {
    id: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    role: "Student";
    email?: string;
    password: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: String;
  }