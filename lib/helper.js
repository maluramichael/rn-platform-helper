const _ = require('lodash');
const { Platform } = require('react-native');

const ANDROID = 'android';
const IOS = 'ios';

const isAndroid = Platform.OS === ANDROID;
const isIos = Platform.OS === IOS;

const either = function(onIos, onAndroid) {
  if (isIos) return onIos;
  if (isAndroid) return onAndroid;
  return null;
}

const invokeEither = function(onIosFunction, onAndroidFunction) {
  if (!_.isFunction(onIosFunction) || !_.isFunction(onAndroidFunction)) return false;
  if (isIos) return onIosFunction();
  if (isAndroid) return  onAndroidFunction();
  return false;
}

module.exports = {
  isIos,
  isAndroid,
  either,
  invokeEither
};
