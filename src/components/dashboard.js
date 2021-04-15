import React from "react";
import "../index.css";
import Sidebar from "./sidebar";
import Main from "./main";

class Dashboard extends React.Component {
  state = {
    isBoxVisible: true,
  };

  toggle = () => {
    this.setState((prevState) => ({ isBoxVisible: !prevState.isBoxVisible }));
  };

  render() {
    const { isBoxVisible } = this.state;
    return (
      <section className="w-full  mx-auto flex flex-col sm:flex-row">
          <Main />
          <Sidebar />
      </section>
    );
  }
}

export default Dashboard;
