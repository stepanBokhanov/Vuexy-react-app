import React from "react"
import PropTypes from "prop-types"
// eslint-disable-next-line
import prism from "prismjs"

const HELP_MSG = "Select A Node To See Its Data Structure Here..."

const NodeViewer = ({ node }) => {
  let json = JSON.stringify(node, null, 4)
  if (!json) {
    json = HELP_MSG
  }

  return (
    <pre className="mt-0">
      <code className="language-json">{json}</code>
    </pre>
  )
}
NodeViewer.propTypes = {
  node: PropTypes.object
}

export default NodeViewer
