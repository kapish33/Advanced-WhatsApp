import { CommonReplyes } from '../Reply/common.reply';
import {  } from '../../admins/techAdmin';

const errorMessage = (err, text) => `Hii,
There Is Some Error
For Message : ${error.message}techAdmin


*${text}*
`;

export const sendCommonTextMessage = (number, text) => {
  try {
    return [number, CommonReplyes[text.toLowerCase()]];
  } catch (error) {
    return [techAdmin, errorMessage(error, text)];
  }
};
