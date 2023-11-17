"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6906],
  {
    61227: function (e, t, n) {
      var a = n(85893),
        i = n(94184),
        s = n.n(i),
        r = n(67294),
        l = n(17831);
      let o = (0, r.forwardRef)(function (e, t) {
        let {
            children: n,
            type: i = "button",
            disabled: o,
            canBecomeEnabled: d = !0,
            retainColorWhenDisabled: u = !1,
            loading: c,
            onClick: p,
            className: m,
            variant: x = "theme-main",
            size: f = "lg",
            addBottomArrow: y,
            title: h,
            borderFullyRounded: g,
            borderThin: b,
            disabledText: v,
            bottomText: w,
          } = e,
          j = (0, r.useMemo)(() => {
            switch (f) {
              case "xs":
              case "sm":
                return "xs";
              default:
                return "sm";
            }
          }, [f]);
        return (0,
        a.jsxs)("button", { ref: t, type: i, title: h, className: s()("relative group leading-none outline-none transition-colors font-main font-extrabold", { "rounded-theme-button": "menu" !== f, "!rounded-theme-button": g }, "md" === f && { "py-[11px]": b, "py-[10px]": !b }, "lg" === f && { "py-[10px] sm:py-[19px]": b, "py-[9px] sm:py-[18px]": !b }, "xxl" === f && { "py-[23px]": b, "py-[22px]": !b }, { "py-5 text-2xl md:py-3 md:text-[14px]": "lg-xs" === f, "text-[16px] leading-[20px] rounded-full py-[10px] px-[20px]": "menu" === f, "text-[14px]": "xs" === f, "rounded-theme-sm px-[12px] py-[7px] text-[12px]": "sm" === f, "rounded-theme-sm px-[20px] text-[14px]": "md" === f, "rounded-theme px-[40px] text-[18px] font-bold": "lg" === f, "rounded-theme-lg px-[25px] sm:px-[60px] md:px-[75px] lg:px-[95px] text-[30px]": "xxl" === f }, "buy-nfts" === f && { "w-full max-w-[345px] pt-[10px] pb-[15px] text-[30px] sm:text-[45px] leading-none !font-bold": !0 }, "theme-main" === x && { "text-theme-main-white": !0, border: b || "xs" === f || "sm" === f || "menu" === f, "border-[2px]": !b && "xs" !== f && "sm" !== f && "menu" !== f, "hover:bg-theme-main-darker hover:border-theme-main-darker hover:text-theme-main-darker-text": !o && !c, "bg-theme-main border-theme-main text-theme-main-text": !o || u, "bg-gray-400/40 border-transparent": d && o && !u, "bg-gray-400/10 border-transparent": !d && o && !u }, "theme-main-outline" === x && { "border-theme-main": !0, border: b || "xs" === f || "sm" === f || "menu" === f, "border-[2px]": !b && "xs" !== f && "sm" !== f && "menu" !== f, "hover:bg-theme-main hover:text-theme-main-text": !o && !c, "text-theme-main hover:bg-theme-main hover:text-theme-main-text": !o || u, "!border-gray-400/40": d && o && !u, "!border-gray-400/10": !d && o && !u }, "theme-light" === x && { "text-[#000]": !0, "hover:bg-theme-main hover:text-theme-main-text": !o && !c, "bg-[#fff]": !o || u, "bg-[#fff]/70": d && o && !u, "bg-[#fff]/50": !d && o && !u }, { "animate-pulse": c }, m), onClick: p, disabled: o || c, children: [(0, a.jsx)("span", { className: s()({ "opacity-20": c }), children: n }), o && v && (0, a.jsx)("div", { className: "absolute text-[10px] left-0 right-0 text-center font-normal", children: v }), w && (0, a.jsx)("div", { className: "absolute text-[10px] left-0 right-0 text-center font-normal", children: w }), c && (0, a.jsx)(l.Z, { size: j }), y && (0, a.jsxs)("div", { className: "relative bottom-[-25px] w-[24px] left-[50%] ml-[-12px]", children: [(0, a.jsx)("div", { className: "absolute top-[-4px] w-[24px] left-0 h-[12px] border-theme-main transition-colors group-hover:border-theme-main-darker !border-r-transparent border-t-[12px] border-l-[12px] border-r-[12px] !border-l-transparent border-b-transparent" }), (0, a.jsx)("div", { className: "absolute animate-pulse top-[-2px] left-[5px] w-[14px] h-[14px] border-theme-main group-hover:border-theme-main-darker transition--colors border-l border-b rotate-[-45deg]" }), (0, a.jsx)("div", { className: "absolute animate-pulse animation-delay-500 top-[4px] left-[5px] w-[14px] h-[14px] border-theme-main group-hover:border-theme-main-darker transition--colors border-l border-b rotate-[-45deg]" }), (0, a.jsx)("div", { className: "absolute animate-pulse animation-delay-1000 top-[10px] left-[5px] w-[14px] h-[14px] border-theme-main group-hover:border-theme-main-darker transition--colors border-l border-b rotate-[-45deg]" })] })] });
      });
      t.Z = o;
    },
    40705: function (e, t, n) {
      var a = n(85893),
        i = n(94184),
        s = n.n(i),
        r = n(17831);
      let l = (e) => {
        let {
          children: t,
          disabled: n,
          loading: i,
          onClick: l,
          variant: o = "white",
          fontVariant: d = "normal",
        } = e;
        return (0, a.jsxs)("button", {
          className: s()(
            "relative whitespace-nowrap p-0 underline transition-colors",
            "white" === o && {
              "text-white hover:text-theme-main-muted": !n,
              "text-white/50": n,
            },
            "gray" === o && {
              "text-[#828282] hover:text-white": !n,
              "text-white/50": n,
            },
            "black" === o && {
              "text-black hover:text-white": !n,
              "text-black/50": n,
            },
            "theme-main" === o && {
              "text-theme-main hover:text-white": !n,
              "text-theme-main/50": n,
            },
            { "font-bold": "bold" === d }
          ),
          onClick: l,
          disabled: n,
          children: [
            (0, a.jsx)("span", {
              className: s()({ "opacity-20": i }),
              children: t,
            }),
            i && (0, a.jsx)(r.Z, { size: "xs", className: "mt-[-9px]" }),
          ],
        });
      };
      t.Z = l;
    },
    73020: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var a = n(85893),
        i = n(61234),
        s = n(87521),
        r = n(13123),
        l = n(94184),
        o = n.n(l),
        d = n(48583),
        u = n(25675),
        c = n.n(u),
        p = n(67294),
        m = n(61227);
      function x(e) {
        let { className: t, size: n = "menu" } = e,
          l = (0, d.b9)(s.FR),
          u = (0, p.useCallback)(() => {
            l((e) => ({ ...e, open: !0 }));
          }, [l]);
        return (0, a.jsx)(i.NL.Custom, {
          children: (e) => {
            var i;
            let {
              account: s,
              chain: l,
              openAccountModal: d,
              openChainModal: p,
              openConnectModal: x,
              authenticationStatus: f,
              mounted: y,
            } = e;
            return (0, a.jsx)("div", {
              ...(!y && {
                "aria-hidden": !0,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              }),
              className: t,
              children: (0, a.jsx)("div", {
                className: o()(
                  "flex w-full gap-[4px] items-center justify-start "
                ),
                children:
                  y && "loading" !== f && s && l
                    ? l.unsupported
                      ? (0, a.jsx)(m.Z, {
                          onClick: p,
                          variant: "theme-main-outline",
                          size: n,
                          className: "uppercase",
                          children: "Wrong network",
                        })
                      : (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(m.Z, {
                              title: l.name,
                              onClick: p,
                              variant: "theme-main-outline",
                              size: n,
                              className: "py-[8px]",
                              children: l.hasIcon
                                ? (0, a.jsx)("div", {
                                    style: { background: l.iconBackground },
                                    className:
                                      "w-[20px] h-[20px] rounded-full overflow-hidden",
                                    children:
                                      l.iconUrl &&
                                      (0, a.jsx)(c(), {
                                        alt:
                                          null !== (i = l.name) && void 0 !== i
                                            ? i
                                            : "Chain icon",
                                        src: l.iconUrl,
                                        width: 20,
                                        height: 20,
                                      }),
                                  })
                                : l.name,
                            }),
                            (0, a.jsx)(m.Z, {
                              onClick: u,
                              title: "View account",
                              variant: "theme-main-outline",
                              size: n,
                              className: "min-w-[50px] px-[8px]",
                              children: (0, r.a)(s.address),
                            }),
                          ],
                        })
                    : (0, a.jsx)(m.Z, {
                        onClick: () => {},
                        variant: "theme-main-outline",
                        size: n,
                        className: "uppercase btn-connect-wallet",
                        children: "Connect Wallet",
                      }),
              }),
            });
          },
        });
      }
    },
    73890: function (e, t, n) {
      n.d(t, {
        R: function () {
          return a.Z;
        },
      });
      var a = n(73020);
    },
    17831: function (e, t, n) {
      var a = n(85893),
        i = n(94184),
        s = n.n(i);
      let r = (e) => {
        let {
          text: t,
          horizontal: n = "center",
          vertical: i = "center",
          color: r = "white",
          size: l = "sm",
          className: o,
          spinnerClassName: d,
        } = e;
        return (0, a.jsxs)("div", {
          className: s()(
            "absolute top-0 right-0 bottom-0 left-0 flex flex-col",
            {
              "items-center": "center" === n,
              "justify-center": "center" === i,
              "items-start": "start" === n,
              "justify-start": "start" === i,
              "items-end": "end" === n,
              "justify-end": "end" === i,
              "lds-spinner-xs": "xs" === l,
              "lds-spinner-sm": "sm" === l,
            },
            o
          ),
          children: [
            (0, a.jsx)("div", {
              className: "lds-spinner-wrapper",
              children: (0, a.jsxs)("div", {
                className: s()(
                  "lds-spinner",
                  { "!text-theme-main": "theme-main" === r },
                  d
                ),
                children: [
                  (0, a.jsx)("div", {}),
                  (0, a.jsx)("div", {}),
                  (0, a.jsx)("div", {}),
                  (0, a.jsx)("div", {}),
                  (0, a.jsx)("div", {}),
                  (0, a.jsx)("div", {}),
                  (0, a.jsx)("div", {}),
                  (0, a.jsx)("div", {}),
                  (0, a.jsx)("div", {}),
                  (0, a.jsx)("div", {}),
                  (0, a.jsx)("div", {}),
                  (0, a.jsx)("div", {}),
                ],
              }),
            }),
            t &&
              (0, a.jsx)("p", {
                className: s()(
                  "mt-[100px] mb-0 text-center text-5xl uppercase",
                  {
                    "text-white": "white" === r,
                    "text-theme-main": "theme-main" === r,
                  }
                ),
                children: t,
              }),
          ],
        });
      };
      t.Z = r;
    },
    51680: function (e, t, n) {
      n.d(t, {
        FL: function () {
          return c;
        },
        Px: function () {
          return d;
        },
        bQ: function () {
          return o;
        },
        f9: function () {
          return r;
        },
        jj: function () {
          return l;
        },
      });
      var a = n(41650),
        i = n(32103);
      function s(e) {
        return e.filter((e) => !e.hidden);
      }
      let r = {
          Home: { title: "Home", href: "https://layerai.org", target: "_self" },
          Economy: {
            title: "Economy",
            href: "https://layerai.org/economy",
            target: "_self",
          },
          Business: {
            title: "Business",
            href: "https://layerai.org/business",
            target: "_self",
          },
          Technology: {
            title: "Technology",
            href: "https://layerai.org/technology",
            target: "_self",
          },
          Staking: { title: "Stake", href: "/", target: "_self" },
          Claim: { title: "Claim", href: "/claim", target: "_self" },
          Buy: {
            title: "Buy $".concat(i.B.defaultTokenSymbol),
            href: "/buy",
            target: "_self",
          },
          Burn: {
            title: "Burn Estimator",
            target: "_self",
            href: "/burn-estimator",
          },
          Careers: { title: "Careers", href: "https://layerai.org/careers" },
          ContractERC20: {
            title: "LAI Contract (ERC-20)",
            href: "https://etherscan.io/address/0xd04e772bc0d591fbd288f2e2a86afa3d3cb647f8",
            target: "_blank",
          },
          ContractBEP20: {
            title: "LAI Contract (BEP-20)",
            href: "https://bscscan.com/address/0x153c0c947177e631e3dfc594ba28750d3a921fb5",
            target: "_blank",
          },
          ContractARB20: {
            title: "LAI Contract (ARB-20)",
            href: "https://arbiscan.io/address/0xfe77d71baf7a6cdabbd63a2ad1e0adb68ca64c06",
            target: "_blank",
          },
          Litepaper: {
            title: "Litepaper",
            href: "https://ayerai.org/litepaper",
            target: "_blank",
          },
          DaoMaker: {
            title: "DAO Maker",
            href: "https://daomaker.com/company/LayerAI",
            target: "_blank",
          },
          NftWaifu: { title: "Assistant", href: "/assistant", target: "_self" },
          AiAssistant: {
            title: "Try AI",
            href: "https://alex.layerai.org/",
            target: "_blank",
          },
          Redeem: { title: "Redeem CC", href: "/redemptions", target: "_self" },
          Migrate: {
            title: "Migrate",
            href: "/migrate",
            hidden: !(0, a.T)("enabledMigrate"),
            target: "_self",
          },
          NftEconomy: {
            title: "Economy",
            href: "/economy",
            hidden: !(0, a.T)("enabledEconomy"),
            target: "_self",
          },
          NftMarketplace: {
            title: "NFT Marketplace",
            href: "/nft-marketplace",
            hidden: !(0, a.T)("enabledNftMarketplacePage"),
            target: "_self",
          },
          Capsules: { title: "Capsule", href: "/capsule" },
        },
        l = s([
          r.Home,
          r.Staking,
          r.Migrate,
          r.NftWaifu,
          r.Redeem,
          r.Capsules,
          r.Buy,
          r.Burn,
          r.NftMarketplace,
          r.NftEconomy,
        ]),
        o = s([
          r.Home,
          r.Staking,
          r.Migrate,
          r.NftWaifu,
          r.Redeem,
          r.Capsules,
          r.Burn,
          r.NftMarketplace,
          r.NftEconomy,
        ]),
        d = s([
          r.Home,
          r.Business,
          r.Economy,
          r.Technology,
          r.Staking,
          r.NftWaifu,
          r.Redeem,
          r.Capsules,
          r.Buy,
          r.Burn,
          r.Careers,
          r.NftMarketplace,
          r.NftEconomy,
          r.DaoMaker,
          r.Litepaper,
          r.ContractERC20,
          r.ContractBEP20,
          r.ContractARB20,
        ]),
        u = {
          telegram: {
            href: "https://t.me/LayerAI_org",
            type: "telegram",
            title: "Telegram",
          },
          instagram: { href: "", type: "instagram", title: "Instagram" },
          twitter: {
            href: "https://twitter.com/LayerAIorg",
            type: "twitter",
            title: "Twitter",
          },
          discord: {
            href: "https://discord.gg/cryptogpt",
            type: "discord",
            title: "Discord",
          },
          youtube: { href: "", type: "youtube", title: "YouTube" },
        },
        c = [u.twitter, u.telegram, u.discord];
    },
    27192: function (e, t, n) {
      n.d(t, {
        fA: function () {
          return d;
        },
        re: function () {
          return r;
        },
      });
      var a = n(33206);
      let i = {
          [a.a_.BinanceTestnet]: {
            LaiCapsule: {
              type: "lai-capsule",
              address: "0x9F5C68f054654aE1AabCfB9bD9d44370Bbc0F22a",
            },
            CgptWaifu: {
              type: "generic",
              address: "0xa2792b96530195a495ca243c3b38ec9b5aa7fa29",
            },
            Primal: {
              type: "generic",
              address: "0x5a45C037931165F9ac6413acBE44fEDD34a23584",
            },
            TestNft: {
              type: "generic",
              address: "0xF150c93810CB5b09572D712533E04c5EdA8b60eB",
            },
          },
        },
        s = {
          [a.a_.BinanceTestnet]: {
            Tgpt: "0xA2010fE3F5B6dfa2A4F6e6DD8822B36Afc80d287",
            Native: "0x0000000000000000000000000000000000000000",
          },
        },
        r = {
          [a.a_.Mainnet]: {
            tokenAddress: "0xd04e772bc0d591fbd288f2e2a86afa3d3cb647f8",
            tokenMigratedAddress: "0x168e209D7b2F58f1f24b8Ae7B7d35E662bBF11Cc",
            stakingAddress: "0xF01c994e79586eeef069D3603AbAE385d64df0E6",
            nftWaifuNftSaleAddress:
              "0x5D606404443bB31C3ffe8CF76e4297107922d6BF",
            nftMarketplace: void 0,
            gptMigrate: {
              contract: "0xB23F5DD8C0F3E11871597721cAc1a65bCaA2C662",
            },
          },
          [a.a_.Binance]: {
            tokenAddress: "0x153c0c947177e631e3dfc594ba28750d3a921fb5",
            tokenMigratedAddress: "0x776F9987D9DEED90eeD791cbD824D971FD5CCF09",
            claimContracts: [
              "0x8a58fa390b4169353699236e9b41ab190333f466",
              "0x49F23669229986FB20DAc9AFb2ad8C401d298a59",
            ],
            stakingAddress: "0xEb6F2dDEe8B15Fe0842cc1Efa320D5Bb54f2e16b",
            nftMarketplace: void 0,
            gptMigrate: {
              contract: "0xf75c433E5Eee1C5F1DF04ffcB9D46CB3F7cD7D88",
            },
          },
          [a.a_.BinanceTestnet]: {
            stakingAddress: "0xe7b855C1Cff24301689426dC34c9A9F11aAA72c9",
            tokenAddress: "0xA2010fE3F5B6dfa2A4F6e6DD8822B36Afc80d287",
            tokenMigratedAddress: "0xCdf02841942B47674c0B1b18FB2A135280f15E72",
            claimContracts: ["0x8149e4Dab02Bb8b7083FD49fC6d913dfCB263504"],
            nftWaifuNftSaleAddress:
              "0x14e3A9D6Bf5f22140C33f5C9F8F5794D924241Ec",
            nftMarketplace: {
              fee: "100",
              feePrecision: "10000",
              collections: [
                i[a.a_.BinanceTestnet].LaiCapsule,
                i[a.a_.BinanceTestnet].CgptWaifu,
                i[a.a_.BinanceTestnet].Primal,
                i[a.a_.BinanceTestnet].TestNft,
              ],
              treasury: "0x0BaE4384E388549B433AF3E5D57696c22bde4C63",
              allowedPaymentTokens: [
                s[a.a_.BinanceTestnet].Tgpt,
                s[a.a_.BinanceTestnet].Native,
              ],
              zone: "0xf24de04dda74de02dafc64c438e11aa8dfd3e9a7",
            },
            economy: { collections: [i[a.a_.BinanceTestnet].LaiCapsule] },
            gptMigrate: {
              contract: "0xeA115d402D908ca572A4a5Eb873E7e9db1C303a9",
            },
          },
        },
        l = Object.keys(r)
          .map((e) => Number(e))
          .filter((e) => a._I.includes(e))
          .filter((e) => !!r[e].tokenAddress),
        o = Object.keys(r)
          .map((e) => Number(e))
          .filter((e) => a._I.includes(e))
          .filter((e) => !!r[e].tokenMigratedAddress),
        d = Array.from(new Set([...l, ...o]));
    },
    29141: function (e, t, n) {
      n.d(t, {
        l: function () {
          return a;
        },
      });
      let a = [
        {
          inputs: [
            {
              internalType: "contract IERC20Metadata",
              name: "_stakingToken",
              type: "address",
            },
            { internalType: "uint128", name: "_penaltyDays", type: "uint128" },
            { internalType: "uint128", name: "_penaltyBP", type: "uint128" },
            { internalType: "address", name: "_treasury", type: "address" },
            { internalType: "uint256", name: "_minAmount", type: "uint256" },
            { internalType: "address", name: "_distributor", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "by",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "penaltyAmount",
              type: "uint256",
            },
          ],
          name: "Claimed",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "delegator",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "fromDelegate",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "toDelegate",
              type: "address",
            },
          ],
          name: "DelegateChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "delegate",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "previousBalance",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "newBalance",
              type: "uint256",
            },
          ],
          name: "DelegateVotesChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint128",
              name: "penaltyBP",
              type: "uint128",
            },
          ],
          name: "PenaltyBPUpdated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint128",
              name: "penaltyDays",
              type: "uint128",
            },
          ],
          name: "PenaltyDaysUpdated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "distributor",
              type: "address",
            },
          ],
          name: "SetDistributor",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint256",
              name: "minAmount",
              type: "uint256",
            },
          ],
          name: "SetMinAmount",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "bool",
              name: "multiUnstakeAllowed",
              type: "bool",
            },
          ],
          name: "SetMultiUnstakeAllowed",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "bool",
              name: "stakingAllowed",
              type: "bool",
            },
          ],
          name: "SetStakingAllowed",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "by",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "newTotal",
              type: "uint256",
            },
          ],
          name: "Staked",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "treasury",
              type: "address",
            },
          ],
          name: "TreasuryUpdated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "by",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "vestingEnd",
              type: "uint256",
            },
          ],
          name: "Unstake",
          type: "event",
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MAX_BPS",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "uint32", name: "pos", type: "uint32" },
          ],
          name: "checkpoints",
          outputs: [
            {
              components: [
                { internalType: "uint32", name: "fromBlock", type: "uint32" },
                { internalType: "uint224", name: "votes", type: "uint224" },
              ],
              internalType: "struct ERC20Votes.Checkpoint",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_index", type: "uint256" },
          ],
          name: "claim",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "delegatee", type: "address" },
          ],
          name: "delegate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "delegatee", type: "address" },
            { internalType: "uint256", name: "nonce", type: "uint256" },
            { internalType: "uint256", name: "expiry", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
          ],
          name: "delegateBySig",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "delegates",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "distributor",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IERC20Metadata",
              name: "_tokenAddress",
              type: "address",
            },
          ],
          name: "emergencyWithdrawToken",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "getCurrentVotes",
          outputs: [{ internalType: "uint96", name: "", type: "uint96" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "blockNumber", type: "uint256" },
          ],
          name: "getPastTotalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "uint256", name: "blockNumber", type: "uint256" },
          ],
          name: "getPastVotes",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "uint256", name: "blockNumber", type: "uint256" },
          ],
          name: "getPriorVotes",
          outputs: [{ internalType: "uint96", name: "", type: "uint96" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "_user", type: "address" }],
          name: "getVesting",
          outputs: [
            {
              components: [
                { internalType: "uint256", name: "amount", type: "uint256" },
                { internalType: "uint256", name: "startTime", type: "uint256" },
                { internalType: "uint256", name: "index", type: "uint256" },
              ],
              internalType: "struct BaseStakingV2.Vesting[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "_user", type: "address" }],
          name: "getVestingLength",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_address", type: "address" },
            { internalType: "uint256", name: "cursor", type: "uint256" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "getVestingPaginated",
          outputs: [
            {
              components: [
                { internalType: "uint256", name: "amount", type: "uint256" },
                { internalType: "uint256", name: "startTime", type: "uint256" },
                { internalType: "uint256", name: "index", type: "uint256" },
              ],
              internalType: "struct BaseStakingV2.Vesting[]",
              name: "values",
              type: "tuple[]",
            },
            { internalType: "uint256", name: "newCursor", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "getVotes",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "addedValue", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "minAmount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "nonces",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "numCheckpoints",
          outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "penaltyBP",
          outputs: [{ internalType: "uint128", name: "", type: "uint128" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "penaltyDays",
          outputs: [{ internalType: "uint128", name: "", type: "uint128" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
          ],
          name: "permit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_distributor", type: "address" },
          ],
          name: "setDistributor",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_minAmount", type: "uint256" },
          ],
          name: "setMinAmount",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint128", name: "_penaltyBP", type: "uint128" },
          ],
          name: "setPenaltyBP",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint128", name: "_penaltyDays", type: "uint128" },
          ],
          name: "setPenaltyDays",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bool", name: "_stakingAllowed", type: "bool" },
          ],
          name: "setStakingAllowed",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_treasury", type: "address" },
          ],
          name: "setTreasury",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "stake",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_user", type: "address" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "stakeFor",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "stakingAllowed",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "stakingToken",
          outputs: [
            {
              internalType: "contract IERC20Metadata",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "treasury",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "unstake",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "uint256", name: "", type: "uint256" },
          ],
          name: "vesting",
          outputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "uint256", name: "startTime", type: "uint256" },
            { internalType: "uint256", name: "index", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
    },
    41650: function (e, t, n) {
      n.d(t, {
        T: function () {
          return s;
        },
        X: function () {
          return r;
        },
      });
      var a = n(13392);
      let i = {
        enabledRedeemPage: !0,
        enabledNftMarketplacePage: !0,
        enabledEconomy: !1,
        enabledMigrate: !0,
      };
      function s(e) {
        var t, n;
        return "production" === a.O.NEXT_PUBLIC_VERCEL_ENV
          ? null !== (t = i[e]) && void 0 !== t && t
          : null === (n = i[e]) || void 0 === n || n;
      }
      function r(e) {
        return s(e);
      }
    },
    77370: function (e, t, n) {
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var a = n(63328);
      let i = (e) => {
        let { address: t, abi: n } = e,
          { data: i } = (0, a.mx)();
        return (0, a.cq)({ address: t, abi: n, signerOrProvider: i });
      };
    },
    63496: function (e, t, n) {
      n.d(t, {
        s: function () {
          return i;
        },
      });
      var a = n(67294);
      let i = () => {
        let [e, t] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            t(!0);
          }, []),
          e
        );
      };
    },
    66906: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return eb;
        },
      });
      var a = n(85893),
        i = n(48583),
        s = n(25675),
        r = n.n(s),
        l = n(67294),
        o = n(17235),
        d = n(87521);
      let u = (e) => {
        let {} = e,
          [t, n] = (0, i.KO)(d.HP),
          s = (0, l.useCallback)(() => {
            n({ open: !1, message: "" });
          }, [n]);
        return t.open
          ? (0, a.jsx)(o.Z, {
              requestClose: s,
              hasClose: !0,
              header: "Error!",
              children: (0, a.jsxs)("div", {
                className:
                  "flex flex-auto flex-col items-center justify-center",
                children: [
                  (0, a.jsx)(r(), {
                    src: "/icons/error.svg",
                    alt: "Error icon",
                    width: 120,
                    height: 120,
                  }),
                  !!t.message &&
                    (0, a.jsx)("p", {
                      className: "mt-4 text-lg capitalize",
                      children: t.message,
                    }),
                  (0, a.jsx)("button", {
                    className:
                      "mt-4 min-w-[90px] rounded-[22px] text-theme-main-text bg-theme-main py-2 px-4 font-bold transition-colors hover:bg-theme-main-darker hover:text-theme-main-darker-text",
                    onClick: s,
                    children: "Close",
                  }),
                ],
              }),
            })
          : null;
      };
      var c = n(94184),
        p = n.n(c);
      let m = (e) => {
          let {
            width: t = 48,
            height: n = 48,
            alt: i,
            fill: s,
            iconName: r = "icon-error",
            className: l,
          } = e;
          return (0, a.jsxs)("svg", {
            width: t,
            height: n,
            className: l,
            viewBox: "0 0 48 48",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            role: i ? "img" : void 0,
            "aria-labelledby": "title-svg-".concat(r),
            children: [
              i &&
                (0, a.jsx)("title", {
                  id: "title-svg-".concat(r),
                  children: i,
                }),
              (0, a.jsx)("path", {
                d: "M24 34q.7 0 1.175-.475.475-.475.475-1.175 0-.7-.475-1.175Q24.7 30.7 24 30.7q-.7 0-1.175.475-.475.475-.475 1.175 0 .7.475 1.175Q23.3 34 24 34Zm-1.35-7.65h3V13.7h-3ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z",
                fill: s,
              }),
            ],
          });
        },
        x = (e) => {
          let {} = e,
            [t, n] = (0, i.KO)(d.Qu),
            s = (0, l.useCallback)(() => {
              n({ open: !1 });
            }, [n]),
            r = (0, l.useCallback)(() => {
              var e;
              null === (e = t.rejectCb) || void 0 === e || e.call(t), s();
            }, [t, s]);
          return t.open
            ? (0, a.jsx)(o.Z, {
                requestClose: s,
                hasClose: !0,
                header: "",
                children: (0, a.jsxs)("div", {
                  className:
                    "flex flex-auto flex-col items-center justify-center",
                  children: [
                    (0, a.jsx)(m, {
                      className: "fill-theme-main",
                      width: 120,
                      height: 120,
                    }),
                    !!t.message &&
                      (0, a.jsx)("p", {
                        className: "mt-4 text-lg text-center",
                        dangerouslySetInnerHTML: { __html: t.message },
                      }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex items-center justify-center gap-[10px] flex-wrap",
                      children: [
                        t.ctaRejectMessage &&
                          (0, a.jsx)("button", {
                            className: p()(
                              "mt-4 min-w-[90px] rounded-[22px]  py-2 px-4 font-bold transition-colors ",
                              {
                                "text-theme-main-text bg-theme-main hover:bg-theme-main-darker hover:text-theme-main-darker-text":
                                  t.wishesReject,
                                "bg-theme-red hover:bg-theme-red-darker text-theme-main-darker-text":
                                  !t.wishesReject,
                              }
                            ),
                            onClick: r,
                            children: t.ctaRejectMessage || "Later",
                          }),
                        t.successCb &&
                          (0, a.jsx)("button", {
                            className: p()(
                              "mt-4 min-w-[90px] rounded-[22px] py-2 px-4 font-bold transition-colors ",
                              {
                                "bg-theme-red hover:bg-theme-red-darker text-theme-main-darker-text":
                                  t.wishesReject,
                                "text-theme-main-text bg-theme-main hover:bg-theme-main-darker hover:text-theme-main-darker-text":
                                  !t.wishesReject,
                              }
                            ),
                            onClick: t.successCb,
                            children: t.ctaMessage || "I Understand",
                          }),
                      ],
                    }),
                  ],
                }),
              })
            : null;
        };
      var f = n(61227),
        y = n(29141),
        h = n(61744),
        g = n(27192),
        b = n(2593),
        v = n(63328),
        w = n(40705),
        j = n(77370),
        T = n(33209),
        N = n(5590),
        k = n(24574);
      let C = (e) => {
        let {
            posIndex: t,
            position: n,
            contractAddress: s,
            abi: r,
            onPositionRemoved: o,
          } = e,
          u = (0, j.L)({ address: s, abi: r }),
          { refetchBalance: c } = (0, T.G)({}),
          p = (0, i.b9)(d.Q6),
          m = (0, i.b9)(d.HP),
          x = (0, i.b9)(d.Qu),
          { mutate: f, isLoading: y } = (0, k.D)({
            mutationFn: (e) =>
              null == u ? void 0 : u.claim(e).then((e) => e.wait()),
          }),
          g = (0, l.useCallback)(() => {
            f(n.stakeIndex, {
              onSuccess: () => {
                p((e) => ({ ...e, open: !0, message: "Claimed!" })), o(t), c();
              },
              onError: (e) => {
                m({ open: !0, message: (0, N.W)(e) });
              },
            });
          }, [n, t, f, o, c, m, p]),
          b = h.formatUnits(n.penaltyBP, 2),
          v = n.stakedTimestamp
            .add(n.penaltyDays.mul(86400))
            .mul(1e3)
            .lt(Date.now()),
          C = _(n.stakedTimestamp.add(n.penaltyDays.mul(86400))),
          M = (0, l.useCallback)(() => {
            if (v) {
              g();
              return;
            }
            x({
              open: !0,
              ctaMessage: "I Understand the Penalty",
              ctaRejectMessage: "I will wait",
              message: "You will incur "
                .concat(b, "% penalty. Penalty expires ")
                .concat(C, ". Do you wish to continue?"),
              successCb: () => {
                g(), x({ open: !1 });
              },
              rejectCb: () => {
                x({ open: !1 });
              },
              wishesReject: !0,
            });
          }, [x, g, v, C, b]);
        return (0, a.jsx)("div", {
          className: "w-full",
          children: (0, a.jsx)("div", {
            className: "rounded-[22px] bg-black py-[21px] px-[15px] text-white",
            children: (0, a.jsxs)("div", {
              className:
                "flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center",
              children: [
                (0, a.jsx)("div", {
                  children: (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsxs)("div", {
                        className: "text-xs",
                        children: ["Withdrawn on ", _(n.stakedTimestamp)],
                      }),
                      (0, a.jsx)("div", {
                        className: "text-2xl font-bold sm:text-4xl",
                        children: h.formatEther(n.amount.toString()),
                      }),
                    ],
                  }),
                }),
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col items-start gap-1 text-xs sm:items-end",
                  children: [
                    !v &&
                      (0, a.jsxs)("div", {
                        className:
                          "flex flex-col items-start gap-1 text-xs sm:items-end ",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "rounded-[4px] bg-theme-red py-1 px-2 text-right",
                            children: [b, "% Penalty"],
                          }),
                          (0, a.jsxs)("div", {
                            className: "sm:hidden",
                            children: ["Penalty Expires on ", C],
                          }),
                          (0, a.jsxs)("div", {
                            className: "hidden flex-col items-end sm:flex",
                            children: [
                              (0, a.jsx)("div", {
                                className: "text-right",
                                children: "Penalty Expires on",
                              }),
                              (0, a.jsx)("div", { children: C }),
                            ],
                          }),
                        ],
                      }),
                    (0, a.jsxs)(w.Z, {
                      loading: y,
                      onClick: M,
                      children: [
                        "Claim",
                        " ",
                        v
                          ? ""
                          : (0, a.jsx)("span", {
                              className: "text-theme-red",
                              children: " with penalty",
                            }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      var M = n(17831);
      let A = (e) => {
          let { loading: t, children: n } = e;
          return (0, a.jsxs)("div", {
            className:
              "relative flex min-h-[170px] flex-col items-center justify-center rounded-md bg-black text-lg text-white md:text-2xl",
            children: [
              t &&
                (0, a.jsx)(M.Z, {
                  color: "theme-main",
                  text: "Loading your withdrawals",
                }),
              n,
            ],
          });
        },
        _ = (e) => {
          let t = new Date(1e3 * e.toNumber());
          return ""
            .concat(t.toLocaleDateString(), " ")
            .concat(t.toLocaleTimeString());
        },
        B = () => {
          let {
              totalStaked: e,
              positions: t,
              loadingPositions: n,
              stakingAddress: s,
              vestedSum: r,
              onPositionRemoved: o,
            } = (function () {
              var e;
              let { chain: t } = (0, v.LN)(),
                n = t
                  ? null === (e = g.re[t.id]) || void 0 === e
                    ? void 0
                    : e.stakingAddress
                  : void 0,
                { address: a } = (0, v.mA)(),
                { data: i, refetch: s } = (0, v.do)({
                  address: n,
                  abi: y.l,
                  functionName: "balanceOf",
                  args: [a],
                  enabled: !!a && !!n,
                }),
                { data: r, isLoading: o } = (0, v.do)({
                  address: n,
                  abi: y.l,
                  functionName: "getVesting",
                  args: [a],
                  enabled: !!a && !!n,
                }),
                { data: d } = (0, v.do)({
                  address: n,
                  abi: y.l,
                  functionName: "penaltyDays",
                  enabled: !!n,
                }),
                { data: u } = (0, v.do)({
                  address: n,
                  abi: y.l,
                  functionName: "penaltyBP",
                  enabled: !!n,
                }),
                c = (0, l.useMemo)(
                  () =>
                    r && null != d && null != u
                      ? r.map((e) => {
                          let [t, n, a] = e;
                          return {
                            amount: t,
                            penaltyBP: u,
                            penaltyDays: d,
                            stakeIndex: a,
                            stakedTimestamp: n,
                          };
                        })
                      : [],
                  [r, d, u]
                ),
                [p, m] = (0, l.useState)([]);
              (0, l.useEffect)(() => {
                if (!c || !Array.isArray(c)) {
                  m([]);
                  return;
                }
                m([...c]);
              }, [c]);
              let x = (0, l.useCallback)(async () => {
                  await (null == s ? void 0 : s());
                }, [s]),
                f = (e) => {
                  if (e >= p.length) return;
                  let t = [...p];
                  t.splice(e, 1), m(t), x();
                },
                h = (0, l.useMemo)(
                  () => p.reduce((e, t) => e.add(t.amount), b.O$.from("0")),
                  [p]
                );
              return {
                loadingPositions: o,
                positions: p,
                totalStaked: i,
                vestingTuples: r,
                stakingAddress: n,
                onPositionRemoved: f,
                vestedSum: h,
              };
            })(),
            [, u] = (0, i.KO)(d.KV);
          (0, l.useEffect)(() => {
            let t = r ? h.formatEther(r) : "?",
              n = e ? h.formatEther(e) : "?";
            u((e) => ({
              ...e,
              subheaderText: "Withdrawn: "
                .concat(t, " / Still staked: ")
                .concat(n),
            }));
          }, [e, r, u]);
          let c = (0, l.useCallback)(() => {
            u((e) => ({ ...e, open: !1 }));
          }, [u]);
          return (0, a.jsx)("div", {
            className: "w-full",
            children: (0, a.jsxs)("div", {
              className: "flex w-full flex-col gap-5",
              children: [
                !n &&
                  t.length > 0 &&
                  t.map((e, t) =>
                    (0, a.jsx)(
                      C,
                      {
                        posIndex: t,
                        position: e,
                        contractAddress: s || "",
                        abi: y.l || {},
                        onPositionRemoved: o,
                      },
                      t
                    )
                  ),
                n && (0, a.jsx)(A, { loading: n }),
                !n &&
                  0 === t.length &&
                  (0, a.jsx)(A, {
                    children: (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)("p", {
                          className: "mb-4",
                          children: "No withdrawals yet.",
                        }),
                        (0, a.jsx)(f.Z, {
                          className: "min-w-[200px]",
                          onClick: c,
                          children: "Stake now!",
                        }),
                      ],
                    }),
                  }),
              ],
            }),
          });
        },
        E = (e) => {
          let {} = e,
            [t, n] = (0, i.KO)(d.KV),
            s = (0, l.useCallback)(() => {
              n((e) => ({ ...e, open: !1, footerText: "" }));
            }, [n]);
          return t.open
            ? (0, a.jsx)(o.Z, {
                requestClose: s,
                hasClose: !0,
                header: "Withdrawn positions",
                subheader: t.subheaderText,
                width: "md",
                children: (0, a.jsx)("div", {
                  className: "flex flex-auto flex-col",
                  children: (0, a.jsx)(B, {}),
                }),
              })
            : null;
        };
      var D = n(63496);
      let S = {},
        I = (e) => {
          let {
              fullCapsules: t,
              fractions: n,
              fullParts: s,
              postDrawCb: r,
            } = e,
            o = (0, i.Dv)(d.T9),
            u = (0, l.useRef)(null),
            c = (0, l.useRef)(null);
          (0, l.useEffect)(() => {
            if (
              (null == u ? void 0 : u.current) &&
              (null == c ? void 0 : c.current) &&
              !o.open
            ) {
              let e = u.current,
                t = e.getContext("2d");
              null == t || t.clearRect(0, 0, t.canvas.width, t.canvas.height);
              let n = c.current,
                a = n.getContext("2d");
              null == a || a.clearRect(0, 0, a.canvas.width, a.canvas.height),
                (S = {});
            }
          }, [o]);
          let p = (0, l.useCallback)(() => {
              if (!(null == u ? void 0 : u.current) || !c.current) return;
              let e = u.current;
              return e.toDataURL("image/png", 100);
            }, []),
            m = (0, l.useCallback)(() => {
              r(p());
            }, [r, p]),
            x = (0, l.useCallback)(() => {
              Object.keys(S).length >= 7 &&
                (S.logoImg.draw(),
                S.logoOutlineImg.draw(),
                S.capsuleOutlineImg.draw(),
                S.capsuleBlackImg.draw(),
                S.capsuleColorImg.draw(),
                S.qrCodeImg.draw(),
                S.texts.draw(),
                m());
            }, [S]),
            f = (0, l.useCallback)(async () => {
              if (
                !(null == u ? void 0 : u.current) ||
                !c.current ||
                (0 === t && 0 === s && 0 === n)
              )
                return;
              let e = u.current,
                a = e.getContext("2d"),
                i = c.current,
                r = i.getContext("2d");
              if (!a || !r) return;
              let { width: l, height: o } = a.canvas;
              a.clearRect(0, 0, l, o), r.clearRect(0, 0, l, o);
              let d = function (e) {
                  let t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0;
                  return t ? ((100 - e) * l) / 100 - n : (e * l) / 100;
                },
                p = function (e) {
                  let t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0;
                  return t ? ((100 - e) * o) / 100 - n : (e * o) / 100;
                },
                m = a.createLinearGradient(0, 0, l, o);
              m.addColorStop(0, "#101012"),
                m.addColorStop(0.28, "#101012"),
                m.addColorStop(1, "#012534"),
                (a.fillStyle = m),
                a.fillRect(0, 0, l, o);
              let f = new Image();
              (f.onload = () => {
                let e = f.height / f.width;
                (S.logoImg = {
                  image: f,
                  draw: () =>
                    a.drawImage(
                      f,
                      d((90 / 1920) * 100),
                      d((90 / 1920) * 100),
                      d(17.5),
                      d(17.5) * e
                    ),
                }),
                  x();
              }),
                (f.src = "/redeem-share/logo.svg");
              let y = new Image();
              (y.onload = () => {
                let e = y.height / y.width;
                (S.logoOutlineImg = {
                  image: y,
                  draw: () => a.drawImage(y, d(48), p(0), d(60), d(60) * e),
                }),
                  x();
              }),
                (y.src = "/redeem-share/logo-outline.svg");
              let h = new Image();
              (h.onload = () => {
                let e = h.height / h.width;
                (S.capsuleOutlineImg = {
                  image: h,
                  draw: () => a.drawImage(h, d(30), p(5), d(35), d(35) * e),
                }),
                  x();
              }),
                (h.src = "/redeem-share/capsule-outline.webp");
              let g = new Image();
              (g.onload = () => {
                let e = g.height / g.width;
                (S.capsuleBlackImg = {
                  image: g,
                  draw: () => a.drawImage(g, d(70), p(6), p(88) / e, p(88)),
                }),
                  x();
              }),
                (g.src = "/redeem-share/ai_capsule.webp");
              let b = new Image();
              (b.onload = () => {
                let e = b.height / b.width;
                (S.capsuleColorImg = {
                  image: b,
                  draw: () => {
                    a.drawImage(
                      b,
                      0,
                      ((s - n) / s) * b.height,
                      b.width,
                      (n / s) * b.height,
                      d(70),
                      p(6 + (88 * (s - n)) / s),
                      p(88) / e,
                      p((88 * n) / s)
                    ),
                      (a.fillStyle = "#00F0FF"),
                      a.fillRect(
                        d(67),
                        p(6 + (88 * (s - n)) / s),
                        p(88) / e + d(6),
                        p((3 / 1080) * 100)
                      ),
                      r.drawImage(
                        b,
                        0,
                        ((s - n) / s) * b.height,
                        b.width,
                        (n / s) * b.height,
                        d(70),
                        p(6 + (88 * (s - n)) / s),
                        p(88) / e,
                        p((88 * n) / s)
                      ),
                      r.save(),
                      (r.globalCompositeOperation = "source-in");
                    let t = r.createLinearGradient(
                      d(70),
                      p(6 + (88 * (s - n)) / s),
                      d(70),
                      p(6 + (88 * (s - n)) / s) + p((150 / 1080) * 100)
                    );
                    t.addColorStop(0, "rgba(0,223,255,0.7)"),
                      t.addColorStop(0.45, "rgba(0,223,255,0)"),
                      (r.fillStyle = t),
                      r.fillRect(
                        d(70),
                        p(6 + (88 * (s - n)) / s),
                        p(88) / e,
                        p((150 / 1080) * 100)
                      ),
                      r.restore(),
                      a.drawImage(i, 0, 0);
                  },
                }),
                  x();
              }),
                (b.src = "/redeem-share/ai_capsule_color.webp");
              let v = new Image();
              return (
                (v.onload = () => {
                  let e = v.height / v.width;
                  (S.qrCodeImg = {
                    image: v,
                    draw: () =>
                      a.drawImage(
                        v,
                        d((90 / 1920) * 100),
                        p((990 / 1080) * 100) - 160,
                        d((160 / 1920) * 100),
                        d((160 / 1920) * 100) * e
                      ),
                  }),
                    x();
                }),
                (v.src = "/redeem-share/qr_code.svg"),
                (S.texts = {
                  draw: () => {
                    (a.font = "bold ".concat(
                      p((72 / 1080) * 100),
                      "px degular, sans-serif"
                    )),
                      (a.fillStyle = "#00f0ff"),
                      a.fillText(
                        "I just collected",
                        d((90 / 1920) * 100),
                        p((385 / 1080) * 100)
                      ),
                      (a.font = "800 ".concat(
                        p((250 / 1080) * 100),
                        "px degular, sans-serif"
                      )),
                      a.fillText(
                        "".concat(String(n).padStart(2, "0")),
                        d((90 / 1920) * 100),
                        p((590 / 1080) * 100)
                      ),
                      (a.fillStyle = "#fff");
                    let e = a.measureText(
                      "".concat(String(n).padStart(2, "0"))
                    );
                    if (
                      (a.fillText(
                        "/".concat(s),
                        d((90 / 1920) * 100) + e.width,
                        p((590 / 1080) * 100)
                      ),
                      (a.font = "bold ".concat(
                        p((72 / 1080) * 100),
                        "px degular, sans-serif"
                      )),
                      a.fillText(
                        "of a fractional data capsule",
                        d((90 / 1920) * 100),
                        p(64.81481481481481)
                      ),
                      t)
                    ) {
                      (a.font = "bold ".concat(
                        p((48 / 1080) * 100),
                        "px degular, sans-serif"
                      )),
                        a.fillText(
                          "And ",
                          d((90 / 1920) * 100),
                          p(70.37037037037037)
                        );
                      let e = a.measureText("And ");
                      (a.fillStyle = "#00f0ff"),
                        a.fillText(
                          "".concat(t),
                          d((90 / 1920) * 100) + e.width,
                          p(70.37037037037037)
                        );
                      let n = a.measureText("".concat(t, " "));
                      (a.fillStyle = "#fff"),
                        a.fillText(
                          "complete capsule".concat(t > 1 ? "s" : ""),
                          d((90 / 1920) * 100) + e.width + n.width,
                          p(70.37037037037037)
                        );
                    }
                    (a.font = "normal ".concat(
                      p((36 / 1080) * 100),
                      "px degular, sans-serif"
                    )),
                      (a.fillStyle = "#727c7d"),
                      a.fillText(
                        "Visit",
                        d((90 / 1920) * 100) + d(10.9375),
                        p(82.5)
                      );
                    let i = a.measureText("Visit ");
                    a.fillText(
                      "to redeem your credits and share",
                      d((90 / 1920) * 100) + d(10.9375),
                      p(85.83333333333333)
                    ),
                      a.fillText(
                        "with your friends.",
                        d((90 / 1920) * 100) + d(10.9375),
                        p(89.16666666666667)
                      ),
                      (a.font = "bold ".concat(
                        p((36 / 1080) * 100),
                        "px degular, sans-serif"
                      )),
                      (a.fillStyle = "#fff"),
                      a.fillText(
                        "redeem.layerai.org",
                        d((90 / 1920) * 100) + d(10.9375) + i.width,
                        p(82.5)
                      );
                  },
                }),
                x(),
                () => {
                  a.clearRect(0, 0, l, o);
                }
              );
            }, [x, n, t, s]);
          return (
            (0, l.useEffect)(() => {
              f();
            }, [f]),
            (0, a.jsxs)("div", {
              className: "hidden pointer-events-none",
              children: [
                (0, a.jsx)("canvas", { width: 1920, height: 1080, ref: u }),
                (0, a.jsx)("canvas", { width: 1920, height: 1080, ref: c }),
              ],
            })
          );
        },
        R = (e) => {
          let {} = e,
            t = (0, D.s)(),
            [n, s] = (0, i.KO)(d.T9),
            u = (0, l.useRef)(null),
            c = (0, l.useCallback)(() => {
              s((e) => ({ ...e, open: !1 }));
            }, [s]),
            [p, m] = (0, l.useState)(),
            x = (0, l.useMemo)(
              () =>
                "cryptogpt_fractional_capsule_"
                  .concat(n.fullCapsules > 0 ? n.fullCapsules + "_and_" : "")
                  .concat(n.fractions, "_of_")
                  .concat(n.fullParts, ".png"),
              [n]
            ),
            y = (0, l.useCallback)(() => {
              if (!(null == u ? void 0 : u.current) || !p) return;
              let e = document.createElement("a");
              (e.href = p),
                (e.download = x),
                document.body.appendChild(e),
                e.click(),
                document.body.removeChild(e);
            }, [p, x]),
            h = (0, l.useCallback)(async () => {
              if (!(null == u ? void 0 : u.current) || !p) return;
              let e = await (await fetch(p)).blob(),
                t = { files: [new File([e], x, { type: "image/png" })] };
              if (navigator.canShare(t))
                try {
                  await navigator.share(t);
                } catch (e) {
                  y();
                }
              else y();
            }, [p, y, x]),
            g = (0, l.useCallback)(
              (e) => {
                m(e);
              },
              [m]
            ),
            b = (0, l.useMemo)(
              () =>
                !!t &&
                !!(null == navigator ? void 0 : navigator.canShare) &&
                !!p,
              [t, p]
            );
          return n.open
            ? (0, a.jsx)(o.Z, {
                requestClose: c,
                hasClose: !0,
                header: "",
                footer: (0, a.jsxs)("div", {
                  className: "w-full flex justify-center gap-[10px]",
                  children: [
                    (0, a.jsx)(f.Z, {
                      variant: "theme-light",
                      size: "md",
                      borderFullyRounded: !0,
                      onClick: y,
                      children: "DOWNLOAD",
                    }),
                    b &&
                      (0, a.jsx)(f.Z, {
                        variant: "theme-light",
                        size: "md",
                        borderFullyRounded: !0,
                        onClick: h,
                        children: "SHARE",
                      }),
                  ],
                }),
                width: "md",
                classNameChildren: "!p-0",
                classNameFooter: "!py-[20px]",
                children: (0, a.jsxs)("div", {
                  ref: u,
                  className: "h-0 w-full",
                  style: { paddingBottom: "".concat(56.25, "%") },
                  children: [
                    p &&
                      (0, a.jsx)(r(), {
                        fill: !0,
                        src: p,
                        alt: "Share Image",
                        quality: 100,
                      }),
                    (0, a.jsx)(I, {
                      fullCapsules: n.fullCapsules,
                      fullParts: n.fullParts,
                      fractions: n.fractions,
                      postDrawCb: g,
                    }),
                  ],
                }),
              })
            : null;
        },
        F = (e) => {
          var t;
          let {} = e,
            [n, s] = (0, i.KO)(d.Q6),
            u = (0, l.useCallback)(() => {
              s({
                open: !1,
                message: "",
                ctaMessage: "",
                ctaAction: () => null,
              });
            }, [s]);
          return n.open
            ? (0, a.jsx)(o.Z, {
                requestClose: u,
                hasClose: !0,
                header: "Success!",
                children: (0, a.jsxs)("div", {
                  className:
                    "flex flex-auto flex-col items-center justify-center",
                  children: [
                    (0, a.jsx)(r(), {
                      src: "/icons/success.svg",
                      alt: "Success icon",
                      width: 120,
                      height: 120,
                    }),
                    !!n.message &&
                      (0, a.jsx)("p", {
                        className: "mt-4 text-lg text-center",
                        dangerouslySetInnerHTML: { __html: n.message },
                      }),
                    (0, a.jsx)("button", {
                      className:
                        "mt-4 min-w-[90px] rounded-[22px] text-theme-main-text bg-theme-main py-2 px-4 font-bold transition-colors hover:bg-theme-main-darker hover:text-theme-main-darker-text",
                      onClick:
                        n.ctaMessage &&
                        null !== (t = n.ctaAction) &&
                        void 0 !== t
                          ? t
                          : u,
                      children: n.ctaMessage || "Close",
                    }),
                  ],
                }),
              })
            : null;
        };
      var L = n(33206),
        P = n(51680),
        Z = n(11441),
        O = n(13123),
        U = n(41664),
        z = n.n(U),
        V = n(11163),
        q = n(90505),
        W = n(61234),
        Q = n(31601);
      let K = (e) => {
          let { className: t } = e,
            { openChainModal: n } = (0, W.iC)();
          return n
            ? (0, a.jsx)("button", {
                onClick: n,
                className: p()("text-[#828282] hover:underline", t),
                children: (0, a.jsx)(Q.Z, {}),
              })
            : null;
        },
        G = (e) => {
          var t, n;
          let { chainId: s } = e,
            r = (0, i.b9)(q.D),
            { balance: o } = (0, T.G)({
              tokenAddress:
                null === g.re || void 0 === g.re
                  ? void 0
                  : null === (t = g.re[s]) || void 0 === t
                  ? void 0
                  : t.tokenAddress,
              chainId: s,
              noDefault: !0,
            }),
            { balance: u } = (0, T.G)({
              tokenAddress:
                null === g.re || void 0 === g.re
                  ? void 0
                  : null === (n = g.re[s]) || void 0 === n
                  ? void 0
                  : n.tokenMigratedAddress,
              chainId: s,
              noDefault: !0,
            }),
            c = (0, l.useMemo)(() => {
              var e;
              return (
                !!o &&
                o.value.gt(0) &&
                !!(null === g.re || void 0 === g.re
                  ? void 0
                  : null === (e = g.re[s]) || void 0 === e
                  ? void 0
                  : e.tokenMigratedAddress)
              );
            }, [o, s]),
            { push: p } = (0, V.useRouter)(),
            m = (0, i.b9)(d.HP),
            x = (0, v.xx)(),
            { switchNetwork: y } = (0, v.g0)({
              chainId: s,
              onSuccess: () => {
                r(!0), p(P.f9.Migrate.href);
              },
              onError(e) {
                m((t) => ({ ...t, open: !0, message: (0, N.W)(e) }));
              },
            }),
            h = (0, l.useCallback)(() => {
              null == y || y();
            }, [y]),
            b = (0, l.useCallback)(() => {
              r(!0);
            }, [r]);
          return (0, a.jsxs)("div", {
            className: "w-full",
            children: [
              o &&
                (0, a.jsxs)("div", {
                  className: "flex gap-[4px] w-full overflow-hidden",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex-none",
                      children: ["Balance on ", (0, L.vs)(s), ":"],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex-auto text-right overflow-hidden text-ellipsis flex items-center gap-[5px] justify-end",
                      children: [
                        c &&
                          (0, a.jsx)(a.Fragment, {
                            children:
                              x === s
                                ? (0, a.jsxs)(z(), {
                                    href: P.f9.Migrate.href,
                                    children: [
                                      " ",
                                      (0, a.jsx)(f.Z, {
                                        size: "xs",
                                        className: "px-[4px] pt-[2px] pb-[3px]",
                                        onClick: b,
                                        title: "Migrate to ".concat(
                                          null == u ? void 0 : u.symbol
                                        ),
                                        children: "MIGRATE",
                                      }),
                                    ],
                                  })
                                : (0, a.jsx)(f.Z, {
                                    size: "xs",
                                    className: "px-[4px] pt-[2px] pb-[3px]",
                                    onClick: h,
                                    title: "Migrate to ".concat(
                                      null == u ? void 0 : u.symbol
                                    ),
                                    children: "MIGRATE",
                                  }),
                          }),
                        (0, a.jsxs)("span", {
                          title: "".concat((0, Z.dN)(o), " ").concat(o.symbol),
                          children: [(0, Z.iZ)((0, Z.dN)(o)), " ", o.symbol],
                        }),
                      ],
                    }),
                  ],
                }),
              u &&
                (0, a.jsxs)("div", {
                  className: "flex gap-[4px] w-full overflow-hidden",
                  children: [
                    (0, a.jsx)("div", { className: "flex-none" }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex-auto text-right overflow-hidden text-ellipsis",
                      title: "".concat((0, Z.dN)(u), " ").concat(u.symbol),
                      children: [(0, Z.iZ)((0, Z.dN)(u)), " ", u.symbol],
                    }),
                  ],
                }),
            ],
          });
        },
        H = (e) => {
          let {} = e,
            [t, n] = (0, i.KO)(d.FR),
            s = (0, l.useCallback)(() => {
              n({ open: !1 });
            }, [n]),
            { address: r } = (0, v.mA)(),
            { disconnect: u } = (0, v.qL)();
          return t.open
            ? (0, a.jsx)(o.Z, {
                width: "xs",
                requestClose: s,
                hasClose: !0,
                header: "Your Account",
                children: (0, a.jsxs)("div", {
                  className:
                    "flex flex-auto flex-col items-center justify-center gap-[10px]",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex gap-[4px] w-full overflow-hidden",
                      children: [
                        (0, a.jsx)("div", {
                          className: "flex-none text-left",
                          children: "Address:",
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "flex-auto text-right overflow-hidden text-ellipsis",
                          title: r,
                          children: (0, O.a)(r),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex gap-[4px] w-full overflow-hidden",
                      children: [
                        (0, a.jsx)("div", {
                          className: "flex-none text-left",
                          children: "Network:",
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "flex-auto text-right overflow-hidden text-ellipsis",
                          children: (0, a.jsx)(K, {}),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "border-t border-t-theme-main w-full",
                    }),
                    g.fA.map((e) => (0, a.jsx)(G, { chainId: e }, e)),
                    (0, a.jsx)(f.Z, {
                      size: "sm",
                      borderFullyRounded: !0,
                      variant: "theme-main-outline",
                      onClick: u,
                      children: "Disconnect",
                    }),
                  ],
                }),
              })
            : null;
        };
      var $ = n(66269),
        Y = n(92350);
      let X = () => {
        let { open: e, nft: t, children: n } = (0, i.Dv)(Y.R),
          s = (0, $.oC)(Y.R),
          r = (0, l.useCallback)(() => {
            s();
          }, [s]);
        return e
          ? (0, a.jsx)(o.Z, {
              width: "md",
              hasAbsoluteClose: !0,
              addPaddings: !1,
              requestClose: r,
              children: n,
            })
          : null;
      };
      var J = n(10569);
      let ee = (e) => {
          let { href: t, children: n, rel: i, target: s } = e;
          return (0, a.jsx)(z(), {
            href: t,
            className:
              "text-theme-white transition-colors hover:text-theme-main-menu text-[0.8em] md:text-[1em]",
            rel: i,
            target: s,
            children: n,
          });
        },
        et = (e) => {
          let { className: t } = e;
          return (0, a.jsx)("footer", {
            className: p()("bg-[#15161a] text-[14px] p-[50px] md:p-[60px]", t),
            children: (0, a.jsxs)("div", {
              className: "container grid gap-[50px] md:grid-cols-2",
              children: [
                (0, a.jsx)("div", {
                  className: "flex flex-col items-start",
                  children: (0, a.jsx)("p", {
                    className:
                      "font-main leading-[1.1] font-extrabold text-[2.5em] md:text-[2.9em] text-theme-white",
                    children: "Join the AI Revolution",
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "grid grid-cols-2 gap-[30px] w-[70%]",
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-[1.6em] mb-[25px]",
                          children: "Socials",
                        }),
                        (0, a.jsx)("div", {
                          className: "flex flex-col gap-[7px]",
                          children: P.FL.map((e) => {
                            let { href: t, title: n } = e;
                            return (0, a.jsx)(
                              ee,
                              {
                                href: t,
                                rel: "noreferrer nofollow",
                                target: "_blank",
                                children: n,
                              },
                              t
                            );
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-[1.6em] mb-[25px]",
                          children: "Pages",
                        }),
                        (0, a.jsx)("div", {
                          className: "flex flex-col gap-[7px]",
                          children: P.Px.map((e) => {
                            let { title: t, href: n } = e;
                            return (0, a.jsx)(
                              ee,
                              {
                                href: n,
                                target: "_blank",
                                rel: "noreferrer nofollow",
                                children: t,
                              },
                              n
                            );
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      var en = n(9008),
        ea = n.n(en),
        ei = n(73890),
        es = n(32103),
        er = {
          src: "/_next/static/media/logo.4aa45033.svg",
          height: 79,
          width: 289,
          blurWidth: 0,
          blurHeight: 0,
        };
      let el = () =>
        (0, a.jsx)("div", {
          className: "max-w-[160px]",
          children: (0, a.jsx)(z(), {
            href: "/",
            children: (0, a.jsx)(r(), {
              priority: !0,
              src: er,
              alt: es.B.appName,
              className: "h-full",
            }),
          }),
        });
      var eo = n(39332);
      let ed = (e) => {
          let { href: t, title: n } = e,
            i = (0, eo.usePathname)(),
            s = i === t;
          return (0, a.jsx)(z(), {
            href: t,
            className: p()(
              "py-[10px] px-[15px] text-[14px] leading-none rounded-full color-theme-white transition-colors uppercase border duration-[400ms]",
              {
                "border-transparent hover:border-white/[.1] hover:bg-theme-main-menu-muted/[.2]":
                  !s,
                "border-white/[.1] bg-theme-main-menu-muted/[.2] font-bold": s,
              }
            ),
            children: n,
          });
        },
        eu = (e) => {
          let { className: t } = e;
          return (0, a.jsx)("div", {
            className: p()(
              "flex w-full items-center justify-around p-[4px] rounded-full border border-theme-white/[.15] bg-black/30",
              t
            ),
            children: P.bQ.map((e) =>
              (0, a.jsx)(ed, { href: e.href, title: e.title }, e.href)
            ),
          });
        },
        ec = () =>
          (0, a.jsxs)("div", {
            className:
              "hidden justify-between gap-[5px] xl:gap-3 py-3 lg:grid lg:grid-cols-[160px,1fr,160px] xl:grid-cols-[270px,1fr,270px]",
            children: [
              (0, a.jsx)("div", {
                className: "flex flex-none items-center gap-5",
                children: (0, a.jsx)(el, {}),
              }),
              (0, a.jsx)("div", {
                className: "flex items-center mx-auto gap-3 text-[14px]",
                children: (0, a.jsx)(eu, { showAllItems: !0 }),
              }),
              (0, a.jsx)("div", {
                className: "flex items-center justify-end",
                children: (0, a.jsx)(ei.R, {}),
              }),
            ],
          }),
        ep = (e) => {
          let { className: t } = e,
            [n, s] = (0, i.KO)(J.D),
            { open: r, canAnimate: o } = n,
            d = (0, l.useCallback)(() => {
              s((e) => ({
                ...e,
                open: !e.open,
                canAnimate: !0,
                inAnimation: !0,
              }));
            }, [s]),
            u = (0, l.useRef)(null);
          (0, l.useEffect)(() => {
            if (!u.current) return;
            let e = () => {
              s((e) => ({ ...e, inAnimation: !1 }));
            };
            return (
              u.current.addEventListener("animationend", e, !1),
              () => {
                var t;
                null === (t = u.current) ||
                  void 0 === t ||
                  t.removeEventListener("animationend", e, !1);
              }
            );
          }, [s]);
          let c = r && o,
            m = !r && o;
          return (0, a.jsxs)("button", {
            className: p()("relative h-[48px] w-[48px]", t),
            onClick: d,
            children: [
              (0, a.jsx)("div", {
                ref: u,
                className: p()(
                  "menu-line-1 absolute left-[9px] h-[2px] w-[30px] bg-white",
                  { open: c, closed: m }
                ),
              }),
              (0, a.jsx)("div", {
                className: p()(
                  "menu-line-2 absolute left-[9px] h-[2px] w-[30px] bg-white",
                  { open: c, closed: m }
                ),
              }),
              (0, a.jsx)("div", {
                className: p()(
                  "menu-line-3 absolute left-[9px] h-[2px] w-[30px] bg-white",
                  { open: c, closed: m }
                ),
              }),
            ],
          });
        },
        em = (e) => {
          let { showAllItems: t = !1, className: n } = e,
            i = (0, eo.usePathname)();
          return (0, a.jsx)("div", {
            className: p()(
              "flex w-full flex-col items-start gap-[25px] text-[20px]",
              n
            ),
            children: P.jj.map((e) => {
              if (!t && i === e.href) return null;
              let n = i === e.href;
              return (0, a.jsx)(
                z(),
                {
                  className: p()(
                    "font-main text-[2em] sm:text-[4em] font-semibold leading-none hover:text-[#0154c1]",
                    { "text-[#0154c1] underline": n }
                  ),
                  href: e.href,
                  title: e.title,
                  children: e.title,
                },
                e.href
              );
            }),
          });
        },
        ex = () => {
          let e = (0, i.Dv)(J.D),
            { open: t, canAnimate: n, inAnimation: s } = e;
          return (0, a.jsxs)("div", {
            className: "flex justify-between py-3 lg:hidden",
            children: [
              (0, a.jsx)("div", {
                className: "flex flex-none items-center gap-5 relative z-30",
                children: (0, a.jsx)(el, {}),
              }),
              (0, a.jsxs)("div", {
                className: "flex gap-[10px] ",
                children: [
                  (0, a.jsx)(ei.R, { className: "hidden sm:block" }),
                  (0, a.jsx)(ep, { className: "relative z-30" }),
                ],
              }),
              (t || s) &&
                (0, a.jsx)("div", {
                  className: p()(
                    "menu-mobile fixed top-0 right-0 bottom-0 left-0 z-20 h-screen flex-col items-center overflow-auto bg-[#0f1014]",
                    { open: n && t, closed: n && !t }
                  ),
                  children: (0, a.jsx)("div", {
                    className: p()(
                      "menu-mobile-items flex max-h-screen w-full flex-col items-center gap-[16px] overflow-auto pt-[200px] pb-[80xp]",
                      { open: n && t, closed: n && !t }
                    ),
                    children: (0, a.jsxs)("div", {
                      className: "px-[65px] flex flex-col gap-[16px] w-full",
                      children: [
                        (0, a.jsx)("div", {
                          className: "w-full flex justify-center",
                          children: (0, a.jsx)(ei.R, {}),
                        }),
                        (0, a.jsx)(em, {
                          showAllItems: !0,
                          className: "flex-col gap-[16px]",
                        }),
                        (0, a.jsx)("div", { className: "h-[100px]" }),
                        (0, a.jsx)("div", {
                          className: "_h-safe-area-inset-bottom",
                        }),
                      ],
                    }),
                  }),
                }),
            ],
          });
        };
      var ef = n(70747);
      let ey = (e) => {
          let { className: t } = e;
          return (0, a.jsx)("div", {
            className: p()(
              "py-[5px] sm:py-[10px] relative z-30 bg-[#0154c1]",
              t
            ),
            children: (0, a.jsx)("div", {
              className: "container max-w-[940px] mx-auto",
              children: (0, a.jsxs)("div", {
                className:
                  "grid w-full grid-cols-1 md:grid-cols-[min-content_1fr] gap-[5px] md:gap-[16px] items-center justify-center",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "text-white font-semibold flex-none whitespace-nowrap text-[14px] text-center md:text-left",
                    children: ["$", es.B.defaultTokenSymbol, " is now live"],
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "py-[6px] grid grid-cols-4 md:grid-cols-[repeat(10,1fr)] gap-[20px] items-center justify-center",
                    children: ef.F.map((e) => {
                      let { title: t, href: n, logoUrl: i } = e;
                      return (0, a.jsx)(
                        z(),
                        {
                          href: n,
                          title: "Buy on ".concat(t),
                          className:
                            "relative w-full h-full rounded-full text-[16px] max-h-[30px] max-w-[115px] hover:opacity-60 transition-opacity justify-self-center",
                          target: "_blank",
                          children: (0, a.jsx)("div", {
                            className:
                              "relative flex flex-col w-full  h-[18px]",
                            children: (0, a.jsx)(r(), {
                              src: i,
                              fill: !0,
                              className: "object-contain object-center",
                              alt: t,
                              loading: "eager",
                              quality: 100,
                            }),
                          }),
                        },
                        t
                      );
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        eh = (e) => {
          let {
              className: t,
              title: n,
              addTitleBase: i = !0,
              description: s = es.B.descriptionGeneral,
            } = e,
            r = [n, i ? es.B.titleBase : ""].filter((e) => !!e).join(" - "),
            o = (0, l.useRef)(0),
            [d, u] = (0, l.useState)(!1),
            [c, m] = (0, l.useState)("down"),
            [x, f] = (0, l.useState)(0);
          return (
            (0, l.useEffect)(() => {
              let e = () => {
                m((e) => {
                  let t = window.scrollY > o.current ? "down" : "up";
                  return e !== t ? (f(window.scrollY), t) : e;
                }),
                  (o.current = window.scrollY);
              };
              return (
                window.addEventListener("scroll", e),
                e(),
                () => {
                  window.removeEventListener("scroll", e);
                }
              );
            }, []),
            (0, l.useEffect)(() => {
              let e = () => {
                if ("up" === c && window.scrollY < x - 50) {
                  u(!0);
                  return;
                }
                "down" === c && u(!1);
              };
              return (
                window.addEventListener("scroll", e),
                e(),
                () => {
                  window.removeEventListener("scroll", e);
                }
              );
            }, [c, x]),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)(ea(), {
                  children: [
                    (0, a.jsx)("title", { children: r }),
                    (0, a.jsx)("meta", { name: "description", content: s }),
                    (0, a.jsx)("link", {
                      rel: "shortcut icon",
                      href: "/favicon.svg",
                    }),
                    (0, a.jsx)("link", {
                      href: "/favicon_large.svg",
                      rel: "apple-touch-icon",
                    }),
                  ],
                }),
                (0, a.jsxs)("header", {
                  className: p()("left-0 top-0 right-0", t),
                  children: [
                    (0, a.jsx)(ey, {
                      className: p()("transition-all", {
                        "mt-[-152px] md:mt-[-50px]": !d,
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "px-[1rem] bg-gradient-to-b from-black",
                      children: [(0, a.jsx)(ec, {}), (0, a.jsx)(ex, {})],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        eg = (e) => {
          let { title: t, addTitleBase: n, description: s, children: r } = e,
            { address: o } = (0, v.mA)(),
            [c, p] = (0, i.KO)(J.D),
            [m, f] = (0, l.useState)(!1),
            y = (0, i.Dv)(d.KV),
            h = (0, i.Dv)(d.Q6),
            g = (0, i.Dv)(d.HP),
            b = (0, i.Dv)(d.Qu),
            w = (0, i.Dv)(Y.R),
            j = (0, i.Dv)(d.FR),
            T = (0, l.useCallback)((e) => {
              if (e) {
                let e = Math.max(
                  0,
                  window.innerWidth - document.body.scrollWidth
                );
                (document.body.style.paddingRight = "".concat(e, "px")),
                  (document.body.style.overflow = "hidden");
              } else
                (document.body.style.overflow = "auto"),
                  (document.body.style.paddingRight = "0");
            }, []);
          return (
            (0, l.useEffect)(() => {
              f(
                c.open ||
                  y.open ||
                  h.open ||
                  g.open ||
                  b.open ||
                  w.open ||
                  j.open
              );
            }, [c, y, h, g, b, w, j]),
            (0, l.useEffect)(() => {
              let e = () => {
                c.open &&
                  window.innerWidth >= 992 &&
                  c.open &&
                  p((e) => ({ ...e, open: !1 }));
              };
              return (
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("resize", e);
                }
              );
            }, [p, c.open]),
            (0, l.useEffect)(() => {
              T(m);
            }, [m, T]),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex min-h-screen flex-col bg-[#0f1014] text-white w-full overflow-hidden",
                  children: [
                    (0, a.jsx)(eh, {
                      title: t,
                      description: s,
                      className:
                        "h-header fixed z-[100] left-0 top-0 right-0 flex-none",
                    }),
                    (0, a.jsx)("main", {
                      className:
                        "align-center flex flex-auto flex-col justify-center",
                      children: r,
                    }),
                    (0, a.jsx)(et, { className: "flex-none" }),
                  ],
                }),
                (0, a.jsx)(E, {}),
                (0, a.jsx)(R, {}),
                (0, a.jsx)(X, {}),
                (0, a.jsx)(x, {}),
                (0, a.jsx)(F, {}),
                (0, a.jsx)(u, {}),
                !!o && (0, a.jsx)(H, {}),
              ],
            })
          );
        };
      var eb = eg;
    },
    70747: function (e, t, n) {
      n.d(t, {
        F: function () {
          return a;
        },
      });
      let a = [
        {
          title: "Bithumb",
          href: "https://www.bithumb.com/trade/order/GPT_BTC",
          logoUrl: "/buy/bithumb.webp",
        },
        {
          title: "KuCoin",
          href: "https://www.kucoin.com/trade/LAI-USDT",
          logoUrl: "/buy/kucoin.svg",
        },
        {
          title: "Bitfinex",
          href: "https://trading.bitfinex.com/t/LAI:UST?type=exchange",
          logoUrl: "/buy/bitfinex.svg",
        },
        {
          title: "PancakeSwap",
          href: "https://pancakeswap.finance/swap?outputCurrency=0x153C0c947177e631e3DFc594ba28750d3a921FB5&chain=bsc",
          logoUrl: "/buy/pancakeswap.svg",
        },
        {
          title: "Bybit",
          href: "https://www.bybit.com/en-US/trade/spot/GPT/USDT",
          logoUrl: "/buy/bybit.svg",
        },
        {
          title: "Gate",
          href: "https://www.gate.io/trade/LAI_USDT",
          logoUrl: "/buy/gate.svg",
        },
        {
          title: "Uniswap",
          href: "https://app.uniswap.org/#/swap?outputCurrency=0xd04e772bc0d591fbd288f2e2a86afa3d3cb647f8&inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          logoUrl: "/buy/uniswap.svg",
        },
        {
          title: "MEXC",
          href: "https://www.mexc.com/exchange/LAI_USDT?_from=search",
          logoUrl: "/buy/mexc.svg",
        },
        {
          title: "Bitget",
          href: "https://www.bitget.com/en/spot/GPTUSDT_SPBL?type=spot",
          logoUrl: "/buy/bitget.svg",
        },
        {
          title: "Huobi",
          href: "https://www.huobi.com/en-us/exchange/lai_usdt",
          logoUrl: "/buy/huobi.svg",
        },
      ].filter((e) => !!e.href);
    },
    90505: function (e, t, n) {
      n.d(t, {
        D: function () {
          return s;
        },
      });
      var a = n(15103),
        i = n(95495);
      let s = (function (e, t, n) {
        let s = (0, i.O4)(e, t, void 0),
          r = (0, a.cn)(
            (e) => e(s),
            (e, t, n) => {
              let a = null != n ? n : !e(s);
              t(s, a);
            }
          );
        return r;
      })("migrateScroll", !1);
    },
    86968: function (e, t, n) {
      var a = n(85893);
      let i = (e) => {
        let {
          width: t = 18,
          height: n = 18,
          alt: i,
          fill: s,
          iconName: r = "icon-close",
          className: l,
        } = e;
        return (0, a.jsxs)("svg", {
          width: t,
          height: n,
          className: l,
          viewBox: "0 0 18 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          role: i ? "img" : void 0,
          "aria-labelledby": "title-svg-".concat(r),
          children: [
            i &&
              (0, a.jsx)("title", { id: "title-svg-".concat(r), children: i }),
            (0, a.jsx)("path", {
              d: "M9 7.586L1.929 0.515L0.515 1.929L7.586 9L0.515 16.071L1.929 17.485L9 10.414L16.071 17.485L17.485 16.071L10.414 9L17.485 1.929L16.071 0.515L9 7.586V7.586Z",
              fill: s,
            }),
          ],
        });
      };
      t.Z = i;
    },
    17235: function (e, t, n) {
      var a = n(85893),
        i = n(94184),
        s = n.n(i),
        r = n(86968);
      let l = (e) => {
        let {
          hasClose: t,
          hasAbsoluteClose: n,
          requestClose: i,
          header: l,
          subheader: o,
          footer: d,
          children: u,
          width: c = "sm",
          classNameChildren: p,
          classNameFooter: m,
          addPaddings: x = !0,
        } = e;
        return (0, a.jsx)("div", {
          className: s()(
            "fixed z-[100] top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center bg-[#0f101488] text-theme-white p-[20px]"
          ),
          children: (0, a.jsxs)("div", {
            className: s()(
              "flex min-h-[200px] w-full flex-col rounded-[50px] border border-[#d8e0e326] bg-[#15161a] shadow-[0_12px_20px_15px_rgb(24_56_143_/_10%),_0_-12px_20px_15px_rgb(24_56_143_/_10%)] overflow-hidden relative",
              {
                "max-w-[350px]": "xs" === c,
                "max-w-[500px]": "sm" === c,
                "max-w-[800px]": "md" === c,
                "max-w-[100vw]": "fs" === c,
              }
            ),
            children: [
              n &&
                (0, a.jsx)("button", {
                  className:
                    "absolute group right-[15px] top-[15px] w-[30px] flex-none p-[5px] z-10",
                  onClick: i,
                  children: (0, a.jsx)(r.Z, {
                    className:
                      "transition-all group-hover:scale-110 fill-[#d8e0e326] group-hover:fill-white",
                    height: 20,
                    width: 20,
                    alt: "Close",
                  }),
                }),
              (t || l || o) &&
                (0, a.jsxs)("div", {
                  className:
                    "relative flex w-full flex-none content-between px-[20px] py-[10px] after:pointer-events-none after:absolute after:left-0 after:bottom-[-9px] after:right-0 after:z-10 after:h-[10px] after:bg-gradient-to-b after:from-[#15161a] border-b border-b-[#d8e0e3]",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-auto flex-col items-center justify-center gap-1 pl-[30px] text-center text-white",
                      children: [
                        l &&
                          (0, a.jsx)("div", {
                            className: "text-2xl",
                            children: l,
                          }),
                        o &&
                          (0, a.jsx)("div", {
                            className: "text-md",
                            children: o,
                          }),
                      ],
                    }),
                    t &&
                      (0, a.jsx)("button", {
                        className:
                          "group mr-[-5px] mt-[0] w-[30px] flex-none p-[5px]",
                        onClick: i,
                        children: (0, a.jsx)(r.Z, {
                          className:
                            "transition-all group-hover:scale-110 fill-[#d8e0e326] group-hover:fill-white",
                          height: 20,
                          width: 20,
                          alt: "Close",
                        }),
                      }),
                  ],
                }),
              !!u &&
                (0, a.jsx)("div", {
                  className: s()(
                    "relative flex w-full flex-auto flex-col overflow-auto",
                    { "px-[20px] py-[20px]": x },
                    p
                  ),
                  children: u,
                }),
              !!d &&
                (0, a.jsx)("div", {
                  className: s()("flex-none px-[20px] py-[5px]", m),
                  children: d,
                }),
            ],
          }),
        });
      };
      t.Z = l;
    },
    92350: function (e, t, n) {
      n.d(t, {
        R: function () {
          return i;
        },
        y: function () {
          return s;
        },
      });
      var a = n(95495);
      let i = (0, a.rw)({
          open: !1,
          nftCollection: void 0,
          nft: void 0,
          nftId: void 0,
          children: void 0,
        }),
        s = (0, a.rw)({
          open: !1,
          nftCollection: void 0,
          nft: void 0,
          nftId: void 0,
          children: void 0,
          prices: void 0,
          end_time: void 0,
          listing_id: void 0,
        });
    },
    31601: function (e, t, n) {
      var a = n(85893),
        i = n(33206),
        s = n(94184),
        r = n.n(s),
        l = n(25675),
        o = n.n(l),
        d = n(63328);
      let u = (e) => {
        let { className: t, propChainId: n } = e,
          { chain: s } = (0, d.LN)(),
          l = n ? i.zG[n] : s;
        if (!l) return null;
        let { iconUrl: u } = (0, i._c)(l);
        return (0, a.jsxs)("div", {
          className: r()(
            "flex items-center gap-[4px] text-[2.7vw] sm:text-xs text-[#828282]",
            t
          ),
          children: [
            u &&
              (0, a.jsx)(o(), {
                src: u,
                width: 16,
                height: 16,
                alt: "Logo",
                className: "h-[16px] w-[16px]",
              }),
            l.name,
          ],
        });
      };
      t.Z = u;
    },
    33209: function (e, t, n) {
      n.d(t, {
        G: function () {
          return l;
        },
      });
      var a = n(27192),
        i = n(2593),
        s = n(67294),
        r = n(63328);
      function l() {
        var e;
        let {
            tokenAddress: t,
            chainId: n,
            noDefault: l = !1,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          { address: o } = (0, r.mA)(),
          d = (0, r.xx)({ chainId: n }),
          u =
            null != t
              ? t
              : !l && d
              ? null === (e = a.re[d]) || void 0 === e
                ? void 0
                : e.tokenAddress
              : void 0,
          { data: c, refetch: p } = (0, r.KQ)({
            address: o,
            token: u,
            enabled: !!o && !!u,
            chainId: d,
            scopeKey: "".concat(d, "-tokenBalance-").concat(u, "-").concat(o),
          }),
          m = (0, s.useMemo)(
            () =>
              c
                ? {
                    ...c,
                    value: i.O$.from(
                      String(c.value)
                        .replace("#.bigint", "")
                        .replace("#bigint.", "")
                    ),
                  }
                : c,
            [c]
          );
        return { balance: m, refetchBalance: p };
      }
    },
    5590: function (e, t, n) {
      n.d(t, {
        W: function () {
          return a;
        },
      });
      function a(e) {
        let t = "Unknown error";
        if (!e) return t;
        if (e.reason) return e.reason;
        if (!e.message) return t;
        try {
          let i = "| Raw error |",
            s = e.message.lastIndexOf(i);
          if (-1 === s) {
            var n, a;
            return null !==
              (a =
                null !== (n = null == e ? void 0 : e.message) && void 0 !== n
                  ? n
                  : null == e
                  ? void 0
                  : e.reason) && void 0 !== a
              ? a
              : t;
          }
          let r = e.message.substring(s + i.length).trim(),
            l = JSON.parse(r),
            o =
              (null == l ? void 0 : l.reason) ||
              (null == l ? void 0 : l.message);
          return o || t;
        } catch (e) {
          return t;
        }
      }
    },
    11441: function (e, t, n) {
      n.d(t, {
        TQ: function () {
          return o;
        },
        XQ: function () {
          return l;
        },
        dN: function () {
          return u;
        },
        hc: function () {
          return r;
        },
        iZ: function () {
          return c;
        },
        wF: function () {
          return d;
        },
      });
      var a = n(70794),
        i = n(61744),
        s = n(2593);
      function r(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
        return new a.Z(i.formatUnits(e || s.O$.from(0), t)).toString();
      }
      function l(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        return new a.Z(i.formatUnits(e || s.O$.from(0), t)).toFixed(n);
      }
      function o(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          a =
            !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (null == e) return "";
        let i = "",
          s = Math.floor(e);
        return (e % 1 != 0
          ? (i = ".".concat(
              String(Math.round((e % 1) * 10 ** n)).padStart(n, "0")
            ))
          : n > 0 && t && a && (i = ".".concat(Array(n).fill(0).join(""))),
        e < 1e3)
          ? a
            ? "".concat(s).concat(i)
            : e.toString()
          : ""
              .concat(o(Math.floor(s / 1e3), t, n, !1), " ")
              .concat((s % 1e3).toString().padStart(3, "0"))
              .concat(i);
      }
      function d(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        if ("n/a" === e) return e;
        if (null == e) return "";
        let a = parseInt(e),
          i = parseFloat(e);
        return a === i ? o(a, t) : o(Number(i.toFixed(n)), t, n);
      }
      function u(e) {
        return e ? d(i.formatEther(e.value), !1, e.decimals) : "0";
      }
      function c(e) {
        if (!e) return "0";
        let t = Number(e.replace(/\s/g, "")),
          n = [
            { value: 1, symbol: "" },
            { value: 1e3, symbol: "K" },
            { value: 1e6, symbol: "M" },
            { value: 1e9, symbol: "G" },
            { value: 1e12, symbol: "T" },
            { value: 1e15, symbol: "P" },
            { value: 1e18, symbol: "E" },
          ]
            .reverse()
            .find(function (e) {
              return t >= e.value;
            });
        return n
          ? (t / n.value).toFixed(0).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") +
              n.symbol
          : "0";
      }
    },
    13123: function (e, t, n) {
      n.d(t, {
        a: function () {
          return a;
        },
      });
      function a(e) {
        if (!e) return "";
        let t = e.match(/^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/);
        return t ? t[1] + "…" + t[2] : e;
      }
    },
  },
]);
