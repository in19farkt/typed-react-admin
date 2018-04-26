import { Action } from "redux";

export const SHOW_NOTIFICATION = 'RA/SHOW_NOTIFICATION';

export function showNotification(message: string, type?: string, notificationOptions?: any): Action
export const HIDE_NOTIFICATION = 'RA/HIDE_NOTIFICATION';

export function hideNotification(): Action;