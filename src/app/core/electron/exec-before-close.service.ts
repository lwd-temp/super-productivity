import { Injectable } from '@angular/core';
import { IPC } from '../../../../electron/shared-with-frontend/ipc-events.const';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IS_ELECTRON } from '../../app.constants';
import { ipcEvent$ } from '../../util/ipc-event';

@Injectable({ providedIn: 'root' })
export class ExecBeforeCloseService {
  onBeforeClose$: Observable<string[]> = IS_ELECTRON
    ? ipcEvent$(IPC.NOTIFY_ON_CLOSE).pipe(map(([, ids]: any) => ids))
    : of([]);

  constructor() {}

  schedule(id: string): void {
    window.electronAPI.send(IPC.REGISTER_BEFORE_CLOSE, { id });
  }

  unschedule(id: string): void {
    window.electronAPI.send(IPC.UNREGISTER_BEFORE_CLOSE, { id });
  }

  setDone(id: string): void {
    window.electronAPI.send(IPC.BEFORE_CLOSE_DONE, { id });
  }
}
