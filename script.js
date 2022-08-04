var quotes = ['Acho tão fofo quando você dá aquele sorrisinho forçado de olhin fechado.',
'Fico bobo com a sua vontade de ter família (especialmente comigo)',
'Sua relação com sua mãe é MUITO linda e profunda.',
'É admirável o carinho que você tem pela sua mãe e sua avó.',
'Gosto muito de ouvir você falando da Skala (bem ou mal).',
'Amo o jeito que você fala TIAMU.',
'Você é uma das mulheres mais estilosas do mundo.',
'Acho foda você lembrar detalhes bobos que contei.',
'Você é GOS-TO-SA! Aqui não precisa muita explicação.',
'Seu sorriso é maravilhoso!',
'Acho fofo (mas perigoso) seu jeitinho de raivoso de ser.',
'Sua bunda é uma das 7 maravilhas do mundo moderno.',
'Sua risada é contagiante e gostosa de ouvir.',
'Seu senso de humor é duvidoso mas eu amo justamente por isso.',
'Além de namorada, você me é uma ótima amiga! Parceira mesmo.',
'Amo o conforto que sentimos perto um do outro.',
'É impressionante como nossos corpos parecem encaixar um no outro.',
'Quero casar com cê! Não é uma coisa, só quis falar mesmo.',
'Nosso amor, apesar de intenso, é leve e calmo.',
'Eu amo seu cheiro (quando você toma banho).',
'Sem romantizar alergia. Mas gosto de você até coçando a garganta.',
'Você me passa uma segurança de que vamos sim ser para sempre.',
'Você é carinhosa e atenciosa com todos próximos à você.',
'Eu me divirto muito estando com você. Entre risadas e carinhos.'
]

function newQuote(){
  var randomNumber = Math.floor(Math.random()*(quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}