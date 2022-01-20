function createDOM(vdom) {
  const element = document.createElement(vdom.tag);
}

const vdom = {
  tag: "",
  props: {},
  children: [
    {
      tag: "",
      props: {},
      children: ["React 만들기"],
    },
  ],
};

createDOM(vdom);
