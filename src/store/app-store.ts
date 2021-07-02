
import { GlobalUi } from "./global-ui";
import { SimpleStore } from "./simple-store";

export const defaultAppState = {
  id: "default",
  GlobalUi,
}

export type TAppStore = typeof AppStore
export type TAppState = typeof defaultAppState
export const AppStore = new SimpleStore(defaultAppState, "default")
