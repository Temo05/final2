import { CanActivateFn } from '@angular/router';

export const unsavedFormGuard: CanActivateFn = (route, state) => {
  return true;
};
