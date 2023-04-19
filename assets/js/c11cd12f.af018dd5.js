"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[8780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(n),c=a,g=u["".concat(d,".").concat(c)]||u[c]||s[c]||o;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Application upgrade",p={unversionedId:"building-apps/app-upgrade",id:"building-apps/app-upgrade",title:"Application upgrade",description:"This document describes how to upgrade your application. If you are looking specifically for the changes to perform between SDK versions, see the SDK migrations documentation.",source:"@site/docs/building-apps/03-app-upgrade.md",sourceDirName:"building-apps",slug:"/building-apps/app-upgrade",permalink:"/main/building-apps/app-upgrade",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Application mempool",permalink:"/main/building-apps/app-mempool"},next:{title:"Setting up the keyring",permalink:"/main/run-node/keyring"}},d={},l=[{value:"Pre-Upgrade Handling",id:"pre-upgrade-handling",level:2},{value:"Sample",id:"sample",level:2}],m={toc:l};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"application-upgrade"},"Application upgrade"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This document describes how to upgrade your application. If you are looking specifically for the changes to perform between SDK versions, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/migrations/intro"},"SDK migrations documentation"),".")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"This section is currently incomplete. Track the progress of this document ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/11504"},"here"),".")),(0,a.kt)("h2",{id:"pre-upgrade-handling"},"Pre-Upgrade Handling"),(0,a.kt)("p",null,"Cosmovisor supports custom pre-upgrade handling. Use pre-upgrade handling when you need to implement application config changes that are required in the newer version before you perform the upgrade."),(0,a.kt)("p",null,"Using Cosmovisor pre-upgrade handling is optional. If pre-upgrade handling is not implemented, the upgrade continues."),(0,a.kt)("p",null,"For example, make the required new-version changes to ",(0,a.kt)("inlineCode",{parentName:"p"},"app.toml")," settings during the pre-upgrade handling. The pre-upgrade handling process means that the file does not have to be manually updated after the upgrade."),(0,a.kt)("p",null,"Before the application binary is upgraded, Cosmovisor calls a ",(0,a.kt)("inlineCode",{parentName:"p"},"pre-upgrade")," command that can  be implemented by the application."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"pre-upgrade")," command does not take in any command-line arguments and is expected to terminate with the following exit codes:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Exit status code"),(0,a.kt)("th",{parentName:"tr",align:null},"How it is handled in Cosmosvisor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0")),(0,a.kt)("td",{parentName:"tr",align:null},"Assumes ",(0,a.kt)("inlineCode",{parentName:"td"},"pre-upgrade")," command executed successfully and continues the upgrade.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1")),(0,a.kt)("td",{parentName:"tr",align:null},"Default exit code when ",(0,a.kt)("inlineCode",{parentName:"td"},"pre-upgrade")," command has not been implemented.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"30")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pre-upgrade")," command was executed but failed. This fails the entire upgrade.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"31")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pre-upgrade")," command was executed but failed. But the command is retried until exit code ",(0,a.kt)("inlineCode",{parentName:"td"},"1")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"30")," are returned.")))),(0,a.kt)("h2",{id:"sample"},"Sample"),(0,a.kt)("p",null,"Here is a sample structure of the ",(0,a.kt)("inlineCode",{parentName:"p"},"pre-upgrade")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func preUpgradeCommand() *cobra.Command {\n    cmd := &cobra.Command{\n        Use:   "pre-upgrade",\n        Short: "Pre-upgrade command",\n        Long: "Pre-upgrade command to implement custom pre-upgrade handling",\n        Run: func(cmd *cobra.Command, args []string) {\n\n            err := HandlePreUpgrade()\n\n            if err != nil {\n                os.Exit(30)\n            }\n\n            os.Exit(0)\n\n        },\n    }\n\n    return cmd\n}\n')),(0,a.kt)("p",null,"Ensure that the pre-upgrade command has been registered in the application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"rootCmd.AddCommand(\n        // ..\n        preUpgradeCommand(),\n        // ..\n    )\n")))}s.isMDXComponent=!0}}]);