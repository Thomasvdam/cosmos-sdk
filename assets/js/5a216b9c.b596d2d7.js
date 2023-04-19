"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[7263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,h=m["".concat(o,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={},s="ADR 045: BaseApp {Check,Deliver}Tx as Middlewares",l={unversionedId:"architecture/adr-045-check-delivertx-middlewares",id:"architecture/adr-045-check-delivertx-middlewares",title:"ADR 045: BaseApp {Check,Deliver}Tx as Middlewares",description:"Changelog",source:"@site/docs/architecture/adr-045-check-delivertx-middlewares.md",sourceDirName:"architecture",slug:"/architecture/adr-045-check-delivertx-middlewares",permalink:"/main/architecture/adr-045-check-delivertx-middlewares",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADR 044: Guidelines for Updating Protobuf Definitions",permalink:"/main/architecture/adr-044-protobuf-updates-guidelines"},next:{title:"ADR 046: Module Params",permalink:"/main/architecture/adr-046-module-params"}},o={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Implementing a Middleware",id:"implementing-a-middleware",level:3},{value:"Composing Middlewares",id:"composing-middlewares",level:3},{value:"Middlewares Maintained by the Cosmos SDK",id:"middlewares-maintained-by-the-cosmos-sdk",level:3},{value:"Similarities and Differences between Antehandlers and Middlewares",id:"similarities-and-differences-between-antehandlers-and-middlewares",level:3},{value:"Similarities with Antehandlers",id:"similarities-with-antehandlers",level:4},{value:"Differences with Antehandlers",id:"differences-with-antehandlers",level:4},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"Test Cases",id:"test-cases",level:2},{value:"References",id:"references",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adr-045-baseapp-checkdelivertx-as-middlewares"},"ADR 045: BaseApp ",(0,r.kt)("inlineCode",{parentName:"h1"},"{Check,Deliver}Tx")," as Middlewares"),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"20.08.2021: Initial draft."),(0,r.kt)("li",{parentName:"ul"},"07.12.2021: Update ",(0,r.kt)("inlineCode",{parentName:"li"},"tx.Handler")," interface (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/10693"},"#","10693"),")."),(0,r.kt)("li",{parentName:"ul"},"17.05.2022: ADR is abandoned, as middlewares are deemed too hard to reason about.")),(0,r.kt)("h2",{id:"status"},"Status"),(0,r.kt)("p",null,"ABANDONED. Replacement is being discussed in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/11955"},"#11955"),"."),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"This ADR replaces the current BaseApp ",(0,r.kt)("inlineCode",{parentName:"p"},"runTx")," and antehandlers design with a middleware-based design."),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"BaseApp's implementation of ABCI ",(0,r.kt)("inlineCode",{parentName:"p"},"{Check,Deliver}Tx()")," and its own ",(0,r.kt)("inlineCode",{parentName:"p"},"Simulate()")," method call the ",(0,r.kt)("inlineCode",{parentName:"p"},"runTx")," method under the hood, which first runs antehandlers, then executes ",(0,r.kt)("inlineCode",{parentName:"p"},"Msg"),"s. However, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/9406"},"transaction Tips")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/2150"},"refunding unused gas")," use cases require custom logic to be run after the ",(0,r.kt)("inlineCode",{parentName:"p"},"Msg"),"s execution. There is currently no way to achieve this."),(0,r.kt)("p",null,"An naive solution would be to add post-",(0,r.kt)("inlineCode",{parentName:"p"},"Msg")," hooks to BaseApp. However, the Cosmos SDK team thinks in parallel about the bigger picture of making app wiring simpler (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/discussions/9182"},"#9181"),"), which includes making BaseApp more lightweight and modular."),(0,r.kt)("h2",{id:"decision"},"Decision"),(0,r.kt)("p",null,"We decide to transform Baseapp's implementation of ABCI ",(0,r.kt)("inlineCode",{parentName:"p"},"{Check,Deliver}Tx")," and its own ",(0,r.kt)("inlineCode",{parentName:"p"},"Simulate")," methods to use a middleware-based design."),(0,r.kt)("p",null,"The two following interfaces are the base of the middleware design, and are defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"types/tx"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Handler interface {\n    CheckTx(ctx context.Context, req Request, checkReq RequestCheckTx) (Response, ResponseCheckTx, error)\n    DeliverTx(ctx context.Context, req Request) (Response, error)\n    SimulateTx(ctx context.Context, req Request (Response, error)\n}\n\ntype Middleware func(Handler) Handler\n")),(0,r.kt)("p",null,"where we define the following arguments and return types:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Request struct {\n    Tx      sdk.Tx\n    TxBytes []byte\n}\n\ntype Response struct {\n    GasWanted uint64\n    GasUsed   uint64\n    // MsgResponses is an array containing each Msg service handler's response\n    // type, packed in an Any. This will get proto-serialized into the `Data` field\n    // in the ABCI Check/DeliverTx responses.\n    MsgResponses []*codectypes.Any\n    Log          string\n    Events       []abci.Event\n}\n\ntype RequestCheckTx struct {\n    Type abci.CheckTxType\n}\n\ntype ResponseCheckTx struct {\n    Priority int64\n}\n")),(0,r.kt)("p",null,"Please note that because CheckTx handles separate logic related to mempool priotization, its signature is different than DeliverTx and SimulateTx."),(0,r.kt)("p",null,"BaseApp holds a reference to a ",(0,r.kt)("inlineCode",{parentName:"p"},"tx.Handler"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type BaseApp  struct {\n    // other fields\n    txHandler tx.Handler\n}\n")),(0,r.kt)("p",null,"Baseapp's ABCI ",(0,r.kt)("inlineCode",{parentName:"p"},"{Check,Deliver}Tx()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Simulate()")," methods simply call ",(0,r.kt)("inlineCode",{parentName:"p"},"app.txHandler.{Check,Deliver,Simulate}Tx()")," with the relevant arguments. For example, for ",(0,r.kt)("inlineCode",{parentName:"p"},"DeliverTx"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func (app *BaseApp) DeliverTx(req abci.RequestDeliverTx) abci.ResponseDeliverTx {\n    var abciRes abci.ResponseDeliverTx\n    ctx := app.getContextForTx(runTxModeDeliver, req.Tx)\n    res, err := app.txHandler.DeliverTx(ctx, tx.Request{TxBytes: req.Tx})\n    if err != nil {\n        abciRes = sdkerrors.ResponseDeliverTx(err, uint64(res.GasUsed), uint64(res.GasWanted), app.trace)\n        return abciRes\n    }\n\n    abciRes, err = convertTxResponseToDeliverTx(res)\n    if err != nil {\n        return sdkerrors.ResponseDeliverTx(err, uint64(res.GasUsed), uint64(res.GasWanted), app.trace)\n    }\n\n    return abciRes\n}\n\n// convertTxResponseToDeliverTx converts a tx.Response into a abci.ResponseDeliverTx.\nfunc convertTxResponseToDeliverTx(txRes tx.Response) (abci.ResponseDeliverTx, error) {\n    data, err := makeABCIData(txRes)\n    if err != nil {\n        return abci.ResponseDeliverTx{}, nil\n    }\n\n    return abci.ResponseDeliverTx{\n        Data:   data,\n        Log:    txRes.Log,\n        Events: txRes.Events,\n    }, nil\n}\n\n// makeABCIData generates the Data field to be sent to ABCI Check/DeliverTx.\nfunc makeABCIData(txRes tx.Response) ([]byte, error) {\n    return proto.Marshal(&sdk.TxMsgData{MsgResponses: txRes.MsgResponses})\n}\n")),(0,r.kt)("p",null,"The implementations are similar for ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseApp.CheckTx")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseApp.Simulate"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"baseapp.txHandler"),"'s three methods' implementations can obviously be monolithic functions, but for modularity we propose a middleware composition design, where a middleware is simply a function that takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"tx.Handler"),", and returns another ",(0,r.kt)("inlineCode",{parentName:"p"},"tx.Handler")," wrapped around the previous one."),(0,r.kt)("h3",{id:"implementing-a-middleware"},"Implementing a Middleware"),(0,r.kt)("p",null,"In practice, middlewares are created by Go function that takes as arguments some parameters needed for the middleware, and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"tx.Middleware"),"."),(0,r.kt)("p",null,"For example, for creating an arbitrary ",(0,r.kt)("inlineCode",{parentName:"p"},"MyMiddleware"),", we can implement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// myTxHandler is the tx.Handler of this middleware. Note that it holds a\n// reference to the next tx.Handler in the stack.\ntype myTxHandler struct {\n    // next is the next tx.Handler in the middleware stack.\n    next tx.Handler\n    // some other fields that are relevant to the middleware can be added here\n}\n\n// NewMyMiddleware returns a middleware that does this and that.\nfunc NewMyMiddleware(arg1, arg2) tx.Middleware {\n    return func (txh tx.Handler) tx.Handler {\n        return myTxHandler{\n            next: txh,\n            // optionally, set arg1, arg2... if they are needed in the middleware\n        }\n    }\n}\n\n// Assert myTxHandler is a tx.Handler.\nvar _ tx.Handler = myTxHandler{}\n\nfunc (h myTxHandler) CheckTx(ctx context.Context, req Request, checkReq RequestcheckTx) (Response, ResponseCheckTx, error) {\n    // CheckTx specific pre-processing logic\n\n    // run the next middleware\n    res, checkRes, err := txh.next.CheckTx(ctx, req, checkReq)\n\n    // CheckTx specific post-processing logic\n\n    return res, checkRes, err\n}\n\nfunc (h myTxHandler) DeliverTx(ctx context.Context, req Request) (Response, error) {\n    // DeliverTx specific pre-processing logic\n\n    // run the next middleware\n    res, err := txh.next.DeliverTx(ctx, tx, req)\n\n    // DeliverTx specific post-processing logic\n\n    return res, err\n}\n\nfunc (h myTxHandler) SimulateTx(ctx context.Context, req Request) (Response, error) {\n    // SimulateTx specific pre-processing logic\n\n    // run the next middleware\n    res, err := txh.next.SimulateTx(ctx, tx, req)\n\n    // SimulateTx specific post-processing logic\n\n    return res, err\n}\n")),(0,r.kt)("h3",{id:"composing-middlewares"},"Composing Middlewares"),(0,r.kt)("p",null,"While BaseApp simply holds a reference to a ",(0,r.kt)("inlineCode",{parentName:"p"},"tx.Handler"),", this ",(0,r.kt)("inlineCode",{parentName:"p"},"tx.Handler")," itself is defined using a middleware stack. The Cosmos SDK exposes a base (i.e. innermost) ",(0,r.kt)("inlineCode",{parentName:"p"},"tx.Handler")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"RunMsgsTxHandler"),", which executes messages."),(0,r.kt)("p",null,"Then, the app developer can compose multiple middlewares on top on the base ",(0,r.kt)("inlineCode",{parentName:"p"},"tx.Handler"),". Each middleware can run pre-and-post-processing logic around its next middleware, as described in the section above. Conceptually, as an example, given the middlewares ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"C")," and the base ",(0,r.kt)("inlineCode",{parentName:"p"},"tx.Handler")," ",(0,r.kt)("inlineCode",{parentName:"p"},"H")," the stack looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"A.pre\n    B.pre\n        C.pre\n            H # The base tx.handler, for example `RunMsgsTxHandler`\n        C.post\n    B.post\nA.post\n")),(0,r.kt)("p",null,"We define a ",(0,r.kt)("inlineCode",{parentName:"p"},"ComposeMiddlewares"),' function for composing middlewares. It takes the base handler as first argument, and middlewares in the "outer to inner" order. For the above stack, the final ',(0,r.kt)("inlineCode",{parentName:"p"},"tx.Handler")," is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"txHandler := middleware.ComposeMiddlewares(H, A, B, C)\n")),(0,r.kt)("p",null,"The middleware is set in BaseApp via its ",(0,r.kt)("inlineCode",{parentName:"p"},"SetTxHandler")," setter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// simapp/app.go\n\ntxHandler := middleware.ComposeMiddlewares(...)\napp.SetTxHandler(txHandler)\n")),(0,r.kt)("p",null,"The app developer can define their own middlewares, or use the Cosmos SDK's pre-defined middlewares from ",(0,r.kt)("inlineCode",{parentName:"p"},"middleware.NewDefaultTxHandler()"),"."),(0,r.kt)("h3",{id:"middlewares-maintained-by-the-cosmos-sdk"},"Middlewares Maintained by the Cosmos SDK"),(0,r.kt)("p",null,"While the app developer can define and compose the middlewares of their choice, the Cosmos SDK provides a set of middlewares that caters for the ecosystem's most common use cases. These middlewares are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Middleware"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RunMsgsTxHandler"),(0,r.kt)("td",{parentName:"tr",align:null},"This is the base ",(0,r.kt)("inlineCode",{parentName:"td"},"tx.Handler"),". It replaces the old baseapp's ",(0,r.kt)("inlineCode",{parentName:"td"},"runMsgs"),", and executes a transaction's ",(0,r.kt)("inlineCode",{parentName:"td"},"Msg"),"s.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TxDecoderMiddleware"),(0,r.kt)("td",{parentName:"tr",align:null},"This middleware takes in transaction raw bytes, and decodes them into a ",(0,r.kt)("inlineCode",{parentName:"td"},"sdk.Tx"),". It replaces the ",(0,r.kt)("inlineCode",{parentName:"td"},"baseapp.txDecoder")," field, so that BaseApp stays as thin as possible. Since most middlewares read the contents of the ",(0,r.kt)("inlineCode",{parentName:"td"},"sdk.Tx"),", the TxDecoderMiddleware should be run first in the middleware stack.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{Antehandlers}"),(0,r.kt)("td",{parentName:"tr",align:null},"Each antehandler is converted to its own middleware. These middlewares perform signature verification, fee deductions and other validations on the incoming transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IndexEventsTxMiddleware"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a simple middleware that chooses which events to index in Tendermint. Replaces ",(0,r.kt)("inlineCode",{parentName:"td"},"baseapp.indexEvents")," (which unfortunately still exists in baseapp too, because it's used to index Begin/EndBlock events)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RecoveryTxMiddleware"),(0,r.kt)("td",{parentName:"tr",align:null},"This index recovers from panics. It replaces baseapp.runTx's panic recovery described in ",(0,r.kt)("a",{parentName:"td",href:"/main/architecture/adr-022-custom-panic-handling"},"ADR-022"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GasTxMiddleware"),(0,r.kt)("td",{parentName:"tr",align:null},"This replaces the ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.43.0/x/auth/ante/setup.go"},(0,r.kt)("inlineCode",{parentName:"a"},"Setup"))," Antehandler. It sets a GasMeter on sdk.Context. Note that before, GasMeter was set on sdk.Context inside the antehandlers, and there was some mess around the fact that antehandlers had their own panic recovery system so that the GasMeter could be read by baseapp's recovery system. Now, this mess is all removed: one middleware sets GasMeter, another one handles recovery.")))),(0,r.kt)("h3",{id:"similarities-and-differences-between-antehandlers-and-middlewares"},"Similarities and Differences between Antehandlers and Middlewares"),(0,r.kt)("p",null,"The middleware-based design builds upon the existing antehandlers design described in ",(0,r.kt)("a",{parentName:"p",href:"/main/architecture/adr-010-modular-antehandler"},"ADR-010"),'. Even though the final decision of ADR-010 was to go with the "Simple Decorators" approach, the middleware design is actually very similar to the other ',(0,r.kt)("a",{parentName:"p",href:"/main/architecture/adr-010-modular-antehandler#decorator-pattern"},"Decorator Pattern")," proposal, also used in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iov-one/weave"},"weave"),"."),(0,r.kt)("h4",{id:"similarities-with-antehandlers"},"Similarities with Antehandlers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Designed as chaining/composing small modular pieces."),(0,r.kt)("li",{parentName:"ul"},"Allow code reuse for ",(0,r.kt)("inlineCode",{parentName:"li"},"{Check,Deliver}Tx")," and for ",(0,r.kt)("inlineCode",{parentName:"li"},"Simulate"),"."),(0,r.kt)("li",{parentName:"ul"},"Set up in ",(0,r.kt)("inlineCode",{parentName:"li"},"app.go"),", and easily customizable by app developers."),(0,r.kt)("li",{parentName:"ul"},"Order is important.")),(0,r.kt)("h4",{id:"differences-with-antehandlers"},"Differences with Antehandlers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Antehandlers are run before ",(0,r.kt)("inlineCode",{parentName:"li"},"Msg")," execution, whereas middlewares can run before and after."),(0,r.kt)("li",{parentName:"ul"},"The middleware approach uses separate methods for ",(0,r.kt)("inlineCode",{parentName:"li"},"{Check,Deliver,Simulate}Tx"),", whereas the antehandlers pass a ",(0,r.kt)("inlineCode",{parentName:"li"},"simulate bool")," flag and uses the ",(0,r.kt)("inlineCode",{parentName:"li"},"sdkCtx.Is{Check,Recheck}Tx()")," flags to determine in which transaction mode we are."),(0,r.kt)("li",{parentName:"ul"},"The middleware design lets each middleware hold a reference to the next middleware, whereas the antehandlers pass a ",(0,r.kt)("inlineCode",{parentName:"li"},"next")," argument in the ",(0,r.kt)("inlineCode",{parentName:"li"},"AnteHandle")," method."),(0,r.kt)("li",{parentName:"ul"},"The middleware design use Go's standard ",(0,r.kt)("inlineCode",{parentName:"li"},"context.Context"),", whereas the antehandlers use ",(0,r.kt)("inlineCode",{parentName:"li"},"sdk.Context"),".")),(0,r.kt)("h2",{id:"consequences"},"Consequences"),(0,r.kt)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,r.kt)("p",null,"Since this refactor removes some logic away from BaseApp and into middlewares, it introduces API-breaking changes for app developers. Most notably, instead of creating an antehandler chain in ",(0,r.kt)("inlineCode",{parentName:"p"},"app.go"),", app developers need to create a middleware stack:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- anteHandler, err := ante.NewAnteHandler(\n-    ante.HandlerOptions{\n-        AccountKeeper:   app.AccountKeeper,\n-        BankKeeper:      app.BankKeeper,\n-        SignModeHandler: encodingConfig.TxConfig.SignModeHandler(),\n-        FeegrantKeeper:  app.FeeGrantKeeper,\n-        SigGasConsumer:  ante.DefaultSigVerificationGasConsumer,\n-    },\n-)\n+txHandler, err := authmiddleware.NewDefaultTxHandler(authmiddleware.TxHandlerOptions{\n+    Debug:             app.Trace(),\n+    IndexEvents:       indexEvents,\n+    LegacyRouter:      app.legacyRouter,\n+    MsgServiceRouter:  app.msgSvcRouter,\n+    LegacyAnteHandler: anteHandler,\n+    TxDecoder:         encodingConfig.TxConfig.TxDecoder,\n+})\nif err != nil {\n    panic(err)\n}\n- app.SetAnteHandler(anteHandler)\n+ app.SetTxHandler(txHandler)\n")),(0,r.kt)("p",null,"Other more minor API breaking changes will also be provided in the CHANGELOG. As usual, the Cosmos SDK will provide a release migration document for app developers."),(0,r.kt)("p",null,"This ADR does not introduce any state-machine-, client- or CLI-breaking changes."),(0,r.kt)("h3",{id:"positive"},"Positive"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allow custom logic to be run before an after ",(0,r.kt)("inlineCode",{parentName:"li"},"Msg")," execution. This enables the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/9406"},"tips")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/2150"},"gas refund")," uses cases, and possibly other ones."),(0,r.kt)("li",{parentName:"ul"},"Make BaseApp more lightweight, and defer complex logic to small modular components."),(0,r.kt)("li",{parentName:"ul"},"Separate paths for ",(0,r.kt)("inlineCode",{parentName:"li"},"{Check,Deliver,Simulate}Tx")," with different returns types. This allows for improved readability (replace ",(0,r.kt)("inlineCode",{parentName:"li"},"if sdkCtx.IsRecheckTx() && !simulate {...}")," with separate methods) and more flexibility (e.g. returning a ",(0,r.kt)("inlineCode",{parentName:"li"},"priority")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"ResponseCheckTx"),").")),(0,r.kt)("h3",{id:"negative"},"Negative"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is hard to understand at first glance the state updates that would occur after a middleware runs given the ",(0,r.kt)("inlineCode",{parentName:"li"},"sdk.Context")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"tx"),". A middleware can have an arbitrary number of nested middleware being called within its function body, each possibly doing some pre- and post-processing before calling the next middleware on the chain. Thus to understand what a middleware is doing, one must also understand what every other middleware further along the chain is also doing, and the order of middlewares matters. This can get quite complicated to understand."),(0,r.kt)("li",{parentName:"ul"},"API-breaking changes for app developers.")),(0,r.kt)("h3",{id:"neutral"},"Neutral"),(0,r.kt)("p",null,"No neutral consequences."),(0,r.kt)("h2",{id:"further-discussions"},"Further Discussions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/discussions/9934"},"#9934")," Decomposing BaseApp's other ABCI methods into middlewares."),(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"sdk.Tx")," interface with the concrete protobuf Tx type in the ",(0,r.kt)("inlineCode",{parentName:"li"},"tx.Handler")," methods signature.")),(0,r.kt)("h2",{id:"test-cases"},"Test Cases"),(0,r.kt)("p",null,"We update the existing baseapp and antehandlers tests to use the new middleware API, but keep the same test cases and logic, to avoid introducing regressions. Existing CLI tests will also be left untouched."),(0,r.kt)("p",null,"For new middlewares, we introduce unit tests. Since middlewares are purposefully small, unit tests suit well."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Initial discussion: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/9585"},"https://github.com/cosmos/cosmos-sdk/issues/9585")),(0,r.kt)("li",{parentName:"ul"},"Implementation: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/9920"},"#9920 BaseApp refactor")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/10028"},"#10028 Antehandlers migration"))))}c.isMDXComponent=!0}}]);