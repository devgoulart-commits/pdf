// ── SISTEMA DE ÍCONES (Heroicons v2, 24px) — usado em toda a interface ──
const ICONS={
  dashboard:'<svg class="hicon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.5h6V21H3v-7.5zM15 3h6v6.75h-6V3zM3 3h6v6.75H3V3zM15 12.75h6V21h-6v-8.25z"/></svg>',
  folder:'<svg class="hicon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V6a2.25 2.25 0 0 1 2.25-2.25h4.5l2.25 2.25h8.25A2.25 2.25 0 0 1 21.75 8.25v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25z"/></svg>',
  star:'<svg class="hicon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m11.48 3.5 2.02 4.11a.6.6 0 0 0 .45.33l4.53.66c.49.07.69.68.33 1.02l-3.28 3.2a.6.6 0 0 0-.17.53l.77 4.51c.09.49-.43.86-.87.63l-4.05-2.13a.6.6 0 0 0-.56 0l-4.05 2.13c-.44.23-.95-.14-.87-.63l.77-4.51a.6.6 0 0 0-.17-.53l-3.28-3.2c-.36-.34-.16-.95.33-1.02l4.53-.66a.6.6 0 0 0 .45-.33l2.02-4.11c.22-.45.85-.45 1.07 0z"/></svg>',
  starSolid:'<svg class="hicon-solid" style="fill:#fbbf24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.48 3.5a.562.562 0 0 1 1.04 0l2.12 4.11a.563.563 0 0 0 .43.31l4.54.66c.5.07.7.69.34 1.04l-3.29 3.2a.563.563 0 0 0-.16.5l.77 4.52c.09.5-.44.88-.89.65L12.5 16.35a.563.563 0 0 0-.52 0l-4.06 2.14c-.45.23-.98-.15-.89-.65l.77-4.52a.563.563 0 0 0-.16-.5l-3.29-3.2c-.36-.35-.16-.97.34-1.04l4.54-.66a.563.563 0 0 0 .43-.31z"/></svg>',
  mail:'<svg class="hicon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>',
  chat:'<svg class="hicon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.5-1.185C3.64 16.464 3 14.598 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"/></svg>',
  clock:'<svg class="hicon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>',
  trash:'<svg class="hicon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/></svg>',
  close:'<svg class="hicon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>',
  sparkles:'<svg class="hicon-solid" style="fill:#c084fc" viewBox="0 0 24 24"><path d="M9 4.5a.75.75 0 0 1 .72.54l.82 2.85a3.75 3.75 0 0 0 2.57 2.57l2.85.82a.75.75 0 0 1 0 1.44l-2.85.82a3.75 3.75 0 0 0-2.57 2.57l-.82 2.85a.75.75 0 0 1-1.44 0l-.82-2.85a3.75 3.75 0 0 0-2.57-2.57l-2.85-.82a.75.75 0 0 1 0-1.44l2.85-.82a3.75 3.75 0 0 0 2.57-2.57l.82-2.85A.75.75 0 0 1 9 4.5z"/></svg>',
  sun:'<svg class="hicon" style="stroke:currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1.5m0 15V21m8.25-9H21M3 12h1.5m13.06-6.56-1.06 1.06M6.5 17.5l-1.06 1.06m0-13.12L6.5 6.5m11.94 11.94-1.06-1.06M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/></svg>',
  moon:'<svg class="hicon" style="stroke:currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.598.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998z"/></svg>',
};
function ic(name,size){return (ICONS[name]||'').replace('<svg ',`<svg style="width:${size||16}px;height:${size||16}px;flex-shrink:0" `);}

// ── PDF.js worker (extração real de texto de PDFs) ──
if(typeof pdfjsLib!=='undefined'){
  pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

// ── NAVEGAÇÃO DA LANDING PAGE ──
function scrollToTools(){
  const el=document.getElementById('tools-anchor');
  if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
}
function goToCategory(cat){
  const el=document.querySelector('#tools-anchor .cat-item[data-cat="'+cat+'"]');
  if(el) filterCat(cat, el);
  scrollToTools();
}
function goToView(v){
  const el=document.querySelector('.navbar-links .nav-item[data-view="'+v+'"]');
  showView(v, el || document.querySelector('.navbar-links .nav-item'));
  window.scrollTo({top:0,behavior:'smooth'});
}

// ── TEMA (segue o sistema operacional por padrão; escolha manual é lembrada) ──
function systemPrefersDark(){
  return typeof window.matchMedia==='function'?window.matchMedia('(prefers-color-scheme: dark)').matches:true;
}
let savedTheme=null;
try{savedTheme=localStorage.getItem('ntc_theme');}catch(e){} // 'dark' | 'light' | null (padrão: claro)
let isDark=savedTheme?savedTheme==='dark':false;
function applyTheme(){
  const b=document.getElementById('body');
  const btn=document.getElementById('theme-btn');
  const s=SITE_I18N[siteLang]||SITE_I18N.pt;
  if(isDark){b.classList.remove('light');if(btn){btn.innerHTML=ic('sun',15);btn.title=s.themeLight;}}
  else{b.classList.add('light');if(btn){btn.innerHTML=ic('moon',15);btn.title=s.themeDark;}}
}
function toggleTheme(){
  isDark=!isDark;
  try{localStorage.setItem('ntc_theme',isDark?'dark':'light');}catch(e){}
  applyTheme();
  if(typeof pushCloudData==='function')pushCloudData();
}
// Obs.: o tema não acompanha mais automaticamente o SO — padrão é sempre claro,
// a menos que o usuário escolha manualmente o modo escuro (lembrado via localStorage).

// ── FERRAMENTAS ───────────────────────────────────────
const TOOLS=[
  {id:1,name:"Assinatura Digital Gov.br",desc:"Assine PDFs desenhando rubrica, digitando nome ou fazendo upload de carimbo — com assinatura criptográfica real (ECDSA) e QR Code de verificação.",cat:"pdf"},
  {id:2,name:"Conversor OFX para PDF",desc:"Interpreta arquivos OFX bancários e gera extrato em PDF estruturado.",cat:"convert"},
  {id:3,name:"DRE — Resultado do Exercício",desc:"Calcula receitas, deduções e lucro, gerando relatório contábil em PDF.",cat:"office"},
  {id:4,name:"Emissor de Recibos",desc:"Emite recibos de pagamento formatados e prontos para download.",cat:"office"},
  {id:5,name:"Compressor de PDF",desc:"Reduz tamanho de PDFs removendo metadados e otimizando estrutura interna.",cat:"pdf"},
  {id:6,name:"Mesclar PDFs",desc:"Une dois ou mais arquivos PDF em um único documento ordenado.",cat:"pdf"},
  {id:7,name:"Numeração de Páginas PDF",desc:"Adiciona numeração automática no rodapé de todas as páginas do PDF.",cat:"pdf"},
  {id:8,name:"Marca d'Água em PDF",desc:"Insere texto personalizado como marca d'água diagonal em documentos PDF.",cat:"pdf"},
  {id:9,name:"Girar Páginas PDF",desc:"Rotaciona páginas em 90°, 180° ou 270° antes de salvar o documento.",cat:"pdf"},
  {id:10,name:"Extrair Texto de PDF",desc:"Extrai todo o conteúdo textual de um PDF para usar em editores.",cat:"pdf"},
  {id:11,name:"Proteger PDF com Senha",desc:"Aplica criptografia AES e senha de abertura em documentos confidenciais.",cat:"pdf"},
  {id:12,name:"Adicionar Rodapé a PDF",desc:"Insere texto de rodapé customizado em todas as páginas do documento.",cat:"pdf"},
  {id:13,name:"Carimbo de Data/Hora",desc:"Adiciona timestamp automático com data e hora em PDFs corporativos.",cat:"pdf"},
  {id:14,name:"Dividir PDF por Páginas",desc:"Separa intervalos de páginas de um PDF em arquivos individuais.",cat:"pdf"},
  {id:15,name:"Relatório de Propriedades PDF",desc:"Lista metadados, número de páginas, tamanho e versão do PDF.",cat:"pdf"},
  {id:16,name:"Redimensionar Imagem",desc:"Altera largura e altura de imagens PNG/JPG mantendo proporção.",cat:"image"},
  {id:17,name:"Converter Formato de Imagem",desc:"Transforma imagens entre PNG, JPG e WebP diretamente no navegador.",cat:"image"},
  {id:18,name:"Comprimir Imagem",desc:"Reduz peso de imagens JPEG ajustando qualidade sem perda visual.",cat:"image"},
  {id:19,name:"Escala de Cinza",desc:"Converte imagens coloridas para preto e branco profissional.",cat:"image"},
  {id:20,name:"Inverter Cores",desc:"Aplica efeito negativo invertendo todos os canais de cor da imagem.",cat:"image"},
  {id:21,name:"Rotacionar Imagem",desc:"Rotaciona imagens em qualquer múltiplo de 90° com precisão.",cat:"image"},
  {id:22,name:"Espelhar Imagem",desc:"Espelha imagens horizontalmente ou verticalmente.",cat:"image"},
  {id:23,name:"Adicionar Borda",desc:"Adiciona borda colorida e espessura personalizável a qualquer imagem.",cat:"image"},
  {id:24,name:"Gerador de Miniatura",desc:"Cria versões reduzidas de imagens para catálogos e previews.",cat:"image"},
  {id:25,name:"Marca d'Água em Imagem",desc:"Aplica texto semitransparente sobre fotos e ilustrações.",cat:"image"},
  {id:26,name:"Adicionar Texto à Imagem",desc:"Insere legendas e textos personalizados sobre imagens.",cat:"image"},
  {id:27,name:"Conversor para Base64",desc:"Codifica imagens para string Base64 para uso em HTML/CSS.",cat:"image"},
  {id:28,name:"Calculadora de Juros Compostos",desc:"Calcula rendimento com taxa, prazo e aporte mensal.",cat:"convert"},
  {id:29,name:"Gerador de QR Code",desc:"Gera QR Codes para URLs, textos e informações de contato.",cat:"convert"},
  {id:30,name:"Validador de CPF",desc:"Verifica validade matemática de CPFs e formata automaticamente.",cat:"convert"},
  {id:31,name:"Validador de CNPJ",desc:"Valida e formata CNPJs exibindo dígitos verificadores.",cat:"convert"},
  {id:32,name:"Calculadora de ICMS",desc:"Calcula ICMS, base de cálculo e valor líquido por alíquota.",cat:"convert"},
  {id:33,name:"Conversor de Moedas",desc:"Converte valores entre BRL, USD, EUR e outras moedas com taxa manual.",cat:"convert"},
  {id:34,name:"Calculadora de Desconto",desc:"Calcula preço final com desconto percentual ou valor fixo.",cat:"convert"},
  {id:35,name:"Gerador de Código de Barras",desc:"Gera representação visual de código de barras para produtos.",cat:"convert"},
  {id:36,name:"Calculadora de Prazo",desc:"Calcula dias úteis entre duas datas excluindo finais de semana.",cat:"convert"},
  {id:37,name:"Conversor de Unidades",desc:"Converte kg/lb, km/mi, litros/galões e outras unidades.",cat:"convert"},
  {id:38,name:"Extrator CNAB 240",desc:"Interpreta arquivos CNAB 240 e exibe registros de pagamentos.",cat:"convert"},
  {id:39,name:"Parser de NFe XML",desc:"Extrai dados fiscais de XMLs de Nota Fiscal Eletrônica.",cat:"convert"},
  {id:40,name:"Calculadora de PIS/COFINS",desc:"Apura PIS e COFINS sobre receita bruta por regime tributário.",cat:"convert"},
  {id:41,name:"Calculadora de INSS",desc:"Calcula contribuição previdenciária por faixa salarial 2026.",cat:"convert"},
  {id:42,name:"Calculadora de IRRF",desc:"Calcula imposto de renda retido na fonte sobre salários.",cat:"convert"},
  {id:43,name:"Gerador de Senha Segura",desc:"Gera senhas aleatórias com letras, números e símbolos.",cat:"convert"},
  {id:47,name:"Simulador de Financiamento",desc:"Calcula parcelas SAC e Tabela Price com juros e amortização.",cat:"office"},
  {id:48,name:"Folha de Pagamento",desc:"Calcula salário bruto, INSS, IRRF e salário líquido.",cat:"office"},
  {id:49,name:"Cálculo de FGTS",desc:"Apura saldo de FGTS, multa rescisória e valores de saque.",cat:"office"},
  {id:64,name:"Simples Nacional",desc:"Estima imposto do Simples Nacional por faixa e anexo.",cat:"office"},
  {id:67,name:"Calculadora de ROI",desc:"Calcula retorno sobre investimento com período de payback.",cat:"office"},
  {id:68,name:"Gerador de Declaração IR",desc:"Auxilia no preenchimento de informes de rendimentos.",cat:"office"},
  {id:46,name:"Cálculo de Depreciação",desc:"Calcula depreciação linear de bens do ativo imobilizado.",cat:"office"},
  // Office IA — conversores reais (OOXML / PDF)
  {id:69,name:"PDF → Word",desc:"Extrai texto do PDF e gera um documento .docx real (OOXML), editável no Word.",cat:"office2",ia:true},
  {id:70,name:"PDF → Excel",desc:"Detecta linhas/tabelas do PDF e exporta uma planilha .xlsx real, estruturada.",cat:"office2",ia:true},
  {id:71,name:"PDF → PowerPoint",desc:"Converte o conteúdo do PDF em slides .pptx reais, abertos direto no PowerPoint.",cat:"office2",ia:true},
  {id:72,name:"Word → PDF",desc:"Converte documentos .docx em PDF real formatado, gerado com pdf-lib.",cat:"office2",ia:true},
  {id:73,name:"Excel → PDF",desc:"Gera um PDF real com as linhas e colunas da planilha .xlsx.",cat:"office2",ia:true},
  {id:74,name:"PowerPoint → PDF",desc:"Exporta apresentações .pptx para um PDF real, um slide por página.",cat:"office2",ia:true},
  {id:75,name:"Editor de Texto",desc:"Edite, formate e transforme textos: maiúsculas, remover espaços, contar palavras e mais.",cat:"convert"},
  {id:76,name:"Gerador de Planilhas",desc:"Monte uma tabela e gere uma planilha .xlsx real, pronta para baixar.",cat:"office2",ia:true},
  // Novas ferramentas de uso diário
  {id:77,name:"Imagens para PDF",desc:"Une várias imagens (JPG/PNG) em um único arquivo PDF, uma por página.",cat:"pdf"},
  {id:78,name:"PDF para Imagens",desc:"Converte cada página de um PDF em uma imagem JPG, entregues em um .zip.",cat:"pdf"},
  {id:79,name:"Calculadora de IMC",desc:"Calcula o Índice de Massa Corporal e mostra a faixa de classificação.",cat:"convert"},
  {id:80,name:"Calculadora de Idade",desc:"Calcula idade exata em anos, meses e dias a partir da data de nascimento.",cat:"convert"},
  {id:81,name:"Data por Extenso",desc:"Converte uma data numérica para o formato por extenso em português.",cat:"convert"},
  {id:82,name:"Conversor de Cores HEX/RGB",desc:"Converte cores entre HEX e RGB com pré-visualização instantânea.",cat:"convert"},
  {id:83,name:"Gerador de Lista de Tarefas",desc:"Monte uma checklist e gere um PDF pronto para imprimir.",cat:"office"},
  {id:84,name:"Calculadora de 13º Salário",desc:"Calcula o valor proporcional do décimo terceiro salário.",cat:"office"},
  {id:85,name:"Calculadora de Férias",desc:"Calcula valor de férias com 1/3 constitucional sobre o salário.",cat:"office"},
  {id:86,name:"Conversor de Fuso Horário",desc:"Converte um horário entre os principais fusos horários do mundo.",cat:"convert"},
  {id:87,name:"PDF para OFX",desc:"Extrai transações de um extrato em PDF e gera um arquivo .ofx para importar no seu sistema financeiro.",cat:"convert"},
  {id:88,name:"CSV para Excel",desc:"Converte um arquivo CSV em uma planilha .xlsx real, detectando o separador automaticamente.",cat:"convert"},
  {id:89,name:"Excel para CSV",desc:"Extrai a primeira aba de uma planilha .xlsx e gera um arquivo CSV.",cat:"convert"},
  {id:90,name:"JSON para Excel",desc:"Converte uma lista de objetos JSON em uma planilha .xlsx com colunas automáticas.",cat:"convert"},
  {id:91,name:"Excel para JSON",desc:"Converte a primeira aba de uma planilha .xlsx em uma lista de objetos JSON.",cat:"convert"},
  {id:92,name:"Markdown para PDF",desc:"Converte texto em Markdown (títulos, listas, negrito) em um PDF formatado.",cat:"convert"},
  {id:93,name:"HTML para PDF",desc:"Renderiza um trecho de HTML/CSS e gera um PDF com a aparência visual da página.",cat:"convert"},
  {id:94,name:"SVG para PNG",desc:"Converte uma imagem vetorial SVG em PNG, com escala ajustável.",cat:"image"},
  {id:95,name:"Leitor de QR Code",desc:"Lê o conteúdo de um QR Code a partir de uma imagem enviada.",cat:"image"},
  {id:96,name:"Comparar PDFs",desc:"Compara o texto de dois PDFs e destaca as linhas que mudaram, foram adicionadas ou removidas.",cat:"pdf"},
  {id:97,name:"Organizador de Páginas PDF",desc:"Arraste para reordenar ou excluir páginas de um PDF antes de salvar.",cat:"pdf"},
  {id:98,name:"Texto para Voz",desc:"Lê qualquer texto em voz alta usando as vozes do seu navegador/sistema.",cat:"office"},
  {id:99,name:"Voz para Texto",desc:"Transcreve o que você fala ao microfone em texto, em tempo real.",cat:"office"},
  {id:100,name:"OCR — Imagem para Texto",desc:"Reconhece texto dentro de fotos e imagens escaneadas usando OCR real no navegador.",cat:"image"},
  {id:101,name:"OCR — PDF Escaneado para Texto",desc:"Extrai o texto de PDFs escaneados (sem camada de texto) usando reconhecimento óptico de caracteres.",cat:"pdf"},
  {id:102,name:"Recortar Imagem",desc:"Recorta a área desejada de uma imagem arrastando a seleção diretamente na tela.",cat:"image"},
  {id:103,name:"Remover Metadados EXIF",desc:"Apaga dados ocultos da imagem (localização GPS, câmera, data) antes de compartilhar.",cat:"image"},
  {id:104,name:"Colagem de Fotos",desc:"Monta uma grade com várias fotos em uma única imagem, pronta para baixar.",cat:"image"},
  {id:105,name:"Gerador de Favicon",desc:"Gera um pacote de ícones (16x16 até 512x512) a partir de uma imagem, prontos para o seu site.",cat:"image"},
  {id:106,name:"Extrator de Paleta de Cores",desc:"Identifica as cores dominantes de uma imagem e gera os códigos HEX correspondentes.",cat:"image"},
  {id:107,name:"Remover Páginas de PDF",desc:"Apaga páginas específicas de um PDF, mantendo as demais no documento final.",cat:"pdf"},
  {id:108,name:"Editar Metadados de PDF",desc:"Altera título, autor, assunto e palavras-chave nas propriedades do arquivo PDF.",cat:"pdf"},
  {id:109,name:"Remover Restrições de PDF",desc:"Remove bloqueios de impressão e cópia de um PDF (não funciona em PDFs com senha de abertura).",cat:"pdf"},
  {id:110,name:"Conversor de Base Numérica",desc:"Converte números entre binário, decimal, hexadecimal e octal.",cat:"convert"},
  {id:111,name:"Formatador e Validador de JSON",desc:"Formata, valida e destaca erros de sintaxe em textos JSON.",cat:"convert"},
  {id:112,name:"Gerador de Hash (MD5/SHA-256)",desc:"Calcula o hash MD5, SHA-1 e SHA-256 de um texto ou arquivo.",cat:"convert"},
  {id:113,name:"Conversor de Case de Texto",desc:"Converte texto entre MAIÚSCULAS, minúsculas, Título, camelCase e snake_case.",cat:"convert"},
  {id:114,name:"Gerador de UUID",desc:"Gera identificadores únicos universais (UUID v4) em lote.",cat:"convert"},
  {id:115,name:"Valor por Extenso",desc:"Converte um valor em reais para sua forma escrita por extenso, como em cheques.",cat:"office"},
  {id:116,name:"Calculadora de Horas Trabalhadas",desc:"Soma intervalos de entrada e saída e calcula o total de horas trabalhadas no dia.",cat:"office"},
  {id:117,name:"Calculadora de Juros Simples",desc:"Calcula o rendimento de juros simples a partir do capital, taxa e período.",cat:"convert"},
  {id:118,name:"Calculadora de Rescisão Trabalhista",desc:"Estima o total a receber na rescisão: saldo de salário, férias, 13º, aviso prévio e multa do FGTS.",cat:"office"},
  {id:119,name:"Calculadora de Horas Extras",desc:"Calcula o valor de horas extras a 50% e 100% com base no salário e na carga horária mensal.",cat:"office"},
  {id:120,name:"Conversor de Números Romanos",desc:"Converte números arábicos para romanos e vice-versa, em tempo real.",cat:"convert"},
  {id:121,name:"Gerador de Lorem Ipsum",desc:"Gera texto de preenchimento (placeholder) em latim ou português para maquetes e layouts.",cat:"convert"},
  {id:122,name:"Conversor de Timestamp Unix",desc:"Converte entre timestamp Unix e data/hora legível, nos dois sentidos.",cat:"convert"},
  {id:123,name:"Base64 de Texto",desc:"Codifica texto para Base64 e decodifica Base64 de volta para texto.",cat:"convert"},
  {id:124,name:"Codificador/Decodificador de URL",desc:"Aplica ou remove URL encoding (percent-encoding) em textos e links.",cat:"convert"},
  {id:125,name:"Verificador de Força de Senha",desc:"Avalia a força de uma senha em tempo real e dá dicas para torná-la mais segura.",cat:"convert"},
  {id:126,name:"Testador de Expressão Regular",desc:"Testa uma regex contra um texto e destaca todas as correspondências encontradas.",cat:"convert"},
  {id:127,name:"Verificador de Contraste de Cores",desc:"Calcula a razão de contraste entre duas cores e avalia a conformidade com WCAG (acessibilidade).",cat:"convert"},
  {id:128,name:"Calculadora de Troco",desc:"Calcula o troco de uma compra e sugere a menor quantidade de cédulas e moedas.",cat:"convert"},
  {id:129,name:"Sorteador Aleatório",desc:"Sorteia um ou mais vencedores aleatórios a partir de uma lista de participantes.",cat:"convert"},
  {id:130,name:"Redimensionar para Redes Sociais",desc:"Ajusta e corta uma imagem nos formatos ideais para Instagram, Facebook, LinkedIn e YouTube.",cat:"image"},
  {id:131,name:"Minificador de Código",desc:"Remove espaços e comentários desnecessários de CSS, HTML ou JavaScript para reduzir o tamanho.",cat:"convert"},
  {id:132,name:"Verificar Assinatura Digital",desc:"Confere se um PDF assinado na plataforma continua íntegro, validando o certificado criptográfico da assinatura.",cat:"pdf"},
];

const CONV_TOOLS=[
  {id:'pdf2word',icon:'📄→📝',title:'PDF → Word',desc:'Gera .docx real (OOXML)',accept:'.pdf',out:'docx',color:'#2b579a'},
  {id:'pdf2excel',icon:'📄→📊',title:'PDF → Excel',desc:'Exporta tabelas para .xlsx real',accept:'.pdf',out:'xlsx',color:'#1d6f42'},
  {id:'pdf2pptx',icon:'📄→📑',title:'PDF → PowerPoint',desc:'Converte páginas em slides .pptx reais',accept:'.pdf',out:'pptx',color:'#d24726'},
  {id:'word2pdf',icon:'📝→📄',title:'Word → PDF',desc:'Converte .docx para PDF real',accept:'.docx',out:'pdf',color:'#e5322d'},
  {id:'excel2pdf',icon:'📊→📄',title:'Excel → PDF',desc:'Exporta planilha .xlsx para PDF real',accept:'.xlsx',out:'pdf',color:'#e5322d'},
  {id:'pptx2pdf',icon:'📑→📄',title:'PowerPoint → PDF',desc:'Exporta slides .pptx para PDF real',accept:'.pptx',out:'pdf',color:'#e5322d'},
];

const TOOL_ID_MAP={69:'pdf2word',70:'pdf2excel',71:'pdf2pptx',72:'word2pdf',73:'excel2pdf',74:'pptx2pdf'};

// ── I18N GLOBAL DO SITE (chrome da interface: nav, hero, categorias, contato, widgets) ──
let siteLang='pt';
const SITE_I18N={
  pt:{
    navHome:'Início',navAbout:'Sobre a Empresa',navContact:'Contato',navDashboard:'Painel',dashHistTitle:'Histórico de Conversões',
    catTitle:'Categorias',catAll:'Todos',catPdf:'PDF / Assinatura',catImage:'Imagens',catConvert:'Conversores / OFX',catOffice:'Contabilidade Útil',catOffice2:'Office IA',
    searchPlaceholder:'Buscar ferramenta...',
    themeLight:'Modo Claro',themeDark:'Modo Escuro',
    heroSub:'114 ferramentas de uso do dia a dia — conversores, PDF, imagem e calculadoras de contabilidade essenciais, com conversores Office com IA.',
    secToolsTitle:'Todas as Ferramentas',
    useToolBtn:'Usar ferramenta',
    footerRights:'Todos os direitos reservados',
    aboutTitle:'Sobre a FREDTECHSYSTEMS Converter',
    aboutP1:'A FREDTECHSYSTEMS Converter desenvolve ferramentas simples e rápidas para o dia a dia: conversores de arquivos, edição de PDF e imagem, e calculadoras de contabilidade essenciais.',
    aboutP2:'Nossa suíte reúne ferramentas de PDF, imagem, conversão e cálculos de contabilidade pessoais/pequenas empresas em um ambiente unificado, seguro e executável 100% no navegador — sem envio de dados a servidores externos.',
    aboutP3:'A partir da versão 2.4.0, integramos motor local de conversão inteligente entre formatos Office (Word, Excel, PowerPoint) e PDF, com suporte multilingual (PT / EN / ES), gerando arquivos reais nos formatos OOXML padrão.',
    aboutHistoryTitle:'Nossa História',
    aboutHistoryP1:'O projeto nasceu como <strong>FREDTECHsystem Suite</strong>, um conjunto simples de utilitários pessoais para conversão de arquivos. Com o crescimento do catálogo de ferramentas, a marca evoluiu para <strong>Nexora Suite</strong>, ganhando identidade visual própria e mais recursos de automação.',
    aboutHistoryP2:'Em seguida, o produto passou a integrar o portfólio da <strong>FGA Suite</strong>, sob a FGA Holding LLC, unificando processos internos e reforçando o compromisso com privacidade e execução 100% local. A marca atual, <strong>FREDTECHSYSTEMS Converter</strong>, representa a maturidade dessa trajetória: uma suíte completa e gratuita de ferramentas de PDF, imagem, conversão de Office e contabilidade.',
    aboutHistoryP3:'Hoje a FREDTECHSYSTEMS Converter é mantida pela FGA Holding LLC e continua sendo desenvolvida com o mesmo princípio desde o início: ferramentas rápidas, seguras e sem necessidade de instalação.',
    contactTitle:'Fale Conosco',
    contactSub:'Entre em contato pela plataforma que preferir. Nossa equipe responde em até 1 dia útil.',
    ccSubWa:'Atendimento seg–sex, 8h–18h (BRT)',btnOpenWa:'Abrir WhatsApp',
    ccSubEmail:'Suporte técnico e comercial',btnSendEmailContact:'Enviar E-mail',
    msgFormTitle:'Enviar Mensagem',
    formNameLabel:'Nome completo',formContactLabel:'E-mail ou WhatsApp',formSubjectLabel:'Assunto',formMessageLabel:'Mensagem',
    btnSendEmailForm:'Enviar por E-mail',btnSendWaForm:'Enviar via WhatsApp',
    widgetRecentTitle:'Recentes',widgetRecentEmpty:'Nenhum histórico na sessão atual.',
    widgetStatusTitle:'Status do Ecossistema',widgetStatusExec:'Executável Local',widgetStatusEngine:'Motor de Conversão Ativo',
    widgetSupportTitle:'Suporte Rápido',
    modalCloseBtn:'Fechar',
  },
  en:{
    navHome:'Home',navAbout:'About Us',navContact:'Contact',navDashboard:'Dashboard',dashHistTitle:'Conversion History',
    catTitle:'Categories',catAll:'All',catPdf:'PDF / Signature',catImage:'Images',catConvert:'Converters / OFX',catOffice:'Useful Accounting',catOffice2:'Office AI',
    searchPlaceholder:'Search tool...',
    themeLight:'Light Mode',themeDark:'Dark Mode',
    heroSub:'114 everyday tools — converters, PDF, image and essential accounting calculators, plus AI-powered Office converters.',
    secToolsTitle:'All Tools',
    useToolBtn:'Use tool',
    footerRights:'All rights reserved',
    aboutTitle:'About FREDTECHSYSTEMS Converter',
    aboutP1:'FREDTECHSYSTEMS Converter builds simple, fast everyday tools: file converters, PDF and image editing, and essential accounting calculators.',
    aboutP2:'Our suite brings together PDF, image, conversion and personal/small-business accounting tools in one unified, secure environment that runs 100% in the browser — no data is sent to external servers.',
    aboutP3:'Starting with version 2.4.0, we integrated a local smart conversion engine between Office formats (Word, Excel, PowerPoint) and PDF, with multilingual support (PT / EN / ES), generating real files in standard OOXML formats.',
    aboutHistoryTitle:'Our History',
    aboutHistoryP1:'The project started as <strong>FREDTECHsystem Suite</strong>, a simple set of personal file-conversion utilities. As the tool catalog grew, the brand evolved into <strong>Nexora Suite</strong>, gaining its own visual identity and more automation features.',
    aboutHistoryP2:'The product then joined the <strong>FGA Suite</strong> portfolio under FGA Holding LLC, unifying internal processes and reinforcing our commitment to privacy and 100% local execution. The current brand, <strong>FREDTECHSYSTEMS Converter</strong>, represents the maturity of that journey: a complete, free suite of PDF, image, Office conversion and accounting tools.',
    aboutHistoryP3:'Today FREDTECHSYSTEMS Converter is maintained by FGA Holding LLC and keeps being developed on the same principle since day one: fast, secure tools that need no installation.',
    contactTitle:'Get in Touch',
    contactSub:'Reach out on whichever platform you prefer. Our team replies within 1 business day.',
    ccSubWa:'Support Mon–Fri, 8am–6pm (BRT)',btnOpenWa:'Open WhatsApp',
    ccSubEmail:'Technical and sales support',btnSendEmailContact:'Send Email',
    msgFormTitle:'Send a Message',
    formNameLabel:'Full name',formContactLabel:'Email or WhatsApp',formSubjectLabel:'Subject',formMessageLabel:'Message',
    btnSendEmailForm:'Send by Email',btnSendWaForm:'Send via WhatsApp',
    widgetRecentTitle:'Recent',widgetRecentEmpty:'No history in the current session.',
    widgetStatusTitle:'Ecosystem Status',widgetStatusExec:'Runs Locally',widgetStatusEngine:'Conversion Engine Active',
    widgetSupportTitle:'Quick Support',
    modalCloseBtn:'Close',
  },
  es:{
    navHome:'Inicio',navAbout:'Sobre la Empresa',navContact:'Contacto',navDashboard:'Panel',dashHistTitle:'Historial de Conversiones',
    catTitle:'Categorías',catAll:'Todos',catPdf:'PDF / Firma',catImage:'Imágenes',catConvert:'Conversores / OFX',catOffice:'Contabilidad Útil',catOffice2:'Office IA',
    searchPlaceholder:'Buscar herramienta...',
    themeLight:'Modo Claro',themeDark:'Modo Oscuro',
    heroSub:'114 herramientas del día a día — conversores, PDF, imagen y calculadoras de contabilidad esenciales, con conversores de Office con IA.',
    secToolsTitle:'Todas las Herramientas',
    useToolBtn:'Usar herramienta',
    footerRights:'Todos los derechos reservados',
    aboutTitle:'Sobre FREDTECHSYSTEMS Converter',
    aboutP1:'FREDTECHSYSTEMS Converter desarrolla herramientas simples y rápidas para el día a día: conversores de archivos, edición de PDF e imagen, y calculadoras de contabilidad esenciales.',
    aboutP2:'Nuestra suite reúne herramientas de PDF, imagen, conversión y cálculos de contabilidad personal/pequeñas empresas en un entorno unificado, seguro y que se ejecuta 100% en el navegador — sin enviar datos a servidores externos.',
    aboutP3:'A partir de la versión 2.4.0, integramos un motor local de conversión inteligente entre formatos de Office (Word, Excel, PowerPoint) y PDF, con soporte multilingüe (PT / EN / ES), generando archivos reales en formatos OOXML estándar.',
    aboutHistoryTitle:'Nuestra Historia',
    aboutHistoryP1:'El proyecto nació como <strong>FREDTECHsystem Suite</strong>, un conjunto simple de utilidades personales para conversión de archivos. Con el crecimiento del catálogo de herramientas, la marca evolucionó a <strong>Nexora Suite</strong>, ganando identidad visual propia y más funciones de automatización.',
    aboutHistoryP2:'Luego, el producto pasó a integrar el portafolio de <strong>FGA Suite</strong>, bajo FGA Holding LLC, unificando procesos internos y reforzando el compromiso con la privacidad y la ejecución 100% local. La marca actual, <strong>FREDTECHSYSTEMS Converter</strong>, representa la madurez de ese recorrido: una suite completa y gratuita de herramientas de PDF, imagen, conversión de Office y contabilidad.',
    aboutHistoryP3:'Hoy FREDTECHSYSTEMS Converter es mantenida por FGA Holding LLC y sigue desarrollándose con el mismo principio desde el inicio: herramientas rápidas, seguras y sin necesidad de instalación.',
    contactTitle:'Contáctanos',
    contactSub:'Ponte en contacto por la plataforma que prefieras. Nuestro equipo responde en un plazo de 1 día hábil.',
    ccSubWa:'Atención lun–vie, 8h–18h (BRT)',btnOpenWa:'Abrir WhatsApp',
    ccSubEmail:'Soporte técnico y comercial',btnSendEmailContact:'Enviar Email',
    msgFormTitle:'Enviar Mensaje',
    formNameLabel:'Nombre completo',formContactLabel:'Email o WhatsApp',formSubjectLabel:'Asunto',formMessageLabel:'Mensaje',
    btnSendEmailForm:'Enviar por Email',btnSendWaForm:'Enviar por WhatsApp',
    widgetRecentTitle:'Recientes',widgetRecentEmpty:'Sin historial en la sesión actual.',
    widgetStatusTitle:'Estado del Ecosistema',widgetStatusExec:'Ejecutable Local',widgetStatusEngine:'Motor de Conversión Activo',
    widgetSupportTitle:'Soporte Rápido',
    modalCloseBtn:'Cerrar',
  }
};

const LANG_PILL_LABELS={pt:'PT · Português',en:'EN · English',es:'ES · Español'};
function toggleLangDropdown(e){
  if(e) e.stopPropagation();
  const menu=document.getElementById('lang-dropdown-menu');
  const toggle=document.getElementById('lang-dropdown-toggle');
  if(!menu||!toggle) return;
  const open=menu.classList.toggle('open');
  toggle.classList.toggle('open',open);
}
document.addEventListener('click',function(e){
  const pill=document.getElementById('lang-theme-pill');
  if(!pill) return;
  if(!pill.contains(e.target)){
    const menu=document.getElementById('lang-dropdown-menu');
    const toggle=document.getElementById('lang-dropdown-toggle');
    if(menu) menu.classList.remove('open');
    if(toggle) toggle.classList.remove('open');
  }
});
function setSiteLang(l,btn){
  siteLang=l;
  convLang=l; // mantém o idioma do conversor Office IA sincronizado com o idioma do site
  document.querySelectorAll('.site-lang-btn').forEach(b=>b.classList.remove('active'));
  if(!btn){const idx0={pt:0,en:1,es:2}[l];const btns=document.querySelectorAll('.site-lang-btn');btn=btns[idx0];}
  if(btn) btn.classList.add('active');
  const pillLabel=document.getElementById('lang-dropdown-label');
  if(pillLabel) pillLabel.textContent=LANG_PILL_LABELS[l]||LANG_PILL_LABELS.pt;
  const menu=document.getElementById('lang-dropdown-menu');
  const toggle=document.getElementById('lang-dropdown-toggle');
  if(menu) menu.classList.remove('open');
  if(toggle) toggle.classList.remove('open');
  applySiteLang();
  if(typeof pushCloudData==='function')pushCloudData();
  // se o painel do conversor estiver visível, sincroniza os botões PT/EN/ES dele também
  const idx={pt:0,en:1,es:2}[l];
  const convBtns=document.querySelectorAll('.conv-lang-btn');
  if(convBtns.length){
    convBtns.forEach(b=>b.classList.remove('active'));
    if(convBtns[idx]) convBtns[idx].classList.add('active');
  }
  if(document.getElementById('conv-lang-label')&&typeof refreshConvUIText==='function') refreshConvUIText();
}

function applySiteLang(){
  const s=SITE_I18N[siteLang]||SITE_I18N.pt;
  const setTxt=(id,val)=>{const el=document.getElementById(id);if(el)el.textContent=val;};
  const setHtml=(id,val)=>{const el=document.getElementById(id);if(el)el.innerHTML=val;};
  setTxt('nav-home',s.navHome);setTxt('nav-about',s.navAbout);setTxt('nav-contact',s.navContact);
  setHtml('nav-dashboard',ic('dashboard',17)+' '+s.navDashboard);
  setHtml('dash-hist-title',ic('clock',15)+' '+s.dashHistTitle);
  setTxt('cat-title-label',s.catTitle);
  setHtml('cat-label-all',ic('folder',15)+s.catAll);
  setHtml('cat-label-pdf','<svg class="hicon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z"/></svg>'+s.catPdf);
  setHtml('cat-label-image','<svg class="hicon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3 16.5V6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5A2.25 2.25 0 0 1 18.75 19.5H5.25A2.25 2.25 0 0 1 3 17.25v-.75z"/></svg>'+s.catImage);
  setHtml('cat-label-convert','<svg class="hicon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-4.99M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182"/></svg>'+s.catConvert);
  setHtml('cat-label-office',ic('dashboard',15)+s.catOffice);
  setHtml('cat-label-office2','<svg class="hicon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M15.75 3v1.5M8.25 19.5V21M15.75 19.5V21M3 8.25h1.5M3 15.75h1.5M19.5 8.25H21M19.5 15.75H21M6.75 19.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 17.25 4.5H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25zM9 9h6v6H9V9z"/></svg>'+s.catOffice2+' '+ic('sparkles',13));
  const searchInput=document.getElementById('search-input');
  if(searchInput) searchInput.placeholder=s.searchPlaceholder;
  const searchInputSec=document.getElementById('search-input-sec');
  if(searchInputSec) searchInputSec.placeholder=s.searchPlaceholder;
  const themeBtn=document.getElementById('theme-btn');
  if(themeBtn){themeBtn.innerHTML=isDark?ic('sun',15):ic('moon',15);themeBtn.title=isDark?s.themeLight:s.themeDark;}
  const langLabel=document.getElementById('lang-dropdown-label');
  if(langLabel) langLabel.textContent=LANG_PILL_LABELS[siteLang]||LANG_PILL_LABELS.pt;
  setTxt('hero-sub',s.heroSub);
  setTxt('sec-header-title',s.secToolsTitle);
  setTxt('footer-rights-text',s.footerRights);
  setTxt('about-title',s.aboutTitle);setTxt('about-p1',s.aboutP1);setTxt('about-p2',s.aboutP2);setTxt('about-p3',s.aboutP3);
  setTxt('about-history-title',s.aboutHistoryTitle);
  setHtml('about-history-p1',s.aboutHistoryP1);setHtml('about-history-p2',s.aboutHistoryP2);setHtml('about-history-p3',s.aboutHistoryP3);
  setHtml('contact-title',ic('mail',18)+' '+s.contactTitle);setTxt('contact-sub',s.contactSub);
  setTxt('cc-sub-wa',s.ccSubWa);setHtml('btn-open-wa',ic('chat',15)+' '+s.btnOpenWa);
  setTxt('cc-sub-email',s.ccSubEmail);setHtml('btn-send-email-contact',ic('mail',15)+' '+s.btnSendEmailContact);
  setHtml('msg-form-title',ic('mail',16)+' '+s.msgFormTitle);
  setTxt('form-name-label',s.formNameLabel);setTxt('form-contact-label',s.formContactLabel);
  setTxt('form-subject-label',s.formSubjectLabel);setTxt('form-message-label',s.formMessageLabel);
  setHtml('btn-send-email-form',ic('mail',15)+' '+s.btnSendEmailForm);setHtml('btn-send-wa-form',ic('chat',15)+' '+s.btnSendWaForm);
  setHtml('widget-recent-title',ic('star',15)+' '+s.widgetRecentTitle);
  setTxt('widget-status-title',s.widgetStatusTitle);setTxt('widget-status-exec',s.widgetStatusExec);setTxt('widget-status-engine',s.widgetStatusEngine);
  setHtml('widget-support-title',ic('mail',15)+' '+s.widgetSupportTitle);
  const recentList=document.getElementById('recent-list');
  if(recentList)renderRecentWidget();
  document.querySelectorAll('.close-btn').forEach(b=>{b.innerHTML=ic('close',13)+' '+s.modalCloseBtn;});
  renderGrid(); // re-render tool cards so "Usar ferramenta"/"Use tool"/"Usar herramienta" updates
}

let curCat='all',sigCanvas,sigCtx,sigDrawing=false,typCanvas,typCtx,activeTab='draw';
let convLang='pt',convActiveTool=null,convSelectedFile=null,convResultBlob=null,convResultName='';

// ── FAVORITOS & RECENTES (persistidos no navegador do usuário) ──
function lsGet(key){try{return JSON.parse(localStorage.getItem(key)||'[]');}catch(e){return [];}}
function lsSet(key,val){try{localStorage.setItem(key,JSON.stringify(val));}catch(e){}}

// ══════════════════════════════════════════════════════════════════
// ── LOGIN (Google + e-mail/senha) ──
// Conta 100% local: como este app não tem servidor, o cadastro por
// e-mail/senha fica salvo (com senha hasheada) apenas no localStorage
// deste navegador — serve para personalizar a experiência no
// dispositivo, não é uma autenticação de servidor multi-dispositivo.
// ══════════════════════════════════════════════════════════════════

// ⚠️ CONFIGURAÇÃO: troque pelo seu Client ID real do Google Cloud Console
// (console.cloud.google.com → APIs & Serviços → Credenciais → ID cliente OAuth 2.0 → Web)
// e cadastre o domínio onde este arquivo for hospedado em "Origens JavaScript autorizadas".
const GOOGLE_CLIENT_ID = '83703666449-7u3uq7hrv6bnq2ug69flrhldvv9j64l9.apps.googleusercontent.com';

let authMode='login'; // 'login' | 'register'

function authUsersGet(){try{return JSON.parse(localStorage.getItem('ntc_users')||'{}');}catch(e){return {};}}
function authUsersSet(v){try{localStorage.setItem('ntc_users',JSON.stringify(v));}catch(e){}}
function authSessionGet(){try{return JSON.parse(localStorage.getItem('ntc_session')||'null');}catch(e){return null;}}
function authSessionSet(v){try{v?localStorage.setItem('ntc_session',JSON.stringify(v)):localStorage.removeItem('ntc_session');}catch(e){}}

async function authHashPassword(pw){
  try{
    const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(pw));
    return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
  }catch(e){ return btoa(pw); } // fallback simples se Web Crypto indisponível (ex: file:// em alguns navegadores)
}

function initGoogleLogin(){
  if(typeof google==='undefined'||!google.accounts||!google.accounts.id)return;
  if(GOOGLE_CLIENT_ID.startsWith('SEU_'))return; // ainda não configurado
  try{
    google.accounts.id.initialize({client_id:GOOGLE_CLIENT_ID,callback:handleGoogleCredential,auto_select:false});
  }catch(e){}
}
function handleGoogleCredential(response){
  try{
    const payload=JSON.parse(decodeURIComponent(atob(response.credential.split('.')[1].replace(/-/g,'+').replace(/_/g,'/')).split('').map(c=>'%'+('00'+c.charCodeAt(0).toString(16)).slice(-2)).join('')));
    loginSuccess({name:payload.name||payload.email,email:payload.email,picture:payload.picture||'',provider:'google'});
    closeAuthModal();
  }catch(e){ authShowError('Não foi possível concluir o login com Google.'); }
}

function openAuthModal(){
  authMode='login';
  authUpdateFormMode();
  document.getElementById('auth-modal').classList.add('open');
  document.getElementById('auth-error').style.display='none';
  document.getElementById('auth-form').reset();
  if(typeof google!=='undefined'&&google.accounts&&google.accounts.id&&!GOOGLE_CLIENT_ID.startsWith('SEU_')){
    document.getElementById('auth-google-btn').innerHTML='';
    google.accounts.id.renderButton(document.getElementById('auth-google-btn'),{theme:'filled_black',size:'large',width:300,text:'continue_with',locale:'pt-BR'});
  }else{
    document.getElementById('auth-google-btn').innerHTML='<div style="font-size:11.5px;color:var(--dim);text-align:center;border:1px dashed var(--border);border-radius:8px;padding:10px;width:100%">Login com Google não configurado (defina GOOGLE_CLIENT_ID no código)</div>';
  }
}
function closeAuthModal(){document.getElementById('auth-modal').classList.remove('open');}
function toggleAuthMode(){authMode=authMode==='login'?'register':'login';authUpdateFormMode();}
function authUpdateFormMode(){
  const isReg=authMode==='register';
  document.getElementById('auth-modal-title').textContent=isReg?'Criar conta':'Entrar';
  document.getElementById('auth-name-wrap').style.display=isReg?'block':'none';
  document.getElementById('auth-submit-btn').textContent=isReg?'Criar conta':'Entrar';
  document.getElementById('auth-toggle-text').textContent=isReg?'Já tem conta?':'Não tem conta?';
  document.getElementById('auth-toggle-link').textContent=isReg?'Entrar':'Cadastre-se';
  document.getElementById('auth-error').style.display='none';
}
function authShowError(msg){
  const el=document.getElementById('auth-error');
  el.textContent=msg;el.style.display='block';
}
async function handleAuthSubmit(e){
  e.preventDefault();
  const email=document.getElementById('auth-email').value.trim().toLowerCase();
  const pass=document.getElementById('auth-pass').value;
  const name=document.getElementById('auth-name').value.trim();
  const users=authUsersGet();
  if(authMode==='register'){
    if(users[email]){authShowError('Já existe uma conta com este e-mail. Faça login.');return false;}
    if(!name){authShowError('Informe seu nome.');return false;}
    const passHash=await authHashPassword(pass);
    users[email]={name,email,passHash,provider:'local'};
    authUsersSet(users);
    loginSuccess({name,email,picture:'',provider:'local'});
    closeAuthModal();
  }else{
    const u=users[email];
    if(!u){authShowError('E-mail não encontrado. Que tal criar uma conta?');return false;}
    const passHash=await authHashPassword(pass);
    if(u.passHash!==passHash){authShowError('Senha incorreta.');return false;}
    loginSuccess({name:u.name,email:u.email,picture:'',provider:'local'});
    closeAuthModal();
  }
  return false;
}
function loginSuccess(user){
  authSessionSet(user);
  renderAuthUI();
  toast('✅ Bem-vindo(a), '+user.name.split(' ')[0]+'!');
  syncOnLogin(user);
}
function logoutUser(){
  authSessionSet(null);
  cloudSyncActive=false;
  document.getElementById('auth-user-dropdown').classList.remove('open');
  renderAuthUI();
  updateSyncBadge(null);
  if(typeof google!=='undefined'&&google.accounts&&google.accounts.id)try{google.accounts.id.disableAutoSelect();}catch(e){}
  toast('Você saiu da sua conta.');
}
function toggleAuthDropdown(){document.getElementById('auth-user-dropdown').classList.toggle('open');}
document.addEventListener('click',e=>{
  const dd=document.getElementById('auth-user-dropdown');
  if(dd&&dd.classList.contains('open')&&!dd.contains(e.target)&&!e.target.closest('.auth-user-chip'))dd.classList.remove('open');
});
function renderAuthUI(){
  const slot=document.getElementById('auth-slot');
  if(!slot)return;
  const user=authSessionGet();
  if(!user){
    slot.innerHTML=`<button class="btn-login-nav" onclick="openAuthModal()"><svg class="hicon" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M18 12H8.25m9.75 0-3-3m3 3-3 3"/></svg> Entrar</button>`;
    return;
  }
  const initials=(user.name||user.email||'?').trim().split(/\s+/).map(w=>w[0]).slice(0,2).join('');
  slot.innerHTML=`<div class="auth-user-chip" onclick="toggleAuthDropdown()">
    <div class="auth-avatar">${user.picture?`<img src="${user.picture}" alt="">`:initials}</div>
    <span>${(user.name||'').split(' ')[0]}</span>
  </div>`;
  const avatar=document.getElementById('auth-dd-avatar');
  avatar.innerHTML=user.picture?`<img src="${user.picture}" alt="">`:initials;
  document.getElementById('auth-dd-name').textContent=user.name||'';
  document.getElementById('auth-dd-email').textContent=user.email||'';
}
renderAuthUI();
window.addEventListener('load',()=>setTimeout(initGoogleLogin,300));
let favIds=lsGet('ntc_favorites');
let recentIds=lsGet('ntc_recent');

function isFav(id){return favIds.includes(id);}

// ── SINCRONIZAÇÃO NA NUVEM (histórico, favoritos e configurações da conta) ──
let cloudSyncActive=false;
function updateSyncBadge(user){
  const el=document.getElementById('sync-status-badge');
  if(!el)return;
  el.textContent=user?('☁ Sincronizado com '+(user.email||user.name)):'💾 Salvo apenas neste navegador';
  el.style.display='inline-flex';
}
async function pushCloudData(){
  const user=authSessionGet();
  if(!cloudSyncActive||!user||typeof window.saveUserCloudData!=='function')return;
  await window.saveUserCloudData(user.email,{
    history:lsGet('ntc_history'),
    favorites:favIds,
    settings:{lang:siteLang,theme:isDark?'dark':'light'},
    updatedAt:Date.now()
  });
}
async function syncOnLogin(user){
  if(typeof window.loadUserCloudData!=='function'||!user||!user.email)return;
  const cloud=await window.loadUserCloudData(user.email);
  if(cloud){
    const localHist=lsGet('ntc_history');
    const cloudHist=Array.isArray(cloud.history)?cloud.history:[];
    const mergedHist=[...localHist,...cloudHist]
      .sort((a,b)=>b.ts-a.ts)
      .filter((h,i,arr)=>arr.findIndex(x=>x.ts===h.ts&&x.name===h.name)===i)
      .slice(0,300);
    lsSet('ntc_history',mergedHist);
    const cloudFav=Array.isArray(cloud.favorites)?cloud.favorites:[];
    favIds=[...new Set([...favIds,...cloudFav])];
    lsSet('ntc_favorites',favIds);
    if(cloud.settings&&cloud.settings.lang&&cloud.settings.lang!==siteLang){
      setSiteLang(cloud.settings.lang);
    }
  }
  cloudSyncActive=true;
  await pushCloudData();
  renderGrid();
  if(document.getElementById('dash-stats-grid'))renderDashboard();
  updateSyncBadge(user);
}
// se a sessão já estava aberta antes de recarregar a página, sincroniza de novo
{const _u=authSessionGet();if(_u)syncOnLogin(_u);}

// ── HISTÓRICO REAL DE CONVERSÕES (persistido em localStorage) ──
function logConversion(fileName,toolLabel){
  try{
    const h=lsGet('ntc_history');
    h.unshift({name:fileName||'arquivo',tool:toolLabel||'—',ts:Date.now()});
    if(h.length>300)h.length=300;
    lsSet('ntc_history',h);
    pushCloudData();
  }catch(e){}
}
function clearHistory(){
  lsSet('ntc_history',[]);
  renderDashboard();
  pushCloudData();
  toast('✅ Histórico de conversões limpo.');
}
function dashTimeAgo(ts){
  const diff=Math.max(0,Date.now()-ts);
  const m=Math.floor(diff/60000);
  if(m<1)return'agora mesmo';
  if(m<60)return m+' min atrás';
  const h=Math.floor(m/60);
  if(h<24)return h+'h atrás';
  const d=Math.floor(h/24);
  return d+'d atrás';
}
function renderDashboard(){
  const grid=document.getElementById('dash-stats-grid');
  const histList=document.getElementById('dash-history-list');
  const favList=document.getElementById('dash-fav-list');
  if(!grid)return;
  const history=lsGet('ntc_history');
  const total=history.length;
  const counts={};
  history.forEach(h=>{counts[h.name]=(counts[h.name]||0)+1;});
  let topName='—',topCount=0;
  Object.keys(counts).forEach(k=>{if(counts[k]>topCount){topCount=counts[k];topName=k;}});
  const lastLabel=total?dashTimeAgo(history[0].ts):'—';
  grid.innerHTML=`
    <div class="dash-stat-card"><div class="dsc-ico">🔄</div><div class="dsc-num">${total}</div><div class="dsc-label">Conversões realizadas</div></div>
    <div class="dash-stat-card"><div class="dsc-ico">⭐</div><div class="dsc-num">${favIds.length}</div><div class="dsc-label">Ferramentas favoritas</div></div>
    <div class="dash-stat-card"><div class="dsc-ico">🏆</div><div class="dsc-num" style="font-size:14px;line-height:1.5" title="${topName}">${topCount?topName.length>18?topName.slice(0,16)+'…':topName:'—'}</div><div class="dsc-label">Arquivo mais recorrente</div></div>
    <div class="dash-stat-card"><div class="dsc-ico">🕓</div><div class="dsc-num" style="font-size:16px">${lastLabel}</div><div class="dsc-label">Última conversão</div></div>`;

  histList.innerHTML=total?history.slice(0,60).map(h=>`
    <div class="dash-history-item">
      <span class="dhi-ico">${convGetIcon2(h.name)}</span>
      <span class="dhi-name">${(h.name||'').replace(/</g,'&lt;')}</span>
      <span class="dhi-time">${dashTimeAgo(h.ts)}</span>
    </div>`).join(''):'<div class="dash-empty">🕓 Nenhuma conversão ainda.<br>O histórico aparece aqui automaticamente após baixar um arquivo convertido.</div>';

  favList.innerHTML=favIds.length?favIds.map(id=>{
    const t=TOOLS.find(x=>x.id===id);
    return t?`<div class="dash-history-item" style="cursor:pointer" onclick="openTool(${id})"><span class="dhi-ico">⭐</span><span class="dhi-name">${toolDisplayName(t)}</span></div>`:'';
  }).join(''):'<div class="dash-empty">⭐ Você ainda não tem favoritos.</div>';
}
function convGetIcon2(name){const ext=(name||'').split('.').pop().toLowerCase();return{pdf:'📄',docx:'📝',xlsx:'📊',pptx:'📑',png:'🖼️',jpg:'🖼️',jpeg:'🖼️',zip:'🗜️',ofx:'🏦',txt:'📃'}[ext]||'📁';}
function toggleFavorite(id,ev){
  if(ev)ev.stopPropagation();
  favIds=isFav(id)?favIds.filter(x=>x!==id):[id,...favIds];
  lsSet('ntc_favorites',favIds);
  renderGrid();
  pushCloudData();
}

// ── CONTATO ───────────────────────────────────────────
function enviarMensagem(via){
  const nome=document.getElementById('msg-nome').value.trim();
  const contato=document.getElementById('msg-contato').value.trim();
  const assunto=document.getElementById('msg-assunto').value.trim();
  const corpo=document.getElementById('msg-corpo').value.trim();
  if(!nome||!corpo){toast('Preencha pelo menos o nome e a mensagem.');return;}
  const texto=`*FREDTECHSYSTEMS Converter — Nova Mensagem*\n\n*Nome:* ${nome}\n*Contato:* ${contato||'Não informado'}\n*Assunto:* ${assunto||'Contato Geral'}\n\n*Mensagem:*\n${corpo}`;
  if(via==='whatsapp'){
    const url='https://wa.me/5531997661377?text='+encodeURIComponent(texto);
    window.open(url,'_blank');
    document.getElementById('wa-redirect').classList.add('show');
    document.getElementById('msg-success').classList.remove('show');
  } else {
    const subject=encodeURIComponent('[FREDTECHSYSTEMS Converter] '+(assunto||'Contato'));
    const body=encodeURIComponent(`Nome: ${nome}\nContato: ${contato||'Não informado'}\n\nMensagem:\n${corpo}`);
    window.location.href=`mailto:fgaholdingllc@gmail.com?subject=${subject}&body=${body}`;
    document.getElementById('msg-success').classList.add('show');
    document.getElementById('wa-redirect').classList.remove('show');
  }
}

// ── RENDER GRID ───────────────────────────────────────
function renderGrid(data){
  if(!data) data=curCat==='all'?TOOLS:curCat==='fav'?TOOLS.filter(t=>isFav(t.id)):TOOLS.filter(t=>t.cat===curCat);
  const g=document.getElementById('tools-grid');
  g.innerHTML='';
  const ICON_SOLID={
    pdf:'<svg class="hicon-solid" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625zM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15zm.75 2.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5z"/><path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .621.504 1.125 1.125 1.125H17.25a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.212-8.688A9.847 9.847 0 0 0 12.971 1.816z"/></svg>',
    image:'<svg class="hicon-solid" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6zm3 9v.75c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75V15l-2.47-2.47a.75.75 0 0 0-1.06 0l-1.97 1.97-3.97-3.97a.75.75 0 0 0-1.06 0L4.5 15zm3-6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>',
    convert:'<svg class="hicon-solid" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0v2.43l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.312.311h-2.433a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219z"/></svg>',
    office:'<svg class="hicon-solid" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V14.25a.75.75 0 0 1 .75-.75zm3.75-3a.75.75 0 0 0-1.5 0v5.25a.75.75 0 0 0 1.5 0V10.5zm3.75-1.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75z"/></svg>',
    office2:'<svg class="hicon-solid" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .72.54l.82 2.85a3.75 3.75 0 0 0 2.57 2.57l2.85.82a.75.75 0 0 1 0 1.44l-2.85.82a3.75 3.75 0 0 0-2.57 2.57l-.82 2.85a.75.75 0 0 1-1.44 0l-.82-2.85a3.75 3.75 0 0 0-2.57-2.57l-2.85-.82a.75.75 0 0 1 0-1.44l2.85-.82a3.75 3.75 0 0 0 2.57-2.57l.82-2.85A.75.75 0 0 1 9 4.5zM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5z"/></svg>',
  };
  const cls={pdf:'c-pdf',image:'c-image',convert:'c-convert',office:'c-office',office2:'c-office2'};
  const starOutline='<svg class="hicon" style="width:16px;height:16px;stroke:var(--dim)" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m11.48 3.5 2.02 4.11a.6.6 0 0 0 .45.33l4.53.66c.49.07.69.68.33 1.02l-3.28 3.2a.6.6 0 0 0-.17.53l.77 4.51c.09.49-.43.86-.87.63l-4.05-2.13a.6.6 0 0 0-.56 0l-4.05 2.13c-.44.23-.95-.14-.87-.63l.77-4.51a.6.6 0 0 0-.17-.53l-3.28-3.2c-.36-.34-.16-.95.33-1.02l4.53-.66a.6.6 0 0 0 .45-.33l2.02-4.11c.22-.45.85-.45 1.07 0z"/></svg>';
  const starSolid='<svg class="hicon-solid" style="width:16px;height:16px;fill:#fbbf24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.48 3.5a.562.562 0 0 1 1.04 0l2.12 4.11a.563.563 0 0 0 .43.31l4.54.66c.5.07.7.69.34 1.04l-3.29 3.2a.563.563 0 0 0-.16.5l.77 4.52c.09.5-.44.88-.89.65L12.5 16.35a.563.563 0 0 0-.52 0l-4.06 2.14c-.45.23-.98-.15-.89-.65l.77-4.52a.563.563 0 0 0-.16-.5l-3.29-3.2c-.36-.35-.16-.97.34-1.04l4.54-.66a.563.563 0 0 0 .43-.31z"/></svg>';
  const iaSpark='<svg class="hicon-solid" style="width:11px;height:11px;fill:#c084fc" viewBox="0 0 24 24"><path d="M9 4.5a.75.75 0 0 1 .72.54l.82 2.85a3.75 3.75 0 0 0 2.57 2.57l2.85.82a.75.75 0 0 1 0 1.44l-2.85.82a3.75 3.75 0 0 0-2.57 2.57l-.82 2.85a.75.75 0 0 1-1.44 0l-.82-2.85a3.75 3.75 0 0 0-2.57-2.57l-2.85-.82a.75.75 0 0 1 0-1.44l2.85-.82a3.75 3.75 0 0 0 2.57-2.57l.82-2.85A.75.75 0 0 1 9 4.5z"/></svg>';
  const useLabel=(SITE_I18N[siteLang]||SITE_I18N.pt).useToolBtn;
  if(curCat==='fav'&&!data.length){
    g.innerHTML=`<div class="reveal in-view" style="grid-column:1/-1;text-align:center;padding:40px 20px;color:var(--muted);font-size:13px">${starOutline} Você ainda não tem favoritos.<br>Clique na estrela de qualquer ferramenta para salvá-la aqui.</div>`;
    return;
  }
  data.forEach((t,i)=>{
    const tr=(siteLang!=='pt'&&typeof TOOLS_I18N!=='undefined'&&TOOLS_I18N[siteLang]&&TOOLS_I18N[siteLang][t.id])||null;
    const dispName=tr?tr.name:t.name, dispDesc=tr?tr.desc:t.desc;
    const d=document.createElement('div');
    d.className='card reveal';
    d.style.animationDelay=Math.min(i*30,300)+'ms';
    d.innerHTML=`
      <div class="card-top-row">
        <div class="icon-wrap ${cls[t.cat]}">${ICON_SOLID[t.cat]}</div>
        <div style="display:flex;align-items:center;gap:6px">
          ${t.ia?`<span class="badge-ia">${iaSpark} IA</span>`:`<span class="card-protocol">Nº ${String(t.id).padStart(3,'0')}</span>`}
          <button class="fav-star ${isFav(t.id)?'active':''}" onclick="toggleFavorite(${t.id},event)" title="${isFav(t.id)?'Remover dos favoritos':'Adicionar aos favoritos'}">${isFav(t.id)?starSolid:starOutline}</button>
        </div>
      </div>
      <div class="tool-meta"><h4>${dispName}</h4><p>${dispDesc}</p></div>
      <button class="btn-use" onclick="openTool(${t.id})">${useLabel}</button>`;
    g.appendChild(d);
    requestAnimationFrame(()=>d.classList.add('in-view'));
  });
}

// ── BUSCA INTELIGENTE (sinônimos + termos relacionados) ──
const SEARCH_SYNONYMS={
  'foto':'imagem imagens picture photo',
  'excel':'planilha xlsx spreadsheet',
  'planilha':'excel xlsx',
  'word':'docx texto documento document',
  'ppt':'powerpoint apresentação slides pptx',
  'powerpoint':'ppt apresentação slides',
  'senha':'password contraseña',
  'imposto':'tributo ir irrf inss icms pis cofins tax',
  'boleto':'pagamento recibo',
  'assinar':'assinatura rubrica signature firma',
  'nota fiscal':'nfe xml fiscal',
  'nfe':'nota fiscal xml',
  'salario':'salário folha pagamento payroll',
  'ferias':'férias vacation',
  'zip':'compactar arquivo comprimir',
  'qr':'qrcode código qr code',
  'cor':'cores color hex rgb',
  'cpf':'documento validar cnpj',
  'juros':'financiamento empréstimo interest juro',
  'imc':'peso altura bmi',
  'idade':'nascimento age',
  'desenvolvedor':'json regex hash uuid base64 url código minifica timestamp binário hexadecimal',
  'dev':'json regex hash uuid base64 url código minifica timestamp binário hexadecimal',
  'programador':'json regex hash uuid base64 url código minifica timestamp desenvolvedor',
  'programacao':'json regex hash uuid base64 url código minifica timestamp desenvolvedor',
};
function expandSearchQuery(q){
  let extra='';
  Object.keys(SEARCH_SYNONYMS).forEach(k=>{if(q.includes(k))extra+=' '+SEARCH_SYNONYMS[k];});
  return(q+' '+extra).trim();
}
function toolSearchText(t){
  let txt=t.name+' '+t.desc;
  if(typeof TOOLS_I18N!=='undefined'){
    ['en','es'].forEach(l=>{const tr=TOOLS_I18N[l]&&TOOLS_I18N[l][t.id];if(tr)txt+=' '+tr.name+' '+tr.desc;});
  }
  return txt.toLowerCase();
}

function handleSearch(q,fromEl){
  // mantém os dois campos de busca (navbar e seção) sincronizados
  ['search-input','search-input-sec'].forEach(id=>{
    const el=document.getElementById(id);
    if(el&&el!==fromEl)el.value=q;
  });
  const query=q.toLowerCase().trim();
  if(query){
    document.querySelectorAll('.cat-item').forEach(e=>e.classList.remove('active'));
    document.querySelector('.cat-item[data-cat="all"]')?.classList.add('active');
    curCat='all';
  }
  let results=null;
  if(query){
    const terms=expandSearchQuery(query).split(/\s+/).filter(Boolean);
    results=TOOLS.filter(t=>{const text=toolSearchText(t);return terms.some(term=>text.includes(term));});
  }
  renderGrid(results);
  const counter=document.getElementById('search-result-count');
  if(counter){
    if(query)counter.innerHTML=results.length?`<span style="display:inline-flex;align-items:center;gap:5px"><svg class="hicon" style="width:14px;height:14px" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>${results.length} ferramenta(s) encontrada(s) para "${q}"</span>`:`<span style="display:inline-flex;align-items:center;gap:5px"><svg class="hicon" style="width:14px;height:14px" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75c0-1.03.94-1.87 2.1-1.87s2.1.84 2.1 1.87c0 .77-.5 1.28-1.13 1.7-.6.4-.97.94-.97 1.55m0 2.63h.01M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"/></svg>Nenhuma ferramenta encontrada para "${q}"</span>`;
    else counter.textContent='';
  }
}

function focusSearch(){
  const el=document.getElementById('search-input-sec')||document.getElementById('search-input');
  if(el){document.getElementById('tools-anchor')?.scrollIntoView({behavior:'smooth',block:'start'});el.focus();}
}

function filterCat(cat,el){
  curCat=cat;
  document.querySelectorAll('.cat-item').forEach(e=>e.classList.remove('active'));
  el.classList.add('active');
  ['search-input','search-input-sec'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
  const counter=document.getElementById('search-result-count');
  if(counter)counter.textContent='';
  renderGrid();
}

function showView(v,el){
  ['grid','about','contato','dashboard'].forEach(id=>{
    const el2=document.getElementById('view-'+id);
    if(el2) el2.style.display='none';
  });
  document.getElementById('view-'+v).style.display='block';
  document.querySelectorAll('.nav-item').forEach(e=>e.classList.remove('active'));
  el.classList.add('active');
  if(v==='contato'){
    document.getElementById('msg-success').classList.remove('show');
    document.getElementById('wa-redirect').classList.remove('show');
  }
  if(v==='dashboard'){renderDashboard();updateSyncBadge(authSessionGet());}
}

// ── MODAL ─────────────────────────────────────────────
function closeModal(){document.getElementById('modal').classList.remove('open');}

// ── TOASTS MODERNOS (substitui alert() por notificações não-bloqueantes) ──
// ── BARRA DE PROGRESSO REAL — reutilizável por qualquer ferramenta (PDF, imagem, relatórios) ──
// Não é uma simulação com tempo fixo: a barra só fecha quando a função da
// ferramenta realmente termina (sinalizado pelo toast final de sucesso/erro).
let _toolProgBtn=null,_toolProgBtnText=null,_toolProgTimeout=null;
function toolProgShow(label){
  const box=document.getElementById('tool-prog');if(!box)return;
  const bar=document.getElementById('tool-prog-bar');
  document.getElementById('tool-prog-label').textContent=label||'Processando…';
  document.getElementById('tool-prog-pct').textContent='';
  bar.classList.add('indeterminate');
  box.classList.add('show');
}
function toolProgHide(){
  const box=document.getElementById('tool-prog');if(!box)return;
  const bar=document.getElementById('tool-prog-bar');
  bar.classList.remove('indeterminate');
  box.classList.remove('show');
  if(_toolProgBtn){try{_toolProgBtn.disabled=false;if(_toolProgBtnText!==null)_toolProgBtn.textContent=_toolProgBtnText;}catch(e){}}
  _toolProgBtn=null;_toolProgBtnText=null;
  if(_toolProgTimeout){clearTimeout(_toolProgTimeout);_toolProgTimeout=null;}
}
// ── SEGURANÇA: limite de tamanho e bloqueio de extensões perigosas em qualquer upload do site ──
const MAX_FILE_SIZE_MB = 300; // configurável — arquivos maiores são rejeitados antes de processar
const BLOCKED_EXTENSIONS = ['exe','bat','cmd','sh','msi','scr','com','ps1','vbs','jar','app'];
function validateSelectedFiles(fileList){
  for(const f of fileList){
    const ext=(f.name.split('.').pop()||'').toLowerCase();
    if(BLOCKED_EXTENSIONS.includes(ext)){
      toast('❌ Por segurança, arquivos .'+ext+' não são aceitos.');
      return false;
    }
    if(f.size>MAX_FILE_SIZE_MB*1024*1024){
      toast('❌ "'+f.name+'" tem '+(f.size/1024/1024).toFixed(1)+' MB — o limite atual é '+MAX_FILE_SIZE_MB+' MB.');
      return false;
    }
  }
  return true;
}
document.addEventListener('change',e=>{
  const t=e.target;
  if(t&&t.tagName==='INPUT'&&t.type==='file'&&t.files&&t.files.length){
    if(!validateSelectedFiles(t.files))t.value='';
  }
},true);

async function runToolProgress(btn,fnName,label){
  _toolProgBtn=btn;_toolProgBtnText=btn?btn.textContent:null;
  if(btn)btn.disabled=true;
  toolProgShow(label);
  if(_toolProgTimeout)clearTimeout(_toolProgTimeout);
  _toolProgTimeout=setTimeout(toolProgHide,25000); // trava de segurança, nunca deixa a UI presa
  try{ await window[fnName](); }
  catch(e){ toast('❌ '+(e&&e.message?e.message:'Ocorreu um erro ao processar.')); }
}

function toast(msg,duration){
  toolProgHide();
  let box=document.getElementById('toast-stack');
  if(!box){
    box=document.createElement('div');
    box.id='toast-stack';
    box.className='toast-stack';
    document.body.appendChild(box);
  }
  let type='info',clean=String(msg);
  if(/^✅/.test(clean)){type='success';clean=clean.replace(/^✅\s*/,'');}
  else if(/^(❌|⚠️|😕)/.test(clean)){type='error';clean=clean.replace(/^(❌|⚠️|😕)\s*/,'');}
  else if(/\berro\b/i.test(clean.slice(0,20)))type='error';
  const ico={success:'✅',error:'⚠️',info:'ℹ️'}[type];
  const el=document.createElement('div');
  el.className='toast toast-'+type;
  el.innerHTML=`<span class="toast-ico">${ico}</span><span class="toast-msg">${clean.replace(/</g,'&lt;')}</span><button class="toast-close" aria-label="Fechar">✕</button>`;
  box.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('show'));
  const remove=()=>{el.classList.remove('show');setTimeout(()=>el.remove(),250);};
  el.querySelector('.toast-close').onclick=remove;
  setTimeout(remove,duration||4200);
}

function toolDisplayName(t){
  const tr=(siteLang!=='pt'&&typeof TOOLS_I18N!=='undefined'&&TOOLS_I18N[siteLang]&&TOOLS_I18N[siteLang][t.id])||null;
  return tr?tr.name:t.name;
}

function openTool(id){
  const tool=TOOLS.find(t=>t.id===id);
  document.getElementById('modal-title').textContent=toolDisplayName(tool);
  document.getElementById('modal').classList.add('open');
  recentIds=[id,...recentIds.filter(x=>x!==id)].slice(0,5);
  lsSet('ntc_recent',recentIds);
  renderRecentWidget();
  buildModal(id,tool);
}

function renderRecentWidget(){
  const rl=document.getElementById('recent-list');
  if(!rl)return;
  if(!recentIds.length){
    rl.textContent=(SITE_I18N[siteLang]||SITE_I18N.pt).widgetRecentEmpty;
    return;
  }
  rl.innerHTML=recentIds.map(rid=>{
    const rt=TOOLS.find(t=>t.id===rid);
    if(!rt)return'';
    return`<div style="font-size:11px;padding:4px 0;color:var(--muted);cursor:pointer" onclick="openTool(${rid})">• ${toolDisplayName(rt)}</div>`;
  }).join('');
}

// ── BUILD MODAL ───────────────────────────────────────
function buildModal(id,tool){
  const body=document.getElementById('modal-body');
  body.innerHTML='';

  // Conversores Office (69–74)
  if(id>=69&&id<=74){
    const convToolId=TOOL_ID_MAP[id];
    body.innerHTML=buildConvHTML();
    initConvListeners();
    // pre-select the tool
    const ct=CONV_TOOLS.find(x=>x.id===convToolId);
    if(ct) convSelectTool(ct);
    return;
  }

  if(id===1){
    govAuthData=null;govPdfJsDoc=null;govCurrentPage=1;govTotalPages=1;
    body.innerHTML=`
      <div><span class="gov-badge">🔰 ASSINADOR DIGITAL MULTIMODAL GOV.BR</span></div>
      <div id="gov-auth-section">
        <p style="font-size:13px;color:var(--muted);margin-bottom:4px">Confirme sua identidade antes de assinar o documento.</p>
        <div class="grid-2">
          <div class="f-row"><label class="f-label">Nome completo</label><input type="text" id="gov-nome" class="f-input" placeholder="Ex: Maria da Silva Santos"></div>
          <div class="f-row"><label class="f-label">CPF</label><input type="text" id="gov-cpf" class="f-input" placeholder="000.000.000-00" maxlength="14"></div>
        </div>
        <button class="btn-exec" onclick="govAutenticar()">🔐 Autenticar</button>
        <div class="result-box" id="gov-auth-result"></div>
      </div>
      <div id="gov-sign-section" style="display:none">
        <div id="gov-auth-badge" style="background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.25);border-radius:8px;padding:10px 14px;font-size:12px;color:var(--green);margin-bottom:14px"></div>
        <div class="f-row"><label class="f-label">1. Selecione o PDF:</label><input type="file" id="gov-pdf" accept="application/pdf" class="f-input" onchange="loadGovPdfPreview(this)"></div>
        <div class="sig-tabs">
          <button class="sig-tab active" onclick="switchTab('draw',this)">✏️ Desenhar</button>
          <button class="sig-tab" onclick="switchTab('type',this)">⌨️ Digitar Nome</button>
          <button class="sig-tab" onclick="switchTab('upload',this)">📁 Upload Carimbo</button>
        </div>
        <div id="pane-draw" class="sig-pane active"><div class="canvas-box"><canvas id="sig-canvas"></canvas></div><button class="btn-sm" onclick="clearSig()">🗑 Limpar</button></div>
        <div id="pane-type" class="sig-pane"><label class="f-label">Nome cursivo:</label><input type="text" id="sig-name" class="f-input" placeholder="Nome completo" oninput="drawTypeSig()"><div class="canvas-box" style="margin-top:8px"><canvas id="typ-canvas"></canvas></div></div>
        <div id="pane-upload" class="sig-pane"><label class="f-label">Imagem do carimbo (PNG):</label><input type="file" id="sig-img" accept="image/*" class="f-input" onchange="updateGovStampPreview()"></div>
        <div id="gov-pos-wrap" class="gov-pos-wrap" style="display:none">
          <label class="f-label">2. Arraste a assinatura até a posição desejada (igual ao gov.br):</label>
          <div class="gov-pos-nav">
            <button id="gov-page-prev" onclick="govChangePage(-1)">◀</button>
            <span id="gov-page-label">Página 1 de 1</span>
            <button id="gov-page-next" onclick="govChangePage(1)">▶</button>
          </div>
          <div class="gov-page-stage" id="gov-page-stage">
            <canvas id="gov-page-canvas"></canvas>
            <div class="gov-stamp-drag" id="gov-stamp-drag">
              <div class="gsd-icon" id="gsd-icon">🖋️</div>
              <div class="gsd-text">
                <b>Documento assinado digitalmente</b>
                <small id="gsd-name">—</small>
                <small id="gsd-date">—</small>
              </div>
              <div class="gsd-qr">QR</div>
            </div>
          </div>
          <p class="gov-pos-hint">👆 Toque e arraste o carimbo sobre a página</p>
        </div>
        <label style="display:flex;align-items:center;gap:8px;font-size:12px;color:var(--muted);margin:12px 0 4px"><input type="checkbox" id="gov-sign-all-pages" style="width:16px;height:16px"> Assinar em todas as páginas do documento</label>
        <div style="background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.2);border-radius:8px;padding:10px 12px;font-size:11px;color:var(--muted);line-height:1.5;margin:8px 0">
          🔒 <strong>Assinatura criptográfica real:</strong> ao gerar o PDF, criamos uma chave digital (ECDSA P-256) só para esta assinatura e assinamos o hash SHA-256 do arquivo final. Isso comprova que o documento não foi alterado depois de assinado. Você recebe o PDF assinado + um certificado de verificação — use a ferramenta "Verificar Assinatura Digital" para conferir a qualquer momento.
        </div>
        <button class="btn-exec" onclick="runToolProgress(this,'processGov')">📥 Gerar PDF Assinado</button>
        <button class="btn-sm" onclick="govLogout()" style="width:100%;text-align:center">🔓 Sair / Trocar usuário</button>
      </div>`;
    return;
  }
  if(id===2){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Arquivo <strong>.ofx</strong>:</p><input type="file" id="ofx-file" accept=".ofx,.OFX" class="f-input"><button class="btn-exec" onclick="runToolProgress(this,'processOFX')">📊 Converter para PDF</button>`;return;}
  if(id===3){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Preencha os valores da DRE:</p><div class="grid-2"><div class="f-row"><label class="f-label">Receita Bruta (R$)</label><input type="number" id="dre-rec" value="150000" class="f-input"></div><div class="f-row"><label class="f-label">Deduções/Impostos (R$)</label><input type="number" id="dre-ded" value="18000" class="f-input"></div><div class="f-row"><label class="f-label">Custos de Produção (R$)</label><input type="number" id="dre-cus" value="45000" class="f-input"></div><div class="f-row"><label class="f-label">Despesas Adm. (R$)</label><input type="number" id="dre-des" value="22000" class="f-input"></div></div><button class="btn-exec" onclick="processDRE()">📄 Gerar DRE em PDF</button>`;return;}
  if(id===4){body.innerHTML=`<div class="f-row"><label class="f-label">Pagador</label><input type="text" id="rec-pag" value="Empresa Parceira LTDA" class="f-input"></div><div class="f-row"><label class="f-label">Valor (R$)</label><input type="number" id="rec-val" value="3500" class="f-input"></div><div class="f-row"><label class="f-label">Referente a:</label><input type="text" id="rec-ref" value="Consultoria em Sistemas" class="f-input"></div><button class="btn-exec" onclick="processRecibo()">📄 Emitir Recibo</button>`;return;}
  if(id===5){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione um PDF para comprimir:</p><input type="file" id="comp-pdf" accept="application/pdf" class="f-input"><button class="btn-exec" onclick="runToolProgress(this,'compressPDF')">📦 Comprimir PDF</button>`;return;}
  if(id===6){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione 2+ PDFs para mesclar:</p><input type="file" id="merge-pdfs" accept="application/pdf" multiple class="f-input"><button class="btn-exec" onclick="runToolProgress(this,'mergePDFs')">🔗 Mesclar PDFs</button>`;return;}
  if(id===7){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Adiciona número no rodapé de cada página:</p><input type="file" id="num-pdf" accept="application/pdf" class="f-input"><button class="btn-exec" onclick="runToolProgress(this,'numberPages')">🔢 Numerar Páginas</button>`;return;}
  if(id===8){body.innerHTML=`<div class="f-row"><label class="f-label">PDF:</label><input type="file" id="wm-pdf" accept="application/pdf" class="f-input"></div><div class="f-row"><label class="f-label">Texto da marca d'água:</label><input type="text" id="wm-text" value="CONFIDENCIAL" class="f-input"></div><button class="btn-exec" onclick="runToolProgress(this,'addWatermark')">💧 Aplicar Marca d'Água</button>`;return;}
  if(id===9){body.innerHTML=`<div class="f-row"><label class="f-label">PDF:</label><input type="file" id="rot-pdf" accept="application/pdf" class="f-input"></div><div class="f-row"><label class="f-label">Ângulo de rotação:</label><select id="rot-pdf-deg" class="f-input"><option value="90">90° (sentido horário)</option><option value="180">180°</option><option value="270">270° (anti-horário)</option></select></div><button class="btn-exec" onclick="runToolProgress(this,'rotatePdfPages')">🔄 Girar Páginas e Baixar</button>`;return;}
  if(id===10){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione um PDF para extrair o texto:</p><input type="file" id="extract-pdf" accept="application/pdf" class="f-input" onchange="extractPdfTextTool(this)"><div class="result-box" id="extract-result"></div><button class="btn-sm" id="extract-dl-btn" style="display:none" onclick="dlExtractedText()">⬇️ Baixar .txt</button>`;return;}
  if(id===11){body.innerHTML=`<div class="f-row"><label class="f-label">PDF:</label><input type="file" id="prot-pdf" accept="application/pdf" class="f-input"></div><div class="f-row"><label class="f-label">Senha:</label><input type="password" id="prot-pass" class="f-input" placeholder="Digite uma senha"></div><div style="background:rgba(140,100,178,.07);border:1px solid rgba(140,100,178,.2);border-radius:6px;padding:10px 12px;font-size:11px;color:#b58fd6;line-height:1.5">🔒 Gera um arquivo <strong>.pdf.locked</strong> criptografado com AES-256 (chave derivada da senha via PBKDF2). Para reabrir o PDF original, use a opção "Desbloquear" abaixo com a mesma senha.</div><button class="btn-exec" onclick="runToolProgress(this,'protectPdfFile')">🔒 Proteger PDF</button><div style="margin-top:16px;padding-top:16px;border-top:1px solid var(--border)"><label class="f-label">Já tem um arquivo protegido? Desbloqueie aqui:</label><input type="file" id="unlock-pdf" accept=".locked" class="f-input" style="margin-top:8px"><input type="password" id="unlock-pass" class="f-input" placeholder="Senha" style="margin-top:8px"><button class="btn-sm" onclick="runToolProgress(this,'unlockPdfFile')">🔓 Desbloquear PDF</button></div>`;return;}
  if(id===12){body.innerHTML=`<div class="f-row"><label class="f-label">PDF:</label><input type="file" id="footer-pdf" accept="application/pdf" class="f-input"></div><div class="f-row"><label class="f-label">Texto do rodapé:</label><input type="text" id="footer-text" value="FREDTECHSYSTEMS Converter © 2026 — Documento Confidencial" class="f-input"></div><button class="btn-exec" onclick="runToolProgress(this,'addFooter')">📝 Adicionar Rodapé</button>`;return;}
  if(id===13){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Insere data e hora no canto superior direito:</p><input type="file" id="ts-pdf" accept="application/pdf" class="f-input"><button class="btn-exec" onclick="runToolProgress(this,'addTimestamp')">🕐 Carimbar Data/Hora</button>`;return;}
  if(id===14){body.innerHTML=`<div class="f-row"><label class="f-label">PDF:</label><input type="file" id="split-pdf" accept="application/pdf" class="f-input"></div><div class="grid-2"><div class="f-row"><label class="f-label">Página inicial</label><input type="number" id="split-start" value="1" min="1" class="f-input"></div><div class="f-row"><label class="f-label">Página final</label><input type="number" id="split-end" value="1" min="1" class="f-input"></div></div><button class="btn-exec" onclick="runToolProgress(this,'splitPdfRange')">✂️ Extrair Intervalo de Páginas</button>`;return;}
  if(id===15){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione um PDF para ver propriedades:</p><input type="file" id="prop-pdf" accept="application/pdf" class="f-input" onchange="showPDFProps(this)"><div class="result-box" id="prop-result"></div>`;return;}
  if(id===16){body.innerHTML=`<input type="file" id="resize-img" accept="image/*" class="f-input"><div class="grid-2"><div class="f-row"><label class="f-label">Largura (px)</label><input type="number" id="resize-w" value="800" class="f-input"></div><div class="f-row"><label class="f-label">Altura (px)</label><input type="number" id="resize-h" value="600" class="f-input"></div></div><button class="btn-exec" onclick="runToolProgress(this,'resizeImage')">↔️ Redimensionar</button>`;return;}
  if(id===19){body.innerHTML=`<input type="file" id="gray-img" accept="image/*" class="f-input"><canvas id="gray-preview" style="max-width:100%;border-radius:6px;margin-top:8px;display:none"></canvas><button class="btn-exec" onclick="runToolProgress(this,'toGrayscale')">🖤 Converter para Cinza</button>`;return;}
  if(id===27){body.innerHTML=`<input type="file" id="b64-img" accept="image/*" class="f-input" onchange="toBase64(this)"><div class="f-row" style="margin-top:8px"><label class="f-label">Base64:</label><textarea id="b64-result" class="f-textarea" readonly></textarea><button class="btn-sm" onclick="copyB64()">📋 Copiar</button></div>`;return;}
  if(id===28){body.innerHTML=`<div class="grid-2"><div class="f-row"><label class="f-label">Capital Inicial (R$)</label><input type="number" id="jc-cap" value="10000" class="f-input"></div><div class="f-row"><label class="f-label">Taxa Mensal (%)</label><input type="number" id="jc-taxa" value="1.0" step="0.01" class="f-input"></div><div class="f-row"><label class="f-label">Período (meses)</label><input type="number" id="jc-per" value="24" class="f-input"></div><div class="f-row"><label class="f-label">Aporte Mensal (R$)</label><input type="number" id="jc-aporte" value="500" class="f-input"></div></div><button class="btn-exec" onclick="calcJuros()">📈 Calcular</button><div class="result-box" id="jc-result"></div>`;return;}
  if(id===29){body.innerHTML=`<div class="f-row"><label class="f-label">Conteúdo:</label><input type="text" id="qr-text" value="https://fgaholding.com.br" class="f-input"></div><button class="btn-exec" onclick="genQR()">🔲 Gerar QR Code</button><canvas id="qr-canvas" style="display:none;margin:0 auto"></canvas><button class="btn-sm" id="qr-dl" style="display:none" onclick="dlQR()">⬇️ Baixar QR</button>`;return;}
  if(id===30){body.innerHTML=`<div class="f-row"><label class="f-label">CPF:</label><input type="text" id="cpf-input" class="f-input" placeholder="000.000.000-00" maxlength="14"></div><button class="btn-exec" onclick="validarCPF()">✅ Validar CPF</button><div class="result-box" id="cpf-result"></div>`;return;}
  if(id===31){body.innerHTML=`<div class="f-row"><label class="f-label">CNPJ:</label><input type="text" id="cnpj-input" class="f-input" placeholder="00.000.000/0001-00" maxlength="18"></div><button class="btn-exec" onclick="validarCNPJ()">✅ Validar CNPJ</button><div class="result-box" id="cnpj-result"></div>`;return;}
  if(id===32){body.innerHTML=`<div class="grid-2"><div class="f-row"><label class="f-label">Valor (R$)</label><input type="number" id="icms-val" value="1000" class="f-input"></div><div class="f-row"><label class="f-label">Alíquota (%)</label><input type="number" id="icms-aliq" value="12" step="0.5" class="f-input"></div></div><button class="btn-exec" onclick="calcICMS()">🧮 Calcular ICMS</button><div class="result-box" id="icms-result"></div>`;return;}
  if(id===33){body.innerHTML=`<div class="grid-2"><div class="f-row"><label class="f-label">Valor</label><input type="number" id="cur-val" value="1000" class="f-input"></div><div class="f-row"><label class="f-label">Taxa (1 USD = R$)</label><input type="number" id="cur-rate" value="5.75" step="0.01" class="f-input"></div></div><button class="btn-exec" onclick="calcMoeda()">💱 Converter</button><div class="result-box" id="cur-result"></div>`;return;}
  if(id===34){body.innerHTML=`<div class="grid-2"><div class="f-row"><label class="f-label">Preço (R$)</label><input type="number" id="desc-preco" value="500" class="f-input"></div><div class="f-row"><label class="f-label">Desconto (%)</label><input type="number" id="desc-perc" value="15" class="f-input"></div></div><button class="btn-exec" onclick="calcDesconto()">🏷️ Calcular</button><div class="result-box" id="desc-result"></div>`;return;}
  if(id===41){body.innerHTML=`<div class="f-row"><label class="f-label">Salário Bruto (R$)</label><input type="number" id="inss-sal" value="3500" class="f-input"></div><button class="btn-exec" onclick="calcINSS()">🧮 Calcular INSS 2026</button><div class="result-box" id="inss-result"></div>`;return;}
  if(id===42){body.innerHTML=`<div class="f-row"><label class="f-label">Salário Bruto (R$)</label><input type="number" id="irrf-sal" value="5000" class="f-input"></div><div class="f-row"><label class="f-label">Dependentes</label><input type="number" id="irrf-dep" value="0" class="f-input"></div><button class="btn-exec" onclick="calcIRRF()">🧮 Calcular IRRF</button><div class="result-box" id="irrf-result"></div>`;return;}
  if(id===43){body.innerHTML=`<div class="grid-2"><div class="f-row"><label class="f-label">Comprimento</label><input type="number" id="pw-len" value="16" min="8" max="64" class="f-input"></div><div class="f-row"><label class="f-label">Tipo</label><select id="pw-type" class="f-input"><option value="all">Letras + Números + Símbolos</option><option value="alphanum">Letras + Números</option><option value="alpha">Só Letras</option><option value="num">Só Números</option></select></div></div><button class="btn-exec" onclick="genSenha()">🔑 Gerar Senha</button><div class="result-box" id="pw-result"></div>`;return;}
  if(id===47){body.innerHTML=`<div class="grid-2"><div class="f-row"><label class="f-label">Valor Financiado (R$)</label><input type="number" id="fin-val" value="100000" class="f-input"></div><div class="f-row"><label class="f-label">Taxa Mensal (%)</label><input type="number" id="fin-taxa" value="1.2" step="0.01" class="f-input"></div><div class="f-row"><label class="f-label">Prazo (meses)</label><input type="number" id="fin-prazo" value="60" class="f-input"></div><div class="f-row"><label class="f-label">Sistema</label><select id="fin-sys" class="f-input"><option value="price">Tabela Price</option><option value="sac">SAC</option></select></div></div><button class="btn-exec" onclick="calcFinanciamento()">📊 Calcular Parcelas</button><div class="result-box" id="fin-result"></div>`;return;}
  if(id===48){body.innerHTML=`<div class="f-row"><label class="f-label">Salário Bruto (R$)</label><input type="number" id="fp-sal" value="4500" class="f-input"></div><div class="f-row"><label class="f-label">Dependentes IRRF</label><input type="number" id="fp-dep" value="1" class="f-input"></div><button class="btn-exec" onclick="calcFolha()">📋 Calcular Holerite</button><div class="result-box" id="fp-result"></div>`;return;}
  if(id===67){body.innerHTML=`<div class="grid-2"><div class="f-row"><label class="f-label">Investimento (R$)</label><input type="number" id="roi-inv" value="50000" class="f-input"></div><div class="f-row"><label class="f-label">Retorno (R$)</label><input type="number" id="roi-ret" value="75000" class="f-input"></div><div class="f-row"><label class="f-label">Período (meses)</label><input type="number" id="roi-per" value="12" class="f-input"></div></div><button class="btn-exec" onclick="calcROI()">📈 Calcular ROI</button><div class="result-box" id="roi-result"></div>`;return;}

  // ── IMAGEM (ferramentas faltantes) ──
  if(id===17){body.innerHTML=`<div class="f-row"><label class="f-label">Selecione a imagem:</label><input type="file" id="conv-img" accept="image/*" class="f-input"></div><div class="f-row"><label class="f-label">Formato de saída:</label><select id="conv-fmt" class="f-input"><option value="image/png">PNG</option><option value="image/jpeg">JPG</option><option value="image/webp">WebP</option></select></div><div id="conv-q-wrap" class="f-row" style="display:none"><label class="f-label">Qualidade JPG (1-100):</label><input type="number" id="conv-q" value="92" min="1" max="100" class="f-input"></div><button class="btn-exec" onclick="runToolProgress(this,'convertImgFmt')">🔄 Converter e Baixar</button>`;
    document.getElementById('conv-fmt').onchange=function(){document.getElementById('conv-q-wrap').style.display=this.value==='image/jpeg'?'flex':'none';};return;}
  if(id===18){body.innerHTML=`<div class="f-row"><label class="f-label">Selecione a imagem JPG:</label><input type="file" id="comp-img" accept="image/jpeg,image/jpg" class="f-input"></div><div class="f-row"><label class="f-label">Qualidade (1–100, menor = mais comprimido):</label><input type="range" id="comp-q" min="1" max="99" value="70" oninput="document.getElementById('comp-q-val').textContent=this.value"><span id="comp-q-val" style="font-size:13px;color:var(--gold);font-weight:700">70</span></div><button class="btn-exec" onclick="runToolProgress(this,'compressImg')">📦 Comprimir e Baixar</button>`;return;}
  if(id===20){body.innerHTML=`<div class="f-row"><label class="f-label">Selecione a imagem:</label><input type="file" id="inv-img" accept="image/*" class="f-input"></div><canvas id="inv-prev" style="max-width:100%;border-radius:6px;margin-top:8px;display:none"></canvas><button class="btn-exec" onclick="runToolProgress(this,'invertImg')">🔲 Inverter Cores e Baixar</button>`;return;}
  if(id===21){body.innerHTML=`<div class="f-row"><label class="f-label">Selecione a imagem:</label><input type="file" id="rot-img" accept="image/*" class="f-input"></div><div class="f-row"><label class="f-label">Ângulo de rotação:</label><select id="rot-deg" class="f-input"><option value="90">90° (sentido horário)</option><option value="180">180°</option><option value="270">270° (anti-horário)</option></select></div><button class="btn-exec" onclick="runToolProgress(this,'rotateImg')">🔄 Rotacionar e Baixar</button>`;return;}
  if(id===22){body.innerHTML=`<div class="f-row"><label class="f-label">Selecione a imagem:</label><input type="file" id="mir-img" accept="image/*" class="f-input"></div><div class="f-row"><label class="f-label">Direção:</label><select id="mir-dir" class="f-input"><option value="h">Horizontal (espelho)</option><option value="v">Vertical (virar)</option></select></div><button class="btn-exec" onclick="runToolProgress(this,'mirrorImg')">↔️ Espelhar e Baixar</button>`;return;}
  if(id===23){body.innerHTML=`<div class="f-row"><label class="f-label">Selecione a imagem:</label><input type="file" id="brd-img" accept="image/*" class="f-input"></div><div class="grid-2"><div class="f-row"><label class="f-label">Cor da borda:</label><input type="color" id="brd-color" value="#3fae8f" class="f-input" style="height:42px"></div><div class="f-row"><label class="f-label">Espessura (px):</label><input type="number" id="brd-size" value="20" class="f-input"></div></div><button class="btn-exec" onclick="runToolProgress(this,'addBorder')">🖼️ Adicionar Borda e Baixar</button>`;return;}
  if(id===24){body.innerHTML=`<div class="f-row"><label class="f-label">Selecione a imagem:</label><input type="file" id="thumb-img" accept="image/*" class="f-input"></div><div class="grid-2"><div class="f-row"><label class="f-label">Largura máx. (px):</label><input type="number" id="thumb-w" value="300" class="f-input"></div><div class="f-row"><label class="f-label">Altura máx. (px):</label><input type="number" id="thumb-h" value="300" class="f-input"></div></div><button class="btn-exec" onclick="runToolProgress(this,'genThumbnail')">🖼️ Gerar Miniatura</button>`;return;}
  if(id===25){body.innerHTML=`<div class="f-row"><label class="f-label">Selecione a imagem:</label><input type="file" id="wmi-img" accept="image/*" class="f-input"></div><div class="f-row"><label class="f-label">Texto da marca d'água:</label><input type="text" id="wmi-txt" value="FREDTECHSYSTEMS CONVERTER" class="f-input"></div><div class="grid-2"><div class="f-row"><label class="f-label">Cor do texto:</label><input type="color" id="wmi-color" value="#ffffff" class="f-input" style="height:42px"></div><div class="f-row"><label class="f-label">Opacidade (%):</label><input type="number" id="wmi-op" value="40" min="5" max="100" class="f-input"></div></div><button class="btn-exec" onclick="runToolProgress(this,'watermarkImg')">💧 Aplicar e Baixar</button>`;return;}
  if(id===26){body.innerHTML=`<div class="f-row"><label class="f-label">Selecione a imagem:</label><input type="file" id="txt-img" accept="image/*" class="f-input"></div><div class="f-row"><label class="f-label">Texto a inserir:</label><input type="text" id="txt-text" value="FREDTECHSYSTEMS Converter 2026" class="f-input"></div><div class="grid-2"><div class="f-row"><label class="f-label">Tamanho da fonte (px):</label><input type="number" id="txt-size" value="32" class="f-input"></div><div class="f-row"><label class="f-label">Cor:</label><input type="color" id="txt-color" value="#ffffff" class="f-input" style="height:42px"></div><div class="f-row"><label class="f-label">Posição X (px):</label><input type="number" id="txt-x" value="20" class="f-input"></div><div class="f-row"><label class="f-label">Posição Y (px):</label><input type="number" id="txt-y" value="40" class="f-input"></div></div><button class="btn-exec" onclick="runToolProgress(this,'addTextImg')">✍️ Adicionar Texto e Baixar</button>`;return;}

  // ── CONVERSORES (ferramentas faltantes) ──
  if(id===35){body.innerHTML=`<div class="f-row"><label class="f-label">Número EAN-13 (13 dígitos):</label><input type="text" id="ean-num" class="f-input" placeholder="7891234567890" maxlength="13" value="7891234567890"></div><button class="btn-exec" onclick="genBarcode()">📊 Gerar Código de Barras</button><canvas id="ean-canvas" style="display:block;margin:12px auto;background:#fff;border-radius:4px"></canvas><button class="btn-sm" id="ean-dl" style="display:none" onclick="dlEAN()">⬇️ Baixar PNG</button>`;return;}
  if(id===36){body.innerHTML=`<div class="grid-2"><div class="f-row"><label class="f-label">Data Inicial:</label><input type="date" id="pz-inicio" class="f-input"></div><div class="f-row"><label class="f-label">Data Final:</label><input type="date" id="pz-fim" class="f-input"></div></div><div class="f-row"><label class="f-label">Contar:</label><select id="pz-tipo" class="f-input"><option value="uteis">Dias Úteis (seg–sex)</option><option value="corridos">Dias Corridos</option></select></div><button class="btn-exec" onclick="calcPrazo()">📅 Calcular Prazo</button><div class="result-box" id="pz-result"></div>`;
    const hoje=new Date().toISOString().split('T')[0];document.getElementById('pz-inicio').value=hoje;document.getElementById('pz-fim').value=hoje;return;}
  if(id===37){body.innerHTML=`<div class="f-row"><label class="f-label">Categoria:</label><select id="un-cat" class="f-input" onchange="updateUnitSels()"><option value="peso">Peso</option><option value="dist">Distância</option><option value="vol">Volume</option><option value="temp">Temperatura</option><option value="area">Área</option></select></div><div class="grid-2"><div class="f-row"><label class="f-label">Valor:</label><input type="number" id="un-val" value="1" step="any" class="f-input"></div><div></div><div class="f-row"><label class="f-label">De:</label><select id="un-de" class="f-input"></select></div><div class="f-row"><label class="f-label">Para:</label><select id="un-para" class="f-input"></select></div></div><button class="btn-exec" onclick="convertUnit()">🔄 Converter</button><div class="result-box" id="un-result"></div>`;setTimeout(updateUnitSels,50);return;}
  if(id===38){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione o arquivo CNAB 240 para interpretação:</p><input type="file" id="cnab-file" accept=".txt,.ret,.rem,.cnab" class="f-input"><button class="btn-exec" onclick="parseCNAB()">📋 Interpretar CNAB 240</button><div class="result-box" id="cnab-result"></div>`;return;}
  if(id===39){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione o XML de Nota Fiscal Eletrônica:</p><input type="file" id="nfe-file" accept=".xml" class="f-input"><button class="btn-exec" onclick="parseNFe()">📄 Extrair Dados da NF-e</button><div class="result-box" id="nfe-result"></div>`;return;}
  if(id===40){body.innerHTML=`<div class="grid-2"><div class="f-row"><label class="f-label">Receita Bruta (R$):</label><input type="number" id="pc-rec" value="100000" class="f-input"></div><div class="f-row"><label class="f-label">Regime:</label><select id="pc-reg" class="f-input"><option value="nao_cumulativo">Não Cumulativo</option><option value="cumulativo">Cumulativo</option></select></div></div><button class="btn-exec" onclick="calcPISCOFINS()">🧮 Calcular PIS/COFINS</button><div class="result-box" id="pc-result"></div>`;return;}

  // ── CONTABILIDADE ÚTIL (calculadoras essenciais) ──
  if(id===46){body.innerHTML=`<div class="grid-2">
    <div class="f-row"><label class="f-label">Valor do Bem (R$)</label><input type="number" id="dep-val" value="50000" class="f-input"></div>
    <div class="f-row"><label class="f-label">Valor Residual (R$)</label><input type="number" id="dep-res" value="5000" class="f-input"></div>
    <div class="f-row"><label class="f-label">Vida Útil (anos)</label><input type="number" id="dep-anos" value="10" class="f-input"></div>
    <div class="f-row"><label class="f-label">Método</label><select id="dep-met" class="f-input"><option value="linear">Linear (Quotas Constantes)</option><option value="sd">Soma dos Dígitos</option></select></div>
  </div><button class="btn-exec" onclick="calcDep()">📉 Calcular Depreciação</button><div class="result-box" id="dep-result"></div>`;return;}
  if(id===49){body.innerHTML=`<div class="grid-2">
    <div class="f-row"><label class="f-label">Salário Bruto (R$)</label><input type="number" id="fg-sal" value="3500" class="f-input"></div>
    <div class="f-row"><label class="f-label">Meses Trabalhados</label><input type="number" id="fg-meses" value="24" class="f-input"></div>
    <div class="f-row"><label class="f-label">Motivo de Saída</label><select id="fg-motivo" class="f-input"><option value="sem_justa">Sem justa causa</option><option value="justa">Justa causa</option><option value="pedido">Pedido de demissão</option></select></div>
  </div><button class="btn-exec" onclick="calcFGTS()">💰 Calcular FGTS e Rescisão</button><div class="result-box" id="fg-result"></div>`;return;}
  if(id===64){body.innerHTML=`<div class="grid-2">
    <div class="f-row"><label class="f-label">Receita Bruta Anual (R$)</label><input type="number" id="sn-rec" value="500000" class="f-input"></div>
    <div class="f-row"><label class="f-label">Anexo do Simples Nacional</label><select id="sn-anx" class="f-input"><option value="1">Anexo I — Comércio</option><option value="2">Anexo II — Indústria</option><option value="3">Anexo III — Serviços</option><option value="4">Anexo IV — Serviços (excl.)</option><option value="5">Anexo V — Serviços (alto fator R)</option></select></div>
  </div><button class="btn-exec" onclick="calcSN()">🧮 Calcular Simples Nacional</button><div class="result-box" id="sn-result"></div>`;return;}
  if(id===68){body.innerHTML=`<div class="grid-2">
    <div class="f-row"><label class="f-label">Nome Completo</label><input type="text" id="ir-nome" value="Frederico Goulart Abreu" class="f-input"></div>
    <div class="f-row"><label class="f-label">CPF</label><input type="text" id="ir-cpf" value="000.000.000-00" class="f-input"></div>
    <div class="f-row"><label class="f-label">Ano-Calendário</label><input type="number" id="ir-ano" value="2025" class="f-input"></div>
    <div class="f-row"><label class="f-label">Rendimento Tributável (R$)</label><input type="number" id="ir-rt" value="72000" class="f-input"></div>
    <div class="f-row"><label class="f-label">IRRF Retido na Fonte (R$)</label><input type="number" id="ir-retido" value="8500" class="f-input"></div>
    <div class="f-row"><label class="f-label">Deduções (previdência, dep.) (R$)</label><input type="number" id="ir-ded" value="6000" class="f-input"></div>
  </div><button class="btn-exec" onclick="runToolProgress(this,'gerarInformeIR')">📄 Gerar Informe de Rendimentos PDF</button>`;return;}

  // ── EDITOR DE TEXTO ──
  if(id===75){body.innerHTML=`<div class="f-row"><label class="f-label">Cole ou digite seu texto:</label><textarea id="edt-input" class="f-textarea" style="min-height:160px" placeholder="Digite ou cole seu texto aqui..."></textarea></div>
    <div class="grid-2" style="gap:8px">
      <button class="btn-sm" onclick="edtTransform('upper')">🔠 MAIÚSCULAS</button>
      <button class="btn-sm" onclick="edtTransform('lower')">🔡 minúsculas</button>
      <button class="btn-sm" onclick="edtTransform('capitalize')">🔤 Capitalizar Frases</button>
      <button class="btn-sm" onclick="edtTransform('title')">🔤 Cada Palavra Maiúscula</button>
      <button class="btn-sm" onclick="edtTransform('trim')">✂️ Remover Espaços Extras</button>
      <button class="btn-sm" onclick="edtTransform('noaccent')">🅰️ Remover Acentos</button>
      <button class="btn-sm" onclick="edtTransform('reverse')">🔁 Inverter Texto</button>
      <button class="btn-sm" onclick="edtTransform('clean')">🧹 Remover Linhas Vazias</button>
    </div>
    <div class="f-row" style="margin-top:10px"><label class="f-label">Resultado:</label><textarea id="edt-output" class="f-textarea" style="min-height:140px" readonly></textarea></div>
    <div class="result-box show" id="edt-stats" style="margin-top:8px"></div>
    <div class="grid-2" style="gap:8px;margin-top:8px">
      <button class="btn-sm" onclick="edtCopy()">📋 Copiar Resultado</button>
      <button class="btn-sm" onclick="edtDownload()">⬇️ Baixar .txt</button>
    </div>`;
    document.getElementById('edt-input').addEventListener('input', edtUpdateStats);
    edtUpdateStats();
    return;}

  // ── GERADOR DE PLANILHAS ──
  if(id===76){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Monte sua tabela linha por linha e gere uma planilha .xlsx real:</p>
    <div class="f-row"><label class="f-label">Nome da planilha</label><input type="text" id="gp-nome" class="f-input" value="Minha Planilha"></div>
    <div class="f-row"><label class="f-label">Cabeçalho (colunas separadas por vírgula)</label><input type="text" id="gp-header" class="f-input" value="Item, Quantidade, Valor Unitário, Total"></div>
    <div id="gp-rows"><div class="grid-2" style="gap:6px"><input type="text" class="f-input gp-cell" placeholder="Coluna 1"><input type="text" class="f-input gp-cell" placeholder="Coluna 2"><input type="text" class="f-input gp-cell" placeholder="Coluna 3"><input type="text" class="f-input gp-cell" placeholder="Coluna 4"></div></div>
    <button class="btn-sm" onclick="addGPRow()">+ Adicionar Linha</button>
    <button class="btn-exec" onclick="runToolProgress(this,'gerarPlanilha')">📊 Gerar Planilha .xlsx</button>
    <div class="result-box" id="gp-result"></div>`;return;}

  if(id===77){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione uma ou mais imagens (JPG/PNG) e arraste os cartões para reordenar as páginas do PDF:</p>
    <input type="file" id="i2p-imgs" accept="image/*" multiple class="f-input" style="display:none">
    <div class="i2p-toolbar">
      <button type="button" class="btn-sm" onclick="document.getElementById('i2p-imgs').click()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg> Adicionar imagens</button>
      <button type="button" class="btn-sm" onclick="i2pClearAll()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m2 0-1 14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1L5 6"/></svg> Limpar tudo</button>
    </div>
    <div id="i2p-organizer" class="i2p-organizer"></div>
    <div style="margin-top:14px;padding-top:14px;border-top:1px solid var(--border)">
      <label class="f-label" style="margin-bottom:10px;display:block">Opções de imagem para PDF</label>
      <div class="grid-2">
        <div class="f-row"><label class="f-label">Orientação da página</label><select id="i2p-orient" class="f-input"><option value="retrato">Retrato</option><option value="paisagem">Paisagem</option></select></div>
        <div class="f-row"><label class="f-label">Tamanho da página</label><select id="i2p-size" class="f-input"><option value="fit">Adaptar (mesma dimensão da imagem)</option><option value="a4">A4 (297 x 210 mm)</option><option value="letter">US Letter (215.9 x 279.4 mm)</option></select></div>
      </div>
      <div class="f-row"><label class="f-label">Margem</label><select id="i2p-margin" class="f-input"><option value="none">Sem margem</option><option value="small">Pequena</option><option value="big">Grande</option></select></div>
      <label style="display:flex;align-items:center;gap:8px;font-size:12px;color:var(--muted);margin:8px 0 4px"><input type="checkbox" id="i2p-merge" checked style="width:16px;height:16px"> Mesclar todas as imagens em um único arquivo PDF</label>
    </div>
    <button class="btn-exec" onclick="runToolProgress(this,'imagesToPdf')">Converter para PDF</button>`;
    i2pFiles=[];i2pRender();
    document.getElementById('i2p-imgs').addEventListener('change',function(){
      i2pAddFiles(this.files);
      this.value='';
    });
    return;}

  if(id===78){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione um PDF para exportar cada página como imagem JPG:</p><input type="file" id="p2i-pdf" accept="application/pdf" class="f-input"><button class="btn-exec" onclick="runToolProgress(this,'pdfToImages')">🖼️ Converter e Baixar .zip</button><div class="result-box" id="p2i-result"></div>`;return;}
  if(id===79){body.innerHTML=`<div class="grid-2"><div class="f-row"><label class="f-label">Peso (kg)</label><input type="number" id="imc-peso" value="70" class="f-input"></div><div class="f-row"><label class="f-label">Altura (m)</label><input type="number" id="imc-alt" value="1.70" step="0.01" class="f-input"></div></div><button class="btn-exec" onclick="calcIMC()">⚖️ Calcular IMC</button><div class="result-box" id="imc-result"></div>`;return;}
  if(id===80){body.innerHTML=`<div class="f-row"><label class="f-label">Data de nascimento</label><input type="date" id="idade-nasc" class="f-input"></div><button class="btn-exec" onclick="calcIdade()">🎂 Calcular Idade</button><div class="result-box" id="idade-result"></div>`;return;}
  if(id===81){body.innerHTML=`<div class="f-row"><label class="f-label">Data</label><input type="date" id="ext-data" class="f-input"></div><button class="btn-exec" onclick="dataPorExtenso()">🖊️ Converter</button><div class="result-box" id="ext-result"></div>`;return;}
  if(id===82){body.innerHTML=`<div class="f-row"><label class="f-label">Cor HEX</label><input type="text" id="cor-hex" value="#6366F1" class="f-input" oninput="corFromHex()"></div><div class="grid-2"><div class="f-row"><label class="f-label">R</label><input type="number" id="cor-r" value="99" min="0" max="255" class="f-input" oninput="corFromRgb()"></div><div class="f-row"><label class="f-label">G</label><input type="number" id="cor-g" value="102" min="0" max="255" class="f-input" oninput="corFromRgb()"></div><div class="f-row"><label class="f-label">B</label><input type="number" id="cor-b" value="241" min="0" max="255" class="f-input" oninput="corFromRgb()"></div></div><div id="cor-preview" style="width:100%;height:60px;border-radius:8px;border:1px solid var(--border);margin-top:10px;background:#6366F1"></div><div class="result-box" id="cor-result" style="margin-top:10px"></div>`;
    requestAnimationFrame(()=>corFromHex());return;}
  if(id===83){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Digite um item por linha:</p><div class="f-row"><label class="f-label">Título da lista</label><input type="text" id="todo-titulo" class="f-input" value="Lista de Tarefas"></div><div class="f-row"><label class="f-label">Itens</label><textarea id="todo-itens" class="f-textarea" style="min-height:140px" placeholder="Ex:\nComprar material\nRevisar contrato\nEnviar orçamento"></textarea></div><button class="btn-exec" onclick="runToolProgress(this,'gerarTodoPdf')">✅ Gerar PDF da Checklist</button>`;return;}
  if(id===84){body.innerHTML=`<div class="grid-2"><div class="f-row"><label class="f-label">Salário Bruto (R$)</label><input type="number" id="d13-sal" value="3000" class="f-input"></div><div class="f-row"><label class="f-label">Meses trabalhados no ano</label><input type="number" id="d13-meses" value="12" min="1" max="12" class="f-input"></div></div><button class="btn-exec" onclick="calc13Salario()">🎁 Calcular 13º</button><div class="result-box" id="d13-result"></div>`;return;}
  if(id===85){body.innerHTML=`<div class="grid-2"><div class="f-row"><label class="f-label">Salário Bruto (R$)</label><input type="number" id="fer-sal" value="3000" class="f-input"></div><div class="f-row"><label class="f-label">Dias de férias</label><input type="number" id="fer-dias" value="30" min="1" max="30" class="f-input"></div></div><label style="display:flex;align-items:center;gap:8px;font-size:12px;color:var(--muted);margin:6px 0 10px"><input type="checkbox" id="fer-vender" style="width:16px;height:16px"> Vender 1/3 das férias (abono pecuniário)</label><button class="btn-exec" onclick="calcFerias()">🏖️ Calcular Férias</button><div class="result-box" id="fer-result"></div>`;return;}
  if(id===86){body.innerHTML=`<div class="grid-2"><div class="f-row"><label class="f-label">Horário (24h)</label><input type="time" id="fuso-hora" class="f-input" value="12:00"></div><div class="f-row"><label class="f-label">Fuso de origem</label><select id="fuso-origem" class="f-input"></select></div></div><button class="btn-exec" onclick="calcFuso()">🌍 Converter Fuso</button><div class="result-box" id="fuso-result"></div>`;
    const zonas=[['America/Sao_Paulo','Brasília (BRT) UTC-3'],['America/New_York','Nova York (EUA) UTC-5'],['America/Los_Angeles','Los Angeles (EUA) UTC-8'],['Europe/Lisbon','Lisboa (Portugal) UTC+0'],['Europe/London','Londres (Reino Unido) UTC+0'],['Europe/Paris','Paris (França) UTC+1'],['Asia/Tokyo','Tóquio (Japão) UTC+9'],['Asia/Shanghai','Xangai (China) UTC+8'],['Australia/Sydney','Sydney (Austrália) UTC+11']];
    document.getElementById('fuso-origem').innerHTML=zonas.map(z=>`<option value="${z[0]}">${z[1]}</option>`).join('');
    return;}
  if(id===87){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione um PDF de extrato bancário — as linhas com data e valor serão reconhecidas automaticamente:</p><input type="file" id="p2o-pdf" accept="application/pdf" class="f-input" onchange="pdfToOfxPreview(this)"><div class="result-box" id="p2o-result"></div><button class="btn-exec" id="p2o-dl-btn" style="display:none" onclick="downloadPdfToOfx()">💾 Baixar arquivo .OFX</button><div style="background:rgba(140,100,178,.07);border:1px solid rgba(140,100,178,.2);border-radius:6px;padding:10px 12px;font-size:11px;color:#b58fd6;line-height:1.5;margin-top:10px">⚠️ Extração heurística baseada no texto do PDF. Revise as transações e o arquivo .ofx antes de importar no seu sistema financeiro.</div>`;return;}

  if(id===88){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione um arquivo CSV:</p><input type="file" id="c2x-file" accept=".csv,text/csv" class="f-input"><label style="display:flex;align-items:center;gap:8px;font-size:12px;color:var(--muted);margin:10px 0"><input type="checkbox" id="c2x-header" checked style="width:16px;height:16px"> Primeira linha é cabeçalho</label><button class="btn-exec" onclick="runToolProgress(this,'csvToExcel')">Converter para Excel</button><div class="result-box" id="c2x-result"></div>`;return;}
  if(id===89){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione uma planilha .xlsx (primeira aba será usada):</p><input type="file" id="x2c-file" accept=".xlsx" class="f-input"><button class="btn-exec" onclick="runToolProgress(this,'excelToCsv')">Converter para CSV</button><div class="result-box" id="x2c-result"></div>`;return;}
  if(id===90){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Cole uma lista de objetos JSON (array):</p><textarea id="j2x-input" class="f-textarea" style="min-height:180px;font-family:monospace;font-size:12px" placeholder='[{"nome":"Ana","idade":30},{"nome":"Bruno","idade":25}]'></textarea><button class="btn-exec" onclick="runToolProgress(this,'jsonToExcel')">Converter para Excel</button><div class="result-box" id="j2x-result"></div>`;return;}
  if(id===91){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione uma planilha .xlsx (primeira aba será usada):</p><input type="file" id="x2j-file" accept=".xlsx" class="f-input"><button class="btn-exec" onclick="runToolProgress(this,'excelToJson')">Converter para JSON</button><div class="result-box" id="x2j-result" style="max-height:300px;overflow:auto;white-space:pre-wrap;font-family:monospace;font-size:11px"></div><button class="btn-sm" id="x2j-dl-btn" style="display:none;width:100%;margin-top:8px" onclick="downloadJsonResult()">Baixar .json</button>`;return;}
  if(id===92){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Escreva em Markdown (# título, ## subtítulo, **negrito**, *itálico*, - listas, \`código\`, > citação):</p><textarea id="md2p-input" class="f-textarea" style="min-height:220px;font-family:monospace;font-size:12px" placeholder="# Meu documento

## Introdução
Texto **importante** e *em itálico*.

- Item 1
- Item 2

> Uma citação"></textarea><button class="btn-exec" onclick="runToolProgress(this,'markdownToPdf')">Gerar PDF</button>`;return;}
  if(id===93){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Cole o HTML (com estilos inline ou &lt;style&gt;) que deseja transformar em PDF:</p><textarea id="h2p-input" class="f-textarea" style="min-height:200px;font-family:monospace;font-size:12px" placeholder="<div style=&quot;font-family:sans-serif;padding:20px&quot;><h1>Título</h1><p>Um parágrafo de exemplo.</p></div>"></textarea><button class="btn-exec" onclick="runToolProgress(this,'htmlToPdf')">Gerar PDF</button><div style="background:rgba(140,100,178,.07);border:1px solid rgba(140,100,178,.2);border-radius:6px;padding:10px 12px;font-size:11px;color:#b58fd6;line-height:1.5;margin-top:10px">Observação: o PDF é gerado como uma imagem de alta resolução da página renderizada — visual fiel, mas o texto não é selecionável.</div>`;return;}
  if(id===94){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione um arquivo SVG:</p><input type="file" id="s2p-file" accept=".svg,image/svg+xml" class="f-input"><div class="f-row"><label class="f-label">Escala</label><select id="s2p-scale" class="f-input"><option value="1">1x</option><option value="2" selected>2x</option><option value="4">4x</option><option value="8">8x</option></select></div><button class="btn-exec" onclick="runToolProgress(this,'svgToPng')">Converter para PNG</button>`;return;}
  if(id===95){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione uma imagem contendo um QR Code:</p><input type="file" id="qrr-file" accept="image/*" class="f-input" onchange="lerQrCode(this)"><div class="result-box" id="qrr-result"></div>`;return;}
  if(id===96){body.innerHTML=`<div class="grid-2"><div class="f-row"><label class="f-label">PDF A</label><input type="file" id="cmp-pdf-a" accept="application/pdf" class="f-input"></div><div class="f-row"><label class="f-label">PDF B</label><input type="file" id="cmp-pdf-b" accept="application/pdf" class="f-input"></div></div><button class="btn-exec" onclick="runToolProgress(this,'compararPdfs')">Comparar</button><div class="result-box" id="cmp-result" style="max-height:340px;overflow:auto"></div>`;return;}
  if(id===97){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione o PDF — as páginas aparecem abaixo para você arrastar, reordenar ou excluir:</p><input type="file" id="org-pdf" accept="application/pdf" class="f-input" onchange="orgLoadPdf(this)"><div class="org-pages-grid" id="org-pages-grid"></div><button class="btn-exec" id="org-save-btn" style="display:none" onclick="orgSavePdf()">Salvar PDF reorganizado</button>`;return;}
  if(id===98){body.innerHTML=`<div class="f-row"><label class="f-label">Texto</label><textarea id="tts-input" class="f-textarea" style="min-height:160px" placeholder="Digite ou cole o texto que deseja ouvir..."></textarea></div><div class="grid-2"><div class="f-row"><label class="f-label">Voz</label><select id="tts-voice" class="f-input"></select></div><div class="f-row"><label class="f-label">Velocidade</label><input type="range" id="tts-rate" min="0.5" max="2" step="0.1" value="1" style="width:100%"></div></div><div style="display:flex;gap:8px;margin-top:8px"><button class="btn-exec" style="flex:1" onclick="ttsPlay()">▶ Ouvir</button><button class="btn-sm" onclick="ttsPause()">⏸ Pausar</button><button class="btn-sm" onclick="ttsStop()">⏹ Parar</button></div><p style="font-size:11px;color:var(--dim);margin-top:10px">Usa as vozes já instaladas no seu navegador/sistema — a lista varia por dispositivo.</p>`;
    requestAnimationFrame(populateTtsVoices);
    return;}
  if(id===99){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Clique em "Iniciar" e fale — a transcrição aparece abaixo em tempo real. Funciona apenas em navegadores baseados em Chromium (Chrome, Edge).</p><div style="display:flex;gap:8px;margin-bottom:10px"><button class="btn-exec" style="flex:1" id="stt-start-btn" onclick="sttStart()">🎙 Iniciar</button><button class="btn-sm" onclick="sttStop()">⏹ Parar</button></div><textarea id="stt-output" class="f-textarea" style="min-height:180px" placeholder="A transcrição aparece aqui..."></textarea><button class="btn-sm" style="width:100%;margin-top:8px" onclick="sttDownload()">Baixar .txt</button>`;return;}
  if(id===100){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione uma foto ou imagem escaneada — o texto será reconhecido inteiramente no seu navegador (nada é enviado a servidores):</p><input type="file" id="ocr-img-file" accept="image/*" class="f-input"><div class="f-row"><label class="f-label">Idioma do texto</label><select id="ocr-img-lang" class="f-input"><option value="por">Português</option><option value="eng">Inglês</option><option value="spa">Espanhol</option></select></div><button class="btn-exec" onclick="ocrImageToText()">🔎 Reconhecer Texto</button><div class="tool-prog" id="ocr-img-prog" style="display:none"><div class="tool-prog-top"><span id="ocr-img-prog-label">Carregando OCR…</span><span id="ocr-img-prog-pct">0%</span></div><div class="tool-prog-track"><div class="tool-prog-bar" id="ocr-img-prog-bar" style="width:0%"></div></div></div><textarea id="ocr-img-output" class="f-textarea" style="min-height:180px;display:none" placeholder="O texto reconhecido aparece aqui..."></textarea><button class="btn-sm" id="ocr-img-dl" style="width:100%;margin-top:8px;display:none" onclick="ocrDownloadTxt('ocr-img-output')">Baixar .txt</button>`;return;}
  if(id===101){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione um PDF escaneado (sem camada de texto selecionável) — cada página será reconhecida por OCR:</p><input type="file" id="ocr-pdf-file" accept="application/pdf" class="f-input"><div class="f-row"><label class="f-label">Idioma do texto</label><select id="ocr-pdf-lang" class="f-input"><option value="por">Português</option><option value="eng">Inglês</option><option value="spa">Espanhol</option></select></div><button class="btn-exec" onclick="ocrPdfToText()">🔎 Reconhecer Texto do PDF</button><div class="tool-prog" id="ocr-pdf-prog" style="display:none"><div class="tool-prog-top"><span id="ocr-pdf-prog-label">Carregando OCR…</span><span id="ocr-pdf-prog-pct">0%</span></div><div class="tool-prog-track"><div class="tool-prog-bar" id="ocr-pdf-prog-bar" style="width:0%"></div></div></div><textarea id="ocr-pdf-output" class="f-textarea" style="min-height:180px;display:none" placeholder="O texto reconhecido aparece aqui..."></textarea><button class="btn-sm" id="ocr-pdf-dl" style="width:100%;margin-top:8px;display:none" onclick="ocrDownloadTxt('ocr-pdf-output')">Baixar .txt</button>`;return;}

  if(id===102){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione uma imagem e arraste as bordas da seleção para recortar:</p><input type="file" id="crop-img-file" accept="image/*" class="f-input" onchange="cropImgLoad(this)"><div class="crop-stage-wrap" id="crop-stage-wrap" style="display:none"><div class="crop-stage" id="crop-stage"><img id="crop-img-el" draggable="false"><div class="crop-box" id="crop-box"><div class="crop-handle" data-h="nw"></div><div class="crop-handle" data-h="ne"></div><div class="crop-handle" data-h="sw"></div><div class="crop-handle" data-h="se"></div></div></div></div><button class="btn-exec" id="crop-btn" style="display:none" onclick="cropImgApply()">✂️ Recortar e Baixar</button>`;return;}

  if(id===103){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione uma ou mais fotos (JPG/PNG) — os metadados EXIF (câmera, GPS, data) serão removidos automaticamente:</p><input type="file" id="exif-imgs" accept="image/*" multiple class="f-input"><button class="btn-exec" onclick="removeExif()">🧹 Remover Metadados e Baixar</button><div class="result-box" id="exif-result"></div>`;return;}

  if(id===104){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione de 2 a 9 fotos para montar a colagem:</p><input type="file" id="collage-imgs" accept="image/*" multiple class="f-input"><div class="grid-2"><div class="f-row"><label class="f-label">Colunas</label><select id="collage-cols" class="f-input"><option value="2">2</option><option value="3" selected>3</option><option value="4">4</option></select></div><div class="f-row"><label class="f-label">Espaçamento</label><select id="collage-gap" class="f-input"><option value="0">Sem espaço</option><option value="8" selected>Pequeno</option><option value="20">Grande</option></select></div></div><button class="btn-exec" onclick="makeCollage()">🖼️ Gerar Colagem</button>`;return;}

  if(id===105){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione uma imagem quadrada (ideal 512x512) para gerar o pacote de favicon:</p><input type="file" id="favicon-img" accept="image/*" class="f-input"><button class="btn-exec" onclick="genFavicon()">⭐ Gerar Pacote de Favicon (.zip)</button>`;return;}

  if(id===106){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione uma imagem para extrair as cores dominantes:</p><input type="file" id="palette-img" accept="image/*" class="f-input" onchange="extractPalette(this)"><div id="palette-result" style="display:flex;flex-wrap:wrap;gap:10px;margin-top:14px"></div>`;return;}

  if(id===107){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione um PDF e informe as páginas a remover:</p><input type="file" id="delpg-pdf" accept="application/pdf" class="f-input" onchange="delPgLoad(this)"><div id="delpg-info" style="font-size:11px;color:var(--muted);margin:6px 0"></div><div class="f-row"><label class="f-label">Páginas a remover (ex: 2,4,7-9)</label><input type="text" id="delpg-range" class="f-input" placeholder="Ex: 2,5,8-10"></div><button class="btn-exec" onclick="deletePdfPages()">🗑️ Remover Páginas e Baixar</button>`;return;}

  if(id===108){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione um PDF para editar suas propriedades:</p><input type="file" id="meta-pdf" accept="application/pdf" class="f-input"><div class="f-row"><label class="f-label">Título</label><input type="text" id="meta-title" class="f-input"></div><div class="f-row"><label class="f-label">Autor</label><input type="text" id="meta-author" class="f-input"></div><div class="f-row"><label class="f-label">Assunto</label><input type="text" id="meta-subject" class="f-input"></div><div class="f-row"><label class="f-label">Palavras-chave (separadas por vírgula)</label><input type="text" id="meta-keywords" class="f-input"></div><button class="btn-exec" onclick="editPdfMetadata()">💾 Salvar Metadados e Baixar</button>`;return;}

  if(id===109){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Selecione um PDF com restrições (impressão/cópia bloqueada):</p><input type="file" id="unlock-pdf" accept="application/pdf" class="f-input"><button class="btn-exec" onclick="unlockPdf()">🔓 Remover Restrições e Baixar</button><div style="background:rgba(140,100,178,.07);border:1px solid rgba(140,100,178,.2);border-radius:6px;padding:10px 12px;font-size:11px;color:#b58fd6;line-height:1.5;margin-top:10px">⚠️ Funciona apenas em PDFs com <strong>restrições de permissão</strong> (bloqueio de impressão/cópia) sem senha de abertura. PDFs que pedem senha para <strong>abrir</strong> o arquivo não podem ser desbloqueados no navegador — nesse caso, use a senha em um leitor de PDF compatível para remover a proteção antes.</div><div class="result-box" id="unlock-result"></div>`;return;}

  if(id===110){body.innerHTML=`<div class="f-row"><label class="f-label">Valor</label><input type="text" id="base-input" class="f-input" value="255" oninput="convertBase('dec')"></div><div class="grid-2"><div class="f-row"><label class="f-label">Binário</label><input type="text" id="base-bin" class="f-input" oninput="convertBase('bin')"></div><div class="f-row"><label class="f-label">Decimal</label><input type="text" id="base-dec" class="f-input" oninput="convertBase('dec')"></div></div><div class="grid-2"><div class="f-row"><label class="f-label">Hexadecimal</label><input type="text" id="base-hex" class="f-input" oninput="convertBase('hex')"></div><div class="f-row"><label class="f-label">Octal</label><input type="text" id="base-oct" class="f-input" oninput="convertBase('oct')"></div></div><div id="base-error" style="color:#f87171;font-size:12px;min-height:16px"></div>`;
    requestAnimationFrame(()=>convertBase('dec'));return;}

  if(id===111){body.innerHTML=`<div class="f-row"><label class="f-label">Cole o JSON aqui</label><textarea id="json-input" class="f-textarea" style="min-height:180px" placeholder='{"exemplo": true, "valores": [1,2,3]}'></textarea></div><div style="display:flex;gap:8px"><button class="btn-exec" style="flex:1" onclick="formatJson()">✨ Formatar e Validar</button><button class="btn-sm" onclick="minifyJson()">Minificar</button></div><div class="result-box" id="json-result"></div>`;return;}

  if(id===112){body.innerHTML=`<div class="sig-tabs"><button class="sig-tab active" onclick="switchHashTab('text',this)">📝 Texto</button><button class="sig-tab" onclick="switchHashTab('file',this)">📁 Arquivo</button></div><div id="hash-pane-text" class="sig-pane active"><textarea id="hash-text-input" class="f-textarea" style="min-height:100px" placeholder="Digite o texto..." oninput="calcHash()"></textarea></div><div id="hash-pane-file" class="sig-pane"><input type="file" id="hash-file-input" class="f-input" onchange="calcHash()"></div><div class="result-box" id="hash-result" style="margin-top:10px">Digite um texto ou selecione um arquivo.</div>`;return;}

  if(id===113){body.innerHTML=`<div class="f-row"><label class="f-label">Texto</label><textarea id="case-input" class="f-textarea" style="min-height:100px" placeholder="Digite o texto..." oninput="convertCase()"></textarea></div><div class="grid-2" style="margin-bottom:10px"><button class="btn-sm" onclick="applyCase('upper')">MAIÚSCULAS</button><button class="btn-sm" onclick="applyCase('lower')">minúsculas</button><button class="btn-sm" onclick="applyCase('title')">Título</button><button class="btn-sm" onclick="applyCase('camel')">camelCase</button><button class="btn-sm" onclick="applyCase('snake')">snake_case</button><button class="btn-sm" onclick="applyCase('kebab')">kebab-case</button></div><div class="f-row"><label class="f-label">Resultado</label><textarea id="case-output" class="f-textarea" style="min-height:100px" readonly></textarea></div><button class="btn-sm" onclick="copyCaseOutput()">📋 Copiar Resultado</button>`;return;}

  if(id===114){body.innerHTML=`<div class="f-row"><label class="f-label">Quantidade</label><input type="number" id="uuid-count" class="f-input" value="5" min="1" max="100"></div><button class="btn-exec" onclick="genUuids()">🆔 Gerar UUIDs</button><textarea id="uuid-output" class="f-textarea" style="min-height:160px;margin-top:10px" readonly placeholder="Os UUIDs gerados aparecem aqui..."></textarea><button class="btn-sm" id="uuid-copy-btn" style="width:100%;margin-top:8px;display:none" onclick="copyUuids()">📋 Copiar Todos</button>`;return;}

  if(id===115){body.innerHTML=`<div class="f-row"><label class="f-label">Valor em R$</label><input type="number" id="extenso-valor" class="f-input" value="1234.56" step="0.01"></div><button class="btn-exec" onclick="valorPorExtenso()">🖊️ Converter por Extenso</button><div class="result-box" id="extenso-result"></div>`;return;}

  if(id===116){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Adicione os intervalos de trabalho do dia (entrada e saída):</p><div id="horas-linhas"></div><button class="btn-sm" onclick="addHorasLinha()">+ Adicionar intervalo</button><button class="btn-exec" style="margin-top:12px" onclick="calcHorasTrabalhadas()">⏱️ Calcular Total</button><div class="result-box" id="horas-result"></div>`;
    horasLinhaCount=0;addHorasLinha();addHorasLinha();return;}

  if(id===117){body.innerHTML=`<div class="grid-2"><div class="f-row"><label class="f-label">Capital (R$)</label><input type="number" id="js-capital" class="f-input" value="1000"></div><div class="f-row"><label class="f-label">Taxa (% ao mês)</label><input type="number" id="js-taxa" class="f-input" value="2" step="0.01"></div></div><div class="f-row"><label class="f-label">Período (meses)</label><input type="number" id="js-periodo" class="f-input" value="12"></div><button class="btn-exec" onclick="calcJurosSimples()">Calcular</button><div class="result-box" id="js-result"></div>`;return;}
  if(id===118){body.innerHTML=`<div class="grid-2"><div class="f-row"><label class="f-label">Salário Bruto (R$)</label><input type="number" id="resc-sal" class="f-input" value="3000"></div><div class="f-row"><label class="f-label">Meses trabalhados no ano</label><input type="number" id="resc-meses" class="f-input" value="6" min="1" max="12"></div></div><div class="grid-2"><div class="f-row"><label class="f-label">Dias de aviso prévio</label><input type="number" id="resc-aviso" class="f-input" value="30"></div><div class="f-row"><label class="f-label">Saldo de FGTS (R$)</label><input type="number" id="resc-fgts" class="f-input" value="2400"></div></div><div class="f-row"><label class="f-label">Tipo de rescisão</label><select id="resc-tipo" class="f-input"><option value="sem_justa_causa">Sem justa causa (empregador)</option><option value="pedido_demissao">Pedido de demissão</option><option value="acordo">Acordo (art. 484-A)</option></select></div><button class="btn-exec" onclick="calcRescisao()">Calcular Rescisão</button><div class="result-box" id="resc-result"></div>`;return;}
  if(id===119){body.innerHTML=`<div class="grid-2"><div class="f-row"><label class="f-label">Salário Bruto (R$)</label><input type="number" id="he-sal" class="f-input" value="2500"></div><div class="f-row"><label class="f-label">Horas mensais (contrato)</label><input type="number" id="he-horas-mes" class="f-input" value="220"></div></div><div class="grid-2"><div class="f-row"><label class="f-label">Horas extras 50%</label><input type="number" id="he-h50" class="f-input" value="0" step="0.5"></div><div class="f-row"><label class="f-label">Horas extras 100%</label><input type="number" id="he-h100" class="f-input" value="0" step="0.5"></div></div><button class="btn-exec" onclick="calcHorasExtras()">Calcular</button><div class="result-box" id="he-result"></div>`;return;}
  if(id===120){body.innerHTML=`<div class="f-row"><label class="f-label">Número arábico (1–3999)</label><input type="number" id="rom-num" class="f-input" value="1994" min="1" max="3999" oninput="arabicToRoman()"></div><div class="f-row"><label class="f-label">Número romano</label><input type="text" id="rom-str" class="f-input" value="MCMXCIV" style="text-transform:uppercase" oninput="romanToArabic()"></div><div class="result-box" id="rom-result"></div>`;requestAnimationFrame(()=>arabicToRoman());return;}
  if(id===121){body.innerHTML=`<div class="grid-2"><div class="f-row"><label class="f-label">Quantidade de parágrafos</label><input type="number" id="lorem-paras" class="f-input" value="3" min="1" max="20"></div><div class="f-row"><label class="f-label">Frases por parágrafo</label><input type="number" id="lorem-sent" class="f-input" value="5" min="1" max="20"></div></div><label style="display:flex;align-items:center;gap:8px;font-size:12px;color:var(--muted);margin:6px 0 10px"><input type="checkbox" id="lorem-pt" style="width:16px;height:16px"> Gerar em português (em vez de latim clássico)</label><button class="btn-exec" onclick="genLoremIpsum()">Gerar Texto</button><textarea id="lorem-output" class="f-textarea" style="min-height:200px;margin-top:10px" readonly></textarea><button class="btn-sm" style="width:100%;margin-top:8px" onclick="copyGenericField('lorem-output')">Copiar Texto</button>`;return;}
  if(id===122){body.innerHTML=`<div class="f-row"><label class="f-label">Timestamp Unix (segundos)</label><input type="number" id="ts-unix" class="f-input" placeholder="Ex: 1735689600" oninput="unixToDate()"></div><button class="btn-sm" onclick="document.getElementById('ts-unix').value=Math.floor(Date.now()/1000);unixToDate();">Usar agora</button><div class="f-row" style="margin-top:10px"><label class="f-label">Data e hora</label><input type="datetime-local" id="ts-date" class="f-input" oninput="dateToUnix()"></div><div class="result-box" id="ts-result"></div>`;requestAnimationFrame(()=>{const el=document.getElementById('ts-unix');if(el){el.value=Math.floor(Date.now()/1000);unixToDate();}});return;}
  if(id===123){body.innerHTML=`<div class="f-row"><label class="f-label">Texto original</label><textarea id="b64-text" class="f-textarea" style="min-height:120px" placeholder="Digite ou cole um texto..."></textarea></div><div style="display:flex;gap:8px"><button class="btn-exec" style="flex:1" onclick="b64Encode()">Codificar (texto → Base64)</button><button class="btn-sm" onclick="b64Decode()">Decodificar (Base64 → texto)</button></div><div class="f-row" style="margin-top:10px"><label class="f-label">Resultado</label><textarea id="b64-output" class="f-textarea" style="min-height:120px" readonly></textarea></div><button class="btn-sm" style="width:100%" onclick="copyGenericField('b64-output')">Copiar Resultado</button>`;return;}
  if(id===124){body.innerHTML=`<div class="f-row"><label class="f-label">Texto ou URL</label><textarea id="url-text" class="f-textarea" style="min-height:100px" placeholder="Ex: https://exemplo.com/busca?q=olá mundo"></textarea></div><div style="display:flex;gap:8px"><button class="btn-exec" style="flex:1" onclick="urlEncode()">Codificar</button><button class="btn-sm" onclick="urlDecode()">Decodificar</button></div><div class="f-row" style="margin-top:10px"><label class="f-label">Resultado</label><textarea id="url-output" class="f-textarea" style="min-height:100px" readonly></textarea></div><button class="btn-sm" style="width:100%" onclick="copyGenericField('url-output')">Copiar Resultado</button>`;return;}
  if(id===125){body.innerHTML=`<div class="f-row"><label class="f-label">Digite a senha</label><input type="text" id="pwd-check" class="f-input" placeholder="Digite uma senha para avaliar..." oninput="checkPasswordStrength()"></div><div class="pwd-meter" style="height:8px;border-radius:99px;background:var(--border);overflow:hidden;margin:10px 0"><div id="pwd-meter-bar" style="height:100%;width:0%;transition:width .2s,background .2s"></div></div><div class="result-box" id="pwd-result"></div>`;return;}
  if(id===126){body.innerHTML=`<div class="f-row"><label class="f-label">Expressão regular (regex)</label><input type="text" id="regex-pattern" class="f-input" placeholder="Ex: [aeiou]+" oninput="testRegex()"></div><div class="grid-2" style="margin-top:4px"><label style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--muted)"><input type="checkbox" id="regex-flag-g" checked onchange="testRegex()"> Global (g)</label><label style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--muted)"><input type="checkbox" id="regex-flag-i" onchange="testRegex()"> Ignorar maiúsc. (i)</label></div><div class="f-row" style="margin-top:10px"><label class="f-label">Texto de teste</label><textarea id="regex-text" class="f-textarea" style="min-height:140px" placeholder="Cole aqui o texto para testar sua expressão..." oninput="testRegex()"></textarea></div><div class="result-box" id="regex-result"></div>`;return;}
  if(id===127){body.innerHTML=`<div class="grid-2"><div class="f-row"><label class="f-label">Cor do texto</label><input type="color" id="cc-fg" class="f-input" value="#ffffff" oninput="checkContrast()" style="height:44px;padding:4px"></div><div class="f-row"><label class="f-label">Cor de fundo</label><input type="color" id="cc-bg" class="f-input" value="#6366f1" oninput="checkContrast()" style="height:44px;padding:4px"></div></div><div id="cc-preview" style="border-radius:10px;padding:24px;text-align:center;font-size:16px;font-weight:600;margin:12px 0">Texto de exemplo Aa</div><div class="result-box" id="cc-result"></div>`;requestAnimationFrame(()=>checkContrast());return;}
  if(id===128){body.innerHTML=`<div class="grid-2"><div class="f-row"><label class="f-label">Valor da compra (R$)</label><input type="number" id="troco-compra" class="f-input" value="47.50" step="0.01"></div><div class="f-row"><label class="f-label">Valor pago (R$)</label><input type="number" id="troco-pago" class="f-input" value="50" step="0.01"></div></div><button class="btn-exec" onclick="calcTroco()">Calcular Troco</button><div class="result-box" id="troco-result"></div>`;return;}
  if(id===129){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Digite um item por linha (nomes, números, o que quiser sortear):</p><div class="f-row"><label class="f-label">Lista de participantes</label><textarea id="sorteio-lista" class="f-textarea" style="min-height:160px" placeholder="Ex:\nMaria\nJoão\nAna\nPedro"></textarea></div><div class="grid-2"><div class="f-row"><label class="f-label">Quantos vencedores?</label><input type="number" id="sorteio-qtd" class="f-input" value="1" min="1"></div><label style="display:flex;align-items:center;gap:8px;font-size:12px;color:var(--muted);align-self:end;padding-bottom:10px"><input type="checkbox" id="sorteio-remove" checked style="width:16px;height:16px"> Não repetir participante</label></div><button class="btn-exec" onclick="sortearVencedores()">🎲 Sortear</button><div class="result-box" id="sorteio-result"></div>`;return;}
  if(id===130){body.innerHTML=`<input type="file" id="social-img" accept="image/*" class="f-input"><div class="f-row" style="margin-top:10px"><label class="f-label">Formato de destino</label><select id="social-preset" class="f-input"><option value="1080x1080">Instagram Post (1080×1080)</option><option value="1080x1350">Instagram Retrato (1080×1350)</option><option value="1080x1920">Instagram/Stories (1080×1920)</option><option value="1200x630">Facebook/LinkedIn Post (1200×630)</option><option value="1500x500">Capa Facebook (1500×500)</option><option value="1500x1500">Capa LinkedIn (1584×396)</option><option value="1280x720">YouTube Thumbnail (1280×720)</option></select></div><p style="font-size:11px;color:var(--muted);margin-top:8px">A imagem é ajustada e cortada (crop central) para preencher exatamente o formato escolhido.</p><button class="btn-exec" onclick="resizeForSocial()">Gerar Imagem</button>`;return;}
  if(id===131){body.innerHTML=`<div class="f-row"><label class="f-label">Tipo de código</label><select id="min-type" class="f-input" onchange="document.getElementById('min-input').placeholder=this.value==='css'?'.classe { color: red; }':this.value==='html'?'<div>  <p>Texto</p></div>':'function soma(a,b){\\n  return a + b;\\n}'">
      <option value="css">CSS</option>
      <option value="html">HTML</option>
      <option value="js">JavaScript</option>
    </select></div><div class="f-row"><label class="f-label">Código original</label><textarea id="min-input" class="f-textarea" style="min-height:160px" placeholder=".classe { color: red; }"></textarea></div><button class="btn-exec" onclick="minifyCode()">Minificar</button><div class="f-row" style="margin-top:10px"><label class="f-label">Resultado minificado</label><textarea id="min-output" class="f-textarea" style="min-height:120px" readonly></textarea></div><div id="min-stats" style="font-size:11px;color:var(--muted);margin-top:6px"></div><button class="btn-sm" style="width:100%;margin-top:6px" onclick="copyGenericField('min-output')">Copiar Resultado</button>`;return;}

  if(id===132){body.innerHTML=`<p style="font-size:13px;color:var(--muted)">Confirme se um PDF assinado na FREDTECHSYSTEMS Converter continua exatamente como estava no momento da assinatura.</p>
    <div class="f-row"><label class="f-label">1. PDF assinado</label><input type="file" id="verif-pdf" accept="application/pdf" class="f-input"></div>
    <div class="f-row"><label class="f-label">2. Certificado (arquivo .json baixado junto com o PDF)</label><input type="file" id="verif-cert" accept="application/json" class="f-input"></div>
    <button class="btn-exec" onclick="runToolProgress(this,'verificarAssinatura')">🔍 Verificar Assinatura</button>
    <div class="result-box" id="verif-result"></div>`;return;}

  body.innerHTML=`<div style="text-align:center;padding:24px 0">
    <div style="font-size:52px;margin-bottom:12px">${{pdf:'📄',image:'🖼️',convert:'🔄',office:'📊',office2:'🤖'}[tool.cat]}</div>
    <h3 style="font-size:16px;font-weight:700;margin-bottom:8px">${tool.name}</h3>
    <p style="font-size:13px;color:var(--muted);margin-bottom:20px">${tool.desc}</p>
    <div style="background:rgba(99,102,241,.1);border:1px solid rgba(99,102,241,.25);border-radius:8px;padding:14px;font-size:12px;color:var(--gold)">⚙️ Interface em desenvolvimento</div>
  </div>`;
}

// ── I18N da INTERFACE do conversor (torna o seletor PT/EN/ES visível e funcional) ──
const UI_I18N={
  pt:{
    langBarLabel:'🌐 Idioma do arquivo gerado:',
    dropText:'Clique ou arraste o arquivo aqui',
    dropSubDefault:'Máx. 10 MB',
    dropSub:ext=>`Aceita: ${ext} — Máx. 10 MB`,
    disclaimerStrong:'Motor local:',
    disclaimerText:'a conversão roda 100% no seu navegador e gera um arquivo real no formato de saída (OOXML/PDF). Nenhum dado sai do seu computador.',
    btnSelectFirst:'Selecione um arquivo primeiro',
    btnConvertTo:ext=>`🔄 Converter → ${ext}`,
    btnConvertAgain:'🔄 Converter novamente',
    errTooBig:'Arquivo muito grande (máx. 10 MB).',
    errWrongType:ext=>`Tipo incorreto. Esperado: ${ext}`,
    errConvPrefix:'Erro na conversão: ',
    stepReading:'Lendo arquivo...',
    stepAnalyzing:'Analisando estrutura...',
    stepGenerating:'Gerando arquivo de saída...',
    stepDone:'Conversão concluída! ✅',
    logReading:'[1/4] Lendo arquivo...',
    logAnalyzing:'[2/4] Analisando estrutura do documento...',
    logGenerating:ext=>`[3/4] Montando arquivo ${ext} real...`,
    logDone:name=>`[4/4] ✅ Concluído: ${name}`,
    logErrorPrefix:'❌ Erro: ',
    resultMeta:(ext,size)=>`Arquivo real ${ext} — ${size}`,
    downloadBtn:'⬇ Baixar',
    unknownFormat:ext=>`[Formato de origem não reconhecido: ${ext}]`,
    jszipMissing:'Biblioteca JSZip não carregou. Verifique sua conexão com a internet e recarregue a página.',
    pdflibMissing:'Biblioteca PDF-lib não carregou. Verifique sua conexão com a internet e recarregue a página.',
  },
  en:{
    langBarLabel:'🌐 Output file language:',
    dropText:'Click or drag your file here',
    dropSubDefault:'Max. 10 MB',
    dropSub:ext=>`Accepts: ${ext} — Max. 10 MB`,
    disclaimerStrong:'Local engine:',
    disclaimerText:'the conversion runs 100% in your browser and generates a real file in the output format (OOXML/PDF). No data leaves your computer.',
    btnSelectFirst:'Select a file first',
    btnConvertTo:ext=>`🔄 Convert → ${ext}`,
    btnConvertAgain:'🔄 Convert again',
    errTooBig:'File too large (max. 10 MB).',
    errWrongType:ext=>`Wrong file type. Expected: ${ext}`,
    errConvPrefix:'Conversion error: ',
    stepReading:'Reading file...',
    stepAnalyzing:'Analyzing structure...',
    stepGenerating:'Generating output file...',
    stepDone:'Conversion complete! ✅',
    logReading:'[1/4] Reading file...',
    logAnalyzing:'[2/4] Analyzing document structure...',
    logGenerating:ext=>`[3/4] Building real ${ext} file...`,
    logDone:name=>`[4/4] ✅ Done: ${name}`,
    logErrorPrefix:'❌ Error: ',
    resultMeta:(ext,size)=>`Real ${ext} file — ${size}`,
    downloadBtn:'⬇ Download',
    unknownFormat:ext=>`[Unrecognized source format: ${ext}]`,
    jszipMissing:'JSZip library failed to load. Check your internet connection and reload the page.',
    pdflibMissing:'PDF-lib library failed to load. Check your internet connection and reload the page.',
  },
  es:{
    langBarLabel:'🌐 Idioma del archivo generado:',
    dropText:'Haz clic o arrastra tu archivo aquí',
    dropSubDefault:'Máx. 10 MB',
    dropSub:ext=>`Acepta: ${ext} — Máx. 10 MB`,
    disclaimerStrong:'Motor local:',
    disclaimerText:'la conversión se ejecuta 100% en tu navegador y genera un archivo real en el formato de salida (OOXML/PDF). Ningún dato sale de tu ordenador.',
    btnSelectFirst:'Selecciona un archivo primero',
    btnConvertTo:ext=>`🔄 Convertir → ${ext}`,
    btnConvertAgain:'🔄 Convertir de nuevo',
    errTooBig:'Archivo demasiado grande (máx. 10 MB).',
    errWrongType:ext=>`Tipo incorrecto. Se esperaba: ${ext}`,
    errConvPrefix:'Error de conversión: ',
    stepReading:'Leyendo archivo...',
    stepAnalyzing:'Analizando estructura...',
    stepGenerating:'Generando archivo de salida...',
    stepDone:'¡Conversión completada! ✅',
    logReading:'[1/4] Leyendo archivo...',
    logAnalyzing:'[2/4] Analizando estructura del documento...',
    logGenerating:ext=>`[3/4] Generando archivo ${ext} real...`,
    logDone:name=>`[4/4] ✅ Listo: ${name}`,
    logErrorPrefix:'❌ Error: ',
    resultMeta:(ext,size)=>`Archivo real ${ext} — ${size}`,
    downloadBtn:'⬇ Descargar',
    unknownFormat:ext=>`[Formato de origen no reconocido: ${ext}]`,
    jszipMissing:'La librería JSZip no se cargó. Verifica tu conexión a internet y recarga la página.',
    pdflibMissing:'La librería PDF-lib no se cargó. Verifica tu conexión a internet y recarga la página.',
  }
};
function ui(){return UI_I18N[convLang]||UI_I18N.pt;}

// ── CONVERSOR OFFICE HTML ─────────────────────────────
function buildConvHTML(){
  const tools=CONV_TOOLS;
  const u=ui();
  const cardsHTML=tools.map(t=>`
    <div class="conv-card" id="conv-card-${t.id}" onclick="convSelectTool(CONV_TOOLS.find(x=>x.id==='${t.id}'))">
      <div class="conv-card-icon" style="background:${t.color}1f;color:${t.color}">${t.icon}</div>
      <div class="conv-card-title">${t.title}</div>
      <div class="conv-card-desc">${t.desc}</div>
    </div>`).join('');
  const langBtns=[['pt','🇧🇷','PT'],['en','🇺🇸','EN'],['es','🇪🇸','ES']].map(([code,flag,label])=>
    `<button class="conv-lang-btn${convLang===code?' active':''}" onclick="setConvLang('${code}',this)">${flag} ${label}</button>`
  ).join('');
  return `
    <div class="conv-lang-bar">
      <span class="conv-lang-label" id="conv-lang-label">${u.langBarLabel}</span>
      <div class="conv-lang-btns">${langBtns}</div>
    </div>
    <div class="conv-tools-grid">${cardsHTML}</div>
    <div class="conv-panel" id="conv-panel">
      <div class="conv-drop" id="conv-drop" ondragover="convDrag(event,true)" ondragleave="convDrag(event,false)" ondrop="convDrop(event)">
        <input type="file" id="conv-file-input" onchange="convHandleFile(this)">
        <span class="conv-drop-icon" id="conv-dz-icon">☁️</span>
        <div class="conv-drop-text" id="conv-dz-text">${u.dropText}</div>
        <div class="conv-drop-sub" id="conv-dz-sub">${u.dropSubDefault}</div>
      </div>
      <div class="conv-file-row" id="conv-file-row">
        <span id="conv-fi-icon">📄</span>
        <span class="conv-fi-name" id="conv-fi-name">—</span>
        <span class="conv-fi-size" id="conv-fi-size">—</span>
        <button class="conv-fi-rm" onclick="convRemoveFile()">✕</button>
      </div>
      <div class="conv-disclaimer" id="conv-disclaimer">⚙️ <strong>${u.disclaimerStrong}</strong> ${u.disclaimerText}</div>
      <div class="conv-err" id="conv-err"></div>
      <button class="btn-exec" id="conv-btn" onclick="convStart()" disabled>${u.btnSelectFirst}</button>
      <div class="conv-prog" id="conv-prog">
        <div class="conv-prog-label"><span id="conv-prog-text">${u.stepReading}</span><span id="conv-prog-pct">0%</span></div>
        <div class="conv-prog-bg"><div class="conv-prog-bar" id="conv-prog-bar"></div></div>
        <div class="conv-log" id="conv-log"></div>
      </div>
      <div class="conv-result" id="conv-result">
        <div class="conv-result-card">
          <span id="conv-rc-icon" style="font-size:28px">✅</span>
          <div class="conv-rc-info">
            <div class="conv-rc-name" id="conv-rc-name">arquivo.docx</div>
            <div class="conv-rc-meta" id="conv-rc-meta">—</div>
          </div>
          <button class="btn-dl-conv" id="conv-dl-btn" onclick="convDownload()">${u.downloadBtn}</button>
        </div>
        <div class="conv-rc-prev" id="conv-rc-prev"></div>
      </div>
    </div>`;
}

function initConvListeners(){convActiveTool=null;convSelectedFile=null;convResultBlob=null;}

function setConvLang(l,btn){
  convLang=l;
  siteLang=l; // mantém o idioma do site sincronizado com o idioma escolhido no conversor
  document.querySelectorAll('.conv-lang-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  refreshConvUIText();
  const idx={pt:0,en:1,es:2}[l];
  const siteBtns=document.querySelectorAll('.site-lang-btn');
  siteBtns.forEach(b=>b.classList.remove('active'));
  if(siteBtns[idx]) siteBtns[idx].classList.add('active');
  applySiteLang();
}

function refreshConvUIText(){
  const u=ui();
  const setTxt=(id,val)=>{const el=document.getElementById(id);if(el)el.textContent=val;};
  setTxt('conv-lang-label',u.langBarLabel);
  setTxt('conv-dz-text',u.dropText);
  const dzSub=document.getElementById('conv-dz-sub');
  if(dzSub) dzSub.textContent=convActiveTool?u.dropSub(convActiveTool.accept.toUpperCase()):u.dropSubDefault;
  const disc=document.getElementById('conv-disclaimer');
  if(disc) disc.innerHTML=`⚙️ <strong>${u.disclaimerStrong}</strong> ${u.disclaimerText}`;
  const dlBtn=document.getElementById('conv-dl-btn');
  if(dlBtn) dlBtn.textContent=u.downloadBtn;
  const btn=document.getElementById('conv-btn');
  if(btn && !btn.disabled===false){ /* no-op guard */ }
  if(btn){
    if(convSelectedFile&&convActiveTool) btn.textContent=convResultBlob?u.btnConvertAgain:u.btnConvertTo(convActiveTool.out.toUpperCase());
    else btn.textContent=u.btnSelectFirst;
  }
}

function convSelectTool(tool){
  convActiveTool=tool;
  convSelectedFile=null;
  convResultBlob=null;
  const u=ui();
  document.querySelectorAll('.conv-card').forEach(c=>c.classList.remove('conv-active'));
  const card=document.getElementById('conv-card-'+tool.id);
  if(card) card.classList.add('conv-active');
  document.getElementById('conv-panel').classList.add('open');
  document.getElementById('conv-file-input').accept=tool.accept;
  document.getElementById('conv-dz-sub').textContent=u.dropSub(tool.accept.toUpperCase());
  document.getElementById('conv-file-row').classList.remove('show');
  document.getElementById('conv-prog').classList.remove('show');
  document.getElementById('conv-result').classList.remove('show');
  document.getElementById('conv-err').classList.remove('show');
  document.getElementById('conv-btn').disabled=true;
  document.getElementById('conv-btn').textContent=u.btnSelectFirst;
}

function convDrag(e,on){e.preventDefault();document.getElementById('conv-drop').classList[on?'add':'remove']('drag');}
function convDrop(e){e.preventDefault();convDrag(e,false);const f=e.dataTransfer.files[0];if(f)convProcess(f);}
function convHandleFile(input){if(input.files[0])convProcess(input.files[0]);}

function convProcess(file){
  const u=ui();
  document.getElementById('conv-err').classList.remove('show');
  if(file.size>10*1024*1024){convShowErr(u.errTooBig);return;}
  if(convActiveTool){
    const ext='.'+file.name.split('.').pop().toLowerCase();
    if(ext!==convActiveTool.accept){convShowErr(u.errWrongType(convActiveTool.accept));return;}
  }
  convSelectedFile=file;
  const icon={pdf:'📄',docx:'📝',xlsx:'📊',pptx:'📑'}[file.name.split('.').pop().toLowerCase()]||'📁';
  document.getElementById('conv-fi-icon').textContent=icon;
  document.getElementById('conv-fi-name').textContent=file.name;
  document.getElementById('conv-fi-size').textContent=convFmtSize(file.size);
  document.getElementById('conv-file-row').classList.add('show');
  document.getElementById('conv-result').classList.remove('show');
  document.getElementById('conv-btn').disabled=false;
  document.getElementById('conv-btn').textContent=u.btnConvertTo(convActiveTool.out.toUpperCase());
}

function convRemoveFile(){
  const u=ui();
  convSelectedFile=null;
  document.getElementById('conv-file-row').classList.remove('show');
  document.getElementById('conv-file-input').value='';
  document.getElementById('conv-btn').disabled=true;
  document.getElementById('conv-btn').textContent=u.btnSelectFirst;
}

function convShowErr(msg){const el=document.getElementById('conv-err');el.textContent='⚠ '+msg;el.classList.add('show');}

function convSetProgress(pct,label){
  document.getElementById('conv-prog-bar').style.width=pct+'%';
  document.getElementById('conv-prog-pct').textContent=pct+'%';
  document.getElementById('conv-prog-text').textContent=label;
}

function convLog(msg){const lb=document.getElementById('conv-log');lb.textContent+='\n'+msg;lb.scrollTop=lb.scrollHeight;}

async function convStart(){
  if(!convSelectedFile||!convActiveTool)return;
  const u=ui();
  document.getElementById('conv-prog').classList.add('show');
  document.getElementById('conv-result').classList.remove('show');
  document.getElementById('conv-btn').disabled=true;
  document.getElementById('conv-log').textContent='';
  document.getElementById('conv-err').classList.remove('show');
  try{
    if(typeof JSZip==='undefined'){throw new Error(u.jszipMissing);}
    if(typeof PDFLib==='undefined'){throw new Error(u.pdflibMissing);}

    convSetProgress(8,u.stepReading);convLog(u.logReading);
    // leitura real do arquivo (progresso refletido pelos bytes lidos, não um tempo fixo)
    await new Promise(res=>{
      const fr=new FileReader();
      fr.onprogress=e=>{ if(e.lengthComputable){ convSetProgress(8+Math.round((e.loaded/e.total)*17),u.stepReading); } };
      fr.onloadend=res;
      fr.readAsArrayBuffer(convSelectedFile);
    });
    let structured;
    convSetProgress(25,u.stepAnalyzing);convLog(u.logAnalyzing);

    const srcExt=convSelectedFile.name.split('.').pop().toLowerCase();
    if(srcExt==='pdf'){ structured=await convExtractPdfStructured(convSelectedFile); }
    else if(srcExt==='docx'){ structured=await convExtractDocxStructured(convSelectedFile); }
    else if(srcExt==='xlsx'){ structured=await convExtractXlsxStructured(convSelectedFile); }
    else if(srcExt==='pptx'){ structured=await convExtractPptxStructured(convSelectedFile); }
    else { structured={paragraphs:[u.unknownFormat(srcExt)]}; }

    convSetProgress(55,u.stepGenerating);convLog(u.logGenerating(convActiveTool.out.toUpperCase()));

    convResultName=convSelectedFile.name.replace(/\.[^.]+$/,'')+'_convertido.'+convActiveTool.out;
    let previewText='';

    if(convActiveTool.out==='pdf'){
      const r=await convGenPDF(structured,convSelectedFile.name);
      convResultBlob=r.blob; previewText=r.preview;
    } else if(convActiveTool.out==='docx'){
      const r=await convGenDocx(structured,convSelectedFile.name);
      convResultBlob=r.blob; previewText=r.preview;
    } else if(convActiveTool.out==='xlsx'){
      const r=await convGenXlsx(structured,convSelectedFile.name);
      convResultBlob=r.blob; previewText=r.preview;
    } else if(convActiveTool.out==='pptx'){
      const r=await convGenPptx(structured,convSelectedFile.name);
      convResultBlob=r.blob; previewText=r.preview;
    }

    convSetProgress(100,u.stepDone);convLog(u.logDone(convResultName));
    document.getElementById('conv-rc-icon').textContent=convGetIcon(convResultName);
    document.getElementById('conv-rc-name').textContent=convResultName;
    document.getElementById('conv-rc-meta').textContent=u.resultMeta(convActiveTool.out.toUpperCase(),convFmtSize(convResultBlob.size));
    document.getElementById('conv-rc-prev').textContent=previewText.substring(0,700)+(previewText.length>700?'\n\n[...]':'');
    document.getElementById('conv-result').classList.add('show');
  }catch(e){
    convLog(u.logErrorPrefix+e.message);
    convShowErr(u.errConvPrefix+e.message);
    convSetProgress(0,'—');
  }finally{
    document.getElementById('conv-btn').disabled=false;
    document.getElementById('conv-btn').textContent=u.btnConvertAgain;
  }
}

// ── I18N — suporte multilingual (PT / EN / ES) do motor de conversão ──
const I18N={
  pt:{
    xmlLang:'pt-BR',
    convertedDoc:'Documento Convertido',
    convertedBy:'FREDTECHSYSTEMS Converter — Conversão Local',
    origin:'Origem',
    sheetName:'Dados',
    slideWord:'Slide',
    dataWord:'Dados',
    noContentPdf:'[PDF com conteúdo de imagem/escaneado — ',
    noContentDocx:'[Documento Word vazio ou sem texto extraível]',
    noContentXlsx:'[Planilha vazia ou sem dados extraíveis]',
    noContentPptx:'[Apresentação vazia ou sem texto extraível]',
    noContentGeneric:'[Sem conteúdo extraído]',
    noDataGeneric:'[Sem dados extraídos]',
  },
  en:{
    xmlLang:'en-US',
    convertedDoc:'Converted Document',
    convertedBy:'FREDTECHSYSTEMS Converter — Local Conversion',
    origin:'Source',
    sheetName:'Data',
    slideWord:'Slide',
    dataWord:'Data',
    noContentPdf:'[Scanned/image PDF with no extractable text — ',
    noContentDocx:'[Word document is empty or has no extractable text]',
    noContentXlsx:'[Spreadsheet is empty or has no extractable data]',
    noContentPptx:'[Presentation is empty or has no extractable text]',
    noContentGeneric:'[No content extracted]',
    noDataGeneric:'[No data extracted]',
  },
  es:{
    xmlLang:'es-ES',
    convertedDoc:'Documento Convertido',
    convertedBy:'FREDTECHSYSTEMS Converter — Conversión Local',
    origin:'Origen',
    sheetName:'Datos',
    slideWord:'Diapositiva',
    dataWord:'Datos',
    noContentPdf:'[PDF con contenido de imagen/escaneado — ',
    noContentDocx:'[Documento Word vacío o sin texto extraíble]',
    noContentXlsx:'[Hoja de cálculo vacía o sin datos extraíbles]',
    noContentPptx:'[Presentación vacía o sin texto extraíble]',
    noContentGeneric:'[Sin contenido extraído]',
    noDataGeneric:'[Sin datos extraídos]',
  }
};
function t(key){return (I18N[convLang]||I18N.pt)[key];}

// ── EXTRAÇÃO — lê o arquivo de origem e devolve uma estrutura simples ──
// { paragraphs: [...], rows: [[...],[...]], slides: [{title,bullets:[...]}] }

async function convExtractPdfStructured(file){
  try{
    if(typeof pdfjsLib==='undefined') throw new Error('pdfjs indisponível');
    const buf=await file.arrayBuffer();
    const pdf=await pdfjsLib.getDocument({data:buf}).promise;
    const maxPages=Math.min(pdf.numPages,60);
    const slides=[],allParagraphs=[],allRows=[];
    for(let p=1;p<=maxPages;p++){
      const page=await pdf.getPage(p);
      const content=await page.getTextContent();
      const items=content.items.filter(it=>it.str&&it.str.trim().length);
      // agrupa itens de texto em linhas pela coordenada Y (topo → base)
      const lines=[];
      items.forEach(it=>{
        const y=Math.round(it.transform[5]);
        let line=lines.find(l=>Math.abs(l.y-y)<3);
        if(!line){line={y,items:[]};lines.push(line);}
        line.items.push(it);
      });
      lines.sort((a,b)=>b.y-a.y);
      const pageLines=[],pageRows=[];
      lines.forEach(line=>{
        line.items.sort((a,b)=>a.transform[4]-b.transform[4]);
        // separa "colunas" quando há um espaçamento grande entre itens (heurística de tabela)
        const cells=[];
        let cur=line.items[0].str;
        for(let i=1;i<line.items.length;i++){
          const prev=line.items[i-1],curIt=line.items[i];
          const gap=curIt.transform[4]-(prev.transform[4]+(prev.width||0));
          if(gap>8){cells.push(cur.trim());cur=curIt.str;}
          else cur+=curIt.str;
        }
        cells.push(cur.trim());
        const textLine=cells.join('  ').trim();
        if(textLine){pageLines.push(textLine);pageRows.push(cells.filter(Boolean));}
      });
      allParagraphs.push(...pageLines);
      allRows.push(...pageRows);
      slides.push({title:pageLines[0]||(t('slideWord')+' '+p),bullets:pageLines.slice(1,8)});
    }
    if(!allParagraphs.length){
      const msg=t('noContentPdf')+file.name+']';
      return {paragraphs:[msg],rows:[[msg]],slides:[{title:file.name,bullets:[msg]}]};
    }
    return {paragraphs:allParagraphs,rows:allRows,slides};
  }catch(e){
    // fallback: método simples baseado em varredura de bytes (caso o pdf.js não carregue)
    const text=await convExtractPdfTextRaw(file);
    const lines=text.split('\n').map(l=>l.trim()).filter(Boolean);
    const paragraphs=lines.length?lines:[t('noContentPdf')+file.name+']'];
    const rows=paragraphs.map(l=>l.split(/\s{2,}|\t/).filter(Boolean));
    const slides=[];
    for(let i=0;i<paragraphs.length;i+=6){
      const chunk=paragraphs.slice(i,i+6);
      slides.push({title:chunk[0]||(t('slideWord')+' '+(slides.length+1)),bullets:chunk.slice(1)});
    }
    return {paragraphs,rows,slides:slides.length?slides:[{title:file.name,bullets:paragraphs.slice(0,6)}]};
  }
}

// extração de texto corrido (usada pelo "Extrair Texto de PDF" e como fallback interno)
async function convExtractPdfText(file){
  try{
    if(typeof pdfjsLib==='undefined') throw new Error('pdfjs indisponível');
    const buf=await file.arrayBuffer();
    const pdf=await pdfjsLib.getDocument({data:buf}).promise;
    const maxPages=Math.min(pdf.numPages,80);
    let full='';
    for(let i=1;i<=maxPages;i++){
      const page=await pdf.getPage(i);
      const content=await page.getTextContent();
      const pageText=content.items.map(it=>it.str).join(' ').replace(/[ \t]+/g,' ').trim();
      full+=(i>1&&full?'\n\n':'')+pageText;
    }
    return full.trim();
  }catch(e){
    return await convExtractPdfTextRaw(file);
  }
}

// fallback bruto: varre os bytes do arquivo procurando texto ASCII legível
function convExtractPdfTextRaw(file){
  return new Promise(resolve=>{
    const r=new FileReader();
    r.onload=e=>{
      const arr=new Uint8Array(e.target.result);
      let t='';
      for(let i=0;i<Math.min(arr.length,80000);i++){
        const c=arr[i];
        if(c>=32&&c<127)t+=String.fromCharCode(c);
        else if(c===10||c===13)t+='\n';
      }
      t=t.replace(/\n{3,}/g,'\n\n').trim();
      resolve(t.substring(0,10000));
    };
    r.readAsArrayBuffer(file);
  });
}

async function convExtractDocxStructured(file){
  const zip=await JSZip.loadAsync(await file.arrayBuffer());
  const xml=await zip.file('word/document.xml').async('string');
  const paras=[...xml.matchAll(/<w:p[ >][\s\S]*?<\/w:p>/g)].map(m=>{
    const texts=[...m[0].matchAll(/<w:t[^>]*>([^<]*)<\/w:t>/g)].map(t=>t[1]);
    return texts.join('');
  }).filter(l=>l.trim().length);
  const paragraphs=paras.length?paras:[t('noContentDocx')];
  const rows=paragraphs.map(l=>l.split(/\s{2,}|\t/).filter(Boolean));
  const slides=[];
  for(let i=0;i<paragraphs.length;i+=6){
    const chunk=paragraphs.slice(i,i+6);
    slides.push({title:chunk[0]||(t('slideWord')+' '+(slides.length+1)),bullets:chunk.slice(1)});
  }
  return {paragraphs,rows,slides:slides.length?slides:[{title:file.name,bullets:paragraphs.slice(0,6)}]};
}

async function convExtractXlsxStructured(file){
  const zip=await JSZip.loadAsync(await file.arrayBuffer());
  let shared=[];
  const sharedFile=zip.file('xl/sharedStrings.xml');
  if(sharedFile){
    const sxml=await sharedFile.async('string');
    shared=[...sxml.matchAll(/<t[^>]*>([^<]*)<\/t>/g)].map(m=>m[1]);
  }
  const sheetFile=zip.file('xl/worksheets/sheet1.xml');
  const rows=[];
  if(sheetFile){
    const sxml=await sheetFile.async('string');
    const rowMatches=[...sxml.matchAll(/<row[^>]*>([\s\S]*?)<\/row>/g)];
    rowMatches.forEach(rm=>{
      const cells=[...rm[1].matchAll(/<c[^>]*(?:t="([^"]*)")?[^>]*>(?:<v>([^<]*)<\/v>)?<\/c>/g)];
      const rowVals=cells.map(c=>{
        const type=c[1],val=c[2]||'';
        if(type==='s'&&shared[+val]!==undefined) return shared[+val];
        return val;
      });
      if(rowVals.some(v=>v!=='')) rows.push(rowVals);
    });
  }
  if(!rows.length) rows.push([t('noContentXlsx')]);
  const paragraphs=rows.map(r=>r.join('  '));
  const slides=[];
  for(let i=0;i<paragraphs.length;i+=10){
    const chunk=paragraphs.slice(i,i+10);
    slides.push({title:t('dataWord')+' '+(slides.length+1),bullets:chunk});
  }
  return {paragraphs,rows,slides:slides.length?slides:[{title:file.name,bullets:paragraphs.slice(0,6)}]};
}

async function convExtractPptxStructured(file){
  const zip=await JSZip.loadAsync(await file.arrayBuffer());
  const slideFiles=Object.keys(zip.files).filter(n=>/^ppt\/slides\/slide\d+\.xml$/.test(n))
    .sort((a,b)=>(+a.match(/\d+/)[0])-(+b.match(/\d+/)[0]));
  const slides=[];
  for(const name of slideFiles){
    const xml=await zip.file(name).async('string');
    const texts=[...xml.matchAll(/<a:t>([^<]*)<\/a:t>/g)].map(m=>m[1]).filter(Boolean);
    slides.push({title:texts[0]||(t('slideWord')+' '+(slides.length+1)),bullets:texts.slice(1)});
  }
  if(!slides.length) slides.push({title:file.name,bullets:[t('noContentPptx')]});
  const paragraphs=slides.flatMap(s=>[s.title,...s.bullets]);
  const rows=paragraphs.map(l=>[l]);
  return {paragraphs,rows,slides};
}

// ── GERAÇÃO — cria arquivos reais nos formatos de saída ──

// PDF real via pdf-lib
async function convGenPDF(structured,origName){
  const pdfDoc=await PDFLib.PDFDocument.create();
  const font=await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
  const fontBold=await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
  const margin=50,lineH=16,pageW=595,pageH=842;
  let page=pdfDoc.addPage([pageW,pageH]);
  let y=pageH-margin;

  const drawHeader=()=>{
    page.drawText(t('convertedBy'),{x:margin,y:pageH-30,size:8,color:PDFLib.rgb(.55,.55,.55)});
    page.drawText(origName,{x:pageW-margin-200,y:pageH-30,size:8,color:PDFLib.rgb(.55,.55,.55)});
  };
  drawHeader();
  page.drawText(t('convertedDoc'),{x:margin,y,size:16,font:fontBold,color:PDFLib.rgb(0,0.2,0.4)});
  y-=28;

  const lines=structured.paragraphs&&structured.paragraphs.length?structured.paragraphs:[t('noContentGeneric')];
  for(const raw of lines){
    const text=String(raw).substring(0,500);
    // wrap simples por largura de caracteres
    const maxChars=95;
    for(let i=0;i<text.length;i+=maxChars){
      if(y<margin+20){ page=pdfDoc.addPage([pageW,pageH]); y=pageH-margin; drawHeader(); }
      page.drawText(text.substring(i,i+maxChars),{x:margin,y,size:10,font,color:PDFLib.rgb(0,0,0)});
      y-=lineH;
    }
    y-=4;
  }
  const bytes=await pdfDoc.save();
  return {blob:new Blob([bytes],{type:'application/pdf'}),preview:lines.slice(0,20).join('\n')};
}

// DOCX real (OOXML) via JSZip
async function convGenDocx(structured,origName){
  const paras=(structured.paragraphs&&structured.paragraphs.length)?structured.paragraphs:[t('noContentGeneric')];
  const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const bodyParas=paras.map(p=>`<w:p><w:r><w:t xml:space="preserve">${esc(p)}</w:t></w:r></w:p>`).join('');

  const documentXml=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
<w:body>
<w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:b/><w:sz w:val="32"/></w:rPr><w:t xml:space="preserve">${esc(t('convertedDoc'))} — FREDTECHSYSTEMS Converter</w:t></w:r></w:p>
<w:p><w:r><w:rPr><w:i/><w:sz w:val="16"/><w:color w:val="888888"/></w:rPr><w:t xml:space="preserve">${esc(t('origin'))}: ${esc(origName)}</w:t></w:r></w:p>
<w:p/>
${bodyParas}
<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1417" w:right="1417" w:bottom="1417" w:left="1417"/></w:sectPr>
</w:body>
</w:document>`;

  const zip=new JSZip();
  zip.file('[Content_Types].xml',`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
</Types>`);
  zip.folder('_rels').file('.rels',`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`);
  zip.folder('word').file('document.xml',documentXml);
  zip.folder('word').folder('_rels').file('document.xml.rels',`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"/>`);

  const blob=await zip.generateAsync({type:'blob',mimeType:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
  return {blob,preview:paras.slice(0,20).join('\n')};
}

// XLSX real (OOXML) via JSZip
async function convGenXlsx(structured,origName){
  const rows=(structured.rows&&structured.rows.length)?structured.rows:[[t('noDataGeneric')]];
  const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const colLetter=n=>{let s='';n++;while(n>0){const m=(n-1)%26;s=String.fromCharCode(65+m)+s;n=Math.floor((n-1)/26);}return s;};

  let sheetRows='';
  rows.forEach((row,ri)=>{
    const rIdx=ri+1;
    let cells='';
    row.forEach((val,ci)=>{
      const ref=colLetter(ci)+rIdx;
      cells+=`<c r="${ref}" t="inlineStr"><is><t xml:space="preserve">${esc(val)}</t></is></c>`;
    });
    sheetRows+=`<row r="${rIdx}">${cells}</row>`;
  });

  const sheetXml=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
<sheetData>${sheetRows}</sheetData>
</worksheet>`;

  const zip=new JSZip();
  zip.file('[Content_Types].xml',`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>`);
  zip.folder('_rels').file('.rels',`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>`);
  zip.folder('xl').file('workbook.xml',`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheets><sheet name="${esc(t('sheetName'))}" sheetId="1" r:id="rId1"/></sheets>
</workbook>`);
  zip.folder('xl').folder('_rels').file('workbook.xml.rels',`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
</Relationships>`);
  zip.folder('xl').folder('worksheets').file('sheet1.xml',sheetXml);

  const blob=await zip.generateAsync({type:'blob',mimeType:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
  return {blob,preview:rows.slice(0,20).map(r=>r.join('  ')).join('\n')};
}

// PPTX real (OOXML) via JSZip
async function convGenPptx(structured,origName){
  const slides=(structured.slides&&structured.slides.length)?structured.slides:[{title:origName,bullets:[t('noContentGeneric')]}];
  const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const xmlLang=t('xmlLang');

  const zip=new JSZip();
  zip.file('[Content_Types].xml',`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>
${slides.map((s,i)=>`<Override PartName="/ppt/slides/slide${i+1}.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>`).join('\n')}
</Types>`);

  zip.folder('_rels').file('.rels',`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/>
</Relationships>`);

  zip.folder('ppt').file('presentation.xml',`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:presentation xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
<p:sldIdLst>${slides.map((s,i)=>`<p:sldId id="${256+i}" r:id="rId${i+1}"/>`).join('')}</p:sldIdLst>
<p:sldSz cx="9144000" cy="6858000"/>
</p:presentation>`);

  zip.folder('ppt').folder('_rels').file('presentation.xml.rels',`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
${slides.map((s,i)=>`<Relationship Id="rId${i+1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide${i+1}.xml"/>`).join('\n')}
</Relationships>`);

  slides.forEach((s,i)=>{
    const bulletShapes=s.bullets.map((b,bi)=>`
      <a:p><a:r><a:rPr lang="${xmlLang}" sz="1800"/><a:t>${esc(b)}</a:t></a:r></a:p>`).join('');
    const slideXml=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
<p:cSld>
<p:spTree>
<p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>
<p:grpSpPr/>
<p:sp>
<p:nvSpPr><p:cNvPr id="2" name="Title"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr><p:ph type="title"/></p:nvPr></p:nvSpPr>
<p:spPr><a:xfrm><a:off x="457200" y="274638"/><a:ext cx="8229600" cy="1143000"/></a:xfrm></p:spPr>
<p:txBody><a:bodyPr/><a:lstStyle/><a:p><a:r><a:rPr lang="${xmlLang}" sz="3200" b="1"/><a:t>${esc(s.title)}</a:t></a:r></a:p></p:txBody>
</p:sp>
<p:sp>
<p:nvSpPr><p:cNvPr id="3" name="Content"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr><p:ph type="body" idx="1"/></p:nvPr></p:nvSpPr>
<p:spPr><a:xfrm><a:off x="457200" y="1600200"/><a:ext cx="8229600" cy="4525963"/></a:xfrm></p:spPr>
<p:txBody><a:bodyPr/><a:lstStyle/>${bulletShapes||`<a:p><a:r><a:rPr lang="${xmlLang}" sz="1800"/><a:t> </a:t></a:r></a:p>`}</p:txBody>
</p:sp>
</p:spTree>
</p:cSld>
</p:sld>`;
    zip.folder('ppt').folder('slides').file('slide'+(i+1)+'.xml',slideXml);
  });

  const blob=await zip.generateAsync({type:'blob',mimeType:'application/vnd.openxmlformats-officedocument.presentationml.presentation'});
  const preview=slides.map(s=>s.title+'\n'+s.bullets.map(b=>'  • '+b).join('\n')).join('\n\n');
  return {blob,preview};
}

function convDownload(){
  if(!convResultBlob)return;
  logConversion(convResultName);
  const a=document.createElement('a');a.href=URL.createObjectURL(convResultBlob);a.download=convResultName;a.click();
}

function convGetIcon(name){return{pdf:'📄',docx:'📝',xlsx:'📊',pptx:'📑'}[name.split('.').pop()]||'📁';}
function convFmtSize(b){if(b<1024)return b+' B';if(b<1024*1024)return(b/1024).toFixed(1)+' KB';return(b/1024/1024).toFixed(2)+' MB';}
function convDelay(ms){return new Promise(r=>setTimeout(r,ms));}

// ── CANVAS ────────────────────────────────────────────
function initSigCanvas(){
  sigCanvas=document.getElementById('sig-canvas');if(!sigCanvas)return;
  sigCanvas.width=sigCanvas.parentElement.offsetWidth||500;sigCanvas.height=160;
  sigCtx=sigCanvas.getContext('2d');sigCtx.fillStyle='#fff';sigCtx.fillRect(0,0,sigCanvas.width,sigCanvas.height);
  sigCanvas.addEventListener('mousedown',()=>{sigDrawing=true;sigCtx.beginPath();});
  sigCanvas.addEventListener('mouseup',()=>sigDrawing=false);
  sigCanvas.addEventListener('mouseleave',()=>sigDrawing=false);
  sigCanvas.addEventListener('mousemove',e=>{
    if(!sigDrawing)return;
    const r=sigCanvas.getBoundingClientRect();
    sigCtx.lineWidth=2.5;sigCtx.lineCap='round';sigCtx.strokeStyle='#001b44';
    sigCtx.lineTo((e.clientX-r.left)*(sigCanvas.width/r.width),(e.clientY-r.top)*(sigCanvas.height/r.height));
    sigCtx.stroke();
  });
  sigCanvas.addEventListener('mouseup',()=>updateGovStampPreview());
}

function clearSig(){if(sigCtx){sigCtx.fillStyle='#fff';sigCtx.fillRect(0,0,sigCanvas.width,sigCanvas.height);}updateGovStampPreview();}

function initTypCanvas(){
  typCanvas=document.getElementById('typ-canvas');if(!typCanvas)return;
  typCanvas.width=typCanvas.parentElement.offsetWidth||500;typCanvas.height=160;
  typCtx=typCanvas.getContext('2d');drawTypeSig();
}

function drawTypeSig(){
  if(!typCanvas){initTypCanvas();return;}if(!typCtx)return;
  const txt=(document.getElementById('sig-name')||{}).value||'Frederico Goulart Abreu';
  typCtx.fillStyle='#fff';typCtx.fillRect(0,0,typCanvas.width,typCanvas.height);
  typCtx.fillStyle='#002b66';typCtx.font="italic 28px 'Playfair Display',serif";
  typCtx.textAlign='center';typCtx.textBaseline='middle';
  typCtx.fillText(txt,typCanvas.width/2,typCanvas.height/2);
  updateGovStampPreview();
}

function switchTab(tab,el){
  activeTab=tab;
  document.querySelectorAll('.sig-tab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.sig-pane').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');document.getElementById('pane-'+tab).classList.add('active');
  if(tab==='type')requestAnimationFrame(()=>initTypCanvas());
  updateGovStampPreview();
}

// ── PDF FUNÇÕES ───────────────────────────────────────
let govAuthData=null;

function validCPFNumber(c){
  if(c.length!==11||/^(\d)\1{10}$/.test(c)) return false;
  let s=0;for(let i=0;i<9;i++)s+=+c[i]*(10-i);let r=(s*10)%11;if(r===10||r===11)r=0;
  if(r!==+c[9]) return false;
  s=0;for(let i=0;i<10;i++)s+=+c[i]*(11-i);r=(s*10)%11;if(r===10||r===11)r=0;
  return r===+c[10];
}

function govAutenticar(){
  const nome=document.getElementById('gov-nome').value.trim();
  const cpfRaw=document.getElementById('gov-cpf').value.replace(/\D/g,'');
  const r=document.getElementById('gov-auth-result');
  r.classList.add('show');
  if(!nome||nome.split(/\s+/).filter(Boolean).length<2){
    r.textContent='❌ Informe o nome completo (nome e sobrenome).';
    return;
  }
  if(!validCPFNumber(cpfRaw)){
    r.textContent='❌ CPF inválido. Verifique os números digitados.';
    return;
  }
  const cpfFmt=cpfRaw.slice(0,3)+'.'+cpfRaw.slice(3,6)+'.'+cpfRaw.slice(6,9)+'-'+cpfRaw.slice(9);
  govAuthData={nome,cpf:cpfFmt};
  r.textContent='✅ Identidade validada com sucesso!';
  document.getElementById('gov-auth-section').style.display='none';
  document.getElementById('gov-sign-section').style.display='block';
  document.getElementById('gov-auth-badge').innerHTML='✅ Autenticado como <strong>'+nome+'</strong> — CPF '+cpfFmt;
  document.getElementById('gsd-name').textContent=nome.toUpperCase();
  const nowLbl=new Date();
  document.getElementById('gsd-date').textContent='Data: '+nowLbl.toLocaleDateString('pt-BR');
  requestAnimationFrame(()=>{initSigCanvas();initGovDrag();});
}

function govLogout(){
  govAuthData=null;
  document.getElementById('gov-sign-section').style.display='none';
  document.getElementById('gov-auth-section').style.display='block';
  document.getElementById('gov-nome').value='';
  document.getElementById('gov-cpf').value='';
  const r=document.getElementById('gov-auth-result');
  r.classList.remove('show');r.textContent='';
  document.getElementById('gov-pos-wrap').style.display='none';
  govPdfJsDoc=null;
}

// ── CRIPTOGRAFIA DA ASSINATURA (SHA-256 + ECDSA P-256, via Web Crypto — tudo local) ──
function abToB64(buf){
  const bytes=new Uint8Array(buf);let bin='';
  for(let i=0;i<bytes.length;i++)bin+=String.fromCharCode(bytes[i]);
  return btoa(bin);
}
function b64ToAb(b64){
  const bin=atob(b64);const bytes=new Uint8Array(bin.length);
  for(let i=0;i<bin.length;i++)bytes[i]=bin.charCodeAt(i);
  return bytes.buffer;
}
function bufToHex(buf){return [...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,'0')).join('');}
async function sha256Hex(bytes){return bufToHex(await crypto.subtle.digest('SHA-256',bytes));}
async function genSigningKeypair(){
  return crypto.subtle.generateKey({name:'ECDSA',namedCurve:'P-256'},true,['sign','verify']);
}
async function signBytes(privateKey,bytes){
  const sig=await crypto.subtle.sign({name:'ECDSA',hash:'SHA-256'},privateKey,bytes);
  return abToB64(sig);
}
async function verifySignedBytes(pubKeyB64,sigB64,bytes){
  const pubKey=await crypto.subtle.importKey('raw',b64ToAb(pubKeyB64),{name:'ECDSA',namedCurve:'P-256'},true,['verify']);
  return crypto.subtle.verify({name:'ECDSA',hash:'SHA-256'},pubKey,b64ToAb(sigB64),bytes);
}
function genVerificationCode(){
  const chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code='';for(let i=0;i<10;i++)code+=chars[Math.floor(Math.random()*chars.length)];
  return 'NTC-'+code.slice(0,5)+'-'+code.slice(5);
}
// Renderiza um QR Code (usando a lib local qrcodejs) e devolve um dataURL PNG
function renderQrDataUrl(text,size){
  return new Promise((resolve,reject)=>{
    try{
      const holder=document.createElement('div');
      holder.style.cssText='position:fixed;left:-9999px;top:-9999px';
      document.body.appendChild(holder);
      new QRCode(holder,{text,width:size||160,height:size||160,correctLevel:QRCode.CorrectLevel.M});
      setTimeout(()=>{
        const canvas=holder.querySelector('canvas');
        const url=canvas?canvas.toDataURL('image/png'):null;
        document.body.removeChild(holder);
        url?resolve(url):reject(new Error('Falha ao gerar QR Code'));
      },60);
    }catch(e){reject(e);}
  });
}

// ── PRÉVIA DA PÁGINA + ARRASTAR ASSINATURA (estilo gov.br) ────
let govPdfJsDoc=null,govCurrentPage=1,govTotalPages=1,govPageViewport=null;
let govDragging=false,govDragOffX=0,govDragOffY=0;

async function loadGovPdfPreview(input){
  if(!input.files.length)return;
  try{
    if(typeof pdfjsLib==='undefined')throw new Error('pdfjs indisponível');
    const buf=await input.files[0].arrayBuffer();
    govPdfJsDoc=await pdfjsLib.getDocument({data:buf}).promise;
    govTotalPages=govPdfJsDoc.numPages;govCurrentPage=1;
    document.getElementById('gov-pos-wrap').style.display='block';
    await renderGovPage();
    updateGovStampPreview();
  }catch(e){
    document.getElementById('gov-pos-wrap').style.display='none';
    govPdfJsDoc=null;
    toast('Não foi possível pré-visualizar este PDF, mas você ainda pode assinar (posição padrão será usada). Erro: '+e.message);
  }
}

async function renderGovPage(){
  if(!govPdfJsDoc)return;
  const page=await govPdfJsDoc.getPage(govCurrentPage);
  const stage=document.getElementById('gov-page-stage');
  const targetW=stage.offsetWidth||520;
  const baseVp=page.getViewport({scale:1});
  const scale=targetW/baseVp.width;
  govPageViewport=page.getViewport({scale});
  const canvas=document.getElementById('gov-page-canvas');
  canvas.width=govPageViewport.width;canvas.height=govPageViewport.height;
  const ctx=canvas.getContext('2d');
  await page.render({canvasContext:ctx,viewport:govPageViewport}).promise;
  document.getElementById('gov-page-label').textContent='Página '+govCurrentPage+' de '+govTotalPages;
  document.getElementById('gov-page-prev').disabled=govCurrentPage<=1;
  document.getElementById('gov-page-next').disabled=govCurrentPage>=govTotalPages;
  // reposiciona o carimbo no canto inferior direito da página renderizada
  const drag=document.getElementById('gov-stamp-drag');
  requestAnimationFrame(()=>{
    drag.style.left=Math.max(4,canvas.clientWidth-drag.offsetWidth-14)+'px';
    drag.style.top=Math.max(4,canvas.clientHeight-drag.offsetHeight-14)+'px';
  });
}

function govChangePage(delta){
  const np=govCurrentPage+delta;
  if(np<1||np>govTotalPages)return;
  govCurrentPage=np;
  renderGovPage();
}

function updateGovStampPreview(){
  const icon=document.getElementById('gsd-icon');
  if(!icon)return;
  try{
    if(activeTab==='draw'&&sigCanvas){icon.innerHTML='<img src="'+sigCanvas.toDataURL('image/png')+'">';}
    else if(activeTab==='type'&&typCanvas){icon.innerHTML='<img src="'+typCanvas.toDataURL('image/png')+'">';}
    else if(activeTab==='upload'){
      const f=(document.getElementById('sig-img')||{}).files;
      if(f&&f[0]){const url=URL.createObjectURL(f[0]);icon.innerHTML='<img src="'+url+'">';}
      else icon.innerHTML='🖋️';
    }
  }catch(e){}
}

function initGovDrag(){
  const drag=document.getElementById('gov-stamp-drag'),stage=document.getElementById('gov-page-stage');
  if(!drag||!stage||drag.dataset.bound)return;
  drag.dataset.bound='1';
  const start=(clientX,clientY)=>{
    const r=drag.getBoundingClientRect();
    govDragging=true;govDragOffX=clientX-r.left;govDragOffY=clientY-r.top;
  };
  const move=(clientX,clientY)=>{
    if(!govDragging)return;
    const stageR=stage.getBoundingClientRect();
    let left=clientX-stageR.left-govDragOffX;
    let top=clientY-stageR.top-govDragOffY;
    left=Math.min(Math.max(0,left),stage.clientWidth-drag.offsetWidth);
    top=Math.min(Math.max(0,top),stage.clientHeight-drag.offsetHeight);
    drag.style.left=left+'px';drag.style.top=top+'px';
  };
  drag.addEventListener('pointerdown',e=>{drag.setPointerCapture(e.pointerId);start(e.clientX,e.clientY);});
  drag.addEventListener('pointermove',e=>move(e.clientX,e.clientY));
  drag.addEventListener('pointerup',()=>govDragging=false);
  drag.addEventListener('pointercancel',()=>govDragging=false);
}

async function processGov(){
  if(!govAuthData){toast('Autentique-se com nome e CPF antes de assinar!');return;}
  const fi=document.getElementById('gov-pdf');
  if(!fi||!fi.files.length){toast('Selecione um PDF!');return;}
  try{
    const ab=await fi.files[0].arrayBuffer();
    const pdfDoc=await PDFLib.PDFDocument.load(ab);
    let pngBytes;
    if(activeTab==='draw'){
      const b64=sigCanvas.toDataURL('image/png').split(',')[1];
      pngBytes=Uint8Array.from(atob(b64),c=>c.charCodeAt(0));
    }else if(activeTab==='type'){
      if(!typCanvas){initTypCanvas();drawTypeSig();}
      const b64=typCanvas.toDataURL('image/png').split(',')[1];
      pngBytes=Uint8Array.from(atob(b64),c=>c.charCodeAt(0));
    }else{
      const f=document.getElementById('sig-img').files[0];
      if(!f){toast('Selecione uma imagem!');return;}
      pngBytes=new Uint8Array(await f.arrayBuffer());
    }
    const isJpg=activeTab==='upload'&&/\.jpe?g$/i.test(document.getElementById('sig-img').files[0].name);
    const img=isJpg?await pdfDoc.embedJpg(pngBytes):await pdfDoc.embedPng(pngBytes);
    const fontReg=await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
    const fontBold=await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
    const dark=PDFLib.rgb(0.08,0.10,0.16);
    const gray=PDFLib.rgb(0.42,0.45,0.50);
    const now=new Date();
    const dataStr=now.toLocaleDateString('pt-BR')+' '+now.toLocaleTimeString('pt-BR',{hour12:false});
    const verifCode=genVerificationCode();

    // ── QR Code de verificação (gerado 100% localmente) ──
    const qrDataUrl=await renderQrDataUrl('FTS-SIG|'+verifCode,180);
    const qrPngBytes=Uint8Array.from(atob(qrDataUrl.split(',')[1]),c=>c.charCodeAt(0));
    const qrImg=await pdfDoc.embedPng(qrPngBytes);

    // ── posição do carimbo: usa o local onde o usuário arrastou sobre a prévia; senão, canto inferior direito ──
    const dragEl=document.getElementById('gov-stamp-drag');
    const canvas=document.getElementById('gov-page-canvas');
    const pages=pdfDoc.getPages();
    const signAllPages=document.getElementById('gov-sign-all-pages')?.checked;
    const targetPages=signAllPages?pages.map((_,i)=>i):[Math.min(govCurrentPage-1,pages.length-1)];

    function stampPage(p){
      const {width:pdfW,height:pdfH}=p.getSize();
      let boxX,boxY,boxW,boxH;
      if(govPdfJsDoc&&dragEl&&canvas&&canvas.clientWidth){
        const scaleX=pdfW/canvas.clientWidth,scaleY=pdfH/canvas.clientHeight;
        boxW=dragEl.offsetWidth*scaleX;boxH=dragEl.offsetHeight*scaleY;
        boxX=parseFloat(dragEl.style.left||0)*scaleX;
        boxY=pdfH-(parseFloat(dragEl.style.top||0)+dragEl.offsetHeight)*scaleY;
      }else{boxW=288;boxH=58;boxX=pdfW-boxW-20;boxY=20;}

      p.drawRectangle({x:boxX,y:boxY,width:boxW,height:boxH,color:PDFLib.rgb(1,1,1),borderColor:PDFLib.rgb(.82,.84,.86),borderWidth:1});
      const qrSide=Math.min(boxH-10,44);
      const imgSide=qrSide;
      p.drawImage(img,{x:boxX+6,y:boxY+(boxH-imgSide)/2,width:imgSide,height:imgSide});
      p.drawImage(qrImg,{x:boxX+boxW-qrSide-6,y:boxY+(boxH-qrSide)/2,width:qrSide,height:qrSide});
      const txtX=boxX+6+imgSide+8,txtMaxW=boxW-imgSide-qrSide-24;
      p.drawText('Documento assinado digitalmente',{x:txtX,y:boxY+boxH-14,size:6.2,font:fontReg,color:gray});
      p.drawText(govAuthData.nome.toUpperCase().substring(0,30),{x:txtX,y:boxY+boxH-25,size:7,font:fontBold,color:dark});
      p.drawText(dataStr,{x:txtX,y:boxY+boxH-35,size:5.6,font:fontReg,color:gray});
      if(boxH>44)p.drawText('Código: '+verifCode,{x:txtX,y:boxY+boxH-44,size:5,font:fontReg,color:gray});
    }
    targetPages.forEach(i=>stampPage(pages[i]));

    // ── metadados do PDF (rastreabilidade adicional) ──
    pdfDoc.setSubject('Assinado digitalmente via FREDTECHSYSTEMS Converter — Código: '+verifCode);
    pdfDoc.setKeywords(['assinatura-digital',verifCode]);
    pdfDoc.setModificationDate(now);

    const finalBytes=await pdfDoc.save();

    // ── assinatura criptográfica do arquivo final (SHA-256 + ECDSA P-256) ──
    const keypair=await genSigningKeypair();
    const pubKeyRaw=await crypto.subtle.exportKey('raw',keypair.publicKey);
    const pubKeyB64=abToB64(pubKeyRaw);
    const signatureB64=await signBytes(keypair.privateKey,finalBytes);
    const hashHex=await sha256Hex(finalBytes);

    const certificado={
      versao:1,
      codigoVerificacao:verifCode,
      arquivo:fi.files[0].name.replace(/\.pdf$/i,'')+'_assinado.pdf',
      signatario:{nome:govAuthData.nome,cpf:govAuthData.cpf},
      dataAssinatura:now.toISOString(),
      algoritmo:'ECDSA P-256 / SHA-256',
      hashSHA256:hashHex,
      chavePublica:pubKeyB64,
      assinatura:signatureB64,
      observacao:'Este certificado comprova a integridade do PDF assinado a partir do momento da assinatura. Qualquer alteração no arquivo invalida a verificação. Não é uma assinatura ICP-Brasil/e-CPF — é uma assinatura criptográfica própria da plataforma, gerada localmente no seu navegador.'
    };

    dl(finalBytes,certificado.arquivo,'application/pdf');
    const certBlob=new Blob([JSON.stringify(certificado,null,2)],{type:'application/json'});
    setTimeout(()=>{const a=document.createElement('a');a.href=URL.createObjectURL(certBlob);a.download='certificado_'+verifCode+'.json';a.click();},400);

    logConversion(fi.files[0].name,'Assinatura Digital');
    toast('✅ PDF assinado e certificado gerados! Código: '+verifCode);
    closeModal();
  }catch(e){toast('Erro: '+e.message);}
}

async function processOFX(){
  const fi=document.getElementById('ofx-file');
  if(!fi.files.length){toast('Selecione um .ofx');return;}
  const txt=await fi.files[0].text();
  const txs=txt.match(/<STMTTRN>([\s\S]*?)<\/STMTTRN>/gi)||[];
  const pdfDoc=await PDFLib.PDFDocument.create();
  const pg=pdfDoc.addPage([600,800]);
  const blu=PDFLib.rgb(0,0.2,0.4);
  pg.drawText('EXTRATO BANCÁRIO — OFX',{x:40,y:760,size:14,color:blu});
  pg.drawText('DATA',{x:40,y:710,size:9,color:blu});pg.drawText('VALOR',{x:150,y:710,size:9,color:blu});pg.drawText('DESCRIÇÃO',{x:250,y:710,size:9,color:blu});
  let y=690;
  if(!txs.length){pg.drawText('Nenhuma transação encontrada.',{x:40,y,size:9});}
  else txs.slice(0,20).forEach(tx=>{
    const dt=(tx.match(/<DTPOSTED>([^\r\n<]+)/i)||[,''])[1].trim().substring(0,8);
    const vl=(tx.match(/<TRNAMT>([^\r\n<]+)/i)||[,'0'])[1].trim();
    const me=(tx.match(/<MEMO>([^\r\n<]+)/i)||tx.match(/<NAME>([^\r\n<]+)/i)||[,'—'])[1].trim();
    pg.drawText(dt,{x:40,y,size:8});pg.drawText(vl,{x:150,y,size:8});pg.drawText(me.substring(0,45),{x:250,y,size:8});y-=18;
  });
  dl(await pdfDoc.save(),'extrato_ofx.pdf','application/pdf');
  toast('✅ Extrato convertido!');closeModal();
}

async function processDRE(){
  const rec=+document.getElementById('dre-rec').value,ded=+document.getElementById('dre-ded').value;
  const cus=+document.getElementById('dre-cus').value,des=+document.getElementById('dre-des').value;
  const rl=rec-ded,lb=rl-cus,ll=lb-des;
  const f=v=>`R$ ${v.toFixed(2).replace('.',',').replace(/\B(?=(\d{3})+(?!\d))/g,'.')}`;
  const pdfDoc=await PDFLib.PDFDocument.create();
  const pg=pdfDoc.addPage([595,620]);
  const blu=PDFLib.rgb(0,0.2,0.4),blk=PDFLib.rgb(0,0,0),grn=PDFLib.rgb(0,.55,0);
  pg.drawText('DEMONSTRAÇÃO DO RESULTADO DO EXERCÍCIO (DRE)',{x:40,y:560,size:13,color:blu});
  [[`Receita Bruta`,510,blk],[f(rec),510,blk,420],['(-) Deduções',490,blk],[f(ded),490,blk,420],
   ['(=) Receita Líquida',470,blu],[f(rl),470,blu,420],['(-) Custos',450,blk],[f(cus),450,blk,420],
   ['(=) Lucro Bruto',430,blu],[f(lb),430,blu,420],['(-) Despesas Adm.',410,blk],[f(des),410,blk,420],
   ['(=) LUCRO LÍQUIDO',380,ll>=0?grn:PDFLib.rgb(.7,0,0)],[f(ll),380,ll>=0?grn:PDFLib.rgb(.7,0,0),400]
  ].forEach(([t,y,c,x=40])=>pg.drawText(String(t),{x,y,size:11,color:c}));
  dl(await pdfDoc.save(),'dre_fga.pdf','application/pdf');closeModal();
}

async function processRecibo(){
  const pag=document.getElementById('rec-pag').value,val=+document.getElementById('rec-val').value,ref=document.getElementById('rec-ref').value;
  const f=v=>`R$ ${v.toFixed(2).replace('.',',').replace(/\B(?=(\d{3})+(?!\d))/g,'.')}`;
  const pdfDoc=await PDFLib.PDFDocument.create();const pg=pdfDoc.addPage([595,420]);
  const blk=PDFLib.rgb(0,0,0);
  pg.drawRectangle({x:30,y:30,width:535,height:360,borderWidth:1,borderColor:blk});
  pg.drawRectangle({x:30,y:350,width:535,height:40,color:PDFLib.rgb(0,0.2,0.4)});
  pg.drawText('RECIBO',{x:50,y:363,size:16,color:PDFLib.rgb(1,1,1)});
  pg.drawText(f(val),{x:400,y:363,size:14,color:PDFLib.rgb(.9,.8,.3)});
  pg.drawText('Recebemos de: '+pag,{x:50,y:310,size:11,color:blk});
  pg.drawText('Referente a: '+ref,{x:50,y:285,size:11,color:blk});
  pg.drawText('Data: '+new Date().toLocaleDateString('pt-BR'),{x:50,y:230,size:10,color:blk});
  pg.drawLine({start:{x:50,y:130},end:{x:260,y:130},thickness:0.5,color:blk});
  pg.drawText('Assinatura do Emitente',{x:80,y:116,size:9,color:PDFLib.rgb(.4,.4,.4)});
  pg.drawText('FREDTECHSYSTEMS Converter · fgaholdingllc@gmail.com',{x:50,y:50,size:8,color:PDFLib.rgb(.5,.5,.5)});
  dl(await pdfDoc.save(),'recibo_fga.pdf','application/pdf');closeModal();
}

async function compressPDF(){
  const fi=document.getElementById('comp-pdf');if(!fi.files.length){toast('Selecione um PDF!');return;}
  const ab=await fi.files[0].arrayBuffer();
  const doc=await PDFLib.PDFDocument.load(ab,{ignoreEncryption:true});
  doc.setTitle('');doc.setAuthor('');doc.setSubject('');doc.setKeywords([]);
  doc.setCreator('FREDTECHSYSTEMS Converter');doc.setProducer('FREDTECHSYSTEMS Converter');
  const bytes=await doc.save({useObjectStreams:true});
  dl(bytes,'comprimido_fga.pdf','application/pdf');
  const orig=fi.files[0].size;
  toast(`✅ Original: ${(orig/1024).toFixed(1)} KB → Novo: ${(bytes.length/1024).toFixed(1)} KB`);closeModal();
}

async function mergePDFs(){
  const fi=document.getElementById('merge-pdfs');if(fi.files.length<2){toast('Selecione 2+ PDFs!');return;}
  const merged=await PDFLib.PDFDocument.create();
  for(const f of fi.files){const doc=await PDFLib.PDFDocument.load(await f.arrayBuffer());const pages=await merged.copyPages(doc,doc.getPageIndices());pages.forEach(p=>merged.addPage(p));}
  dl(await merged.save(),'mesclado_fga.pdf','application/pdf');
  toast('✅ '+fi.files.length+' PDFs mesclados!');closeModal();
}

async function numberPages(){
  const fi=document.getElementById('num-pdf');if(!fi.files.length){toast('Selecione um PDF!');return;}
  const doc=await PDFLib.PDFDocument.load(await fi.files[0].arrayBuffer());
  const pages=doc.getPages();
  pages.forEach((p,i)=>{const {width}=p.getSize();p.drawText(`${i+1}/${pages.length}`,{x:width/2-20,y:18,size:9,color:PDFLib.rgb(.4,.4,.4)});});
  dl(await doc.save(),'numerado_fga.pdf','application/pdf');toast('✅ Páginas numeradas!');closeModal();
}

async function addWatermark(){
  const fi=document.getElementById('wm-pdf');if(!fi.files.length){toast('Selecione um PDF!');return;}
  const txt=document.getElementById('wm-text').value||'CONFIDENCIAL';
  const doc=await PDFLib.PDFDocument.load(await fi.files[0].arrayBuffer());
  doc.getPages().forEach(p=>{const {width,height}=p.getSize();p.drawText(txt,{x:width/2-80,y:height/2,size:48,color:PDFLib.rgb(.8,.8,.8),opacity:0.25,rotate:PDFLib.degrees(45)});});
  dl(await doc.save(),'marcadagua_fga.pdf','application/pdf');toast("✅ Marca d'água aplicada!");closeModal();
}

// ── NOVAS FUNÇÕES PDF (9, 10, 11, 14) ─────────────────
async function rotatePdfPages(){
  const fi=document.getElementById('rot-pdf');if(!fi.files.length){toast('Selecione um PDF!');return;}
  const deg=+document.getElementById('rot-pdf-deg').value;
  const ab=await fi.files[0].arrayBuffer();
  const doc=await PDFLib.PDFDocument.load(ab);
  doc.getPages().forEach(p=>{
    const cur=p.getRotation().angle;
    p.setRotation(PDFLib.degrees((cur+deg)%360));
  });
  dl(await doc.save(),'girado_nexora.pdf','application/pdf');
  toast('✅ Páginas giradas '+deg+'°!');closeModal();
}

let extractedTextGlobal='';
async function extractPdfTextTool(input){
  if(!input.files.length)return;
  const text=await convExtractPdfText(input.files[0]);
  extractedTextGlobal=text;
  const r=document.getElementById('extract-result');
  r.classList.add('show');
  r.textContent=text&&text.trim().length?text:'[Nenhum texto extraível encontrado — o PDF pode ser escaneado/imagem]';
  document.getElementById('extract-dl-btn').style.display='inline-block';
}
function dlExtractedText(){
  if(!extractedTextGlobal){toast('Nenhum texto extraído ainda.');return;}
  const blob=new Blob([extractedTextGlobal],{type:'text/plain;charset=utf-8'});
  logConversion('texto_extraido.txt');
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='texto_extraido.txt';a.click();
}

async function protectPdfFile(){
  const fi=document.getElementById('prot-pdf');const pass=document.getElementById('prot-pass').value;
  if(!fi.files.length||!pass){toast('Selecione um PDF e digite uma senha!');return;}
  try{
    const data=await fi.files[0].arrayBuffer();
    const salt=crypto.getRandomValues(new Uint8Array(16));
    const iv=crypto.getRandomValues(new Uint8Array(12));
    const keyMat=await crypto.subtle.importKey('raw',new TextEncoder().encode(pass),'PBKDF2',false,['deriveKey']);
    const key=await crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations:150000,hash:'SHA-256'},keyMat,{name:'AES-GCM',length:256},false,['encrypt']);
    const enc=await crypto.subtle.encrypt({name:'AES-GCM',iv},key,data);
    const out=new Blob([salt,iv,new Uint8Array(enc)]);
    const lockedName=fi.files[0].name+'.locked';
    logConversion(lockedName);
    const a=document.createElement('a');a.href=URL.createObjectURL(out);a.download=lockedName;a.click();
    toast('✅ PDF protegido gerado! Guarde a senha — ela não pode ser recuperada.');closeModal();
  }catch(e){toast('Erro ao proteger: '+e.message);}
}
async function unlockPdfFile(){
  const fi=document.getElementById('unlock-pdf');const pass=document.getElementById('unlock-pass').value;
  if(!fi.files.length||!pass){toast('Selecione o arquivo .locked e digite a senha!');return;}
  try{
    const buf=new Uint8Array(await fi.files[0].arrayBuffer());
    const salt=buf.slice(0,16),iv=buf.slice(16,28),data=buf.slice(28);
    const keyMat=await crypto.subtle.importKey('raw',new TextEncoder().encode(pass),'PBKDF2',false,['deriveKey']);
    const key=await crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations:150000,hash:'SHA-256'},keyMat,{name:'AES-GCM',length:256},false,['decrypt']);
    const dec=await crypto.subtle.decrypt({name:'AES-GCM',iv},key,data);
    const blob=new Blob([dec],{type:'application/pdf'});
    const name=fi.files[0].name.replace(/\.locked$/,'')||'documento_desbloqueado.pdf';
    logConversion(name);
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();
    toast('✅ PDF desbloqueado!');closeModal();
  }catch(e){toast('❌ Senha incorreta ou arquivo inválido.');}
}

async function splitPdfRange(){
  const fi=document.getElementById('split-pdf');if(!fi.files.length){toast('Selecione um PDF!');return;}
  const start=+document.getElementById('split-start').value,end=+document.getElementById('split-end').value;
  const doc=await PDFLib.PDFDocument.load(await fi.files[0].arrayBuffer());
  const total=doc.getPageCount();
  const s=Math.max(1,start),e=Math.min(total,end);
  if(s>e){toast('Intervalo de páginas inválido!');return;}
  const newDoc=await PDFLib.PDFDocument.create();
  const idxs=[];for(let i=s-1;i<e;i++)idxs.push(i);
  const pages=await newDoc.copyPages(doc,idxs);
  pages.forEach(p=>newDoc.addPage(p));
  dl(await newDoc.save(),`paginas_${s}-${e}.pdf`,'application/pdf');
  toast(`✅ Páginas ${s}–${e} extraídas (de ${total} no total)!`);closeModal();
}

async function addFooter(){
  const fi=document.getElementById('footer-pdf');if(!fi.files.length){toast('Selecione um PDF!');return;}
  const txt=document.getElementById('footer-text').value;
  const doc=await PDFLib.PDFDocument.load(await fi.files[0].arrayBuffer());
  doc.getPages().forEach(p=>{const {width}=p.getSize();p.drawText(txt,{x:40,y:14,size:8,color:PDFLib.rgb(.4,.4,.4)});p.drawLine({start:{x:40,y:24},end:{x:width-40,y:24},thickness:0.3,color:PDFLib.rgb(.7,.7,.7)});});
  dl(await doc.save(),'rodape_fga.pdf','application/pdf');toast('✅ Rodapé adicionado!');closeModal();
}

async function addTimestamp(){
  const fi=document.getElementById('ts-pdf');if(!fi.files.length){toast('Selecione um PDF!');return;}
  const ts=new Date().toLocaleString('pt-BR');
  const doc=await PDFLib.PDFDocument.load(await fi.files[0].arrayBuffer());
  doc.getPages().forEach(p=>{const {width,height}=p.getSize();p.drawText('Emitido em: '+ts,{x:width-200,y:height-20,size:7,color:PDFLib.rgb(.5,.5,.5)});});
  dl(await doc.save(),'carimbado_fga.pdf','application/pdf');toast('✅ Carimbo aplicado!');closeModal();
}

async function showPDFProps(input){
  if(!input.files.length)return;
  const doc=await PDFLib.PDFDocument.load(await input.files[0].arrayBuffer());
  const r=document.getElementById('prop-result');r.classList.add('show');
  r.textContent=[`Arquivo:     ${input.files[0].name}`,`Tamanho:     ${(input.files[0].size/1024).toFixed(1)} KB`,`Páginas:     ${doc.getPageCount()}`,`Título:      ${doc.getTitle()||'—'}`,`Autor:       ${doc.getAuthor()||'—'}`].join('\n');
}

// ── IMAGEM ────────────────────────────────────────────
function resizeImage(){
  const fi=document.getElementById('resize-img');if(!fi.files.length){toast('Selecione uma imagem!');return;}
  const w=+document.getElementById('resize-w').value,h=+document.getElementById('resize-h').value;
  const img=new Image();
  img.onload=()=>{const cv=document.createElement('canvas');cv.width=w;cv.height=h;cv.getContext('2d').drawImage(img,0,0,w,h);cv.toBlob(b=>dl2(b,`redim_${w}x${h}.png`),'image/png');toast(`✅ ${w}×${h}px`);closeModal();};
  img.src=URL.createObjectURL(fi.files[0]);
}

function toGrayscale(){
  const fi=document.getElementById('gray-img');if(!fi.files.length){toast('Selecione uma imagem!');return;}
  const img=new Image();
  img.onload=()=>{
    const cv=document.createElement('canvas');cv.width=img.width;cv.height=img.height;
    const ctx=cv.getContext('2d');ctx.drawImage(img,0,0);
    const d=ctx.getImageData(0,0,cv.width,cv.height);
    for(let i=0;i<d.data.length;i+=4){const g=d.data[i]*.299+d.data[i+1]*.587+d.data[i+2]*.114;d.data[i]=d.data[i+1]=d.data[i+2]=g;}
    ctx.putImageData(d,0,0);
    const prev=document.getElementById('gray-preview');prev.width=img.width;prev.height=img.height;prev.style.display='block';prev.getContext('2d').putImageData(d,0,0);
    cv.toBlob(b=>dl2(b,'cinza.png'),'image/png');toast('✅ Convertido!');closeModal();
  };
  img.src=URL.createObjectURL(fi.files[0]);
}

function toBase64(input){
  if(!input.files.length)return;
  const r=new FileReader();r.onload=e=>{document.getElementById('b64-result').value=e.target.result;};r.readAsDataURL(input.files[0]);
}
function copyB64(){const el=document.getElementById('b64-result');navigator.clipboard.writeText(el.value).then(()=>toast('✅ Copiado!'));}

// ── FINANCEIRO ────────────────────────────────────────
function show(id,txt){const el=document.getElementById(id);el.classList.add('show');el.textContent=txt;}

function calcJuros(){
  const C=+document.getElementById('jc-cap').value,i=+document.getElementById('jc-taxa').value/100;
  const n=+document.getElementById('jc-per').value,a=+document.getElementById('jc-aporte').value;
  const m=C*Math.pow(1+i,n)+a*((Math.pow(1+i,n)-1)/i);
  show('jc-result',`Capital:       R$ ${fmt(C)}\nAportes:       R$ ${fmt(a)} × ${n}m\nTotal invest.: R$ ${fmt(C+a*n)}\nJuros:         R$ ${fmt(m-(C+a*n))}\n─────────────\nMONTANTE:      R$ ${fmt(m)}`);
}

function genQR(){
  const txt=document.getElementById('qr-text').value;if(!txt){toast('Digite o conteúdo!');return;}
  const cv=document.getElementById('qr-canvas');
  const img=new Image();img.crossOrigin='anonymous';
  img.onload=()=>{cv.width=img.width;cv.height=img.height;cv.style.display='block';cv.getContext('2d').drawImage(img,0,0);document.getElementById('qr-dl').style.display='block';};
  img.onerror=()=>toast('Erro ao gerar QR. Verifique conexão.');
  img.src=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(txt)}`;
}
function dlQR(){document.getElementById('qr-canvas').toBlob(b=>dl2(b,'qrcode.png'),'image/png');}

function validarCPF(){
  let c=document.getElementById('cpf-input').value.replace(/\D/g,'');
  if(c.length!==11||/^(\d)\1{10}$/.test(c)){show('cpf-result','❌ CPF INVÁLIDO');return;}
  let s=0;for(let i=0;i<9;i++)s+=+c[i]*(10-i);let r=(s*10)%11;if(r===10||r===11)r=0;
  if(r!==+c[9]){show('cpf-result','❌ CPF INVÁLIDO');return;}
  s=0;for(let i=0;i<10;i++)s+=+c[i]*(11-i);r=(s*10)%11;if(r===10||r===11)r=0;
  if(r!==+c[10]){show('cpf-result','❌ CPF INVÁLIDO');return;}
  show('cpf-result',`✅ CPF VÁLIDO\n${c.slice(0,3)}.${c.slice(3,6)}.${c.slice(6,9)}-${c.slice(9)}`);
}

function validarCNPJ(){
  let c=document.getElementById('cnpj-input').value.replace(/\D/g,'');
  if(c.length!==14){show('cnpj-result','❌ CNPJ INVÁLIDO — 14 dígitos');return;}
  const calc=(n,w)=>{let s=0,p=w;for(let i=0;i<n.length;i++){s+=+n[i]*p--;if(p<2)p=9;}return s%11<2?0:11-(s%11);};
  if(calc(c.slice(0,12),5)!==+c[12]||calc(c.slice(0,13),6)!==+c[13]){show('cnpj-result','❌ CNPJ INVÁLIDO');return;}
  show('cnpj-result',`✅ CNPJ VÁLIDO\n${c.slice(0,2)}.${c.slice(2,5)}.${c.slice(5,8)}/${c.slice(8,12)}-${c.slice(12)}`);
}

function calcICMS(){
  const v=+document.getElementById('icms-val').value,a=+document.getElementById('icms-aliq').value;
  const icms=v*(a/100);
  show('icms-result',`Valor:     R$ ${fmt(v)}\nICMS ${a}%: R$ ${fmt(icms)}\n─────────\nLíquido:   R$ ${fmt(v-icms)}`);
}

function calcMoeda(){
  const v=+document.getElementById('cur-val').value,r=+document.getElementById('cur-rate').value;
  show('cur-result',`R$ ${fmt(v)} BRL\n= USD ${fmt(v/r)}\n\nUSD ${fmt(v)} = R$ ${fmt(v*r)}`);
}

function calcDesconto(){
  const p=+document.getElementById('desc-preco').value,d=+document.getElementById('desc-perc').value;
  const vd=p*d/100;
  show('desc-result',`Original:  R$ ${fmt(p)}\nDesconto:  R$ ${fmt(vd)} (${d}%)\n─────────\nFinal:     R$ ${fmt(p-vd)}`);
}

function calcINSS(){
  const sal=+document.getElementById('inss-sal').value;
  const f=[[1518,7.5],[2594.93,9],[3856.94,12],[7786.02,14]];
  let inss=0,base=sal,prev=0;
  for(const[teto,aliq]of f){if(base<=0)break;const fx=Math.min(base,teto-prev);inss+=fx*(aliq/100);base-=fx;prev=teto;}
  if(sal>7786.02)inss+=(sal-7786.02)*0.14;
  show('inss-result',`Bruto:    R$ ${fmt(sal)}\nINSS:     R$ ${fmt(inss)}\n─────────\nBase IR:  R$ ${fmt(sal-inss)}`);
}

function calcIRRF(){
  const sal=+document.getElementById('irrf-sal').value,dep=+document.getElementById('irrf-dep').value;
  const inss=Math.min(sal*0.14,1089.64),ded=dep*189.59,base=sal-inss-ded;
  let irrf=0;
  if(base>4664.68)irrf=base*.275-896;
  else if(base>3751.05)irrf=base*.225-662.77;
  else if(base>2826.65)irrf=base*.15-381.44;
  else if(base>2259.20)irrf=base*.075-169.44;
  if(irrf<0)irrf=0;
  show('irrf-result',`Bruto:    R$ ${fmt(sal)}\nINSS:     R$ ${fmt(inss)}\nDep.:     R$ ${fmt(ded)}\nBase IR:  R$ ${fmt(base)}\nIRRF:     R$ ${fmt(irrf)}\n─────────\nLíquido:  R$ ${fmt(sal-inss-irrf)}`);
}

function genSenha(){
  const len=+document.getElementById('pw-len').value,type=document.getElementById('pw-type').value;
  const a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',n='0123456789',s='!@#$%^&*()-_=+[]{}|;:,.<>?';
  const charset=type==='all'?a+n+s:type==='alphanum'?a+n:type==='alpha'?a:n;
  let pw='';for(let i=0;i<len;i++)pw+=charset[Math.floor(Math.random()*charset.length)];
  show('pw-result',`Senha:\n${pw}\n\nForça: ${len>=16?'🟢 Forte':len>=12?'🟡 Média':'🔴 Fraca'}`);
}

function calcFinanciamento(){
  const pv=+document.getElementById('fin-val').value,i=+document.getElementById('fin-taxa').value/100;
  const n=+document.getElementById('fin-prazo').value,sys=document.getElementById('fin-sys').value;
  if(sys==='price'){
    const pmt=pv*(i*Math.pow(1+i,n))/(Math.pow(1+i,n)-1),total=pmt*n;
    show('fin-result',`Price — parcelas fixas\nParcela: R$ ${fmt(pmt)}\nTotal:   R$ ${fmt(total)}\nJuros:   R$ ${fmt(total-pv)}`);
  }else{
    const am=pv/n,p1=am+pv*i,pn=am+am*i,total=(p1+pn)/2*n;
    show('fin-result',`SAC — amortização const.\nAmort.:  R$ ${fmt(am)}\n1ª parc: R$ ${fmt(p1)}\nÚlt.:    R$ ${fmt(pn)}\nTotal:   R$ ${fmt(total)}\nJuros:   R$ ${fmt(total-pv)}`);
  }
}

function calcFolha(){
  const sal=+document.getElementById('fp-sal').value,dep=+document.getElementById('fp-dep').value;
  const inss=Math.min(sal*0.12,sal>7786?1089:sal*0.12),ded=dep*189.59,base=sal-inss-ded;
  let irrf=0;
  if(base>4664.68)irrf=base*.275-896;else if(base>3751.05)irrf=base*.225-662.77;
  else if(base>2826.65)irrf=base*.15-381.44;else if(base>2259.20)irrf=base*.075-169.44;
  if(irrf<0)irrf=0;
  show('fp-result',`Bruto:   R$ ${fmt(sal)}\nINSS:    R$ ${fmt(inss)}\nIRRF:    R$ ${fmt(irrf)}\n─────────────\nLÍQUIDO: R$ ${fmt(sal-inss-irrf)}\n\nFGTS(emp): R$ ${fmt(sal*.08)}`);
}

function calcROI(){
  const inv=+document.getElementById('roi-inv').value,ret=+document.getElementById('roi-ret').value,per=+document.getElementById('roi-per').value;
  const lucro=ret-inv,roi=(lucro/inv)*100,pb=inv/(lucro/per);
  show('roi-result',`Investimento: R$ ${fmt(inv)}\nRetorno:      R$ ${fmt(ret)}\nLucro:        R$ ${fmt(lucro)}\n─────────────────\nROI:          ${roi.toFixed(2)}%\nPayback:      ${pb.toFixed(1)} meses`);
}

// ── UTILITÁRIOS ───────────────────────────────────────
function fmt(v){return v.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});}
function dl(bytes,name,mime){logConversion(name);const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([bytes],{type:mime}));a.download=name;a.click();}
function dl2(blob,name){logConversion(name);const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();}

// ── IMAGEM — funções faltantes ────────────────────────
function convertImgFmt(){
  const fi=document.getElementById('conv-img');if(!fi.files.length){toast('Selecione uma imagem!');return;}
  const fmt=document.getElementById('conv-fmt').value;
  const q=+(document.getElementById('conv-q')||{value:0.92}).value/100;
  const img=new Image();
  img.onload=()=>{const cv=document.createElement('canvas');cv.width=img.width;cv.height=img.height;cv.getContext('2d').drawImage(img,0,0);const ext=fmt.split('/')[1];cv.toBlob(b=>dl2(b,'convertida.'+ext),fmt,q);toast('✅ Imagem convertida!');closeModal();};
  img.src=URL.createObjectURL(fi.files[0]);
}
function compressImg(){
  const fi=document.getElementById('comp-img');if(!fi.files.length){toast('Selecione uma imagem!');return;}
  const q=+document.getElementById('comp-q').value/100;
  const img=new Image();
  img.onload=()=>{const cv=document.createElement('canvas');cv.width=img.width;cv.height=img.height;cv.getContext('2d').drawImage(img,0,0);cv.toBlob(b=>{dl2(b,'comprimida.jpg');toast(`✅ Comprimida! Original: ${(fi.files[0].size/1024).toFixed(0)}KB → Novo: ${(b.size/1024).toFixed(0)}KB`);closeModal();},'image/jpeg',q);};
  img.src=URL.createObjectURL(fi.files[0]);
}
function invertImg(){
  const fi=document.getElementById('inv-img');if(!fi.files.length){toast('Selecione uma imagem!');return;}
  const img=new Image();
  img.onload=()=>{
    const cv=document.createElement('canvas');cv.width=img.width;cv.height=img.height;
    const ctx=cv.getContext('2d');ctx.drawImage(img,0,0);
    const d=ctx.getImageData(0,0,cv.width,cv.height);
    for(let i=0;i<d.data.length;i+=4){d.data[i]=255-d.data[i];d.data[i+1]=255-d.data[i+1];d.data[i+2]=255-d.data[i+2];}
    ctx.putImageData(d,0,0);
    const prev=document.getElementById('inv-prev');prev.width=img.width;prev.height=img.height;prev.style.display='block';prev.getContext('2d').putImageData(d,0,0);
    cv.toBlob(b=>dl2(b,'invertida.png'),'image/png');toast('✅ Cores invertidas!');closeModal();
  };
  img.src=URL.createObjectURL(fi.files[0]);
}
function rotateImg(){
  const fi=document.getElementById('rot-img');if(!fi.files.length){toast('Selecione uma imagem!');return;}
  const deg=+document.getElementById('rot-deg').value;
  const img=new Image();
  img.onload=()=>{
    const rad=deg*Math.PI/180;
    const cv=document.createElement('canvas');
    if(deg===90||deg===270){cv.width=img.height;cv.height=img.width;}else{cv.width=img.width;cv.height=img.height;}
    const ctx=cv.getContext('2d');ctx.translate(cv.width/2,cv.height/2);ctx.rotate(rad);ctx.drawImage(img,-img.width/2,-img.height/2);
    cv.toBlob(b=>dl2(b,'rotacionada.png'),'image/png');toast(`✅ Rotacionada ${deg}°!`);closeModal();
  };
  img.src=URL.createObjectURL(fi.files[0]);
}
function mirrorImg(){
  const fi=document.getElementById('mir-img');if(!fi.files.length){toast('Selecione uma imagem!');return;}
  const dir=document.getElementById('mir-dir').value;
  const img=new Image();
  img.onload=()=>{
    const cv=document.createElement('canvas');cv.width=img.width;cv.height=img.height;
    const ctx=cv.getContext('2d');
    if(dir==='h'){ctx.translate(cv.width,0);ctx.scale(-1,1);}else{ctx.translate(0,cv.height);ctx.scale(1,-1);}
    ctx.drawImage(img,0,0);
    cv.toBlob(b=>dl2(b,'espelhada.png'),'image/png');toast('✅ Imagem espelhada!');closeModal();
  };
  img.src=URL.createObjectURL(fi.files[0]);
}
function addBorder(){
  const fi=document.getElementById('brd-img');if(!fi.files.length){toast('Selecione uma imagem!');return;}
  const color=document.getElementById('brd-color').value,size=+document.getElementById('brd-size').value;
  const img=new Image();
  img.onload=()=>{
    const cv=document.createElement('canvas');cv.width=img.width+size*2;cv.height=img.height+size*2;
    const ctx=cv.getContext('2d');ctx.fillStyle=color;ctx.fillRect(0,0,cv.width,cv.height);ctx.drawImage(img,size,size);
    cv.toBlob(b=>dl2(b,'borda.png'),'image/png');toast('✅ Borda adicionada!');closeModal();
  };
  img.src=URL.createObjectURL(fi.files[0]);
}
function genThumbnail(){
  const fi=document.getElementById('thumb-img');if(!fi.files.length){toast('Selecione uma imagem!');return;}
  const mw=+document.getElementById('thumb-w').value,mh=+document.getElementById('thumb-h').value;
  const img=new Image();
  img.onload=()=>{
    const ratio=Math.min(mw/img.width,mh/img.height);
    const cv=document.createElement('canvas');cv.width=img.width*ratio;cv.height=img.height*ratio;
    cv.getContext('2d').drawImage(img,0,0,cv.width,cv.height);
    cv.toBlob(b=>dl2(b,`thumb_${cv.width}x${cv.height}.png`),'image/png');
    toast(`✅ Miniatura ${cv.width}×${cv.height}px gerada!`);closeModal();
  };
  img.src=URL.createObjectURL(fi.files[0]);
}
function watermarkImg(){
  const fi=document.getElementById('wmi-img');if(!fi.files.length){toast('Selecione uma imagem!');return;}
  const txt=document.getElementById('wmi-txt').value,color=document.getElementById('wmi-color').value,op=+document.getElementById('wmi-op').value/100;
  const img=new Image();
  img.onload=()=>{
    const cv=document.createElement('canvas');cv.width=img.width;cv.height=img.height;
    const ctx=cv.getContext('2d');ctx.drawImage(img,0,0);
    ctx.globalAlpha=op;ctx.fillStyle=color;ctx.font=`bold ${Math.max(24,img.width/15)}px Arial`;
    ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(txt,cv.width/2,cv.height/2);
    cv.toBlob(b=>dl2(b,'marcadagua.png'),'image/png');toast("✅ Marca d'água aplicada!");closeModal();
  };
  img.src=URL.createObjectURL(fi.files[0]);
}
function addTextImg(){
  const fi=document.getElementById('txt-img');if(!fi.files.length){toast('Selecione uma imagem!');return;}
  const txt=document.getElementById('txt-text').value,sz=+document.getElementById('txt-size').value;
  const color=document.getElementById('txt-color').value,x=+document.getElementById('txt-x').value,y=+document.getElementById('txt-y').value;
  const img=new Image();
  img.onload=()=>{
    const cv=document.createElement('canvas');cv.width=img.width;cv.height=img.height;
    const ctx=cv.getContext('2d');ctx.drawImage(img,0,0);
    ctx.font=`bold ${sz}px Arial`;ctx.fillStyle=color;ctx.fillText(txt,x,y);
    cv.toBlob(b=>dl2(b,'texto_img.png'),'image/png');toast('✅ Texto adicionado!');closeModal();
  };
  img.src=URL.createObjectURL(fi.files[0]);
}

// ── CONVERSORES — funções faltantes ──────────────────
function genBarcode(){
  const num=document.getElementById('ean-num').value.replace(/\D/g,'');
  if(num.length!==13){toast('EAN-13 precisa ter 13 dígitos!');return;}
  const cv=document.getElementById('ean-canvas');cv.width=300;cv.height=100;
  const ctx=cv.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,300,100);
  const bw=2,x0=20,h=70;
  ctx.fillStyle='#000';
  for(let i=0;i<num.length;i++){
    const d=+num[i];
    for(let b=0;b<d+1;b++){ctx.fillRect(x0+i*20+b*bw,10,bw,h);}
  }
  ctx.font='12px monospace';ctx.fillStyle='#000';ctx.textAlign='center';ctx.fillText(num,150,95);
  document.getElementById('ean-dl').style.display='inline-block';
}
function dlEAN(){document.getElementById('ean-canvas').toBlob(b=>dl2(b,'barcode_ean13.png'),'image/png');}

function calcPrazo(){
  const ini=new Date(document.getElementById('pz-inicio').value);
  const fim=new Date(document.getElementById('pz-fim').value);
  const tipo=document.getElementById('pz-tipo').value;
  if(isNaN(ini)||isNaN(fim)){toast('Selecione as datas!');return;}
  let corridos=0,uteis=0,cur=new Date(ini);
  while(cur<=fim){corridos++;const d=cur.getDay();if(d!==0&&d!==6)uteis++;cur.setDate(cur.getDate()+1);}
  const res=tipo==='uteis'?uteis:corridos;
  show('pz-result',`Data inicial: ${ini.toLocaleDateString('pt-BR')}\nData final:   ${fim.toLocaleDateString('pt-BR')}\n─────────────────────\nDias corridos: ${corridos}\nDias úteis:    ${uteis}\n\nResultado (${tipo==='uteis'?'dias úteis':'dias corridos'}): ${res} dia${res!==1?'s':''}`);
}

const UNITS={
  peso:{kg:'kg',lb:'lb',g:'g',oz:'oz',t:'t (ton.)'},
  dist:{km:'km',mi:'milha',m:'metro',cm:'cm',ft:'pé',in:'polegada'},
  vol:{l:'litro',ml:'ml',gal:'galão (US)',pt:'pint',fl_oz:'fl oz'},
  temp:{c:'°C',f:'°F',k:'K'},
  area:{m2:'m²',ft2:'ft²',ha:'hectare',km2:'km²',acre:'acre'}
};
const CONV_FACTOR={
  peso:{kg:1,lb:2.20462,g:1000,oz:35.274,t:0.001},
  dist:{km:1,mi:0.621371,m:1000,cm:100000,ft:3280.84,in:39370.1},
  vol:{l:1,ml:1000,gal:0.264172,pt:2.11338,fl_oz:33.814},
  area:{m2:1,ft2:10.7639,ha:0.0001,km2:0.000001,acre:0.000247105}
};
function updateUnitSels(){
  const cat=document.getElementById('un-cat').value;
  const deEl=document.getElementById('un-de'),paraEl=document.getElementById('un-para');
  deEl.innerHTML='';paraEl.innerHTML='';
  Object.entries(UNITS[cat]).forEach(([k,v])=>{deEl.add(new Option(v,k));paraEl.add(new Option(v,k));});
  paraEl.selectedIndex=1;
}
function convertUnit(){
  const cat=document.getElementById('un-cat').value,val=+document.getElementById('un-val').value;
  const de=document.getElementById('un-de').value,para=document.getElementById('un-para').value;
  let res;
  if(cat==='temp'){
    if(de==='c'&&para==='f')res=val*9/5+32;
    else if(de==='f'&&para==='c')res=(val-32)*5/9;
    else if(de==='c'&&para==='k')res=val+273.15;
    else if(de==='k'&&para==='c')res=val-273.15;
    else if(de==='f'&&para==='k')res=(val-32)*5/9+273.15;
    else if(de==='k'&&para==='f')res=(val-273.15)*9/5+32;
    else res=val;
  }else{
    const base=val/CONV_FACTOR[cat][de];res=base*CONV_FACTOR[cat][para];
  }
  show('un-result',`${val} ${UNITS[cat][de]}\n= ${res.toFixed(6).replace(/\.?0+$/,'')} ${UNITS[cat][para]}`);
}

function parseCNAB(){
  const fi=document.getElementById('cnab-file');if(!fi.files.length){toast('Selecione o arquivo CNAB!');return;}
  fi.files[0].text().then(txt=>{
    const lines=txt.split('\n').filter(l=>l.trim());
    let out=`CNAB 240 — PARSER FREDTECHSYSTEMS Converter\nArquivo: ${fi.files[0].name}\nLinhas: ${lines.length}\n${'─'.repeat(60)}\n`;
    lines.slice(0,20).forEach((l,i)=>{
      const tipo=l.substring(7,8);
      const seg=l.substring(13,14)||'—';
      out+=`[${(i+1).toString().padStart(3)}] Seg:${seg} Tipo:${tipo} | ${l.substring(0,60).trim()}\n`;
    });
    if(lines.length>20)out+=`\n... e mais ${lines.length-20} linhas`;
    show('cnab-result',out);
  });
}

function parseNFe(){
  const fi=document.getElementById('nfe-file');if(!fi.files.length){toast('Selecione o XML!');return;}
  fi.files[0].text().then(txt=>{
    const g=(tag)=>{const m=txt.match(new RegExp(`<${tag}[^>]*>([^<]+)<\/${tag}>`,'i'));return m?m[1].trim():'—';};
    const gAll=(tag)=>{const m=txt.match(new RegExp(`<${tag}[^>]*>([^<]+)<\/${tag}>`,'gi'));return m?m.map(x=>x.replace(/<[^>]+>/g,'').trim()):[];};
    const nNF=g('nNF'),dhEmi=g('dhEmi'),vNF=g('vNF'),xNome=g('xNome'),xFant=g('xFant'),CNPJ=g('CNPJ');
    const prods=gAll('xProd'),qtds=gAll('qCom'),vals=gAll('vProd');
    let out=`NF-e — PARSER FREDTECHSYSTEMS Converter\n${'─'.repeat(50)}\nNº NF-e:      ${nNF}\nEmissão:      ${dhEmi}\nEmitente:     ${xNome||xFant}\nCNPJ:         ${CNPJ}\nValor Total:  R$ ${vNF}\n\nPRODUTOS:\n`;
    prods.slice(0,10).forEach((p,i)=>out+=`  ${i+1}. ${p} — Qtd: ${qtds[i]||'?'} — R$ ${vals[i]||'?'}\n`);
    if(!nNF||nNF==='—')out='Arquivo XML não reconhecido como NF-e padrão.\nVerifique se é um XML de NF-e válido.';
    show('nfe-result',out);
  });
}

function calcPISCOFINS(){
  const rec=+document.getElementById('pc-rec').value;
  const reg=document.getElementById('pc-reg').value;
  let pis,cofins;
  if(reg==='nao_cumulativo'){pis=rec*0.0165;cofins=rec*0.076;}
  else{pis=rec*0.0065;cofins=rec*0.03;}
  show('pc-result',`Receita Bruta:   R$ ${fmt(rec)}\nRegime:          ${reg==='nao_cumulativo'?'Não Cumulativo':'Cumulativo'}\n─────────────────────────────\nPIS (${reg==='nao_cumulativo'?'1,65':'0,65'}%):     R$ ${fmt(pis)}\nCOFINS (${reg==='nao_cumulativo'?'7,6':'3'}%):    R$ ${fmt(cofins)}\nTotal PIS+COF:   R$ ${fmt(pis+cofins)}`);
}

// ── CONTABILIDADE ÚTIL — funções ──────────────────────
function calcDep(){
  const val=+document.getElementById('dep-val').value,res=+document.getElementById('dep-res').value;
  const anos=+document.getElementById('dep-anos').value,met=document.getElementById('dep-met').value;
  const base=val-res;
  let out=`DEPRECIAÇÃO — ${met==='linear'?'Linear':'Soma dos Dígitos'}\n${'─'.repeat(50)}\nValor do Bem: R$ ${fmt(val)} | Residual: R$ ${fmt(res)} | Vida Útil: ${anos} anos\n\n`;
  out+='Ano  | Depreciação Anual | Depreciação Acum. | Valor Líquido\n';
  out+='─'.repeat(65)+'\n';
  let acum=0;
  const sd=anos*(anos+1)/2;
  for(let i=1;i<=Math.min(anos,10);i++){
    const dep=met==='linear'?base/anos:base*(anos-i+1)/sd;
    acum+=dep;
    out+=`  ${i.toString().padEnd(3)} | R$ ${fmt(dep).padEnd(16)} | R$ ${fmt(acum).padEnd(16)} | R$ ${fmt(val-acum)}\n`;
  }
  if(anos>10)out+=`  ... (${anos-10} anos omitidos)\n`;
  show('dep-result',out);
}

function calcFGTS(){
  const sal=+document.getElementById('fg-sal').value,meses=+document.getElementById('fg-meses').value;
  const motivo=document.getElementById('fg-motivo').value;
  const saldoFGTS=sal*0.08*meses;
  let multa=0,aviso=0,ferias=0,dec=0;
  if(motivo==='sem_justa'){multa=saldoFGTS*0.4;aviso=sal;ferias=sal*(1/3+1);dec=sal/12*meses%12||sal/12;}
  else if(motivo==='pedido'){ferias=sal*(1/3+1);}
  show('fg-result',
    `CÁLCULO FGTS / RESCISÃO — FREDTECHSYSTEMS Converter\n${'─'.repeat(45)}\n`+
    `Salário: R$ ${fmt(sal)} | Meses: ${meses} | Motivo: ${motivo.replace('_',' ')}\n\n`+
    `Saldo FGTS:           R$ ${fmt(saldoFGTS)}\n`+
    (motivo==='sem_justa'?`Multa 40% FGTS:       R$ ${fmt(multa)}\nAviso Prévio:         R$ ${fmt(aviso)}\nFérias + 1/3:         R$ ${fmt(ferias)}\n13º Proporcional:     R$ ${fmt(dec)}\n`:'')  +
    `─────────────────────────────────\nTOTAL A RECEBER:      R$ ${fmt(saldoFGTS+multa+aviso+ferias+dec)}`);
}

function calcSN(){
  const rec=+document.getElementById('sn-rec').value;
  const anx=+document.getElementById('sn-anx').value;
  const tabelas=[
    [[180000,4],[360000,7.3],[720000,9.5],[1800000,10.7],[3600000,14.3],[4800000,19]],
    [[180000,4.5],[360000,7.8],[720000,10],[1800000,11.2],[3600000,14.7],[4800000,30]],
    [[180000,6],[360000,11.2],[720000,13.5],[1800000,16],[3600000,21],[4800000,33]],
    [[180000,4.5],[360000,9],[720000,12],[1800000,14.4],[3600000,22.5],[4800000,33]],
    [[180000,15.5],[360000,18],[720000,19.5],[1800000,20.5],[3600000,23],[4800000,30.5]],
  ];
  const tab=tabelas[anx-1];let aliq=tab[tab.length-1][1];
  for(const[teto,a]of tab){if(rec<=teto){aliq=a;break;}}
  const imp=rec*(aliq/100);
  show('sn-result',
    `SIMPLES NACIONAL — Estimativa\n${'─'.repeat(45)}\nReceita Bruta Anual: R$ ${fmt(rec)}\nAnexo:               ${anx}\nAlíquota Nominal:    ${aliq}%\n─────────────────────────────\nIMPOSTO ESTIMADO:    R$ ${fmt(imp)}\nIMPOSTO MENSAL:      R$ ${fmt(imp/12)}\n\n⚠️ Estimativa simplificada. Consulte um contador.`);
}

async function gerarInformeIR(){
  const nome=document.getElementById('ir-nome').value,cpf=document.getElementById('ir-cpf').value;
  const ano=document.getElementById('ir-ano').value,rt=+document.getElementById('ir-rt').value;
  const retido=+document.getElementById('ir-retido').value,ded=+document.getElementById('ir-ded').value;
  const base=rt-ded;
  let irDevido=0;
  if(base>55801.6)irDevido=base*.275-10432.32;
  else if(base>43057.2)irDevido=base*.225-6677.55;
  else if(base>33919.8)irDevido=base*.15-3558.7;
  else if(base>27110.4)irDevido=base*.075-2112.27;
  if(irDevido<0)irDevido=0;
  const saldo=irDevido-retido;
  const pdfDoc=await PDFLib.PDFDocument.create();const pg=pdfDoc.addPage([595,550]);
  const blu=PDFLib.rgb(0,0.2,0.4),blk=PDFLib.rgb(0,0,0),wh=PDFLib.rgb(1,1,1);
  const grn=PDFLib.rgb(0,.55,0),red=PDFLib.rgb(.7,0,0);
  pg.drawRectangle({x:30,y:505,width:535,height:35,color:blu});
  pg.drawText('INFORME DE RENDIMENTOS — FREDTECHSYSTEMS Converter',{x:90,y:516,size:13,color:wh});
  pg.drawText('Ano-Calendário: '+ano,{x:390,y:516,size:9,color:PDFLib.rgb(.9,.8,.3)});
  const lin=(t,v,y,c=blk)=>{pg.drawText(t,{x:50,y,size:11,color:c});pg.drawText(v,{x:400,y,size:11,color:c});};
  lin('Contribuinte:',nome,468);lin('CPF:',cpf,448);
  pg.drawLine({start:{x:50,y:432},end:{x:555,y:432},thickness:.5,color:PDFLib.rgb(.7,.7,.7)});
  lin('Rendimento Tributável Total:','R$ '+fmt(rt),415,blu);
  lin('(-) Deduções:','R$ '+fmt(ded),395);
  lin('(=) Base de Cálculo:','R$ '+fmt(base),375,blu);
  lin('IRPF Devido:','R$ '+fmt(irDevido),348,blk);
  lin('(-) IRRF Retido na Fonte:','R$ '+fmt(retido),328,blk);
  pg.drawLine({start:{x:50,y:312},end:{x:555,y:312},thickness:1,color:blu});
  const corSaldo=saldo>0?red:grn;
  pg.drawText(saldo>0?'IR A PAGAR:':'IR A RESTITUIR:',{x:50,y:293,size:13,color:corSaldo});
  pg.drawText('R$ '+fmt(Math.abs(saldo)),{x:400,y:293,size:13,color:corSaldo});
  pg.drawText('⚠️ Este informe é estimativo. Consulte sempre um contador habilitado.',{x:50,y:60,size:8,color:PDFLib.rgb(.5,.5,.5)});
  dl(await pdfDoc.save(),'informe_ir_'+ano+'.pdf','application/pdf');closeModal();
}

// ── EDITOR DE TEXTO ───────────────────────────────────
function edtRemoveAccents(s){return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'');}
function edtTransform(op){
  const input=document.getElementById('edt-input').value;
  let out=input;
  if(op==='upper')out=input.toUpperCase();
  else if(op==='lower')out=input.toLowerCase();
  else if(op==='capitalize')out=input.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g,c=>c.toUpperCase());
  else if(op==='title')out=input.toLowerCase().replace(/\b\w/g,c=>c.toUpperCase());
  else if(op==='trim')out=input.replace(/[ \t]+/g,' ').split('\n').map(l=>l.trim()).join('\n').replace(/\n{3,}/g,'\n\n').trim();
  else if(op==='noaccent')out=edtRemoveAccents(input);
  else if(op==='reverse')out=input.split('').reverse().join('');
  else if(op==='clean')out=input.split('\n').filter(l=>l.trim().length).join('\n');
  document.getElementById('edt-output').value=out;
  edtUpdateStats();
}
function edtUpdateStats(){
  const input=document.getElementById('edt-input').value;
  const out=document.getElementById('edt-output').value;
  const txt=out||input;
  const palavras=txt.trim()?txt.trim().split(/\s+/).length:0;
  const caracteres=txt.length;
  const caracteresSemEspaco=txt.replace(/\s/g,'').length;
  const linhas=txt?txt.split('\n').length:0;
  show('edt-stats',`Palavras: ${palavras}   |   Caracteres: ${caracteres}   |   Sem espaços: ${caracteresSemEspaco}   |   Linhas: ${linhas}`);
}
function edtCopy(){
  const out=document.getElementById('edt-output');
  if(!out.value){toast('Nenhum resultado ainda. Aplique uma transformação primeiro.');return;}
  navigator.clipboard.writeText(out.value).then(()=>toast('✅ Copiado!'));
}
function edtDownload(){
  const out=document.getElementById('edt-output').value||document.getElementById('edt-input').value;
  if(!out){toast('Nenhum texto para baixar.');return;}
  const blob=new Blob([out],{type:'text/plain;charset=utf-8'});
  logConversion('texto_editado.txt');
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='texto_editado.txt';a.click();
}

// ── GERADOR DE PLANILHAS ──────────────────────────────
function addGPRow(){
  const c=document.getElementById('gp-rows');
  const header=document.getElementById('gp-header').value.split(',').map(h=>h.trim()).filter(Boolean);
  const n=header.length||4;
  const d=document.createElement('div');
  d.className='grid-2';d.style.gap='6px';d.style.marginTop='6px';
  d.innerHTML=Array.from({length:n},(_,i)=>`<input type="text" class="f-input gp-cell" placeholder="${header[i]||('Coluna '+(i+1))}">`).join('');
  c.appendChild(d);
}
async function gerarPlanilha(){
  const nome=document.getElementById('gp-nome').value||'Planilha';
  const header=document.getElementById('gp-header').value.split(',').map(h=>h.trim()).filter(Boolean);
  const cellEls=[...document.querySelectorAll('.gp-cell')];
  const perRow=header.length||4;
  const rows=[header.length?header:['Coluna 1','Coluna 2','Coluna 3','Coluna 4']];
  for(let i=0;i<cellEls.length;i+=perRow){
    const row=cellEls.slice(i,i+perRow).map(el=>el.value);
    if(row.some(v=>v&&v.trim())) rows.push(row);
  }
  if(rows.length<2){toast('Preencha ao menos uma linha de dados!');return;}
  try{
    const r=await convGenXlsx({rows},nome);
    const fname=nome.replace(/\s+/g,'_')+'.xlsx';
    logConversion(fname);
    const a=document.createElement('a');a.href=URL.createObjectURL(r.blob);a.download=fname;a.click();
    show('gp-result','✅ Planilha gerada: '+fname+'\n\n'+r.preview.substring(0,400));
  }catch(e){show('gp-result','❌ Erro ao gerar planilha: '+e.message);}
}

const TOOLS_I18N={"en": {"1": {"name": "Gov.br Digital Signature", "desc": "Sign PDFs by drawing your signature, typing your name in cursive, or uploading a stamp image."}, "2": {"name": "OFX to PDF Converter", "desc": "Parses bank OFX files and generates a structured PDF statement."}, "3": {"name": "Income Statement (DRE)", "desc": "Calculates revenue, deductions and profit, generating an accounting PDF report."}, "4": {"name": "Receipt Generator", "desc": "Issues formatted payment receipts ready to download."}, "5": {"name": "PDF Compressor", "desc": "Reduces PDF size by removing metadata and optimizing internal structure."}, "6": {"name": "Merge PDFs", "desc": "Combines two or more PDF files into a single ordered document."}, "7": {"name": "PDF Page Numbering", "desc": "Automatically adds page numbers to the footer of every page."}, "8": {"name": "PDF Watermark", "desc": "Inserts custom text as a diagonal watermark on PDF documents."}, "9": {"name": "Rotate PDF Pages", "desc": "Rotates pages by 90°, 180° or 270° before saving the document."}, "10": {"name": "Extract Text from PDF", "desc": "Extracts all text content from a PDF for use in editors."}, "11": {"name": "Password-Protect PDF", "desc": "Applies AES encryption and an opening password to confidential documents."}, "12": {"name": "Add Footer to PDF", "desc": "Inserts custom footer text on every page of the document."}, "13": {"name": "Date/Time Stamp", "desc": "Adds an automatic timestamp with date and time to corporate PDFs."}, "14": {"name": "Split PDF by Pages", "desc": "Separates page ranges of a PDF into individual files."}, "15": {"name": "PDF Properties Report", "desc": "Lists metadata, page count, size and PDF version."}, "16": {"name": "Resize Image", "desc": "Changes the width and height of PNG/JPG images while keeping proportion."}, "17": {"name": "Convert Image Format", "desc": "Converts images between PNG, JPG and WebP directly in the browser."}, "18": {"name": "Compress Image", "desc": "Reduces JPEG file size by adjusting quality without visible loss."}, "19": {"name": "Grayscale", "desc": "Converts color images to professional black and white."}, "20": {"name": "Invert Colors", "desc": "Applies a negative effect by inverting all color channels of the image."}, "21": {"name": "Rotate Image", "desc": "Rotates images by any multiple of 90° with precision."}, "22": {"name": "Flip Image", "desc": "Flips images horizontally or vertically."}, "23": {"name": "Add Border", "desc": "Adds a colored, customizable-width border to any image."}, "24": {"name": "Thumbnail Generator", "desc": "Creates reduced-size versions of images for catalogs and previews."}, "25": {"name": "Image Watermark", "desc": "Applies semi-transparent text over photos and illustrations."}, "26": {"name": "Add Text to Image", "desc": "Inserts custom captions and text over images."}, "27": {"name": "Base64 Converter", "desc": "Encodes images to a Base64 string for use in HTML/CSS."}, "28": {"name": "Compound Interest Calculator", "desc": "Calculates returns based on rate, term and monthly contribution."}, "29": {"name": "QR Code Generator", "desc": "Generates QR codes for URLs, text and contact information."}, "30": {"name": "CPF Validator", "desc": "Checks the mathematical validity of Brazilian CPF numbers and formats them automatically."}, "31": {"name": "CNPJ Validator", "desc": "Validates and formats Brazilian CNPJ numbers, showing check digits."}, "32": {"name": "ICMS Tax Calculator", "desc": "Calculates ICMS, tax base and net value by rate."}, "33": {"name": "Currency Converter", "desc": "Converts amounts between BRL, USD, EUR and other currencies with a manual rate."}, "34": {"name": "Discount Calculator", "desc": "Calculates the final price with a percentage or fixed-value discount."}, "35": {"name": "Barcode Generator", "desc": "Generates a visual barcode representation for products."}, "36": {"name": "Business Days Calculator", "desc": "Calculates business days between two dates, excluding weekends."}, "37": {"name": "Unit Converter", "desc": "Converts kg/lb, km/mi, liters/gallons and other units."}, "38": {"name": "CNAB 240 Extractor", "desc": "Parses CNAB 240 files and displays payment records."}, "39": {"name": "NFe XML Parser", "desc": "Extracts tax data from Brazilian Electronic Invoice (NFe) XML files."}, "40": {"name": "PIS/COFINS Calculator", "desc": "Calculates PIS and COFINS on gross revenue by tax regime."}, "41": {"name": "INSS Calculator", "desc": "Calculates the social security contribution by 2026 salary bracket."}, "42": {"name": "IRRF Calculator", "desc": "Calculates income tax withheld at source on salaries."}, "43": {"name": "Strong Password Generator", "desc": "Generates random passwords with letters, numbers and symbols."}, "47": {"name": "Loan Simulator", "desc": "Calculates SAC and Price Table installments with interest and amortization."}, "48": {"name": "Payroll Calculator", "desc": "Calculates gross salary, INSS, IRRF and net salary."}, "49": {"name": "FGTS Calculation", "desc": "Calculates FGTS balance, termination penalty and withdrawal amounts."}, "64": {"name": "Simples Nacional Tax", "desc": "Estimates the Simples Nacional tax by bracket and annex."}, "67": {"name": "ROI Calculator", "desc": "Calculates return on investment with payback period."}, "68": {"name": "Income Tax Statement Helper", "desc": "Helps fill out income statement declarations."}, "46": {"name": "Depreciation Calculation", "desc": "Calculates straight-line depreciation of fixed assets."}, "69": {"name": "PDF → Word", "desc": "Extracts text from the PDF and generates a real editable .docx document (OOXML)."}, "70": {"name": "PDF → Excel", "desc": "Detects rows/tables in the PDF and exports a real structured .xlsx spreadsheet."}, "71": {"name": "PDF → PowerPoint", "desc": "Converts PDF content into real .pptx slides, opened directly in PowerPoint."}, "72": {"name": "Word → PDF", "desc": "Converts .docx documents into a real formatted PDF, generated with pdf-lib."}, "73": {"name": "Excel → PDF", "desc": "Generates a real PDF with the rows and columns of the .xlsx spreadsheet."}, "74": {"name": "PowerPoint → PDF", "desc": "Exports .pptx presentations to a real PDF, one slide per page."}, "75": {"name": "Text Editor", "desc": "Edit, format and transform text: uppercase, trim spaces, word count and more."}, "76": {"name": "Spreadsheet Generator", "desc": "Build a table and generate a real .xlsx spreadsheet, ready to download."}, "77": {"name": "Images to PDF", "desc": "Combines several images (JPG/PNG) into a single PDF file, one per page."}, "78": {"name": "PDF to Images", "desc": "Converts each PDF page into a JPG image, delivered in a .zip file."}, "79": {"name": "BMI Calculator", "desc": "Calculates Body Mass Index and shows the classification range."}, "80": {"name": "Age Calculator", "desc": "Calculates exact age in years, months and days from the birth date."}, "81": {"name": "Date in Full Words", "desc": "Converts a numeric date into full written form."}, "82": {"name": "HEX/RGB Color Converter", "desc": "Converts colors between HEX and RGB with instant preview."}, "83": {"name": "To-Do List Generator", "desc": "Build a checklist and generate a print-ready PDF."}, "84": {"name": "13th Salary Calculator", "desc": "Calculates the proportional value of the year-end bonus salary."}, "85": {"name": "Vacation Pay Calculator", "desc": "Calculates vacation pay including the constitutional 1/3 bonus."}, "86": {"name": "Time Zone Converter", "desc": "Converts a time between the world's main time zones."}, "87": {"name": "PDF to OFX", "desc": "Extracts transactions from a bank statement PDF and generates an .ofx file to import into your financial software."}, "100": {"name": "OCR — Image to Text", "desc": "Recognizes text inside photos and scanned images using real OCR in the browser."}, "101": {"name": "OCR — Scanned PDF to Text", "desc": "Extracts text from scanned PDFs (with no text layer) using optical character recognition."}}, "es": {"1": {"name": "Firma Digital Gov.br", "desc": "Firma PDFs dibujando tu firma, escribiendo tu nombre en cursiva o subiendo una imagen de sello."}, "2": {"name": "Conversor OFX a PDF", "desc": "Interpreta archivos OFX bancarios y genera un extracto en PDF estructurado."}, "3": {"name": "DRE — Estado de Resultados", "desc": "Calcula ingresos, deducciones y ganancia, generando un informe contable en PDF."}, "4": {"name": "Generador de Recibos", "desc": "Emite recibos de pago formateados y listos para descargar."}, "5": {"name": "Compresor de PDF", "desc": "Reduce el tamaño de los PDF eliminando metadatos y optimizando la estructura interna."}, "6": {"name": "Combinar PDFs", "desc": "Une dos o más archivos PDF en un único documento ordenado."}, "7": {"name": "Numeración de Páginas PDF", "desc": "Agrega numeración automática en el pie de todas las páginas del PDF."}, "8": {"name": "Marca de Agua en PDF", "desc": "Inserta texto personalizado como marca de agua diagonal en documentos PDF."}, "9": {"name": "Girar Páginas PDF", "desc": "Rota páginas en 90°, 180° o 270° antes de guardar el documento."}, "10": {"name": "Extraer Texto de PDF", "desc": "Extrae todo el contenido de texto de un PDF para usar en editores."}, "11": {"name": "Proteger PDF con Contraseña", "desc": "Aplica cifrado AES y contraseña de apertura a documentos confidenciales."}, "12": {"name": "Agregar Pie de Página a PDF", "desc": "Inserta texto de pie de página personalizado en todas las páginas."}, "13": {"name": "Sello de Fecha/Hora", "desc": "Agrega una marca de tiempo automática con fecha y hora a PDFs corporativos."}, "14": {"name": "Dividir PDF por Páginas", "desc": "Separa rangos de páginas de un PDF en archivos individuales."}, "15": {"name": "Informe de Propiedades PDF", "desc": "Lista metadatos, número de páginas, tamaño y versión del PDF."}, "16": {"name": "Redimensionar Imagen", "desc": "Cambia el ancho y alto de imágenes PNG/JPG manteniendo la proporción."}, "17": {"name": "Convertir Formato de Imagen", "desc": "Convierte imágenes entre PNG, JPG y WebP directamente en el navegador."}, "18": {"name": "Comprimir Imagen", "desc": "Reduce el peso de imágenes JPEG ajustando la calidad sin pérdida visible."}, "19": {"name": "Escala de Grises", "desc": "Convierte imágenes a color en blanco y negro profesional."}, "20": {"name": "Invertir Colores", "desc": "Aplica un efecto negativo invirtiendo todos los canales de color de la imagen."}, "21": {"name": "Rotar Imagen", "desc": "Rota imágenes en cualquier múltiplo de 90° con precisión."}, "22": {"name": "Voltear Imagen", "desc": "Voltea imágenes horizontal o verticalmente."}, "23": {"name": "Agregar Borde", "desc": "Agrega un borde de color y grosor personalizable a cualquier imagen."}, "24": {"name": "Generador de Miniaturas", "desc": "Crea versiones reducidas de imágenes para catálogos y vistas previas."}, "25": {"name": "Marca de Agua en Imagen", "desc": "Aplica texto semitransparente sobre fotos e ilustraciones."}, "26": {"name": "Agregar Texto a la Imagen", "desc": "Inserta leyendas y texto personalizado sobre imágenes."}, "27": {"name": "Conversor a Base64", "desc": "Codifica imágenes a una cadena Base64 para usar en HTML/CSS."}, "28": {"name": "Calculadora de Interés Compuesto", "desc": "Calcula el rendimiento según tasa, plazo y aporte mensual."}, "29": {"name": "Generador de Códigos QR", "desc": "Genera códigos QR para URLs, textos e información de contacto."}, "30": {"name": "Validador de CPF", "desc": "Verifica la validez matemática de números CPF brasileños y los formatea automáticamente."}, "31": {"name": "Validador de CNPJ", "desc": "Valida y formatea números CNPJ brasileños, mostrando los dígitos verificadores."}, "32": {"name": "Calculadora de ICMS", "desc": "Calcula el ICMS, la base de cálculo y el valor neto según la alícuota."}, "33": {"name": "Conversor de Monedas", "desc": "Convierte valores entre BRL, USD, EUR y otras monedas con una tasa manual."}, "34": {"name": "Calculadora de Descuento", "desc": "Calcula el precio final con un descuento porcentual o de valor fijo."}, "35": {"name": "Generador de Código de Barras", "desc": "Genera una representación visual de código de barras para productos."}, "36": {"name": "Calculadora de Plazos", "desc": "Calcula días hábiles entre dos fechas, excluyendo fines de semana."}, "37": {"name": "Conversor de Unidades", "desc": "Convierte kg/lb, km/mi, litros/galones y otras unidades."}, "38": {"name": "Extractor CNAB 240", "desc": "Interpreta archivos CNAB 240 y muestra los registros de pagos."}, "39": {"name": "Analizador de XML NFe", "desc": "Extrae datos fiscales de archivos XML de Factura Electrónica (NFe)."}, "40": {"name": "Calculadora de PIS/COFINS", "desc": "Calcula el PIS y el COFINS sobre los ingresos brutos según el régimen tributario."}, "41": {"name": "Calculadora de INSS", "desc": "Calcula la contribución previsional según el tramo salarial 2026."}, "42": {"name": "Calculadora de IRRF", "desc": "Calcula el impuesto a la renta retenido en la fuente sobre los salarios."}, "43": {"name": "Generador de Contraseñas Seguras", "desc": "Genera contraseñas aleatorias con letras, números y símbolos."}, "47": {"name": "Simulador de Financiamiento", "desc": "Calcula cuotas del sistema SAC y Tabla Price con interés y amortización."}, "48": {"name": "Nómina de Pago", "desc": "Calcula el salario bruto, INSS, IRRF y el salario neto."}, "49": {"name": "Cálculo de FGTS", "desc": "Calcula el saldo de FGTS, la multa por rescisión y los montos de retiro."}, "64": {"name": "Simples Nacional", "desc": "Estima el impuesto del Simples Nacional según el tramo y el anexo."}, "67": {"name": "Calculadora de ROI", "desc": "Calcula el retorno sobre la inversión con el período de recuperación."}, "68": {"name": "Generador de Declaración de IR", "desc": "Ayuda a completar las declaraciones de ingresos."}, "46": {"name": "Cálculo de Depreciación", "desc": "Calcula la depreciación lineal de bienes del activo fijo."}, "69": {"name": "PDF → Word", "desc": "Extrae el texto del PDF y genera un documento .docx real (OOXML), editable en Word."}, "70": {"name": "PDF → Excel", "desc": "Detecta filas/tablas del PDF y exporta una hoja de cálculo .xlsx real y estructurada."}, "71": {"name": "PDF → PowerPoint", "desc": "Convierte el contenido del PDF en diapositivas .pptx reales, abiertas directamente en PowerPoint."}, "72": {"name": "Word → PDF", "desc": "Convierte documentos .docx en un PDF real formateado, generado con pdf-lib."}, "73": {"name": "Excel → PDF", "desc": "Genera un PDF real con las filas y columnas de la hoja de cálculo .xlsx."}, "74": {"name": "PowerPoint → PDF", "desc": "Exporta presentaciones .pptx a un PDF real, una diapositiva por página."}, "75": {"name": "Editor de Texto", "desc": "Edita, formatea y transforma texto: mayúsculas, quitar espacios, contar palabras y más."}, "76": {"name": "Generador de Hojas de Cálculo", "desc": "Arma una tabla y genera una hoja de cálculo .xlsx real, lista para descargar."}, "77": {"name": "Imágenes a PDF", "desc": "Une varias imágenes (JPG/PNG) en un único archivo PDF, una por página."}, "78": {"name": "PDF a Imágenes", "desc": "Convierte cada página de un PDF en una imagen JPG, entregadas en un .zip."}, "79": {"name": "Calculadora de IMC", "desc": "Calcula el Índice de Masa Corporal y muestra el rango de clasificación."}, "80": {"name": "Calculadora de Edad", "desc": "Calcula la edad exacta en años, meses y días a partir de la fecha de nacimiento."}, "81": {"name": "Fecha en Letras", "desc": "Convierte una fecha numérica al formato escrito completo."}, "82": {"name": "Conversor de Colores HEX/RGB", "desc": "Convierte colores entre HEX y RGB con vista previa instantánea."}, "83": {"name": "Generador de Lista de Tareas", "desc": "Arma una lista de verificación y genera un PDF listo para imprimir."}, "84": {"name": "Calculadora de Aguinaldo (13º)", "desc": "Calcula el valor proporcional del salario adicional de fin de año."}, "85": {"name": "Calculadora de Vacaciones", "desc": "Calcula el valor de las vacaciones con el 1/3 constitucional sobre el salario."}, "86": {"name": "Conversor de Zona Horaria", "desc": "Convierte un horario entre las principales zonas horarias del mundo."}, "87": {"name": "PDF a OFX", "desc": "Extrae transacciones de un extracto bancario en PDF y genera un archivo .ofx para importar en tu sistema financiero."}, "100": {"name": "OCR — Imagen a Texto", "desc": "Reconoce texto dentro de fotos e imágenes escaneadas usando OCR real en el navegador."}, "101": {"name": "OCR — PDF Escaneado a Texto", "desc": "Extrae el texto de PDFs escaneados (sin capa de texto) usando reconocimiento óptico de caracteres."}}};
// ── NOVAS FERRAMENTAS DO DIA A DIA ─────────────────────

// Imagens → PDF (com opções estilo iLovePDF: orientação, tamanho, margem, mesclar)
// ── ORGANIZADOR DE IMAGENS (Imagens → PDF): mantém a ordem escolhida pelo usuário ──
let i2pFiles=[];
let i2pDragIdx=null;
function i2pAddFiles(fileList){
  const imgs=[...fileList].filter(f=>/^image\//.test(f.type)||/\.(png|jpe?g)$/i.test(f.name));
  if(!imgs.length)return;
  i2pFiles=i2pFiles.concat(imgs);
  i2pRender();
}
function i2pClearAll(){
  i2pFiles=[];
  i2pRender();
}
function i2pRemove(idx){
  i2pFiles.splice(idx,1);
  i2pRender();
}
function i2pMove(idx,dir){
  const to=idx+dir;
  if(to<0||to>=i2pFiles.length)return;
  const tmp=i2pFiles[idx];i2pFiles[idx]=i2pFiles[to];i2pFiles[to]=tmp;
  i2pRender();
}
function i2pDragStart(e,idx){
  i2pDragIdx=idx;
  e.dataTransfer.effectAllowed='move';
  e.currentTarget.classList.add('i2p-dragging');
}
function i2pDragEnd(e){
  e.currentTarget.classList.remove('i2p-dragging');
  document.querySelectorAll('.i2p-card').forEach(c=>c.classList.remove('i2p-dragover'));
}
function i2pDragOver(e,idx){
  e.preventDefault();
  e.currentTarget.classList.add('i2p-dragover');
}
function i2pDragLeave(e){
  e.currentTarget.classList.remove('i2p-dragover');
}
function i2pDrop(e,idx){
  e.preventDefault();
  e.currentTarget.classList.remove('i2p-dragover');
  if(i2pDragIdx===null||i2pDragIdx===idx)return;
  const moved=i2pFiles.splice(i2pDragIdx,1)[0];
  i2pFiles.splice(idx,0,moved);
  i2pDragIdx=null;
  i2pRender();
}
function i2pRender(){
  const box=document.getElementById('i2p-organizer');
  if(!box)return;
  if(!i2pFiles.length){
    box.innerHTML='<div class="i2p-empty">Nenhuma imagem adicionada ainda. Clique em "Adicionar imagens" para começar.</div>';
    return;
  }
  box.innerHTML=i2pFiles.map((f,idx)=>{
    const url=URL.createObjectURL(f);
    return `<div class="i2p-card" draggable="true"
      ondragstart="i2pDragStart(event,${idx})" ondragend="i2pDragEnd(event)"
      ondragover="i2pDragOver(event,${idx})" ondragleave="i2pDragLeave(event)" ondrop="i2pDrop(event,${idx})"
      title="Arraste para reordenar">
      <span class="i2p-page-badge">${idx+1}</span>
      <button type="button" class="i2p-remove" onclick="i2pRemove(${idx})" title="Remover">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
      <img src="${url}" alt="${f.name.replace(/"/g,'')}" onload="URL.revokeObjectURL(this.src)">
      <div class="i2p-name">${f.name.replace(/</g,'&lt;')}</div>
      <div class="i2p-movebar">
        <button type="button" onclick="i2pMove(${idx},-1)" ${idx===0?'disabled':''} title="Mover para trás"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button>
        <button type="button" onclick="i2pMove(${idx},1)" ${idx===i2pFiles.length-1?'disabled':''} title="Mover para frente"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button>
      </div>
    </div>`;
  }).join('');
}

async function imagesToPdf(){
  if(!i2pFiles.length){toast('Selecione ao menos uma imagem!');return;}
  const orient=document.getElementById('i2p-orient').value; // retrato | paisagem
  const sizeOpt=document.getElementById('i2p-size').value; // fit | a4 | letter
  const marginOpt=document.getElementById('i2p-margin').value; // none | small | big
  const merge=document.getElementById('i2p-merge').checked;
  const margin={none:0,small:20,big:50}[marginOpt];
  const fixedSizes={a4:[595.28,841.89],letter:[612,792]};

  function pageDimsFor(imgW,imgH){
    if(sizeOpt==='fit')return [imgW+margin*2,imgH+margin*2];
    let [w,h]=fixedSizes[sizeOpt];
    if(orient==='paisagem'&&w<h)[w,h]=[h,w];
    if(orient==='retrato'&&w>h)[w,h]=[h,w];
    return [w,h];
  }

  async function embedAndDraw(pdfDoc,f){
    const bytes=new Uint8Array(await f.arrayBuffer());
    const isJpg=/\.jpe?g$/i.test(f.name);
    const img=isJpg?await pdfDoc.embedJpg(bytes):await pdfDoc.embedPng(bytes);
    const [pw,ph]=pageDimsFor(img.width,img.height);
    const page=pdfDoc.addPage([pw,ph]);
    const availW=pw-margin*2,availH=ph-margin*2;
    const ratio=Math.min(availW/img.width,availH/img.height,1);
    const w=img.width*ratio,h=img.height*ratio;
    page.drawImage(img,{x:(pw-w)/2,y:(ph-h)/2,width:w,height:h});
  }

  try{
    if(merge){
      const pdfDoc=await PDFLib.PDFDocument.create();
      for(const f of i2pFiles)await embedAndDraw(pdfDoc,f);
      dl(await pdfDoc.save(),'imagens_convertidas.pdf','application/pdf');
      toast('✅ PDF gerado com '+i2pFiles.length+' página(s) na ordem definida.');
    }else{
      const zip=new JSZip();
      let i=1;
      for(const f of i2pFiles){
        const pdfDoc=await PDFLib.PDFDocument.create();
        await embedAndDraw(pdfDoc,f);
        const bytes=await pdfDoc.save();
        zip.file('imagem_'+String(i++).padStart(2,'0')+'.pdf',bytes);
      }
      const blob=await zip.generateAsync({type:'blob'});
      logConversion('imagens_pdf.zip');
      const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='imagens_pdf.zip';a.click();
      toast('✅ '+i2pFiles.length+' PDF(s) gerado(s) e compactado(s) em .zip.');
    }
    closeModal();
  }catch(e){toast('Erro: '+e.message);}
}

// PDF → Imagens (JPG, empacotadas em .zip)
async function pdfToImages(){
  const fi=document.getElementById('p2i-pdf');
  if(!fi.files.length){toast('Selecione um PDF!');return;}
  try{
    show('p2i-result','⏳ Renderizando páginas...');
    if(typeof pdfjsLib==='undefined')throw new Error('pdfjs indisponível');
    const buf=await fi.files[0].arrayBuffer();
    const pdf=await pdfjsLib.getDocument({data:buf}).promise;
    const zip=new JSZip();
    const n=Math.min(pdf.numPages,60);
    for(let i=1;i<=n;i++){
      const page=await pdf.getPage(i);
      const vp=page.getViewport({scale:2});
      const canvas=document.createElement('canvas');
      canvas.width=vp.width;canvas.height=vp.height;
      await page.render({canvasContext:canvas.getContext('2d'),viewport:vp}).promise;
      const b64=canvas.toDataURL('image/jpeg',0.92).split(',')[1];
      zip.file('pagina_'+String(i).padStart(2,'0')+'.jpg',b64,{base64:true});
    }
    const blob=await zip.generateAsync({type:'blob'});
    logConversion('paginas_pdf.zip');
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='paginas_pdf.zip';a.click();
    show('p2i-result','✅ '+n+' página(s) convertida(s) e baixadas em .zip');
  }catch(e){show('p2i-result','❌ Erro: '+e.message);}
}

// Calculadora de IMC
function calcIMC(){
  const peso=+document.getElementById('imc-peso').value;
  const alt=+document.getElementById('imc-alt').value;
  if(!peso||!alt){show('imc-result','❌ Preencha peso e altura.');return;}
  const imc=peso/(alt*alt);
  let faixa;
  if(imc<18.5)faixa='Abaixo do peso';
  else if(imc<25)faixa='Peso normal';
  else if(imc<30)faixa='Sobrepeso';
  else if(imc<35)faixa='Obesidade Grau I';
  else if(imc<40)faixa='Obesidade Grau II';
  else faixa='Obesidade Grau III';
  show('imc-result',`ÍNDICE DE MASSA CORPORAL\n${'─'.repeat(30)}\nIMC: ${imc.toFixed(2)}\nClassificação: ${faixa}\n\n⚠️ Cálculo referencial — consulte um profissional de saúde.`);
}

// Calculadora de Idade
function calcIdade(){
  const v=document.getElementById('idade-nasc').value;
  if(!v){show('idade-result','❌ Informe a data de nascimento.');return;}
  const nasc=new Date(v+'T00:00:00'),hoje=new Date();
  let anos=hoje.getFullYear()-nasc.getFullYear();
  let meses=hoje.getMonth()-nasc.getMonth();
  let dias=hoje.getDate()-nasc.getDate();
  if(dias<0){meses--;dias+=new Date(hoje.getFullYear(),hoje.getMonth(),0).getDate();}
  if(meses<0){anos--;meses+=12;}
  const diasTotais=Math.floor((hoje-nasc)/(1000*60*60*24));
  show('idade-result',`IDADE EXATA\n${'─'.repeat(30)}\n${anos} ano(s), ${meses} mês(es) e ${dias} dia(s)\n\nTotal em dias: ${diasTotais.toLocaleString('pt-BR')}`);
}

// Data por Extenso
function dataPorExtenso(){
  const v=document.getElementById('ext-data').value;
  if(!v){show('ext-result','❌ Informe uma data.');return;}
  const d=new Date(v+'T00:00:00');
  const dias=['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
  const meses=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  const txt=`${dias[d.getDay()]}, ${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
  show('ext-result',txt.charAt(0).toUpperCase()+txt.slice(1));
}

// Conversor de Cores HEX/RGB
function corFromHex(){
  const hexEl=document.getElementById('cor-hex');
  if(!hexEl)return; // o modal pode ter sido fechado/trocado antes deste callback rodar
  let hex=hexEl.value.trim();
  if(!/^#?[0-9a-fA-F]{6}$/.test(hex)){show('cor-result','❌ HEX inválido. Use o formato #RRGGBB.');return;}
  if(!hex.startsWith('#'))hex='#'+hex;
  const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);
  document.getElementById('cor-r').value=r;document.getElementById('cor-g').value=g;document.getElementById('cor-b').value=b;
  document.getElementById('cor-preview').style.background=hex;
  show('cor-result',`HEX: ${hex.toUpperCase()}\nRGB: rgb(${r}, ${g}, ${b})`);
}
function corFromRgb(){
  const r=Math.min(255,Math.max(0,+document.getElementById('cor-r').value||0));
  const g=Math.min(255,Math.max(0,+document.getElementById('cor-g').value||0));
  const b=Math.min(255,Math.max(0,+document.getElementById('cor-b').value||0));
  const hex='#'+[r,g,b].map(x=>x.toString(16).padStart(2,'0')).join('');
  document.getElementById('cor-hex').value=hex;
  document.getElementById('cor-preview').style.background=hex;
  show('cor-result',`HEX: ${hex.toUpperCase()}\nRGB: rgb(${r}, ${g}, ${b})`);
}

// Gerador de Lista de Tarefas em PDF
async function gerarTodoPdf(){
  const titulo=document.getElementById('todo-titulo').value||'Lista de Tarefas';
  const itens=document.getElementById('todo-itens').value.split('\n').map(l=>l.trim()).filter(Boolean);
  if(!itens.length){toast('Adicione ao menos um item!');return;}
  const pdfDoc=await PDFLib.PDFDocument.create();
  let pg=pdfDoc.addPage([595,842]);
  const fontReg=await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
  const fontBold=await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
  pg.drawRectangle({x:0,y:790,width:595,height:52,color:PDFLib.rgb(0.39,0.4,0.94)});
  pg.drawText(titulo,{x:40,y:808,size:16,font:fontBold,color:PDFLib.rgb(1,1,1)});
  let y=750;
  for(const item of itens){
    if(y<50){pg=pdfDoc.addPage([595,842]);y=790;}
    pg.drawRectangle({x:40,y:y-2,width:14,height:14,borderColor:PDFLib.rgb(.3,.3,.3),borderWidth:1.2,color:PDFLib.rgb(1,1,1)});
    pg.drawText(item.substring(0,90),{x:64,y,size:11,font:fontReg,color:PDFLib.rgb(.1,.1,.15)});
    y-=28;
  }
  dl(await pdfDoc.save(),'checklist.pdf','application/pdf');closeModal();
}

// Calculadora de 13º Salário
function calc13Salario(){
  const sal=+document.getElementById('d13-sal').value;
  const meses=Math.min(12,Math.max(1,+document.getElementById('d13-meses').value));
  if(!sal){show('d13-result','❌ Informe o salário bruto.');return;}
  const bruto=(sal/12)*meses;
  const inss=bruto*0.09; // estimativa simplificada
  const liquido=bruto-inss;
  show('d13-result',`13º SALÁRIO — Estimativa\n${'─'.repeat(32)}\nMeses trabalhados: ${meses}/12\n13º Bruto:  R$ ${fmt(bruto)}\nINSS (aprox.): R$ ${fmt(inss)}\n─────────────────────────\n13º Líquido: R$ ${fmt(liquido)}\n\n⚠️ Estimativa simplificada. Consulte o RH/contador.`);
}

// Calculadora de Férias
function calcFerias(){
  const sal=+document.getElementById('fer-sal').value;
  const dias=Math.min(30,Math.max(1,+document.getElementById('fer-dias').value));
  const vender=document.getElementById('fer-vender').checked;
  if(!sal){show('fer-result','❌ Informe o salário bruto.');return;}
  const valorDia=sal/30;
  const feriasBase=valorDia*dias;
  const tercoConst=feriasBase/3;
  let abono=0,abonoTerco=0;
  if(vender){abono=valorDia*10;abonoTerco=abono/3;}
  const total=feriasBase+tercoConst+abono+abonoTerco;
  show('fer-result',`FÉRIAS — Estimativa\n${'─'.repeat(32)}\nDias de férias: ${dias}\nValor das férias: R$ ${fmt(feriasBase)}\n1/3 Constitucional: R$ ${fmt(tercoConst)}${vender?`\nAbono pecuniário (10 dias): R$ ${fmt(abono)}\n1/3 sobre abono: R$ ${fmt(abonoTerco)}`:''}\n─────────────────────────\nTOTAL: R$ ${fmt(total)}\n\n⚠️ Estimativa simplificada. Consulte o RH/contador.`);
}

// Conversor de Fuso Horário
function calcFuso(){
  const hora=document.getElementById('fuso-hora').value;
  const zona=document.getElementById('fuso-origem').value;
  if(!hora){show('fuso-result','❌ Informe um horário.');return;}
  try{
    const [hh,mm]=hora.split(':').map(Number);
    const base=new Date();base.setHours(hh,mm,0,0);
    const zonas=[['America/Sao_Paulo','Brasília'],['America/New_York','Nova York'],['America/Los_Angeles','Los Angeles'],['Europe/Lisbon','Lisboa'],['Europe/London','Londres'],['Europe/Paris','Paris'],['Asia/Tokyo','Tóquio'],['Asia/Shanghai','Xangai'],['Australia/Sydney','Sydney']];
    const linhas=zonas.map(([tz,label])=>{
      const str=new Intl.DateTimeFormat('pt-BR',{timeZone:tz,hour:'2-digit',minute:'2-digit',hour12:false}).format(base);
      return (tz===zona?'➤ ':'   ')+label.padEnd(14)+str;
    });
    show('fuso-result',`CONVERSÃO DE FUSO HORÁRIO\n${'─'.repeat(34)}\n`+linhas.join('\n'));
  }catch(e){show('fuso-result','❌ Erro: '+e.message);}
}

// PDF → OFX (extrai transações de um extrato em PDF por heurística e gera .ofx)
let p2oTxs=null,p2oFileBase='extrato';

function p2oParseDate(str){
  const m=str.match(/(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})/);
  if(!m)return null;
  let [,d,mo,y]=m;
  if(y.length===2)y='20'+y;
  d=d.padStart(2,'0');mo=mo.padStart(2,'0');
  const dt=new Date(+y,+mo-1,+d);
  if(isNaN(dt))return null;
  return {iso:y+mo+d,label:d+'/'+mo+'/'+y,date:dt};
}

function p2oParseLine(line){
  const dateInfo=p2oParseDate(line);
  if(!dateInfo)return null;
  const valMatches=line.match(/-?\d{1,3}(?:\.\d{3})*,\d{2}/g);
  if(!valMatches||!valMatches.length)return null;
  let valStr=valMatches[valMatches.length-1];
  let negative=valStr.trim().startsWith('-');
  const amount=parseFloat(valStr.replace(/\./g,'').replace(',','.').replace('-',''));
  if(!amount&&amount!==0)return null;
  let memo=line
    .replace(/\d{1,2}[\/\-.]\d{1,2}[\/\-.]\d{2,4}/,'')
    .replace(valStr,'')
    .replace(/\(?\b[DC]\)?\s*$/i,(m)=>{ if(/D/i.test(m))negative=true; if(/C/i.test(m))negative=false; return ''; })
    .replace(/\s{2,}/g,' ').trim();
  if(!memo)memo='Transação';
  const debitWords=/compra|pagamento|tarifa|saque|d[ée]bito|boleto|desconto|taxa/i;
  if(!/[DC]\s*$/i.test(line)&&debitWords.test(memo)&&!negative)negative=true;
  return {dateInfo,amount:negative?-Math.abs(amount):Math.abs(amount),memo:memo.substring(0,80)};
}

async function pdfToOfxPreview(input){
  const rBox=document.getElementById('p2o-result');
  document.getElementById('p2o-dl-btn').style.display='none';
  p2oTxs=null;
  if(!input.files.length)return;
  p2oFileBase=input.files[0].name.replace(/\.pdf$/i,'')||'extrato';
  show('p2o-result','⏳ Lendo o PDF e identificando transações...');
  try{
    const data=await convExtractPdfStructured(input.files[0]);
    const txs=[];
    (data.paragraphs||[]).forEach(line=>{
      const tx=p2oParseLine(line);
      if(tx)txs.push(tx);
    });
    if(!txs.length){
      show('p2o-result','❌ Nenhuma transação reconhecida automaticamente neste PDF. O layout pode não ser compatível com a extração por texto (ex: extrato escaneado como imagem).');
      return;
    }
    p2oTxs=txs;
    const preview=txs.slice(0,12).map(t=>`${t.dateInfo.label}  ${(t.amount<0?'-':'+')}R$ ${Math.abs(t.amount).toFixed(2).replace('.',',')}  ${t.memo}`).join('\n');
    const total=txs.reduce((s,t)=>s+t.amount,0);
    show('p2o-result',`✅ ${txs.length} transação(ões) encontrada(s)\n${'─'.repeat(40)}\n${preview}${txs.length>12?'\n… e mais '+(txs.length-12)+' linha(s)':''}\n${'─'.repeat(40)}\nSaldo do período: R$ ${total.toFixed(2).replace('.',',')}`);
    document.getElementById('p2o-dl-btn').style.display='block';
  }catch(e){
    show('p2o-result','❌ Erro ao ler o PDF: '+e.message);
  }
}

function downloadPdfToOfx(){
  if(!p2oTxs||!p2oTxs.length){toast('Nenhuma transação para exportar.');return;}
  const now=new Date();
  const nowStr=now.toISOString().replace(/[-:T]/g,'').substring(0,14);
  const sorted=[...p2oTxs].sort((a,b)=>a.dateInfo.date-b.dateInfo.date);
  const dtStart=sorted[0].dateInfo.iso,dtEnd=sorted[sorted.length-1].dateInfo.iso;
  const total=p2oTxs.reduce((s,t)=>s+t.amount,0);
  const stmttrns=p2oTxs.map((t,i)=>
`<STMTTRN>
<TRNTYPE>${t.amount<0?'DEBIT':'CREDIT'}
<DTPOSTED>${t.dateInfo.iso}
<TRNAMT>${t.amount.toFixed(2)}
<FITID>${t.dateInfo.iso}${String(i+1).padStart(4,'0')}
<MEMO>${t.memo.replace(/[<>]/g,'')}
</STMTTRN>`).join('\n');
  const ofx=`OFXHEADER:100
DATA:OFXSGML
VERSION:102
SECURITY:NONE
ENCODING:USASCII
CHARSET:1252
COMPRESSION:NONE
OLDFILEUID:NONE
NEWFILEUID:NONE

<OFX>
<SIGNONMSGSRSV1>
<SONRS>
<STATUS>
<CODE>0
<SEVERITY>INFO
</STATUS>
<DTSERVER>${nowStr}
<LANGUAGE>POR
</SONRS>
</SIGNONMSGSRSV1>
<BANKMSGSRSV1>
<STMTTRNRS>
<TRNUID>1
<STATUS>
<CODE>0
<SEVERITY>INFO
</STATUS>
<STMTRS>
<CURDEF>BRL
<BANKACCTFROM>
<BANKID>0000
<ACCTID>0000000
<ACCTTYPE>CHECKING
</BANKACCTFROM>
<BANKTRANLIST>
<DTSTART>${dtStart}
<DTEND>${dtEnd}
${stmttrns}
</BANKTRANLIST>
<LEDGERBAL>
<BALAMT>${total.toFixed(2)}
<DTASOF>${nowStr}
</LEDGERBAL>
</STMTRS>
</STMTTRNRS>
</BANKMSGSRSV1>
</OFX>`;
  const blob=new Blob([ofx],{type:'application/x-ofx'});
  logConversion(p2oFileBase+'.ofx');
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=p2oFileBase+'.ofx';a.click();
}

// ══════════════════════════════════════════════════════
// NOVAS FERRAMENTAS — LEVA 2 (2026)
// ══════════════════════════════════════════════════════

// ── Parser CSV robusto (lida com aspas, vírgula/ponto-e-vírgula, quebras dentro de aspas) ──
function parseCsv(text){
  const rows=[];
  let row=[],field='',inQuotes=false;
  const delim=(text.slice(0,1000).split(';').length>text.slice(0,1000).split(',').length)?';':',';
  for(let i=0;i<text.length;i++){
    const c=text[i],next=text[i+1];
    if(inQuotes){
      if(c==='"'&&next==='"'){field+='"';i++;}
      else if(c==='"'){inQuotes=false;}
      else field+=c;
    }else{
      if(c==='"')inQuotes=true;
      else if(c===delim){row.push(field);field='';}
      else if(c==='\r'){/*ignora*/}
      else if(c==='\n'){row.push(field);rows.push(row);row=[];field='';}
      else field+=c;
    }
  }
  if(field.length||row.length){row.push(field);rows.push(row);}
  return rows.filter(r=>r.some(c=>c!==''));
}
function toCsvValue(v){
  const s=String(v??'');
  return /[",\n;]/.test(s)?'"'+s.replace(/"/g,'""')+'"':s;
}

// ── CSV → Excel ──
async function csvToExcel(){
  const fi=document.getElementById('c2x-file');
  if(!fi.files.length){toast('Selecione um arquivo CSV!');return;}
  const text=await fi.files[0].text();
  const rows=parseCsv(text);
  if(!rows.length){toast('❌ Não foi possível ler nenhuma linha deste CSV.');return;}
  const name=fi.files[0].name.replace(/\.csv$/i,'');
  const r=await convGenXlsx({rows},name);
  const fname=name+'.xlsx';
  logConversion(fname);
  const a=document.createElement('a');a.href=URL.createObjectURL(r.blob);a.download=fname;a.click();
  show('c2x-result','✅ '+rows.length+' linha(s) convertida(s) para '+fname);
}

// ── Leitor mínimo de .xlsx (lê a primeira aba; suporta inlineStr e sharedStrings) ──
async function readXlsxFirstSheet(file){
  const buf=await file.arrayBuffer();
  const zip=await JSZip.loadAsync(buf);
  const sheetFile=zip.file('xl/worksheets/sheet1.xml');
  if(!sheetFile)throw new Error('Não foi possível localizar a primeira aba dentro do arquivo .xlsx.');
  const sheetXml=await sheetFile.async('string');
  let shared=[];
  const sharedFile=zip.file('xl/sharedStrings.xml');
  if(sharedFile){
    const sharedXml=await sharedFile.async('string');
    const siRe=/<si>([\s\S]*?)<\/si>/g;
    let m;
    while((m=siRe.exec(sharedXml))){
      const text=[...m[1].matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map(x=>x[1]).join('');
      shared.push(decodeXmlEntities(text));
    }
  }
  const rowsMap={};
  const rowRe=/<row[^>]*r="(\d+)"[^>]*>([\s\S]*?)<\/row>/g;
  let rm;
  while((rm=rowRe.exec(sheetXml))){
    const rIdx=+rm[1];
    const cellRe=/<c[^>]*r="([A-Z]+)(\d+)"[^>]*?(?:\st="([^"]*)")?[^>]*>(?:<v>([\s\S]*?)<\/v>|<is>([\s\S]*?)<\/is>)?<\/c>/g;
    let cm;
    const cells={};
    while((cm=cellRe.exec(rm[2]))){
      const col=cm[1],type=cm[3],vRaw=cm[4],isRaw=cm[5];
      const colIdx=colToIndex(col);
      let val='';
      if(isRaw!==undefined){
        val=[...isRaw.matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map(x=>x[1]).join('');
        val=decodeXmlEntities(val);
      }else if(vRaw!==undefined){
        val=(type==='s')?(shared[+vRaw]||''):decodeXmlEntities(vRaw);
      }
      cells[colIdx]=val;
    }
    const maxCol=Math.max(-1,...Object.keys(cells).map(Number));
    const rowArr=[];
    for(let i=0;i<=maxCol;i++)rowArr.push(cells[i]!==undefined?cells[i]:'');
    rowsMap[rIdx]=rowArr;
  }
  const maxRow=Math.max(0,...Object.keys(rowsMap).map(Number));
  const rows=[];
  for(let i=1;i<=maxRow;i++)rows.push(rowsMap[i]||[]);
  return rows;
}
function colToIndex(col){let n=0;for(let i=0;i<col.length;i++)n=n*26+(col.charCodeAt(i)-64);return n-1;}
function decodeXmlEntities(s){return s.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,'&');}

// ── Excel → CSV ──
async function excelToCsv(){
  const fi=document.getElementById('x2c-file');
  if(!fi.files.length){toast('Selecione uma planilha .xlsx!');return;}
  const rows=await readXlsxFirstSheet(fi.files[0]);
  if(!rows.length){toast('❌ A planilha parece estar vazia.');return;}
  const csv=rows.map(r=>r.map(toCsvValue).join(',')).join('\r\n');
  const name=fi.files[0].name.replace(/\.xlsx$/i,'');
  const fname=name+'.csv';
  logConversion(fname);
  const blob=new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=fname;a.click();
  show('x2c-result','✅ '+rows.length+' linha(s) exportada(s) para '+fname);
}

// ── JSON → Excel ──
async function jsonToExcel(){
  const raw=document.getElementById('j2x-input').value.trim();
  if(!raw){toast('Cole um JSON válido!');return;}
  let data;
  try{ data=JSON.parse(raw); }catch(e){ toast('❌ JSON inválido: '+e.message); return; }
  if(!Array.isArray(data)){
    if(typeof data==='object'&&data)data=[data];
    else{toast('❌ O JSON precisa ser um array de objetos (ou um único objeto).');return;}
  }
  const headerSet=[];
  data.forEach(obj=>Object.keys(obj||{}).forEach(k=>{if(!headerSet.includes(k))headerSet.push(k);}));
  const rows=[headerSet,...data.map(obj=>headerSet.map(h=>{
    const v=obj?obj[h]:'';
    return (v===null||v===undefined)?'':(typeof v==='object'?JSON.stringify(v):String(v));
  }))];
  const r=await convGenXlsx({rows},'dados_json');
  const fname='dados_json.xlsx';
  logConversion(fname);
  const a=document.createElement('a');a.href=URL.createObjectURL(r.blob);a.download=fname;a.click();
  show('j2x-result','✅ '+data.length+' registro(s) convertido(s) para '+fname);
}

// ── Excel → JSON ──
let x2jResultJson=null;
async function excelToJson(){
  const fi=document.getElementById('x2j-file');
  if(!fi.files.length){toast('Selecione uma planilha .xlsx!');return;}
  const rows=await readXlsxFirstSheet(fi.files[0]);
  if(rows.length<1){toast('❌ A planilha parece estar vazia.');return;}
  const header=rows[0];
  const data=rows.slice(1).map(row=>{
    const obj={};
    header.forEach((h,i)=>{obj[h||('coluna_'+(i+1))]=row[i]!==undefined?row[i]:'';});
    return obj;
  });
  x2jResultJson=JSON.stringify(data,null,2);
  document.getElementById('x2j-result').textContent=x2jResultJson;
  document.getElementById('x2j-dl-btn').style.display='block';
  logConversion(fi.files[0].name.replace(/\.xlsx$/i,'')+'.json');
}
function downloadJsonResult(){
  if(!x2jResultJson)return;
  const blob=new Blob([x2jResultJson],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='dados.json';a.click();
}

// ── Markdown → PDF (subconjunto: #, ##, ###, **negrito**, *itálico*, listas, `código`, > citação, ---) ──
async function markdownToPdf(){
  const src=document.getElementById('md2p-input').value;
  if(!src.trim()){toast('Escreva algum conteúdo em Markdown!');return;}
  const pdfDoc=await PDFLib.PDFDocument.create();
  const fontReg=await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
  const fontBold=await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
  const fontItalic=await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaOblique);
  const fontMono=await pdfDoc.embedFont(PDFLib.StandardFonts.Courier);
  const margin=50,pageW=595,pageH=842,maxW=pageW-margin*2;
  let page=pdfDoc.addPage([pageW,pageH]),y=pageH-margin;
  function newPageIfNeeded(need){
    if(y-need<margin){page=pdfDoc.addPage([pageW,pageH]);y=pageH-margin;}
  }
  function wrapText(text,font,size,width){
    const words=text.split(/\s+/);
    const lines=[];let cur='';
    for(const w of words){
      const test=cur?cur+' '+w:w;
      if(font.widthOfTextAtSize(test,size)>width&&cur){lines.push(cur);cur=w;}
      else cur=test;
    }
    if(cur)lines.push(cur);
    return lines;
  }
  function drawInline(text,x,yy,size,font){
    // negrito/itálico simples: **bold** e *italic*
    const tokens=text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g).filter(Boolean);
    let cx=x;
    tokens.forEach(tok=>{
      let f=font,val=tok;
      if(/^\*\*[^*]+\*\*$/.test(tok)){f=fontBold;val=tok.slice(2,-2);}
      else if(/^\*[^*]+\*$/.test(tok)){f=fontItalic;val=tok.slice(1,-1);}
      else if(/^`[^`]+`$/.test(tok)){f=fontMono;val=tok.slice(1,-1);}
      page.drawText(val,{x:cx,y:yy,size,font:f,color:PDFLib.rgb(.1,.1,.15)});
      cx+=f.widthOfTextAtSize(val,size);
    });
  }
  const lines=src.split('\n');
  for(let raw of lines){
    const line=raw.replace(/\r$/,'');
    if(!line.trim()){y-=10;continue;}
    if(/^---+$/.test(line.trim())){
      newPageIfNeeded(14);
      page.drawLine({start:{x:margin,y},end:{x:pageW-margin,y},thickness:1,color:PDFLib.rgb(.8,.8,.82)});
      y-=14;continue;
    }
    let m;
    if((m=line.match(/^#\s+(.*)/))){
      newPageIfNeeded(30);y-=6;
      wrapText(m[1],fontBold,20,maxW).forEach(l=>{page.drawText(l,{x:margin,y,size:20,font:fontBold,color:PDFLib.rgb(.05,.05,.1)});y-=24;});
      continue;
    }
    if((m=line.match(/^##\s+(.*)/))){
      newPageIfNeeded(24);y-=4;
      wrapText(m[1],fontBold,15,maxW).forEach(l=>{page.drawText(l,{x:margin,y,size:15,font:fontBold,color:PDFLib.rgb(.08,.08,.14)});y-=19;});
      continue;
    }
    if((m=line.match(/^###\s+(.*)/))){
      newPageIfNeeded(20);
      wrapText(m[1],fontBold,12.5,maxW).forEach(l=>{page.drawText(l,{x:margin,y,size:12.5,font:fontBold,color:PDFLib.rgb(.1,.1,.16)});y-=16;});
      continue;
    }
    if((m=line.match(/^(\s*)[-*]\s+(.*)/))){
      newPageIfNeeded(16);
      const bx=margin+((m[1]||'').length/2)*10;
      page.drawText('•',{x:bx,y,size:10.5,font:fontReg,color:PDFLib.rgb(.3,.3,.4)});
      wrapText(m[2],fontReg,10.5,maxW-bx+margin-14).forEach((l,i)=>{
        newPageIfNeeded(15);
        drawInline(l,bx+14,y,10.5,fontReg);y-=14;
      });
      continue;
    }
    if((m=line.match(/^(\d+)\.\s+(.*)/))){
      newPageIfNeeded(16);
      page.drawText(m[1]+'.',{x:margin,y,size:10.5,font:fontReg,color:PDFLib.rgb(.3,.3,.4)});
      wrapText(m[2],fontReg,10.5,maxW-30).forEach(l=>{newPageIfNeeded(15);drawInline(l,margin+24,y,10.5,fontReg);y-=14;});
      continue;
    }
    if((m=line.match(/^>\s?(.*)/))){
      newPageIfNeeded(16);
      page.drawLine({start:{x:margin+2,y:y+9},end:{x:margin+2,y:y-2},thickness:2,color:PDFLib.rgb(.55,.4,.7)});
      wrapText(m[1],fontItalic,10.5,maxW-20).forEach(l=>{newPageIfNeeded(15);page.drawText(l,{x:margin+14,y,size:10.5,font:fontItalic,color:PDFLib.rgb(.35,.35,.4)});y-=14;});
      continue;
    }
    // parágrafo normal
    wrapText(line,fontReg,11,maxW).forEach(l=>{newPageIfNeeded(16);drawInline(l,margin,y,11,fontReg);y-=15;});
  }
  const bytes=await pdfDoc.save();
  logConversion('documento_markdown.pdf');
  dl(bytes,'documento_markdown.pdf','application/pdf');
  closeModal();
}

// ── HTML → PDF (rasteriza com html2canvas e monta páginas no pdf-lib) ──
async function htmlToPdf(){
  const html=document.getElementById('h2p-input').value;
  if(!html.trim()){toast('Cole algum HTML!');return;}
  if(typeof html2canvas==='undefined'){toast('❌ Biblioteca de renderização indisponível neste momento.');return;}
  const holder=document.createElement('div');
  holder.style.cssText='position:fixed;left:-99999px;top:0;width:794px;background:#fff;';
  holder.innerHTML=html;
  document.body.appendChild(holder);
  try{
    const canvas=await html2canvas(holder,{scale:2,backgroundColor:'#ffffff',useCORS:true});
    const pdfDoc=await PDFLib.PDFDocument.create();
    const pageW=595,pageH=842;
    const scale=pageW/canvas.width;
    const pxPerPage=Math.floor(pageH/scale);
    let offsetPx=0;
    while(offsetPx<canvas.height){
      const sliceH=Math.min(pxPerPage,canvas.height-offsetPx);
      const sliceCanvas=document.createElement('canvas');
      sliceCanvas.width=canvas.width;
      sliceCanvas.height=sliceH;
      sliceCanvas.getContext('2d').drawImage(canvas,0,offsetPx,canvas.width,sliceH,0,0,canvas.width,sliceH);
      const imgData=sliceCanvas.toDataURL('image/png').split(',')[1];
      const imgBytes=Uint8Array.from(atob(imgData),c=>c.charCodeAt(0));
      const img=await pdfDoc.embedPng(imgBytes);
      const page=pdfDoc.addPage([pageW,pageH]);
      const drawH=sliceH*scale;
      page.drawImage(img,{x:0,y:pageH-drawH,width:canvas.width*scale,height:drawH});
      offsetPx+=sliceH;
    }
    const bytes=await pdfDoc.save();
    logConversion('pagina_html.pdf');
    dl(bytes,'pagina_html.pdf','application/pdf');
    closeModal();
  }finally{
    document.body.removeChild(holder);
  }
}

// ── SVG → PNG ──
async function svgToPng(){
  const fi=document.getElementById('s2p-file');
  if(!fi.files.length){toast('Selecione um arquivo SVG!');return;}
  const scale=+document.getElementById('s2p-scale').value;
  const text=await fi.files[0].text();
  const blob=new Blob([text],{type:'image/svg+xml'});
  const url=URL.createObjectURL(blob);
  const img=new Image();
  await new Promise((res,rej)=>{img.onload=res;img.onerror=()=>rej(new Error('Não foi possível ler este SVG.'));img.src=url;});
  const w=(img.width||300)*scale,h=(img.height||150)*scale;
  const canvas=document.createElement('canvas');
  canvas.width=w;canvas.height=h;
  const ctx=canvas.getContext('2d');
  ctx.drawImage(img,0,0,w,h);
  URL.revokeObjectURL(url);
  const pngUrl=canvas.toDataURL('image/png');
  const fname=fi.files[0].name.replace(/\.svg$/i,'')+'.png';
  logConversion(fname);
  const a=document.createElement('a');a.href=pngUrl;a.download=fname;a.click();
  closeModal();
}

// ── Leitor de QR Code ──
function lerQrCode(input){
  const rBox=document.getElementById('qrr-result');
  if(!input.files.length)return;
  if(typeof jsQR==='undefined'){show('qrr-result','❌ Biblioteca de leitura de QR indisponível.');return;}
  show('qrr-result','⏳ Lendo imagem...');
  const img=new Image();
  const url=URL.createObjectURL(input.files[0]);
  img.onload=()=>{
    const canvas=document.createElement('canvas');
    canvas.width=img.width;canvas.height=img.height;
    const ctx=canvas.getContext('2d');
    ctx.drawImage(img,0,0);
    const imgData=ctx.getImageData(0,0,canvas.width,canvas.height);
    const code=jsQR(imgData.data,imgData.width,imgData.height);
    URL.revokeObjectURL(url);
    if(code){
      logConversion('qrcode_lido.txt');
      show('qrr-result','✅ Conteúdo encontrado:\n\n'+code.data);
    }else{
      show('qrr-result','😕 Nenhum QR Code foi encontrado nesta imagem. Tente uma foto mais nítida e bem enquadrada.');
    }
  };
  img.onerror=()=>show('qrr-result','❌ Não foi possível carregar esta imagem.');
  img.src=url;
}

// ── Comparar PDFs (diff de texto por linha) ──
function diffLines(a,b){
  const n=a.length,m=b.length;
  const dp=Array.from({length:n+1},()=>new Array(m+1).fill(0));
  for(let i=n-1;i>=0;i--)for(let j=m-1;j>=0;j--)
    dp[i][j]=a[i]===b[j]?dp[i+1][j+1]+1:Math.max(dp[i+1][j],dp[i][j+1]);
  const out=[];let i=0,j=0;
  while(i<n&&j<m){
    if(a[i]===b[j]){out.push({t:'same',v:a[i]});i++;j++;}
    else if(dp[i+1][j]>=dp[i][j+1]){out.push({t:'del',v:a[i]});i++;}
    else{out.push({t:'add',v:b[j]});j++;}
  }
  while(i<n){out.push({t:'del',v:a[i]});i++;}
  while(j<m){out.push({t:'add',v:b[j]});j++;}
  return out;
}
async function compararPdfs(){
  const fa=document.getElementById('cmp-pdf-a').files[0],fb=document.getElementById('cmp-pdf-b').files[0];
  if(!fa||!fb){toast('Selecione os dois arquivos PDF!');return;}
  show('cmp-result','⏳ Extraindo texto dos dois PDFs...');
  const [textA,textB]=await Promise.all([convExtractPdfText(fa),convExtractPdfText(fb)]);
  const linesA=textA.split('\n').map(l=>l.trim()).filter(Boolean);
  const linesB=textB.split('\n').map(l=>l.trim()).filter(Boolean);
  const diff=diffLines(linesA,linesB);
  const added=diff.filter(d=>d.t==='add').length,removed=diff.filter(d=>d.t==='del').length;
  const rBox=document.getElementById('cmp-result');
  rBox.innerHTML='';
  const summary=document.createElement('div');
  summary.style.cssText='font-size:12px;color:var(--muted);margin-bottom:8px';
  summary.textContent=(added||removed)?`${added} linha(s) adicionada(s), ${removed} linha(s) removida(s)/alterada(s).`:'Nenhuma diferença de texto encontrada entre os dois PDFs.';
  rBox.appendChild(summary);
  diff.forEach(d=>{
    if(d.t==='same')return;
    const row=document.createElement('div');
    row.style.cssText='font-family:monospace;font-size:11.5px;padding:3px 8px;border-radius:4px;margin-bottom:2px;white-space:pre-wrap;'+
      (d.t==='add'?'background:rgba(74,222,128,.12);color:#4ade80':'background:rgba(248,113,113,.12);color:#f87171;text-decoration:line-through');
    row.textContent=(d.t==='add'?'+ ':'- ')+d.v;
    rBox.appendChild(row);
  });
  logConversion('comparacao_pdfs.txt');
}

// ── Organizador de Páginas de PDF (arrastar para reordenar/excluir) ──
let orgPdfBytes=null,orgOrder=[],orgDragIdx=null,orgFileBase='documento';
async function orgLoadPdf(input){
  if(!input.files.length)return;
  orgFileBase=input.files[0].name.replace(/\.pdf$/i,'');
  orgPdfBytes=await input.files[0].arrayBuffer();
  const grid=document.getElementById('org-pages-grid');
  grid.innerHTML='<p style="font-size:12px;color:var(--muted)">Gerando miniaturas...</p>';
  const pdf=await pdfjsLib.getDocument({data:orgPdfBytes.slice(0)}).promise;
  orgOrder=[];
  grid.innerHTML='';
  for(let i=1;i<=pdf.numPages;i++){
    const page=await pdf.getPage(i);
    const vp=page.getViewport({scale:0.35});
    const canvas=document.createElement('canvas');
    canvas.width=vp.width;canvas.height=vp.height;
    await page.render({canvasContext:canvas.getContext('2d'),viewport:vp}).promise;
    orgOrder.push({original:i,thumb:canvas.toDataURL('image/png')});
  }
  orgRenderGrid();
  document.getElementById('org-save-btn').style.display='block';
}
function orgRenderGrid(){
  const grid=document.getElementById('org-pages-grid');
  grid.innerHTML=orgOrder.map((p,idx)=>`
    <div class="org-page-card" draggable="true" data-idx="${idx}"
      ondragstart="orgDragIdx=${idx}" ondragover="event.preventDefault()"
      ondrop="orgDrop(${idx})">
      <img src="${p.thumb}">
      <div class="org-page-num">Pág. ${p.original}</div>
      <button class="org-page-del" onclick="orgRemove(${idx})" title="Excluir página">✕</button>
    </div>`).join('');
}
function orgDrop(idx){
  if(orgDragIdx===null||orgDragIdx===idx)return;
  const item=orgOrder.splice(orgDragIdx,1)[0];
  orgOrder.splice(idx,0,item);
  orgDragIdx=null;
  orgRenderGrid();
}
function orgRemove(idx){
  orgOrder.splice(idx,1);
  orgRenderGrid();
}
async function orgSavePdf(){
  if(!orgOrder.length){toast('Não há páginas para salvar!');return;}
  const srcDoc=await PDFLib.PDFDocument.load(orgPdfBytes);
  const newDoc=await PDFLib.PDFDocument.create();
  const pages=await newDoc.copyPages(srcDoc,orgOrder.map(p=>p.original-1));
  pages.forEach(p=>newDoc.addPage(p));
  const bytes=await newDoc.save();
  const fname=orgFileBase+'_reorganizado.pdf';
  logConversion(fname);
  dl(bytes,fname,'application/pdf');
  closeModal();
}

// ── Texto para Voz (Web Speech API) ──
let ttsVoices=[];
function populateTtsVoices(){
  const sel=document.getElementById('tts-voice');
  if(!sel||typeof speechSynthesis==='undefined')return;
  const load=()=>{
    ttsVoices=speechSynthesis.getVoices();
    const ptVoices=ttsVoices.filter(v=>/^pt/i.test(v.lang));
    const others=ttsVoices.filter(v=>!/^pt/i.test(v.lang));
    sel.innerHTML=[...ptVoices,...others].map((v,i)=>`<option value="${ttsVoices.indexOf(v)}">${v.name} (${v.lang})</option>`).join('')||'<option>Nenhuma voz encontrada</option>';
  };
  load();
  if(speechSynthesis.onvoiceschanged!==undefined)speechSynthesis.onvoiceschanged=load;
}
function ttsPlay(){
  if(typeof speechSynthesis==='undefined'){toast('❌ Seu navegador não suporta síntese de voz.');return;}
  const text=document.getElementById('tts-input').value;
  if(!text.trim()){toast('Digite algum texto primeiro!');return;}
  speechSynthesis.cancel();
  const utter=new SpeechSynthesisUtterance(text);
  const voiceIdx=document.getElementById('tts-voice').value;
  if(voiceIdx!==''&&ttsVoices[voiceIdx])utter.voice=ttsVoices[voiceIdx];
  utter.rate=+document.getElementById('tts-rate').value;
  speechSynthesis.speak(utter);
}
function ttsPause(){
  if(typeof speechSynthesis==='undefined')return;
  if(speechSynthesis.speaking&&!speechSynthesis.paused)speechSynthesis.pause();
  else if(speechSynthesis.paused)speechSynthesis.resume();
}
function ttsStop(){ if(typeof speechSynthesis!=='undefined')speechSynthesis.cancel(); }

// ── Voz para Texto (Web Speech API) ──
let sttRecognizer=null,sttActive=false;
function sttStart(){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){toast('❌ Seu navegador não suporta reconhecimento de voz (use Chrome ou Edge).');return;}
  if(sttActive)return;
  sttRecognizer=new SR();
  sttRecognizer.lang='pt-BR';
  sttRecognizer.continuous=true;
  sttRecognizer.interimResults=true;
  const out=document.getElementById('stt-output');
  let finalText=out.value?out.value+' ':'';
  sttRecognizer.onresult=(e)=>{
    let interim='';
    for(let i=e.resultIndex;i<e.results.length;i++){
      const res=e.results[i];
      if(res.isFinal)finalText+=res[0].transcript+' ';
      else interim+=res[0].transcript;
    }
    out.value=finalText+interim;
  };
  sttRecognizer.onerror=(e)=>{ toast('❌ Erro no reconhecimento de voz: '+e.error); };
  sttRecognizer.onend=()=>{ if(sttActive)sttRecognizer.start(); }; // reinicia automaticamente enquanto ativo
  sttRecognizer.start();
  sttActive=true;
  document.getElementById('stt-start-btn').textContent='🎙 Ouvindo...';
}
function sttStop(){
  sttActive=false;
  if(sttRecognizer)sttRecognizer.stop();
  const btn=document.getElementById('stt-start-btn');
  if(btn)btn.textContent='🎙 Iniciar';
}
function sttDownload(){
  const text=document.getElementById('stt-output').value;
  if(!text.trim()){toast('Nada para baixar ainda!');return;}
  const blob=new Blob([text],{type:'text/plain;charset=utf-8'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='transcricao.txt';a.click();
  logConversion('transcricao.txt');
}

// ── OCR REAL (Tesseract.js, 100% no navegador) ──
function ocrDownloadTxt(textareaId){
  const text=document.getElementById(textareaId).value;
  if(!text.trim()){toast('Nada para baixar ainda!');return;}
  const blob=new Blob([text],{type:'text/plain;charset=utf-8'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='texto_ocr.txt';a.click();
  logConversion('texto_ocr.txt','OCR');
}

function ocrUpdateProgress(prefix,label,pct){
  const wrap=document.getElementById(prefix+'-prog');
  const lbl=document.getElementById(prefix+'-prog-label');
  const bar=document.getElementById(prefix+'-prog-bar');
  const pctEl=document.getElementById(prefix+'-prog-pct');
  if(wrap)wrap.style.display='block';
  if(lbl)lbl.textContent=label;
  if(bar)bar.style.width=pct+'%';
  if(pctEl)pctEl.textContent=pct+'%';
}

async function ocrRecognizeImageData(imgSource,lang,prefix){
  if(typeof Tesseract==='undefined')throw new Error('Biblioteca de OCR não carregou. Verifique sua conexão e tente novamente.');
  const {data}=await Tesseract.recognize(imgSource,lang,{
    logger:m=>{
      if(m.status==='recognizing text'){
        ocrUpdateProgress(prefix,'Reconhecendo texto…',Math.round((m.progress||0)*100));
      }else if(m.status){
        ocrUpdateProgress(prefix,m.status.charAt(0).toUpperCase()+m.status.slice(1)+'…',Math.round((m.progress||0)*100));
      }
    }
  });
  return data.text;
}

async function ocrImageToText(){
  const fi=document.getElementById('ocr-img-file');
  if(!fi.files.length){toast('❌ Selecione uma imagem!');return;}
  const lang=document.getElementById('ocr-img-lang').value;
  const out=document.getElementById('ocr-img-output');
  const dlBtn=document.getElementById('ocr-img-dl');
  out.style.display='none';dlBtn.style.display='none';
  ocrUpdateProgress('ocr-img','Carregando OCR…',0);
  try{
    const text=await ocrRecognizeImageData(fi.files[0],lang,'ocr-img');
    out.value=text.trim()||'(Nenhum texto foi reconhecido nesta imagem.)';
    out.style.display='block';dlBtn.style.display='block';
    document.getElementById('ocr-img-prog').style.display='none';
    toast('✅ Texto reconhecido com sucesso!');
    logConversion(fi.files[0].name,'OCR Imagem');
  }catch(e){
    document.getElementById('ocr-img-prog').style.display='none';
    toast('❌ '+e.message);
  }
}

async function ocrPdfToText(){
  const fi=document.getElementById('ocr-pdf-file');
  if(!fi.files.length){toast('❌ Selecione um PDF!');return;}
  const lang=document.getElementById('ocr-pdf-lang').value;
  const out=document.getElementById('ocr-pdf-output');
  const dlBtn=document.getElementById('ocr-pdf-dl');
  out.style.display='none';dlBtn.style.display='none';
  ocrUpdateProgress('ocr-pdf','Lendo páginas do PDF…',0);
  try{
    if(typeof pdfjsLib==='undefined')throw new Error('pdfjs indisponível');
    const buf=await fi.files[0].arrayBuffer();
    const pdf=await pdfjsLib.getDocument({data:buf}).promise;
    const n=Math.min(pdf.numPages,30); // limite de segurança para não travar o navegador
    let fullText='';
    for(let i=1;i<=n;i++){
      ocrUpdateProgress('ocr-pdf',`Renderizando página ${i}/${n}…`,Math.round(((i-1)/n)*100));
      const page=await pdf.getPage(i);
      const vp=page.getViewport({scale:2.2});
      const canvas=document.createElement('canvas');
      canvas.width=vp.width;canvas.height=vp.height;
      await page.render({canvasContext:canvas.getContext('2d'),viewport:vp}).promise;
      const pageText=await ocrRecognizeImageData(canvas,lang,'ocr-pdf');
      fullText+=`\n\n── Página ${i} ──\n`+pageText.trim();
    }
    out.value=fullText.trim()||'(Nenhum texto foi reconhecido neste PDF.)';
    out.style.display='block';dlBtn.style.display='block';
    document.getElementById('ocr-pdf-prog').style.display='none';
    toast('✅ '+n+' página(s) reconhecida(s) com sucesso!');
    logConversion(fi.files[0].name,'OCR PDF');
  }catch(e){
    document.getElementById('ocr-pdf-prog').style.display='none';
    toast('❌ '+e.message);
  }
}

// ── NOVAS FERRAMENTAS ÚTEIS ─────────────────────────────

// Recortar Imagem
let cropState={img:null,file:null,natW:0,natH:0};
function cropImgLoad(input){
  if(!input.files.length)return;
  cropState.file=input.files[0];
  const url=URL.createObjectURL(input.files[0]);
  const imgEl=document.getElementById('crop-img-el');
  imgEl.onload=()=>{
    cropState.natW=imgEl.naturalWidth;cropState.natH=imgEl.naturalHeight;
    document.getElementById('crop-stage-wrap').style.display='block';
    document.getElementById('crop-btn').style.display='block';
    initCropBox();
  };
  imgEl.src=url;
}
function initCropBox(){
  const stage=document.getElementById('crop-stage');
  const box=document.getElementById('crop-box');
  requestAnimationFrame(()=>{
    const w=stage.clientWidth,h=stage.clientHeight;
    const bw=w*0.6,bh=h*0.6;
    Object.assign(box.style,{left:(w-bw)/2+'px',top:(h-bh)/2+'px',width:bw+'px',height:bh+'px'});
    bindCropDrag();
  });
}
function bindCropDrag(){
  const stage=document.getElementById('crop-stage'),box=document.getElementById('crop-box');
  if(box.dataset.bound)return;box.dataset.bound='1';
  let mode=null,startX=0,startY=0,startBox={};
  const getBox=()=>({left:parseFloat(box.style.left),top:parseFloat(box.style.top),width:parseFloat(box.style.width),height:parseFloat(box.style.height)});
  const start=(e,m)=>{mode=m;const p=e.touches?e.touches[0]:e;startX=p.clientX;startY=p.clientY;startBox=getBox();e.stopPropagation();e.preventDefault();};
  box.addEventListener('pointerdown',e=>{if(e.target===box)start(e,'move');});
  box.querySelectorAll('.crop-handle').forEach(h=>h.addEventListener('pointerdown',e=>start(e,h.dataset.h)));
  window.addEventListener('pointermove',e=>{
    if(!mode)return;
    const stageR=stage.getBoundingClientRect();
    const dx=e.clientX-startX,dy=e.clientY-startY;
    let {left,top,width,height}=startBox;
    if(mode==='move'){left+=dx;top+=dy;}
    else{
      if(mode.includes('e'))width+=dx;
      if(mode.includes('w')){left+=dx;width-=dx;}
      if(mode.includes('s'))height+=dy;
      if(mode.includes('n')){top+=dy;height-=dy;}
    }
    width=Math.max(30,Math.min(width,stageR.width-left));
    height=Math.max(30,Math.min(height,stageR.height-top));
    left=Math.max(0,Math.min(left,stageR.width-width));
    top=Math.max(0,Math.min(top,stageR.height-height));
    Object.assign(box.style,{left:left+'px',top:top+'px',width:width+'px',height:height+'px'});
  });
  window.addEventListener('pointerup',()=>mode=null);
}
function cropImgApply(){
  const stage=document.getElementById('crop-stage'),box=document.getElementById('crop-box'),imgEl=document.getElementById('crop-img-el');
  const stageR=stage.getBoundingClientRect();
  const scaleX=cropState.natW/imgEl.clientWidth,scaleY=cropState.natH/imgEl.clientHeight;
  const bx=parseFloat(box.style.left)*scaleX,by=parseFloat(box.style.top)*scaleY;
  const bw=parseFloat(box.style.width)*scaleX,bh=parseFloat(box.style.height)*scaleY;
  const canvas=document.createElement('canvas');
  canvas.width=bw;canvas.height=bh;
  canvas.getContext('2d').drawImage(imgEl,bx,by,bw,bh,0,0,bw,bh);
  canvas.toBlob(blob=>{
    blob.arrayBuffer().then(buf=>{dl(new Uint8Array(buf),'imagem_recortada.png','image/png');closeModal();});
  },'image/png');
}

// Remover Metadados EXIF (redesenhar em canvas remove metadados automaticamente)
async function removeExif(){
  const fi=document.getElementById('exif-imgs');
  if(!fi.files.length){toast('❌ Selecione ao menos uma imagem!');return;}
  show('exif-result','⏳ Processando...');
  try{
    const zip=fi.files.length>1?new JSZip():null;
    for(const f of fi.files){
      const bmp=await createImageBitmap(f);
      const canvas=document.createElement('canvas');
      canvas.width=bmp.width;canvas.height=bmp.height;
      canvas.getContext('2d').drawImage(bmp,0,0);
      const isPng=/\.png$/i.test(f.name);
      const blob=await new Promise(r=>canvas.toBlob(r,isPng?'image/png':'image/jpeg',0.95));
      const buf=new Uint8Array(await blob.arrayBuffer());
      const outName='limpo_'+f.name.replace(/\.(jpe?g|png)$/i,'')+(isPng?'.png':'.jpg');
      if(zip)zip.file(outName,buf);
      else{dl(buf,outName,blob.type);}
    }
    if(zip){
      const blob=await zip.generateAsync({type:'blob'});
      const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='imagens_sem_metadados.zip';a.click();
      logConversion('imagens_sem_metadados.zip','Remover EXIF');
    }
    show('exif-result','✅ Metadados removidos com sucesso!');
  }catch(e){show('exif-result','❌ Erro: '+e.message);}
}

// Colagem de Fotos
async function makeCollage(){
  const fi=document.getElementById('collage-imgs');
  if(fi.files.length<2){toast('❌ Selecione ao menos 2 fotos!');return;}
  const cols=+document.getElementById('collage-cols').value;
  const gap=+document.getElementById('collage-gap').value;
  const rows=Math.ceil(fi.files.length/cols);
  const cellSize=480;
  const canvas=document.createElement('canvas');
  canvas.width=cols*cellSize+(cols+1)*gap;
  canvas.height=rows*cellSize+(rows+1)*gap;
  const ctx=canvas.getContext('2d');
  ctx.fillStyle='#ffffff';ctx.fillRect(0,0,canvas.width,canvas.height);
  let i=0;
  for(const f of fi.files){
    const bmp=await createImageBitmap(f);
    const col=i%cols,row=Math.floor(i/cols);
    const x=gap+col*(cellSize+gap),y=gap+row*(cellSize+gap);
    const scale=Math.max(cellSize/bmp.width,cellSize/bmp.height);
    const dw=bmp.width*scale,dh=bmp.height*scale;
    ctx.save();
    ctx.beginPath();ctx.rect(x,y,cellSize,cellSize);ctx.clip();
    ctx.drawImage(bmp,x+(cellSize-dw)/2,y+(cellSize-dh)/2,dw,dh);
    ctx.restore();
    i++;
  }
  canvas.toBlob(blob=>blob.arrayBuffer().then(buf=>{dl(new Uint8Array(buf),'colagem.png','image/png');closeModal();}),'image/png');
}

// Gerador de Favicon
async function genFavicon(){
  const fi=document.getElementById('favicon-img');
  if(!fi.files.length){toast('❌ Selecione uma imagem!');return;}
  const bmp=await createImageBitmap(fi.files[0]);
  const sizes=[16,32,48,64,180,192,512];
  const zip=new JSZip();
  for(const s of sizes){
    const canvas=document.createElement('canvas');
    canvas.width=s;canvas.height=s;
    const ctx=canvas.getContext('2d');
    const scale=Math.max(s/bmp.width,s/bmp.height);
    const dw=bmp.width*scale,dh=bmp.height*scale;
    ctx.drawImage(bmp,(s-dw)/2,(s-dh)/2,dw,dh);
    const blob=await new Promise(r=>canvas.toBlob(r,'image/png'));
    zip.file(`favicon-${s}x${s}.png`,new Uint8Array(await blob.arrayBuffer()));
  }
  zip.file('README.txt','Adicione ao <head> do seu site:\n\n<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">\n<link rel="apple-touch-icon" sizes="180x180" href="favicon-180x180.png">');
  const blob=await zip.generateAsync({type:'blob'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='favicon-pack.zip';a.click();
  logConversion('favicon-pack.zip','Gerador de Favicon');
  closeModal();
}

// Extrator de Paleta de Cores
async function extractPalette(input){
  if(!input.files.length)return;
  const bmp=await createImageBitmap(input.files[0]);
  const canvas=document.createElement('canvas');
  const s=100;canvas.width=s;canvas.height=s;
  const ctx=canvas.getContext('2d');
  ctx.drawImage(bmp,0,0,s,s);
  const data=ctx.getImageData(0,0,s,s).data;
  const buckets={};
  for(let i=0;i<data.length;i+=4){
    const r=Math.round(data[i]/32)*32,g=Math.round(data[i+1]/32)*32,b=Math.round(data[i+2]/32)*32;
    const key=r+','+g+','+b;
    buckets[key]=(buckets[key]||0)+1;
  }
  const sorted=Object.entries(buckets).sort((a,b)=>b[1]-a[1]).slice(0,8);
  const box=document.getElementById('palette-result');
  box.innerHTML=sorted.map(([rgb])=>{
    const [r,g,b]=rgb.split(',').map(Number);
    const hex='#'+[r,g,b].map(x=>Math.min(255,x).toString(16).padStart(2,'0')).join('');
    return `<div style="text-align:center;cursor:pointer" onclick="navigator.clipboard.writeText('${hex}');toast('✅ ${hex} copiado!')">
      <div style="width:64px;height:64px;border-radius:10px;background:${hex};border:1px solid var(--border)"></div>
      <div style="font-size:11px;margin-top:4px;font-family:monospace">${hex}</div>
    </div>`;
  }).join('');
}

// Remover Páginas de PDF
let delPgDoc=null,delPgTotal=0;
async function delPgLoad(input){
  if(!input.files.length)return;
  const buf=await input.files[0].arrayBuffer();
  delPgDoc=await PDFLib.PDFDocument.load(buf);
  delPgTotal=delPgDoc.getPageCount();
  document.getElementById('delpg-info').textContent='Documento com '+delPgTotal+' página(s).';
}
function parsePageRanges(str,max){
  const pages=new Set();
  str.split(',').map(s=>s.trim()).filter(Boolean).forEach(part=>{
    const m=part.match(/^(\d+)-(\d+)$/);
    if(m){for(let i=+m[1];i<=+m[2];i++)if(i>=1&&i<=max)pages.add(i);}
    else{const n=+part;if(n>=1&&n<=max)pages.add(n);}
  });
  return pages;
}
async function deletePdfPages(){
  if(!delPgDoc){toast('❌ Selecione um PDF!');return;}
  const range=document.getElementById('delpg-range').value.trim();
  if(!range){toast('❌ Informe as páginas a remover!');return;}
  const toRemove=parsePageRanges(range,delPgTotal);
  if(!toRemove.size){toast('❌ Nenhuma página válida informada.');return;}
  if(toRemove.size>=delPgTotal){toast('❌ Você não pode remover todas as páginas.');return;}
  try{
    const buf=await (document.getElementById('delpg-pdf').files[0]).arrayBuffer();
    const src=await PDFLib.PDFDocument.load(buf);
    const out=await PDFLib.PDFDocument.create();
    const keep=[];
    for(let i=0;i<delPgTotal;i++)if(!toRemove.has(i+1))keep.push(i);
    const copied=await out.copyPages(src,keep);
    copied.forEach(p=>out.addPage(p));
    dl(await out.save(),'documento_sem_paginas.pdf','application/pdf');
    closeModal();
  }catch(e){toast('❌ Erro: '+e.message);}
}

// Editar Metadados de PDF
async function editPdfMetadata(){
  const fi=document.getElementById('meta-pdf');
  if(!fi.files.length){toast('❌ Selecione um PDF!');return;}
  try{
    const buf=await fi.files[0].arrayBuffer();
    const doc=await PDFLib.PDFDocument.load(buf);
    const title=document.getElementById('meta-title').value;
    const author=document.getElementById('meta-author').value;
    const subject=document.getElementById('meta-subject').value;
    const keywords=document.getElementById('meta-keywords').value;
    if(title)doc.setTitle(title);
    if(author)doc.setAuthor(author);
    if(subject)doc.setSubject(subject);
    if(keywords)doc.setKeywords(keywords.split(',').map(k=>k.trim()).filter(Boolean));
    doc.setModificationDate(new Date());
    dl(await doc.save(),'documento_com_metadados.pdf','application/pdf');
    closeModal();
  }catch(e){toast('❌ Erro: '+e.message);}
}

// Remover Restrições de PDF
async function unlockPdf(){
  const fi=document.getElementById('unlock-pdf');
  if(!fi.files.length){toast('❌ Selecione um PDF!');return;}
  show('unlock-result','⏳ Processando...');
  try{
    const buf=await fi.files[0].arrayBuffer();
    const doc=await PDFLib.PDFDocument.load(buf,{ignoreEncryption:true});
    const out=await doc.save();
    dl(out,'documento_sem_restricoes.pdf','application/pdf');
    show('unlock-result','✅ PDF processado e baixado sem restrições de permissão.');
  }catch(e){
    show('unlock-result','❌ Não foi possível processar este PDF. Ele provavelmente exige senha para abrir, o que não é suportado no navegador.\n\nDetalhe: '+e.message);
  }
}

// Conversor de Base Numérica
function convertBase(from){
  if(!document.getElementById('base-input'))return;
  const el={bin:document.getElementById('base-bin'),dec:document.getElementById('base-dec'),hex:document.getElementById('base-hex'),oct:document.getElementById('base-oct')};
  const errEl=document.getElementById('base-error');
  let raw=from==='dec'?document.getElementById('base-input').value:el[from].value;
  if(from!=='dec')document.getElementById('base-input').value=raw;
  raw=raw.trim();
  if(!raw){errEl.textContent='';return;}
  const bases={bin:2,dec:10,hex:16,oct:8};
  const valid={bin:/^[01]+$/i,dec:/^\d+$/,hex:/^[0-9a-f]+$/i,oct:/^[0-7]+$/};
  if(!valid[from].test(raw)){errEl.textContent='Valor inválido para '+from.toUpperCase()+'.';return;}
  errEl.textContent='';
  let n;
  try{n=BigInt(from==='hex'?'0x'+raw:from==='bin'?'0b'+raw:from==='oct'?'0o'+raw:raw);}catch(e){errEl.textContent='Número muito grande ou inválido.';return;}
  el.bin.value=n.toString(2);
  el.dec.value=n.toString(10);
  el.hex.value=n.toString(16).toUpperCase();
  el.oct.value=n.toString(8);
}

// Formatador/Validador de JSON
function formatJson(){
  const raw=document.getElementById('json-input').value;
  try{
    const parsed=JSON.parse(raw);
    const formatted=JSON.stringify(parsed,null,2);
    document.getElementById('json-input').value=formatted;
    show('json-result','✅ JSON válido! ('+formatted.split('\n').length+' linhas, '+Object.keys(parsed).length+' chave(s) no nível raiz)');
  }catch(e){show('json-result','❌ JSON inválido: '+e.message);}
}
function minifyJson(){
  const raw=document.getElementById('json-input').value;
  try{
    const parsed=JSON.parse(raw);
    document.getElementById('json-input').value=JSON.stringify(parsed);
    show('json-result','✅ JSON minificado.');
  }catch(e){show('json-result','❌ JSON inválido: '+e.message);}
}

// Gerador de Hash (SHA-256, SHA-1, MD5 — implementação pura em JS, funciona mesmo em file://)
let hashActiveTab='text';
function switchHashTab(tab,el){
  hashActiveTab=tab;
  document.querySelectorAll('#hash-pane-text, #hash-pane-file').forEach(p=>p.classList.remove('active'));
  document.getElementById('hash-pane-'+tab).classList.add('active');
  el.parentElement.querySelectorAll('.sig-tab').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  calcHash();
}
function sha256Hex(bytes){
  const K=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
  let H=[0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
  const l=bytes.length;
  const withOne=new Uint8Array(((l+9+63)>>6<<6)+64 - (((l+9+63)>>6<<6)>=(l+9)?0:0));
  const totalLen=(((l+9+63)>>6)<<6);
  const buf=new Uint8Array(totalLen);
  buf.set(bytes);buf[l]=0x80;
  const bitLen=l*8;
  buf[totalLen-4]=(bitLen>>>24)&255;buf[totalLen-3]=(bitLen>>>16)&255;buf[totalLen-2]=(bitLen>>>8)&255;buf[totalLen-1]=bitLen&255;
  const w=new Uint32Array(64);
  for(let chunk=0;chunk<totalLen;chunk+=64){
    for(let i=0;i<16;i++)w[i]=(buf[chunk+i*4]<<24)|(buf[chunk+i*4+1]<<16)|(buf[chunk+i*4+2]<<8)|(buf[chunk+i*4+3]);
    for(let i=16;i<64;i++){
      const s0=((w[i-15]>>>7)|(w[i-15]<<25))^((w[i-15]>>>18)|(w[i-15]<<14))^(w[i-15]>>>3);
      const s1=((w[i-2]>>>17)|(w[i-2]<<15))^((w[i-2]>>>19)|(w[i-2]<<13))^(w[i-2]>>>10);
      w[i]=(w[i-16]+s0+w[i-7]+s1)|0;
    }
    let [a,b,c,d,e,f,g,h]=H;
    for(let i=0;i<64;i++){
      const S1=((e>>>6)|(e<<26))^((e>>>11)|(e<<21))^((e>>>25)|(e<<7));
      const ch=(e&f)^((~e)&g);
      const t1=(h+S1+ch+K[i]+w[i])|0;
      const S0=((a>>>2)|(a<<30))^((a>>>13)|(a<<19))^((a>>>22)|(a<<10));
      const maj=(a&b)^(a&c)^(b&c);
      const t2=(S0+maj)|0;
      h=g;g=f;f=e;e=(d+t1)|0;d=c;c=b;b=a;a=(t1+t2)|0;
    }
    H=[H[0]+a|0,H[1]+b|0,H[2]+c|0,H[3]+d|0,H[4]+e|0,H[5]+f|0,H[6]+g|0,H[7]+h|0];
  }
  return H.map(x=>(x>>>0).toString(16).padStart(8,'0')).join('');
}
function sha1Hex(bytes){
  let h0=0x67452301,h1=0xEFCDAB89,h2=0x98BADCFE,h3=0x10325476,h4=0xC3D2E1F0;
  const l=bytes.length;
  const totalLen=(((l+9+63)>>6)<<6);
  const buf=new Uint8Array(totalLen);
  buf.set(bytes);buf[l]=0x80;
  const bitLen=l*8;
  buf[totalLen-4]=(bitLen>>>24)&255;buf[totalLen-3]=(bitLen>>>16)&255;buf[totalLen-2]=(bitLen>>>8)&255;buf[totalLen-1]=bitLen&255;
  const w=new Uint32Array(80);
  for(let chunk=0;chunk<totalLen;chunk+=64){
    for(let i=0;i<16;i++)w[i]=(buf[chunk+i*4]<<24)|(buf[chunk+i*4+1]<<16)|(buf[chunk+i*4+2]<<8)|(buf[chunk+i*4+3]);
    for(let i=16;i<80;i++){const v=w[i-3]^w[i-8]^w[i-14]^w[i-16];w[i]=(v<<1)|(v>>>31);}
    let a=h0,b=h1,c=h2,d=h3,e=h4;
    for(let i=0;i<80;i++){
      let f,k;
      if(i<20){f=(b&c)|((~b)&d);k=0x5A827999;}
      else if(i<40){f=b^c^d;k=0x6ED9EBA1;}
      else if(i<60){f=(b&c)|(b&d)|(c&d);k=0x8F1BBCDC;}
      else{f=b^c^d;k=0xCA62C1D6;}
      const temp=(((a<<5)|(a>>>27))+f+e+k+w[i])|0;
      e=d;d=c;c=(b<<30)|(b>>>2);b=a;a=temp;
    }
    h0=(h0+a)|0;h1=(h1+b)|0;h2=(h2+c)|0;h3=(h3+d)|0;h4=(h4+e)|0;
  }
  return [h0,h1,h2,h3,h4].map(x=>(x>>>0).toString(16).padStart(8,'0')).join('');
}
function md5Hex(bytes){
  function rotl(x,c){return (x<<c)|(x>>>(32-c));}
  const s=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21];
  const K=new Uint32Array(64);
  for(let i=0;i<64;i++)K[i]=Math.floor(Math.abs(Math.sin(i+1))*4294967296);
  let a0=0x67452301,b0=0xefcdab89,c0=0x98badcfe,d0=0x10325476;
  const l=bytes.length;
  const totalLen=(((l+9+63)>>6)<<6);
  const buf=new Uint8Array(totalLen);
  buf.set(bytes);buf[l]=0x80;
  const bitLen=l*8;
  // MD5 usa little-endian para o comprimento
  for(let i=0;i<8;i++)buf[totalLen-8+i]=(bitLen*(i<4?1:0))>>>(8*i)&255;
  buf[totalLen-8]=bitLen&255;buf[totalLen-7]=(bitLen>>>8)&255;buf[totalLen-6]=(bitLen>>>16)&255;buf[totalLen-5]=(bitLen>>>24)&255;
  for(let chunk=0;chunk<totalLen;chunk+=64){
    const M=new Uint32Array(16);
    for(let i=0;i<16;i++)M[i]=buf[chunk+i*4]|(buf[chunk+i*4+1]<<8)|(buf[chunk+i*4+2]<<16)|(buf[chunk+i*4+3]<<24);
    let A=a0,B=b0,C=c0,D=d0;
    for(let i=0;i<64;i++){
      let F,g;
      if(i<16){F=(B&C)|((~B)&D);g=i;}
      else if(i<32){F=(D&B)|((~D)&C);g=(5*i+1)%16;}
      else if(i<48){F=B^C^D;g=(3*i+5)%16;}
      else{F=C^(B|(~D));g=(7*i)%16;}
      F=(F+A+K[i]+M[g])|0;
      A=D;D=C;C=B;
      B=(B+rotl(F,s[i]))|0;
    }
    a0=(a0+A)|0;b0=(b0+B)|0;c0=(c0+C)|0;d0=(d0+D)|0;
  }
  function toLE(x){const b=new Uint8Array(4);b[0]=x&255;b[1]=(x>>>8)&255;b[2]=(x>>>16)&255;b[3]=(x>>>24)&255;return [...b].map(v=>v.toString(16).padStart(2,'0')).join('');}
  return toLE(a0)+toLE(b0)+toLE(c0)+toLE(d0);
}
async function calcHash(){
  const resEl=document.getElementById('hash-result');
  let bytes;
  if(hashActiveTab==='text'){
    const txt=document.getElementById('hash-text-input').value;
    if(!txt){resEl.textContent='Digite um texto ou selecione um arquivo.';return;}
    bytes=new TextEncoder().encode(txt);
  }else{
    const f=document.getElementById('hash-file-input').files[0];
    if(!f){resEl.textContent='Digite um texto ou selecione um arquivo.';return;}
    bytes=new Uint8Array(await f.arrayBuffer());
  }
  resEl.textContent='⏳ Calculando...';
  await new Promise(r=>setTimeout(r,10));
  const md5=md5Hex(bytes),sha1=sha1Hex(bytes),sha256=sha256Hex(bytes);
  resEl.textContent=`MD5:\n${md5}\n\nSHA-1:\n${sha1}\n\nSHA-256:\n${sha256}`;
}

// Conversor de Case de Texto
function applyCase(mode){
  const txt=document.getElementById('case-input').value;
  let out=txt;
  const words=txt.trim().split(/\s+/).filter(Boolean);
  if(mode==='upper')out=txt.toUpperCase();
  else if(mode==='lower')out=txt.toLowerCase();
  else if(mode==='title')out=words.map(w=>w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()).join(' ');
  else if(mode==='camel')out=words.map((w,i)=>i===0?w.toLowerCase():w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()).join('');
  else if(mode==='snake')out=words.map(w=>w.toLowerCase()).join('_');
  else if(mode==='kebab')out=words.map(w=>w.toLowerCase()).join('-');
  document.getElementById('case-output').value=out;
}
function convertCase(){/* placeholder para oninput, o resultado é gerado ao clicar em um dos botões */}
function copyCaseOutput(){
  const out=document.getElementById('case-output').value;
  if(!out){toast('❌ Nada para copiar ainda.');return;}
  navigator.clipboard.writeText(out).then(()=>toast('✅ Copiado!'));
}

// Gerador de UUID
function uuidv4(){
  if(typeof crypto!=='undefined'&&crypto.randomUUID)return crypto.randomUUID();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{
    const r=Math.random()*16|0,v=c==='x'?r:(r&0x3|0x8);
    return v.toString(16);
  });
}
function genUuids(){
  const n=Math.min(100,Math.max(1,+document.getElementById('uuid-count').value||1));
  const list=Array.from({length:n},()=>uuidv4());
  document.getElementById('uuid-output').value=list.join('\n');
  document.getElementById('uuid-copy-btn').style.display='block';
}
function copyUuids(){
  navigator.clipboard.writeText(document.getElementById('uuid-output').value).then(()=>toast('✅ UUIDs copiados!'));
}

// Valor por Extenso (moeda em português)
function valorPorExtenso(){
  const val=+document.getElementById('extenso-valor').value;
  if(isNaN(val)||val<0){show('extenso-result','❌ Informe um valor válido.');return;}
  const unidades=['','um','dois','três','quatro','cinco','seis','sete','oito','nove'];
  const dez={10:'dez',11:'onze',12:'doze',13:'treze',14:'catorze',15:'quinze',16:'dezesseis',17:'dezessete',18:'dezoito',19:'dezenove'};
  const dezenas=['','','vinte','trinta','quarenta','cinquenta','sessenta','setenta','oitenta','noventa'];
  const centenas=['','cento','duzentos','trezentos','quatrocentos','quinhentos','seiscentos','setecentos','oitocentos','novecentos'];
  function trescentos(n){
    if(n===0)return '';
    if(n===100)return 'cem';
    let parts=[];
    const c=Math.floor(n/100),r=n%100;
    if(c)parts.push(centenas[c]);
    if(r>=10&&r<20)parts.push(dez[r]);
    else{
      const d=Math.floor(r/10),u=r%10;
      let sub=[];
      if(d)sub.push(dezenas[d]);
      if(u)sub.push(unidades[u]);
      if(sub.length)parts.push(sub.join(' e '));
    }
    return parts.join(' e ');
  }
  function grupos(n){
    if(n===0)return 'zero';
    const milhoes=Math.floor(n/1000000);
    const milhares=Math.floor((n%1000000)/1000);
    const resto=n%1000;
    let parts=[];
    if(milhoes)parts.push(trescentos(milhoes)+(milhoes>1?' milhões':' milhão'));
    if(milhares)parts.push((milhares===1?'mil':trescentos(milhares)+' mil'));
    if(resto)parts.push(trescentos(resto));
    return parts.join(' e ');
  }
  const inteiro=Math.floor(val);
  const centavos=Math.round((val-inteiro)*100);
  let texto=grupos(inteiro)+(inteiro===1?' real':' reais');
  if(centavos>0)texto+=' e '+grupos(centavos)+(centavos===1?' centavo':' centavos');
  texto=texto.charAt(0).toUpperCase()+texto.slice(1);
  show('extenso-result','R$ '+fmt(val)+'\n\n'+texto+'.');
}

// Calculadora de Horas Trabalhadas
let horasLinhaCount=0;
function addHorasLinha(){
  const id=horasLinhaCount++;
  const wrap=document.getElementById('horas-linhas');
  const row=document.createElement('div');
  row.className='horas-linha';
  row.id='horas-linha-'+id;
  row.innerHTML=`<input type="time" class="f-input horas-entrada" value="08:00"><span style="color:var(--muted);font-size:12px">até</span><input type="time" class="f-input horas-saida" value="17:00"><button onclick="document.getElementById('horas-linha-${id}').remove()">✕</button>`;
  wrap.appendChild(row);
}
function calcHorasTrabalhadas(){
  const rows=document.querySelectorAll('.horas-linha');
  let totalMin=0,detalhes=[];
  rows.forEach(r=>{
    const ini=r.querySelector('.horas-entrada').value,fim=r.querySelector('.horas-saida').value;
    if(!ini||!fim)return;
    const [ih,im]=ini.split(':').map(Number),[fh,fm]=fim.split(':').map(Number);
    let mins=(fh*60+fm)-(ih*60+im);
    if(mins<0)mins+=24*60;
    totalMin+=mins;
    detalhes.push(ini+' – '+fim+'  ('+(mins/60).toFixed(2).replace('.',',')+'h)');
  });
  const h=Math.floor(totalMin/60),m=totalMin%60;
  show('horas-result',`INTERVALOS\n${'─'.repeat(30)}\n${detalhes.join('\n')}\n${'─'.repeat(30)}\nTOTAL: ${h}h${String(m).padStart(2,'0')}min (${(totalMin/60).toFixed(2).replace('.',',')} horas decimais)`);
}

// ── UTIL: copiar campo genérico para a área de transferência ──
function copyGenericField(id){
  const el=document.getElementById(id);
  if(!el||!el.value){toast('❌ Nada para copiar.');return;}
  navigator.clipboard.writeText(el.value).then(()=>toast('✅ Copiado para a área de transferência!')).catch(()=>toast('❌ Não foi possível copiar.'));
}

// ── Calculadora de Juros Simples ──
function calcJurosSimples(){
  const c=+document.getElementById('js-capital').value,t=+document.getElementById('js-taxa').value/100,p=+document.getElementById('js-periodo').value;
  if(!c||!p){show('js-result','❌ Preencha capital e período.');return;}
  const juros=c*t*p,total=c+juros;
  show('js-result',`JUROS SIMPLES\n${'─'.repeat(30)}\nCapital inicial: R$ ${fmt(c)}\nJuros acumulados: R$ ${fmt(juros)}\n${'─'.repeat(30)}\nMontante final: R$ ${fmt(total)}`);
}

// ── Calculadora de Rescisão Trabalhista (estimativa) ──
function calcRescisao(){
  const sal=+document.getElementById('resc-sal').value,meses=Math.min(12,Math.max(1,+document.getElementById('resc-meses').value)),
        aviso=+document.getElementById('resc-aviso').value,fgts=+document.getElementById('resc-fgts').value,tipo=document.getElementById('resc-tipo').value;
  if(!sal){show('resc-result','❌ Informe o salário bruto.');return;}
  const saldoSalario=sal/30*15; // aproximação de meio mês corrente
  const feriasProp=(sal/12)*meses, tercoFerias=feriasProp/3;
  const decimoProp=(sal/12)*meses;
  const avisoPrevio=tipo==='pedido_demissao'?0:(sal/30)*aviso;
  const multaFgts=tipo==='sem_justa_causa'?fgts*0.4:(tipo==='acordo'?fgts*0.2:0);
  let total=saldoSalario+feriasProp+tercoFerias+decimoProp+avisoPrevio+multaFgts;
  const tipoLabel={sem_justa_causa:'Sem justa causa (direito a tudo + multa 40% FGTS)',pedido_demissao:'Pedido de demissão (sem aviso e sem multa FGTS)',acordo:'Acordo mútuo (multa reduzida a 20% do FGTS, aviso pela metade)'}[tipo];
  if(tipo==='acordo')total-=avisoPrevio/2;
  show('resc-result',`RESCISÃO TRABALHISTA — Estimativa\n${'─'.repeat(34)}\nTipo: ${tipoLabel}\n\nSaldo de salário: R$ ${fmt(saldoSalario)}\nFérias proporcionais: R$ ${fmt(feriasProp)}\n1/3 sobre férias: R$ ${fmt(tercoFerias)}\n13º proporcional: R$ ${fmt(decimoProp)}\nAviso prévio: R$ ${fmt(tipo==='acordo'?avisoPrevio/2:avisoPrevio)}\nMulta FGTS: R$ ${fmt(multaFgts)}\n${'─'.repeat(34)}\nTOTAL ESTIMADO: R$ ${fmt(total)}\n\n⚠️ Cálculo simplificado e educativo — não substitui a homologação sindical/RH. Não inclui descontos de INSS/IRRF.`);
}

// ── Calculadora de Horas Extras ──
function calcHorasExtras(){
  const sal=+document.getElementById('he-sal').value,horasMes=+document.getElementById('he-horas-mes').value,
        h50=+document.getElementById('he-h50').value,h100=+document.getElementById('he-h100').value;
  if(!sal||!horasMes){show('he-result','❌ Preencha salário e horas mensais.');return;}
  const valorHora=sal/horasMes;
  const valor50=valorHora*1.5*h50, valor100=valorHora*2*h100;
  const total=valor50+valor100;
  show('he-result',`HORAS EXTRAS\n${'─'.repeat(30)}\nValor da hora normal: R$ ${fmt(valorHora)}\nHoras 50% (${h50}h): R$ ${fmt(valor50)}\nHoras 100% (${h100}h): R$ ${fmt(valor100)}\n${'─'.repeat(30)}\nTotal de horas extras: R$ ${fmt(total)}\n\n⚠️ Estimativa simplificada, sem descontos de INSS/IRRF.`);
}

// ── Conversor de Números Romanos ──
const ROMAN_MAP=[[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
function toRoman(num){let r='';for(const [v,s] of ROMAN_MAP){while(num>=v){r+=s;num-=v;}}return r;}
function fromRoman(str){
  const map={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
  str=str.toUpperCase().trim();
  let total=0;
  for(let i=0;i<str.length;i++){
    const cur=map[str[i]],next=map[str[i+1]];
    if(!cur)return null;
    if(next&&cur<next)total-=cur;else total+=cur;
  }
  return total;
}
function arabicToRoman(){
  const el=document.getElementById('rom-num');
  if(!el)return;
  const n=+el.value;
  if(!n||n<1||n>3999){show('rom-result','❌ Digite um número entre 1 e 3999.');return;}
  const roman=toRoman(n);
  document.getElementById('rom-str').value=roman;
  show('rom-result',`${n}  →  ${roman}`);
}
function romanToArabic(){
  const strEl=document.getElementById('rom-str'),numEl=document.getElementById('rom-num');
  if(!strEl||!numEl)return;
  const s=strEl.value;
  const n=fromRoman(s);
  if(n===null||n<=0){show('rom-result','❌ Numeral romano inválido.');return;}
  numEl.value=n;
  show('rom-result',`${s.toUpperCase()}  →  ${n}`);
}

// ── Gerador de Lorem Ipsum ──
const LOREM_WORDS_LAT="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure in reprehenderit voluptate velit esse cillum eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum".split(' ');
const LOREM_WORDS_PT="texto exemplo modelo rápido fácil sistema projeto layout design conteúdo página site aplicativo usuário interface elemento bloco seção título parágrafo imagem botão link menu formulário dados informação estrutura desenvolvimento criativo moderno simples eficiente prático visual".split(' ');
function loremSentence(words,minW,maxW){
  const n=minW+Math.floor(Math.random()*(maxW-minW));
  let arr=[];
  for(let i=0;i<n;i++)arr.push(words[Math.floor(Math.random()*words.length)]);
  let s=arr.join(' ');
  return s.charAt(0).toUpperCase()+s.slice(1)+'.';
}
function genLoremIpsum(){
  const paras=Math.min(20,Math.max(1,+document.getElementById('lorem-paras').value));
  const sentPerPara=Math.min(20,Math.max(1,+document.getElementById('lorem-sent').value));
  const pt=document.getElementById('lorem-pt').checked;
  const words=pt?LOREM_WORDS_PT:LOREM_WORDS_LAT;
  let out=[];
  for(let p=0;p<paras;p++){
    let sentences=[];
    for(let s=0;s<sentPerPara;s++)sentences.push(loremSentence(words,6,14));
    out.push(sentences.join(' '));
  }
  document.getElementById('lorem-output').value=out.join('\n\n');
}

// ── Conversor de Timestamp Unix ──
function unixToDate(){
  const el=document.getElementById('ts-unix');
  if(!el)return;
  const ts=+el.value;
  if(!ts&&ts!==0){show('ts-result','❌ Informe um timestamp válido.');return;}
  const d=new Date(ts*1000);
  if(isNaN(d.getTime())){show('ts-result','❌ Timestamp inválido.');return;}
  const dateEl=document.getElementById('ts-date');
  if(!dateEl)return;
  const pad=n=>String(n).padStart(2,'0');
  dateEl.value=`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  show('ts-result',`Timestamp: ${ts}\nData local: ${d.toLocaleString('pt-BR')}\nISO 8601 (UTC): ${d.toISOString()}`);
}
function dateToUnix(){
  const dateEl=document.getElementById('ts-date'),unixEl=document.getElementById('ts-unix');
  if(!dateEl||!unixEl)return;
  const v=dateEl.value;
  if(!v){show('ts-result','❌ Selecione uma data.');return;}
  const d=new Date(v);
  const ts=Math.floor(d.getTime()/1000);
  unixEl.value=ts;
  show('ts-result',`Data local: ${d.toLocaleString('pt-BR')}\nTimestamp Unix: ${ts}\nISO 8601 (UTC): ${d.toISOString()}`);
}

// ── Base64 de Texto ──
function b64Encode(){
  const t=document.getElementById('b64-text').value;
  if(!t){toast('❌ Digite um texto primeiro.');return;}
  try{document.getElementById('b64-output').value=btoa(unescape(encodeURIComponent(t)));}
  catch(e){toast('❌ Erro ao codificar: '+e.message);}
}
function b64Decode(){
  const t=document.getElementById('b64-text').value;
  if(!t){toast('❌ Cole um Base64 primeiro.');return;}
  try{document.getElementById('b64-output').value=decodeURIComponent(escape(atob(t.trim())));}
  catch(e){toast('❌ Base64 inválido.');}
}

// ── Codificador/Decodificador de URL ──
function urlEncode(){
  const t=document.getElementById('url-text').value;
  if(!t){toast('❌ Digite um texto primeiro.');return;}
  document.getElementById('url-output').value=encodeURIComponent(t);
}
function urlDecode(){
  const t=document.getElementById('url-text').value;
  if(!t){toast('❌ Digite um texto primeiro.');return;}
  try{document.getElementById('url-output').value=decodeURIComponent(t);}
  catch(e){toast('❌ Texto codificado inválido.');}
}

// ── Verificador de Força de Senha ──
function checkPasswordStrength(){
  const pwd=document.getElementById('pwd-check').value;
  const bar=document.getElementById('pwd-meter-bar');
  if(!pwd){bar.style.width='0%';show('pwd-result','Digite uma senha para avaliar.');return;}
  let score=0;const tips=[];
  if(pwd.length>=8)score++;else tips.push('Use pelo menos 8 caracteres');
  if(pwd.length>=12)score++;
  if(/[a-z]/.test(pwd)&&/[A-Z]/.test(pwd))score++;else tips.push('Combine letras maiúsculas e minúsculas');
  if(/[0-9]/.test(pwd))score++;else tips.push('Inclua números');
  if(/[^a-zA-Z0-9]/.test(pwd))score++;else tips.push('Inclua símbolos (ex: !@#$%)');
  if(!/(.)\1{2,}/.test(pwd))score++;else tips.push('Evite repetir o mesmo caractere várias vezes seguidas');
  const pct=Math.min(100,(score/6)*100);
  const levels=[[0,'#f87171','Muito fraca'],[35,'#fb923c','Fraca'],[55,'#facc15','Razoável'],[75,'#4ade80','Forte'],[95,'#22c55e','Muito forte']];
  let label='Muito fraca',color='#f87171';
  for(const [t,c,l] of levels)if(pct>=t){label=l;color=c;}
  bar.style.width=pct+'%';bar.style.background=color;
  show('pwd-result',`Força: ${label} (${Math.round(pct)}%)\nComprimento: ${pwd.length} caracteres\n${tips.length?'\nSugestões:\n- '+tips.join('\n- '):'\n✅ Senha com boas características de segurança.'}`);
}

// ── Testador de Expressão Regular ──
function testRegex(){
  const pattern=document.getElementById('regex-pattern').value;
  const text=document.getElementById('regex-text').value;
  const flags=(document.getElementById('regex-flag-g').checked?'g':'')+(document.getElementById('regex-flag-i').checked?'i':'');
  if(!pattern){show('regex-result','Digite uma expressão regular para testar.');return;}
  try{
    const re=new RegExp(pattern,flags);
    const matches=[...text.matchAll(new RegExp(pattern,flags.includes('g')?flags:flags+'g'))];
    if(!matches.length){show('regex-result','❌ Nenhuma correspondência encontrada.');return;}
    const preview=matches.slice(0,30).map((m,i)=>`${i+1}. "${m[0]}"  (posição ${m.index})`).join('\n');
    show('regex-result',`✅ ${matches.length} correspondência(s) encontrada(s)\n${'─'.repeat(34)}\n${preview}${matches.length>30?'\n… e mais '+(matches.length-30):''}`);
  }catch(e){show('regex-result','❌ Expressão regular inválida: '+e.message);}
}

// ── Verificador de Contraste de Cores (WCAG) ──
function hexToRgbArr(hex){hex=hex.replace('#','');return [0,2,4].map(i=>parseInt(hex.substr(i,2),16));}
function relLuminance([r,g,b]){
  const [rs,gs,bs]=[r,g,b].map(c=>{c/=255;return c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4);});
  return 0.2126*rs+0.7152*gs+0.0722*bs;
}
function checkContrast(){
  const fgEl=document.getElementById('cc-fg'),bgEl=document.getElementById('cc-bg');
  if(!fgEl||!bgEl)return;
  const fg=fgEl.value,bg=bgEl.value;
  const l1=relLuminance(hexToRgbArr(fg)),l2=relLuminance(hexToRgbArr(bg));
  const ratio=(Math.max(l1,l2)+0.05)/(Math.min(l1,l2)+0.05);
  const prev=document.getElementById('cc-preview');
  if(!prev)return;
  prev.style.color=fg;prev.style.background=bg;
  const passAA=ratio>=4.5,passAAlarge=ratio>=3,passAAA=ratio>=7;
  show('cc-result',`Razão de contraste: ${ratio.toFixed(2)}:1\n${'─'.repeat(30)}\nAA (texto normal, mín. 4.5:1): ${passAA?'✅ Aprovado':'❌ Reprovado'}\nAA (texto grande, mín. 3:1): ${passAAlarge?'✅ Aprovado':'❌ Reprovado'}\nAAA (texto normal, mín. 7:1): ${passAAA?'✅ Aprovado':'❌ Reprovado'}`);
}

// ── Calculadora de Troco ──
const TROCO_CEDULAS=[100,50,20,10,5,2,1,0.5,0.25,0.1,0.05];
function calcTroco(){
  const compra=+document.getElementById('troco-compra').value,pago=+document.getElementById('troco-pago').value;
  if(!pago||pago<compra){show('troco-result','❌ O valor pago deve ser maior ou igual ao da compra.');return;}
  let troco=Math.round((pago-compra)*100)/100;
  const totalTroco=troco;
  let linhas=[];
  for(const cedula of TROCO_CEDULAS){
    const qtd=Math.floor((troco+1e-9)/cedula);
    if(qtd>0){
      linhas.push((cedula>=1?'R$ '+cedula.toFixed(2).replace('.',','):'R$ '+cedula.toFixed(2).replace('.',','))+'  ×  '+qtd);
      troco=Math.round((troco-qtd*cedula)*100)/100;
    }
  }
  show('troco-result',`TROCO A DEVOLVER: R$ ${fmt(totalTroco)}\n${'─'.repeat(30)}\n${linhas.join('\n')}`);
}

// ── Sorteador Aleatório ──
function sortearVencedores(){
  let lista=document.getElementById('sorteio-lista').value.split('\n').map(l=>l.trim()).filter(Boolean);
  const qtd=Math.max(1,+document.getElementById('sorteio-qtd').value);
  const semRepeticao=document.getElementById('sorteio-remove').checked;
  if(!lista.length){show('sorteio-result','❌ Adicione ao menos um participante.');return;}
  const vencedores=[];
  const pool=[...lista];
  for(let i=0;i<qtd;i++){
    if(!pool.length)break;
    const idx=Math.floor(Math.random()*pool.length);
    vencedores.push(pool[idx]);
    if(semRepeticao)pool.splice(idx,1);
  }
  show('sorteio-result',`🎉 RESULTADO DO SORTEIO\n${'─'.repeat(30)}\n${vencedores.map((v,i)=>(i+1)+'º — '+v).join('\n')}`);
}

// ── Redimensionar para Redes Sociais ──
async function resizeForSocial(){
  const fi=document.getElementById('social-img');
  if(!fi.files.length){toast('❌ Selecione uma imagem!');return;}
  const preset=document.getElementById('social-preset').value;
  const [tw,th]=preset.split('x').map(Number);
  const img=new Image();
  img.onload=()=>{
    const canvas=document.createElement('canvas');
    canvas.width=tw;canvas.height=th;
    const ctx=canvas.getContext('2d');
    const srcRatio=img.width/img.height,dstRatio=tw/th;
    let sx,sy,sw,sh;
    if(srcRatio>dstRatio){sh=img.height;sw=sh*dstRatio;sx=(img.width-sw)/2;sy=0;}
    else{sw=img.width;sh=sw/dstRatio;sx=0;sy=(img.height-sh)/2;}
    ctx.drawImage(img,sx,sy,sw,sh,0,0,tw,th);
    canvas.toBlob(blob=>{
      const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='imagem_'+preset+'.jpg';a.click();
      logConversion(fi.files[0].name,'Redes Sociais '+preset);
      toast('✅ Imagem gerada em '+preset+'px!');closeModal();
    },'image/jpeg',0.92);
  };
  img.onerror=()=>toast('❌ Não foi possível carregar a imagem.');
  img.src=URL.createObjectURL(fi.files[0]);
}

// ── Minificador de Código (CSS/HTML/JS) ──
function minifyCode(){
  const type=document.getElementById('min-type').value;
  let code=document.getElementById('min-input').value;
  if(!code.trim()){toast('❌ Cole um código primeiro.');return;}
  const originalSize=new Blob([code]).size;
  let out=code;
  if(type==='css'){
    out=out.replace(/\/\*[\s\S]*?\*\//g,'')
           .replace(/\s+/g,' ')
           .replace(/\s*([{}:;,])\s*/g,'$1')
           .replace(/;}/g,'}')
           .trim();
  }else if(type==='html'){
    out=out.replace(/<!--[\s\S]*?-->/g,'')
           .replace(/>\s+</g,'><')
           .replace(/\s{2,}/g,' ')
           .trim();
  }else{ // js — minificação básica e segura (comentários + espaços supérfluos)
    out=out.replace(/\/\*[\s\S]*?\*\//g,'')
           .replace(/(^|[^:])\/\/.*$/gm,'$1')
           .split('\n').map(l=>l.trim()).filter(Boolean).join(' ')
           .replace(/\s*([{}();,:=+\-*/<>])\s*/g,'$1')
           .trim();
  }
  document.getElementById('min-output').value=out;
  const newSize=new Blob([out]).size;
  const reduction=originalSize?((1-newSize/originalSize)*100).toFixed(1):0;
  document.getElementById('min-stats').textContent=`Original: ${originalSize} bytes  →  Minificado: ${newSize} bytes  (−${reduction}%)`;
}

// ── Verificar Assinatura Digital ──
async function verificarAssinatura(){
  const pdfFi=document.getElementById('verif-pdf'),certFi=document.getElementById('verif-cert');
  if(!pdfFi.files.length||!certFi.files.length){show('verif-result','❌ Selecione o PDF assinado e o arquivo de certificado (.json).');return;}
  try{
    const pdfBytes=new Uint8Array(await pdfFi.files[0].arrayBuffer());
    const certText=await certFi.files[0].text();
    let cert;
    try{cert=JSON.parse(certText);}catch(e){show('verif-result','❌ O certificado não é um arquivo .json válido.');return;}
    if(!cert.chavePublica||!cert.assinatura){show('verif-result','❌ Este certificado não parece ter sido emitido pela FREDTECHSYSTEMS Converter.');return;}

    const hashAtual=await sha256Hex(pdfBytes);
    const hashConfere=hashAtual===cert.hashSHA256;
    let assinaturaValida=false;
    try{assinaturaValida=await verifySignedBytes(cert.chavePublica,cert.assinatura,pdfBytes);}catch(e){assinaturaValida=false;}

    const dataFmt=cert.dataAssinatura?new Date(cert.dataAssinatura).toLocaleString('pt-BR'):'—';
    if(hashConfere&&assinaturaValida){
      show('verif-result',`✅ ASSINATURA VÁLIDA — DOCUMENTO ÍNTEGRO\n${'─'.repeat(38)}\nCódigo: ${cert.codigoVerificacao||'—'}\nAssinado por: ${cert.signatario?.nome||'—'}\nCPF: ${cert.signatario?.cpf||'—'}\nData da assinatura: ${dataFmt}\nAlgoritmo: ${cert.algoritmo||'ECDSA P-256 / SHA-256'}\n\nO arquivo enviado é byte a byte idêntico ao que foi assinado — nenhuma alteração foi feita desde então.`);
    }else if(!hashConfere){
      show('verif-result',`❌ DOCUMENTO ALTERADO\n${'─'.repeat(38)}\nO hash do PDF enviado NÃO corresponde ao hash registrado no certificado.\nIsso significa que o arquivo foi modificado (mesmo que minimamente) depois de ser assinado, ou que este não é o arquivo original assinado.\n\nCódigo do certificado: ${cert.codigoVerificacao||'—'}`);
    }else{
      show('verif-result',`❌ ASSINATURA INVÁLIDA\n${'─'.repeat(38)}\nO conteúdo do arquivo confere com o certificado, mas a assinatura criptográfica não pôde ser validada com a chave pública informada. O certificado pode estar corrompido.`);
    }
  }catch(e){show('verif-result','❌ Erro ao verificar: '+e.message);}
}

// ── INIT ──────────────────────────────────────────────
// Religação redundante da navegação principal via addEventListener.
// Alguns ambientes (políticas de segurança, extensões, zonas do Windows)
// podem bloquear atributos onclick="" inline sem gerar erro visível.
// addEventListener registrado aqui dentro do <script> não sofre esse bloqueio.
document.querySelectorAll('.nav-item[data-view]').forEach(function(navEl2){
  navEl2.addEventListener('click',function(){
    showView(navEl2.getAttribute('data-view'),navEl2);
  });
});
document.querySelectorAll('[data-goto-view]').forEach(function(elx){
  elx.addEventListener('click',function(){
    goToView(elx.getAttribute('data-goto-view'));
  });
});

const _viewAbout=document.getElementById('view-about');
if(_viewAbout) _viewAbout.style.display='none';
document.getElementById('view-contato').style.display='none';
applyTheme();
renderGrid();
renderRecentWidget();

// ── ATALHOS DE TECLADO ──
document.addEventListener('keydown',e=>{
  const tag=(document.activeElement&&document.activeElement.tagName)||'';
  const typing=tag==='INPUT'||tag==='TEXTAREA'||tag==='SELECT'||document.activeElement?.isContentEditable;
  if(e.key==='Escape'){
    const modal=document.getElementById('modal');
    if(modal&&modal.classList.contains('open')){closeModal();return;}
    if(typing)document.activeElement.blur();
    return;
  }
  if(!typing&&(e.key==='/'||((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'))){
    e.preventDefault();
    focusSearch();
  }
  if(!typing&&e.key.toLowerCase()==='p'&&!e.ctrlKey&&!e.metaKey&&!e.altKey){
    e.preventDefault();
    const navEl=document.querySelector('.nav-item[data-view="dashboard"]');
    if(navEl){showView('dashboard',navEl);navEl.scrollIntoView({block:'nearest'});}
  }
});

// ── PWA / MODO OFFLINE ──
if('serviceWorker' in navigator){
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('./sw.js').catch(()=>{/* offline indisponível neste host */});
  });
}
