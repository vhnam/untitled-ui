import StyleDictionary from 'style-dictionary';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('Build started...');
console.log('\n==============================================');

const argb2rgba = (color) => {
  return '#' + color.slice(3, 9) + color[1] + color[2];
};

StyleDictionary.registerTransform({
  name: 'elevation/argb2rgba',
  type: 'value',
  filter: (token) => token.type === 'boxShadow',
  transform: (token) =>
    token.value.map((elevation) => ({
      ...elevation,
      color: argb2rgba(elevation.color),
    })),
});

const sd = new StyleDictionary({
  source: [__dirname + '/tokens/care.json'],
  platforms: {
    json: {
      transforms: ['elevation/argb2rgba'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested',
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nBuild completed!');
