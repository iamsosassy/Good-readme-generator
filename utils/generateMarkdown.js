function generateMarkdown(data) {
    return `
# ${data.title} ![GitHub package.json version](https://img.shields.io/github/package-json/v/iamsosassy/Good-README-Generator)
${data.description}
# Tables of Contents
* [Username](#username)
* [Email](#email)
* [Project](#project)
* [Description](#description)
* [Licensetype](#licensetype)
* [About](#About)
* [Contributing](#contributing)

# Username
${data.username}
# Email
${data.email}
# Project
${data.project}
# Description
${data.description}
# Licensetype
${data.licensetype}
# About
${data.about}
# Contributing
${data.contributing}

# Questions
![Profile Avatar](${data.pfp})
If you have any questions, please e-mail me at ${data.email}.
# Credits
Github: [${data.username}](${data.url})
Copyright ${data.name}. All Rights Reserved.
`;
};

module.exports = generateMarkdown;