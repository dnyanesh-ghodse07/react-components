export const data = [
  {
    id: 1,
    title: "Debouncing",
    description:
      "Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.",
    code: `const debounce = (func, delay) => {
                let inDebounce;
                return function() {
                    const context = this;
                    const args = arguments;
                    clearTimeout(inDebounce);
                    inDebounce = setTimeout(() => func.apply(context, args), delay);
                };
            };`,
    githubLink:
      "https://github.com/dnyanesh-ghodse07/react-components/blob/main/src/components/Debounce/Debounce.tsx",
  },
  {
    id: 2,
    title: "Cloning",
    description:
      "Create a deep copy of an object, array, or primitive value. This is useful for creating a copy of an object that is not a reference to the same memory location.",
    code: `const clone = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (obj instanceof Array) {
    const clonedArray = [];
    for (const item of obj) {
      clonedArray.push(clone(item));
    }
    return clonedArray;
  }

  const clonedObj = {};
  for (const key of Object.keys(obj)) {
    clonedObj[key] = clone(obj[key]);
  }
  return clonedObj;
};`,
    githubLink:
      "https://github.com/dnyanesh-ghodse07/react-components/blob/main/src/components/Clone/Clone.tsx",
  },
  {
    id: 3,
    title: "Capitalize",
    description:
      "Capitalize the first letter of a string and make all other letters lowercase.",
    code: `const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();`,
    githubLink:
      "https://github.com/dnyanesh-ghodse07/react-components/blob/main/src/components/Capitalize/Capitalize.tsx",
  },
  {
    id: 4,
    title: "Chaining",
    description:
      "Chain multiple functions together to create a single function that can be called with a single argument.",
    code: `const chain = (...fns) => (x) => fns.reduce((v, f) => f(v), x);`,
    githubLink:
      "https://github.com/dnyanesh-ghodse07/react-components/blob/main/src/components/Chaining/Chaining.tsx",
  },
  {
    id: 5,
    title: "Compose",
    description:
      "Compose multiple functions together to create a single function that can be called with multiple arguments.",
    code: `const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);`,
    githubLink:
      "https://github.com/dnyanesh-ghodse07/react-components/blob/main/src/components/Compose/Compose.tsx",
  },
  {
    id: 6,
    title: "Currying",
    description:
      "Currying is a technique where you break down a function that takes multiple arguments into a sequence of functions that take one argument at a time.",
    code: `const curry = (fn) => (x) => (y) => fn(x, y);`,
    githubLink:
      "https://github.com/dnyanesh-ghodse07/react-components/blob/main/src/components/Currying/Currying.tsx",
  },
  {
    id: 7,
    title: "Memoization",
    description:
      "Memoization is a technique for optimizing performance by storing the result of expensive function calls to avoid repeated computation.",
    code: `const memoize = (fn) => {
  const cache = {};
  return (x) => {
    if (cache[x] === undefined) {
      cache[x] = fn(x);
    }
    return cache[x];
  };
};`,
    githubLink:
      "https://github.com/dnyanesh-ghodse07/react-components/blob/main/src/components/Memoization/Memoization.tsx",
  },
  {
    id: 8,
    title: "Throttling",
    description:
      "Throttling is a technique for optimizing performance by limiting the rate at which a function can be called.",
    code: `const throttle = (fn, delay) => {
  let inThrottle;
  return function() {
    const context = this;
    const args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), delay);
    }
  };
};`,
    githubLink:
      "https://github.com/dnyanesh-ghodse07/react-components/blob/main/src/components/Throttling/Throttling.tsx",
  },
];