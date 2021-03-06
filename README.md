[![Travis Build Status](https://img.shields.io/travis/AnomalousTechnologies/newton/master.svg)](https://travis-ci.org/AnomalousTechnologies/newton)
![Coveralls Coverage Check](https://img.shields.io/coveralls/github/AnomalousTechnologies/newton/master.svg)
![Depfu Dependency Check](https://img.shields.io/depfu/AnomalousTechnologies/newton.svg)
![NPM Package Size](https://img.shields.io/bundlephobia/min/@anomalous/newton.svg)

# newton
Design system and component library from Anomalous

## Introduction

Newton is a design system and component library created by Anomalous. This library provides the UI backbone of our **Inspect** and **Mission Control** applications. Newton has been written for [React](https://reactjs.org/) and provides a range of components to speed up frontend development.

We use [Styled Components](https://www.styled-components.com) to style our components and allow you to extend those styles for your own use.

We follow a component structure that is similar in principle to the concepts laid out by Brad Frost in [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) although we use our own language and the concept has been slightly simplified.

We also use a stripped down version of [Normalize](https://necolas.github.io/normalize.css/) to encourage consistency across browsers, you can include our version of normalise or the original (or none at all).

**NB:** For optimum aesthetics make sure you include [Gill Sans Nova](https://fonts.adobe.com/fonts/gill-sans-nova) from Typekit.

If you're building applications to live within the Anomalous ecosystem feel free to use Newton.

## Install

With Yarn: _(our preference at Anomalous)_

```
$ yarn add @anomalous/newton styled-components
```

With NPM:

```
$ npm install @anomalous/newton styled-components
```

## Usage

Include Gill Sans Nova in your application by using Typekit (optional).

```
<html>
  <head>
    <link rel="stylesheet" href="https://use.typekit.net/xxxxxxx.css" />
  </head>
  <body>
    ...
  </body>
</html>

```

At the root of your application, include Normalize (optional) and setup the Styled Components theme (required).

```
import React from 'react';
import { theme } from '@anomalous/newton';
import { ThemeProvider } from 'styled-components';

import '@anomalous/newton/dist/normalize.css';

const App = () => (
  <ThemeProvider theme={theme}>
    ...
  </ThemeProvider>
);

export default App;
```

Include the component you need and away you go!

```
import React from 'react';
import { Button } from '@anomalous/newton';

const MyComponent = () => (
  <div>
     <Button onClick={() => alert('it works')}>My Button</Button>
  </div>
);

export default MyComponent;
```

## Structure

Newton provides the following types of component:

- *Bolts:* quite literally the nuts and bolts of an application; the smallest units we provide.
- *Parts:* made up over several parts to create a more meaningful whole; a small collection of components.
- *Vehicles:* made of parts and bolts representing a significant piece of functionality; the building blocks of an app.

In our applications we built on these components with the following:

- *Layouts:* made up of a combination of bolts, parts, and vehicles to give pages structure.
- *Pages:* the final level representing a working feature, usually implementing a layout and adding additional bolts, parts of vehicles.

We structure our frontend applications as follows:

```
- assets
- components
  - bolts
  - parts
  - vehicles
- layouts
- pages
```

## Deploying New Releases

New releases are periodically created as new features are delivered. Creating a new release (and tag) in GitHub automatically triggers a deployment to NPM as long as the version number has been updated in `package.json`. Watch the GitHub repo to be notified of new releases.

## Issues and Feedback

If you spot a problem with Newton please [raise an issue](https://github.com/AnomalousTechnologies/newton/issues/new).
