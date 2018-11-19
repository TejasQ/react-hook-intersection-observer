# `useIntersectionObserver`
This simple [React](https://reactjs.org/) [Hook](https://reactjs.org/docs/hooks-intro.html) uses the [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) API in order to relay information to your UI about whether a given element is **intersecting** with the viewport.

## Getting Started

> ⚠ **Caution:** Hooks is an experimental _proposal_ from the React core team and is best not to use in production _yet_. This project will likely become production ready when Hooks are, but for now, let it serve fun and educational purposes.

Firstly, you'll want to `yarn add react-hook-intersection-observer` into your project.

Then, using this is as simple as:

[![Edit react-hook-intersection-observer](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/r45lrl8rzm)

```jsx
import React, { useRef, useState } from "react";
import { useIntersectionObserver } from "react-hook-intersection-observer";

const App = () => {
  const root = useRef();    // We need a ref to our "root" or our parent,
  const target = useRef();  // We need a ref to our "target" or our child-to-watch,

  // Let's use a bit of state.
  const [isThingIntersecting, setThingIntersecting] = useState(false);

  // Here's our hook! Let's give it some configuration...
  useIntersectionObserver({
    root,
    target,

    // What do we do when it intersects?
    // The signature of this callback is (collectionOfIntersections, observerElement).
    onIntersect: ([{ isIntersecting }]) => setThingIntersecting(isIntersecting)
  });

  return (
    <div className="App">
      <h1>useIntersectionObserver</h1>
      <h2>
        The thing is currently{" "}

        {!isThingIntersecting && <span style={{ color: "red" }}>not</span>}{" "}

        <span style={{ color: isThingIntersecting ? "green" : "black" }}>
          intersecting
        </span>

        !
      </h2>


      <div ref={root} className="black-box">
        <div className="larger-box">
          <div ref={target}>THE THING</div>
        </div>
      </div>
    </div>
  );
};
```

## Contributing

This project is _totally_ open for contributions. Get started by looking at the list of [open issues](https://github.com/tejasq/react-hook-intersection-observer/issues), or by opening one and we can talk about improvements! Wooo!