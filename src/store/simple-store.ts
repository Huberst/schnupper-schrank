

export type TStoreState = { id: string }

export const DUMMY_STORE = "DUMMY_STORE"

type Function = () => void

/**
 * Basic impl. of an observable store.
 * Let's keep this simple.
 */
export class SimpleStore<TStateType extends TStoreState> {

  constructor(private state: TStateType, public id: string = DUMMY_STORE) {}

  private subs: Array<Function> = []

  private afterUpdate() {
    this.subs.forEach(subCallBack => subCallBack())
  }

  private afterSet() {
    if (this.id !== this.state.id) {
      console.warn(`Changing store ID from ${this.id}, to ${this.state.id}`)
      this.id = this.state.id
    }
  }

  public getState() {
    return this.state
  }

  public getStore() {
    return [this.state, this.updateState]
  }

  public updateState(newStore: TStateType) {
    this.setStateSilent(newStore)
    this.afterUpdate()
  }

  public setStateSilent(newStore: TStateType) {
    this.state = newStore
    this.afterSet()
  }

  public subscribe(fn: Function) {
    this.subs.push(fn)
  }

}
