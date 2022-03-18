import { test } from '@playwright/test';
import { allure } from 'allure-playwright'
import fs from 'fs';
import config from '../playwright.config'

const allureDirPath = './allure-results/'
const allureDirName = 'allure-results'
const categoriesFileName = 'categories.json'
const environmentFilePath = './allure-results/environment.properties'


test('Configure Allure report', async ({ browser }) => {
    allure.severity('low')
    allure.story('Configure Allure Report')

    await test.step('Check if the results folder exists and create it if it doesn\'t', async () => {
        checkForDefaultResultsDir()
    });

    await test.step('Copy the categories file', async () => {
        fs.copyFileSync(categoriesFileName, allureDirPath + categoriesFileName)
    })


    await test.step('Check if environment properties file exists and delete it ', async () => {
        checkForExistingEnvFile()
    })

    await test.step('Create the environment properties file', async () => {
        appendEnvFile("Browser = " + config.projects[0].use.browserName + '\n')
        appendEnvFile('BaseURL = ' + config.use.baseURL)
        // appendEnvFile('BrowserVersion = ' + browser.version() + '\n')
    })
})


function appendEnvFile(envVariable: string) {
    fs.appendFile(environmentFilePath, envVariable, function (err) {
        if (err) throw err;
        console.log('File appended with: ' + envVariable);
    });
}

function checkForDefaultResultsDir() {
    if (fs.existsSync(allureDirPath)) {
        console.log('Default allure results folder already exists!')
    } else {
        fs.mkdirSync(allureDirName);
        console.log('Allure results folder created!')
    }
}

function checkForExistingEnvFile() {
    if (fs.existsSync(environmentFilePath)) {
        console.log('file exists')
        fs.rmSync(environmentFilePath)
    }
}