import { getHeroesId } from './importExport';

const promesa = new Promise((resolve, reject) => {
  try {
    const heroes = getHeroesId(2);
    resolve(heroes);
  } catch (err) {
    reject(err);
  }
});

promesa
  .then((heroes) => {
    console.log('resolve de la promesa', heroes);
  })
  .catch((err) => {
    console.warn('reject de la promesa', err);
  });
