import { AppStore, TAppStore } from "./app-store"
import { GlobalUiActions } from "./global-ui"
import { PartsActions } from "./parts"



export const makeStoreBoundActions = (store: TAppStore) => ({
  GlobalUi: GlobalUiActions(store),
  PartsActions: PartsActions(store)
})

// Client Actions

export const CA = makeStoreBoundActions(AppStore)
