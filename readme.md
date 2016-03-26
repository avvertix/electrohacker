
[![Build Status](https://travis-ci.org/avvertix/electrohacker.svg?branch=master)](https://travis-ci.org/avvertix/electrohacker)

### ElectroHacker

> A personal test to start making something with [Electron](http://electron.atom.io/)


This is a working progress Electron application that serve as [HackerNews](https://news.ycombinator.com) client.



#### Dev Requirements

- Electron
- Gulp for Less style processing
- Node and NPM



#### To run the app

```bash
npm install
npm run start
```



#### To Build the app

the build script supports MacOS, Linux and Windows

To create the packaged application on MacOS run

```bash
npm run build-osx
```

while on Windows run

```bash
npm run build-win-on-win
```

sounds scary, but build-windows is reserved for building the Windows bundle using a Continuos Integration on a bash shell. Everything depends on the variable expansion of the command prompt and the shell.
