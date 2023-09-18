import type { ColourLogItem, ColourLogName } from '@type'

export const COLOUR: Record<string, string> = {
  BLACK: '#333',
  BLACK_DEEP: '#000',
  BLUE: '#42AFED',
  BLUE_LIGHT: '#f1f6ff',
  BLUE_VERY_LIGHT: '#f7f8fc',
  BLUE_PILL: '#009DE1',
  BLUE_PILL_TOGGLE: '#80B8DD',
  GOLD: '#FFD100',
  BRIGHT_BLUE: '#0071BB',
  GREEN: '#228B22',
  GREEN_BRIGHT: '#2CCA1E',
  GREY: '#888888',
  GREY_DARK: '#4f4f4f',
  GREY_BLUE: '#AAB2BD',
  GREY_CIRCLE_BG: '#EFEFEF',
  GREY_CIRCLE_BORDER: '#C4C4C4',
  GREY_LIGHT: '#F2F2F2',
  GREY_LIGHTMEDIUM: '#E2E2E2',
  GREY_MEDIUM: '#CBCBCB',
  GREY_TEXT: '#888888',
  PURPLE: '#8B3DC9',
  PURPLE_MEDIUM: '#7366ff',
  PURPLE_LIGHT: '#dad6ff',
  PURPLE_VERY_LIGHT: '#f7f6ff',
  RED_ERROR: '#E74949',
  TURQUOISE: '#03DAC6',
  ORANGE: '#ff7327',
  YELLOW: '#FFA927',
  VIOLET: '#4E1E7A',
  WARNING: '#FFA927',
  WHITE: '#FFF',
  TRANSPARENT: 'transparent',
}

export const COLOUR_LOG = new Map<ColourLogName, ColourLogItem>()
  .set('black', {
    end: '[39m',
    start: '[30m',
  })
  .set('red', {
    end: '[39m',
    start: '[31m',
  })
  .set('green', {
    end: '[39m',
    start: '[32m',
  })
  .set('yellow', {
    end: '[39m',
    start: '[33m',
  })
  .set('blue', {
    end: '[39m',
    start: '[34m',
  })
  .set('magenta', {
    end: '[39m',
    start: '[35m',
  })
  .set('cyan', {
    end: '[39m',
    start: '[36m',
  })
  .set('white', {
    end: '[39m',
    start: '[37m',
  })
  .set('gray', {
    end: '[39m',
    start: '[90m',
  })
