const polyfillTimeline = () => {
  if (!CSS.supports('animation-timeline: view()')) {
    const script = document.createElement('script');
    script.src = 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
    script.async = true;
    document.head.append(script);
  }
};

export { polyfillTimeline };