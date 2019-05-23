workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Action for Slack"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  secrets = ["GITHUB_TOKEN"]
  runs = "TEST"
}

action "GitHub Action for Slack" {
  uses = "Ilshidur/action-slack@f37693b4e0589604815219454efd5cb9b404fb85"
  needs = ["GitHub Action for npm"]
  secrets = ["GITHUB_TOKEN"]
}
