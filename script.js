const quotes = [
{
  author: "H.P Lovecraft",
  text:
  "The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown." },

{
  author: "H.P. Lovecraft",
  text:
  "That is not dead which can eternal lie, and with strange aeons even death may die." },

{
  author: "Lovecraft",
  text:
  "We live on a placid island of ignorance in the midst of black seas of the infinity, and it was not meant that we should voyage far." },

{
  author: 'H. "Providence" Lovecraft',
  text:
  "The only saving grace of the present is that it's too damned stupid to question the past very closely." },

{
  author: "H. Lovecraft",
  text: "From even the greatest of horrors irony is seldom absent." }];



let id_timeout;

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/React.createElement(QuoteBox, null);
  }}


class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    let index = Math.floor(Math.random() * quotes.length);
    this.state = {
      last_index: null,
      disp_text: quotes[index].text,
      disp_author: quotes[index].author,
      toggleFade: true };

    this.handleNewQuote = this.handleNewQuote.bind(this);
  }

  handleNewQuote() {
    let index = Math.floor(Math.random() * quotes.length);
    while (index == this.state.last_index) {
      index = Math.floor(Math.random() * quotes.length);
    }
    this.setState(
    prevState => ({
      last_index: index,
      disp_text: quotes[index].text,
      disp_author: quotes[index].author,
      toggleFade: !prevState.toggleFade }),

    () => {
      id_timeout = setTimeout(() => {
        this.setState(prevState => ({
          last_index: prevState.last_index,
          disp_text: prevState.disp_text,
          disp_author: prevState.disp_author,
          toggleFade: !prevState.toggleFade }));

      }, 0);
    });

  }

  componentWillUnmount() {
    clearTimeout(id_timeout);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container-fluid vh-100 vw-100 d-flex justify-content-center align-items-center" }, /*#__PURE__*/
      React.createElement("div", { id: "quote-box", className: "row d-flex justify-content-center w-100" }, /*#__PURE__*/
      React.createElement("div", {
        id: "column",
        className: "col-12 col-sm-12 col-md-10 col-lg-9 col-xl-4 p-5" }, /*#__PURE__*/

      React.createElement("div", {
        id: "quote-txt",
        className: `animate__animated animate__slower ${
        this.state.toggleFade ? "animate__fadeInUp" : "hide"
        }` }, /*#__PURE__*/

      React.createElement("span", { id: "text" }, "\"", this.state.disp_text, "\"")), /*#__PURE__*/

      React.createElement("div", {
        id: "quote-author",
        className: `d-flex justify-content-end mt-2 animate__animated animate__slower animate__delay-3s ${
        this.state.toggleFade ? "animate__fadeIn" : "hide"
        }` }, /*#__PURE__*/

      React.createElement("span", { id: "author", className: "fade-in" }, "-",
      this.state.disp_author)), /*#__PURE__*/


      React.createElement("div", { id: "buttons", className: "d-flex justify-content-between mt-4" }, /*#__PURE__*/
      React.createElement("button", {
        id: "new-quote",
        className: "btn btn-outline-light",
        onClick: this.handleNewQuote,
        disabled: !this.state.toggleFade }, "New Quote", /*#__PURE__*/


      React.createElement("i", { id: "feather-icon", className: "fas fa-feather-alt ml-2" })), /*#__PURE__*/

      React.createElement("a", {
        id: "tweet-quote",
        href: `https://twitter.com/intent/tweet?text="${encodeURIComponent(
        this.state.disp_text)
        }"`,
        target: "_blank",
        title: "Tweet this quote!" }, /*#__PURE__*/

      React.createElement("i", { className: "fab fa-twitter-square fa-lg" })))))));






  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app-container"));