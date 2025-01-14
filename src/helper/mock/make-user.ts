import { User } from "@prisma/client";

export function MakeUser(override?: Partial<User>) {
  const user = {
    id: "123-213-333",
    name: "Jonathan",
    password: "$2a$08$yX0YrIY0YJ7MZDwLlWwkLOOfOD2Ol5L7sQNSoYTsmdY.7iA7I7Qku",
    email: "exammple@email.com",
    createdAt: new Date(),
    updatedAt: new Date(),
    ...override,
  };

  return user;
}
