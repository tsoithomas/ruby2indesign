# ruby2indesign
An app that helps to convert Chinese text with ruby characters into a special tagged text file which can be imported into Adobe InDesign.

The app is implemented with React, TypeScript, Tailwind and runs only on the client side.

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Contributing](#contributing)
3. [License](#license)

## Introduction
It is normally difficult and inefficient to add ruby texts (phonetic annotations) to CJK characters in Adobe InDesign. To overcome this hurdle, ruby2indesign makes use of a small trick, taking advantage of a special "InDesign tagged text" format, to import ruby text into the application in batch. The tool accepts text files with Chinese characters and their corresponding phonetic annotations placed on alternate lines. After the format conversion, the imported result would display the CJK characters with their corresponding ruby annotations correctly in InDesign.

For a more detailed discussion, please read my [Medium article](https://tsoithomas.medium.com/how-to-import-chinese-characters-with-ruby-text-into-adobe-indesign-50d2293bd816?source=friends_link&sk=15870906e6608cf985980f661396d8a7).


## Getting Started
These instructions will get you a copy of the project up and running on your local
machine for development and testing purposes.

### Installing
Install with the following command:
```
npm install
```
Run the app:
```
npm run dev
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.

## License
MIT License

Copyright (c) 2023 Thomas Tsoi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

