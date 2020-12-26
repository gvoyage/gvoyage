
(function () {
    'use strict';

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
                activeBtns: 0,
                outShow: 0,
                activeGrade: "",
                show3: 0,
                show: 0,
                myAddress: "",
                myAddress2: "",
                show2: 0,
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
                self.ret = window.location.search.split('=')[1];
            }

            setTimeout(function initTimer() {
                if (!window.tronWeb) return ++tries < 50 ? setTimeout(initTimer, 100) : null;
                /*校验是否有tronWeb*/

                self.tron.tronWeb = !!window.tronWeb;
                window.tronWeb.on('addressChanged', function () {
                    self.tron.account = window.tronWeb.defaultAddress.base58;/*self.myAddress.length*/
                    self.myAddress = 'https://gvoyage.org/index.html?ret=' + self.tron.account;
                    self.myAddress2 = self.myAddress.replace(self.myAddress.substring(7,   self.myAddress.length-4), '********');
                    self.updateInfo();
                });
                setTimeout(function chechAuth() {
                    self.tron.auth = window.tronWeb && window.tronWeb.ready;
                    if (!self.tron.auth) setTimeout(chechAuth, 200);else self.tron.account = window.tronWeb.defaultAddress.base58;
                    self.myAddress ='https://gvoyage.org/index.html?ret=' + self.tron.account;
                    self.myAddress2 = self.myAddress.replace(self.myAddress.substring(7,   self.myAddress.length-4), '********');
                }, 200);
            }, 100);
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
    var app = new Vue({
        mixins: [VueTRON],
        i18n: i18n,
        el: '#App2',
        data: {
            tab: 'main',
            show: 0,
            lang: 'en',
            show2: 0,
            personalAssets: {
                cumulativeIncomeTRX: 0,
                assetBalanceTRX: 0,
                cumulativeIncomeMB: 0,
                assetBalanceMB: 0
            },
            team: {},
            userInfo: {
                isVip: 0,
                bonus: 0,
                spot: 0,
                deposetCount: 0,
                amountsList: [],
                investAmount: 0
            },
            upline: '',
            contract_address: 'TY6BZosQbRdmQovLdAM7WRYpxNcsMHFf5H',
            contractCode: "",
            activeBtns: 0,
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
            dynamicIncome: 0,
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
            var self = this;
            self.lang = lang;
        },
        watch: {
            'tron.account': function tronAccount() {
                var _this = this;

                this.getTronWeb().then(function (tronWeb) {
                    contract = tronWeb.contract(ABI, tronWeb.address.toHex(_this.contract_address));

                    _this.updateInfo();
                });
            },
            'contract.balance': function contractBalance() {
                if (!odometer) {
                    odometer = new Odometer({
                        el: this.$refs.odometer,
                        format: 'd,ddd,ddd',
                        theme: 'digital'
                    });
                }

                odometer.update(parseInt(this.contract.balance * this.rates.trx));
            }
        },
        methods: {
            InfoBtn: function InfoBtn() {
                window.location.href = './index.html' + '?ret=' + this.ret;
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
                        }).catch(function (e1) {});
                    });
                });
            },
            updateInfo: function updateInfo() {
                var self = this;
                this.getTronWeb().then(function (tronWeb) {
                    var fd = new FormData();
                    fd.append("addr", self.tron.account);
                    $.ajax({
                        url: 'https://www.gvoyage.org/team/api/team/info',
                        type: 'post',
                        processData: false,
                        contentType: false,
                        data: fd,
                        success: function success(e) {
                            if (e.code == 200) {
                                self.team = e.content;
                            }
                        }
                    });
                    /*出局*/

                    contract.hasToOut(self.tron.account).call().then(function (res) {
                        if (res) {
                            self.outShow = 1;
                        }
                    });
                    /*获取界面渲染信息*/

                    contract.userInfo(self.tron.account).call().then(function (res) {
                        self.userInfo.isVip = res.vip;
                        self.userInfo.deposetCount = res.deposetCount;
                        self.userInfo.spot = tronWeb.toDecimal(res.spot._hex) / 1000000;
                        self.userInfo.bonus = tronWeb.toDecimal(res.bonus._hex) / 1000000;
                        self.userInfo.investAmount = tronWeb.toDecimal(res.investAmount._hex) / 1000000;
                        var dividends = res.dividends;
                        res.amounts.forEach(function (e, idx) {
                            if (tronWeb.toDecimal(e._hex) > 0) {
                                e['hexs'] = tronWeb.toDecimal(e._hex) / 1000000;
                                e['rate'] = tronWeb.toDecimal(res.staticRate[idx]._hex) / 10;

                                if (tronWeb.toDecimal(dividends[idx]['_hex']) / 1000000 / e.hexs == 0) {
                                    e['dividendsIdx'] = tronWeb.toDecimal(tronWeb.toDecimal(dividends[idx]._hex) / 1000000 / e.hexs);
                                } else {
                                    e['dividendsIdx'] = tronWeb.toDecimal(tronWeb.toDecimal(dividends[idx]._hex) / 1000000 / e.hexs);
                                }
                            }
                        });
                        self.userInfo.amountsList = res.amounts || [];
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

                        if (self.userInfo.amountsList) {
                            var dynamicIncome = '';

                            if (self.userInfo.amountsList[1].hexs > self.userInfo.amountsList[0].hexs) {
                                dynamicIncome = self.userInfo.amountsList[1].hexs;
                            } else {
                                dynamicIncome = self.userInfo.amountsList[0].hexs;
                            }

                            if (!dynamicIncome) {
                                self.dynamicIncome = 0;
                                return;
                            }

                            list.forEach(function (e, idx) {
                                if (e.count == dynamicIncome) {
                                    self.dynamicIncome = idx + 1;
                                }
                            });
                        }
                    });
                    contract.userFinance(self.tron.account).call().then(function (res) {
                        self.personalAssets.cumulativeIncomeTRX = tronWeb.toDecimal(res.balance._hex) / 1000000;
                        self.personalAssets.assetBalanceTRX = tronWeb.toDecimal(res.totalIncome._hex) / 1000000;
                        self.personalAssets.cumulativeIncomeMB = tronWeb.toDecimal(res.tokenTotalIncome._hex) / 1000000;
                        self.personalAssets.assetBalanceMB = tronWeb.toDecimal(res.tokenBalance._hex) / 1000000;
                    });
                    /*  contract.userTeamInfo(self.tron.account).call().then(res => {
                          self.team.teamCount = res.teamCount
                          self.team.teamInvested = tronWeb.toDecimal(res.teamInvested._hex) / 1000000
                      });*/
                });
            },
            sendTx: function sendTx(name, address) {
                var _this2 = this;

                this.getTronWeb().then(function (tronWeb) {
                    (address ? tronWeb.contract(ABI, tronWeb.address.toHex(address)) : contract)[name]().send().then(function (tx) {
                        _this2.notice('Transaction was successfully sent. Wait confirming..', '4caf50');

                        _this2.awaitTx(tx).then(function () {
                            _this2.updateInfo();
                        });
                    });
                });
            },
            activeBtn: function activeBtn(item, index) {
                if (this.user.balance * 1 < this.deposit_amount * 1) {
                    this.notice('Insufficient balance', '4caf50');
                    return;
                }

                this.idx = index + 1;
                this.activeBtns = index;
                this.deposit_amount = item.count;
            },
            deposit: function deposit() {
                var self = this;

                if (self.user.balance < self.deposit_amount) {
                    self.notice('Insufficient balance', '4caf50');
                    return;
                }

                self.getTronWeb().then(function (tronWeb) {
                    //self.deposit_amount*100000
                    contract.withdraw().send({
                        feeLimit: 100000000
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
                        self.awaitTx(tx).then(function (e) {
                            self.updateInfo();
                        }).catch(function (e) {});
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