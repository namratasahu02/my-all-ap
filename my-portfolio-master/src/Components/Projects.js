import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };

    this.chatApplication = () => {
      window.location.assign(
        "https://github.com/namratasahu02/SRV-Media-project-master.git"
      );
    };
    this.calculator = () => {
      window.location.assign(
        "https://github.com/namratasahu02/myhost.git"
      );
    };
    this.portfolio = () => {
      window.location.assign("https://github.com/namratasahu02/SRV-Media-project-master.git");
    };
    this.portfoliolive = () => {
      window.location.assign("https://github.com//namrataportfolio.git");
    };
    this.ecommerce = () => {
      window.location.assign("https://github.com/ismail5g/EasyBazahttps://github.com/namratasahu02/namrata.git");
    };
    this.leavemangement = () => {
      window.location.assign("https://github.com/namratasahu02/Right-Move.git");
    };
    this.crudapplication = () => {
      window.location.assign(
        "https://github.com/namratasahu02/Right-Move.git"
      );
    };
    this.facebook = () => {
      window.location.assign(
        "https://github.com/namratasahu02/Right-Move.git"
      );
    };
    this.toggleCategories = () => {
      if (this.state.activeTab === 0) {
        return (
          <div className="projects-grid">
            {/* Chat-Application */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/chat.png) center / cover",
                }}
              >
                Weather Forecast App 
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a weather forecast app  developed on a running course from
               cybrom teachnology.
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.chatApplication.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Calculator */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/calculator.png) center / cover",
                }}
              >
                Standard Calculator
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a first REACT app i developed. The noobie calculator
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.calculator.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Portfolio */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/portfolio.png) center / cover",
                }}
              >
                Portfolio
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This portfolio designed by REACT JS . And it
                takes 10 days to Complete.
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.portfolio.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      } else if (this.state.activeTab === 1) {
        return (
          <div className="projects-grid">
            {/* Ecom-Application */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/e-commerce.png) center / cover",
                }}
              >
                E-Commerce website
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is an Ecommerce Online Shop developed with html, css, Bootstrap.
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.ecommerce.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
           
          </div>
        );
      }
      if (this.state.activeTab === 2) {
        return (
          <div>
            {/* Store-Procedure */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/store-procedure.png) center / cover",
                }}
              >
         Right move
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
              this is a property aggregator website..
              </CardText>
              <CardActions border>
                <Button style={{ margin: "0 10px" }} raised ripple primary>
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
               
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      } else {
        return (
          <div>
            {/* facebook */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/facebook.jpg) center / cover",
                }}
              >
               Right move
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
              this is a property aggregator website.
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.facebook.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      }
    };
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React JS</Tab>
          <Tab>Html | CSS</Tab>
          <Tab>python</Tab>
         
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
