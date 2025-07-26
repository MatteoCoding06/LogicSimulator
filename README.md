# 🔌 LogicSimulator – Simulatore Logico Digitale

**LogicSimulator** è un simulatore interattivo che ti permette di esplorare e comprendere il comportamento delle principali porte logiche digitali: **AND**, **OR** e **NOT**.

È realizzato con **HTML, CSS e JavaScript** puro, e reagisce in tempo reale agli input dell’utente, mostrandoti il risultato tramite una luce accesa o spenta.

---

## 🔗 Demo

🧪 Prova subito la versione online:  
👉 [https://matteocoding06.github.io/LogicSimulator/](https://matteocoding06.github.io/LogicSimulator/)

---

## 🧠 Cosa sono AND, OR e NOT?

| Operazione | Descrizione semplice | Tabella della verità |
|------------|----------------------|-----------------------|
| **AND**    | La luce si accende solo se **entrambi** i pulsanti sono ON. | A | B | Risultato |
|            |                      | 0 | 0 | 0 |
|            |                      | 0 | 1 | 0 |
|            |                      | 1 | 0 | 0 |
|            |                      | 1 | 1 | 1 |
| **OR**     | La luce si accende se **almeno uno** dei pulsanti è ON. | A | B | Risultato |
|            |                      | 0 | 0 | 0 |
|            |                      | 0 | 1 | 1 |
|            |                      | 1 | 0 | 1 |
|            |                      | 1 | 1 | 1 |
| **NOT**    | Inverte lo stato del pulsante A: se è ON, la luce è OFF e viceversa. | A | Risultato |
|            |                      | 0 | 1 |
|            |                      | 1 | 0 |

---

## 🎮 Funzionalità

- ✅ Pulsanti ON/OFF per impostare gli ingressi A e B
- 🔁 Seleziona l’operazione logica (`AND`, `OR`, `NOT`)
- 💡 Output visivo tramite luce accesa/spenta
- 🧩 Input B nascosto dinamicamente quando scegli `NOT`

