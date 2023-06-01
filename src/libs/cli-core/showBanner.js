import cfonts from 'cfonts';
import chalk from 'chalk';

export function showBanner(heading, subheading) {
  console.clear();
  cfonts.say(heading, {
    font: 'chrome',
    gradient: ['#FE414D', '#FE414D', '#FE414D'],
    transitionGradient: true,
    lineHeight: 1,
  });
  console.log(chalk.bgYellowBright.black(subheading));
}
