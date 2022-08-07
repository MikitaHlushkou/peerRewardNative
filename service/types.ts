export interface ILoginUserCredentials {
  email: string;
  password: string;
}

export interface ISignUpCredentials extends ILoginUserCredentials {
  name: string;
}

export interface IRewards {
  id: number;
  userId: string;
  userFullName: string;
  userAvatarUrl: string;
  senderId: string;
  senderFullName: string;
  createdAt: string | Date;
  message: string;
  reward: string;
}
