import React from "react"
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText
} from "reactstrap"
import ExtensionsHeader from "../extensionsHeader"
import Radio from "../../components/@vuexy/radio/RadioVuexy"
import { IntlContext } from "../../utility/context/Internationalization"
import { FormattedMessage } from "react-intl"
class I18nExtension extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ExtensionsHeader
          title="React Intl"
          subTitle="This library provides React components and an API to format dates, numbers, and strings, including pluralization and handling translations."
          link="https://www.npmjs.com/package/react-intl"
        />
        <IntlContext.Consumer>
          {context => {
            return (
              <Row>
                <Col sm="12">
                  <Card>
                    <CardHeader>
                      <CardTitle>Change Locale</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <div className="language-options">
                        <Radio
                          name="i18n-lang-radio"
                          onClick={() => {
                            context.switchLanguage("en")
                          }}
                          label="English"
                          className="mb-1"
                          defaultChecked={
                            context.state.locale === "en" ? true : false
                          }
                        />
                        <Radio
                          name="i18n-lang-radio"
                          onClick={() => {
                            context.switchLanguage("fr")
                          }}
                          label="French"
                          className="mb-1"
                          defaultChecked={
                            context.state.locale === "fr" ? true : false
                          }
                        />
                        <Radio
                          name="i18n-lang-radio"
                          onClick={() => {
                            context.switchLanguage("de")
                          }}
                          label="German"
                          className="mb-1"
                          defaultChecked={
                            context.state.locale === "de" ? true : false
                          }
                        />
                        <Radio
                          name="i18n-lang-radio"
                          onClick={() => {
                            context.switchLanguage("pt")
                          }}
                          label="Portuguese"
                          className="mb-1"
                          defaultChecked={
                            context.state.locale === "pt" ? true : false
                          }
                        />
                      </div>
                      <Card className="border mt-3">
                        <CardHeader>
                          <CardTitle>Card Title</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <CardText>
                            <FormattedMessage id="text" />
                          </CardText>
                        </CardBody>
                      </Card>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            )
          }}
        </IntlContext.Consumer>
      </React.Fragment>
    )
  }
}

export default I18nExtension
