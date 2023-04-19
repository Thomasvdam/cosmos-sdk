(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{600:function(e,t,o){"use strict";o.r(t);var a=o(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"adr-18-extendable-voting-periods"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adr-18-extendable-voting-periods"}},[e._v("#")]),e._v(" ADR 18: Extendable Voting Periods")]),e._v(" "),o("h2",{attrs:{id:"changelog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),o("ul",[o("li",[e._v("1 January 2020: Start of first version")])]),e._v(" "),o("h2",{attrs:{id:"context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),o("p",[e._v("Currently the voting period for all governance proposals is the same.  However, this is suboptimal as all governance proposals do not require the same time period.  For more non-contentious proposals, they can be dealt with more efficently with a faster period, while more contentious or complex proposals may need a longer period for extended discussion/consideration.")]),e._v(" "),o("h2",{attrs:{id:"decision"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),o("p",[e._v("We would like to design a mechanism for making the voting period of a governance proposal variable based on the demand of voters.  We would like it to be based on the view of the governance participants, rather than just the proposer of a governance proposal (thus, allowing the proposer to select the voting period length is not sufficient).")]),e._v(" "),o("p",[e._v("However, we would like to avoid the creation of an entire second voting process to determine the length of the voting period, as it just pushed the problem to determining the length of that first voting period.")]),e._v(" "),o("p",[e._v("Thus, we propose the following mechanism:")]),e._v(" "),o("h3",{attrs:{id:"params"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#params"}},[e._v("#")]),e._v(" Params")]),e._v(" "),o("ul",[o("li",[e._v("The current gov param "),o("code",[e._v("VotingPeriod")]),e._v(" is to be replaced by a "),o("code",[e._v("MinVotingPeriod")]),e._v(" param.  This is the default voting period that all governance proposal voting periods start with.")]),e._v(" "),o("li",[e._v("There is a new gov param called "),o("code",[e._v("MaxVotingPeriodExtension")]),e._v(".")])]),e._v(" "),o("h3",{attrs:{id:"mechanism"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mechanism"}},[e._v("#")]),e._v(" Mechanism")]),e._v(" "),o("p",[e._v("There is a new "),o("code",[e._v("Msg")]),e._v(" type called "),o("code",[e._v("MsgExtendVotingPeriod")]),e._v(", which can be sent by any staked account during a proposal's voting period.  It allows the sender to unilaterally extend the length of the voting period by "),o("code",[e._v("MaxVotingPeriodExtension * sender's share of voting power")]),e._v(".  Every address can only call "),o("code",[e._v("MsgExtendVotingPeriod")]),e._v(" once per proposal.")]),e._v(" "),o("p",[e._v("So for example, if the "),o("code",[e._v("MaxVotingPeriodExtension")]),e._v(" is set to 100 Days, then anyone with 1% of voting power can extend the voting power by 1 day.  If 33% of voting power has sent the message, the voting period will be extended by 33 days.  Thus, if absolutely everyone chooses to extend the voting period, the absolute maximum voting period will be "),o("code",[e._v("MinVotingPeriod + MaxVotingPeriodExtension")]),e._v(".")]),e._v(" "),o("p",[e._v("This system acts as a sort of distributed coordination, where individual stakers choosing to extend or not, allows the system the guage the conentiousness/complexity of the proposal.  It is extremely unlikely that many stakers will choose to extend at the exact same time, it allows stakers to view how long others have already extended thus far, to decide whether or not to extend further.")]),e._v(" "),o("h3",{attrs:{id:"dealing-with-unbonding-redelegation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dealing-with-unbonding-redelegation"}},[e._v("#")]),e._v(" Dealing with Unbonding/Redelegation")]),e._v(" "),o("p",[e._v("There is one thing that needs to be addressed.  How to deal with redelegation/unbonding during the voting period.  If a staker of 5% calls "),o("code",[e._v("MsgExtendVotingPeriod")]),e._v(" and then unbonds, does the voting period then decrease by 5 days again?  This is not good as it can give people a false sense of how long they have to make their decision.  For this reason, we want to design it such that the voting period length can only be extended, not shortened.  To do this, the current extension amount is based on the highest percent that voted extension at any time.  This is best explained by example:")]),e._v(" "),o("ol",[o("li",[e._v("Let's say 2 stakers of voting power 4% and 3% respectively vote to extend.  The voting period will be extended by 7 days.")]),e._v(" "),o("li",[e._v("Now the staker of 3% decides to unbond before the end of the voting period.  The voting period extension remains 7 days.")]),e._v(" "),o("li",[e._v("Now, let's say another staker of 2% voting power decides to extend voting period.  There is now 6% of active voting power choosing the extend.  The voting power remains 7 days.")]),e._v(" "),o("li",[e._v("If a fourth staker of 10% chooses to extend now, there is a total of 16% of active voting power wishing to extend.  The voting period will be extended to 16 days.")])]),e._v(" "),o("h3",{attrs:{id:"delegators"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#delegators"}},[e._v("#")]),e._v(" Delegators")]),e._v(" "),o("p",[e._v('Just like votes in the actual voting period, delegators automatically inherit the extension of their validators.  If their validator chooses to extend, their voting power will be used in the validator\'s extension.  However, the delegator is unable to override their validator and "unextend" as that would contradict the "voting power length can only be ratcheted up" principle described in the previous section.  However, a delegator may choose the extend using their personal voting power, if their validator has not done so.')]),e._v(" "),o("h2",{attrs:{id:"status"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),o("p",[e._v("Proposed")]),e._v(" "),o("h2",{attrs:{id:"consequences"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),o("h3",{attrs:{id:"positive"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),o("ul",[o("li",[e._v("More complex/contentious governance proposals will have more time to properly digest and deliberate")])]),e._v(" "),o("h3",{attrs:{id:"negative"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),o("ul",[o("li",[e._v("Governance process becomes more complex and requires more understanding to interact with effectively")]),e._v(" "),o("li",[e._v("Can no longer predict when a governance proposal will end. Can't assume order in which governance proposals will end.")])]),e._v(" "),o("h3",{attrs:{id:"neutral"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),o("ul",[o("li",[e._v("The minimum voting period can be made shorter")])]),e._v(" "),o("h2",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://forum.cosmos.network/t/proposal-draft-reduce-governance-voting-period-to-7-days/3032/9",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos Forum post where idea first originated"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);