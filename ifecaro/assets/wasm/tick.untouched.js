export async function instantiate(module, imports = {}) {
  const __module0 = imports.ticker;
  const adaptedImports = {
    ticker: Object.assign(Object.create(__module0), {
      "ticker.remove": (
        // src/assembly/imports/ticker/ticker.remove() => void
        ticker.ticker.remove
      ),
      "ticker.show_options": (
        // src/assembly/imports/ticker/ticker.show_options() => void
        ticker.ticker.show_options
      ),
      "ticker.on_scroll": (
        // src/assembly/imports/ticker/ticker.on_scroll() => void
        ticker.ticker.on_scroll
      ),
    }),
  };
  const { exports } = await WebAssembly.instantiate(module, adaptedImports);
  return exports;
}
