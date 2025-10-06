<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Careful — Don’t Get Burnt!</title>
  <link rel="stylesheet" href="../assets/styles.css">
</head>
<body>
  <main class="wrap">
    <h1>Careful — Don’t Get Burnt!</h1>
    <p>Choose wisely before you start the forge!</p>

    <button onclick="choosePPE()">Put on PPE</button>
    <button onclick="skipPPE()">Skip PPE</button>

    <div id="outcome" style="margin-top:1rem;"></div>
  </main>

  <script>
    function choosePPE() {
      document.getElementById('outcome').innerHTML =
        "✅ Safe choice! You're protected and ready to forge.";
    }

    function skipPPE() {
      document.getElementById('outcome').innerHTML =
        "🔥 Ouch! Sparks fly — always wear your PPE!";
    }
  </script>
</body>
</html>
