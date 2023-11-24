function adicionar(num){
	caixa.value = caixa.value + num;
	if(num == '.')
		ponto.disabled = true;
	if(num==0 && caixa.value==0)
		caixa.value=0;
    }

function limpar(){
	caixa.value = "";
	ponto.disabled = false;
	mais.disabled = false;
	menos.disabled= false;
	vezes.disabled=false;
	dividir.disabled=false;
}
function calcular(op){
	op1 = op;
	num1 = caixa.value;
	caixa.value = "";
	ponto.disabled = false;
	mais.disabled = true;
	menos.disabled= true;
	vezes.disabled=true;
	dividir.disabled=true;
}
function total(){
	num2 = caixa.value;
	if(op1=='+')
		caixa.value= parseFloat(num1) + parseFloat(num2);
	if(op1=='-')
		caixa.value= parseFloat(num1) - parseFloat(num2);
	if(op1=='*')
		caixa.value= parseFloat(num1) * parseFloat(num2);
	if(op1=='/')
		caixa.value= parseFloat(num1) / parseFloat(num2);
}