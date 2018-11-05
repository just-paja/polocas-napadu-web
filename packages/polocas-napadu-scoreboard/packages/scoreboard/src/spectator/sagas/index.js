import spectatorSounds from './spectatorSounds';
import spectatorWindow from './spectatorWindow';

export * from './monitorOnly';
export * from './spectatorOnly';

export default [
  ...spectatorSounds,
  ...spectatorWindow,
];
