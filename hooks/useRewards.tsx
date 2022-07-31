import { useQuery } from '@tanstack/react-query';
import { getAllRewards } from '../api/rewardsApi';

const useRewards = () => {
  const { error, status, data, isFetched } = useQuery(['rewards'], getAllRewards);
  return { status, error, data, isFetched };
};

export default useRewards;
