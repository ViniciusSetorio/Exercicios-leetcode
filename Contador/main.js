/* --> RESOLUÇÃO 1 <--

const somador = (n) => {
  valor = 0;
  return function () {
    console.log(n + valor);
    valor++;
  };
};
const NovoVal = somador();
NovoVal();
NovoVal();
*/

/* --> RESOLUÇÃO 2 <--

const soma = (n) => {
  return () => console.log(n++)
}
const mais = soma(-10)
mais()
mais()
*/