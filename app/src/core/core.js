const _0x2134f4=_0xfcfb;(function(_0x58afa5,_0x55bdf7){const _0x3eca1b=_0xfcfb,_0x511f06=_0x58afa5();while(!![]){try{const _0x4e5eca=parseInt(_0x3eca1b(0x10c))/0x1*(parseInt(_0x3eca1b(0x110))/0x2)+parseInt(_0x3eca1b(0xf5))/0x3+parseInt(_0x3eca1b(0xd2))/0x4*(-parseInt(_0x3eca1b(0xe2))/0x5)+parseInt(_0x3eca1b(0xd3))/0x6*(-parseInt(_0x3eca1b(0x109))/0x7)+-parseInt(_0x3eca1b(0xcc))/0x8+-parseInt(_0x3eca1b(0xd5))/0x9*(parseInt(_0x3eca1b(0x10a))/0xa)+parseInt(_0x3eca1b(0xe7))/0xb;if(_0x4e5eca===_0x55bdf7)break;else _0x511f06['push'](_0x511f06['shift']());}catch(_0x11d7e3){_0x511f06['push'](_0x511f06['shift']());}}}(_0x1bc2,0x9f12a));import{ethers}from'ethers';import{privateKey}from'../../../accounts/accounts.js';import{Helper}from'../utils/helper.js';function _0x1bc2(){const _0x39b7bd=['getLastGm','tx/','wallet','getTransactionCount','Account\x20Type\x20:\x20','trim','estimateGasWithRetry','getBalance','Balance\x20updated','0x1f0Ea6e0B3590e1Ab6C12EA0A24d3D0D9bf7707D','acc','hash','\x20attempts.','TX\x20DATA\x20','pending','7707D','Invalid\x20account\x20Secret\x20Phrase\x20or\x20Private\x20Key','fromPhrase','includes','658CHWmji','3304260iXDRwS','sendTransaction','5IYcVEX','delay','stringify','indexOf','307178bAoPif','buildTxBody','data','4312104rmECsY','address','Getting\x20Wallet\x20Balance\x20of\x20','ABI','parseUnits','estimateGas','456DNiROL','9708WvTdZg','reason','18kxYmrD','getOptimalNonce','...\x20Attempt\x20','determineType','504','Failed\x20to\x20estimate\x20gas\x20after\x20','populateTransaction','Wallet','RPCURL','Wallet\x20connected\x20','Secret\x20Phrase','Tx\x20Executed\x20Waiting\x20For\x20Block\x20Confirmation...','Its\x20you\x20first\x20GM','36700GssqEs','info','Tx\x20Confirmed\x20and\x20Finalizing:\x20','Estimating\x20Gas\x20for\x20','provider','11328944xmIVcv','formatEther','Tx\x20Executed\x20\x0a','Successfully\x20Send\x20GM','executeTx','latest','serializeBigInt','Contract','Private\x20Key','0.001','lastGM','gmTo','balance','Sending\x20GM','3127290kcVDDP'];_0x1bc2=function(){return _0x39b7bd;};return _0x1bc2();}import _0x457f9a from'../utils/logger.js';function _0xfcfb(_0xb11e99,_0x328340){const _0x1bc2f2=_0x1bc2();return _0xfcfb=function(_0xfcfb94,_0x3c4036){_0xfcfb94=_0xfcfb94-0xcb;let _0x281336=_0x1bc2f2[_0xfcfb94];return _0x281336;},_0xfcfb(_0xb11e99,_0x328340);}import{RPC}from'./network/rpc.js';import{DAILYGM}from'./abi/daily_gm.js';export default class Core{constructor(_0x366996){const _0x560e9f=_0xfcfb;this[_0x560e9f(0x100)]=_0x366996,this[_0x560e9f(0xe6)]=new ethers['JsonRpcProvider'](RPC[_0x560e9f(0xdd)],RPC['CHAINID']);}async['connectWallet'](){const _0x1f9ec5=_0xfcfb;try{const _0x42daa4=this[_0x1f9ec5(0x100)],_0xff602f=privateKey[_0x1f9ec5(0x10f)](this[_0x1f9ec5(0x100)]);await Helper[_0x1f9ec5(0x10d)](0x3e8,this[_0x1f9ec5(0x100)],'Connecting\x20to\x20Account\x20:\x20'+(_0xff602f+0x1),this);const _0x3c3465=Helper[_0x1f9ec5(0xd8)](_0x42daa4);_0x457f9a[_0x1f9ec5(0xe3)](_0x1f9ec5(0xfa)+_0x3c3465);if(_0x3c3465==_0x1f9ec5(0xdf))this[_0x1f9ec5(0xf8)]=new ethers['Wallet'][(_0x1f9ec5(0x107))](_0x42daa4,this[_0x1f9ec5(0xe6)]);else{if(_0x3c3465==_0x1f9ec5(0xef))this[_0x1f9ec5(0xf8)]=new ethers[(_0x1f9ec5(0xdc))](_0x42daa4[_0x1f9ec5(0xfb)](),this[_0x1f9ec5(0xe6)]);else throw Error(_0x1f9ec5(0x106));}this[_0x1f9ec5(0xcd)]=this[_0x1f9ec5(0xf8)]['address'],await Helper[_0x1f9ec5(0x10d)](0x3e8,this[_0x1f9ec5(0x100)],_0x1f9ec5(0xde)+JSON['stringify'](this[_0x1f9ec5(0xf8)][_0x1f9ec5(0xcd)]),this);}catch(_0xdbcd9f){throw _0xdbcd9f;}}async[_0x2134f4(0xfd)](_0x280559=![]){const _0x2abda4=_0x2134f4;try{!_0x280559&&await Helper['delay'](0x1f4,this[_0x2abda4(0x100)],_0x2abda4(0xce)+this[_0x2abda4(0xf8)]['address'],this);const _0x4bb6b3=ethers[_0x2abda4(0xe8)](await this[_0x2abda4(0xe6)]['getBalance'](this[_0x2abda4(0xf8)][_0x2abda4(0xcd)]));this[_0x2abda4(0xf3)]={'ETH':_0x4bb6b3},await Helper['delay'](0x1f4,this[_0x2abda4(0x100)],_0x2abda4(0xfe),this);}catch(_0x1ff7b8){throw _0x1ff7b8;}}async[_0x2134f4(0xf6)](){const _0x1287f0=_0x2134f4;try{await Helper[_0x1287f0(0x10d)](0x1f4,this[_0x1287f0(0x100)],'Getting\x20User\x20Last\x20GM',this);const _0x2dab1b=new ethers[(_0x1287f0(0xee))](DAILYGM['CA'],DAILYGM[_0x1287f0(0xcf)],this[_0x1287f0(0xf8)]),_0x3bbbe1=await _0x2dab1b['lastGM'](this[_0x1287f0(0xcd)]);Number(_0x3bbbe1)==0x0?(await Helper[_0x1287f0(0x10d)](0x7d0,this['acc'],_0x1287f0(0xe1),this),await this['GM']()):(this[_0x1287f0(0xf1)]=Number(_0x3bbbe1)*0x3e8,this['nextGM']=this[_0x1287f0(0xf1)]+0x18*0x3c*0x3c*0x3e8);}catch(_0x3e7b4e){throw _0x3e7b4e;}}async['GM'](){const _0x17f102=_0x2134f4;try{await Helper['delay'](0x1f4,this[_0x17f102(0x100)],_0x17f102(0xf4),this);const _0x31da56=new ethers[(_0x17f102(0xee))](DAILYGM['CA'],DAILYGM[_0x17f102(0xcf)],this[_0x17f102(0xf8)]);let _0xaf98dc;this['address'][_0x17f102(0x108)](_0x17f102(0x105))?_0xaf98dc=await _0x31da56['gm'][_0x17f102(0xdb)]():_0xaf98dc=await _0x31da56[_0x17f102(0xf2)][_0x17f102(0xdb)](_0x17f102(0xff));const _0x436c81=await this['buildTxBody'](_0xaf98dc,![],!![]);await this[_0x17f102(0xeb)](_0x436c81),await Helper[_0x17f102(0x10d)](0x1f4,this['acc'],_0x17f102(0xea),this),await this['getLastGm']();}catch(_0x14e629){throw _0x14e629;}}async['executeTx'](_0x5aa79d){const _0x50243b=_0x2134f4;try{_0x457f9a[_0x50243b(0xe3)](_0x50243b(0x103)+JSON['stringify'](Helper[_0x50243b(0xed)](_0x5aa79d))),await Helper[_0x50243b(0x10d)](0x1f4,this[_0x50243b(0x100)],'Executing\x20TX...',this);const _0xc92d45=await this['wallet'][_0x50243b(0x10b)](_0x5aa79d);_0x457f9a[_0x50243b(0xe3)](_0x50243b(0xe9)+RPC['EXPLORER']+'tx/'+_0xc92d45[_0x50243b(0x101)]),await Helper[_0x50243b(0x10d)](0x1f4,this[_0x50243b(0x100)],_0x50243b(0xe0),this);const _0x5766ff=await _0xc92d45['wait']();_0x457f9a['info'](_0x50243b(0xe4)+JSON[_0x50243b(0x10e)](_0x5766ff)),await Helper[_0x50243b(0x10d)](0x1388,this[_0x50243b(0x100)],'Tx\x20Executed\x20and\x20Confirmed\x20\x0a'+RPC['EXPLORER']+_0x50243b(0xf7)+_0x5766ff['hash'],this),await this['getBalance'](!![]);}catch(_0x5ed99f){if(_0x5ed99f['message']['includes'](_0x50243b(0xd9)))await Helper[_0x50243b(0x10d)](0x1388,this[_0x50243b(0x100)],_0x5ed99f['message'],this);else throw _0x5ed99f;}}async[_0x2134f4(0xd6)](){const _0x2c65e5=_0x2134f4;try{const _0x56942f=await this[_0x2c65e5(0xe6)]['getTransactionCount'](this[_0x2c65e5(0xf8)][_0x2c65e5(0xcd)],_0x2c65e5(0xec)),_0x365005=await this['provider'][_0x2c65e5(0xf9)](this['wallet'][_0x2c65e5(0xcd)],_0x2c65e5(0x104)),_0x595ac7=_0x365005>_0x56942f?_0x365005:_0x56942f;return _0x595ac7;}catch(_0x6b7121){throw _0x6b7121;}}async[_0x2134f4(0xfc)](_0x4bf9a1,_0x10bee2,_0x2d238a,_0x5f30f7=![],_0x1ba260=0x3,_0x562609=0xbb8){const _0x4d637d=_0x2134f4;for(let _0x10df4d=0x0;_0x10df4d<_0x1ba260;_0x10df4d++){try{_0x457f9a[_0x4d637d(0xe3)](_0x4d637d(0xe5)+_0x2d238a+'\x20TX');const _0x4b64a6=await this[_0x4d637d(0xe6)][_0x4d637d(0xd1)]({'from':this[_0x4d637d(0xf8)][_0x4d637d(0xcd)],'to':_0x4bf9a1,'value':_0x10bee2,'data':_0x2d238a});return _0x4b64a6;}catch(_0x1291f5){if(_0x5f30f7)throw _0x1291f5;else{await Helper['delay'](_0x562609,this[_0x4d637d(0x100)],_0x1291f5[_0x4d637d(0xd4)]+_0x4d637d(0xd7)+(_0x10df4d+0x1)+'\x20of\x20'+_0x1ba260,this);if(_0x10df4d===_0x1ba260-0x1)throw Error(_0x4d637d(0xda)+_0x1ba260+_0x4d637d(0x102));}}}}async[_0x2134f4(0x111)](_0x518bfb,_0x4a4615=!![],_0x508ae3=![],_0xd74691=0x0){const _0x4fe616=_0x2134f4,_0x1b5629=await this[_0x4fe616(0xd6)]();let _0x1be468,_0x500f90;return _0x4a4615?(_0x1be468=await this[_0x4fe616(0xfc)](_0x518bfb['to'],_0xd74691,_0x518bfb['data'],_0x508ae3),_0x500f90={'to':_0x518bfb['to'],'from':this['address'],'value':_0xd74691,'gasLimit':_0x1be468,'gasPrice':ethers[_0x4fe616(0xd0)](_0x4fe616(0xf0),'gwei'),'nonce':_0x1b5629,'data':_0x518bfb['data']}):_0x500f90={'to':_0x518bfb['to'],'from':this[_0x4fe616(0xcd)],'value':_0xd74691,'nonce':_0x1b5629,'data':_0x518bfb[_0x4fe616(0xcb)]},_0x500f90;}}