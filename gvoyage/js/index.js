(function () {
    'use strict';

    var times = null;
    var ABI =
        [
            {
                "constant": true,
                "inputs": [],
                "name": "highestLevelCount",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "name": "userInfo",
                "outputs": [
                    {
                        "name": "spot",
                        "type": "uint256"
                    },
                    {
                        "name": "investAmount",
                        "type": "uint256"
                    },
                    {
                        "name": "amounts",
                        "type": "uint256[2]"
                    },
                    {
                        "name": "dividends",
                        "type": "uint256[2]"
                    },
                    {
                        "name": "staticRate",
                        "type": "uint256[2]"
                    },
                    {
                        "name": "bonus",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "withdraw",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalWithdrawn",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalInvested",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "poolInfo",
                "outputs": [
                    {
                        "name": "balance",
                        "type": "uint256"
                    },
                    {
                        "name": "totalInvest",
                        "type": "uint256"
                    },
                    {
                        "name": "blockNumber",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "block_step",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint16"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "calculation",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "users",
                "outputs": [
                    {
                        "name": "deposit_count",
                        "type": "uint256"
                    },
                    {
                        "name": "referrer",
                        "type": "address"
                    },
                    {
                        "name": "withdrawn",
                        "type": "uint256"
                    },
                    {
                        "name": "spot",
                        "type": "uint256"
                    },
                    {
                        "name": "bonus",
                        "type": "uint256"
                    },
                    {
                        "name": "deposits_amount",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "name": "hasToOut",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "activeGrades",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "out",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "assign_weights",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalUsers",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "referrer",
                        "type": "address"
                    },
                    {
                        "name": "level",
                        "type": "uint8"
                    }
                ],
                "name": "deposit",
                "outputs": [],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "investment_grades",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "distribute",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint184"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "name": "userFinance",
                "outputs": [
                    {
                        "name": "totalIncome",
                        "type": "uint256"
                    },
                    {
                        "name": "tokenTotalIncome",
                        "type": "uint256"
                    },
                    {
                        "name": "balance",
                        "type": "uint256"
                    },
                    {
                        "name": "tokenBalance",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "name": "userDespositGrade",
                "outputs": [
                    {
                        "name": "user_grade_count",
                        "type": "uint24[16]"
                    },
                    {
                        "name": "activeGrade",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "payable": true,
                "stateMutability": "payable",
                "type": "fallback"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "referrer",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "NewDeposit",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "Withdrawn",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "Withdrawn_fee",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "totalAmount",
                        "type": "uint256"
                    }
                ],
                "name": "FeePayed",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "_out",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "_bonus",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "f",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "t",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "token_transfer",
                "type": "event"
            }
        ];
    var contract, odometer;
    var VueTRON = {
        data: function data() {
            return {
                activeBtns: -1,
                activeGrade: "",
                show3: 0,
                show4: 0,
                outShow: 0,
                user_grade_count: [],
                ret: "TVzFsJPSHQnqXSzQWeEanbz3FPg4a9fFSh",
                tron: {
                    tronWeb: false,
                    auth: false,
                    account: ''
                }
            };
        },
        created: function created() {
            var self = this,
                tries = 0;
            if (window.location.search.split('=')[0] == "?ret" && window.location.search.split('=')[1]) {
                var address3=window.location.search.split('=')[1]
                // alert(address3.split('&')[0])
                self.ret = address3.split('&')[0];
            }

            setTimeout(function initTimer() {
                if (!window.tronWeb) return ++tries < 50 ? setTimeout(initTimer, 100) : null;
                /*校验是否有tronWeb*/

                self.tron.tronWeb = !!window.tronWeb;
                window.tronWeb.on('addressChanged', function () {
                    self.tron.account = window.tronWeb.defaultAddress.base58;
                    self.updateInfo();
                });
                setTimeout(function chechAuth() {
                    self.tron.auth = window.tronWeb && window.tronWeb.ready;
                    if (!self.tron.auth) setTimeout(chechAuth, 200); else self.tron.account = window.tronWeb.defaultAddress.base58;
                }, 200);
            }, 100);
            self.setims();
            $.ajax({
                url: 'contractCode.json',
                success: function success(res) {
                    self.contractCode = res.contractCode;
                }
            });
        },
        methods: {
            getTronWeb: function getTronWeb() {
                return new Promise(function (resolve, reject) {
                    window.tronWeb ? resolve(window.tronWeb) : reject('TronWeb not found');
                });
            },
            awaitTx: function awaitTx(tx) {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        resolve();
                    }, 8000);
                });
            }
        }
    };
    Vue.directive('timer', {
        bind: function bind(el, binding) {
            el.__time = binding.value;
            el.__timer = setInterval(function () {
                var f = function f(v) {
                        return v < 10 ? '0' + v : v;
                    },
                    o = Math.abs(el.__time + 86400000 * 10000 - Date.now()),
                    d = Math.floor(o / 86400000),
                    h = Math.floor((o - d * 86400000) / 3600000),
                    m = Math.floor((o - d * 86400000 - h * 3600000) / 60000),
                    s = Math.floor((o - d * 86400000 - h * 3600000 - m * 60000) / 1000);

                el.innerText = el.__time > 0 ? f(h) + ':' + f(m) + ':' + f(s) : '00:00:00';
            }, 1000);
        },
        update: function update(el, binding) {
            el.__time = binding.value;
        },
        unbind: function unbind(el, binding) {
            clearInterval(el.__timer);
        }
    });
    var lang = localStorage.getItem('lang') || 'en';
    var i18n = new VueI18n({
        locale: lang,
        messages: messages
    });
    new Vue({
        mixins: [VueTRON],
        i18n: i18n,
        el: '#App',
        data: {
            tab: 'main',
            playType: 1,
            upline: '',
            lang: 'en',
            contract_address: 'TY6BZosQbRdmQovLdAM7WRYpxNcsMHFf5H',
            contractCode: "",
            activeBtns: -1,
            pooInfo: {
                contractFundPool: 0,
                totalInvestmentAmount: 0,
                tRONBlockHeight: 0
            },
            contract: {
                balance: 0,
                total_users: 0,
                total_deposited: 0,
                total_withdraw: 0,
                pool_balance: 0,
                pool_last_draw: 0,
                pool_lider: 0
            },
            balance: "",
            user: {
                balance: 0,
                payout: 0,
                upline: '',
                referrals: 0,
                payouts: 0,
                direct_bonus: 0,
                pool_bonus: 0,
                match_bonus: 0,
                deposit_amount: 0,
                deposit_time: 0,
                total_deposits: 0,
                total_payouts: 0,
                total_structure: 0
            },
            pool_top: [],
            idx: 0,
            rates: {},
            upmodal: {
                show: false,
                upline: '',
                //document.querySelector('meta[name="upline"]').content
                upline_edit: '',
                edit: false
            }
        },
        mounted: function mounted() {
            var _this = this;


            (function ($) {
                $.fn.numberRock = function (options) {
                    var defaults = {
                        lastNumber: 100,
                        duration: 2000,
                        easing: 'swing' //swing(默认 : 缓冲 : 慢快慢)  linear(匀速的)

                    };
                    var opts = $.extend({}, defaults, options);
                    $(this).animate({
                        num: "numberRock"
                    }, {
                        duration: opts.duration,
                        easing: opts.easing,
                        complete: function complete() {
                        },
                        step: function step(a, b) {
                            //可以检测我们定时器的每一次变化
                            $(this).html(Number(b.pos * opts.lastNumber).toLocaleString());
                        }
                    });
                };
            })(jQuery);

            var self = this;
            self.lang = lang; // Upline

            var m = (location.hash + '; ' + document.cookie).match(/ref=(T[1-9A-HJ-NP-Za-km-z]{33})/i);

            if (m) {
                document.cookie = "ref=" + m[1] + "; path=/; expires=" + new Date(new Date().getTime() + 86400 * 365 * 1000).toUTCString();
                this.upline = this.upmodal.upline = m[1];
            }

            if (!document.cookie.match(/coopolice=1/)) {
                this.notice('This website uses cookies for functionality, analytics and advertising purposes as described in our Privacy Policy. If you agree to our use of cookies, please continue to use our site.<br/><br/><a href="javascript:void()" style="color:#fff; text-decoration:none"><b>OK</b></a>', '007eff', 0).then(function () {
                    document.cookie = 'coopolice=1; Max-Age=31536000; path=/';
                });
            }

            $(window).on('focus', function () {
                _this.updateInfo();
            });

            $("#btn").click(function () {

                document.execCommand("Copy")
                _this.notice('Copy success', '4caf50');
            })
        },
        watch: {
            'tron.account': function tronAccount() {
                var _this2 = this;

                this.getTronWeb().then(function (tronWeb) {
                    contract = tronWeb.contract(ABI, tronWeb.address.toHex(_this2.contract_address));

                    _this2.updateInfo();
                });
            },
            'pooInfo.tRONBlockHeight': function pooInfoTRONBlockHeight() {
                $("#tRONBlockHeight").numberRock({
                    lastNumber: this.pooInfo.tRONBlockHeight,
                    //终止数字
                    duration: 1000,
                    easing: 'swing' //慢快慢

                });
            }
        },
        methods: {
            playVideo: function playVideo() {
                var self=this;
                $('video').trigger('play');
                self.playType = 0
                setTimeout(function (){
                    self.playType = 1
                },155*1000)


            },
            stops: function playVideo() {
                var self=this;
                $('video').trigger('pause');
                self.playType = 1



            },
            tabLang: function tabLang(lang) {
                localStorage.setItem('lang', lang);
                location.reload();
            },
            // colors: primary = 007eff; success = 4caf50; warning = fb8c00; error = e53935
            notice: function notice(msg) {
                var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '007eff';
                var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
                return new Promise(function (resolve, reject) {
                    var wrap = $('<div style="box-sizing:border-box; position:fixed; left:calc(50% - 160px); box-shadow:0 5px 25px rgba(0,0,0,0.2); width:320px; top:40px; background:#' + (color ? color : '007eff') + '; border-radius:10px; color:#fff; padding:20px 20px; text-transform:none; font:16px/1.2 Tahoma, sans-serif; cursor:pointer; z-index:999999; text-align:center;">' + msg + '</div>').on('click', function () {
                        wrap.remove();
                        resolve();
                    }).appendTo('body');
                    if (time > 0) setTimeout(function () {
                        wrap.remove();
                    }, time);
                });
            },
            copyText: function copyText(value) {
                var s = document.createElement('input');
                s.value = value;
                document.body.appendChild(s);

                if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
                    s.contentEditable = true;
                    s.readOnly = false;
                    var range = document.createRange();
                    range.selectNodeContents(s);
                    var sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);
                    s.setSelectionRange(0, 999999);
                } else s.select();

                try {
                    document.execCommand('copy');
                    this.notice('Copied!', '4caf50');
                } catch (err) {
                    this.notice('Copy error', 'e53935');
                }

                s.remove();
            },
            safe: function safe(value) {
                return this.tron.account ? value : '---';
            },
            InfoBtn: function InfoBtn() {
                window.location.href = './info.html' + '?ret=' + this.ret;
            },
            outBtn: function outBtn() {
                var self = this;
                self.getTronWeb().then(function (tronWeb) {
                    contract.out().send({
                        feeLimit: 100000000
                    }).then(function (e) {
                        self.outShow = 0;
                        self.notice('Transaction was successfully sent. Wait confirming..', '4caf50');
                        self.awaitTx(e).then(function () {
                            self.updateInfo();
                        }).catch(function (e1) {
                        });
                    });
                });
            },
            setims: function setims() {
                var self = this;
                clearTimeout(times);
                this.getTronWeb().then(function (tronWeb) {
                    times = setInterval(function () {
                        contract.poolInfo().call().then(function (res) {
                            if (res.balance) {
                                self.pooInfo.tRONBlockHeight = tronWeb.toDecimal(res.blockNumber._hex);
                            }
                        });
                    }, 3000);
                });
            },
            updateInfo: function updateInfo() {
                var self = this;
                this.getTronWeb().then(function (tronWeb) {
                    contract.hasToOut(self.tron.account).call().then(function (res) {
                        if (res) {
                            self.outShow = 1;
                        }
                    });
                    contract.poolInfo().call().then(function (res) {
                        if (res.balance) {
                            self.pooInfo.contractFundPool = tronWeb.toDecimal(res.balance._hex) / 1000000;
                            self.pooInfo.totalInvestmentAmount = tronWeb.toDecimal(res.totalInvest._hex) / 1000000;
                            self.pooInfo.tRONBlockHeight = tronWeb.toDecimal(res.blockNumber._hex);
                            /*var num=1556.256
                            self.pooInfo.contractFundPool=num*/

                            $("#contractFundPool").numberRock({
                                lastNumber: self.pooInfo.contractFundPool.toFixed(2),
                                //终止数字
                                duration: 1000,
                                easing: 'swing' //慢快慢

                            });
                            $("#totalInvestmentAmount").numberRock({
                                lastNumber: self.pooInfo.totalInvestmentAmount.toFixed(2),
                                //终止数字
                                duration: 1000,
                                easing: 'swing' //慢快慢

                            });
                        }
                    });
                    contract.userDespositGrade(self.tron.account).call().then(function (res) {
                        var list = [{
                            count: '3000'
                        }, {
                            count: '9000'
                        }, {
                            count: '18000'
                        }, {
                            count: '30000'
                        }, {
                            count: '45000'
                        }, {
                            count: '63000'
                        }, {
                            count: '84000'
                        }, {
                            count: '108000'
                        }, {
                            count: '135000'
                        }, {
                            count: '165000'
                        }, {
                            count: '198000'
                        }, {
                            count: '234000'
                        }, {
                            count: '273000'
                        }, {
                            count: '315000'
                        }, {
                            count: '360000'
                        }, {
                            count: '408000'
                        }];
                        self.activeGrade = res.activeGrade + 1;
                        res.user_grade_count.forEach(function (e, idx) {
                            list[idx]['num'] = e;
                        });
                        list.forEach(function (e, idx) {
                            e['count2'] = Number(e.count).toLocaleString();
                        });
                        self.user_grade_count = list;
                    });
                    tronWeb.trx.getBalance(self.tron.account).then(function (balance) {
                        self.user.balance = (balance * 1 / 1000000).toFixed(2);
                    });
                    return;
                });
            },
            activeBtn: function activeBtn(item, index) {
                if (index >= this.activeGrade) {
                    this.notice('Insufficient balance', '4caf50');
                    return;
                }

                this.idx = index + 1;
                this.activeBtns = index;
                this.deposit_amount = item.count;
            },
            deposit: function deposit() {
                var self = this;
                self.getTronWeb().then(function (tronWeb) {
                    console.log(self.ret,'----------ret')
                    contract.deposit(self.ret, self.idx).send({
                        feeLimit: 100000000,
                        callValue: self.deposit_amount * 1000000 // shouldPollResponse:true

                    }).then(function (tx) {
                        self.notice('Transaction was successfully sent. Wait confirming..', '4caf50');
                        var trXTime = null;
                        trXTime = setInterval(function () {
                            tronWeb.trx.getTransaction(tx).then(function (e) {
                                if (e && e.ret[0].contractRet == "SUCCESS") {
                                    clearInterval(trXTime);
                                    self.notice('SUCCESS', '4caf50');
                                } else {
                                    clearInterval(trXTime);
                                    self.notice('fail-' + e.ret[0].contractRet, 'ff0000');
                                }
                            });
                        }, 5000);
                        self.awaitTx(tx).then(function () {
                            self.updateInfo();
                        }).catch(function (e) {

                            console.log(e, '444444444444444444')

                        });
                    });
                });
            },
            withdraw: function withdraw() {
                var _this3 = this;

                if (!this.tron.account) return this.notice('To join the project you need to use the Tron wallet. Read more <a href: https://etherchain.io/tutorial/>here</a>', 'fb8c00');
                if (this.user.payout + this.user.direct_bonus + this.user.match_bonus + this.user.pool_bonus < 0.01) return this.notice('To withdraw funds, wait when the amount of income exceeds 0.01 TRX (because of gas fee)', 'fb8c00');
                if (this.user.payouts >= this.user.deposit_amount * 3.1) return this.notice('You have reached the 310% limit<br/>To get income again make a new deposit', 'fb8c00');
                this.getTronWeb().then(function (tronWeb) {
                    contract.withdraw().send({
                        feeLimit: 100000000
                    }).then(function (tx) {
                        _this3.notice('Transaction was successfully sent. Wait confirming..', '4caf50');

                        _this3.awaitTx(tx).then(function () {
                            _this3.updateInfo();
                        });
                    });
                });
            }
        }
    });
})();