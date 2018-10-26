# Semantic-UI Toolkit - Inloco theme

## Installing

```sh
  npm install --save supernova-inloco
  #or
  yarn add supernova-inloco
```

## Contributing

We're using `yarn`'s lockfile, so we'll assume that it's the one being used, but note that `npm` will also work.

### Setup

To setup the project, you just need to have [Yarn](https://yarnpkg.com/en/) installed and run it to install the project's dependencies:

```sh
  yarn
```

### Release

To release supernova, follow these steps (let's pretend we're releasing `1.2.3`):

1. Update the version in `package.json` and commit with the version number as the title: `v1.2.3`.
2. Create a new git tag:
```sh
git tag -a v1.2.3 -m v1.2.3
```
3. Push the commit and the tag to master:
```sh
git push origin master --tags
```
4. Publish to npm (you'll need to be logged in as **In Loco** for that):
```sh
npm publish
```

### Storybook

We're using [Storybook](https://storybook.js.org/), to easily see and test the components.

Run it with:

```sh
  yarn storybook
```

Then open it at the url indicated on the terminal, probably: `http://localhost:9001/`.
