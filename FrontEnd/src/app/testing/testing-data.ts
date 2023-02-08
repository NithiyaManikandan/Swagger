import { defer } from 'rxjs';

export function asyncData(data: any) {
  return defer(() => Promise.resolve(data));
}

export function asyncError(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}