# Music-Bot
So far, it only plays ONE song that you hardcode in MusicBoy.js

Will definitely look into and implement functionalities that allow different, arbitrary songs to be played based on user arguments.

## Install

```bash
npm i
npm i discord.js
npm i node-opus ytdl-core
npm i -g ffmpeg-binaries
```

Must also have ffmpeg installed: [link](https://ffmpeg.zeranoe.com/builds/)

Take the path in which you downloaded ffmpeg's bin in. For example, C:\ffmpeg\bin , and then put it in your path environment variable



## Usage

Edit the config.js file:

```js
exports.TOKEN = ''; // Your token here

exports.PREFIX = 'm!'; // Your preferred prefix here

exports.GOOGLE_API_KEY = ''; // Your youtube/google API key here
```

## Credits

Based on iCrawl's music bot which can be found here:

 [iCrawl](https://github.com/iCrawl), Released under the [MIT](https://github.com/iCrawl/Music-Bot/blob/master/LICENSE) License.<br>
Authored and maintained by iCrawl.

> GitHub [@iCrawl](https://github.com/iCrawl) · Twitter [@iCrawlToGo](https://twitter.com/iCrawlToGo)
