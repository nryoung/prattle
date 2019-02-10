import { ChatManager, TokenProvider } from '@pusher/chatkit-client';

const users = [
  'DaleCooper',
  'HarryTruman',
  'AudreyHorne',
  'Hawk',
  'LelandPalmer',
  'DonnaHayward',
  'TheLogLady',
  'GordonCole',
  'GarlandBriggs',
];

const randomUser = users[Math.floor(Math.random() * users.length)];

const config = {
  instanceLocator: process.env.REACT_APP_INSTANCE_LOCATOR,
  userId: randomUser,
  tokenProvider: new TokenProvider({
    url: process.env.REACT_APP_TOKEN_PROVIDER,
  }),
};

export default new ChatManager(config);
