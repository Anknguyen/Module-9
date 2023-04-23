const fs = require('fs');
const readline = require('readline');
// const template = template.md.required

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

const questions = [
'What is your project name? ',
'What is your name? ',
'Describe your project: ',
'Describe your installation: ',
'Describe the usage of your program: ',
'What is your github ID? '
];

const answers = {};

function askQuestion(i) {
rl.question(questions[i], (answer) => {
answers[i] = answer;
if (i < questions.length - 1) {
askQuestion(i + 1);
} else {
console.log('Thank you for your answers:');
console.log(answers);
saveToReadme(answers);
rl.close();
}
});
};

askQuestion(0)

function saveToReadme(answers) {
console.log('save to Readme');
let sourceFile = 'template.md'
let destinationFile = 'README.md'
// Read the sourceFile file
const fileContent = fs.readFileSync(sourceFile, 'utf-8');

// Replace the variables in the content
const updatedContent = fileContent
.replace('{{Title}}', answers[0])
.replace('{{Name}}', answers[1])
.replace('{{Description}}', answers[2])
.replace('{{Installation}}', answers[3])
.replace('{{Usage}}', answers[4])
.replace('{{Github}}', answers[5]);

// Write the updated to destinationFile file
fs.writeFileSync(destinationFile, updatedContent, 'utf-8');
}