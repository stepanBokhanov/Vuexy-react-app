import React, { useState, useEffect } from "react"
import { Card, CardHeader, CardBody, CardTitle } from "reactstrap"
import { useDropzone } from "react-dropzone"

function DropzoneAccepted(props) {
  const [files, setFiles] = useState([])
  const {
    acceptedFiles,
    // rejectedFiles,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: "image/jpeg, image/png",
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )
    }
  })
  const thumbs = files.map(file => (
    <div className="dz-thumb" key={file.name}>
      <div className="dz-thumb-inner">
        <img src={file.preview} className="dz-img" alt={file.name} />
      </div>
    </div>
  ))
  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  const acceptedFilesItems = acceptedFiles.map(file => (
    <aside className="thumb-container mb-1">{thumbs}</aside>
  ))

  // const rejectedFilesItems = rejectedFiles.map(file => (
  //   <div key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </div>
  // ))

  return (
    <section className="pb-1">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p className="mx-1">
          <em>(Only *.jpeg and *.png images will be accepted)</em>
        </p>
      </div>
      <aside>{acceptedFilesItems}</aside>
    </section>
  )
}

class DropzoneAccept extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Specific File Types</CardTitle>
        </CardHeader>
        <CardBody>
          <DropzoneAccepted />
        </CardBody>
      </Card>
    )
  }
}

export default DropzoneAccept
