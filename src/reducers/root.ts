export type State = ""

const initialState: State = ""

export type Action = {type: "NoAction"}

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    default: return state
  }
}