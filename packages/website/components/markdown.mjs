import React from 'react'
import ReactMarkdown from 'react-markdown'

export const Markdown = ({ source, ...props }) => {
  return source ? <ReactMarkdown {...props}>{source}</ReactMarkdown> : null
}
