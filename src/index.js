import { useEffect } from "react";

export const useIntersectionObserver = ({ root, target, onIntersect, threshold = 1.0, rootMargin = "0px" }) => {
  useEffect(
    () => {

      if (!root) {
        console.warn(
`No "root" specified for Intersection Observer.

useIntersectionObserver needs to be called with an initial configuration,
where you'd pass in a "root" value (a React Ref using the useRef hook)
to an element that contains a child that would intersect with it: a 
container that's aware of its children.

Please add a root option and try again.

More info: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Creating_an_intersection_observer`);
        return;
      }

      const observer = new IntersectionObserver(onIntersect, {
        root: root.current,
        rootMargin,
        threshold,
      });

      if (!target) {
        console.warn(
`No target specified for Intersection Observer.

useIntersectionObserver needs to be called with an initial configuration,
where you'd pass in a "target" value (a React Ref using the useRef hook) that
represents an element that is contained inside a root element that will be
tracked.

Please add a target option and try again.

More info: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Creating_an_intersection_observer`);
        return;
      }

      observer.observe(target.current);

      // Let's clean up after ourselves.
      return () => {
        observer.unobserve(target.current);
      };
    }
  );
};
