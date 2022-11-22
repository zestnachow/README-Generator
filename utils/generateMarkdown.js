// If there is no license, return an empty string; otherwise, return badge url for the requested license
function renderLicenseBadge(data) {
  if (data.License === false) {
    return "";
  } else if (data.LicenseType === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (data.LicenseType === "Creative Commons Attribution") {
    return `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)`;
  } else if (data.LicenseType === "GNU GPL v3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (data.LicenseType === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
}

// If there is no license, return an empty string; otherwise, generate a markdown subheading called License
function renderLicenseLink(data) {
  if (data.License === false) {
    return "";
  } else {
    return `* [License](#license)`;
  }

}

// If there is no license, return an empty string; otherwise, generate the appropriate README subsection for the requested license
function renderLicenseSection(data) {
  if (data.License === false) {
    return "";
  } else if (data.LicenseType === "MIT") {
    return `# License
    License: ${data.LicenseType}.
    ${renderLicenseBadge(data)}
    Copyright (c) 2021 ${data.Contributors}.
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions
    of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  } else if (data.LicenseType === "Creative Commons Attribution") {
    return `# License
    License: ${data.LicenseType}.
    ${renderLicenseBadge(data)}
    You are free to: 
    Share — copy and redistribute the material in any medium or format
    Adapt — remix, transform, and build upon the material for any purpose, even commercially. This license is acceptable for Free Cultural Works. The licensor cannot revoke these freedoms as long as you follow the license terms.
    Under the following terms:
    Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
    No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.Notices:
    You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation.
    No warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as publicity, privacy, or moral rights may limit how you use the material.`;
  }
  else if (data.LicenseType === "GNU GPL v3") {
    return `# License
    License: ${data.LicenseType}.
    ${renderLicenseBadge(data)}
    Copyright (C) 2022  ${data.Contributors}
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.`;
  }
  else if (data.LicenseType === "Apache") {
    return `# License
    License: ${data.LicenseType}.
    ${renderLicenseBadge(data)}
    Copyright 2022 ${data.Contributors}
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License. You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, softwaredistributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.`;
  }
}

// Generates README.md file based on user inputs
function generateMarkdown(data) {
  return `# ${data.ProjectTitle}
  https://github.com/${data.Username}/${data.ProjectTitle}
  ## Description
  ${data.Description}
  ## Table of Contents
  *
`;
}

module.exports = { generateMarkdown, renderLicenseSection };
