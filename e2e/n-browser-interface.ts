import { NightwatchAPI } from 'nightwatch';

export interface AddTaskWithReminderParams {
  title: string;
  taskSel?: string;
  scheduleTime?: number;
}

export interface NBrowser extends NightwatchAPI {
  addTask: (taskTitle: string) => NBrowser;
  addNote: (noteTitle: string) => NBrowser;
  goToDefaultProject: () => NBrowser;
  loadAppAndClickAwayWelcomeDialog: (url?: string) => NBrowser;
  openPanelForTask: (taskSel: string) => NBrowser;
  sendKeysToActiveEl: (keys: string | string[]) => NBrowser;
  addTaskWithReminder: (params: AddTaskWithReminderParams) => NBrowser;
}
