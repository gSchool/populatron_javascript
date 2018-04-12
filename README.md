# Populatron

## Objectives

- Practice outside-in testing with TDD
- Refactor code into testable units
- Isolate and mock dependencies that use IO
- Isolate application from entry point 
- Use sinon to mock functions
- Use behavior-based and state-based testing techniques

## Rationale

Real-life applications are complex. Naive programmers will create complex monoliths which are hard to test.

Adherents to TDD will create complex applications composed of simple modules.

This exercise gives students an isolated practice problem to hone their skills.

## Background

In this repository you will find a csv file containing information on the cities in the world.

You will also find a yarn project with a single entry point and a single integration test.

The test follows the outside in paradigm, and there is currently a passing user-acceptance test.

Now it is time for you to refactor this monolith into smaller classes, writing unit tests for each one as you go.

## TODO

1. Isolate the entry point from the application class. No notion command line arguments or console output should leak into the application class itself. If this was turned into a web-based app tomorrow, it should be easy.
1. Isolate file IO from the app. Disk access is brittle (incorrect paths, disk full, access denied). Refactor file IO into its own class so it can be mocked.
1. Use sinon to mock and inject your file IO class.
1. Isolate your CSV parsing logic from your app by refactoring it into a parser that returns an generic list of objects.

## Verification

Below are some questions you can ask yourself to determine if your code is TDD compliant:

1. Do your classes communicate by passing messages? Or are there deep-seated dependencies leaking between them? A good way to determine this is to look at require statements. Does any file require more than one external dependency? If so, you need to refactor.
1. Are any of your methods longer than 5-10 lines max? Do they do more than 1 thing? If so, you probably need to break them up into smaller methods.
1. Are your tests reliant on data that was in the file? If so, you need to alter your code to mock the appropriate classes so that your tests are in charge of the data being processed. Pure unit tests of a CSV reader should involve just a few lines with a few columns.
1. Do your tests use real models, or did you make deliberately simplified models to test with? Unit tests should use simplified data and models.
1. If you set a breakpoint in the constructor of all objects, and you run your unit test, does more than one breakpoint get hit? If so, you aren't mocking sufficiently. 
1. Do your methods mutate any variables? Can you refactor them to be immutable? 

Remember these questions, because they apply to all code, not just the code you have written in for this exercise.

## Stretch

1. Refactor all your tests to use behavior based testing and mock all dependencies.

## Final note

The focus of this exercise is on unit tests and mocking because these are often where developers go wrong. However if you only have unit tests, you face other problems:

![unit vs integration](./img/giphy.gif)

Make sure you don't fall into the [mockist](https://agilewarrior.wordpress.com/2015/04/18/classical-vs-mockist-testing/) trap and skip your integration testing.
