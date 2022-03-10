import { RestAdapter } from './rest';

export const getBackend = () => {
  return new RestAdapter()
}