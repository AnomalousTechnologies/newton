import React from 'react';

import styled from '@emotion/styled';

import Code from '../src/bolts/code';
import H1 from '../src/bolts/h1';
import H2 from '../src/bolts/h2';
import Link from '../src/bolts/link';
import ListItem from '../src/bolts/list-item';
import List from '../src/bolts/list-unordered';
import P from '../src/bolts/p';
import Strong from '../src/bolts/strong';
import Sup from '../src/bolts/sup';
import { Wrapper } from './utilities';

const Title = styled(H1)`
  margin-top: 0;
`;

const Welcome = () => (
  <Wrapper style={{ maxWidth: '700px' }}>
    <Title>Newton by Anomalous</Title>
    <P>Newton is a design system and component library created by Anomalous.
      This library provides the UI backbone of our Inspect<Sup>™</Sup> and
      Mission Control<Sup>™</Sup> applications.
      Newton has been written for <Link href="https://reactjs.org/">React</Link> and provides a range of components
      to speed up frontend development.</P>
    <P>We follow a component structure that is similar in principle to the concepts laid out by Brad Frost
      in <Link href="http://bradfrost.com/blog/post/atomic-web-design/">Atomic Design</Link> although
      we use our own language and the concept has been slightly simplified.</P>
    <P>We also use a stripped down version of <Link href="https://necolas.github.io/normalize.css/">Normalize</Link> to
      encourage consistency across browsers, you can include our version of normalise or the original
      (or none at all).</P>
    <P><Strong>NB:</Strong> For optimum aesthetics make sure you
      include <Link href="https://fonts.adobe.com/fonts/gill-sans-nova">Gill Sans Nova</Link> from Typekit.</P>
    <P>If you're building applications to live within the Anomalous ecosystem feel free to use Newton.</P>

    <H2>Install</H2>
    <Code>$ yarn add @anomalous/newton</Code>

    <H2>Usage</H2>
    <P>Include Gill Sans Nova in your application by using Typekit (optional).</P>
    <Code>
      &lt;html&gt;<br/>
        &nbsp;&nbsp;&lt;head&gt;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;link rel="stylesheet" href="https://use.typekit.net/xxxxxxx.css" /&gt;<br/>
        &nbsp;&nbsp;&lt;/head&gt;<br/>
        &nbsp;&nbsp;&lt;body&gt;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;...<br/>
        &nbsp;&nbsp;&lt;/body&gt;<br/>
      &lt;/html&gt;
    </Code>
    <P>At the root of your application, include Normalize (optional).</P>
    <Code>
      import React from 'react';<br/>
      <br/>
      import '@anomalous/newton/dist/normalize.css';<br/>
      <br/>
      const App = () =&gt; (<br/>
        &nbsp;&nbsp&lt;ThemeProvider theme=&#123;theme&#125;&gt;<br/>
          &nbsp;&nbsp&nbsp;&nbsp...<br/>
        &nbsp;&nbsp&lt;/ThemeProvider&gt;<br/>
      );<br/>
      <br/>
      export default App;
    </Code>
    <P>Include the component you need and away you go!</P>
    <Code>
      import React from 'react';<br/>
      import 	&#123; Button &#125; from '@newton/anomalous';<br/>
      <br/>
      const MyComponent = () =&gt; (<br/>
        &nbsp;&nbsp;&lt;div&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;
          &lt;Button onClick=&#123;() =&gt; alert('it works')&#125;&gt;My Button&lt;/Button&gt;<br/>
        &nbsp;&nbsp;&lt;/div&gt;<br/>
      );<br/>
      <br/>
      export default MyComponent;
    </Code>

    <H2>Structure</H2>
    <P>Newton provides the following types of component:</P>
    <List>
      <ListItem>
        <Strong>Bolts:</Strong> quite literally the nuts and bolts of an application; the smallest units we provide.
      </ListItem>
      <ListItem>
        <Strong>Parts:</Strong> made up over several parts to create a more meaningful whole;
          a small collection of components.
      </ListItem>
      <ListItem>
        <Strong>Vehicles:</Strong> made of parts and bolts representing a significant piece of functionality;
          the building blocks of an app.
      </ListItem>
    </List>
    <P>In our applications we build on these components with the following:</P>
    <List>
      <ListItem>
        <Strong>Layouts:</Strong> made up of a combination of bolts, parts, and vehicles to give pages structure.
      </ListItem>
      <ListItem>
        <Strong>Pages:</Strong> the final level representing a working feature, usually implementing a layout
          and adding additional bolts, parts of vehicles.
      </ListItem>
    </List>
  </Wrapper>
);

export default Welcome;
