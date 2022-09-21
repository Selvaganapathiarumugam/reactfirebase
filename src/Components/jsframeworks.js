import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Dashboard from "./header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function jsframework() {
  return (
    <>
      <Dashboard />
      <Paper elevation={3} sx={{ marginTop: "1em" }}>
        <Grid container spacing={2}>
          <Grid item xs={0} sx={{ margin: "auto" }}>
            {/* <ImageList sx={{ width: 300, height: 300 }} cols={1} rowHeight={0}>
                            <ImageListItem>
                                <img src={JS} srcSet={JS} alt='JS' loading='lazy' />
                            </ImageListItem>
                        </ImageList> */}
          </Grid>
        </Grid>
        <Container>
          <Row>
            <Col>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    React
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5, textAlign: "justify" }}
                    color="text.secondary"
                  >
                    React is a free and open-source front-end JavaScript library
                    for building user interfaces based on UI components. It is
                    maintained by Meta and a community of individual developers
                    and companies.React is better than Angular due to it's
                    virtual DOM implementation and rendering optimizations.
                    Migrating between React's versions is quite easy, too;
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    size="small"
                    href="https://reactjs.org/"
                    color="secondary"
                    style={{ borderRadius: 50 }}
                  >
                    Learn More{" "}
                  </Button>
                </CardActions>
              </Card>
            </Col>

            <Col>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Angular
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5, textAlign: "justify" }}
                    color="text.secondary"
                  >
                    Angular is a TypeScript-based free and open-source web
                    application framework led by the Angular Team at Google and
                    by a community of individuals and corporations. Angular is a
                    complete rewrite from the same team that built
                    AngularJS.Angular is a platform and framework for building
                    single-page client applications using HTML and TypeScript.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    size="small"
                    href="https://angular.io/"
                    sx={{
                      background: "red",
                    }}
                    style={{ borderRadius: 50 }}
                  >
                    Learn More{" "}
                  </Button>
                </CardActions>
              </Card>
            </Col>

            <Col>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Next JS
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5, textAlign: "justify" }}
                    color="text.secondary"
                  >
                    It lets you build server-side rendering and static web
                    applications using React. It's a great tool to build your
                    next website. It has many great features and advantages,
                    which can make Nextjs your first option for building your
                    next web application enabling React-based web applications
                    functionalities such as server-side rendering and generating
                    static websites.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Chip
                    label="Learn More"
                    component="a"
                    href="https://nextjs.org/"
                    clickable
                  />
                </CardActions>
              </Card>
            </Col>
          </Row>
          <Row>
            <Grid
              item
              xs={5}
              sx={{
                background: "#e3cbf2",
                color: "#fff",
                marginTop: 1,
              }}
              style={{ borderRadius: 20 }}
            >
              <Typography variant="h5" component="marquee">
                See also this Frameworks
              </Typography>
              <List>
                <ListItem disablePadding>
                  <ListItemButton href="https://vuejs.org/">
                    <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
                    <ListItemText primary="Vue" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton href="https://emberjs.com/">
                    <ListItemIcon>{/* <DraftsIcon /> */}</ListItemIcon>
                    <ListItemText primary="Ember.js" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton href="https://www.meteor.com/">
                    <ListItemIcon>{/* <DraftsIcon /> */}</ListItemIcon>
                    <ListItemText primary="Meteor" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton href="https://backbonejs.org/">
                    <ListItemIcon>{/* <DraftsIcon /> */}</ListItemIcon>
                    <ListItemText primary="Backbone.js" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>
          </Row>
        </Container>
      </Paper>
    </>
  );
}

export default jsframework;
