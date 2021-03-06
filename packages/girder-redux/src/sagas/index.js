// Export action watchers
import {
  watchAuthenticate,
  watchFetchMe,
  watchFetchOauthProviders,
  watchTestOauthEnabled,
  watchInvalidateToken,
  watchNewToken,
  watchUsernameLogin,
  watchNerscLogin,
  watchLoadTokenFromApiKey,
  watchFetchApiKey
} from './auth';

export const authSagas = {
  watchAuthenticate,
  watchFetchMe,
  watchFetchOauthProviders,
  watchTestOauthEnabled,
  watchInvalidateToken,
  watchNewToken,
  watchUsernameLogin,
  watchNerscLogin,
  watchLoadTokenFromApiKey,
  watchFetchApiKey
}

import * as notifications from './notifications';
export const notificationsSagas = notifications;

import {
  watchFetchUsersList,
  watchFetchGroupsList,
  watchFetchMembersList,
  watchRemoveMember,
  watchAddMember,
  watchRemoveGroup
} from './admin';

export const adminSagas = {
  watchFetchUsersList,
  watchFetchGroupsList,
  watchFetchMembersList,
  watchRemoveMember,
  watchAddMember,
  watchRemoveGroup
};

import {
  watchFetchUserInformation,
  watchUpdateUserInformation,
  watchTwitterLogin,
  watchOrcidLogin,
  watchApiKeyEdited,
  watchApiKeyCreated,
  watchApiKeyDeleted,
  watchApiKeyRequested
} from './user';

export const userSagas = {
  watchFetchUserInformation,
  watchUpdateUserInformation,
  watchTwitterLogin,
  watchOrcidLogin,
  watchApiKeyEdited,
  watchApiKeyCreated,
  watchApiKeyDeleted,
  watchApiKeyRequested
}