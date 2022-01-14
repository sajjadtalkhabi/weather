import { debounce } from "lodash";
export default (e, callback) => {
  debouncedFunction(e, callback);
};

let debouncedFunction = debounce((e, callback) => {
  switch (e.code) {
    case "ArrowDown":
    case "ArrowUp":
    case "Enter":
      return;
  }

  debouncedFunction.cancel();
  if (e.target.value && e.target.value.trim().length > 1) {
    callback();
  }
}, 400);
