import React from 'react';

const Welcome = () => (
  <div>
    <h1>Newton by Anomalous</h1>
    <p>Newton is a design system and component library create by Anomalous.
      Newton provides the backbone of our Inspect ™ and Mission Control ™ applications.
      Newton is written for <a href="https://reactjs.org/">React</a> and provides a range of components
      to speed up frontend development.</p>
    <p>We follow a component structure that is similar in principle to the concepts laid out by Brad Frost
      in <a href="http://bradfrost.com/blog/post/atomic-web-design/">Atomic Design</a> although we use our own language
      and the concept has been slightly simplified.</p>
    <p>If you're building applications to live within the Anomalous ecosystem feel free to use Newton.</p>

    <h2>Install</h2>
    <p>With NPM:</p>
    <code>$ npm install @anomalous/newton</code>
    <p>With Yarn:</p>
    <code>$ yarn add @anomalous/newton</code>

    <h2>Structure</h2>
    <p>Newton provides the following types of component:</p>
    <ul>
      <li><b>Bolts:</b> quite literally the nuts and bolts of an application; the smallest units we provide.</li>
      <li><b>Parts:</b> made up over several parts to create a more meaningful whole;
        a small collection of components.</li>
      <li><b>Vehicles:</b> made of parts and bolts representing a significant piece of functionality;
        the building blocks of an app.</li>
    </ul>
    <p>In our applications we built on these components with the following:</p>
    <ul>
      <li><b>Layouts:</b> made up of a combination of bolts, parts, and vehicles to give pages structure.</li>
      <li><b>Pages:</b> the final level representing a working feature, usually implementing a layout
        and adding additional bolts, parts of vehicles.</li>
    </ul>
  </div>
);

export default Welcome;
