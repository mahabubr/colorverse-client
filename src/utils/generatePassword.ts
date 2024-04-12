const generatePassword = (): string => {
  const charset: string =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let password: string = "";

  const passwordLength = Math.floor(Math.random() * (20 - 8 + 1)) + 8;

  for (let i = 0; i <= passwordLength; i++) {
    const idx = Math.floor(Math.random() * charset.length);
    password += charset[idx];
  }

  return password;
};

export default generatePassword;
