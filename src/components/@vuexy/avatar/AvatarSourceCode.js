import React from "react"

export const avatarDefault = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import Avatar from "./Avatar"
import { GitHub } from "react-feather"
import avatarImg from "../../../assets/img/portrait/small/avatar-s-20.jpg"

class AvatarDefault extends React.Component {

  render() {
    return(
      <Avatar className="mr-1" icon={<GitHub />} />
      <Avatar className="mr-1" content="LD" />
      <Avatar className="mr-1" content="Luisd" />
      <Avatar img={avatarImg} />
    )}}

export default AvatarDefault
`}
    </code>
  </pre>
)

export const avatarSizes = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import Avatar from "./Avatar"
import { GitHub } from "react-feather"
import avatarImg from "../../../assets/img/portrait/small/avatar-s-20.jpg"

class AvatarSizes extends React.Component {

  render() {
    return(
        <Avatar className="mr-1" icon={<GitHub />} size="sm" />
        <Avatar className="mr-1" content="LD" />
        <Avatar className="mr-1" img={avatarImg} size="lg" />
        <Avatar img={avatarImg} size="xl" />
    )}
}
export default AvatarSizes
`}
    </code>
  </pre>
)

export const avatarColors = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import Avatar from "./Avatar"
class AvatarColors extends React.Component {

  render() {
    return(
      <Avatar color="primary" className="mr-1" content="R" />
      <Avatar color="success" className="mr-1" content="E" />
      <Avatar color="danger" className="mr-1" content="A" />
      <Avatar color="info" className="mr-1" content="C" />
      <Avatar color="warning" className="mr-1" content="T" />
      <Avatar color="dark" content="X" />
    )}
}
export default AvatarColors
`}
    </code>
  </pre>
)

export const avatarBadge = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import Avatar from "./Avatar"
import { Badge } from "reactstrap"
import { Facebook, Instagram, Twitter } from "react-feather"

class AvatarBadge extends React.Component {

  render() {
    return(
      <Avatar className="mr-1" color="primary" icon={<Facebook />} badgeText="7" badgeColor="danger" badgeUp />
      <Avatar className="mr-1" icon={<Twitter />} color="info" badgeText="6" badgeColor="danger" badgeUp />
      <Avatar icon={<Instagram />} color="success" badgeText="6" badgeColor="danger" badgeUp />
    )}
}
export default AvatarBadge
`}
    </code>
  </pre>
)

export const avatarIcons = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import Avatar from "./Avatar"
import {
  Eye,
  Code,
  GitHub,
  Calendar,
  Inbox,
  Camera,
  Award
} from "react-feather"

class AvatarIcons extends React.Component {

  render() {
    return(
      <Avatar color="primary" className="mr-1" icon={<GitHub />} />
      <Avatar color="success" className="mr-1" icon={<Calendar />} />
      <Avatar color="danger" className="mr-1" icon={<Inbox />} />
      <Avatar color="info" className="mr-1" icon={<Camera />} />
      <Avatar color="warning" icon={<Award />} />
    )}
}
export default AvatarIcons
`}
    </code>
  </pre>
)

export const avatarStatus = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import Avatar from "./Avatar"
import { GitHub } from "react-feather"
import avatarImg from "../../../assets/img/portrait/small/avatar-s-20.jpg"

class AvatarStatus extends React.Component {

  render() {
    return(
      <Avatar className="mr-1" icon={<GitHub />} status="online" />
      <Avatar className="mr-1" content="LD" status="offline" />
      <Avatar className="mr-1" content="Luisd" status="away" />
      <Avatar className="mr-1" img={avatarImg} status="busy" />
    )
  }
}
export default AvatarStatus
`}
    </code>
  </pre>
)
