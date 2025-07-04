import { ITerminalInitOnlyOptions, ITerminalOptions } from '@xterm/xterm';

export const defaultTerminalOptions: ITerminalOptions & ITerminalInitOnlyOptions = {
  cursorBlink: true,
  fontSize: 14,
  fontFamily: '"Monocraft Nerd Font", "MonocraftNF", monospace',
  letterSpacing: 0,
  theme: {
    background: '#0a0a0a',
    foreground: '#f8f9fa',
    cursor: '#f8f9fa',
    selectionForeground: 'rgba(248, 249, 250, 0.3)',
    black: '#1a1b1e',
    red: '#e03131',
    green: '#2f9e44',
    yellow: '#f08c00',
    blue: '#1971c2',
    magenta: '#9c36b5',
    cyan: '#0c8599',
    white: '#f8f9fa',
    brightBlack: '#495057',
    brightRed: '#ff6b6b',
    brightGreen: '#51cf66',
    brightYellow: '#fcc419',
    brightBlue: '#339af0',
    brightMagenta: '#cc5de8',
    brightCyan: '#22b8cf',
    brightWhite: '#ffffff'
  },
  allowTransparency: false,
  scrollback: 10000,
  rows: 25,
  cols: 50,
  cursorStyle: 'bar',
  convertEol: true
};
