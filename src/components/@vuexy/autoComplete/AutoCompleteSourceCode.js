import React from "react"

export const basicExample = (
  <pre>
    <code className="language-jsx">
      {`import React from "react"
import AutoComplete from "./AutoCompleteBasic"

class AutoCompleteBasic extends React.Component {
  state = {
    suggestions: [
      {
        title: "React.js"
      },
      {
        title: "Angular.js"
      },
      {
        title: "Javascript"
      }
      ...
    ]
  }

  render() {
    return(
        <AutoComplete suggestions={this.state.suggestions} 
        className="form-control" 
        filterKey="title" 
        suggestionLimit={4} 
        defaultSuggestions={true}
      />
    )}}

export default AutoCompleteBasic
`}
    </code>
  </pre>
)

export const sectionExample = (
  <pre>
    <code className="language-jsx">
      {`import React from "react"
import AutoComplete from "./AutoCompleteBasic"

class AutoCompleteSections extends React.Component {
  state = {
    suggestions: [
      {
        groupTitle: "1970s",
        data: [
          {
            title: "C",
          }
        ]
      },
      {
        groupTitle: "1980s",
        data: [
          {
            title: "C++",
          },
          {
            title: "Perl",
          }
        ]
      },
      ...
    ]
  }

  render() {
    return(
        <AutoComplete suggestions={this.state.suggestions} 
        suggestions={this.state.suggestions}
        className="form-control"
        filterKey="title"
        filterHeaderKey="groupTitle"
        grouped={true}
      />
    )}}

export default AutoCompleteSections
`}
    </code>
  </pre>
)

export const ajaxExample = (
  <pre>
    <code className="language-jsx">
      {`import React from "react"
import AutoComplete from "./AutoCompleteBasic"

class AutoCompleteAjax extends React.Component {
  state = {
    suggestions: []
  }

  componentDidMount() {
    axios
      .get("/api/autocomplete/data")
      .then(response =>
        this.setState({ suggestions: response.data.autoComplete })
      )
  }

  render() {
    return(
        <AutoComplete suggestions={this.state.suggestions} 
        suggestions={this.state.suggestions}
        className="form-control"
        filterKey="title"
        suggestionLimit={4}
      />
    )}}

export default AutoCompleteAjax
`}
    </code>
  </pre>
)

export const customRenderExample = (
  <pre>
    <code className="language-jsx">
      {`import React from "react"
import AutoComplete from "./AutoCompleteBasic"
import img1 from "../../../assets/img/portrait/small/avatar-s-1.jpg"
import img2 from "../../../assets/img/portrait/small/avatar-s-2.jpg"
import img3 from "../../../assets/img/portrait/small/avatar-s-3.jpg"      
import img4 from "../../../assets/img/portrait/small/avatar-s-4.jpg"      
import img5 from "../../../assets/img/portrait/small/avatar-s-5.jpg"      
import img6 from "../../../assets/img/portrait/small/avatar-s-6.jpg"      

class AutoCompleteRender extends React.Component {
  state = {
    suggestions: [
      {
        name: "Jake Shelton",
        img: img1
      },
      {
        name: "Edith Baldwin",
        img: img2
      },
      {
        name: "Jennifer Wolfe",
        img: img3
      },
      {
        name: "Emily Washington",
        img: img4
      },
      {
        name: "Heather Green",
        img: img6
      },
      {
        name: "Brian Moore",
        img: img5
      }
    ]
  }

  render() {
    return(
        <AutoComplete
          suggestions={this.state.suggestions}
          className="form-control"
          filterKey="name"
          customRender={(
            suggestion,
            i,
            filteredData,
            activeSuggestion,
            onSuggestionItemClick,
            onSuggestionItemHover
          ) => (
            <li
              className={classnames("suggestion-item", {
                active:
                  filteredData.indexOf(suggestion) === activeSuggestion
              })}
              key={i}
              onMouseEnter={() =>
                onSuggestionItemHover(filteredData.indexOf(suggestion))
              }
              onClick={e => {
                onSuggestionItemClick(null, e)
              }}
            >
              <img
                src={suggestion.img}
                alt={suggestion.name}
                height="32"
                width="32"
                className="mr-1"
              />
              <span>{suggestion.name}</span>
            </li>
          )}
        />
    )}}

export default AutoCompleteRender
`}
    </code>
  </pre>
)

export const defaultSuggestionsExample = (
  <pre>
    <code className="language-jsx">
      {`import React from "react"
import AutoComplete from "./AutoCompleteBasic"

class AutoCompleteDefaultSuggestions extends React.Component {
  state = {
    suggestions: [
      {
        title: "React.js"
      },
      {
        title: "Angular.js"
      },
      {
        title: "Javascript"
      }
      ...
    ]
  }

  render() {
    return(
        <AutoComplete
        suggestions={this.state.suggestions}
        className="form-control"
        filterKey="title"
        suggestionLimit={4}
        defaultSuggestions={true}
      />
    )}}

export default AutoCompleteDefaultSuggestions
`}
    </code>
  </pre>
)

export const searchLimitExample = (
  <pre>
    <code className="language-jsx">
      {`import React from "react"
import AutoComplete from "./AutoCompleteBasic"

class AutoCompleteSearchLimit extends React.Component {
  state = {
    suggestions: [
      {
        title: "React.js"
      },
      {
        title: "Angular.js"
      },
      {
        title: "Javascript"
      }
      ...
    ]
  }

  render() {
    return(
        <AutoComplete
        suggestions={this.state.suggestions}
        className="form-control"
        filterKey="title"
        suggestionLimit={2}
      />
    )}}

export default AutoCompleteSearchLimit
`}
    </code>
  </pre>
)
