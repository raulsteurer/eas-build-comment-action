import * as core from '@actions/core'
import * as github from '@actions/github'

const comment = async (message: string): Promise<void> => {
  const ghToken = core.getInput('ghToken', {required: true})
  const octokit = github.getOctokit(ghToken)

  try {
    const pr = github.context.payload.pull_request
    if (!pr) {
      core.setFailed('Only works on PR triggers')
      return
    }

    // Get owner and repo from context
    const owner = github.context.repo.owner
    const repo = github.context.repo.repo

    await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number: pr.number,
      body: message
    })
  } catch (error) {
    core.setFailed('Creating comment failed')
  }
}

export default comment
