import { IRewardMessage } from '../components/RewardMessage';
import { IRewards } from '../service/types';

export const getFormattedRewardsArray = (data: IRewards[]): IRewardMessage[] =>
  data.map(({ userFullName, userAvatarUrl, senderFullName, createdAt, message, reward }) => ({
    userFullName,
    userAvatarUrl,
    senderFullName,
    createdAt,
    message,
    reward,
  }));
