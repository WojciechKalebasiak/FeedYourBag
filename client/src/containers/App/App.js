import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { fetchUser } from "../../actions";
import { connect } from "react-redux";
import Dashboard from "../Dashboard/Dashboard";
import Header from "../Header/Header";
import Home from "../../components/Home/Home";
import SurveyNew from "../surveys/SurveyNew";
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/new-survey" component={SurveyNew} />
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
