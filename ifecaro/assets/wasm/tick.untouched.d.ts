declare namespace __AdaptedExports {
  /**
   * src/assembly/functions/tick/tick
   */
  export function tick(): void;
  /**
   * src/assembly/functions/tick/keydown
   */
  export function keydown(): void;
}
/** Instantiates the compiled WebAssembly module with the given imports. */
export declare function instantiate(module: WebAssembly.Module, imports: {
  ticker: unknown,
}): Promise<typeof __AdaptedExports>;
