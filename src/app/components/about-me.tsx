import { Skill, User } from "@prisma/client";

export const AboutMe = ({
  user,
  skills,
}: {
  user: User | null;
  skills: Skill[];
}) => {
  return (
    <div className="container">
      <h2>A bit about me</h2>

      {user?.name}
    </div>
  );
};
