import User from "./user.model";

export const createUserToDb = async() => {
  const user = await new User({
    id: 880000000000,
    name: {
      firstName: "Hap ",
      middleName: "koi",
      lastName: "gelo",
    },

    role: "Student",
    gender: "female",
    password: "dhon janina g",
    contactNo: "0176544",
    emergencyContactNo: "0882811",
    email: "ur@gmail.com",
    presentAddress: "kulgaon",
    permanentAddress: "kulgao",
  });
  await user.save();

 return user
};
export const getUsersFromDb=async()=>{
  const users = await User.find();
  return users
}
