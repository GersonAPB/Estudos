const TEXTO_TOCHA = "uma de suas tochas se apaga";
const MORTE = "Você morreu";
const CONTINUAR = "Continuar..";

const cena_Prologo = {
	parteUm:"Há muito o tempo dos grandes épicos, feiticeiros e perigos iminentes de outrora se encontra relegado a um passado distante. Desde a grande Guerra das Ruinas, há 1500 anos, a magia desapareceu do mundo, bem como toda criatura que não fosse natural desse nosso plano de existência",
	parteDois:"Livres para se preocuparem apenas com assuntos mundanos, as sociedades humanas se desenvolveram em reinos grandiosos e justos, e os aventureiros do passado nada mais se tornaram do que lendas de um mundo perdido. A segurança dos reinos aliada a certas superstições de tempos antigos praticamente acabou com o ímpeto aventureiro e desbravador no coração dos humanos...",
	parteTres:"Mas não para você, a jovem bibliotecária da Magna Biblioteca de Avernon, a maior do continente. Transcrevendo antigos pergaminhos trazidos por estudiosos de todas as partes, você há muitos anos vem estudando e aumentando seu fascínio pelos singulares itens conhecidos como Artefatos, itens que de alguma forma ainda guardam a magia de outrora, objetos poderosíssimos, capazes de grandes feitos nas mãos daqueles que buscam o bem, e coisas terríveis caso caíssem nas mãos erradas.",
	parteQuatro:"E nem tudo é tranquilidade no mundo de Talakan. Nuvens cinzas tem cruzado os céus, maus presságios sussurrados entre os camponeses simples e supersticiosos, relatos e desgarrados vindo das terras do sul, contando histórias de uma legião terrível que ataca nas noites sombrias, em busca desses supostos Artefatos. Arautos misteriosos falam de um tempo de Sombras que se aproxima, e estranhos se veem nos mais diversos lugares, agentes do Inimigo preparando algum plano...terrível.",
	parteCinco:"Com seu conhecimento, você sabe que o Artefato de maior poder, segundo as lendas, é o famoso Olho de Akhenon, uma gema mística que supostamente estaria escondida no Vale das Tumbas dos Reis Antigos, ruinas localizadas ao norte evitadas por todos, até mesmo pelos mais corajosos guerreiros reais. As lendas falam ainda de grandes tesouros escondidos, maiores do que qualquer outro, bem como sobre guardiões imortais adormecidos sempre prontos a protegerem aqueles que se atrevessem a adentrar esse local sagrado ( OU PROFANO?).",
	parteSeis:"Após muitas tentativas frustradas junto à regência da cidade, no intuito de alerta-los sobre o perigo se tal artefato caísse em posso desse exército terrível, só resta então você mesma ir atrás desse local sinistro e ermo..."
}

const cena_Um = {
	parteUm: "Você se encontra no fim do longo caminho que lhe trouxe até o Vale das Tumbas dos Reis Antigos, um semi deserto arido de rochas e areia, localizado nas terras do norte. Não foi fácil chegar até aqui, pois a partir da cidade de Akarin, há 4 dias de viagem, nenhum guia pode ser encontrado para conduzir o caminho. Todos temem essas terras, e você precisou encontrar sozinha esse trajeto, que foi surpreendentemente calmo apesar da estranha sensação de estar sendo observada e seguida, mais de uma vez. Sombras vistas com o canto dos olhos lhe garantem que isso é bem mais que uma simples sensação.",
	parteDois: "Agora que os ventos frios das Geleiras Eternas começam a soprar em seu rosto e o escuro da noite se anuncia, é preciso agir rapidamente...olhando em volta, você nota algumas rúinas, como se fosse um antigo templo, pequeno, a sua direita, e uma trilha de tijolos ligeiramente encoberto por montes de areia seguindo a frente, ao que parece ser uma grande coluna dedicada a algum grande Rei do passado. O que você quer fazer?",
	AlternativaUm: "Seguir a trilha em direção à grande Coluna",
	//Vá para 17.
	AlternativaDois: "Seguir a direita, a fim de investigar o pequeno templo em ruínas"
	//Vá para o 8.
}

const cena_Dois = {
	parteUm:"Você começa a caminhar, mantendo a tocha baixa e tentando não fazer barulho.",
	parteDois:"Olhando para cima é possivel morcegos no teto, cuidado para não assustalos!!",
	AlternativaUm: "Passar pelos morcegos",
	//um teste de destreza cd 4
	ParteVitoria: "os morcegos não acordam e você se aproxima do altar.",
	AlternativaDois: CONTINUAR,
	//Se passar, Vá para o 24.
	parteDerrota: "os morcegos acordam",
	//CONTINUAR,
	//Caso você não passe no teste, os morcegos acordam! Vá para o 13.
}

const cena_Tres = {
	parteUm: "Você lembra de ter lido em algum pergaminho sobre essas pedras! Supostamente, seriam a chave que abriria alguma porta, portal ou algo do tipo. No entanto essa é a única coisa que você se lembra....e os pergaminhos sempre se referiam a uma única pedra, não duas! Mas qual delas pegar?",
	// Escolha entre a pedra vermelha e a amarela. Anote sua escolha diligentemente.. (neste momento se cria um botão sobre qual pedra o jogador pega)
	AlternativaUm: "pedra vermelha",
	AlternativaDois: "pedra amarela",
	parteDois: "No instante em que ergue uma das pedras, a outra simplesmente se desfaz em cinzas, como se séculos, milênios se passassem em uma fração de segundo. Então um forte vento sopra",
	// Faça um teste de Destino, dificuldade 5. Se falhar, uma tocha sua se apaga com um vento misterioso que passa pela sala rapidamente.(-1 tocha)
	parteTres: "Ainda fascinado com o evento que acaba de presenciar, um som indefinido chama sua atenção, como se fosse uma voz abafada e você é capaz de jurar que a voz disse “socorro”.",
	parteQuatro: "Parece vir de uma entrada que dá acesso a uma escadaria descendente, alguns metros atrás do altar. O que você quer fazer?",
	AlternativaTres: "Ir em direção a escadaria, atendendo a esse pedido de socorro",
	//Vá para 9.
	AlternativaQuatro: "Voltar, e sair da ruina, seguindo agora em direção à Coluna",
	//Vá para 17.
}

const cena_Quatro = {
	parteUm: "Você começa a circundar o monumento. Porém o solo parece estranho...",
	AlternativaUm: "Continuar o trajeto",
	//Faça um destino de Destino, dificuldade 4. Se falhar, você começa a afundar no próprio solo, envolvida por areia movediça.
	parteDerrota: "você começa a afundar no próprio solo, envolvida por areia movediça. rapidamente você tenta escapar",
	//faça um outro teste de Agilidade, dificuldade 5. Se falhar vc morre.
	AlternativaDois: "Tentar escapar",
	ParteVitoria: "você continua circundando o monumento até alcançar a parte de trás e onde chegara. Cravada na própria rocha da coluna, uma adaga de prata se encontra ali, cerca de 2 metros do solo. Você quer pegar a adaga?",
	AlternativaTres: "Pegar a adaga",
	//Se sim, vá para 34. 
	AlternativaDois: "Voltar a parte frontal da Coluna"
	//Se não, volte a parte frontal da Coluna, em 23.
}

const cena_Cinco = {
	parteUm: "A lança lhe atinge com uma força enorme, e você cai por terra ferida.",
	//1d6, para ver onde a lança lhe atingiu:
		//1-3: em um braço. Sofra 2 pontos de dano, e -1 em todos os testes de ataque e agilidade.
		//4-5: Na perna. Sofra 1 de dano, -1 em testes de agilidade, e se torna incapaz de realizar pulos e saltos até o fim da aventura.
		//6-No tronco. Sofra 4 pontos de dano, e -1 em testes de ataque e agilidade até o fim da aventura.
	//nesta parte chama o rolarDado() para verificar o resultado do dado.
	parteDois: "Você então se ve entre as ruinas e a coluna",
	AlternativaUm: "Continuar em direção a coluna",
	//Siga para 23, se quiser continuar em direção a coluna, 
	AlternativaDois: "ir em direção as ruinas"
	//ou até 8, se quiser ir em direção as ruinas.
}

const cena_Seis = {
	parteUm: "Você se concentra nos símbolos a sua frente...alguns até lhe são familiares, mas no geral não fazem sentidos um ao lado do outro. Você se esforça ainda mais, e se concentra tanto que não percebe uma mão se aproximar do seu ombro, puxando você com força e lhe atirando ao chão.",
	parteDois: "Você olha para cima e vê um homem pálido, vestido em roupas típicas de deserto, com os olhos totalmente brancos, falando com uma voz grossa e inumana, em um idioma feito de sons que você nunca imaginou ser possível de ser pronunciado.",
	AlternativaUm: "Lutar com ele!",
	//Siga para 19.
	AlternativaDois:"tentar passar por ele rapidamente e entrar pela estreita passagem que se abriu na Coluna?"
	//Vá para 12.
}

const cena_Sete = {
	parteUm: "Aproximando-se do livro, você nota que o desenho sulcado do sol tem o mesmo tamanho, formato e proporções da pedra que você coletou junto às ruinas do templo. Você então pega cuidadosamente a pedra, encaixando-a junto a pagina de pedra da estátua. Mas ainda resta uma duvida...será que você escolheu a pedra correta? Haviam duas delas....",
	AlternativaUm: "encaixar a pedra",
	//teste de inteligencia cd 3
	ParteVitoria: "A pedra encaixa perfeitamente",
	AlternativaDois: CONTINUAR,
	//Vá para 20.
	parteDerrota: "A pedra não encaixa",
	AlternativaTres: CONTINUAR,
	//Vá para o 27.
}

const cena_Oito = {
	parteUm: "Acendendo uma de suas tochas, você se aproxima das ruinas com toda sua atenção desperta, tentando prestar atenção em cada mínimo detalhe. São ruinas ancestrais, e você se sente jogada 1500 anos no passado, para o tempo das historias contadas nos pergaminhos que tanto ama. Mas o tempo foi ingrato com a estrutura. Uma entrada semi destruída se vê dado passagem, e tudo parece prestes a ruir. Você quer:",
	AlternativaUm: "Retornar, e ir em direção a Coluna seguindo a trilha",
	//Vá para 17.
	AlternativaDois: "Adentrar pela porta em direção ao interior do templo"
	//Vá para 22.
}

const cena_Nove = {
	parteUm: "Você segue rumo a voz e escuta ainda mais claramente o pedido de socorro. Começa a descer pela escadaria e a cada degrau a iluminação do local parece se tornar ainda mais intensa, até o ponto de sua tocha pouco contribuir (mas você prefere deixa-la acesa, apesar de tudo).",
	parteDois: "Por fim, a escadaria termina em o que parece ser uma grande e requintada tumba subterrânea. Ao centro, ao lado de um sarcófago semi aberto, uma mulher anormalmente alta, de cotas, finamente vestida. Sem aviso ou som, ela se vira em direção a você, olhos negros como o abismo e garras afiadas como os morcegos acima! O que você vai fazer?",
	AlternativaUm: "Tentar fugir subindo a escadaria e saindo das ruinas",
	//va para 26.
	AlternativaDois: "enfrentar essa estranha criatura"
	//vá para 29.
}
 
const cena_Dez = {
	parteUm: "Você começa a caminhar pela rampa, rumo ao livro na mão da estranha criança esculpida.",
	// caso ja tenha passado por aqui pule a parte dois e siga direto a 21.
	parteDois: "Está tão fascinada pela escultura que não percebe e tropeça, quase caindo da rampa. A sua frente, você ve então o que quase provocou sua queda: um esqueleto jaz a sua frente, com as roupas carcomidas, segurando um pergaminho na sua mão esquerda, ao passo que a mão direita do esqueleto repousa apoiada para fora da rampa, apontando para o sarcófago. A cabeça do que fora um homem também está virada para a direita, como se morresse contemplando o sarcófago inclinado abaixo. O que você quer fazer?",
	AlternativaUm: "ignorar tudo e continuar pela rampa",
	// siga direto a 21
	AlternativaDois: "pegar o mapa das mãos do esqueleto",
	// vá para 30 
	AlternativaTres: "verificar o sarcófago"
	// vá para 16
}

const cena_Onze = {
	parteUm: "Assim que você remove a segunda pedra de seu local o som de rochas deslizando se faz presente, e um enorme bloco vindo de algum lugar – você nem consegue saber de onde– lhe esmaga, pondo fim a sua aventura. Agora você é nada mais nada menos que uma pobre vitima esquecida em um lugar perdido...",
	AlternativaUm: CONTINUAR,
	// cena de morte
}

const cena_Doze = {
	parteUm: "Você decide se mover rapidamente, uma vez que o homem não está obstruindo diretamente a entrada que você acabara de descobrir.",
	AlternativaUm: "Fugir",
	//teste destreza cd 6
	ParteVitoria: "Você consegue se desviar do agarrão do homem, entrando na passagem...o homem parece se assustar ao ver você entrar e não faz menção de segui-la.",
	AlternativaDois: CONTINUAR,
	//va para 31.
	//Se o usuario tiver adaga rodar parteDerrotaUm: se não parteDerrotaDois:
	parteDerrotaUm: "O homem ve sua adaga, e em um golpe consegue pega la de você imediatamente saindo correndo para a escuridão da noite, desaparecendo.",
	AlternativaTres: CONTINUAR,
	//va para 31.
	parteDerrotaDois: "Ele rapidamente lhe agarra, e sua única saída será lutar com ele",
	AlternativaTres: "Lutar"
	//va para 19.
}

const cena_Treze = {
	parteUm: "Os morcegos saem em voo caótico, emitindo sons sinistros que não se parecem com nenhum outro morcego que tenha visto. Eles voam ao redor de todo cômodo, cada vez mais baixos.",
	parteDois: "Você sente garras roçarem seu rosto, e todo seu corpo ferindo sua pele. Sua tocha se apaga.",
	AlternativaUm: CONTINUAR,
	// sofre 1d6 de dano
	parteTres: "Após um tempo, os morcegos começam a encontrar a saída do local.",
	AlternativaDois: CONTINUAR
	// siga para 24
}

const cena_Quatorze = {
	parteUm: "Você segue a trilha de tijolos, deixando para tras o monumento anterior. De repente, um vento forte sopra vindo do nada.",
	//um teste de destino cd 4 se falhar
	parteDerrotaUm: "Sua tocha se apaga.",
	parteDois: "Você se assusta ao mesmo tempo em que sente um arrepio percorrer sua espinha, e uma grande sombra negra se levantar por cima da pedra. Um enorme Escorpião Gigante se apresenta, pronto para lhe atacar!",
	AlternativaUm: "Lutar",
	// ataque cd 5
	parteDerrotaDois: "Um forte golpe causa um dano massivo, não da para escapar",
	// em caso de falha -3 de vida, se sobreviver tem que lutar de volta
	ParteVitoria: "você comecará a ouvir um som como se fossem muitas coisas se arrastando, como se estivessem vindo de baixo da grande pedra.",
	// terminar de fazer as alternativas.
}

const cena_Quinze = {

}
const cena_Dezesseis = {

}
const cena_Dezessete = {

}
const cena_Dezoito = {

}
const cena_Dezenove = {

}
const cena_Vinte = {

}
const cena_Vum = {

}
const cena_Vdois = {
	parteUm: "Você passa pela entrada principal, rumo a escuridão. A chama de sua tocha lança uma luz que a muito não se via aqui dentro, e você percebe em pânico que todo o teto do local está tomado por morcegos, adormecidos (mas incomodados com a luz) gigantescos, em dezenas. Ao centro do cômodo, um altar de pedra onde dois estranhos brilhos metálicos se percebe sobre ele. O que quer fazer?",
	AlternativaUm: "Voltar, e ir em direção a Coluna.",
	//va para 17.
	AlternativaDois:"Continuar e se aproximar do Altar cautelosamente, evitando acordar os morcegos.",
	//va para 2.
}
const cena_Vtres = {

}
const cena_Vquatro = {

}
const cena_Vcinco = {

}
const cena_Vseis = {

}
const cena_Vsete = {

}
const cena_Voito = {

}
const cena_Vnove = {

}
const cena_Trinta = {

}
const cena_Tum = {

}
const cena_Tdois = {

}
const cena_Ttres = {

}
const cena_Tquatro = {

}
const cena_Tcinco = {

}