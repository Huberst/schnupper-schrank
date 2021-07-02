import { AppStore, TAppStore } from "./app-store"
import { GlobalUiActions } from "./global-ui"



export const makeStoreBoundActions = (store: TAppStore) => ({
  GlobalUi: GlobalUiActions(store),
})

// Client Actions

export const CA = makeStoreBoundActions(AppStore)
