import { IRewards } from '../mocks/types';
import { IRewardMessage } from '../components/RewardMessage';

export const getFormattedRewardsArray = (data: IRewards[]): IRewardMessage[] =>
  data.map(({ userFullName, userAvatarUrl, senderFullName, createdAt, message }) => ({
    userFullName,
    userAvatarUrl,
    senderFullName,
    createdAt,
    message,
  }));
