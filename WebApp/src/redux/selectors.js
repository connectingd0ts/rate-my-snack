import { useSelector } from 'react-redux';

const getImage = state => state.appStore.image;
export const useGetImage = () => useSelector(getImage);