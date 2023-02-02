import globalStyles from "@styles/globals.css";
export enum HeaderPosition {
  FIXED = "fixed",
  STICKY = "sticky"
}

export const defaultPositionClasses = {
  [HeaderPosition.FIXED]: globalStyles['Trk__sticky'],
  [HeaderPosition.STICKY]: globalStyles['Trk__sticky']
};
