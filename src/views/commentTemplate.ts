const commentTemplate = `# EXPO Build

{{#each platforms}}
### {{this.name}}

{{this.url}}

\`\`\`
{{this.qr}}
\`\`\`

{{/each}}
`

export default commentTemplate
