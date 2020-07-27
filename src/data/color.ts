
type Color
  = {type: "RGB", red: number, green: number, blue: number}
  | {type: "Hex", value: string}

export const
  rgb = (red: number, green: number, blue: number): Color => ({type: "RGB", red, green, blue}),

  hex = (value: string): Color => ({type: "Hex", value}),

  red = hex ("#ff0000"),
  redRGB = rgb (0, 0, 0)