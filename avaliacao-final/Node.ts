class NoArv<T> {
  dado: T;
  esq: NoArv<T> | null;
  dir: NoArv<T> | null;
  constructor(dado: T) {
    this.dado = dado;
    this.esq = null;
    this.dir = null;
  }
}

export default NoArv