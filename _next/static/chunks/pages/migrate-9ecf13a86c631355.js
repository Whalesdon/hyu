(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6722],
  {
    12645: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/migrate",
        function () {
          return n(65779);
        },
      ]);
    },
    70941: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return u;
        },
      });
      var a = n(85893),
        s = n(61227),
        l = n(33206),
        r = n(94184),
        i = n.n(r),
        d = n(67294),
        o = n(63328);
      let u = (e) => {
        let { excludeId: t, showMessage: n, className: r, validChains: u } = e,
          { isLoading: c, switchNetwork: m } = (0, o.g0)(),
          p = (0, d.useMemo)(() => (u && u.length > 0 ? u : l._I), [u]);
        return (0, a.jsxs)("div", {
          className: i()("flex flex-col justify-center gap-5", r),
          children: [
            n &&
              (0, a.jsx)("div", {
                className: "text-center text-2xl",
                children: "You are connected to the wrong network",
              }),
            (0, a.jsx)("div", {
              className:
                "flex flex-row flex-wrap items-center justify-center gap-3",
              children: p.map((e, n) =>
                null != t && t === e
                  ? null
                  : (0, a.jsxs)(
                      s.Z,
                      {
                        size: "md",
                        disabled: c,
                        onClick: () => (null == m ? void 0 : m(e)),
                        borderFullyRounded: !0,
                        children: ["Switch to ", (0, l.pp)(e)],
                      },
                      n
                    )
              ),
            }),
          ],
        });
      };
    },
    77268: function (e, t, n) {
      "use strict";
      var a = n(85893),
        s = n(33206),
        l = n(63496),
        r = n(94184),
        i = n.n(r),
        d = n(67294),
        o = n(63328),
        u = n(70941),
        c = n(73890),
        m = n(17831);
      let p = (e) => {
        let {
            className: t,
            children: n,
            validChains: r = s._I,
            showMessage: p = !0,
          } = e,
          x = (0, l.s)(),
          { isConnected: h, address: f } = (0, o.mA)(),
          v = (0, o.xx)(),
          b = (0, d.useMemo)(() => {
            if (v && x) return r.includes(v);
          }, [v, x, r]);
        return (0, a.jsx)("div", {
          className: i()("w-full flex flex-col items-center", t),
          children: x
            ? (0, a.jsx)(a.Fragment, {
                children: h
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        void 0 === b && !!f && (0, a.jsx)(m.Z, {}),
                        !1 == b &&
                          (0, a.jsx)(u.K, { showMessage: p, validChains: r }),
                        !0 === b && n,
                      ],
                    })
                  : (0, a.jsx)(c.R, {}),
              })
            : (0, a.jsx)(m.Z, {}),
        });
      };
      t.Z = p;
    },
    92695: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return r;
        },
      });
      var a = n(2593),
        s = n(67294);
      let l = Date.now();
      function r() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 5e3,
          [t, n] = (0, s.useState)(l),
          [r, i] = (0, s.useState)(a.O$.from(Math.floor(l / 1e3)));
        return (
          (0, s.useLayoutEffect)(() => {
            let t = setInterval(() => {
                let e = Date.now();
                n(e), i(a.O$.from(Math.floor(e / 1e3)));
              }, e),
              s = Date.now();
            return (
              n(s),
              i(a.O$.from(Math.floor(s / 1e3))),
              () => {
                t && clearInterval(t);
              }
            );
          }, [e]),
          { now: t, nowBn: r }
        );
      }
    },
    65779: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return F;
          },
        });
      var a = n(85893),
        s = n(66906),
        l = n(77268),
        r = n(33206),
        i = n(27192),
        d = n(63496),
        o = n(94184),
        u = n.n(o),
        c = n(63328),
        m = n(67294);
      let p = (0, m.createContext)(void 0);
      var x = n(92695),
        h = n(87521),
        f = n(5590),
        v = n(48583),
        b = n(32697),
        y = n(33209),
        g = n(61744),
        w = n(2593);
      let j = [
        {
          inputs: [
            { internalType: "address", name: "_gpt", type: "address" },
            { internalType: "address", name: "_lai", type: "address" },
            { internalType: "uint256", name: "_startTime", type: "uint256" },
            { internalType: "uint256", name: "_endTime", type: "uint256" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint256",
              name: "fromTime",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "toTime",
              type: "uint256",
            },
          ],
          name: "EndTimeChanged",
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
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Paused",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint256",
              name: "fromTime",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "toTime",
              type: "uint256",
            },
          ],
          name: "StartTimeChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "Swapped",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Unpaused",
          type: "event",
        },
        {
          inputs: [],
          name: "endTime",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "gpt",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "lai",
          outputs: [{ internalType: "address", name: "", type: "address" }],
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
          name: "paused",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
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
            { internalType: "uint256", name: "_endTime", type: "uint256" },
          ],
          name: "setEndTime",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_startTime", type: "uint256" },
          ],
          name: "setStartTime",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "startTime",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "swap",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "togglePause",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSwapped",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
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
          inputs: [
            { internalType: "address", name: "token", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];
      var N = n(25675),
        T = n.n(N);
      let M = (e) => {
        let { src: t, className: n } = e;
        return (0, a.jsx)("div", {
          className: u()("pointer-events-none absolute", n),
          children: (0, a.jsx)(T(), {
            src: t,
            alt: "capsule",
            className: "object-contain object-center",
            width: 500,
            height: 474,
          }),
        });
      };
      var _ = n(61227),
        k = n(40705);
      let A = (e, t, n) =>
        t
          ? String(n ? Math.round(e) : Math.floor(e)).padStart(2, "0")
          : String(Math.floor(e));
      function E(e, t) {
        if (!e)
          return {
            days: "-",
            hours: "-",
            minutes: "-",
            seconds: "-",
            ended: !1,
          };
        let n = Date.now(),
          a = Math.floor((e.getTime() - n) / 1e3);
        if (a < 1)
          return {
            days: A(0, t),
            hours: A(0, t),
            minutes: A(0, t),
            seconds: A(0, t),
            ended: !0,
          };
        let s = a / 86400,
          l = (s % 1) * 24,
          r = (l % 1) * 60;
        return {
          days: A(Math.max(0, s), t),
          hours: A(Math.max(0, l), t),
          minutes: A(Math.max(0, r), t),
          seconds: A(Math.max(0, (r % 1) * 60), t, !0),
          ended: !1,
        };
      }
      let S = (e) => {
        let {
            dateTime: t,
            className: n,
            classNameItem: s,
            showFullZeroes: l = !1,
            hideIfEnded: r = !0,
          } = e,
          {
            days: i,
            hours: d,
            minutes: o,
            seconds: c,
            ended: p,
          } = (function (e) {
            let { dateTime: t, updateInterval: n = 1e3, zeroPad: a = !0 } = e,
              [s, l] = (0, m.useState)(E(t, a).days),
              [r, i] = (0, m.useState)(E(t, a).hours),
              [d, o] = (0, m.useState)(E(t, a).minutes),
              [u, c] = (0, m.useState)(E(t, a).seconds),
              [p, x] = (0, m.useState)(E(t, a).ended);
            return (
              (0, m.useEffect)(() => {
                if (!t) return;
                let e = setInterval(() => {
                  let {
                    days: n,
                    hours: s,
                    minutes: r,
                    seconds: d,
                    ended: u,
                  } = E(t, a);
                  l(n), i(s), o(r), c(d), x(u), u && clearInterval(e);
                }, n);
                return () => {
                  clearInterval(e);
                };
              }, [t, n, a]),
              { days: s, hours: r, minutes: d, seconds: u, ended: p }
            );
          })({ dateTime: t, updateInterval: 1e3, zeroPad: !0 });
        return r && p
          ? null
          : (0, a.jsxs)("div", {
              className: u()(n),
              children: [
                (l || Number(i) > 0) &&
                  (0, a.jsxs)("span", {
                    className: u()(s),
                    children: [i, "d"],
                  }),
                (l || Number(i) > 0 || Number(d) > 0) &&
                  (0, a.jsxs)("span", {
                    className: u()(s),
                    children: [d, "h"],
                  }),
                (l || Number(i) > 0 || Number(d) > 0 || Number(o) > 0) &&
                  (0, a.jsxs)("span", {
                    className: u()(s),
                    children: [o, "m"],
                  }),
                (l ||
                  Number(i) > 0 ||
                  Number(d) > 0 ||
                  Number(o) > 0 ||
                  Number(c) > 0) &&
                  (0, a.jsxs)("span", {
                    className: u()(s),
                    children: [c, "s"],
                  }),
              ],
            });
      };
      var I = n(11441);
      n(51680), n(41664);
      let C = (e) => {
        let { className: t, classNameWrapper: n } = e,
          {
            gptBalance: s,
            laiBalance: l,
            refetchGptBalance: r,
            refetchLaiBalance: i,
            swapAmount: d,
            setSwapAmount: o,
            swapError: c,
            swapLoading: x,
            approvalLoading: h,
            isApproved: f,
            handleApproveAction: v,
            handleSwapAction: b,
            canSwap: y,
            started: w,
            startTime: j,
            errorAmount: N,
          } = (0, m.useContext)(p),
          T = (0, m.useCallback)(
            (e, t) =>
              e
                ? ""
                    .concat((0, I.wF)(g.formatEther(e), !1), " ")
                    .concat(null != t ? t : "")
                : "",
            []
          ),
          M = (0, m.useCallback)((e) => o(g.formatEther(e).toString()), [o]),
          A = (0, m.useMemo)(() => (j ? new Date(1e3 * j) : void 0), [j]);
        return (0, a.jsx)("div", {
          className: "relative pb-[100px]",
          children: (0, a.jsx)("div", {
            className: u()(
              "mt-[20px] md:p-[20px] md:border md:border-theme-main rounded-[30px] md:rounded-full md:bg-[#0E0F11]",
              n
            ),
            children: (0, a.jsxs)("div", {
              className: u()(
                "grid grid-cols-1 gap-[28px] md:grid-cols-[minmax(400px,_1fr)_197px] lg:grid-cols-[minmax(400px,_1fr)_197px]",
                t
              ),
              children: [
                (0, a.jsx)("div", {
                  className:
                    "min-h-[255px] rounded-[22px] py-[21px] md:py-0 md:pr-[25px] md:pl-[75px] sm:min-h-[237px] md:min-h-[197px] border border-theme-main md:border-0 bg-[#0E0F11] md:bg-transparent px-[20px]",
                  children: (0, a.jsxs)("div", {
                    className:
                      "flex w-full h-full flex-col text-theme-main-white",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex w-full flex-col md:flex-row-reverse md:items-start md:gap-2",
                        children: [
                          !1,
                          (0, a.jsxs)("h6", {
                            className:
                              "flex-auto text-[#828282] sm:whitespace-nowrap",
                            children: [
                              "Enter ",
                              null == s ? void 0 : s.symbol,
                              " amount to migrate to",
                              " ",
                              null == l ? void 0 : l.symbol,
                              ":",
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "relative flex flex-col break-words flex-auto",
                        children: [
                          (0, a.jsx)("div", {
                            className: "flex flex-col flex-auto justify-center",
                            children: (0, a.jsxs)("div", {
                              className: "relative",
                              children: [
                                (0, a.jsx)("input", {
                                  className: u()(
                                    "rounded-lg appearance-none border-none bg-transparent py-3 text-5xl font-bold leading-none focus:outline-0 sm:py-5 w-full",
                                    {
                                      "text-white": !c && !N,
                                      "text-red-600": !!c || !!N,
                                    }
                                  ),
                                  type: "number",
                                  min: "0",
                                  value: d,
                                  placeholder: "0",
                                  disabled: x || h,
                                  onChange: (e) => {
                                    var t;
                                    let {
                                        target: { value: n },
                                      } = e,
                                      a = n.split(".")[1];
                                    (a &&
                                      a.length >
                                        (null !==
                                          (t =
                                            null == s ? void 0 : s.decimals) &&
                                        void 0 !== t
                                          ? t
                                          : 18)) ||
                                      o(n);
                                  },
                                }),
                                !!c &&
                                  (0, a.jsx)("p", {
                                    className:
                                      "absolute top-[62px] md:top-[70px] left-0 text-[13px] text-red-600",
                                    children: null == c ? void 0 : c.message,
                                  }),
                                !!N &&
                                  (0, a.jsx)("p", {
                                    className:
                                      "absolute top-[62px] md:top-[70px] left-0 text-[13px] text-red-600",
                                    children: N,
                                  }),
                              ],
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex flex-none flex-col justify-end",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "grid grid-cols-1 md:grid-cols-2 md:gap-[10px]",
                                children: [
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsxs)("p", {
                                        children: [
                                          "GPT Balance:",
                                          " ",
                                          s ? T(s.value, s.symbol) : "N/A",
                                        ],
                                      }),
                                      (0, a.jsx)(k.Z, {
                                        variant: "theme-main",
                                        fontVariant: "bold",
                                        onClick: () =>
                                          M(null == s ? void 0 : s.value),
                                        children: "Migrate All",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("p", {
                                    className: "md:text-right",
                                    children: [
                                      "LAI Balance:",
                                      " ",
                                      l ? T(l.value, l.symbol) : "N/A",
                                    ],
                                  }),
                                ],
                              }),
                              !1,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "flex flex-col gap-[28px] items-center",
                  children: f
                    ? (0, a.jsxs)(_.Z, {
                        onClick: b,
                        loading: x,
                        disabled: !!N || !y || 0 >= Number(d),
                        className:
                          "flex-auto !w-[197px] !h-[197px] !rounded-full flex flex-col items-center justify-center gap-[5px]",
                        children: [
                          (0, a.jsx)("span", {
                            className: "block",
                            children: "Migrate",
                          }),
                          !w &&
                            (0, a.jsx)(S, {
                              className:
                                "flex items-center text-[0.9em] gap-[4px]",
                              dateTime: A,
                            }),
                        ],
                      })
                    : (0, a.jsx)(_.Z, {
                        onClick: v,
                        loading: h,
                        disabled: !!N || f || 0 >= Number(d),
                        className:
                          "flex-auto !w-[197px] !h-[197px] !rounded-full",
                        children: "Approve",
                      }),
                }),
              ],
            }),
          }),
        });
      };
      var P = n(73890),
        L = n(61234);
      let O = (e) => {
          let { address: t, chainId: n } = e,
            { addToken: s } = (function (e) {
              let {
                  address: t,
                  chainId: n,
                  showModalError: a,
                  showModalSuccess: s,
                } = e,
                { address: l } = (0, c.mA)(),
                { openConnectModal: i } = (0, L.We)(),
                d = (0, v.b9)(h.Q6),
                o = (0, v.b9)(h.HP),
                u = (0, c.xx)(),
                { data: p } = (0, c.dQ)({ chainId: n, address: t }),
                x = (0, m.useCallback)(async () => {
                  if (p)
                    try {
                      var e;
                      let t = await (null == window
                        ? void 0
                        : null === (e = window.ethereum) || void 0 === e
                        ? void 0
                        : e.request({
                            method: "wallet_watchAsset",
                            params: {
                              type: "ERC20",
                              options: {
                                address: p.address,
                                symbol: p.symbol,
                                decimals: p.decimals,
                                image: (0, r.qF)((0, r.B7)(p.symbol)),
                              },
                            },
                          }));
                      t &&
                        s &&
                        d((e) => ({
                          ...e,
                          open: !0,
                          message: "Imported token ".concat(p.symbol),
                        })),
                        !t &&
                          a &&
                          o((e) => ({
                            ...e,
                            open: !0,
                            message: "Did not import token ".concat(p.symbol),
                          }));
                    } catch (e) {
                      a && o((t) => ({ ...t, open: !0, message: (0, f.W)(e) }));
                    }
                }, [p, o, d, a, s]),
                { switchNetwork: b } = (0, c.g0)({
                  chainId: n,
                  onSuccess: x,
                  onError(e) {
                    a && o((t) => ({ ...t, open: !0, message: (0, f.W)(e) }));
                  },
                }),
                [y, g] = (0, m.useState)(!1),
                w = (0, m.useCallback)(async () => {
                  if (!l) {
                    null == i || i(), g(!0);
                    return;
                  }
                  if (u !== n) {
                    null == b || b();
                    return;
                  }
                  x();
                }, [l, i, b, n, u, x]);
              return (
                (0, m.useEffect)(() => {
                  y && (g(!1), w());
                }, [y, w]),
                { addToken: w }
              );
            })({
              address: t,
              chainId: n,
              showModalError: !0,
              showModalSuccess: !0,
            });
          return (0, a.jsxs)("div", {
            className:
              "flex items-center border border-theme-main rounded-[20px] overflow-hidden",
            children: [
              (0, a.jsx)("span", {
                className: "flex-none px-[8px] opacity-70",
                children: (0, r.vs)(n),
              }),
              (0, a.jsx)("span", {
                className:
                  "text-center text-[11px] flex-auto bg-transparent border-none text-[#fff] text-ellipsis overflow-hidden font-['Roboto_Mono']",
                children: t,
              }),
              (0, a.jsx)("button", {
                onClick: s,
                className:
                  "flex-none text-theme-main hover:bg-theme-main hover:text-[#000] pr-[10px] pl-[6px] pt-[3px] pb-[4px] border-l border-l-theme-main",
                children: "Add to Wallet",
              }),
            ],
          });
        },
        B = (e) => {
          let { className: t } = e,
            { address: n } = (0, c.mA)(),
            s = (0, d.s)();
          return (0, a.jsx)("div", {
            className: t,
            children: (0, a.jsxs)("div", {
              className: u()(
                "flex flex-col items-center justify-center pb-[40px]  pt-[40px] mx-auto font-bold rounded-[24px] shadow-[inset_0px_0px_50px_rgba(0,0,0,0.2)] bg-[#15161AEE] max-w-[544px] z-10 relative",
                { "md:pb-[80px] mb-[40px] md:mb-[-50px]": s && !!n }
              ),
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "px-[15px] sm:px-[20px] font-normal grid grid-cols-1 gap-[5px]",
                  children: [
                    (0, a.jsx)("p", {
                      className: "text-center mt-[10px]",
                      children:
                        "LayerAI Begins the Final Stage of the Rebrand: Migrate Old GPT to New LAI.",
                    }),
                    (0, a.jsxs)("p", {
                      className: "text-center mt-[10px]",
                      children: [
                        "The final stage of our rebrand involves the migration of the token",
                        "'",
                        "s smart contract.",
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-center",
                          children: "The new token contracts",
                        }),
                        (0, a.jsxs)("div", {
                          className: "grid grid-cols-1 gap-[4px] mt-[5px]",
                          children: [
                            (0, a.jsx)(O, {
                              address: i.re[r.a_.Mainnet].tokenMigratedAddress,
                              chainId: r.a_.Mainnet,
                            }),
                            (0, a.jsx)(O, {
                              address: i.re[r.a_.Binance].tokenMigratedAddress,
                              chainId: r.a_.Binance,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("p", {
                      className: "text-center mt-[10px]",
                      children:
                        "Connect your wallet below in order to migrate the old token for the new token. The old token will be burned in the process and you will receive the new token.",
                    }),
                    (0, a.jsxs)("p", {
                      className: "text-center",
                      children: [
                        "This is a crucial step for the future of",
                        " ",
                        (0, a.jsx)("span", {
                          className: "text-theme-main",
                          children: "LayerAI",
                        }),
                        " to remove any vulnerabilities associated with the Multichain bridge.",
                      ],
                    }),
                  ],
                }),
                s && !n && (0, a.jsx)(P.R, { className: "mt-[20px]" }),
              ],
            }),
          });
        },
        G = (e) => {
          var t;
          let { className: n } = e,
            s = (function () {
              let { chainId: e } =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = (0, c.xx)({ chainId: e }),
                n = (function (e) {
                  let { chainId: t } = e;
                  return (0, m.useMemo)(() => {
                    var e, n;
                    if (t)
                      return null === (e = i.re[t]) || void 0 === e
                        ? void 0
                        : null === (n = e.gptMigrate) || void 0 === n
                        ? void 0
                        : n.contract;
                  }, [t]);
                })({ chainId: t }),
                { data: a } = (0, c.do)({
                  abi: j,
                  address: n,
                  enabled: !!n,
                  functionName: "gpt",
                }),
                { data: s } = (0, c.do)({
                  abi: j,
                  address: n,
                  enabled: !!n,
                  functionName: "lai",
                }),
                { data: l } = (0, c.do)({
                  abi: j,
                  address: n,
                  enabled: !!n,
                  functionName: "endTime",
                }),
                { data: r } = (0, c.do)({
                  abi: j,
                  address: n,
                  enabled: !!n,
                  functionName: "startTime",
                }),
                { data: d } = (0, c.do)({
                  abi: j,
                  address: n,
                  enabled: !!n,
                  functionName: "paused",
                }),
                { data: o } = (0, c.do)({
                  abi: j,
                  address: n,
                  enabled: !!n,
                  functionName: "totalSwapped",
                }),
                { balance: u, refetchBalance: p } = (0, y.G)({
                  tokenAddress: a,
                  chainId: t,
                }),
                { balance: N, refetchBalance: T } = (0, y.G)({
                  tokenAddress: s,
                  chainId: t,
                }),
                [M, _] = (0, m.useState)(""),
                k = (0, m.useMemo)(() => {
                  var e;
                  return g.parseUnits(
                    M || "0",
                    null !== (e = null == u ? void 0 : u.decimals) &&
                      void 0 !== e
                      ? e
                      : 18
                  );
                }, [M, u]),
                {
                  approveNeeded: A,
                  approve: E,
                  approveLoading: S,
                } = (function (e) {
                  let {
                      chainId: t,
                      tokenAddress: n,
                      spenderAddress: a,
                      amountToApprove: s,
                      showModalOnError: l,
                      showModalOnSuccess: r,
                      onSuccess: i,
                      onError: d,
                    } = e,
                    { address: o } = (0, c.mA)(),
                    u = (0, v.b9)(h.Q6),
                    p = (0, v.b9)(h.HP),
                    x = (0, c.xx)({ chainId: t }),
                    { data: y, refetch: g } = (0, c.do)({
                      address: n,
                      abi: b.em,
                      functionName: "allowance",
                      args: [o, a],
                      enabled: !!o && !!n && !!a,
                    }),
                    w = (0, m.useMemo)(() => !y || (!!s && y.lt(s)), [y, s]),
                    { config: j } = (0, c.PJ)({
                      address: n,
                      abi: b.em,
                      chainId: x,
                      functionName: "approve",
                      enabled: w && !!n && !!a && !!s,
                      args: [a, s],
                    }),
                    {
                      data: N,
                      write: T,
                      isLoading: M,
                    } = (0, c.GG)({
                      ...j,
                      onError(e) {
                        l && p({ open: !0, message: (0, f.W)(e) }),
                          null == d || d(e),
                          g();
                      },
                    }),
                    { isLoading: _ } = (0, c.BX)({
                      hash: null == N ? void 0 : N.hash,
                      enabled: !!N && !!N.hash,
                      onSuccess() {
                        r && u({ open: !0, message: "Approved!" }),
                          null == i || i(),
                          g();
                      },
                      onError(e) {
                        l && p({ open: !0, message: (0, f.W)(e) }),
                          null == d || d(e),
                          g();
                      },
                    });
                  return {
                    allowance: y,
                    approveNeeded: w,
                    approve: T,
                    approveLoading: M || _,
                  };
                })({
                  chainId: t,
                  tokenAddress: a,
                  spenderAddress: n,
                  amountToApprove: k,
                  showModalOnError: !0,
                }),
                I = (0, m.useMemo)(() => (r ? new Date(1e3 * r) : void 0), [r]),
                C = (0, m.useMemo)(() => (l ? new Date(1e3 * l) : void 0), [l]),
                { started: P, inBetween: L } = (function (e) {
                  let { startTime: t, endTime: n } = e,
                    a = (0, m.useMemo)(
                      () => (null == t ? void 0 : t.getTime()),
                      [t]
                    ),
                    s = (0, m.useMemo)(
                      () => (null == n ? void 0 : n.getTime()),
                      [n]
                    ),
                    { now: l } = (0, x.m)(1e3),
                    r = (0, m.useMemo)(() => a && l >= a, [l, a]),
                    i = (0, m.useMemo)(() => s && l > s, [l, s]);
                  return { started: r, ended: i, inBetween: a && s && r && !i };
                })({ startTime: I, endTime: C }),
                O = (0, m.useMemo)(() => {
                  var e;
                  if (M && u)
                    return g.parseUnits(
                      M,
                      null !== (e = null == u ? void 0 : u.decimals) &&
                        void 0 !== e
                        ? e
                        : 18
                    );
                }, [u, M]),
                B = (0, m.useMemo)(
                  () => !d && u && !A && O && O.gt(0) && u.value.gte(O) && L,
                  [d, A, O, u, L]
                ),
                { config: G } = (0, c.PJ)({
                  address: n,
                  chainId: t,
                  enabled: !!B,
                  abi: j,
                  functionName: "swap",
                  args: [k],
                }),
                Z = (0, v.b9)(h.HP),
                D = (0, v.b9)(h.Q6),
                {
                  data: W,
                  write: F,
                  isLoading: z,
                  error: R,
                } = (0, c.GG)({
                  ...G,
                  onError(e) {
                    Z({ open: !0, message: (0, f.W)(e) }), T();
                  },
                }),
                { isLoading: q, error: Q } = (0, c.BX)({
                  hash: null == W ? void 0 : W.hash,
                  enabled: !!W && !!W.hash,
                  onSuccess() {
                    D({
                      open: !0,
                      message: "Migrated ".concat(M, " GPT to LAI!"),
                    }),
                      p(),
                      T(),
                      _("");
                  },
                  onError(e) {
                    Z({ open: !0, message: (0, f.W)(e) }), T();
                  },
                }),
                X = (0, m.useMemo)(
                  () =>
                    isNaN(Number(M))
                      ? "Not a number"
                      : (null == O ? void 0 : O.lt(w.O$.from(0)))
                      ? "Cannot be negative"
                      : u && O && u.value.lt(O)
                      ? "Amount bigger than balance"
                      : void 0,
                  [u, O, M]
                );
              return {
                gptAddress: a,
                laiAddress: s,
                gptBalance: u,
                refetchGptBalance: p,
                laiBalance: N,
                refetchLaiBalance: T,
                totalSwapped: o,
                startTime: r,
                endTime: l,
                paused: d,
                swapAmount: M,
                setSwapAmount: _,
                swapLoading: z || q,
                swapError: null != R ? R : Q,
                approvalLoading: S,
                isApproved: !A,
                handleApproveAction: E,
                handleSwapAction: F,
                canSwap: B,
                inBetween: L,
                started: P,
                errorAmount: X,
              };
            })(),
            o =
              null !==
                (t = r._I.filter((e) => {
                  var t, n;
                  return !!(null === i.re || void 0 === i.re
                    ? void 0
                    : null === (t = i.re[e]) || void 0 === t
                    ? void 0
                    : null === (n = t.gptMigrate) || void 0 === n
                    ? void 0
                    : n.contract);
                })) && void 0 !== t
                ? t
                : [],
            { address: N } = (0, c.mA)(),
            T = (0, d.s)();
          return (0, a.jsx)("div", {
            className: u()("bg-[#1E1E1E]", n),
            children: (0, a.jsxs)("div", {
              className: "container relative",
              children: [
                (0, a.jsx)(M, {
                  src: "./images/capsules/01.webp",
                  className:
                    "top-[-70px] w-[200px] md:w-[350px] left-[-50px] lg:left-[15px] rotate-[80deg]",
                }),
                (0, a.jsx)(M, {
                  src: "./images/capsules/02.webp",
                  className:
                    "top-[-70px] w-[150px] md:w-[250px] right-[-50px] lg:right-[15px] rotate-[15deg]",
                }),
                (0, a.jsx)(M, {
                  src: "../../../../images/capsules/05.webp",
                  className:
                    "top-[200px] w-[120px] md:w-[180px] right-[-50px] lg:right-[-50px] rotate-[70deg]",
                }),
                (0, a.jsx)(B, {
                  className: u()("pt-[50px]", {
                    "mb-[-50px]": T && !!N,
                    "pb-[50px]": T && !N,
                  }),
                }),
                T &&
                  !!N &&
                  (0, a.jsx)(l.Z, {
                    className:
                      "relative min-h-[250px] z-10 justify-center w-full",
                    validChains: o,
                    children: (0, a.jsx)(p.Provider, {
                      value: s,
                      children: (0, a.jsx)(C, {}),
                    }),
                  }),
              ],
            }),
          });
        },
        Z = () => {
          let { openConnectModal: e } = (0, L.We)(),
            { address: t } = (0, c.mA)(),
            [n, s] = (0, m.useState)(!1),
            l = (0, m.useCallback)(() => {
              let e = document.querySelector("input");
              if (!e) return;
              e.scrollIntoView({ behavior: "smooth", block: "center" });
              let t = setTimeout(() => {
                e && e.focus();
              }, 500);
              return () => {
                t && clearTimeout(t);
              };
            }, []),
            r = (0, m.useCallback)(() => {
              if (!t && e) {
                e(), s(!0);
                return;
              }
              l();
            }, [t, e, l]);
          return (
            (0, m.useEffect)(() => {
              if (!t || !n) return;
              let e = setTimeout(() => {
                l();
              }, 100);
              return () => {
                e && clearTimeout(e);
              };
            }, [t, n, l]),
            (0, a.jsxs)("div", {
              className:
                "relative flex min-h-[50vh] md:h-[40vh] md:landscape:min-h-[600px] flex-col justify-end overflow-hidden",
              children: [
                (0, a.jsx)("video", {
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  playsInline: !0,
                  disablePictureInPicture: !0,
                  className:
                    "object-cover object-center absolute top-0 right-0 bottom-0 left-0 w-full h-full",
                  children: (0, a.jsx)("source", {
                    src: "/videos/capsule_1080p_2000.mp4",
                    type: "video/mp4",
                  }),
                }),
                (0, a.jsx)("div", {
                  className:
                    "relative md:absolute bottom-0 top-0 flex flex-col items-center justify-center w-full",
                  children: (0, a.jsx)("div", {
                    className:
                      "container pt-[170px] md:pt-[50px] pb-[30px] md:pb-[110px]",
                    children: (0, a.jsxs)("h1", {
                      className:
                        "h0 font-title font-extrabold text-center leading-[1.2em]",
                      children: [
                        "Migrate ",
                        (0, a.jsx)("span", {
                          className: "text-theme-main",
                          children: "GPT",
                        }),
                        " to",
                        " ",
                        (0, a.jsx)("span", {
                          className: "text-theme-main",
                          children: "LAI",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)("div", {
                  className:
                    "flex flex-col items-center pb-[70px] md:pb-[100px]",
                  children: (0, a.jsx)("div", {
                    className: "relative z-10",
                    children: (0, a.jsx)(_.Z, {
                      addBottomArrow: !0,
                      onClick: () => {},
                      size: "xxl",
                      children: "Migrate Now",
                    }),
                  }),
                }),
              ],
            })
          );
        };
      var D = n(90505);
      let W = () => {
        let [e, t] = (0, v.KO)(D.D);
        return (
          (0, m.useEffect)(() => {
            if (!e || !document) return;
            let n = setTimeout(() => {
              let e = document.querySelector("input");
              null == e || e.focus(), t(!1);
            }, 100);
            return () => {
              clearTimeout(n);
            };
          }, [e, t]),
          (0, a.jsxs)(s.Z, {
            title: "Migrate",
            children: [
              (0, a.jsx)(Z, {}),
              (0, a.jsx)("div", {
                className:
                  "flex flex-grow flex-col justify-between md:flex-col-reverse md:justify-end",
                children: (0, a.jsx)(G, {}),
              }),
            ],
          })
        );
      };
      var F = W;
    },
  },
  function (e) {
    e.O(0, [5048, 6906, 9774, 2888, 179], function () {
      return e((e.s = 12645));
    }),
      (_N_E = e.O());
  },
]);
