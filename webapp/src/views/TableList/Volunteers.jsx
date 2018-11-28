import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { Grid, Paper } from "@material-ui/core";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  paper: {
    height: 40,
    width: 30
  },
  paperIsAvailable: {
    height: 40,
    width: 30,
    color: "green"
  }
};

const buttons = () => {};

const daysOfWeek = [
  {
    key: 0,
    value: "S"
  },
  {
    key: 1,
    value: "M"
  },
  {
    key: 2,
    value: "T"
  },
  {
    key: 3,
    value: "W"
  },
  {
    key: 4,
    value: "R"
  },
  {
    key: 5,
    value: "F"
  },
  {
    key: 6,
    value: "S"
  }
];

class Volunteers extends React.Component {
  state = {
    volunteers: [
      [
        <Icon key={0} style={{ color: "green" }}>
          check_circle
        </Icon>,
        <div key={0}>
          <Icon key={0}>person</Icon>
          {"James Richardson"}
        </div>,
        "Facilitator",
        "Resume Building",
        <Grid className={{ flexGrow: 1 }} key={0} spacing={16}>
          <Grid item xs={12} key={0}>
            <Grid container key={0}>
              {daysOfWeek.map(({ key, value }) => (
                <Grid key={key} item>
                  {value}
                  <Paper
                    color="green"
                    className={this.props.classes.paperIsAvailable}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      ]
    ]
  };

  // TODO: POST /currentactivity-stats/
  getActivityStats = async () => {
    this.setState({
      volunteers: [["James Richardson", "Facilitator", "Resume Building", ""]]
    });
  };

  async componentDidMount() {}

  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Volunteers</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["", "Name", "Role", "Skills", "Availability"]}
                tableData={this.state.volunteers}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(Volunteers);
