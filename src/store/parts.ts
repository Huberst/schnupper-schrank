import { TAppStore } from "./app-store"

const defaultPart = {
  id: "test",
  width: 1,
  height: 1,
  depth: 1
}

export type TPart = typeof defaultPart

export const Parts = {
  current: {
    test: defaultPart
  } as Record<string, TPart>
}

export const PartsActions = (store: TAppStore) => ({

  updatePart: (part: TPart) => {

    store.updateState({... store.getState(),
      Parts: {
        ...store.getState().Parts,
        current: { ...store.getState().Parts.current, [part.id]: part }
      }
    })

  }

})
