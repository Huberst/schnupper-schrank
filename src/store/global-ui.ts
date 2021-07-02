import { TAppStore } from "./app-store"

export const GlobalUi = {
  height: 100,
  width: 100,
}


export const GlobalUiActions = (store: TAppStore) => ({

  updateCanvas: (width: number, height: number) => {

    store.updateState({ ...store.getState(),
      GlobalUi: {
        ...store.getState().GlobalUi,
        width, height
      }
    })
  }

})
