// return structure of README as a function
// takes answers as params
const readmeStruct = (answers) => {
    return (
`# ${answers.project}

## Description

> ${answers.description}

## Front End

> ${answers.techStack}

## Dependencies

> ${answers.dependencies}

## Testing

> ${answers.tests}

## Contributions

> ${answers.github}

### Author

> ${answers.userName}

## Repo Information

> ${answers.otherInfo}

## Support

> For further support please contact me via: ${answers.email}
    `);
}

// export function
module.exports = readmeStruct;