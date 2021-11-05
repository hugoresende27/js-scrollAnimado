const caixas = document.querySelectorAll('.caixa')

window.addEventListener('scroll', checkCaixas)  //com o scroll vai executar a função checkCaixas

checkCaixas()
function checkCaixas()
{
    //console.log(window.innerHeight) //console log da altura da janela
    const ativar = window.innerHeight  / 5 * 4

    caixas.forEach(cx =>
        {
            const boxTop = cx.getBoundingClientRect().top  //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect //retorna o valor da posição do top da caixa
            if (boxTop < ativar)    //se a posição do topo da caixa for menor do que ativar(valor da janela / 5*4)
            {
                cx.classList.add('mostra')
            }
            else
            {
                cx.classList.remove('mostra')
            }
        })
}