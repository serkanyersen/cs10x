import Chalk from 'chalk';

export type Maybe<T> = T | null;

export const label = (name: string, length = 45) => {
  name = ` ${name} `.toUpperCase();
  const start = name.substr(0, Math.ceil(name.length / 2));
  const end = name.substr(Math.ceil(name.length / 2));

  console.log(Chalk.green(`\n${start.padStart(Math.ceil(length / 2), '⠿')}${end.padEnd(Math.floor(length / 2), '⠿')}\n`));
}
