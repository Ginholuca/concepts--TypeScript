interface CreateUserData {
  name?: string; //nome opcional por isso o "?"
  email: string;
  password: string;
}

export default function createUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}
