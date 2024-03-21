export type ThemeState = {
  mode: string
}

export type ThemeTypes = {
  light: ColorTypes
  dark: ColorTypes
}

export type ColorTypes = {
  primary?: string
  manifest?: {
    red?: string
    blue?: string
    orange?: string
    green?: string
    yellow?: string
    pink?: string
    gray?: string
    softYellow?: string
    dark?: string
    blueSoft?: string
  }
  stroke?: string
}
