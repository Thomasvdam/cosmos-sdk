(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{628:function(e,t,o){"use strict";o.r(t);var r=o(1),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"adr-047-extend-upgrade-plan"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adr-047-extend-upgrade-plan"}},[e._v("#")]),e._v(" ADR 047: Extend Upgrade Plan")]),e._v(" "),o("h2",{attrs:{id:"changelog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),o("ul",[o("li",[e._v("Nov, 23, 2021: Initial Draft")])]),e._v(" "),o("h2",{attrs:{id:"status"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),o("p",[e._v("PROPOSED Not Implemented")]),e._v(" "),o("h2",{attrs:{id:"abstract"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),o("p",[e._v("This ADR expands the existing x/upgrade "),o("code",[e._v("Plan")]),e._v(" proto message to include new fields for defining pre-run and post-run processes within upgrade tooling.\nIt also defines a structure for providing downloadable artifacts involved in an upgrade.")]),e._v(" "),o("h2",{attrs:{id:"context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("upgrade")]),e._v(" module in conjunction with Cosmovisor are designed to facilitate and automate a blockchain's transition from one version to another.")]),e._v(" "),o("p",[e._v("Users submit a software upgrade governance proposal containing an upgrade "),o("code",[e._v("Plan")]),e._v(".\nThe "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.44.5/proto/cosmos/upgrade/v1beta1/upgrade.proto#L12",target:"_blank",rel:"noopener noreferrer"}},[e._v("Plan"),o("OutboundLink")],1),e._v(" currently contains the following fields:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("name")]),e._v(": A short string identifying the new version.")]),e._v(" "),o("li",[o("code",[e._v("height")]),e._v(": The chain height at which the upgrade is to be performed.")]),e._v(" "),o("li",[o("code",[e._v("info")]),e._v(": A string containing information about the upgrade.")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("info")]),e._v(" string can be anything.\nHowever, Cosmovisor will try to use the "),o("code",[e._v("info")]),e._v(' field to automatically download a new version of the blockchain executable.\nFor the auto-download to work, Cosmovisor expects it to be either a stringified JSON object (with a specific structure defined through documentation), or a URL that will return such JSON.\nThe JSON object identifies URLs used to download the new blockchain executable for different platforms (OS and Architecture, e.g. "linux/amd64").\nSuch a URL can either return the executable file directly or can return an archive containing the executable and possibly other assets.')]),e._v(" "),o("p",[e._v("If the URL returns an archive, it is decompressed into "),o("code",[e._v("{DAEMON_HOME}/cosmovisor/{upgrade name}")]),e._v(".\nThen, if "),o("code",[e._v("{DAEMON_HOME}/cosmovisor/{upgrade name}/bin/{DAEMON_NAME}")]),e._v(" does not exist, but "),o("code",[e._v("{DAEMON_HOME}/cosmovisor/{upgrade name}/{DAEMON_NAME}")]),e._v(" does, the latter is copied to the former.\nIf the URL returns something other than an archive, it is downloaded to "),o("code",[e._v("{DAEMON_HOME}/cosmovisor/{upgrade name}/bin/{DAEMON_NAME}")]),e._v(".")]),e._v(" "),o("p",[e._v("If an upgrade height is reached and the new version of the executable version isn't available, Cosmovisor will stop running.")]),e._v(" "),o("p",[e._v("Both "),o("code",[e._v("DAEMON_HOME")]),e._v(" and "),o("code",[e._v("DAEMON_NAME")]),e._v(" are "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/cosmovisor/v1.0.0/cosmovisor/README.md#command-line-arguments-and-environment-variables",target:"_blank",rel:"noopener noreferrer"}},[e._v("environment variables used to configure Cosmovisor"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Currently, there is no mechanism that makes Cosmovisor run a command after the upgraded chain has been restarted.")]),e._v(" "),o("p",[e._v("The current upgrade process has this timeline:")]),e._v(" "),o("ol",[o("li",[e._v("An upgrade governance proposal is submitted and approved.")]),e._v(" "),o("li",[e._v("The upgrade height is reached.")]),e._v(" "),o("li",[e._v("The "),o("code",[e._v("x/upgrade")]),e._v(" module writes the "),o("code",[e._v("upgrade_info.json")]),e._v(" file.")]),e._v(" "),o("li",[e._v("The chain halts.")]),e._v(" "),o("li",[e._v("Cosmovisor backs up the data directory (if set up to do so).")]),e._v(" "),o("li",[e._v("Cosmovisor downloads the new executable (if not already in place).")]),e._v(" "),o("li",[e._v("Cosmovisor executes the "),o("code",[e._v("${DAEMON_NAME} pre-upgrade")]),e._v(".")]),e._v(" "),o("li",[e._v("Cosmovisor restarts the app using the new version and same args originally provided.")])]),e._v(" "),o("h2",{attrs:{id:"decision"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),o("h3",{attrs:{id:"protobuf-updates"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#protobuf-updates"}},[e._v("#")]),e._v(" Protobuf Updates")]),e._v(" "),o("p",[e._v("We will update the "),o("code",[e._v("x/upgrade.Plan")]),e._v(" message for providing upgrade instructions.\nThe upgrade instructions will contain a list of artifacts available for each platform.\nIt allows for the definition of a pre-run and post-run commands.\nThese commands are not consensus guaranteed; they will be executed by Cosmosvisor (or other) during its upgrade handling.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBQbGFuIHsKICAvLyAuLi4gKGV4aXN0aW5nIGZpZWxkcykKCiAgVXBncmFkZUluc3RydWN0aW9ucyBpbnN0cnVjdGlvbnMgPSA2Owp9Cg=="}}),e._v(" "),o("p",[e._v("The new "),o("code",[e._v("UpgradeInstructions instructions")]),e._v(" field MUST be optional.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBVcGdyYWRlSW5zdHJ1Y3Rpb25zIHsKICBzdHJpbmcgcHJlX3J1biAgICAgICAgICAgICAgPSAxOwogIHN0cmluZyBwb3N0X3J1biAgICAgICAgICAgICA9IDI7CiAgcmVwZWF0ZWQgQXJ0aWZhY3QgYXJ0aWZhY3RzID0gMzsKICBzdHJpbmcgZGVzY3JpcHRpb24gICAgICAgICAgPSA0Owp9Cg=="}}),e._v(" "),o("p",[e._v("All fields in the "),o("code",[e._v("UpgradeInstructions")]),e._v(" are optional.")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("pre_run")]),e._v(" is a command to run prior to the upgraded chain restarting.\nIf defined, it will be executed after halting and downloading the new artifact but before restarting the upgraded chain.\nThe working directory this command runs from MUST be "),o("code",[e._v("{DAEMON_HOME}/cosmovisor/{upgrade name}")]),e._v(".\nThis command MUST behave the same as the current "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.44.5/docs/migrations/pre-upgrade.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-upgrade"),o("OutboundLink")],1),e._v(" command.\nIt does not take in any command-line arguments and is expected to terminate with the following exit codes:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Exit status code")]),e._v(" "),o("th",[e._v("How it is handled in Cosmosvisor")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("code",[e._v("0")])]),e._v(" "),o("td",[e._v("Assumes "),o("code",[e._v("pre-upgrade")]),e._v(" command executed successfully and continues the upgrade.")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("1")])]),e._v(" "),o("td",[e._v("Default exit code when "),o("code",[e._v("pre-upgrade")]),e._v(" command has not been implemented.")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("30")])]),e._v(" "),o("td",[o("code",[e._v("pre-upgrade")]),e._v(" command was executed but failed. This fails the entire upgrade.")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("31")])]),e._v(" "),o("td",[o("code",[e._v("pre-upgrade")]),e._v(" command was executed but failed. But the command is retried until exit code "),o("code",[e._v("1")]),e._v(" or "),o("code",[e._v("30")]),e._v(" are returned.")])])])]),e._v(" "),o("p",[e._v("If defined, then the app supervisors (e.g. Cosmovisor) MUST NOT run "),o("code",[e._v("app pre-run")]),e._v(".")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("post_run")]),e._v(" is a command to run after the upgraded chain has been started. If defined, this command MUST be only executed at most once by an upgrading node.\nThe output and exit code SHOULD be logged but SHOULD NOT affect the running of the upgraded chain.\nThe working directory this command runs from MUST be "),o("code",[e._v("{DAEMON_HOME}/cosmovisor/{upgrade name}")]),e._v(".")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("artifacts")]),e._v(" define items to be downloaded.\nIt SHOULD have only one entry per platform.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("description")]),e._v(" contains human-readable information about the upgrade and might contain references to external resources.\nIt SHOULD NOT be used for structured processing information.")])])]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBBcnRpZmFjdCB7CiAgc3RyaW5nIHBsYXRmb3JtICAgICAgPSAxOwogIHN0cmluZyB1cmwgICAgICAgICAgID0gMjsKICBzdHJpbmcgY2hlY2tzdW0gICAgICA9IDM7CiAgc3RyaW5nIGNoZWNrc3VtX2FsZ28gPSA0Owp9Cg=="}}),e._v(" "),o("ul",[o("li",[o("code",[e._v("platform")]),e._v(" is a required string that SHOULD be in the format "),o("code",[e._v("{OS}/{CPU}")]),e._v(", e.g. "),o("code",[e._v('"linux/amd64"')]),e._v(".\nThe string "),o("code",[e._v('"any"')]),e._v(" SHOULD also be allowed.\nAn "),o("code",[e._v("Artifact")]),e._v(" with a "),o("code",[e._v("platform")]),e._v(" of "),o("code",[e._v('"any"')]),e._v(" SHOULD be used as a fallback when a specific "),o("code",[e._v("{OS}/{CPU}")]),e._v(" entry is not found.\nThat is, if an "),o("code",[e._v("Artifact")]),e._v(" exists with a "),o("code",[e._v("platform")]),e._v(" that matches the system's OS and CPU, that should be used;\notherwise, if an "),o("code",[e._v("Artifact")]),e._v(" exists with a "),o("code",[e._v("platform")]),e._v(" of "),o("code",[e._v("any")]),e._v(", that should be used;\notherwise no artifact should be downloaded.")]),e._v(" "),o("li",[o("code",[e._v("url")]),e._v(" is a required URL string that MUST conform to "),o("a",{attrs:{href:"https://www.ietf.org/rfc/rfc1738.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 1738: Uniform Resource Locators"),o("OutboundLink")],1),e._v(".\nA request to this "),o("code",[e._v("url")]),e._v(" MUST return either an executable file or an archive containing either "),o("code",[e._v("bin/{DAEMON_NAME}")]),e._v(" or "),o("code",[e._v("{DAEMON_NAME}")]),e._v(".\nThe URL should not contain checksum - it should be specified by the "),o("code",[e._v("checksum")]),e._v(" attribute.")]),e._v(" "),o("li",[o("code",[e._v("checksum")]),e._v(" is a checksum of the expected result of a request to the "),o("code",[e._v("url")]),e._v(".\nIt is not required, but is recommended.\nIf provided, it MUST be a hex encoded checksum string.\nTools utilizing these "),o("code",[e._v("UpgradeInstructions")]),e._v(" MUST fail if a "),o("code",[e._v("checksum")]),e._v(" is provided but is different from the checksum of the result returned by the "),o("code",[e._v("url")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("checksum_algo")]),e._v(" is a string identify the algorithm used to generate the "),o("code",[e._v("checksum")]),e._v(".\nRecommended algorithms: "),o("code",[e._v("sha256")]),e._v(", "),o("code",[e._v("sha512")]),e._v(".\nAlgorithms also supported (but not recommended): "),o("code",[e._v("sha1")]),e._v(", "),o("code",[e._v("md5")]),e._v(".\nIf a "),o("code",[e._v("checksum")]),e._v(" is provided, a "),o("code",[e._v("checksum_algo")]),e._v(" MUST also be provided.")])]),e._v(" "),o("p",[e._v("A "),o("code",[e._v("url")]),e._v(" is not required to contain a "),o("code",[e._v("checksum")]),e._v(" query parameter.\nIf the "),o("code",[e._v("url")]),e._v(" does contain a "),o("code",[e._v("checksum")]),e._v(" query parameter, the "),o("code",[e._v("checksum")]),e._v(" and "),o("code",[e._v("checksum_algo")]),e._v(" fields MUST also be populated, and their values MUST match the value of the query parameter.\nFor example, if the "),o("code",[e._v("url")]),e._v(" is "),o("code",[e._v('"https://example.com?checksum=md5:d41d8cd98f00b204e9800998ecf8427e"')]),e._v(", then the "),o("code",[e._v("checksum")]),e._v(" field must be "),o("code",[e._v('"d41d8cd98f00b204e9800998ecf8427e"')]),e._v(" and the "),o("code",[e._v("checksum_algo")]),e._v(" field must be "),o("code",[e._v('"md5"')]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"upgrade-module-updates"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-module-updates"}},[e._v("#")]),e._v(" Upgrade Module Updates")]),e._v(" "),o("p",[e._v("If an upgrade "),o("code",[e._v("Plan")]),e._v(" does not use the new "),o("code",[e._v("UpgradeInstructions")]),e._v(" field, existing functionality will be maintained.\nThe parsing of the "),o("code",[e._v("info")]),e._v(" field as either a URL or "),o("code",[e._v("binaries")]),e._v(" JSON will be deprecated.\nDuring validation, if the "),o("code",[e._v("info")]),e._v(" field is used as such, a warning will be issued, but not an error.")]),e._v(" "),o("p",[e._v("We will update the creation of the "),o("code",[e._v("upgrade-info.json")]),e._v(" file to include the "),o("code",[e._v("UpgradeInstructions")]),e._v(".")]),e._v(" "),o("p",[e._v("We will update the optional validation available via CLI to account for the new "),o("code",[e._v("Plan")]),e._v(" structure.\nWe will add the following validation:")]),e._v(" "),o("ol",[o("li",[e._v("If "),o("code",[e._v("UpgradeInstructions")]),e._v(" are provided:\n"),o("ol",[o("li",[e._v("There MUST be at least one entry in "),o("code",[e._v("artifacts")]),e._v(".")]),e._v(" "),o("li",[e._v("All of the "),o("code",[e._v("artifacts")]),e._v(" MUST have a unique "),o("code",[e._v("platform")]),e._v(".")]),e._v(" "),o("li",[e._v("For each "),o("code",[e._v("Artifact")]),e._v(", if the "),o("code",[e._v("url")]),e._v(" contains a "),o("code",[e._v("checksum")]),e._v(" query parameter:\n"),o("ol",[o("li",[e._v("The "),o("code",[e._v("checksum")]),e._v(" query parameter value MUST be in the format of "),o("code",[e._v("{checksum_algo}:{checksum}")]),e._v(".")]),e._v(" "),o("li",[e._v("The "),o("code",[e._v("{checksum}")]),e._v(" from the query parameter MUST equal the "),o("code",[e._v("checksum")]),e._v(" provided in the "),o("code",[e._v("Artifact")]),e._v(".")]),e._v(" "),o("li",[e._v("The "),o("code",[e._v("{checksum_algo}")]),e._v(" from the query parameter MUST equal the "),o("code",[e._v("checksum_algo")]),e._v(" provided in the "),o("code",[e._v("Artifact")]),e._v(".")])])])])]),e._v(" "),o("li",[e._v("The following validation is currently done using the "),o("code",[e._v("info")]),e._v(" field. We will apply similar validation to the "),o("code",[e._v("UpgradeInstructions")]),e._v(".\nFor each "),o("code",[e._v("Artifact")]),e._v(":\n"),o("ol",[o("li",[e._v("The "),o("code",[e._v("platform")]),e._v(" MUST have the format "),o("code",[e._v("{OS}/{CPU}")]),e._v(" or be "),o("code",[e._v('"any"')]),e._v(".")]),e._v(" "),o("li",[e._v("The "),o("code",[e._v("url")]),e._v(" field MUST NOT be empty.")]),e._v(" "),o("li",[e._v("The "),o("code",[e._v("url")]),e._v(" field MUST be a proper URL.")]),e._v(" "),o("li",[e._v("A "),o("code",[e._v("checksum")]),e._v(" MUST be provided either in the "),o("code",[e._v("checksum")]),e._v(" field or as a query parameter in the "),o("code",[e._v("url")]),e._v(".")]),e._v(" "),o("li",[e._v("If the "),o("code",[e._v("checksum")]),e._v(" field has a value and the "),o("code",[e._v("url")]),e._v(" also has a "),o("code",[e._v("checksum")]),e._v(" query parameter, the two values MUST be equal.")]),e._v(" "),o("li",[e._v("The "),o("code",[e._v("url")]),e._v(" MUST return either a file or an archive containing either "),o("code",[e._v("bin/{DAEMON_NAME}")]),e._v(" or "),o("code",[e._v("{DAEMON_NAME}")]),e._v(".")]),e._v(" "),o("li",[e._v("If a "),o("code",[e._v("checksum")]),e._v(" is provided (in the field or as a query param), the checksum of the result of the "),o("code",[e._v("url")]),e._v(" MUST equal the provided checksum.")])])])]),e._v(" "),o("p",[e._v("Downloading of an "),o("code",[e._v("Artifact")]),e._v(" will happen the same way that URLs from "),o("code",[e._v("info")]),e._v(" are currently downloaded.")]),e._v(" "),o("h3",{attrs:{id:"cosmovisor-updates"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cosmovisor-updates"}},[e._v("#")]),e._v(" Cosmovisor Updates")]),e._v(" "),o("p",[e._v("If the "),o("code",[e._v("upgrade-info.json")]),e._v(" file does not contain any "),o("code",[e._v("UpgradeInstructions")]),e._v(", existing functionality will be maintained.")]),e._v(" "),o("p",[e._v("We will update Cosmovisor to look for and handle the new "),o("code",[e._v("UpgradeInstructions")]),e._v(" in "),o("code",[e._v("upgrade-info.json")]),e._v(".\nIf the "),o("code",[e._v("UpgradeInstructions")]),e._v(" are provided, we will do the following:")]),e._v(" "),o("ol",[o("li",[e._v("The "),o("code",[e._v("info")]),e._v(" field will be ignored.")]),e._v(" "),o("li",[e._v("The "),o("code",[e._v("artifacts")]),e._v(" field will be used to identify the artifact to download based on the "),o("code",[e._v("platform")]),e._v(" that Cosmovisor is running in.")]),e._v(" "),o("li",[e._v("If a "),o("code",[e._v("checksum")]),e._v(" is provided (either in the field or as a query param in the "),o("code",[e._v("url")]),e._v("), and the downloaded artifact has a different checksum, the upgrade process will be interrupted and Cosmovisor will exit with an error.")]),e._v(" "),o("li",[e._v("If a "),o("code",[e._v("pre_run")]),e._v(" command is defined, it will be executed at the same point in the process where the "),o("code",[e._v("app pre-upgrade")]),e._v(" command would have been executed.\nIt will be executed using the same environment as other commands run by Cosmovisor.")]),e._v(" "),o("li",[e._v("If a "),o("code",[e._v("post_run")]),e._v(" command is defined, it will be executed after executing the command that restarts the chain.\nIt will be executed in a background process using the same environment as the other commands.\nAny output generated by the command will be logged.\nOnce complete, the exit code will be logged.")])]),e._v(" "),o("p",[e._v("We will deprecate the use of the "),o("code",[e._v("info")]),e._v(" field for anything other than human readable information.\nA warning will be logged if the "),o("code",[e._v("info")]),e._v(" field is used to define the assets (either by URL or JSON).")]),e._v(" "),o("p",[e._v("The new upgrade timeline is very similar to the current one. Changes are in bold:")]),e._v(" "),o("ol",[o("li",[e._v("An upgrade governance proposal is submitted and approved.")]),e._v(" "),o("li",[e._v("The upgrade height is reached.")]),e._v(" "),o("li",[e._v("The "),o("code",[e._v("x/upgrade")]),e._v(" module writes the "),o("code",[e._v("upgrade_info.json")]),e._v(" file "),o("strong",[e._v("(now possibly with "),o("code",[e._v("UpgradeInstructions")]),e._v(")")]),e._v(".")]),e._v(" "),o("li",[e._v("The chain halts.")]),e._v(" "),o("li",[e._v("Cosmovisor backs up the data directory (if set up to do so).")]),e._v(" "),o("li",[e._v("Cosmovisor downloads the new executable (if not already in place).")]),e._v(" "),o("li",[e._v("Cosmovisor executes "),o("strong",[e._v("the "),o("code",[e._v("pre_run")]),e._v(" command if provided")]),e._v(", or else the "),o("code",[e._v("${DAEMON_NAME} pre-upgrade")]),e._v(" command.")]),e._v(" "),o("li",[e._v("Cosmovisor restarts the app using the new version and same args originally provided.")]),e._v(" "),o("li",[o("strong",[e._v("Cosmovisor immediately runs the "),o("code",[e._v("post_run")]),e._v(" command in a detached process.")])])]),e._v(" "),o("h2",{attrs:{id:"consequences"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),o("h3",{attrs:{id:"backwards-compatibility"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),o("p",[e._v("Since the only change to existing definitions is the addition of the "),o("code",[e._v("instructions")]),e._v(" field to the "),o("code",[e._v("Plan")]),e._v(" message, and that field is optional, there are no backwards incompatibilities with respects to the proto messages.\nAdditionally, current behavior will be maintained when no "),o("code",[e._v("UpgradeInstructions")]),e._v(" are provided, so there are no backwards incompatibilities with respects to either the upgrade module or Cosmovisor.")]),e._v(" "),o("h3",{attrs:{id:"forwards-compatibility"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#forwards-compatibility"}},[e._v("#")]),e._v(" Forwards Compatibility")]),e._v(" "),o("p",[e._v("In order to utilize the "),o("code",[e._v("UpgradeInstructions")]),e._v(" as part of a software upgrade, both of the following must be true:")]),e._v(" "),o("ol",[o("li",[e._v("The chain must already be using a sufficiently advanced version of the Cosmos SDK.")]),e._v(" "),o("li",[e._v("The chain's nodes must be using a sufficiently advanced version of Cosmovisor.")])]),e._v(" "),o("h3",{attrs:{id:"positive"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),o("ol",[o("li",[e._v("The structure for defining artifacts is clearer since it is now defined in the proto instead of in documentation.")]),e._v(" "),o("li",[e._v("Availability of a pre-run command becomes more obvious.")]),e._v(" "),o("li",[e._v("A post-run command becomes possible.")])]),e._v(" "),o("h3",{attrs:{id:"negative"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),o("ol",[o("li",[e._v("The "),o("code",[e._v("Plan")]),e._v(" message becomes larger. This is negligible because A) the "),o("code",[e._v("x/upgrades")]),e._v(" module only stores at most one upgrade plan, and B) upgrades are rare enough that the increased gas cost isn't a concern.")]),e._v(" "),o("li",[e._v("There is no option for providing a URL that will return the "),o("code",[e._v("UpgradeInstructions")]),e._v(".")]),e._v(" "),o("li",[e._v("The only way to provide multiple assets (executables and other files) for a platform is to use an archive as the platform's artifact.")])]),e._v(" "),o("h3",{attrs:{id:"neutral"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),o("ol",[o("li",[e._v("Existing functionality of the "),o("code",[e._v("info")]),e._v(" field is maintained when the "),o("code",[e._v("UpgradeInstructions")]),e._v(" aren't provided.")])]),e._v(" "),o("h2",{attrs:{id:"further-discussions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-discussions"}},[e._v("#")]),e._v(" Further Discussions")]),e._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/10032/files?authenticity_token=pLtzpnXJJB%2Fif2UWiTp9Td3MvRrBF04DvjSuEjf1azoWdLF%2BSNymVYw9Ic7VkqHgNLhNj6iq9bHQYnVLzMXd4g%3D%3D&file-filters%5B%5D=.go&file-filters%5B%5D=.proto#r698708349",target:"_blank",rel:"noopener noreferrer"}},[e._v("Draft PR #10032 Comment"),o("OutboundLink")],1),e._v(":\nConsider different names for "),o("code",[e._v("UpgradeInstructions instructions")]),e._v(" (either the message type or field name).")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/10032/files?authenticity_token=pLtzpnXJJB%2Fif2UWiTp9Td3MvRrBF04DvjSuEjf1azoWdLF%2BSNymVYw9Ic7VkqHgNLhNj6iq9bHQYnVLzMXd4g%3D%3D&file-filters%5B%5D=.go&file-filters%5B%5D=.proto#r754655072",target:"_blank",rel:"noopener noreferrer"}},[e._v("Draft PR #10032 Comment"),o("OutboundLink")],1),e._v(":\n"),o("ol",[o("li",[e._v("Consider putting the "),o("code",[e._v("string platform")]),e._v(" field inside "),o("code",[e._v("UpgradeInstructions")]),e._v(" and make "),o("code",[e._v("UpgradeInstructions")]),e._v(" a repeated field in "),o("code",[e._v("Plan")]),e._v(".")]),e._v(" "),o("li",[e._v("Consider using a "),o("code",[e._v("oneof")]),e._v(" field in the "),o("code",[e._v("Plan")]),e._v(" which could either be "),o("code",[e._v("UpgradeInstructions")]),e._v(" or else a URL that should return the "),o("code",[e._v("UpgradeInstructions")]),e._v(".")]),e._v(" "),o("li",[e._v("Consider allowing "),o("code",[e._v("info")]),e._v(" to either be a JSON serialized version of "),o("code",[e._v("UpgradeInstructions")]),e._v(" or else a URL that returns that.")])])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/10032/files?authenticity_token=pLtzpnXJJB%2Fif2UWiTp9Td3MvRrBF04DvjSuEjf1azoWdLF%2BSNymVYw9Ic7VkqHgNLhNj6iq9bHQYnVLzMXd4g%3D%3D&file-filters%5B%5D=.go&file-filters%5B%5D=.proto#r755462876",target:"_blank",rel:"noopener noreferrer"}},[e._v("Draft PR #10032 Comment"),o("OutboundLink")],1),e._v(":\nConsider not including the "),o("code",[e._v("UpgradeInstructions.description")]),e._v(" field, using the "),o("code",[e._v("info")]),e._v(" field for that purpose instead.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/10032/files?authenticity_token=pLtzpnXJJB%2Fif2UWiTp9Td3MvRrBF04DvjSuEjf1azoWdLF%2BSNymVYw9Ic7VkqHgNLhNj6iq9bHQYnVLzMXd4g%3D%3D&file-filters%5B%5D=.go&file-filters%5B%5D=.proto#r754643691",target:"_blank",rel:"noopener noreferrer"}},[e._v("Draft PR #10032 Comment"),o("OutboundLink")],1),e._v(":\nConsider allowing multiple artifacts to be downloaded for any given "),o("code",[e._v("platform")]),e._v(" by adding a "),o("code",[e._v("name")]),e._v(" field to the "),o("code",[e._v("Artifact")]),e._v(" message.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/10602#discussion_r781438288",target:"_blank",rel:"noopener noreferrer"}},[e._v("PR #10502 Comment"),o("OutboundLink")],1),e._v("\nAllow the new "),o("code",[e._v("UpgradeInstructions")]),e._v(" to be provided via URL.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/10602#discussion_r781438288",target:"_blank",rel:"noopener noreferrer"}},[e._v("PR #10502 Comment"),o("OutboundLink")],1),e._v("\nAllow definition of a "),o("code",[e._v("signer")]),e._v(" for assets (as an alternative to using a "),o("code",[e._v("checksum")]),e._v(").")])]),e._v(" "),o("h2",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.44.5/proto/cosmos/upgrade/v1beta1/upgrade.proto",target:"_blank",rel:"noopener noreferrer"}},[e._v("Current upgrade.proto"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.44.5/x/upgrade/spec/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Upgrade Module README"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/cosmovisor/v1.0.0/cosmovisor/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmovisor README"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.44.5/docs/migrations/pre-upgrade.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pre-upgrade README"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/10032",target:"_blank",rel:"noopener noreferrer"}},[e._v("Draft/POC PR #10032"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.ietf.org/rfc/rfc1738.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 1738: Uniform Resource Locators"),o("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);