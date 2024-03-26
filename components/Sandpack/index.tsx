import { Sandpack } from '@codesandbox/sandpack-react'

function SandpackApp(props) {
  console.log(props)
  return <Sandpack template='vanilla' files={props.files} />
}
export default SandpackApp
