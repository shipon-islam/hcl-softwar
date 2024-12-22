const originalConsoleError = console.error;
console.error = (...args) => {
  if (typeof args[0] === "string" && args[0].includes("validateDOMNesting")) {
    return;
  }
  originalConsoleError(...args);
};
