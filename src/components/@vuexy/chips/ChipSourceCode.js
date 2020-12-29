import React from "react"

export const chipsDefault = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import Chip from "./ChipComponent"
import { User } from "react-feather"
class chipDefault extends React.Component {

  render() {
    return(
      <Chip className="mr-1" text="Base Chip" />
      <Chip className="mr-1" avatarText="RX" text="Avatar Text" />
      <Chip className="mr-1" avatarIcon={<User />} text="Avatar Icon" />
      <Chip className="mr-1" avatarImg={chipImg} text="Avatar Image" />
      <Chip text="Chip Closable" closable />
    )}
}
export default chipDefault
`}
    </code>
  </pre>
)

export const chipsColors = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import Chip from "./ChipComponent"
import { User } from "react-feather"
class chipColors extends React.Component {

  render() {
    return(
      <Chip className="mr-1" color="success" avatarText="RX" text="Avatar Text" />
      <Chip className="mr-1" color="info" avatarIcon={<User />} text="Avatar Icon" />
      <Chip className="mr-1" color="warning" avatarImg={chipImg} text="Avatar Image" />
      <Chip color="danger" text="Chip Closable" closable />
    )}
}
export default chipColors
`}
    </code>
  </pre>
)

export const chipsAvatarColors = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import Chip from "./ChipComponent"
import { User } from "react-feather"

class chipAvatarColors extends React.Component {

  render() {
    return(
      <Chip className="mr-1" avatarColor="primary" avatarText="RX" text="Avatar Text" />
      <Chip className="mr-1" avatarColor="success" avatarText="VS" text="Avatar Text" />
      <Chip className="mr-1" avatarColor="info" avatarIcon={<User />} text="Avatar Text" />
      <Chip className="mr-1" avatarColor="danger" avatarIcon={<User />} text="Avatar Text" />
      <Chip avatarColor="warning" avatarIcon={<User />} text="Avatar Text" />
    )}
}
export default chipAvatarColors
`}
    </code>
  </pre>
)

export const chipsIcons = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import Chip from "./ChipComponent"
import { User, Mail, Share, Slash, Battery, Edit } from "react-feather"

class chipIcons extends React.Component {

  render() {
    return(
      <Chip className="mr-1" avatarIcon={<User />} text="User Icon" />
      <Chip className="mr-1" avatarColor="primary" avatarIcon={<Share />} text="Share Icon" />
      <Chip className="mr-1" avatarColor="success" avatarIcon={<Mail />} text="Mail Icon" />
      <Chip className="mr-1" avatarColor="danger" avatarIcon={<Slash />} text="Block Icon" />
      <Chip className="mr-1" avatarColor="warning" avatarIcon={<Battery />} text="Battery Icon" />
      <Chip className="mr-1" avatarColor="info" avatarIcon={<Edit />} text="Edit Icon" />
    )}
}
export default chipIcons
`}
    </code>
  </pre>
)

export const chipsClosable = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import Chip from "./ChipComponent"

class chipClosable extends React.Component {

  render() {
    return(
      <Chip className="mr-1" text="Dribble" closable />
      <Chip className="mr-1" text="Github" closable />
      <Chip className="mr-1" text="Behance" closable />
      <Chip className="mr-1" text="ReactJS" closable />
      <Chip text="Vuexy" closable />
    )}
}
export default chipClosable
`}
    </code>
  </pre>
)

export const chipsClosableIcons = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import Chip from "./ChipComponent"
import { Trash, Trash2, MinusCircle, Delete } from "react-feather"

class ChipClosableIcons extends React.Component {
  render() {
    return(
      <Chip className="mr-1" text="Dribble" closableIcon={<Trash />} closable />
      <Chip className="mr-1" text="Github" closableIcon={<Trash2 />} closable />
      <Chip className="mr-1" text="Behance" closableIcon={<Delete />} closable />
      <Chip className="mr-1" text="ReactJS" closableIcon={<MinusCircle />} closable />
    )}
}
export default ChipClosableIcons
`}
    </code>
  </pre>
)
