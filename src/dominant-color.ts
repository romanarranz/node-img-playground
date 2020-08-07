/*
Usage
  node build/dominant-color.js https://findsexy-lonelygirl2.com/media/dating/bigofuck/images/btn_right-4.png
*/

// Package.
import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs-extra';
const ColorThief = require('colorthief');

// Internal.
import { fetchImage } from './Helpers';

// Code.
main();

async function main() {
  try {
    const args = process.argv;
    if (args.length < 3) {
      throw new Error(`The correct sintax is: ${args.join(' ')} <image_url>`);
    }

    const [, , imageUrl] = args;
    const res = await fetchImage(imageUrl);
    const content = await res.buffer();

    if (content.byteLength === 0) {
      throw new Error('Image is empty');
    }

    // Create tmp dir to store images
    const tmpDir = path.join(os.tmpdir(), 'img-playground');
    fs.mkdirpSync(tmpDir);

    const outfile = path.join(tmpDir, res.url.split('/').slice(-1)[0]);
    console.log(outfile);
    fs.writeFileSync(outfile, content);

    const color = await ColorThief.getColor(outfile, 10);
    console.log('Dominant colors', color);
  } catch (err) {
    console.error(err);
  }
}
