import prisma from "@/utils/prisma";

export const AboutMe = async () => {
  const user = await prisma.user.findFirst();

  console.log(user);

  return <div className="container">{user?.name}</div>;
};
