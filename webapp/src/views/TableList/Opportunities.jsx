import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

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
  }
};
const buttons = () => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        key={0}
        style={{ marginRight: 10 }}
      >
        Group
      </Button>
      <Button variant="contained" color="secondary" key={0}>
        Individual
      </Button>
    </div>
  );
};
class Opportunities extends React.Component {
  state = {
    opportunities: [
      ["Middle School", "Ready", "2018-11-20", 2, buttons()],
      ["Middle School 2", "Not Ready", "2018-11-20", 1, buttons()]
    ]
  };

  // TODO: POST /currentactivity-stats/
  getActivityStats = async () => {
    this.setState({
      opportunities: [
        [
          "Middle School",
          "Ready",
          "2018-11-20",
          2,
          <Button variant="contained" color="primary" key={0}>
            Group
          </Button>
        ],
        [
          "Middle School 2",
          "Not Ready",
          "2018-11-20",
          1,
          <Button variant="contained" color="primary" key={1}>
            Group
          </Button>
        ]
      ]
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
              <h4 className={classes.cardTitleWhite}>Opportunities</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={[
                  "Organization Name",
                  "Status",
                  "Last Updated",
                  "# of Volunteers",
                  "Email"
                ]}
                tableData={this.state.opportunities}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}
export default withStyles(styles)(Opportunities);
