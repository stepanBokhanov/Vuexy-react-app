import React from "react"
import { Card, CardHeader, CardBody, CardTitle } from "reactstrap"
import { useDropzone } from "react-dropzone"

function Disabled(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    disabled: true
  })

  const files = acceptedFiles.map(file => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ))

  return (
    <section className="pb-5">
      <div {...getRootProps({ className: "dropzone disabled" })}>
        <input {...getInputProps()} />
        <p className="mx-1">
          Drag 'n' drop some files here, or click to select files
        </p>
      </div>
      <aside>{files}</aside>
    </section>
  )
}
class DropzoneDisabled extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Disabled</CardTitle>
        </CardHeader>
        <CardBody className="pb-3">
          <Disabled />
        </CardBody>
      </Card>
    )
  }
}

export default DropzoneDisabled
