(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{631:function(e,t,s){"use strict";s.r(t);var o=s(1),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"adr-053-go-module-refactoring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adr-053-go-module-refactoring"}},[e._v("#")]),e._v(" ADR 053: Go Module Refactoring")]),e._v(" "),s("h2",{attrs:{id:"changelog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),s("ul",[s("li",[e._v("2022-04-27: First Draft")])]),e._v(" "),s("h2",{attrs:{id:"status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),s("p",[e._v("PROPOSED")]),e._v(" "),s("h2",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),s("p",[e._v("The current SDK is built as a single monolithic go module. This ADR describes\nhow we refactor the SDK into smaller independently versioned go modules\nfor ease of maintenance.")]),e._v(" "),s("h2",{attrs:{id:"context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),s("p",[e._v("Go modules impose certain requirements on software projects with respect to\nstable version numbers (anything above 0.x) in that "),s("a",{attrs:{href:"https://go.dev/doc/modules/release-workflow#breaking",target:"_blank",rel:"noopener noreferrer"}},[e._v("any API breaking changes\nnecessitate a major version"),s("OutboundLink")],1),e._v("\nincrease which technically creates a new go module\n(with a v2, v3, etc. suffix).")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://go.dev/blog/module-compatibility",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keeping modules API compatible"),s("OutboundLink")],1),e._v(" in\nthis way requires a fair amount of fair thought and discipline.")]),e._v(" "),s("p",[e._v("The Cosmos SDK is a fairly large project which originated before go modules\ncame into existence and has always been under a v0.x release even though\nit has been used in production for years now, not because it isn't production\nquality software, but rather because the API compatibility guarantees required\nby go modules are fairly complex to adhere to with such a large project.\nUp to now, it has generally been deemed more important to be able to break the\nAPI if needed rather than require all users update all package import paths\nto accommodate breaking changes causing v2, v3, etc. releases. This is in\naddition to the other complexities related to protobuf generated code that will\nbe addressed in a separate ADR.")]),e._v(" "),s("p",[e._v("Nevertheless, the desire for semantic versioning has been "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/discussions/10162",target:"_blank",rel:"noopener noreferrer"}},[e._v("strong in the\ncommunity"),s("OutboundLink")],1),e._v(" and the\nsingle go module release process has made it very hard to\nrelease small changes to isolated features in a timely manner. Release cycles\noften exceed six months which means small improvements done in a day or\ntwo get bottle-necked by everything else in the monolithic release cycle.")]),e._v(" "),s("h2",{attrs:{id:"decision"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),s("p",[e._v("To improve the current situation, the SDK is being refactored into multiple\ngo modules within the current repository. There has been a "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/discussions/10582#discussioncomment-1813377",target:"_blank",rel:"noopener noreferrer"}},[e._v("fair amount of\ndebate"),s("OutboundLink")],1),e._v("\nas to how to do this, with some developers arguing for larger vs smaller\nmodule scopes. There are pros and cons to both approaches (which will be\ndiscussed below in the "),s("a",{attrs:{href:"#consequences"}},[e._v("Consequences")]),e._v(" section), but the\napproach being adopted is the following:")]),e._v(" "),s("ul",[s("li",[e._v("a go module should generally be scoped to a specific coherent set of\nfunctionality (such as math, errors, store, etc.)")]),e._v(" "),s("li",[e._v("when code is removed from the core SDK and moved to a new module path, every\neffort should be made to avoid API breaking changes in the existing code using\naliases and wrapper types (as done in https://github.com/cosmos/cosmos-sdk/pull/10779\nand https://github.com/cosmos/cosmos-sdk/pull/11788)")]),e._v(" "),s("li",[e._v("new go modules should be moved to a standalone domain ("),s("code",[e._v("cosmossdk.io")]),e._v(") before\nbeing tagged as "),s("code",[e._v("v1.0.0")]),e._v(" to accommodate the possibility that they may be\nbetter served by a standalone repository in the future")]),e._v(" "),s("li",[e._v("all go modules should follow the guidelines in https://go.dev/blog/module-compatibility\nbefore "),s("code",[e._v("v1.0.0")]),e._v(" is tagged and should make use of "),s("code",[e._v("internal")]),e._v(" packages to limit\nthe exposed API surface")]),e._v(" "),s("li",[e._v("the new go module's API may deviate from the existing code where there are\nclear improvements to be made or to remove legacy dependencies (for instance on\namino or gogo proto), as long the old package attempts\nto avoid API breakage with aliases and wrappers")]),e._v(" "),s("li",[e._v("care should be taken when simply trying to turn an existing package into a\nnew go module: https://github.com/golang/go/wiki/Modules#is-it-possible-to-add-a-module-to-a-multi-module-repository.\nIn general, it seems safer to just create a new module path (appending v2, v3, etc.\nif necessary), rather than trying to make an old package a new module.")])]),e._v(" "),s("h2",{attrs:{id:"consequences"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),s("h3",{attrs:{id:"backwards-compatibility"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),s("p",[e._v("If the above guidelines are followed to use aliases or wrapper types pointing\nin existing APIs that point back to the new go modules, there should be no or\nvery limited breaking changes to existing APIs.")]),e._v(" "),s("h3",{attrs:{id:"positive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),s("ul",[s("li",[e._v("standalone pieces of software will reach "),s("code",[e._v("v1.0.0")]),e._v(" sooner")]),e._v(" "),s("li",[e._v("new features to specific functionality will be released sooner")])]),e._v(" "),s("h3",{attrs:{id:"negative"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),s("ul",[s("li",[e._v("there will be more go module versions to update in the SDK itself and\nper-project, although most of these will hopefully be indirect")])]),e._v(" "),s("h3",{attrs:{id:"neutral"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),s("h2",{attrs:{id:"further-discussions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-discussions"}},[e._v("#")]),e._v(" Further Discussions")]),e._v(" "),s("p",[e._v("Further discussions are occurring in primarily in\nhttps://github.com/cosmos/cosmos-sdk/discussions/10582 and within\nthe Cosmos SDK Framework Working Group.")]),e._v(" "),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),s("ul",[s("li",[e._v("https://go.dev/doc/modules/release-workflow")]),e._v(" "),s("li",[e._v("https://go.dev/blog/module-compatibility")]),e._v(" "),s("li",[e._v("https://github.com/cosmos/cosmos-sdk/discussions/10162")]),e._v(" "),s("li",[e._v("https://github.com/cosmos/cosmos-sdk/discussions/10582")]),e._v(" "),s("li",[e._v("https://github.com/cosmos/cosmos-sdk/pull/10779")]),e._v(" "),s("li",[e._v("https://github.com/cosmos/cosmos-sdk/pull/11788")])])])}),[],!1,null,null,null);t.default=a.exports}}]);