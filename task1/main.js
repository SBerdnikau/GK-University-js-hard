$button = document.querySelector('.btn-test');
console.log($button);
$textIn = document.querySelector('.text-in').textContent;
$textOut = document.querySelector('.text-out');

$button.addEventListener('click', (event) => {
    if(event.target.classList.contains('btn-test')){
        const outText = $textIn.replace(/"|'/gi, '\"');
        $textOut.textContent = outText; 
    }
} );

