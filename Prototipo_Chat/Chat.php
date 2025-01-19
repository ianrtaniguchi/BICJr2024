<!DOCTYPE html>
<html lang="pt-br">

<head>
    <title>Chatbot Tobby</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link type="text/css" rel="stylesheet" href="CSS/CSS.css" />
    <script type="importmap">
   {
     "imports": {
       "@google/generative-ai": "https://esm.run/@google/generative-ai"
     }
   }
</script>
</head>

<body>
    <div class="container">
        <h1>Chatbot Tobby</h1>
        <div class="chat-container" id="chat-container"></div>

        <div class="chat-input">
            <div id="botoes">
                
            </div>
        </div>
    </div>
    
    <script type="module" src="JS/MenuAlternativas.js"></script>
    <script type="module" src="JS/GeradorRespostas.js"></script>


</body>

</html>