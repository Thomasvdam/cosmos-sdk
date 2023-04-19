(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{795:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"rosetta"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rosetta"}},[e._v("#")]),e._v(" Rosetta")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("rosetta")]),e._v(" package implements Coinbase's "),o("a",{attrs:{href:"https://www.rosetta-api.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rosetta API"),o("OutboundLink")],1),e._v(". This document provides instructions on how to use the Rosetta API integration. For information about the motivation and design choices, refer to "),o("RouterLink",{attrs:{to:"/architecture/adr-035-rosetta-api-support.html"}},[e._v("ADR 035")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"add-rosetta-command"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-rosetta-command"}},[e._v("#")]),e._v(" Add Rosetta Command")]),e._v(" "),o("p",[e._v("The Rosetta API server is a stand-alone server that connects to a node of a chain developed with Cosmos SDK.")]),e._v(" "),o("p",[e._v("To enable Rosetta API support, it's required to add the "),o("code",[e._v("RosettaCommand")]),e._v(" to your application's root command file (e.g. "),o("code",[e._v("appd/cmd/root.go")]),e._v(").")]),e._v(" "),o("p",[e._v("Import the "),o("code",[e._v("server")]),e._v(" package:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICAgICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvc2VydmVyJnF1b3Q7Cg=="}}),e._v(" "),o("p",[e._v("Find the following line:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW5pdFJvb3RDbWQocm9vdENtZCwgZW5jb2RpbmdDb25maWcpCg=="}}),e._v(" "),o("p",[e._v("After that line, add the following:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cm9vdENtZC5BZGRDb21tYW5kKAogIHNlcnZlci5Sb3NldHRhQ29tbWFuZChlbmNvZGluZ0NvbmZpZy5JbnRlcmZhY2VSZWdpc3RyeSwgZW5jb2RpbmdDb25maWcuQ29kZWMpCikK"}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("RosettaCommand")]),e._v(" function builds the "),o("code",[e._v("rosetta")]),e._v(" root command and is defined in the "),o("code",[e._v("server")]),e._v(" package within Cosmos SDK.")]),e._v(" "),o("p",[e._v("Since we’ve updated the Cosmos SDK to work with the Rosetta API, updating the application's root command file is all you need to do.")]),e._v(" "),o("p",[e._v("An implementation example can be found in "),o("code",[e._v("simapp")]),e._v(" package.")]),e._v(" "),o("h2",{attrs:{id:"use-rosetta-command"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#use-rosetta-command"}},[e._v("#")]),e._v(" Use Rosetta Command")]),e._v(" "),o("p",[e._v("To run Rosetta in your application CLI, use the following command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"YXBwZCByb3NldHRhIC0taGVscAo="}}),e._v(" "),o("p",[e._v("To test and run Rosetta API endpoints for applications that are running and exposed, use the following command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"YXBwZCByb3NldHRhCiAgICAgLS1ibG9ja2NoYWluICZxdW90O3lvdXIgYXBwbGljYXRpb24gbmFtZSAoZXg6IGdhaWEpJnF1b3Q7CiAgICAgLS1uZXR3b3JrICZxdW90O3lvdXIgY2hhaW4gaWRlbnRpZmllciAoZXg6IHRlc3RuZXQtMSkmcXVvdDsKICAgICAtLXRlbmRlcm1pbnQgJnF1b3Q7dGVuZGVybWludCBlbmRwb2ludCAoZXg6IGxvY2FsaG9zdDoyNjY1NykmcXVvdDsKICAgICAtLWdycGMgJnF1b3Q7Z1JQQyBlbmRwb2ludCAoZXg6IGxvY2FsaG9zdDo5MDkwKSZxdW90OwogICAgIC0tYWRkciAmcXVvdDtyb3NldHRhIGJpbmRpbmcgYWRkcmVzcyAoZXg6IDo4MDgwKSZxdW90Owo="}}),e._v(" "),o("h2",{attrs:{id:"extensions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#extensions"}},[e._v("#")]),e._v(" Extensions")]),e._v(" "),o("p",[e._v("There are two ways in which you can customize and extend the implementation with your custom settings.")]),e._v(" "),o("h3",{attrs:{id:"message-extension"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#message-extension"}},[e._v("#")]),e._v(" Message extension")]),e._v(" "),o("p",[e._v("In order to make an "),o("code",[e._v("sdk.Msg")]),e._v(" understandable by rosetta the only thing which is required is adding the methods to your messages that satisfy the "),o("code",[e._v("rosetta.Msg")]),e._v(" interface. Examples on how to do so can be found in the staking types such as "),o("code",[e._v("MsgDelegate")]),e._v(", or in bank types such as "),o("code",[e._v("MsgSend")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"client-interface-override"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#client-interface-override"}},[e._v("#")]),e._v(" Client interface override")]),e._v(" "),o("p",[e._v("In case more customization is required, it's possible to embed the Client type and override the methods which require customizations.")]),e._v(" "),o("p",[e._v("Example:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBjdXN0b21fY2xpZW50CmltcG9ydCAoCgomcXVvdDtjb250ZXh0JnF1b3Q7CiZxdW90O2dpdGh1Yi5jb20vY29pbmJhc2Uvcm9zZXR0YS1zZGstZ28vdHlwZXMmcXVvdDsKJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9zZXJ2ZXIvcm9zZXR0YS9saWImcXVvdDsKKQoKLy8gQ3VzdG9tQ2xpZW50IGVtYmVkcyB0aGUgc3RhbmRhcmQgY29zbW9zIGNsaWVudAovLyB3aGljaCBtZWFucyB0aGF0IGl0IGltcGxlbWVudHMgdGhlIGNvc21vcy1yb3NldHRhLWdhdGV3YXkgQ2xpZW50Ci8vIGludGVyZmFjZSB3aGlsZSBhdCB0aGUgc2FtZSB0aW1lIGFsbG93aW5nIHRvIGN1c3RvbWl6ZSBjZXJ0YWluIG1ldGhvZHMKdHlwZSBDdXN0b21DbGllbnQgc3RydWN0IHsKICAgICpyb3NldHRhLkNsaWVudAp9CgpmdW5jIChjICpDdXN0b21DbGllbnQpIENvbnN0cnVjdGlvblBheWxvYWQoXyBjb250ZXh0LkNvbnRleHQsIHJlcXVlc3QgKnR5cGVzLkNvbnN0cnVjdGlvblBheWxvYWRzUmVxdWVzdCkgKHJlc3AgKnR5cGVzLkNvbnN0cnVjdGlvblBheWxvYWRzUmVzcG9uc2UsIGVyciBlcnJvcikgewogICAgLy8gcHJvdmlkZSBjdXN0b20gc2lnbmF0dXJlIGJ5dGVzCiAgICBwYW5pYygmcXVvdDtpbXBsZW1lbnQgbWUmcXVvdDspCn0K"}}),e._v(" "),o("p",[e._v("NOTE: when using a customized client, the command cannot be used as the constructors required "),o("strong",[e._v("may")]),e._v(" differ, so it's required to create a new one. We intend to provide a way to init a customized client without writing extra code in the future.")]),e._v(" "),o("h3",{attrs:{id:"error-extension"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#error-extension"}},[e._v("#")]),e._v(" Error extension")]),e._v(" "),o("p",[e._v("Since rosetta requires to provide 'returned' errors to network options. In order to declare a new rosetta error, we use the "),o("code",[e._v("errors")]),e._v(" package in cosmos-rosetta-gateway.")]),e._v(" "),o("p",[e._v("Example:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBjdXN0b21fZXJyb3JzCmltcG9ydCBjcmdlcnJzICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvc2VydmVyL3Jvc2V0dGEvbGliL2Vycm9ycyZxdW90OwoKdmFyIGN1c3RvbUVyclJldHJpYWJsZSA9IHRydWUKdmFyIEN1c3RvbUVycm9yID0gY3JnZXJycy5SZWdpc3RlckVycm9yKDEwMCwgJnF1b3Q7Y3VzdG9tIG1lc3NhZ2UmcXVvdDssIGN1c3RvbUVyclJldHJpYWJsZSwgJnF1b3Q7ZGVzY3JpcHRpb24mcXVvdDspCg=="}}),e._v(" "),o("p",[e._v("Note: errors must be registered before cosmos-rosetta-gateway's "),o("code",[e._v("Server")]),e._v("."),o("code",[e._v("Start")]),e._v(" method is called. Otherwise the registration will be ignored. Errors with same code will be ignored too.")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);