import { Howl } from 'howler';
import { takeEvery } from 'redux-saga/effects';

import { team } from '../../teams/actions';
import { spectatorOnly } from './spectatorOnly';
import { getNewRandomItem } from '../../shuffle';

import AudioManager from '../AudioManager';

const availableFanfares = [
  '/sounds/point-8bit.wav',
  '/sounds/point-distortion-guitar.wav',
  '/sounds/point-halelujah.wav',
  '/sounds/point-synth-01.wav',
  '/sounds/point-synth-02.wav',
  '/sounds/point-synth-baseball.wav',
  '/sounds/point-windows.wav',
];

const handlePointIncrease = spectatorOnly(function* () {
  let lastFanfare = null;

  const fanfares = availableFanfares.map((sound) => {
    AudioManager.store(sound, new Howl({
      src: [sound],
    }));
    return sound;
  });

  const playFanfare = () => {
    const soundId = getNewRandomItem(fanfares, lastFanfare);
    lastFanfare = soundId;
    console.log(soundId);
    AudioManager.play(soundId);
  };
  yield takeEvery(team.SCORE_INCREASE, playFanfare);
});

export default [
  handlePointIncrease,
];
