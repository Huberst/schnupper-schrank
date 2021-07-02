
import { GlobalUi } from "./global-ui";
import { SimpleStore } from "./simple-store";
import { Parts } from './parts'

export const defaultAppState = {
  id: "default",
  GlobalUi,
  Parts
}

export type TAppStore = typeof AppStore
export type TAppState = typeof defaultAppState
export const AppStore = new SimpleStore(defaultAppState, "default")




declare global {
  interface Window {
    SUSTAINATIVE_STORE: TAppState,
    store: TAppStore,
    HMR_WEBSOCKET_URL: string
    // callApi: TApiReqDispatcher
  }
}

window.store = AppStore
