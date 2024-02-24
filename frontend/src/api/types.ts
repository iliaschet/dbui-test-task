export type UserRawData = {
  name: string;
  phone: string;
  email: string;
  country: string;
  online: boolean;
};

export type User = UserRawData & {
  id: number;
};
