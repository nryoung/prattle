import { ChatManager, TokenProvider } from '@pusher/chatkit-client';

const config = {
  instanceLocator: process.env.REACT_APP_INSTANCE_LOCATOR,
  userId: process.env.REACT_APP_USER,
  tokenProvider: new TokenProvider({
    url: process.env.REACT_APP_TOKEN_PROVIDER,
  }),
};

export default new ChatManager(config);
