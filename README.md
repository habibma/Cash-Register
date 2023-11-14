# Cash-Register
Last test of the freeCodeCamp "JavaScript Algorithms and Data Structures" course

<h2>Question</h2>
<p>Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.</p>

<p>cid is a 2D array listing available currency.</p>

<p>The checkCashRegister() function should always return an object with a status key and a change key:</p>

<p>Return <code>{status: "INSUFFICIENT_FUNDS", change: []}</code> if cash-in-drawer is less than the change due, or if you cannot return the exact change.</p>

<p>Return <code>{status: "CLOSED", change: [...]}</code> with cash-in-drawer as the value for the key change if it is equal to the change due.</p>

<p>Otherwise, return <code>{status: "OPEN", change: [...]}</code>, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.</p>

<table>
  <tr>
    <thead>
      <th>Currency</th>
      <th>Unit	Amount</th>
    </thead>
  </tr>
  <tbody>
    <tr>
      <td>Penny</td>
      <td>$0.01 (PENNY)</td>
    </tr>
    <tr>
      <td>Nickel</td>
      <td>$0.05 (NICKEL)</td>
    </tr>
    <tr>
      <td>Dime</td>
      <td>$0.1 (DIME)</td>
    </tr>
    <tr>
      <td>Quarter</td>
      <td>$0.25 (QUARTER)</td>
    </tr>
    <tr>
      <td>Dollar</td>
      <td>$1 (ONE)</td>
    </tr>
    <tr>
      <td>Five Dollars</td>
      <td>$5 (FIVE)</td>
    </tr>
    <tr>
      <td>Ten Dollars</td>
      <td>$10 (TEN)</td>
    </tr>
    <tr>
      <td>Twenty Dollars</td>
      <td>$20 (TWENTY)</td>
    </tr>
    <tr>
      <td>One-hundred Dollars</td>
      <td>$100 (ONE HUNDRED)</td>
    </tr>

  </tbody>
</table> 

	
See below for an example of a cash-in-drawer array:
<code>
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
</code>

<h2>Solution</h2>
<p> The JS file including descriptive comments is uploaded</p>

