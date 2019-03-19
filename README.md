# newton
Design system and component library from Anomalous

# Introduction

Newton is a design system and component library created by Anomalous. Newton provides the backbone of our Inspect ™ and Mission Control ™ applications. Newton is written for [React](https://reactjs.org/) and provides a range of components to speed up frontend development.

We follow a component structure that is similar in principle to the concepts laid out by Brad Frost in [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) although we use our own language and the concept has been slightly simplified.

If you're building applications to live within the Anomalous ecosystem feel free to use Newton.

# Install

With NPM:

```
$ npm install @anomalous/newton
```

With Yarn:

```
$ yarn add @anomalous/newton
```

# Usage

Importing the component(s) you need and using them in your own React components is very straightforward:

```
import { Button } from '@anomalous/newton';

const YourComponent = () => (
  <div>
    <Button onClick={() => console.log('example')}>Click Me</Button>
  </div>
);

export default YourComponent;

```

Each component provides it's own styling (we use [Emotion](https://emotion.sh/)), if you would like to make use of our underlying theme object you can also import that:

```
import { Button, theme } from '@anomalous/newton';

const YourComponent = () => (
  <div style={{ padding: theme.padding.large }}>
    <Button onClick={() => console.log('example')}>Click Me</Button>
  </div>
);

export default YourComponent;

```

# Structure

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

# Components

Newton provides the following components:

*Bolts*
- Button
- Input
- Label
- Textarea

*Parts*
- InputWithLabel

*Vehicles*
- _coming soon_

# Issues and Feedback

If you spot a problem with Newton please [raise an issue](https://github.com/AnomalousTechnologies/newton/issues/new).
