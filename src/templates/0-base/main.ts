import "./style.css";
import { testCases } from "./test-cases";

runAll();

async function runAll() {
  const results = await Promise.all(testCases.map(runTest));

  document.getElementById("app")!.innerHTML = `<table>
    <thead>
      <tr>
        <th>Case</th>
        <th>Expected</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
    ${results.join("")}
    </tbody>
  </table>`;
}

async function runTest(testCase: TestCase) {
  const testCaseBody = testCase.run
    .toString()
    .replace(/^.*\{/, "")
    .replace(/\}$/, "")
    .split("\n")
    .filter((line) => !!line.trim())
    .map(
      (line) =>
        `<pre>${line.replace(/^\s{6}/, "").replaceAll("/* @__PURE__ */ ", "")}</pre>`
    )
    .join("");

  try {
    const result = await testCase.run();
    const success = result === testCase.expected;

    return `<tr>
        <td>${testCaseBody}</td>
        <td>${testCase.expected}</td>
        <td style="color: ${success ? "green" : "red"}">${result}</td>
      </tr>`;
  } catch (e) {
    return `<tr>
        <td>${testCaseBody}</td>
        <td>${testCase.expected}</td>
        <td style="color: red">${(e as Error).name}: ${(e as Error).message}</td>
      </tr>`;
  }
}
