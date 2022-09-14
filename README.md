# github-action-blockless-deploy

Deploy a Blockless Function to the Blockless Network.

### usage

```yaml
- name: Blockless Function Publish
  uses: txlabs/github-action-blockless-deploy@v0.0.1
```

### full example

```yaml
name: Publish to Blockless
on:
  workflow_dispatch:

jobs:
  publish-on-blockless:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Blockless Action Setup
        uses: txlabs/github-action-blockless-setup@v0.0.3
        with:
          BLOCKLESS_ACCESS_TOKEN: ${{ secrets.BLOCKLESS_ACCESS_TOKEN }}
      - name: Blockless Function Publish
        uses: txlabs/github-action-blockless-deploy@v0.0.1
```
