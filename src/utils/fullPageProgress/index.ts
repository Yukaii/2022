import { ScrollLockManager } from '@/utils/scrollLock'

export interface FullPageProgressManager {
  isLoading: boolean;
}

class FullPageProgressManagerConcrete implements FullPageProgressManager {
  private _scrollLockManager: ScrollLockManager
  private _isLoading = false

  constructor (scrollLockManager: ScrollLockManager) {
    this._scrollLockManager = scrollLockManager
  }

  public get isLoading () {
    return this._isLoading
  }

  public set isLoading (newValue: boolean) {
    newValue ? this._scrollLockManager.lock() : this._scrollLockManager.unlock()
    this._isLoading = newValue
  }
}

export function createFullPageProgressManager (scrollLockManager: ScrollLockManager): FullPageProgressManager {
  return new FullPageProgressManagerConcrete(scrollLockManager)
}