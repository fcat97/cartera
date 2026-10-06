export const SITE_URL = 'https://cartera.yellowbytes.dev';
export const SITE_TITLE = 'Cartera — Expense Tracker & Budget Planner for Android';
export const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=media.uqab.cartera';
export const SITE_DESCRIPTION = 'Cartera combines expense tracking, budgets, savings goals, loans, and shared finances in a notebook-style money manager for Android.';

export function absoluteUrl(path: string) {
  return new URL(path, `${SITE_URL}/`).toString();
}
