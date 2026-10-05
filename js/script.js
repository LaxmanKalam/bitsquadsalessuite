(function(){
   // Browser tab favicon
  var favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/png';
  favicon.href = 'images/favicon.png';
  document.head.appendChild(favicon);

var $=function(i){return document.getElementById(i)};
var S=[
["Lead Capture","Qualify","Active Intake","Lead","Capture Lead details — description, industry, annual revenue, employee count, SIC code, currency and contact preferences — then qualify with one click.",[["Capture Lead","Manual","Standard + business details"],["Click Qualify button","Button","Account and Contact auto-created"],["BPF advances","Auto","Qualify → Develop; data flows to Opportunity"]]],
["Opportunity","Product & Pricing","In Progress","Opportunity","Add products through a Quick View form with live price calculation. Discounts recalculate extended price and totals in real time, with tax by business rules.",[["Add Product","Sub-grid","Quick View with live price"],["Apply Discount","Auto","Extended price + total recalculated"],["Totals roll up","Auto","Line totals to Opportunity"]]],
["Quote","Revision Cycle","Revisable","Quote","Create Quote shows an “Opportunity Won” notification. Everything — products, price list, shipping — copies over. Rejected quotes are revised; approved quotes become Orders.",[["Create + Activate Quote","Button","Data auto-copied from Opportunity"],["Rejected → Revise","Button","New Revision ID, editable again"],["Approved → Create Order","Button","Appears in form header"]]],
["Order","Order Processing","Authorized","Order","“Quote Won” notification, then the Order is created with all Quote data. Track requested and fulfilled delivery dates.",[["Create Order","Button","Full Quote data carried forward"],["Delivery Dates","Field","Requested + Fulfilled date"],["Download PDF","Button","Order confirmation document"]]],
["Invoice","Billing","Automated","Invoice","Create Invoice from the Order with billing and shipping info, invoice lines and full financials: subtotal, discount, tax, freight and total.",[["Create Invoice","Button","Order data auto-populated"],["Invoice Lines","Auto","Product, qty, price, amount"],["Download PDF","Button","Invoice document"]]],
["Payment","Cash Collection","Tracked","Payment","Payments are tracked against each Invoice and linked back to the Customer so outstanding balances are always visible — closing the cycle.",[["Record Payment","Manual","Raised against an Invoice"],["Link to Customer","Auto","Via the Invoice"],["Review Balance","View","Outstanding amount visible"]]]];
var tb=$('tabs');
function show(n){[].forEach.call(tb.children,function(c,i){c.className='tab'+(i==n?' on':'')});var s=S[n];
 $('crumb').textContent='▤ Dynamics 365 > BitSquad Sales Suite > '+s[3];$('pt').textContent=s[0]+' · '+s[1];$('pd').textContent=s[4];
 $('steps').innerHTML=s[5].map(function(t,i){return '<div class="step"><div>Step 0'+(i+1)+'<i class="'+(i?'s':'')+'">'+t[1]+'</i></div><strong>'+t[0]+'</strong><span>✓ '+t[2]+'</span></div>'}).join('')}
S.forEach(function(s,i){var b=document.createElement('button');b.className='tab';b.innerHTML='<div class="r"><span>'+(i+1)+' ↗</span><small>'+s[2]+'</small></div><strong>'+s[0]+'</strong><span>'+s[1]+'</span>';b.onclick=function(){show(i)};tb.appendChild(b)});show(0);
var F=[["⚡","Lead Qualification","One click auto-creates Account and Contact and moves the BPF to Develop."],["💲","Live Pricing","Discount, freight and tax calculate instantly; totals roll up automatically."],["🔁","Quote Revisions","Rejected? Revise with a new Revision ID and edit products and pricing again."],["📦","One-Click Order &amp; Invoice","Data auto-copies Quote → Order → Invoice with win notifications."],["📄","Word / PDF Documents","Download PDF on Quote, Order and Invoice from Word Templates."],["⚙️","Power Automate","Approvals, notifications and cross-record creation run automatically."],["✦","AI Assistant · SalesBot","Ask button opens a side panel that summarises the record and answers questions.","hi"],["🛡","5-Role Security","Least-privilege access by Business Unit, ownership and access level."]];
$('feat').innerHTML=F.map(function(f){return '<div class="card '+(f[3]||'')+'"><div class="ic">'+f[0]+'</div><div><h4>'+f[1]+'</h4><p>'+f[2]+'</p></div></div>'}).join('');
var R=[["Sales Representative","User","Day-to-day sales; works mainly with own Leads, Opportunities, Quotes, Orders."],["Sales Supervisor","Business Unit","Team-level oversight; assigns and shares records within the BU."],["Sales Director","Organization","Org-wide pipeline visibility; no CRM configuration rights."],["Sales Member","Read-oriented","Supporting role: view records and products, add notes; no core transactions."],["Sales Administrator","Org + Admin","Manages users, security, solutions and configuration."]];
$('roles').innerHTML=R.map(function(r){return '<div class="role"><h4 style="margin:0">'+r[0]+'</h4><small>'+r[1]+'</small><p>'+r[2]+'</p></div>'}).join('');
var C=[["Capability","Rep","Supervisor","Director","Member","Admin"],["Own sales records","Yes","Yes","Yes","Limited","Yes"],["Team / BU records","No/Limited","Yes","Yes","Read","Yes"],["Organization records","No","No/Limited","Yes","Read","Yes"],["Create records","Yes","Yes","Yes","Restricted","Yes"],["Modify records","Own","BU","Org","Restricted","Org"],["Delete records","Controlled","BU","Org","No","Org"],["Assign / Share","Restricted","BU","Org","No","Yes"],["Product Catalog","Read","Read","Read","Read","Manage"],["CRM Configuration","No","No","No","No","Yes"]];
$('cmp').innerHTML=C.map(function(r,i){return '<tr>'+r.map(function(c){return i?'<td>'+c+'</td>':'<th>'+c+'</th>'}).join('')+'</tr>'}).join('');
var A=[["Data Layer","Lead, Account, Contact, Opportunity, Quote, Order, Invoice + products"],["Process Layer","Single BPF: Qualify → Develop → Propose → Close"],["Automation Layer","Business Rules, Power Automate, JavaScript"],["Presentation Layer","Model-driven forms, Quick View, sub-grids, command bar"],["Document Layer","Word Templates to Word/PDF"],["Security Layer","Roles, Business Units, Access Levels"],["AI Assistant Layer","SalesBot side panel via Ask button"]];
$('arch').innerHTML=A.map(function(a){return '<div><b>'+a[0]+'</b><span>'+a[1]+'</span></div>'}).join('');
var Q=[["What is BitSquad Sales Suite?","A custom Sales Module on Microsoft Dataverse that automates the full cycle: Lead → Opportunity → Quote → Order → Invoice → Payment."],["What happens when a customer rejects a Quote?","A Revise button appears. It creates a new Quote revision with a new Revision ID so products and pricing can be edited again."],["How are PDF documents produced?","Quote, Order and Invoice each have a Download PDF button using Dataverse Word Templates filled with live record data."],["What can the AI assistant do?","Click Ask to open Bitsquad SalesBot in a side panel. It summarises the open record, rewrites answers in your format and answers general questions like “What is D365?”."],["How is data access controlled?","Five roles — Representative, Supervisor, Director, Member and Administrator — using Security Roles, Business Units, ownership and Access Levels. Hierarchy security is not used."],["How is it deployed?","As a Dataverse solution with a publisher prefix, moved across Dev/Test/Prod using solution export/import and environment variables."]];
$('faqs').innerHTML=Q.map(function(q){return '<details><summary>'+q[0]+'</summary><p>'+q[1]+'</p></details>'}).join('');
var cats=['Lead & Opportunity','Quote','Order & Invoice','AI Assistant','Security'];
var items=[
  {t:'BitSquad Logo',           c:'Logo',  img:'images/BitSquadLogo.png'},
  {t:'Lead form',               c:cats[0], img:'images/Lead.png'},
  {t:'Qualify button',          c:cats[0], img:'images/QualifyButton.png'},
  {t:'Opportunity Product tab', c:cats[0], img:'images/OpportunityProductTab.png'},
  {t:'Quick View pricing',      c:cats[0], img:'images/QuickViewPricing.png'},
  {t:'Quote financials',        c:cats[1], img:'images/QuoteFinancials.png'},
  {t:'Quote revision',          c:cats[1], img:'images/QuoteRevision.png'},
  {t:'Order',                   c:cats[2], img:'images/Order.png'},
  {t:'Invoice',                 c:cats[2], img:'images/Invoice.png'},
  {t:'SalesBot side panel',     c:cats[3], img:'images/SalesBotPanel.png'},
  {t:'Security roles',          c:cats[4], img:'images/SecurityRoles.png'}
].filter(function(x){return x.img;}); // if a Web File isn't uploaded yet, set that img back to '' to hide the card
function render(c){$('gal').innerHTML=items.filter(function(x){return c=='All'||x.c==c}).map(function(x){return '<div class="shot"><img alt="'+x.t+'" src="'+x.img+'"><p>'+x.t+' <small style="color:#94a3b8">· '+x.c+'</small></p></div>'}).join('')}
var f=$('flt');['All'].concat(cats).forEach(function(c,i){var b=document.createElement('button');b.textContent=c+(i?'':' (11)');b.className=i?'':'on';b.onclick=function(){[].forEach.call(f.children,function(x){x.className=''});b.className='on';render(c)};f.appendChild(b)});render('All');
$('up').onclick=function(){window.scrollTo({top:0,behavior:'smooth'})};
})();
