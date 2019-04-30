workflow "Release" {
  on = "release"
  resolves = ["GraphQL query", "GitHub Action for Google Cloud"]
}

action "GraphQL query" {
  uses = "helaili/github-graphql-action@fb0ce78d56777b082e1a1659faf2b9f5a8832ed3"
}

action "GitHub Action for Google Cloud" {
  uses = "actions/gcloud/cli@ba93088eb19c4a04638102a838312bb32de0b052"
}
