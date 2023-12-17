// return structure of README as a function
// takes answers as params
const readmeStruct = (answers) => {
    const licenseName = answers.license;
    const licenseBadge = `![License Badge](https://img.shields.io/badge/License-${licenseName}-purple)\n`;
    const techStackBadges = [];

    // assign tech stack badges
    answers.techStack.forEach((item) => {
        techStackBadges.push(`>![Language Badge](https://img.shields.io/badge/Language-${item}-gray)\n`);
    });

    return (
`# ${answers.project}

## Contents

[Description](#Description)
[Tech Stack](#TechStack)
[Dependencies](#Dependencies)
[Tests](#Testing)
[Contributions](#Contributions)
[Author](#Author)
(Other Information)[#Info]
(Support)[#Contact]
(License)[#License]

## Description

<a name="Description"></a>
> ${answers.description}

## Tech Stack

<a name="TechStack"></a>
> ${techStackBadges}

## Dependencies

<a name="Dependencies"></a>
> ${answers.dependencies}

## Testing

<a name="Testing"></a>
> ${answers.tests}

## Contributions

<a name="Contributions"></a>
> Please visit: ${answers.github}

### Author

<a name="Author"></a>
> ${answers.userName}

## Other Information

<a name="Info"></a>
> ${answers.otherInfo}

### Usage
${answers.usage}
### Installation
${answers.installation}

## Support / Questions

<a name="Contact"></a>
> For further support please contact me via: ${answers.email}

## License

<a name="License"></a>
${licenseBadge}

${licenseName} - See <a href="./LICENSE">LICENSE</a> for details.
    `);
}

// export function
module.exports = readmeStruct;