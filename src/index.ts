import path from "path"
import * as core from "@actions/core";
import * as github from "@actions/github";

async function main() {
  const cwd = path.resolve(process.cwd(), core.getInput("root", {}));

  console.log('cwd', cwd)
  console.log('github.context.eventName', github.context.eventName)

  core.setOutput('cid', '{CID}')
  core.setOutput('url', '{URL}')
}

// Execute the main function
main().catch(error => {
  core.setFailed(error)
})