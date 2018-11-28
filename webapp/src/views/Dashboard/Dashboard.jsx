import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// react plugin for creating charts
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
import LinearProgress from "@material-ui/core/LinearProgress";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0,
    volunteersInterested: 15,
    volunteersEngaged: 85,
    schoolActivity: 35,
    libraryActivity: 50,
    availableOpportunities: [
      ["Middle School", "Ready", "2018-11-20"],
      ["Middle School 2", "Not Ready", "2018-11-20"]
    ]
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  // TODO: GET /volunteer-stats/
  getVolunteerStats = async () => {
    this.setState({
      volunteersInterested: 15,
      volunteersEngaged: 85
    });
  };

  // TODO: GET /currentactivity-stats/
  getActivityStats = async () => {
    this.setState({
      schoolActivity: 15,
      libraryActivity: 85
    });
  };

  // TODO: GET /availabileopps-stats/
  getAvailableOpportunities = async () => {
    this.setState({
      availableOpportunities: [
        ["Middle School", "Ready", "2018-11-20"],
        ["Middle School 2", "Not Ready", "2018-11-20"]
      ]
    });
  };

  async componentDidMount() {
    await Promise.all([
      this.getVolunteerStats(),
      this.getActivityStats(),
      this.getAvailableOpportunities()
    ]);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="warning" stats icon>
                <Link to="/volunteers">
                  <CardIcon color="warning">
                    <Icon>content_copy</Icon>
                  </CardIcon>
                  <p className={classes.cardCategory}>Volunteers Engaged</p>
                  <h3 className={classes.cardTitle}>
                    {this.state.volunteersEngaged}%
                  </h3>
                </Link>
              </CardHeader>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="warning" stats icon>
                <Link to="/volunteers">
                  <CardIcon color="info">
                    <Icon>accessibility</Icon>
                  </CardIcon>
                  <p className={classes.cardCategory}>Volunteers Interested</p>
                  <h3 className={classes.cardTitle}>
                    {this.state.volunteersInterested}%
                  </h3>
                </Link>
              </CardHeader>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="success">
                  <Icon>assignment_ind</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>School Activity</p>
                <h3 className={classes.cardTitle}>
                  <LinearProgress
                    variant="determinate"
                    value={this.state.schoolActivity}
                  />
                </h3>
              </CardHeader>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="danger">
                  <Icon>donut_large</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Library Activity</p>
                <h3 className={classes.cardTitle}>
                  <LinearProgress
                    variant="determinate"
                    value={this.state.libraryActivity}
                  />
                </h3>
              </CardHeader>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Link to="/opportunities">
              <Card>
                <CardHeader color="warning">
                  <h4 className={classes.cardTitleWhite}>
                    Available Opportunities
                  </h4>
                </CardHeader>
                <CardBody>
                  <Table
                    tableHeaderColor="warning"
                    tableHead={["School Name", "Status", "Last Updated"]}
                    tableData={this.state.availableOpportunities}
                  />
                </CardBody>
              </Card>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
