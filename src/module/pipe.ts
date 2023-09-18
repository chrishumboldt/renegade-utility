// The pipe is a way to handle a value and reduce over it with
// some functions.
// @NOTE This thing is overloaded to the eyeballs but it is kinda needed.
export function pipe(): <A>(input: A) => A
export function pipe<A, B>(b: (a: A) => B): (input: A) => B
export function pipe<A, B, C>(b: (a: A) => B, c: (b: B) => C): (input: A) => C
export function pipe<A, B, C, D>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
): (input: A) => D
export function pipe<A, B, C, D, E>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E,
): (input: A) => E
export function pipe<A, B, C, D, E, F>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E,
  f: (e: E) => F,
): (input: A) => F
export function pipe<A, B, C, D, E, F, G>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E,
  f: (e: E) => F,
  g: (f: F) => G,
): (input: A) => G
export function pipe<A, B, C, D, E, F, G, H>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E,
  f: (e: E) => F,
  g: (f: F) => G,
  h: (g: G) => H,
): (input: A) => H
export function pipe<A, B, C, D, E, F, G, H, I>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E,
  f: (e: E) => F,
  g: (f: F) => G,
  h: (g: G) => H,
  i: (h: H) => I,
): (input: A) => I
export function pipe<A, B, C, D, E, F, G, H, I, J>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E,
  f: (e: E) => F,
  g: (f: F) => G,
  h: (g: G) => H,
  i: (h: H) => I,
  j: (I: I) => J,
): (input: A) => J
export function pipe<A, B, C, D, E, F, G, H, I, J, K>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E,
  f: (e: E) => F,
  g: (f: F) => G,
  h: (g: G) => H,
  i: (h: H) => I,
  j: (I: I) => J,
  k: (j: J) => K,
): (input: A) => K
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E,
  f: (e: E) => F,
  g: (f: F) => G,
  h: (g: G) => H,
  i: (h: H) => I,
  j: (I: I) => J,
  k: (j: J) => K,
  l: (k: K) => L,
): (input: A) => L
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E,
  f: (e: E) => F,
  g: (f: F) => G,
  h: (g: G) => H,
  i: (h: H) => I,
  j: (I: I) => J,
  k: (j: J) => K,
  l: (k: K) => L,
  m: (l: L) => M,
): (input: A) => M
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E,
  f: (e: E) => F,
  g: (f: F) => G,
  h: (g: G) => H,
  i: (h: H) => I,
  j: (I: I) => J,
  k: (j: J) => K,
  l: (k: K) => L,
  m: (l: L) => M,
  n: (m: M) => N,
): (input: A) => N
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E,
  f: (e: E) => F,
  g: (f: F) => G,
  h: (g: G) => H,
  i: (h: H) => I,
  j: (I: I) => J,
  k: (j: J) => K,
  l: (k: K) => L,
  m: (l: L) => M,
  n: (m: M) => N,
  o: (n: N) => O,
): (input: A) => O
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E,
  f: (e: E) => F,
  g: (f: F) => G,
  h: (g: G) => H,
  i: (h: H) => I,
  j: (I: I) => J,
  k: (j: J) => K,
  l: (k: K) => L,
  m: (l: L) => M,
  n: (m: M) => N,
  o: (n: N) => O,
  p: (o: O) => P,
): (input: A) => P
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E,
  f: (e: E) => F,
  g: (f: F) => G,
  h: (g: G) => H,
  i: (h: H) => I,
  j: (I: I) => J,
  k: (j: J) => K,
  l: (k: K) => L,
  m: (l: L) => M,
  n: (m: M) => N,
  o: (n: N) => O,
  p: (o: O) => P,
  q: (p: P) => Q,
): (input: A) => Q
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E,
  f: (e: E) => F,
  g: (f: F) => G,
  h: (g: G) => H,
  i: (h: H) => I,
  j: (I: I) => J,
  k: (j: J) => K,
  l: (k: K) => L,
  m: (l: L) => M,
  n: (m: M) => N,
  o: (n: N) => O,
  p: (o: O) => P,
  q: (p: P) => Q,
  r: (q: Q) => R,
): (input: A) => R
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E,
  f: (e: E) => F,
  g: (f: F) => G,
  h: (g: G) => H,
  i: (h: H) => I,
  j: (I: I) => J,
  k: (j: J) => K,
  l: (k: K) => L,
  m: (l: L) => M,
  n: (m: M) => N,
  o: (n: N) => O,
  p: (o: O) => P,
  q: (p: P) => Q,
  r: (q: Q) => R,
  s: (r: R) => S,
): (input: A) => S
export function pipe<
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E,
  f: (e: E) => F,
  g: (f: F) => G,
  h: (g: G) => H,
  i: (h: H) => I,
  j: (I: I) => J,
  k: (j: J) => K,
  l: (k: K) => L,
  m: (l: L) => M,
  n: (m: M) => N,
  o: (n: N) => O,
  p: (o: O) => P,
  q: (p: P) => Q,
  r: (q: Q) => R,
  s: (r: R) => S,
  t: (s: S) => T,
): (input: A) => T
export function pipe<
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E,
  f: (e: E) => F,
  g: (f: F) => G,
  h: (g: G) => H,
  i: (h: H) => I,
  j: (I: I) => J,
  k: (j: J) => K,
  l: (k: K) => L,
  m: (l: L) => M,
  n: (m: M) => N,
  o: (n: N) => O,
  p: (o: O) => P,
  q: (p: P) => Q,
  r: (q: Q) => R,
  s: (r: R) => S,
  t: (s: S) => T,
  u: (t: T) => U,
): (input: A) => U
export function pipe<
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E,
  f: (e: E) => F,
  g: (f: F) => G,
  h: (g: G) => H,
  i: (h: H) => I,
  j: (I: I) => J,
  k: (j: J) => K,
  l: (k: K) => L,
  m: (l: L) => M,
  n: (m: M) => N,
  o: (n: N) => O,
  p: (o: O) => P,
  q: (p: P) => Q,
  r: (q: Q) => R,
  s: (r: R) => S,
  t: (s: S) => T,
  u: (t: T) => U,
  v: (u: U) => V,
): (input: A) => V
export function pipe<
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E,
  f: (e: E) => F,
  g: (f: F) => G,
  h: (g: G) => H,
  i: (h: H) => I,
  j: (I: I) => J,
  k: (j: J) => K,
  l: (k: K) => L,
  m: (l: L) => M,
  n: (m: M) => N,
  o: (n: N) => O,
  p: (o: O) => P,
  q: (p: P) => Q,
  r: (q: Q) => R,
  s: (r: R) => S,
  t: (s: S) => T,
  u: (t: T) => U,
  v: (u: U) => V,
  w: (v: V) => W,
): (input: A) => W
export function pipe<
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E,
  f: (e: E) => F,
  g: (f: F) => G,
  h: (g: G) => H,
  i: (h: H) => I,
  j: (I: I) => J,
  k: (j: J) => K,
  l: (k: K) => L,
  m: (l: L) => M,
  n: (m: M) => N,
  o: (n: N) => O,
  p: (o: O) => P,
  q: (p: P) => Q,
  r: (q: Q) => R,
  s: (r: R) => S,
  t: (s: S) => T,
  u: (t: T) => U,
  v: (u: U) => V,
  w: (v: V) => W,
  x: (w: W) => X,
): (input: A) => X
export function pipe<
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
  Y,
>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E,
  f: (e: E) => F,
  g: (f: F) => G,
  h: (g: G) => H,
  i: (h: H) => I,
  j: (I: I) => J,
  k: (j: J) => K,
  l: (k: K) => L,
  m: (l: L) => M,
  n: (m: M) => N,
  o: (n: N) => O,
  p: (o: O) => P,
  q: (p: P) => Q,
  r: (q: Q) => R,
  s: (r: R) => S,
  t: (s: S) => T,
  u: (t: T) => U,
  v: (u: U) => V,
  w: (v: V) => W,
  x: (w: W) => X,
  y: (x: X) => Y,
): (input: A) => Y
export function pipe<
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
  Y,
  Z,
>(
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E,
  f: (e: E) => F,
  g: (f: F) => G,
  h: (g: G) => H,
  i: (h: H) => I,
  j: (I: I) => J,
  k: (j: J) => K,
  l: (k: K) => L,
  m: (l: L) => M,
  n: (m: M) => N,
  o: (n: N) => O,
  p: (o: O) => P,
  q: (p: P) => Q,
  r: (q: Q) => R,
  s: (r: R) => S,
  t: (s: S) => T,
  u: (t: T) => U,
  v: (u: U) => V,
  w: (v: V) => W,
  x: (w: W) => X,
  y: (x: X) => Y,
  z: (y: Y) => Z,
): (input: A) => Z
export function pipe(...funcs: ((input: unknown) => unknown)[]) {
  return function (input: unknown): unknown {
    return funcs.reduce((chain, func) => func(chain), input)
  }
}

