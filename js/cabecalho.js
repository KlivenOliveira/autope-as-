const head = document.head;
const body = document.body;

document.addEventListener('DOMContentLoaded', function () {
    head.innerHTML += `<link rel="stylesheet" type="text/css" href="../css/reset.css"/>
    <link rel="stylesheet" type="text/css" href="../pacotes/bootstrap-5.3.3-dist/css/bootstrap.min.css"/>
    <script src="../pacotes/jquery-3.7.1.min.js" type="text/javascript"></script>
    <script src="../pacotes/jquery.mask.js" type="text/javascript"></script>
    <script src="../pacotes/bootstrap-5.3.3-dist/js/bootstrap.bundle.min.js" type="text/javascript"></script>
    <script src="../js/main.js" type="text/javascript" defer></script>
    <script src="../js/script.js" type="text/javascript" defer></script>`;
    
    console.log('Todos os arquivos do head foram carregados.');
});

