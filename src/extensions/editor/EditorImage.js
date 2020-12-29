import React from "react"
import { Card, CardHeader, CardBody, CardTitle } from "reactstrap"
import { Editor } from "react-draft-wysiwyg"

class EditorImage extends React.Component {
  uploadImageCallBack = file => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open("POST", "https://api.imgur.com/3/image")
      xhr.setRequestHeader("Authorization", "Client-ID 7e1c3e366d22aa3")
      const data = new FormData()
      data.append("image", file)
      xhr.send(data)
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText)
        resolve(response)
      })
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText)
        reject(error)
      })
    })
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Image Upload & Preview</CardTitle>
        </CardHeader>
        <CardBody>
          <Editor
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            toolbar={{
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
              image: {
                uploadCallback: this.uploadImageCallBack,
                previewImage: true,
                alt: { present: true, mandatory: true }
              }
            }}
          />
        </CardBody>
      </Card>
    )
  }
}

export default EditorImage
