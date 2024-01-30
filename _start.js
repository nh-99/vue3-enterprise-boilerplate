import { dirname } from 'path'
import * as path from 'path'
import * as fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const headRef = fs
  .readFileSync(path.join(__dirname, '.git/HEAD'))
  .toString()
  .trim()
  .match(/^ref: (.+)$/)[1]

const headSha = fs
  .readFileSync(path.join(__dirname, '.git/' + headRef))
  .toString()
  .trim()

const ciBadge =
  '![static-analysis-workflow](https://github.com/nh-99/vue3-enterprise-boilerplate/actions/workflows/static-analysis.yaml/badge.svg)'
const divergeDate = new Date().toString().slice(4, 15)
const compareUrl = `https://github.com/nh-99/vue3-enterprise-boilerplate/compare/${headSha}...master`
const startNote = `**You diverged from the boilerplate on ${divergeDate}. See [what's been added](${compareUrl}) since then.**`

const newReadmeContent = fs
  .readFileSync(path.join(__dirname, 'README.md'))
  .toString()
  .replace(ciBadge, startNote)

fs.writeFileSync(path.join(__dirname, 'README.md'), newReadmeContent)
