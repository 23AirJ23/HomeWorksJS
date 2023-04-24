export default class CreateHtmlElement {
  constructor() {}

  static createElement({tag, attrs, props, events}) {
    let el = document.createElement(tag)

    if (attrs) {
      for (const attrKey in attrs) {
        el.setAttribute(attrKey, attrs[attrKey])
      }
    }

    if (props) {
      for (const propKey in props) {
        el[propKey] = props[propKey]
      }
    }

    if (events) {
      for (const eventType in events) {
        el.addEventListener(eventType, events[eventType])
      }
    }
    return el
  }
}
