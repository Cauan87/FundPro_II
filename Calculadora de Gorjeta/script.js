<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,700;1,400&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
    <title>Calculadora de Gorjeta</title>
  </head>
  <body>
    <main id="container">
      <h1>Gorjeta Rápida</h1>

      <section>
        <div class="bill">
          <label for="yourBill">Conta</label>
          <input type="number" placeholder="Sua conta" id="yourBill" />
        </div>
        <div>
          <div class="space-between">
            <label for="tipInput">Ajustar Gorjeta </label
            ><span id="tipPercent"></span>
          </div>
          <input type="range" value="0" id="tipInput" class="range" />
        </div>
        <div class="space-between">
          <span>Gorjeta</span>
          <span id="tipValue"></span>
        </div>
        <hr />
        <div class="space-between total">
          <span>Total</span>
          <span id="totalWithTip"></span>
        </div>
      </section>

      <section>
        <div>
          <div class="space-between">
            <label for="splitInput">Dividir</label>
            <span id="splitValue"></span>
          </div>
          <input
            type="range"
            min="1"
            max="10"
            value="1"
            id="splitInput"
            class="range"
          />
        </div>
        <div class="space-between">
          <span>Conta para cada</span>
          <span id="billEach"></span>
        </div>
        <div class="space-between">
          <span>Gorjeta para cada</span>
          <span id="tipEach"></span>
        </div>
      </section>
    </main>

    <script src="script.js"></script>
  </body>
</html>