const _0x60e33f=_0x46a5;(function(_0xc8f92e,_0x7ecff){const _0x3295a9=_0x46a5,_0x2833ba=_0xc8f92e();while(!![]){try{const _0x383477=-parseInt(_0x3295a9(0x109))/0x1*(-parseInt(_0x3295a9(0x126))/0x2)+parseInt(_0x3295a9(0x124))/0x3+-parseInt(_0x3295a9(0xe7))/0x4+-parseInt(_0x3295a9(0xe6))/0x5*(-parseInt(_0x3295a9(0xfd))/0x6)+-parseInt(_0x3295a9(0x11b))/0x7+-parseInt(_0x3295a9(0x10d))/0x8*(-parseInt(_0x3295a9(0xf4))/0x9)+-parseInt(_0x3295a9(0xf1))/0xa*(-parseInt(_0x3295a9(0x115))/0xb);if(_0x383477===_0x7ecff)break;else _0x2833ba['push'](_0x2833ba['shift']());}catch(_0x177233){_0x2833ba['push'](_0x2833ba['shift']());}}}(_0x5b93,0x35ccb));import{world,Player,system,ItemStack,EntityInventoryComponent,ItemTypes}from'@minecraft/server';import{ActionFormData,ModalFormData}from'@minecraft/server-ui';import{CategotyShop}from'../confi/shop/CategotyShop.js';import{server}from'../confi/confi.js';const {ServerName}=server;world[_0x60e33f(0x101)]['chatSend'][_0x60e33f(0xf3)](_0x54fe42=>{const _0x258196=_0x60e33f,{sender:_0x16063b,message:_0x1f5411}=_0x54fe42;_0x1f5411['startsWith']('!')&&_0x1f5411===_0x258196(0x105)&&(_0x54fe42[_0x258196(0x10e)]=!![],system['run'](()=>{const _0x140338=_0x258196;_0x16063b[_0x140338(0x103)](ServerName+_0x140338(0x10c)),_0x16063b[_0x140338(0x11c)](_0x140338(0xee),{'volume':0.4,'pitch':0.5});}),system[_0x258196(0x122)](()=>{shopMenu(_0x16063b);},0x14*0x3));}),world[_0x60e33f(0x101)][_0x60e33f(0xfe)]['subscribe'](_0x556b3a=>{const _0x324d7d=_0x60e33f,{player:_0x5006a7,target:_0x5760c3}=_0x556b3a;_0x5760c3[_0x324d7d(0xe2)]===_0x324d7d(0x117)&&_0x5760c3['hasTag'](_0x324d7d(0x10b))&&(_0x556b3a[_0x324d7d(0x10e)]=!![],system['run'](()=>{shopMenu(_0x5006a7);}));});export function shopMenu(_0x9283a0){const _0x432970=_0x60e33f,_0x5eb040=Object[_0x432970(0xf0)](CategotyShop[0x0])[_0x432970(0x102)](_0x5a5f7a=>{const _0x5bacb7=_0x432970;return CategotyShop[0x0][_0x5a5f7a][_0x5bacb7(0x108)];});if(_0x5eb040['length']<=0x0){console[_0x432970(0xea)](_0x432970(0xeb));return;}const _0x2053b6=new ActionFormData()[_0x432970(0x10f)](_0x432970(0x11a))[_0x432970(0xe3)](_0x432970(0xfb)+_0x9283a0[_0x432970(0x111)]+_0x432970(0xdb)+_0x9283a0[_0x432970(0x106)]()+'\x0a\x0a');_0x5eb040[_0x432970(0xf7)](_0x298b78=>{const _0x2a2b27=_0x432970,_0x446fbe=CategotyShop[0x0][_0x298b78];_0x446fbe[_0x2a2b27(0x108)]&&_0x2053b6[_0x2a2b27(0xef)](_0x446fbe[_0x2a2b27(0x111)],_0x446fbe[_0x2a2b27(0xfc)]);}),_0x2053b6[_0x432970(0x11e)](_0x9283a0)[_0x432970(0xe4)](({selection:_0x313c2f,canceled:_0x16c613})=>{if(_0x16c613)return;const _0x51f68a=_0x5eb040[_0x313c2f];showCategoryMenu(_0x9283a0,_0x51f68a);});}function _0x5b93(){const _0x5b8caa=['removeScore','random.orb','button','keys','3809090gyJcQB','§7%shop.sell_label\x20§l:§r\x20§c','subscribe','8487kCoJtS','\x20§7%shop.purchase_success1\x20§c','\x0a§r%shop.choose_quantity_non_stackable\x20','forEach','icon','%shop.item_details','getItem','§l>>§r\x20§f%shop.welcome_message\x20§a','texture','544068NoGDpQ','playerInteractWithEntity','\x20§7%shop.purchase_success3','%shop.quantity_placeholder','beforeEvents','filter','sendMessage','\x20§7%shop.sell_success2\x20§c','!shop','getScore','§7%shop.cost_label\x20§l:§r\x20§c','enabled','1ndaLnZ','items','shop','\x20§r§l>>§r\x20%shop.send','576Meoqfi','cancel','title','min','name','§r%shop.choose_quantity_stackable\x20','§7%shop.info_label\x20§l:\x20§r\x0a\x0a','\x20§r§l>>§r\x20§7%shop.sell_failure\x20§c','11lYaGTG','%shop.select_item','mp:npc','Categoría\x20no\x20encontrada:','getComponent','%shop.title','2821259QOUIvf','playSound','\x20§7%shop.sell_success1\x20§c','show','\x20§7%shop.sell_failure','\x20§7%shop.purchase_success2\x20§c','runCommandAsync','runTimeout','size','1076652TZwxJq','container','28650yQlBOG','\x20§r§l>>§r\x20§c%shop.quantity_error','§f,\x20%shop.welcome_message1\x0a\x0a%shop.money:\x20','No\x20hay\x20ítems\x20habilitados\x20en\x20la\x20categoría:','\x20§r§l>>§r\x20§c%shop.quantity_number_error','length','%shop.confirm_button','amount','\x20§r§l>>§r\x20§7%shop.sell_success\x20§c','typeId','body','then','\x20§7%shop.purchase_failure1\x20§c','5ELiHfs','1157168LSVfhD','get','toggle','warn','No\x20hay\x20categorías\x20habilitadas.','addItem'];_0x5b93=function(){return _0x5b8caa;};return _0x5b93();};async function showCategoryMenu(_0x1595fc,_0x30d184){const _0x349a0f=_0x60e33f,_0x579627=CategotyShop[0x0][_0x30d184];if(!_0x579627){console[_0x349a0f(0xea)](_0x349a0f(0x118),_0x30d184);return;}const _0x2ce379=_0x579627[_0x349a0f(0x10a)]['filter'](_0x424ecc=>_0x424ecc[_0x349a0f(0x108)]);if(_0x2ce379['length']===0x0){console[_0x349a0f(0xea)](_0x349a0f(0xdc),_0x30d184);return;}const _0x39bde6=new ActionFormData()[_0x349a0f(0x10f)](_0x579627[_0x349a0f(0x111)]+'\x20%shop.ui_title')['body'](_0x349a0f(0x116));_0x2ce379[_0x349a0f(0xf7)](_0x1d56d4=>{const _0x504232=_0x349a0f;_0x39bde6[_0x504232(0xef)](_0x1d56d4[_0x504232(0x111)],_0x1d56d4[_0x504232(0xf8)]);}),_0x39bde6[_0x349a0f(0x11e)](_0x1595fc)[_0x349a0f(0xe4)](({selection:_0x5936e6,canceled:_0x311591})=>{const _0x24849a=_0x349a0f;if(_0x311591)return;if(_0x5936e6>=0x0&&_0x5936e6<_0x2ce379[_0x24849a(0xde)]){const _0x362e62=_0x2ce379[_0x5936e6],_0x1e766c=_0x362e62[_0x24849a(0x11e)],_0x1886ca=new ActionFormData()['title'](_0x24849a(0xf9))[_0x24849a(0xe3)]('%shop.select_item_details');_0x1e766c['forEach'](_0x416521=>{const _0x28a7b0=_0x24849a;_0x1886ca[_0x28a7b0(0xef)](_0x416521['a'],_0x416521['b']);}),_0x1886ca[_0x24849a(0x11e)](_0x1595fc)[_0x24849a(0xe4)](async({selection:_0x31acdf,canceled:_0x1eeaba})=>{const _0x55d96c=_0x24849a;if(_0x1eeaba)return;if(_0x31acdf>=0x0&&_0x31acdf<_0x1e766c[_0x55d96c(0xde)]){const _0x258b99=_0x1e766c[_0x31acdf];buyAndSell(_0x1595fc,_0x258b99['e'],_0x258b99['c'],_0x258b99['d'],_0x258b99['a']);}});}});};async function buyAndSell(_0x2c1320,_0x2f3897,_0x5be847,_0x5ea704,_0x49abc5){const _0x198a03=_0x60e33f,_0x32b749=new ItemStack(ItemTypes[_0x198a03(0xe8)](_0x2f3897)),_0x508314=_0x32b749['isStackable'];let _0x820258=_0x198a03(0x113)+('§7%shop.item_label\x20§l:§r\x20§c'+_0x49abc5+'\x20\x0a')+(_0x198a03(0x107)+_0x5be847+'\x0a');_0x508314?_0x820258+=_0x198a03(0xf2)+_0x5ea704+'\x0a\x0a§r'+_0x198a03(0x112):_0x820258+=_0x198a03(0xf6);const _0x3961c0=new ModalFormData()[_0x198a03(0x10f)](_0x198a03(0x11a))['textField'](_0x820258,_0x198a03(0x100));_0x508314&&_0x3961c0[_0x198a03(0xe9)]('%shop.sell_or_buy',!![]),_0x3961c0['submitButton'](_0x198a03(0xdf)),_0x3961c0[_0x198a03(0x11e)](_0x2c1320)[_0x198a03(0xe4)](({formValues:_0x24bbb5,canceled:_0x1e2d54})=>{const _0x5a832f=_0x198a03;if(_0x1e2d54)return;const _0x5598f2=Number(_0x24bbb5[0x0]);if(_0x5598f2<0x1||_0x5598f2>0x40){_0x2c1320[_0x5a832f(0x103)](ServerName+_0x5a832f(0x127));return;};if(!_0x5598f2){_0x2c1320[_0x5a832f(0x103)](ServerName+_0x5a832f(0xdd));return;}const _0x22da9e=_0x2c1320[_0x5a832f(0x119)](EntityInventoryComponent['componentId'])[_0x5a832f(0x125)],_0xea3287=_0x2c1320[_0x5a832f(0x106)]();if(!_0x508314||_0x24bbb5[0x1]){const _0x154d18=_0x5be847*_0x5598f2;if(_0xea3287>=_0x154d18){const _0x55bccc=new ItemStack(ItemTypes[_0x5a832f(0xe8)](_0x2f3897),_0x5598f2);_0x22da9e[_0x5a832f(0xec)](_0x55bccc),_0x2c1320[_0x5a832f(0xed)](_0x154d18),_0x2c1320[_0x5a832f(0x103)](ServerName+'\x20§r§l>>§r\x20§7%shop.purchase_success\x20§c'+_0x5598f2+_0x5a832f(0xf5)+_0x49abc5+_0x5a832f(0x120)+_0x154d18+_0x5a832f(0xff));}else _0x2c1320[_0x5a832f(0x103)](ServerName+'\x20§r§l>>§r\x20§7%shop.purchase_failure\x20§c'+_0x5598f2+_0x5a832f(0xe5)+_0x49abc5);}else{let _0x5299b1=0x0;for(let _0x400904=0x0;_0x400904<_0x22da9e[_0x5a832f(0x123)];_0x400904++){const _0x572117=_0x22da9e[_0x5a832f(0xfa)](_0x400904);if(_0x572117&&_0x572117[_0x5a832f(0xe2)]===_0x2f3897){const _0x2010bd=Math[_0x5a832f(0x110)](_0x572117[_0x5a832f(0xe0)],_0x5598f2-_0x5299b1);_0x2010bd>0x0&&(_0x2c1320[_0x5a832f(0x121)]('clear\x20@s\x20'+_0x2f3897+'\x200\x20'+_0x2010bd),_0x5299b1+=_0x2010bd);if(_0x5299b1>=_0x5598f2)break;}}if(_0x5299b1>0x0){const _0xbbe9c9=_0x5299b1*_0x5ea704;_0x2c1320['addScore'](_0xbbe9c9),_0x2c1320[_0x5a832f(0x103)](ServerName+_0x5a832f(0xe1)+_0x5299b1+_0x5a832f(0x11d)+_0x49abc5+_0x5a832f(0x104)+_0xbbe9c9+'\x20§7%shop.sell_success3');}else _0x2c1320[_0x5a832f(0x103)](ServerName+_0x5a832f(0x114)+_0x49abc5+_0x5a832f(0x11f));}});}function _0x46a5(_0x20f6a5,_0x4657fb){const _0x5b9340=_0x5b93();return _0x46a5=function(_0x46a510,_0x1382c3){_0x46a510=_0x46a510-0xdb;let _0x3dbcf9=_0x5b9340[_0x46a510];return _0x3dbcf9;},_0x46a5(_0x20f6a5,_0x4657fb);};