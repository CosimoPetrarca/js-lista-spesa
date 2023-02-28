'Use strict'

/* definiamo una lista di prodotti */
const lista = ['Vino', 'Birra', 'Superalcolici', 'Vodka', 'Campari', 'Amaro Lucano', 'Red Bull'];

/* Selezioniamo l'elemento UL dalla pagina HTML */
const listaSpesa = document.getElementById('lista-spesa');

/* inizializziamo l'indice a 0 */
let i = 0;

/* usiamo il ciclo while per stamparci ogni prodotto della lista */
while (i < lista.length) {
    console.log(lista[i]);
    const listItem = document.createElement('li');
    listItem.textContent = lista [i];
    listaSpesa.append(listItem);
    i++;
}
