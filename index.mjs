import chalk from "chalk";
import boxen from "boxen";

// Données pour la carte
const data = {
  name: chalk.bold.green("tim"),
  work: chalk.white("Web developer at BeCode.org"),
  github: chalk.gray("https://github.com/TimDesmet00"),
  linkedin: chalk.gray("https://www.linkedin.com/in/tim-desmet-dev/"),
  //   web: chalk.cyan('https://votresite.com'),
  npx: chalk.red("npx timdesmet"),
};

// Options pour la mise en forme
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

// Construction de la carte
const card = boxen(
  [
    `${data.name}`,
    ``,
    `${data.work}`,
    ``,
    `${chalk.underline("GitHub:")} ${data.github}`,
    `${chalk.underline("LinkedIn:")} ${data.linkedin}`,
    // `${chalk.underline("Web:")} ${data.web}`,
    ``,
    `${chalk.underline("npm:")} ${data.npx}`,
  ].join("\n"),
  options
);

// Affichage de la carte
console.log(card);
