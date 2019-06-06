# Semantic-UI Toolkit - Inloco theme

You can see and interact with the components [here](https://inloco.github.io/supernova).

## Installing

```sh
  npm install --save @inloco/supernova
  #or
  yarn add @inloco/supernova
```

## Contributing

We're using `yarn`'s lockfile, so we'll assume that it's the one being used, but note that `npm` will also work.

### Setup

To setup the project, you just need to have [Yarn](https://yarnpkg.com/en/) installed and run it to install the project's dependencies:

```sh
  yarn
```

Then we run the command below to update css with our customizations:

```sh
  yarn run build:css
```

### Watch (Hot reloading)

To update css on file change:

```sh
  yarn run watch:css
```

### Storybook

We're using [Storybook](https://storybook.js.org/), to easily see and test the components.

Run it with:

```sh
  yarn storybook
```

Then open it at the url indicated on the terminal, probably: `http://localhost:9001/`.

### Release

To release supernova, follow these steps (let's pretend we're releasing `1.2.3`):

1. Update the version in `package.json` to the new one (in this case `1.2.3`).
2. Create a commit with the version number as the title: `v1.2.3`:

```sh
git commit -m v1.2.3
```

3. Create a new git tag:

```sh
git tag -a v1.2.3 -m v1.2.3
```

4. Push the commit and the tag to master:

```sh
git push origin master --tags
```

5. Publish to npm (you'll need to be logged in as **In Loco** for that):

```sh
npm publish --access public
```

### Deploying Storybook

After releasing a new version, our gh page with Storybook is automatically.

In case it's necessary to do this manually though, just run this simple yarn script:

```sh
yarn deploy:storybook
```
