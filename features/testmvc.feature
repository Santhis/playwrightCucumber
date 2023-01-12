Feature: To tests mvc

Scenario: Enter values and check in mvc
Given User opens Playwright tool url "https://playwright.dev/"
When website contains menu link "GET STARTED"
Then website link "API" can be opened