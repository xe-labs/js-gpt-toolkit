import chalk from 'chalk';
import enquirer from 'enquirer';

export const showInputPrompt = async (chain, template) => {
  console.log(
    `\nType your query below or ${chalk.red('EXIT')} to close the app.`
  );

  const response = await enquirer.prompt({
    type: 'input',
    name: 'question',
    message: 'How can I help you today?',
  });
  if (response.question.toUpperCase() !== 'EXIT') {
    if (response.question) {
      const chainResponse = await chain.run(await template(response.question));
      console.log(
        chalk.bgGreenBright
          .hex('#000000')
          .bold('\nHere is the response to your query.')
      );
      console.log(chainResponse);
    }
    showInputPrompt(chain, template);
  } else {
    console.log(
      `\n${chalk.bgWhiteBright.black('Thank you for using the app.')}`
    );
  }
};
